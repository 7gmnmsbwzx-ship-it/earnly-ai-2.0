-- OAuth Authentication Tables for Vario™

-- Users table (Google Sign-In)
CREATE TABLE IF NOT EXISTS vario_users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    google_id TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    name TEXT,
    picture TEXT,
    locale TEXT DEFAULT 'en',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_login_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    is_active INTEGER DEFAULT 1
);

-- Platform OAuth tokens
CREATE TABLE IF NOT EXISTS platform_oauth_tokens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    platform TEXT NOT NULL, -- 'youtube', 'reddit', 'pinterest', 'twitter', 'instagram', 'tiktok'
    access_token TEXT NOT NULL,
    refresh_token TEXT,
    expires_at DATETIME,
    scope TEXT, -- Comma-separated list of granted scopes
    token_type TEXT DEFAULT 'Bearer',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES vario_users(id) ON DELETE CASCADE,
    UNIQUE(user_id, platform)
);

-- User preferences and settings
CREATE TABLE IF NOT EXISTS vario_user_settings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER UNIQUE NOT NULL,
    theme TEXT DEFAULT 'dark', -- 'dark' or 'light'
    default_platforms TEXT DEFAULT 'youtube,reddit,amazon,pinterest', -- Comma-separated
    auto_connect_platforms INTEGER DEFAULT 1, -- Auto-connect on sign-in
    notifications_enabled INTEGER DEFAULT 1,
    language TEXT DEFAULT 'en',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES vario_users(id) ON DELETE CASCADE
);

-- Saved content
CREATE TABLE IF NOT EXISTS vario_saved_content (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    content_id TEXT NOT NULL, -- External content ID (e.g., 'youtube_abc123')
    platform TEXT NOT NULL,
    title TEXT,
    description TEXT,
    image_url TEXT,
    source_url TEXT,
    metadata TEXT, -- JSON string for additional data
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES vario_users(id) ON DELETE CASCADE,
    UNIQUE(user_id, content_id)
);

-- Custom topics/collections
CREATE TABLE IF NOT EXISTS vario_custom_topics (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    icon TEXT DEFAULT '🚀',
    keywords TEXT, -- Comma-separated
    color TEXT,
    is_public INTEGER DEFAULT 0,
    item_count INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES vario_users(id) ON DELETE CASCADE
);

-- Search history
CREATE TABLE IF NOT EXISTS vario_search_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    query TEXT NOT NULL,
    filters TEXT, -- JSON string for filter settings
    result_count INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES vario_users(id) ON DELETE CASCADE
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_platform_tokens_user ON platform_oauth_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_platform_tokens_platform ON platform_oauth_tokens(platform);
CREATE INDEX IF NOT EXISTS idx_saved_content_user ON vario_saved_content(user_id);
CREATE INDEX IF NOT EXISTS idx_saved_content_platform ON vario_saved_content(platform);
CREATE INDEX IF NOT EXISTS idx_custom_topics_user ON vario_custom_topics(user_id);
CREATE INDEX IF NOT EXISTS idx_search_history_user ON vario_search_history(user_id);
