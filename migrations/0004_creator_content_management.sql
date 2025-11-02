-- Creator Content Management Schema
-- Comprehensive system for content uploads, URL submissions, and social integrations

-- Creator Content Items (unified table for all content types)
CREATE TABLE IF NOT EXISTS creator_content (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  creator_id INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  content_type TEXT NOT NULL, -- 'file_upload', 'url_submission', 'social_import'
  source_type TEXT NOT NULL, -- 'pdf', 'docx', 'txt', 'md', 'json', 'csv', 'image', 'video', 'blog', 'youtube', 'twitter', 'instagram', 'tiktok', 'github', 'medium', 'linkedin', 'rednote'
  
  -- File upload fields
  file_url TEXT, -- Cloudflare R2 URL for uploaded files
  file_size INTEGER, -- Size in bytes
  file_mime_type TEXT,
  file_name TEXT,
  
  -- URL submission fields
  source_url TEXT, -- Original content URL
  platform TEXT, -- Platform name (YouTube, Medium, etc.)
  platform_id TEXT, -- Content ID on the platform
  
  -- Content metadata
  content_text TEXT, -- Extracted/processed text content
  content_data TEXT, -- JSON with additional metadata
  tags TEXT, -- JSON array of tags
  category TEXT,
  language TEXT DEFAULT 'en',
  
  -- Monetization tracking
  status TEXT DEFAULT 'processing', -- 'processing', 'published', 'rejected', 'draft', 'archived'
  quality_score DECIMAL(3,1) DEFAULT 0, -- 0-10 quality rating
  ai_readiness_score DECIMAL(3,1) DEFAULT 0, -- How ready for AI training
  
  -- Analytics
  views_count INTEGER DEFAULT 0,
  interactions_count INTEGER DEFAULT 0,
  earnings_total DECIMAL(10,2) DEFAULT 0,
  last_interaction_at DATETIME,
  
  -- RAG/AI Model fields
  rag_model_id INTEGER, -- Link to RAG model if created
  vector_embeddings_generated BOOLEAN DEFAULT FALSE,
  chunks_count INTEGER DEFAULT 0,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  published_at DATETIME,
  
  FOREIGN KEY (creator_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Social Media Integrations for Creators
CREATE TABLE IF NOT EXISTS creator_integrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  creator_id INTEGER NOT NULL,
  platform TEXT NOT NULL, -- 'twitter', 'instagram', 'tiktok', 'youtube', 'github', 'medium', 'linkedin', 'rednote'
  platform_user_id TEXT, -- User ID on the platform
  platform_username TEXT,
  access_token TEXT, -- Encrypted OAuth token
  refresh_token TEXT,
  token_expires_at DATETIME,
  
  -- Integration settings
  auto_import BOOLEAN DEFAULT FALSE, -- Auto-import new content
  sync_frequency TEXT DEFAULT 'daily', -- 'realtime', 'hourly', 'daily', 'weekly'
  content_types TEXT, -- JSON array of content types to import
  
  -- Stats
  total_imported INTEGER DEFAULT 0,
  last_sync_at DATETIME,
  status TEXT DEFAULT 'active', -- 'active', 'inactive', 'error'
  error_message TEXT,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (creator_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE(creator_id, platform)
);

-- Content Processing Queue
CREATE TABLE IF NOT EXISTS content_processing_queue (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content_id INTEGER NOT NULL,
  processing_stage TEXT DEFAULT 'queued', -- 'queued', 'extracting', 'analyzing', 'vectorizing', 'completed', 'failed'
  progress_percentage INTEGER DEFAULT 0,
  
  -- Processing details
  started_at DATETIME,
  completed_at DATETIME,
  error_message TEXT,
  processing_logs TEXT, -- JSON array of log entries
  
  -- Resource usage
  tokens_used INTEGER DEFAULT 0,
  processing_time_ms INTEGER,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (content_id) REFERENCES creator_content(id) ON DELETE CASCADE
);

-- RAG Models created from content
CREATE TABLE IF NOT EXISTS rag_models (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  creator_id INTEGER NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  version TEXT DEFAULT '1.0',
  
  -- Model configuration
  model_type TEXT DEFAULT 'text', -- 'text', 'code', 'multimodal'
  embedding_model TEXT DEFAULT 'openai-ada-002',
  vector_dimensions INTEGER DEFAULT 1536,
  chunk_size INTEGER DEFAULT 512,
  chunk_overlap INTEGER DEFAULT 50,
  
  -- Content sources
  content_ids TEXT, -- JSON array of content IDs
  documents_count INTEGER DEFAULT 0,
  embeddings_count INTEGER DEFAULT 0,
  total_tokens INTEGER DEFAULT 0,
  
  -- Performance metrics
  accuracy_score DECIMAL(5,2) DEFAULT 0,
  query_volume INTEGER DEFAULT 0,
  monthly_revenue DECIMAL(10,2) DEFAULT 0,
  
  -- Licensing
  status TEXT DEFAULT 'training', -- 'training', 'active', 'paused', 'archived'
  license_type TEXT DEFAULT 'commercial', -- 'commercial', 'research', 'personal'
  price_per_query DECIMAL(10,4) DEFAULT 0.001,
  
  -- Licensees
  active_licenses INTEGER DEFAULT 0,
  licensed_to TEXT, -- JSON array of company names
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  published_at DATETIME,
  
  FOREIGN KEY (creator_id) REFERENCES users(id) ON DELETE CASCADE
);

-- RAG Model Licenses (who licensed what)
CREATE TABLE IF NOT EXISTS rag_licenses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  rag_model_id INTEGER NOT NULL,
  licensee_company TEXT NOT NULL, -- 'OpenAI', 'Anthropic', etc.
  license_type TEXT DEFAULT 'subscription', -- 'subscription', 'one-time', 'usage-based'
  
  -- Pricing
  monthly_fee DECIMAL(10,2) DEFAULT 0,
  per_query_fee DECIMAL(10,4) DEFAULT 0,
  minimum_queries INTEGER DEFAULT 0,
  
  -- Usage tracking
  queries_this_month INTEGER DEFAULT 0,
  revenue_this_month DECIMAL(10,2) DEFAULT 0,
  total_queries INTEGER DEFAULT 0,
  total_revenue DECIMAL(10,2) DEFAULT 0,
  
  -- Contract terms
  start_date DATE NOT NULL,
  end_date DATE,
  status TEXT DEFAULT 'active', -- 'active', 'paused', 'cancelled', 'expired'
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (rag_model_id) REFERENCES rag_models(id) ON DELETE CASCADE
);

-- Content Earnings (detailed revenue tracking per content item)
CREATE TABLE IF NOT EXISTS content_earnings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content_id INTEGER NOT NULL,
  earning_type TEXT NOT NULL, -- 'ai_training', 'license', 'rag_query', 'api_usage'
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  
  -- Transaction details
  paid_by TEXT, -- Company/platform that paid
  transaction_id TEXT,
  description TEXT,
  
  -- Revenue split
  gross_amount DECIMAL(10,2),
  platform_fee DECIMAL(10,2),
  net_amount DECIMAL(10,2),
  
  -- Payment status
  status TEXT DEFAULT 'pending', -- 'pending', 'processing', 'paid', 'failed'
  paid_at DATETIME,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (content_id) REFERENCES creator_content(id) ON DELETE CASCADE
);

-- Content Analytics (daily aggregated stats)
CREATE TABLE IF NOT EXISTS content_analytics (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content_id INTEGER NOT NULL,
  date DATE NOT NULL,
  
  -- Engagement metrics
  views INTEGER DEFAULT 0,
  unique_viewers INTEGER DEFAULT 0,
  ai_queries INTEGER DEFAULT 0,
  api_calls INTEGER DEFAULT 0,
  
  -- Revenue metrics
  revenue DECIMAL(10,2) DEFAULT 0,
  revenue_from_training DECIMAL(10,2) DEFAULT 0,
  revenue_from_queries DECIMAL(10,2) DEFAULT 0,
  revenue_from_licenses DECIMAL(10,2) DEFAULT 0,
  
  -- Performance
  avg_quality_score DECIMAL(3,1) DEFAULT 0,
  avg_response_time_ms INTEGER DEFAULT 0,
  
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (content_id) REFERENCES creator_content(id) ON DELETE CASCADE,
  UNIQUE(content_id, date)
);

-- Creator Payouts
CREATE TABLE IF NOT EXISTS creator_payouts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  creator_id INTEGER NOT NULL,
  
  -- Payout details
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  payout_method TEXT NOT NULL, -- 'bank_transfer', 'paypal', 'stripe', 'crypto'
  
  -- Payment method details
  payment_details TEXT, -- JSON with account info (encrypted)
  
  -- Transaction info
  transaction_id TEXT,
  status TEXT DEFAULT 'pending', -- 'pending', 'processing', 'completed', 'failed'
  
  -- Dates
  requested_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  processed_at DATETIME,
  completed_at DATETIME,
  
  -- Breakdown
  earnings_breakdown TEXT, -- JSON with detailed breakdown
  
  -- Fees
  gross_amount DECIMAL(10,2),
  processing_fee DECIMAL(10,2),
  net_amount DECIMAL(10,2),
  
  notes TEXT,
  
  FOREIGN KEY (creator_id) REFERENCES users(id) ON DELETE CASCADE
);

-- URL Content Import Logs
CREATE TABLE IF NOT EXISTS url_import_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  creator_id INTEGER NOT NULL,
  url TEXT NOT NULL,
  platform TEXT, -- Detected platform
  
  -- Import result
  status TEXT DEFAULT 'pending', -- 'pending', 'success', 'failed', 'invalid_url'
  content_id INTEGER, -- Created content ID if successful
  error_message TEXT,
  
  -- Metadata extracted
  title TEXT,
  author TEXT,
  published_date DATE,
  word_count INTEGER,
  media_count INTEGER,
  
  imported_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (creator_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (content_id) REFERENCES creator_content(id) ON DELETE SET NULL
);

-- Create comprehensive indexes
CREATE INDEX IF NOT EXISTS idx_creator_content_creator ON creator_content(creator_id, status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_creator_content_type ON creator_content(content_type, source_type);
CREATE INDEX IF NOT EXISTS idx_creator_content_status ON creator_content(status, published_at);
CREATE INDEX IF NOT EXISTS idx_creator_integrations_creator ON creator_integrations(creator_id, platform);
CREATE INDEX IF NOT EXISTS idx_processing_queue_status ON content_processing_queue(processing_stage, created_at);
CREATE INDEX IF NOT EXISTS idx_rag_models_creator ON rag_models(creator_id, status);
CREATE INDEX IF NOT EXISTS idx_rag_licenses_model ON rag_licenses(rag_model_id, status);
CREATE INDEX IF NOT EXISTS idx_content_earnings_content ON content_earnings(content_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_content_earnings_status ON content_earnings(status, paid_at);
CREATE INDEX IF NOT EXISTS idx_content_analytics_content ON content_analytics(content_id, date DESC);
CREATE INDEX IF NOT EXISTS idx_creator_payouts_creator ON creator_payouts(creator_id, status, requested_at DESC);
CREATE INDEX IF NOT EXISTS idx_url_import_logs_creator ON url_import_logs(creator_id, imported_at DESC);
