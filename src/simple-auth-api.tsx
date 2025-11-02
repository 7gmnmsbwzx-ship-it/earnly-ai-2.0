import { Hono } from 'hono'
import { setCookie, getCookie, deleteCookie } from 'hono/cookie'

type Bindings = {
  DB: D1Database
}

const simpleAuthAPI = new Hono<{ Bindings: Bindings }>()

// Helper: Hash password (simple SHA-256 for demo)
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

// Helper: Generate random token
function generateToken(): string {
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

// Helper: Verify session
async function verifySession(db: D1Database, sessionToken: string) {
  const session = await db.prepare(`
    SELECT s.*, u.id as user_id, u.email, u.name, u.username
    FROM user_sessions s
    JOIN users u ON s.user_id = u.id
    WHERE s.session_token = ? AND s.expires_at > datetime('now')
  `).bind(sessionToken).first()
  
  if (session) {
    await db.prepare(`
      UPDATE user_sessions 
      SET last_activity_at = datetime('now')
      WHERE session_token = ?
    `).bind(sessionToken).run()
  }
  
  return session
}

// Sign Up
simpleAuthAPI.post('/signup', async (c) => {
  const { env } = c
  try {
    const { email, password, name, username } = await c.req.json()
    
    if (!email || !password || !name) {
      return c.json({ error: 'Email, password, and name are required' }, 400)
    }
    
    if (password.length < 8) {
      return c.json({ error: 'Password must be at least 8 characters' }, 400)
    }
    
    // Check if user exists
    const existing = await env.DB.prepare('SELECT id FROM users WHERE email = ?').bind(email).first()
    if (existing) {
      return c.json({ error: 'User already exists' }, 409)
    }
    
    // Create user
    const passwordHash = await hashPassword(password)
    const result = await env.DB.prepare(`
      INSERT INTO users (email, password_hash, name, username, is_verified)
      VALUES (?, ?, ?, ?, TRUE)
    `).bind(email, passwordHash, name, username || null).run()
    
    const userId = result.meta.last_row_id
    
    // Create session
    const sessionToken = generateToken()
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    
    await env.DB.prepare(`
      INSERT INTO user_sessions (user_id, session_token, expires_at, ip_address, user_agent)
      VALUES (?, ?, ?, ?, ?)
    `).bind(
      userId,
      sessionToken,
      expiresAt.toISOString(),
      c.req.header('cf-connecting-ip') || 'unknown',
      c.req.header('user-agent') || 'unknown'
    ).run()
    
    // Set cookie
    setCookie(c, 'session_token', sessionToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'Lax',
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    })
    
    return c.json({
      success: true,
      user: { id: userId, email, name, username }
    })
  } catch (error: any) {
    return c.json({ error: 'Signup failed', details: error.message }, 500)
  }
})

// Login
simpleAuthAPI.post('/login', async (c) => {
  const { env } = c
  try {
    const { email, password } = await c.req.json()
    
    if (!email || !password) {
      return c.json({ error: 'Email and password required' }, 400)
    }
    
    // Get user
    const user = await env.DB.prepare(`
      SELECT id, email, password_hash, name, username
      FROM users WHERE email = ?
    `).bind(email).first()
    
    if (!user) {
      await env.DB.prepare(`
        INSERT INTO login_attempts (email, ip_address, success, failure_reason)
        VALUES (?, ?, FALSE, 'User not found')
      `).bind(email, c.req.header('cf-connecting-ip') || 'unknown').run()
      
      return c.json({ error: 'Invalid credentials' }, 401)
    }
    
    // Verify password
    const passwordHash = await hashPassword(password)
    if (passwordHash !== user.password_hash) {
      await env.DB.prepare(`
        INSERT INTO login_attempts (email, ip_address, success, failure_reason)
        VALUES (?, ?, FALSE, 'Invalid password')
      `).bind(email, c.req.header('cf-connecting-ip') || 'unknown').run()
      
      return c.json({ error: 'Invalid credentials' }, 401)
    }
    
    // Create session
    const sessionToken = generateToken()
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    
    await env.DB.prepare(`
      INSERT INTO user_sessions (user_id, session_token, expires_at, ip_address, user_agent)
      VALUES (?, ?, ?, ?, ?)
    `).bind(
      user.id,
      sessionToken,
      expiresAt.toISOString(),
      c.req.header('cf-connecting-ip') || 'unknown',
      c.req.header('user-agent') || 'unknown'
    ).run()
    
    // Log success
    await env.DB.prepare(`
      INSERT INTO login_attempts (email, ip_address, success)
      VALUES (?, ?, TRUE)
    `).bind(email, c.req.header('cf-connecting-ip') || 'unknown').run()
    
    // Set cookie
    setCookie(c, 'session_token', sessionToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'Lax',
      maxAge: 30 * 24 * 60 * 60,
      path: '/'
    })
    
    return c.json({
      success: true,
      user: { id: user.id, email: user.email, name: user.name, username: user.username }
    })
  } catch (error: any) {
    return c.json({ error: 'Login failed', details: error.message }, 500)
  }
})

// Logout
simpleAuthAPI.post('/logout', async (c) => {
  const { env } = c
  try {
    const sessionToken = getCookie(c, 'session_token')
    
    if (sessionToken) {
      await env.DB.prepare('DELETE FROM user_sessions WHERE session_token = ?').bind(sessionToken).run()
    }
    
    deleteCookie(c, 'session_token', { path: '/' })
    
    return c.json({ success: true })
  } catch (error: any) {
    return c.json({ error: 'Logout failed' }, 500)
  }
})

// Get current user
simpleAuthAPI.get('/me', async (c) => {
  const { env } = c
  try {
    const sessionToken = getCookie(c, 'session_token')
    
    if (!sessionToken) {
      return c.json({ authenticated: false }, 401)
    }
    
    const session = await verifySession(env.DB, sessionToken)
    
    if (!session) {
      deleteCookie(c, 'session_token', { path: '/' })
      return c.json({ authenticated: false }, 401)
    }
    
    return c.json({
      authenticated: true,
      user: {
        id: session.user_id,
        email: session.email,
        name: session.name,
        username: session.username
      }
    })
  } catch (error: any) {
    return c.json({ authenticated: false }, 500)
  }
})

export { verifySession }
export default simpleAuthAPI
