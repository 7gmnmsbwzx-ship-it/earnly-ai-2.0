/**
 * OAuth Manager Module
 * Handles Google Sign-In and platform OAuth connections
 */

// Platform OAuth configurations
export const PLATFORM_OAUTH_CONFIGS = {
    youtube: {
        authUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
        tokenUrl: 'https://oauth2.googleapis.com/token',
        scopes: [
            'https://www.googleapis.com/auth/youtube.readonly',
            'https://www.googleapis.com/auth/youtube.force-ssl'
        ],
        platform: 'youtube'
    },
    reddit: {
        authUrl: 'https://www.reddit.com/api/v1/authorize',
        tokenUrl: 'https://www.reddit.com/api/v1/access_token',
        scopes: ['identity', 'read', 'history', 'save'],
        platform: 'reddit'
    },
    pinterest: {
        authUrl: 'https://www.pinterest.com/oauth/',
        tokenUrl: 'https://api.pinterest.com/v5/oauth/token',
        scopes: ['boards:read', 'pins:read', 'user_accounts:read'],
        platform: 'pinterest'
    },
    twitter: {
        authUrl: 'https://twitter.com/i/oauth2/authorize',
        tokenUrl: 'https://api.twitter.com/2/oauth2/token',
        scopes: ['tweet.read', 'users.read', 'follows.read'],
        platform: 'twitter'
    },
    instagram: {
        authUrl: 'https://api.instagram.com/oauth/authorize',
        tokenUrl: 'https://api.instagram.com/oauth/access_token',
        scopes: ['user_profile', 'user_media'],
        platform: 'instagram'
    }
};

/**
 * Verify Google ID Token
 */
export async function verifyGoogleToken(idToken: string): Promise<any> {
    try {
        const response = await fetch(
            `https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`
        );
        
        if (!response.ok) {
            throw new Error('Invalid Google token');
        }
        
        const data = await response.json();
        
        // Verify token is for our application
        // In production, check data.aud matches your Google Client ID
        
        return {
            googleId: data.sub,
            email: data.email,
            name: data.name,
            picture: data.picture,
            locale: data.locale
        };
    } catch (error) {
        throw new Error('Token verification failed');
    }
}

/**
 * Create or update user in database
 */
export async function createOrUpdateUser(db: D1Database, userData: any) {
    // Check if user exists
    const existingUser = await db.prepare(
        'SELECT id FROM vario_users WHERE google_id = ?'
    ).bind(userData.googleId).first();
    
    if (existingUser) {
        // Update existing user
        await db.prepare(`
            UPDATE vario_users 
            SET email = ?, name = ?, picture = ?, locale = ?, last_login_at = CURRENT_TIMESTAMP
            WHERE google_id = ?
        `).bind(
            userData.email,
            userData.name,
            userData.picture,
            userData.locale || 'en',
            userData.googleId
        ).run();
        
        return existingUser.id;
    } else {
        // Create new user
        const result = await db.prepare(`
            INSERT INTO vario_users (google_id, email, name, picture, locale)
            VALUES (?, ?, ?, ?, ?)
        `).bind(
            userData.googleId,
            userData.email,
            userData.name,
            userData.picture,
            userData.locale || 'en'
        ).run();
        
        const userId = result.meta.last_row_id;
        
        // Create default settings
        await db.prepare(`
            INSERT INTO vario_user_settings (user_id)
            VALUES (?)
        `).bind(userId).run();
        
        return userId;
    }
}

/**
 * Generate OAuth authorization URL for a platform
 */
export function generateAuthUrl(platform: string, clientId: string, redirectUri: string, state: string): string {
    const config = PLATFORM_OAUTH_CONFIGS[platform];
    if (!config) {
        throw new Error(`Unsupported platform: ${platform}`);
    }
    
    const params = new URLSearchParams({
        client_id: clientId,
        redirect_uri: redirectUri,
        response_type: 'code',
        scope: config.scopes.join(' '),
        state: state,
        access_type: 'offline', // For refresh tokens
        prompt: 'consent'
    });
    
    return `${config.authUrl}?${params.toString()}`;
}

/**
 * Exchange authorization code for access token
 */
export async function exchangeCodeForToken(
    platform: string,
    code: string,
    clientId: string,
    clientSecret: string,
    redirectUri: string
): Promise<any> {
    const config = PLATFORM_OAUTH_CONFIGS[platform];
    if (!config) {
        throw new Error(`Unsupported platform: ${platform}`);
    }
    
    const params = new URLSearchParams({
        code: code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
    });
    
    const response = await fetch(config.tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
    });
    
    if (!response.ok) {
        throw new Error(`Token exchange failed for ${platform}`);
    }
    
    return await response.json();
}

/**
 * Save OAuth token to database
 */
export async function saveOAuthToken(
    db: D1Database,
    userId: number,
    platform: string,
    tokenData: any
) {
    const expiresAt = tokenData.expires_in
        ? new Date(Date.now() + tokenData.expires_in * 1000).toISOString()
        : null;
    
    await db.prepare(`
        INSERT INTO platform_oauth_tokens 
        (user_id, platform, access_token, refresh_token, expires_at, scope, token_type)
        VALUES (?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(user_id, platform) DO UPDATE SET
            access_token = excluded.access_token,
            refresh_token = COALESCE(excluded.refresh_token, refresh_token),
            expires_at = excluded.expires_at,
            scope = excluded.scope,
            updated_at = CURRENT_TIMESTAMP
    `).bind(
        userId,
        platform,
        tokenData.access_token,
        tokenData.refresh_token || null,
        expiresAt,
        tokenData.scope || '',
        tokenData.token_type || 'Bearer'
    ).run();
}

/**
 * Get user's OAuth token for a platform
 */
export async function getUserPlatformToken(
    db: D1Database,
    userId: number,
    platform: string
): Promise<any> {
    const token = await db.prepare(`
        SELECT access_token, refresh_token, expires_at, scope, token_type
        FROM platform_oauth_tokens
        WHERE user_id = ? AND platform = ?
    `).bind(userId, platform).first();
    
    if (!token) {
        return null;
    }
    
    // Check if token is expired
    if (token.expires_at) {
        const expiresAt = new Date(token.expires_at);
        const now = new Date();
        
        if (expiresAt <= now) {
            // Token expired, needs refresh
            return { ...token, expired: true };
        }
    }
    
    return token;
}

/**
 * Refresh expired OAuth token
 */
export async function refreshOAuthToken(
    platform: string,
    refreshToken: string,
    clientId: string,
    clientSecret: string
): Promise<any> {
    const config = PLATFORM_OAUTH_CONFIGS[platform];
    if (!config) {
        throw new Error(`Unsupported platform: ${platform}`);
    }
    
    const params = new URLSearchParams({
        refresh_token: refreshToken,
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'refresh_token'
    });
    
    const response = await fetch(config.tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: params.toString()
    });
    
    if (!response.ok) {
        throw new Error(`Token refresh failed for ${platform}`);
    }
    
    return await response.json();
}

/**
 * Get all connected platforms for a user
 */
export async function getUserConnectedPlatforms(
    db: D1Database,
    userId: number
): Promise<any[]> {
    const platforms = await db.prepare(`
        SELECT platform, expires_at, scope, created_at, updated_at
        FROM platform_oauth_tokens
        WHERE user_id = ?
        ORDER BY platform
    `).bind(userId).all();
    
    return platforms.results.map((p: any) => ({
        platform: p.platform,
        connected: true,
        expiresAt: p.expires_at,
        scope: p.scope,
        connectedAt: p.created_at
    }));
}

/**
 * Disconnect a platform (remove OAuth token)
 */
export async function disconnectPlatform(
    db: D1Database,
    userId: number,
    platform: string
): Promise<void> {
    await db.prepare(`
        DELETE FROM platform_oauth_tokens
        WHERE user_id = ? AND platform = ?
    `).bind(userId, platform).run();
}

/**
 * Generate JWT session token for user
 */
export async function generateSessionToken(userId: number, email: string): Promise<string> {
    // In production, use a proper JWT library
    // For now, creating a simple encoded token
    const payload = {
        userId,
        email,
        iat: Date.now(),
        exp: Date.now() + (7 * 24 * 60 * 60 * 1000) // 7 days
    };
    
    // Base64 encode (in production, use proper JWT signing)
    return btoa(JSON.stringify(payload));
}

/**
 * Verify session token
 */
export function verifySessionToken(token: string): any {
    try {
        const payload = JSON.parse(atob(token));
        
        // Check expiration
        if (payload.exp < Date.now()) {
            throw new Error('Token expired');
        }
        
        return payload;
    } catch (error) {
        throw new Error('Invalid session token');
    }
}
