// Creator Content Management API Endpoints
import { Hono } from 'hono'

type Bindings = {
  DB: D1Database
  R2?: R2Bucket  // Optional R2 bucket for file uploads
}

export const creatorAPI = new Hono<{ Bindings: Bindings }>()

// ============================================================================
// CREATOR CONTENT UPLOAD & MANAGEMENT
// ============================================================================

// Upload content URL (blog post, video, social media post, etc.)
creatorAPI.post('/content/url', async (c) => {
  const { env } = c
  try {
    const { 
      creator_id, 
      url, 
      title, 
      description, 
      category, 
      tags 
    } = await c.req.json()
    
    if (!creator_id || !url) {
      return c.json({ error: 'creator_id and url are required' }, 400)
    }
    
    // Detect platform from URL
    let platform = 'web'
    let source_type = 'blog'
    
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      platform = 'youtube'
      source_type = 'youtube'
    } else if (url.includes('twitter.com') || url.includes('x.com')) {
      platform = 'twitter'
      source_type = 'twitter'
    } else if (url.includes('instagram.com')) {
      platform = 'instagram'
      source_type = 'instagram'
    } else if (url.includes('tiktok.com')) {
      platform = 'tiktok'
      source_type = 'tiktok'
    } else if (url.includes('github.com')) {
      platform = 'github'
      source_type = 'github'
    } else if (url.includes('medium.com')) {
      platform = 'medium'
      source_type = 'blog'
    } else if (url.includes('linkedin.com')) {
      platform = 'linkedin'
      source_type = 'linkedin'
    } else if (url.includes('xiaohongshu.com') || url.includes('rednote')) {
      platform = 'rednote'
      source_type = 'rednote'
    }
    
    // Insert content record
    const result = await env.DB.prepare(`
      INSERT INTO creator_content 
      (creator_id, title, description, content_type, source_type, source_url, platform, category, tags, status)
      VALUES (?, ?, ?, 'url_submission', ?, ?, ?, ?, ?, 'processing')
    `).bind(
      creator_id,
      title || 'Untitled',
      description || '',
      source_type,
      url,
      platform,
      category || 'uncategorized',
      tags ? JSON.stringify(tags) : '[]'
    ).run()
    
    // Add to processing queue
    await env.DB.prepare(`
      INSERT INTO content_processing_queue (content_id, processing_stage)
      VALUES (?, 'queued')
    `).bind(result.meta.last_row_id).run()
    
    // Log the import
    await env.DB.prepare(`
      INSERT INTO url_import_logs (creator_id, url, platform, status, content_id)
      VALUES (?, ?, ?, 'success', ?)
    `).bind(creator_id, url, platform, result.meta.last_row_id).run()
    
    return c.json({
      success: true,
      content_id: result.meta.last_row_id,
      message: 'Content submitted successfully and is being processed'
    })
  } catch (error: any) {
    console.error('URL upload error:', error)
    return c.json({ error: 'Failed to submit URL', details: error.message }, 500)
  }
})

// Get creator's content library
creatorAPI.get('/content/:creatorId', async (c) => {
  const { env } = c
  try {
    const creatorId = c.req.param('creatorId')
    const status = c.req.query('status') || 'all'
    const limit = parseInt(c.req.query('limit') || '50')
    const offset = parseInt(c.req.query('offset') || '0')
    
    let query = `
      SELECT 
        cc.*,
        COALESCE(SUM(ce.amount), 0) as total_earnings,
        COUNT(DISTINCT ce.id) as earnings_count
      FROM creator_content cc
      LEFT JOIN content_earnings ce ON cc.id = ce.content_id
      WHERE cc.creator_id = ?
    `
    
    const params = [creatorId]
    
    if (status !== 'all') {
      query += ' AND cc.status = ?'
      params.push(status)
    }
    
    query += `
      GROUP BY cc.id
      ORDER BY cc.created_at DESC
      LIMIT ? OFFSET ?
    `
    params.push(limit, offset)
    
    const stmt = env.DB.prepare(query)
    const results = await stmt.bind(...params).all()
    
    // Get total count
    const countStmt = env.DB.prepare(`
      SELECT COUNT(*) as total FROM creator_content WHERE creator_id = ?
      ${status !== 'all' ? 'AND status = ?' : ''}
    `)
    const countParams = status !== 'all' ? [creatorId, status] : [creatorId]
    const countResult = await countStmt.bind(...countParams).first()
    
    return c.json({
      success: true,
      total: countResult?.total || 0,
      content: results.results || []
    })
  } catch (error: any) {
    console.error('Get content error:', error)
    return c.json({ error: 'Failed to fetch content', details: error.message }, 500)
  }
})

// Get single content item details
creatorAPI.get('/content/item/:contentId', async (c) => {
  const { env } = c
  try {
    const contentId = c.req.param('contentId')
    
    const content = await env.DB.prepare(`
      SELECT 
        cc.*,
        cpq.processing_stage,
        cpq.progress_percentage,
        cpq.error_message as processing_error
      FROM creator_content cc
      LEFT JOIN content_processing_queue cpq ON cc.id = cpq.content_id
      WHERE cc.id = ?
    `).bind(contentId).first()
    
    if (!content) {
      return c.json({ error: 'Content not found' }, 404)
    }
    
    // Get earnings for this content
    const earnings = await env.DB.prepare(`
      SELECT * FROM content_earnings 
      WHERE content_id = ?
      ORDER BY created_at DESC
      LIMIT 20
    `).bind(contentId).all()
    
    // Get analytics
    const analytics = await env.DB.prepare(`
      SELECT * FROM content_analytics
      WHERE content_id = ?
      ORDER BY date DESC
      LIMIT 30
    `).bind(contentId).all()
    
    return c.json({
      success: true,
      content,
      earnings: earnings.results || [],
      analytics: analytics.results || []
    })
  } catch (error: any) {
    console.error('Get content item error:', error)
    return c.json({ error: 'Failed to fetch content details', details: error.message }, 500)
  }
})

// Update content item
creatorAPI.put('/content/:contentId', async (c) => {
  const { env } = c
  try {
    const contentId = c.req.param('contentId')
    const { title, description, tags, category, status } = await c.req.json()
    
    const updates = []
    const params = []
    
    if (title !== undefined) {
      updates.push('title = ?')
      params.push(title)
    }
    if (description !== undefined) {
      updates.push('description = ?')
      params.push(description)
    }
    if (tags !== undefined) {
      updates.push('tags = ?')
      params.push(JSON.stringify(tags))
    }
    if (category !== undefined) {
      updates.push('category = ?')
      params.push(category)
    }
    if (status !== undefined) {
      updates.push('status = ?')
      params.push(status)
    }
    
    if (updates.length === 0) {
      return c.json({ error: 'No fields to update' }, 400)
    }
    
    updates.push('updated_at = CURRENT_TIMESTAMP')
    params.push(contentId)
    
    await env.DB.prepare(`
      UPDATE creator_content 
      SET ${updates.join(', ')}
      WHERE id = ?
    `).bind(...params).run()
    
    return c.json({ success: true, message: 'Content updated successfully' })
  } catch (error: any) {
    console.error('Update content error:', error)
    return c.json({ error: 'Failed to update content', details: error.message }, 500)
  }
})

// Delete content item
creatorAPI.delete('/content/:contentId', async (c) => {
  const { env } = c
  try {
    const contentId = c.req.param('contentId')
    
    await env.DB.prepare(`
      DELETE FROM creator_content WHERE id = ?
    `).bind(contentId).run()
    
    return c.json({ success: true, message: 'Content deleted successfully' })
  } catch (error: any) {
    console.error('Delete content error:', error)
    return c.json({ error: 'Failed to delete content', details: error.message }, 500)
  }
})

// ============================================================================
// SOCIAL MEDIA INTEGRATIONS
// ============================================================================

// Add social media integration
creatorAPI.post('/integrations', async (c) => {
  const { env } = c
  try {
    const {
      creator_id,
      platform,
      platform_username,
      auto_import,
      sync_frequency
    } = await c.req.json()
    
    if (!creator_id || !platform) {
      return c.json({ error: 'creator_id and platform are required' }, 400)
    }
    
    // Insert or update integration
    const result = await env.DB.prepare(`
      INSERT INTO creator_integrations 
      (creator_id, platform, platform_username, auto_import, sync_frequency, status)
      VALUES (?, ?, ?, ?, ?, 'active')
      ON CONFLICT(creator_id, platform) DO UPDATE SET
        platform_username = excluded.platform_username,
        auto_import = excluded.auto_import,
        sync_frequency = excluded.sync_frequency,
        updated_at = CURRENT_TIMESTAMP
    `).bind(
      creator_id,
      platform,
      platform_username || '',
      auto_import ? 1 : 0,
      sync_frequency || 'daily'
    ).run()
    
    return c.json({
      success: true,
      message: `${platform} integration added successfully`
    })
  } catch (error: any) {
    console.error('Add integration error:', error)
    return c.json({ error: 'Failed to add integration', details: error.message }, 500)
  }
})

// Get creator's integrations
creatorAPI.get('/integrations/:creatorId', async (c) => {
  const { env } = c
  try {
    const creatorId = c.req.param('creatorId')
    
    const integrations = await env.DB.prepare(`
      SELECT * FROM creator_integrations
      WHERE creator_id = ?
      ORDER BY platform
    `).bind(creatorId).all()
    
    return c.json({
      success: true,
      integrations: integrations.results || []
    })
  } catch (error: any) {
    console.error('Get integrations error:', error)
    return c.json({ error: 'Failed to fetch integrations', details: error.message }, 500)
  }
})

// Remove integration
creatorAPI.delete('/integrations/:creatorId/:platform', async (c) => {
  const { env } = c
  try {
    const creatorId = c.req.param('creatorId')
    const platform = c.req.param('platform')
    
    await env.DB.prepare(`
      DELETE FROM creator_integrations
      WHERE creator_id = ? AND platform = ?
    `).bind(creatorId, platform).run()
    
    return c.json({ success: true, message: 'Integration removed successfully' })
  } catch (error: any) {
    console.error('Remove integration error:', error)
    return c.json({ error: 'Failed to remove integration', details: error.message }, 500)
  }
})

// ============================================================================
// CREATOR ANALYTICS & EARNINGS
// ============================================================================

// Get creator dashboard stats
creatorAPI.get('/stats/:creatorId', async (c) => {
  const { env } = c
  try {
    const creatorId = c.req.param('creatorId')
    
    // Total content count
    const contentCount = await env.DB.prepare(`
      SELECT COUNT(*) as total FROM creator_content WHERE creator_id = ?
    `).bind(creatorId).first()
    
    // Total earnings
    const earnings = await env.DB.prepare(`
      SELECT 
        COALESCE(SUM(amount), 0) as total_earnings,
        COUNT(*) as earnings_count
      FROM content_earnings ce
      JOIN creator_content cc ON ce.content_id = cc.id
      WHERE cc.creator_id = ?
    `).bind(creatorId).first()
    
    // Active RAG models
    const ragModels = await env.DB.prepare(`
      SELECT COUNT(*) as total FROM rag_models 
      WHERE creator_id = ? AND status = 'active'
    `).bind(creatorId).first()
    
    // Recent activity
    const recentContent = await env.DB.prepare(`
      SELECT id, title, status, created_at 
      FROM creator_content 
      WHERE creator_id = ?
      ORDER BY created_at DESC
      LIMIT 5
    `).bind(creatorId).all()
    
    return c.json({
      success: true,
      stats: {
        total_content: contentCount?.total || 0,
        total_earnings: earnings?.total_earnings || 0,
        earnings_count: earnings?.earnings_count || 0,
        active_rag_models: ragModels?.total || 0
      },
      recent_content: recentContent.results || []
    })
  } catch (error: any) {
    console.error('Get stats error:', error)
    return c.json({ error: 'Failed to fetch stats', details: error.message }, 500)
  }
})

// Get earnings history
creatorAPI.get('/earnings/:creatorId', async (c) => {
  const { env } = c
  try {
    const creatorId = c.req.param('creatorId')
    const limit = parseInt(c.req.query('limit') || '50')
    const offset = parseInt(c.req.query('offset') || '0')
    
    const earnings = await env.DB.prepare(`
      SELECT 
        ce.*,
        cc.title as content_title,
        cc.source_type
      FROM content_earnings ce
      JOIN creator_content cc ON ce.content_id = cc.id
      WHERE cc.creator_id = ?
      ORDER BY ce.created_at DESC
      LIMIT ? OFFSET ?
    `).bind(creatorId, limit, offset).all()
    
    return c.json({
      success: true,
      earnings: earnings.results || []
    })
  } catch (error: any) {
    console.error('Get earnings error:', error)
    return c.json({ error: 'Failed to fetch earnings', details: error.message }, 500)
  }
})

export default creatorAPI
