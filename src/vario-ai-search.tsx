export function VarioAISearch() {
    return `
    <!DOCTYPE html>
    <html lang="en" class="scroll-smooth">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vario™ AI Search Engine - Discover Everything, Everywhere</title>
        <meta name="description" content="The ultimate AI-powered discovery platform. ChatGPT + Amazon + Pinterest + TikTok + Instagram + Reddit + Twitter + YouTube = Vario™. Smarter, personalized, all-in-one.">
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://getearnly.com/vario">
        <meta property="og:title" content="Vario™ AI Search Engine - Discover Everything, Everywhere">
        <meta property="og:description" content="The ultimate AI-powered discovery platform combining ChatGPT, Amazon, Pinterest, TikTok, Instagram, Reddit, Twitter, and YouTube.">
        <meta property="og:image" content="https://getearnly.com/static/og-vario.png">
        
        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="https://getearnly.com/vario">
        <meta property="twitter:title" content="Vario™ AI Search - All-in-One Discovery Platform">
        <meta property="twitter:description" content="AI-powered search combining ChatGPT, Amazon, social media, and more in one intelligent platform.">
        <meta property="twitter:image" content="https://getearnly.com/static/og-vario.png">
        
        <!-- Additional SEO -->
        <meta name="keywords" content="AI search engine, unified search, ChatGPT search, Amazon search, social media search, intelligent discovery, AI-powered search">
        <meta name="robots" content="index, follow">
        <link rel="canonical" href="https://getearnly.com/vario">
        
        <!-- Favicon -->
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔍</text></svg>">
        
        <!-- Styling -->
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="https://unpkg.com/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"></script>
        
        <style>
            /* Theme Configuration */
            :root {
                --vario-primary: #6366f1;
                --vario-secondary: #8b5cf6;
                --vario-accent: #06b6d4;
                --vario-success: #10b981;
                --vario-warning: #f59e0b;
                --vario-danger: #ef4444;
                --primary-bg: #0f172a;
                --secondary-bg: #1e293b;
                --accent-bg: #334155;
                --card-bg: rgba(255, 255, 255, 0.05);
                --text-primary: #ffffff;
                --text-secondary: #cbd5e1;
                --text-muted: #94a3b8;
                --border-color: rgba(255, 255, 255, 0.1);
                --glass-bg: rgba(255, 255, 255, 0.08);
                --glass-border: rgba(255, 255, 255, 0.15);
            }
            
            [data-theme="light"] {
                --primary-bg: #f8fafc;
                --secondary-bg: #ffffff;
                --accent-bg: #f1f5f9;
                --card-bg: rgba(255, 255, 255, 0.9);
                --text-primary: #0f172a;
                --text-secondary: #475569;
                --text-muted: #64748b;
                --border-color: rgba(0, 0, 0, 0.1);
                --glass-bg: rgba(255, 255, 255, 0.7);
                --glass-border: rgba(0, 0, 0, 0.1);
            }
            
            /* Vario™ Brand Gradients */
            .vario-gradient {
                background: linear-gradient(135deg, var(--vario-primary) 0%, var(--vario-secondary) 50%, var(--vario-accent) 100%);
            }
            
            .vario-gradient-subtle {
                background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%);
            }
            
            .vario-text-gradient {
                background: linear-gradient(135deg, var(--vario-primary) 0%, var(--vario-secondary) 50%, var(--vario-accent) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                display: inline-block;
                padding: 0.1em 0;
                line-height: 1.2;
            }
            
            /* Glass Morphism */
            .glass-card {
                background: var(--glass-bg);
                backdrop-filter: blur(20px);
                border: 1px solid var(--glass-border);
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
            }
            
            .glass-search {
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(30px);
                border: 2px solid rgba(255, 255, 255, 0.2);
                box-shadow: 0 15px 40px 0 rgba(99, 102, 241, 0.3);
            }
            
            /* Interactive Elements */
            .hover-lift {
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .hover-lift:hover {
                transform: translateY(-8px) scale(1.02);
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            }
            
            .pulse-glow {
                animation: pulseGlow 3s ease-in-out infinite;
            }
            
            @keyframes pulseGlow {
                0%, 100% { 
                    box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
                }
                50% { 
                    box-shadow: 0 0 40px rgba(99, 102, 241, 0.6);
                }
            }
            
            /* Search Bar Animation */
            .search-focus {
                transform: scale(1.02);
                box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1), 0 20px 40px -10px rgba(99, 102, 241, 0.3);
            }
            
            /* Content Cards */
            .content-card {
                transition: all 0.3s ease;
                cursor: pointer;
                border: 1px solid var(--border-color);
                background: var(--card-bg);
            }
            
            .content-card:hover {
                transform: translateY(-4px);
                box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2);
                border-color: var(--vario-primary);
            }
            
            /* Platform Icons */
            .platform-icon {
                width: 32px;
                height: 32px;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                font-size: 14px;
            }
            
            .platform-youtube { background: #ff0000; }
            .platform-tiktok { background: #000000; }
            .platform-instagram { background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); }
            .platform-twitter { background: #1da1f2; }
            .platform-reddit { background: #ff4500; }
            .platform-pinterest { background: #bd081c; }
            .platform-amazon { background: #ff9900; }
            .platform-ai { background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); }
            
            /* Topic Tags */
            .topic-tag {
                background: var(--glass-bg);
                border: 1px solid var(--glass-border);
                backdrop-filter: blur(10px);
                transition: all 0.3s ease;
            }
            
            .topic-tag:hover {
                background: var(--vario-primary);
                border-color: var(--vario-primary);
                color: white;
                transform: translateY(-2px);
            }
            
            .topic-tag.selected {
                background: var(--vario-primary);
                border-color: var(--vario-primary);
                color: white;
            }
            
            /* Masonry Layout */
            .masonry-grid {
                column-count: 1;
                column-gap: 1rem;
            }
            
            @media (min-width: 640px) {
                .masonry-grid { column-count: 2; }
            }
            
            @media (min-width: 768px) {
                .masonry-grid { column-count: 3; }
            }
            
            @media (min-width: 1024px) {
                .masonry-grid { column-count: 4; }
            }
            
            .masonry-item {
                display: inline-block;
                width: 100%;
                margin-bottom: 1rem;
                break-inside: avoid;
            }
            
            /* Save Button */
            .save-btn {
                position: absolute;
                top: 12px;
                right: 12px;
                background: rgba(0, 0, 0, 0.7);
                border: none;
                color: white;
                padding: 8px;
                border-radius: 50%;
                cursor: pointer;
                transition: all 0.3s ease;
                backdrop-filter: blur(10px);
            }
            
            .save-btn:hover {
                background: var(--vario-primary);
                transform: scale(1.1);
            }
            
            .save-btn.saved {
                background: var(--vario-success);
            }
            
            /* Results View Toggle Buttons */
            .results-view-btn {
                color: var(--text-muted);
                background: transparent;
                border: none;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .results-view-btn:hover {
                color: var(--text-primary);
                background: rgba(99, 102, 241, 0.1);
            }
            
            .results-view-btn.active {
                color: white !important;
                background: var(--vario-primary) !important;
            }
            
            /* Loading Animation */
            .loading-spinner {
                width: 40px;
                height: 40px;
                border: 4px solid rgba(99, 102, 241, 0.2);
                border-top: 4px solid var(--vario-primary);
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            /* Mobile Responsive */
            @media (max-width: 768px) {
                .search-container {
                    padding: 1rem;
                }
                
                .hero-title {
                    font-size: 2rem;
                }
                
                .platform-grid {
                    grid-template-columns: repeat(4, 1fr);
                    gap: 0.5rem;
                }
            }
        </style>
    </head>
    <body class="font-sans transition-colors duration-300" style="background: linear-gradient(135deg, var(--primary-bg) 0%, var(--secondary-bg) 100%); color: var(--text-primary);">
        
        <!-- Navigation -->
        <nav class="fixed top-0 left-0 right-0 z-50 glass-card">
            <div class="max-w-7xl mx-auto px-6 py-4">
                <div class="flex items-center justify-between">
                    <!-- Logo -->
                    <div class="flex items-center space-x-3">
                        <img src="https://raw.githubusercontent.com/7gmnmsbwzx-ship-it/earnly-assets/main/Vario_Logo-removebg-preview.png" 
                             alt="Vario Logo" 
                             class="h-12 w-auto"
                             onerror="this.onerror=null; this.outerHTML='<div class=\'vario-gradient p-2 rounded-xl\'><i class=\'fas fa-search text-white text-xl\'></i></div>';">
                        <div>
                            <h1 class="text-xl font-bold" style="color: var(--text-primary);">Vario™</h1>
                            <p class="text-xs" style="color: var(--text-muted);">AI Search Engine</p>
                        </div>
                    </div>
                    
                    <!-- Navigation Links -->
                    <div class="hidden md:flex items-center space-x-6">
                        <a href="#search" class="nav-link active">Search</a>
                        <a href="#for-you" class="nav-link">For You</a>
                        <a href="#topics" class="nav-link">Topics</a>
                        <a href="#saved" class="nav-link">Saved</a>
                    </div>
                    
                    <!-- User Actions -->
                    <div class="flex items-center space-x-4">
                        <!-- Theme Toggle -->
                        <button class="theme-toggle" onclick="toggleTheme()" title="Toggle theme">
                            <i class="fas fa-moon theme-icon dark"></i>
                            <i class="fas fa-sun theme-icon light hidden"></i>
                        </button>
                        
                        <!-- Sign In Button (shown when not authenticated) -->
                        <div id="topNavSignIn" class="hidden">
                            <button 
                                onclick="handleGoogleSignIn()"
                                class="flex items-center space-x-2 px-4 py-2 rounded-lg vario-gradient text-white font-semibold hover:scale-105 transition-transform"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="white" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="white" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="white" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                    <path fill="white" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                                <span class="hidden sm:inline">Sign In</span>
                            </button>
                        </div>
                        
                        <!-- User Profile (shown when authenticated) -->
                        <div id="topNavUserProfile" class="hidden relative">
                            <button 
                                id="userMenuButton"
                                onclick="toggleUserMenu()"
                                class="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors"
                            >
                                <img id="topNavUserAvatar" src="https://page.gensparksite.com/v1/base64_upload/90026a44a26b2dfe7a63d303273598c4" 
                                     alt="Profile" class="w-9 h-9 rounded-full border-2 border-white/20">
                                <span id="topNavUserName" class="hidden sm:block text-sm font-medium" style="color: var(--text-primary);">User</span>
                                <i class="fas fa-chevron-down text-xs" style="color: var(--text-muted);"></i>
                            </button>
                            
                            <!-- Dropdown Menu -->
                            <div id="userDropdownMenu" class="hidden absolute right-0 mt-2 w-64 glass-card rounded-xl shadow-2xl overflow-hidden">
                                <div class="p-4 border-b" style="border-color: var(--border-color);">
                                    <div class="flex items-center space-x-3">
                                        <img id="dropdownUserAvatar" src="https://page.gensparksite.com/v1/base64_upload/90026a44a26b2dfe7a63d303273598c4" 
                                             alt="Profile" class="w-12 h-12 rounded-full">
                                        <div class="flex-1 min-w-0">
                                            <div id="dropdownUserName" class="font-semibold truncate" style="color: var(--text-primary);">User</div>
                                            <div id="dropdownUserEmail" class="text-xs truncate" style="color: var(--text-muted);">user@example.com</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="p-2">
                                    <button 
                                        onclick="showAccountSettings()"
                                        class="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-left"
                                    >
                                        <i class="fas fa-user-cog" style="color: var(--vario-accent);"></i>
                                        <span style="color: var(--text-primary);">Account Settings</span>
                                    </button>
                                    <button 
                                        onclick="showConnectedPlatforms()"
                                        class="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-left"
                                    >
                                        <i class="fas fa-link" style="color: var(--vario-accent);"></i>
                                        <span style="color: var(--text-primary);">Connected Platforms</span>
                                    </button>
                                    <button 
                                        onclick="showSection('saved')"
                                        class="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-left"
                                    >
                                        <i class="fas fa-heart" style="color: var(--vario-accent);"></i>
                                        <span style="color: var(--text-primary);">Saved Content</span>
                                    </button>
                                </div>
                                
                                <div class="p-2 border-t" style="border-color: var(--border-color);">
                                    <button 
                                        onclick="handleSignOut(); toggleUserMenu();"
                                        class="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-red-500/20 transition-colors text-left"
                                    >
                                        <i class="fas fa-sign-out-alt" style="color: var(--vario-danger);"></i>
                                        <span style="color: var(--vario-danger);">Sign Out</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Mobile Navigation -->
                <div class="md:hidden flex justify-center mt-4 space-x-6">
                    <a href="#search" class="nav-link active text-sm">Search</a>
                    <a href="#for-you" class="nav-link text-sm">For You</a>
                    <a href="#topics" class="nav-link text-sm">Topics</a>
                    <a href="#saved" class="nav-link text-sm">Saved</a>
                </div>
            </div>
        </nav>
        
        <!-- Main Content -->
        <main class="pt-24 pb-16">
            <!-- Hero Search Section -->
            <section id="search" class="min-h-screen flex items-center justify-center px-6">
                <div class="w-full max-w-5xl text-center">
                    <!-- Hero Title -->
                    <div class="mb-8 overflow-visible">
                        <h1 class="hero-title text-4xl md:text-6xl font-bold mb-4 vario-text-gradient leading-tight">
                            Discover Everything,<br>Everywhere
                        </h1>
                        <p class="text-lg md:text-xl" style="color: var(--text-secondary);">
                            The AI that combines ChatGPT + Amazon + Pinterest + TikTok + Instagram + Reddit + Twitter + YouTube
                        </p>
                        <p class="text-sm mt-2 opacity-75" style="color: var(--text-muted);">
                            Smarter, personalized, all-in-one discovery powered by Earnly
                        </p>
                    </div>
                    
                    <!-- Main Search Bar -->
                    <div class="search-container mb-8">
                        <div class="relative">
                            <div class="glass-search rounded-2xl p-6 pulse-glow">
                                <div class="flex items-center space-x-4">
                                    <div class="vario-gradient p-3 rounded-xl">
                                        <i class="fas fa-brain text-white text-xl"></i>
                                    </div>
                                    <div class="flex-1">
                                        <input 
                                            type="text" 
                                            id="mainSearch"
                                            placeholder="Ask anything... find products, videos, posts, answers, trends..."
                                            class="w-full text-lg bg-transparent border-none outline-none placeholder-gray-400"
                                            style="color: var(--text-primary);"
                                            onfocus="this.parentElement.parentElement.parentElement.classList.add('search-focus')"
                                            onblur="this.parentElement.parentElement.parentElement.classList.remove('search-focus')"
                                        >
                                    </div>
                                    <button 
                                        onclick="performSearch()"
                                        class="vario-gradient text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform"
                                    >
                                        <i class="fas fa-search mr-2"></i>
                                        Search
                                    </button>
                                </div>
                                
                                <!-- Quick Filters -->
                                <div class="flex flex-wrap gap-2 mt-4">
                                    <button class="topic-tag px-3 py-1 rounded-full text-sm" onclick="setSearchFilter(event, 'products')">
                                        🛍️ Products
                                    </button>
                                    <button class="topic-tag px-3 py-1 rounded-full text-sm" onclick="setSearchFilter(event, 'videos')">
                                        🎬 Videos
                                    </button>
                                    <button class="topic-tag px-3 py-1 rounded-full text-sm" onclick="setSearchFilter(event, 'posts')">
                                        📱 Social Posts
                                    </button>
                                    <button class="topic-tag px-3 py-1 rounded-full text-sm" onclick="setSearchFilter(event, 'answers')">
                                        💡 AI Answers
                                    </button>
                                    <button class="topic-tag px-3 py-1 rounded-full text-sm" onclick="setSearchFilter(event, 'trends')">
                                        📈 Trends
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Platform Integration -->
                    <div class="mb-12">
                        <p class="text-sm mb-4" style="color: var(--text-muted);">Search across all platforms simultaneously</p>
                        <div class="platform-grid grid grid-cols-8 gap-4 max-w-2xl mx-auto">
                            <div class="platform-icon platform-ai" title="AI Answers">AI</div>
                            <div class="platform-icon platform-amazon" title="Amazon Products">🛒</div>
                            <div class="platform-icon platform-youtube" title="YouTube">📺</div>
                            <div class="platform-icon platform-tiktok" title="TikTok">🎵</div>
                            <div class="platform-icon platform-instagram" title="Instagram">📷</div>
                            <div class="platform-icon platform-reddit" title="Reddit">💬</div>
                            <div class="platform-icon platform-twitter" title="Twitter">🐦</div>
                            <div class="platform-icon platform-pinterest" title="Pinterest">📌</div>
                        </div>
                    </div>
                    
                    <!-- Trending Topics -->
                    <div class="glass-card rounded-2xl p-6">
                        <h3 class="text-lg font-semibold mb-4" style="color: var(--text-primary);">🔥 Trending Now</h3>
                        <div class="flex flex-wrap gap-2 justify-center">
                            <button class="topic-tag px-4 py-2 rounded-full text-sm hover-lift" onclick="searchTopic('AI productivity tools')">
                                AI Productivity Tools
                            </button>
                            <button class="topic-tag px-4 py-2 rounded-full text-sm hover-lift" onclick="searchTopic('sustainable fashion')">
                                Sustainable Fashion
                            </button>
                            <button class="topic-tag px-4 py-2 rounded-full text-sm hover-lift" onclick="searchTopic('home automation')">
                                Home Automation
                            </button>
                            <button class="topic-tag px-4 py-2 rounded-full text-sm hover-lift" onclick="searchTopic('crypto investing')">
                                Crypto Investing
                            </button>
                            <button class="topic-tag px-4 py-2 rounded-full text-sm hover-lift" onclick="searchTopic('plant-based recipes')">
                                Plant-Based Recipes
                            </button>
                            <button class="topic-tag px-4 py-2 rounded-full text-sm hover-lift" onclick="searchTopic('remote work setup')">
                                Remote Work Setup
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Search Results Section -->
            <section id="searchResults" class="hidden px-6">
                <div class="max-w-7xl mx-auto">
                    <!-- Results Header -->
                    <div class="flex items-center justify-between mb-6">
                        <div>
                            <h2 class="text-2xl font-bold" style="color: var(--text-primary);">Search Results</h2>
                            <p class="text-sm" style="color: var(--text-muted);" id="resultsCount">Loading...</p>
                        </div>
                        
                        <div class="flex items-center space-x-4">
                            <!-- Sort Options -->
                            <select class="glass-card px-4 py-2 rounded-lg border-0 text-sm" style="background: var(--glass-bg); color: var(--text-primary);">
                                <option>Most Relevant</option>
                                <option>Most Recent</option>
                                <option>Most Popular</option>
                                <option>Highest Rated</option>
                            </select>
                            
                            <!-- View Toggle -->
                            <div class="flex rounded-lg p-1" style="background: var(--accent-bg);">
                                <button type="button" onclick="setResultsView(event, 'grid')" class="results-view-btn active px-3 py-1 rounded transition-colors" title="Grid view" aria-label="Grid view">
                                    <i class="fas fa-th" style="pointer-events: none;"></i>
                                </button>
                                <button type="button" onclick="setResultsView(event, 'list')" class="results-view-btn px-3 py-1 rounded transition-colors" title="List view" aria-label="List view">
                                    <i class="fas fa-list" style="pointer-events: none;"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Loading State -->
                    <div id="loadingResults" class="flex justify-center items-center py-16">
                        <div class="loading-spinner"></div>
                    </div>
                    
                    <!-- Results Grid -->
                    <div id="resultsGrid" class="masonry-grid hidden">
                        <!-- Results will be populated here -->
                    </div>
                </div>
            </section>
            
            <!-- For You Section -->
            <section id="for-you" class="hidden px-6 py-16">
                <div class="max-w-7xl mx-auto">
                    <!-- Header -->
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-bold mb-4 vario-text-gradient">For You</h2>
                        <p class="text-lg" style="color: var(--text-secondary);">
                            Personalized discoveries based on your interests and behavior
                        </p>
                    </div>
                    
                    <!-- Interest Categories -->
                    <div class="mb-8">
                        <h3 class="text-xl font-semibold mb-4" style="color: var(--text-primary);">Your Interests</h3>
                        <div class="flex flex-wrap gap-3">
                            <div class="topic-tag selected px-4 py-2 rounded-full cursor-pointer">
                                Technology
                                <button class="ml-2 text-red-400 hover:text-red-300" onclick="removeInterest(this)">×</button>
                            </div>
                            <div class="topic-tag selected px-4 py-2 rounded-full cursor-pointer">
                                Design
                                <button class="ml-2 text-red-400 hover:text-red-300" onclick="removeInterest(this)">×</button>
                            </div>
                            <div class="topic-tag selected px-4 py-2 rounded-full cursor-pointer">
                                Fitness
                                <button class="ml-2 text-red-400 hover:text-red-300" onclick="removeInterest(this)">×</button>
                            </div>
                            <button class="topic-tag px-4 py-2 rounded-full cursor-pointer border-2 border-dashed" onclick="addInterest()">
                                + Add Interest
                            </button>
                        </div>
                    </div>
                    
                    <!-- Personalized Feed -->
                    <div class="masonry-grid" id="forYouFeed">
                        <!-- Personalized content will be loaded here -->
                    </div>
                </div>
            </section>
            
            <!-- Topics Section -->
            <section id="topics" class="hidden px-6 py-16">
                <div class="max-w-7xl mx-auto">
                    <!-- Header -->
                    <div class="flex items-center justify-between mb-8">
                        <div>
                            <h2 class="text-3xl font-bold mb-2 vario-text-gradient">Discovery Topics</h2>
                            <p class="text-lg" style="color: var(--text-secondary);">Explore curated topics and create your own</p>
                        </div>
                        
                        <button onclick="createCustomTopic()" class="vario-gradient text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform">
                            <i class="fas fa-plus mr-2"></i>
                            Create Topic
                        </button>
                    </div>
                    
                    <!-- Topic Categories -->
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        <!-- Technology -->
                        <div class="glass-card rounded-xl p-6 hover-lift cursor-pointer" onclick="exploreTopic('technology')">
                            <div class="flex items-center mb-4">
                                <div class="vario-gradient p-3 rounded-lg mr-4">
                                    <i class="fas fa-microchip text-white"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-lg" style="color: var(--text-primary);">Technology</h3>
                                    <p class="text-sm" style="color: var(--text-muted);">12.5K posts</p>
                                </div>
                            </div>
                            <p class="text-sm mb-4" style="color: var(--text-secondary);">
                                Latest in AI, gadgets, software, and digital innovation
                            </p>
                            <div class="flex flex-wrap gap-2">
                                <span class="topic-tag px-2 py-1 rounded text-xs">AI</span>
                                <span class="topic-tag px-2 py-1 rounded text-xs">Gadgets</span>
                                <span class="topic-tag px-2 py-1 rounded text-xs">Software</span>
                            </div>
                        </div>
                        
                        <!-- Fashion & Style -->
                        <div class="glass-card rounded-xl p-6 hover-lift cursor-pointer" onclick="exploreTopic('fashion')">
                            <div class="flex items-center mb-4">
                                <div class="vario-gradient p-3 rounded-lg mr-4">
                                    <i class="fas fa-tshirt text-white"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-lg" style="color: var(--text-primary);">Fashion & Style</h3>
                                    <p class="text-sm" style="color: var(--text-muted);">8.7K posts</p>
                                </div>
                            </div>
                            <p class="text-sm mb-4" style="color: var(--text-secondary);">
                                Trends, outfits, styling tips, and sustainable fashion
                            </p>
                            <div class="flex flex-wrap gap-2">
                                <span class="topic-tag px-2 py-1 rounded text-xs">Trends</span>
                                <span class="topic-tag px-2 py-1 rounded text-xs">Outfits</span>
                                <span class="topic-tag px-2 py-1 rounded text-xs">Sustainable</span>
                            </div>
                        </div>
                        
                        <!-- Food & Cooking -->
                        <div class="glass-card rounded-xl p-6 hover-lift cursor-pointer" onclick="exploreTopic('food')">
                            <div class="flex items-center mb-4">
                                <div class="vario-gradient p-3 rounded-lg mr-4">
                                    <i class="fas fa-utensils text-white"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-lg" style="color: var(--text-primary);">Food & Cooking</h3>
                                    <p class="text-sm" style="color: var(--text-muted);">15.2K posts</p>
                                </div>
                            </div>
                            <p class="text-sm mb-4" style="color: var(--text-secondary);">
                                Recipes, cooking tips, restaurant reviews, and food trends
                            </p>
                            <div class="flex flex-wrap gap-2">
                                <span class="topic-tag px-2 py-1 rounded text-xs">Recipes</span>
                                <span class="topic-tag px-2 py-1 rounded text-xs">Restaurants</span>
                                <span class="topic-tag px-2 py-1 rounded text-xs">Healthy</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Custom Topics -->
                    <div>
                        <h3 class="text-xl font-semibold mb-4" style="color: var(--text-primary);">Your Custom Topics</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="customTopics">
                            <!-- Custom topics will be loaded here -->
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Saved Section -->
            <section id="saved" class="hidden px-6 py-16">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl font-bold mb-4 vario-text-gradient">Saved Items</h2>
                        <p class="text-lg" style="color: var(--text-secondary);">
                            Your collection of saved discoveries
                        </p>
                    </div>
                    
                    <!-- Saved Collections -->
                    <div class="mb-8">
                        <div class="flex items-center justify-between mb-4">
                            <h3 class="text-xl font-semibold" style="color: var(--text-primary);">Collections</h3>
                            <button onclick="createCollection()" class="vario-gradient text-white px-4 py-2 rounded-lg text-sm">
                                + New Collection
                            </button>
                        </div>
                        
                        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            <div class="glass-card rounded-lg p-4 text-center cursor-pointer hover-lift">
                                <div class="text-2xl mb-2">💡</div>
                                <div class="text-sm font-semibold" style="color: var(--text-primary);">Ideas</div>
                                <div class="text-xs" style="color: var(--text-muted);">24 items</div>
                            </div>
                            
                            <div class="glass-card rounded-lg p-4 text-center cursor-pointer hover-lift">
                                <div class="text-2xl mb-2">🛍️</div>
                                <div class="text-sm font-semibold" style="color: var(--text-primary);">Wishlist</div>
                                <div class="text-xs" style="color: var(--text-muted);">18 items</div>
                            </div>
                            
                            <div class="glass-card rounded-lg p-4 text-center cursor-pointer hover-lift">
                                <div class="text-2xl mb-2">📚</div>
                                <div class="text-sm font-semibold" style="color: var(--text-primary);">Learning</div>
                                <div class="text-xs" style="color: var(--text-muted);">12 items</div>
                            </div>
                            
                            <div class="glass-card rounded-lg p-4 text-center cursor-pointer hover-lift">
                                <div class="text-2xl mb-2">🍳</div>
                                <div class="text-sm font-semibold" style="color: var(--text-primary);">Recipes</div>
                                <div class="text-xs" style="color: var(--text-muted);">31 items</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Saved Items Grid -->
                    <div class="masonry-grid" id="savedItemsGrid">
                        <!-- Saved items will be loaded here -->
                    </div>
                </div>
            </section>
        </main>
        
        <!-- Custom Topic Creation Modal -->
        <div id="topicModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 hidden">
            <div class="glass-card rounded-2xl max-w-md w-full mx-4 p-6">
                <div class="flex items-center justify-between mb-6">
                    <h3 class="text-xl font-bold" style="color: var(--text-primary);">Create Custom Topic</h3>
                    <button onclick="closeTopicModal()" class="text-gray-400 hover:text-white">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <form id="topicForm" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium mb-2" style="color: var(--text-secondary);">Topic Name</label>
                        <input type="text" id="topicName" class="w-full p-3 rounded-lg border-0 glass-card" style="color: var(--text-primary);" placeholder="e.g., Sustainable Tech">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium mb-2" style="color: var(--text-secondary);">Description</label>
                        <textarea id="topicDescription" class="w-full p-3 rounded-lg border-0 glass-card" style="color: var(--text-primary);" rows="3" placeholder="Describe what this topic covers..."></textarea>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium mb-2" style="color: var(--text-secondary);">Keywords (comma separated)</label>
                        <input type="text" id="topicKeywords" class="w-full p-3 rounded-lg border-0 glass-card" style="color: var(--text-primary);" placeholder="keyword1, keyword2, keyword3">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium mb-2" style="color: var(--text-secondary);">Icon</label>
                        <div class="grid grid-cols-8 gap-2">
                            <button type="button" class="topic-icon-btn p-2 rounded-lg glass-card text-center" data-icon="🚀">🚀</button>
                            <button type="button" class="topic-icon-btn p-2 rounded-lg glass-card text-center" data-icon="💡">💡</button>
                            <button type="button" class="topic-icon-btn p-2 rounded-lg glass-card text-center" data-icon="🎨">🎨</button>
                            <button type="button" class="topic-icon-btn p-2 rounded-lg glass-card text-center" data-icon="🏃">🏃</button>
                            <button type="button" class="topic-icon-btn p-2 rounded-lg glass-card text-center" data-icon="📱">📱</button>
                            <button type="button" class="topic-icon-btn p-2 rounded-lg glass-card text-center" data-icon="🍕">🍕</button>
                            <button type="button" class="topic-icon-btn p-2 rounded-lg glass-card text-center" data-icon="✈️">✈️</button>
                            <button type="button" class="topic-icon-btn p-2 rounded-lg glass-card text-center" data-icon="🎵">🎵</button>
                        </div>
                    </div>
                    
                    <div class="flex space-x-4 pt-4">
                        <button type="button" onclick="closeTopicModal()" class="flex-1 py-3 rounded-lg border glass-card" style="color: var(--text-secondary);">
                            Cancel
                        </button>
                        <button type="submit" class="flex-1 py-3 rounded-lg vario-gradient text-white font-semibold">
                            Create Topic
                        </button>
                    </div>
                </form>
            </div>
        </div>
        
        <!-- Platform Connections Modal -->
        <div id="platformConnectionsModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4" style="background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(10px);">
            <div class="glass-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto relative">
                <div class="sticky top-0 glass-card p-6 border-b" style="border-color: var(--border-color); z-index: 10;">
                    <div class="flex items-center justify-between">
                        <h2 class="text-2xl font-bold vario-text-gradient">Connected Platforms</h2>
                        <button onclick="closePlatformConnectionsModal()" class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                            <i class="fas fa-times" style="color: var(--text-muted);"></i>
                        </button>
                    </div>
                </div>
                
                <div class="p-6">
                    <!-- Google Sign-In Button -->
                    <div id="googleSignInContainer" class="mb-6">
                        <button 
                            id="googleSignInBtn"
                            class="w-full glass-card rounded-xl p-4 flex items-center justify-center space-x-3 hover-lift cursor-pointer border-2"
                            style="border-color: var(--vario-accent);"
                            onclick="handleGoogleSignIn()"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            <span class="font-semibold" style="color: var(--text-primary);">Sign in with Google</span>
                        </button>
                    </div>

                    <!-- User Profile (shown after sign-in) -->
                    <div id="userProfileContainer" class="hidden mb-6">
                        <div class="glass-card rounded-xl p-4 flex items-center justify-between">
                            <div class="flex items-center space-x-3">
                                <img id="userAvatar" src="" alt="Avatar" class="w-12 h-12 rounded-full">
                                <div>
                                    <div id="userName" class="font-semibold" style="color: var(--text-primary);"></div>
                                    <div id="userEmail" class="text-sm" style="color: var(--text-muted);"></div>
                                </div>
                            </div>
                            <button 
                                onclick="handleSignOut()"
                                class="px-4 py-2 rounded-lg text-sm"
                                style="background: var(--vario-danger); color: white;"
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>

                    <!-- Platform Connections -->
                    <div id="platformConnectionsContainer" class="hidden">
                        <div class="glass-card rounded-xl p-6 mb-6">
                            <h3 class="text-xl font-bold mb-4 flex items-center" style="color: var(--text-primary);">
                                <i class="fas fa-link mr-2" style="color: var(--vario-accent);"></i>
                                Connected Platforms
                            </h3>
                            <p class="text-sm mb-4" style="color: var(--text-secondary);">
                                Connect your accounts to access personalized content without signing in to each platform
                            </p>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="platformsList">
                                <!-- Platforms will be updated by JavaScript -->
                                <div class="col-span-full text-center py-8" style="color: var(--text-muted);">
                                    Loading platforms...
                                </div>
                            </div>
                            
                            <div class="mt-6 p-4 rounded-lg" style="background: var(--vario-gradient-subtle);">
                                <div class="flex items-start space-x-3">
                                    <i class="fas fa-shield-alt text-2xl" style="color: var(--vario-accent);"></i>
                                    <div>
                                        <div class="font-semibold mb-1" style="color: var(--text-primary);">🔒 Secure & Private</div>
                                        <div class="text-sm" style="color: var(--text-secondary);">
                                            Your OAuth tokens are encrypted and stored securely. You can disconnect any platform at any time.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Account Settings Modal -->
        <div id="accountSettingsModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4" style="background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(10px);">
            <div class="glass-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto relative">
                <div class="sticky top-0 glass-card p-6 border-b" style="border-color: var(--border-color); z-index: 10;">
                    <div class="flex items-center justify-between">
                        <h2 class="text-2xl font-bold vario-text-gradient">Account Settings</h2>
                        <button onclick="closeAccountSettingsModal()" class="w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                            <i class="fas fa-times" style="color: var(--text-muted);"></i>
                        </button>
                    </div>
                </div>
                
                <div class="p-6 space-y-6">
                    <!-- Profile Information -->
                    <div class="glass-card rounded-xl p-4">
                        <h3 class="font-semibold mb-4 flex items-center" style="color: var(--text-primary);">
                            <i class="fas fa-user mr-2" style="color: var(--vario-accent);"></i>
                            Profile Information
                        </h3>
                        <div class="space-y-4">
                            <div class="flex items-center space-x-4">
                                <img id="settingsUserAvatar" src="https://page.gensparksite.com/v1/base64_upload/90026a44a26b2dfe7a63d303273598c4" alt="Avatar" class="w-16 h-16 rounded-full">
                                <div class="flex-1">
                                    <div id="settingsUserName" class="font-semibold" style="color: var(--text-primary);">User Name</div>
                                    <div id="settingsUserEmail" class="text-sm" style="color: var(--text-muted);">user@example.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Preferences -->
                    <div class="glass-card rounded-xl p-4">
                        <h3 class="font-semibold mb-4 flex items-center" style="color: var(--text-primary);">
                            <i class="fas fa-cog mr-2" style="color: var(--vario-accent);"></i>
                            Preferences
                        </h3>
                        <div class="space-y-3">
                            <div class="flex items-center justify-between">
                                <span style="color: var(--text-secondary);">Theme</span>
                                <button onclick="toggleTheme()" class="px-4 py-2 rounded-lg vario-gradient text-white text-sm">
                                    Toggle Theme
                                </button>
                            </div>
                            <div class="flex items-center justify-between">
                                <span style="color: var(--text-secondary);">Auto-connect platforms</span>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked class="sr-only peer">
                                    <div class="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Danger Zone -->
                    <div class="glass-card rounded-xl p-4 border-2" style="border-color: var(--vario-danger);">
                        <h3 class="font-semibold mb-4 flex items-center" style="color: var(--vario-danger);">
                            <i class="fas fa-exclamation-triangle mr-2"></i>
                            Danger Zone
                        </h3>
                        <button 
                            onclick="if(confirm('Are you sure you want to sign out?')) { handleSignOut(); closeAccountSettingsModal(); }"
                            class="w-full py-2 rounded-lg text-white font-semibold"
                            style="background: var(--vario-danger);"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <script src="https://accounts.google.com/gsi/client" async defer></script>
        <script>
            // Application State
            let currentSection = 'search';
            let currentTheme = 'dark';
            let savedItems = JSON.parse(localStorage.getItem('vario_saved') || '[]');
            let userInterests = JSON.parse(localStorage.getItem('vario_interests') || '["Technology", "Design", "Fitness"]');
            let customTopics = JSON.parse(localStorage.getItem('vario_custom_topics') || '[]');
            let selectedTopicIcon = '🚀';
            
            // OAuth Authentication State
            let currentUser = null;
            let sessionToken = localStorage.getItem('vario_session_token');
            let connectedPlatforms = [];
            
            // Initialize Application
            document.addEventListener('DOMContentLoaded', function() {
                initializeTheme();
                setupEventListeners();
                initializeAuth();
                loadPersonalizedContent();
                updateUI();
            });
            
            // OAuth Authentication Functions
            function initializeAuth() {
                // Check if user is already signed in
                if (sessionToken) {
                    verifySession();
                } else {
                    // No session, show sign in button
                    updateAuthUI();
                    
                    // Initialize Google Sign-In
                    if (window.google) {
                        google.accounts.id.initialize({
                            client_id: 'YOUR_GOOGLE_CLIENT_ID',
                            callback: handleGoogleSignInResponse
                        });
                    }
                }
            }
            
            async function verifySession() {
                try {
                    const response = await fetch('/api/auth/me', {
                        headers: {
                            'Authorization': 'Bearer ' + sessionToken
                        }
                    });
                    
                    if (response.ok) {
                        const data = await response.json();
                        currentUser = data.user;
                        connectedPlatforms = data.connectedPlatforms || [];
                        updateAuthUI();
                    } else {
                        // Session expired
                        handleSignOut();
                    }
                } catch (error) {
                    console.error('Session verification failed:', error);
                    handleSignOut();
                }
            }
            
            function handleGoogleSignIn() {
                // Demo mode: Since Google OAuth requires real Client ID setup,
                // we'll simulate sign-in for demonstration purposes
                showNotification('Demo Mode: Sign In functionality requires Google OAuth setup', 'info');
                
                // Simulate demo user sign-in
                setTimeout(() => {
                    currentUser = {
                        id: 'demo_user_' + Date.now(),
                        email: 'demo@vario.ai',
                        name: 'Demo User',
                        picture: 'https://page.gensparksite.com/v1/base64_upload/90026a44a26b2dfe7a63d303273598c4',
                        google_id: 'demo_google_id'
                    };
                    
                    sessionToken = 'demo_token_' + Date.now();
                    localStorage.setItem('vario_session_token', sessionToken);
                    
                    updateAuthUI();
                    showNotification('Demo sign-in successful! (For production, configure Google OAuth)', 'success');
                }, 500);
                
                // Real implementation (commented for reference):
                // if (window.google && window.google.accounts) {
                //     google.accounts.id.prompt();
                // } else {
                //     showNotification('Google Sign-In not loaded', 'error');
                // }
            }
            
            async function handleGoogleSignInResponse(response) {
                try {
                    const result = await fetch('/api/auth/google/signin', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            idToken: response.credential
                        })
                    });
                    
                    if (result.ok) {
                        const data = await result.json();
                        currentUser = data.user;
                        sessionToken = data.sessionToken;
                        connectedPlatforms = data.connectedPlatforms || [];
                        
                        // Save session
                        localStorage.setItem('vario_session_token', sessionToken);
                        
                        // Update UI
                        updateAuthUI();
                        
                        // Show success message
                        showNotification('Signed in successfully!', 'success');
                    } else {
                        showNotification('Sign in failed. Please try again.', 'error');
                    }
                } catch (error) {
                    console.error('Sign in error:', error);
                    showNotification('Sign in failed. Please try again.', 'error');
                }
            }
            
            function handleSignOut() {
                currentUser = null;
                sessionToken = null;
                connectedPlatforms = [];
                localStorage.removeItem('vario_session_token');
                updateAuthUI();
                showNotification('Signed out successfully', 'info');
            }
            
            function updateAuthUI() {
                // Top navigation UI
                const topNavSignIn = document.getElementById('topNavSignIn');
                const topNavUserProfile = document.getElementById('topNavUserProfile');
                
                // Modal content UI
                const signInContainer = document.getElementById('googleSignInContainer');
                const profileContainer = document.getElementById('userProfileContainer');
                const platformsContainer = document.getElementById('platformConnectionsContainer');
                
                if (currentUser) {
                    // Update top navigation
                    if (topNavSignIn) topNavSignIn.classList.add('hidden');
                    if (topNavUserProfile) {
                        topNavUserProfile.classList.remove('hidden');
                        const avatar = currentUser.picture || 'https://page.gensparksite.com/v1/base64_upload/90026a44a26b2dfe7a63d303273598c4';
                        if (document.getElementById('topNavUserAvatar')) document.getElementById('topNavUserAvatar').src = avatar;
                        if (document.getElementById('topNavUserName')) document.getElementById('topNavUserName').textContent = currentUser.name || 'User';
                        if (document.getElementById('dropdownUserAvatar')) document.getElementById('dropdownUserAvatar').src = avatar;
                        if (document.getElementById('dropdownUserName')) document.getElementById('dropdownUserName').textContent = currentUser.name || 'User';
                        if (document.getElementById('dropdownUserEmail')) document.getElementById('dropdownUserEmail').textContent = currentUser.email || '';
                    }
                    
                    // Update modal content
                    if (signInContainer) signInContainer.classList.add('hidden');
                    if (profileContainer) {
                        profileContainer.classList.remove('hidden');
                        if (document.getElementById('userAvatar')) document.getElementById('userAvatar').src = currentUser.picture || '';
                        if (document.getElementById('userName')) document.getElementById('userName').textContent = currentUser.name || 'User';
                        if (document.getElementById('userEmail')) document.getElementById('userEmail').textContent = currentUser.email || '';
                    }
                    if (platformsContainer) platformsContainer.classList.remove('hidden');
                    
                    // Update settings modal
                    if (document.getElementById('settingsUserAvatar')) document.getElementById('settingsUserAvatar').src = currentUser.picture || '';
                    if (document.getElementById('settingsUserName')) document.getElementById('settingsUserName').textContent = currentUser.name || 'User';
                    if (document.getElementById('settingsUserEmail')) document.getElementById('settingsUserEmail').textContent = currentUser.email || '';
                    
                    // Update platform connection status
                    updatePlatformConnectionStatus();
                } else {
                    // Show sign in button
                    if (topNavSignIn) topNavSignIn.classList.remove('hidden');
                    if (topNavUserProfile) topNavUserProfile.classList.add('hidden');
                    if (signInContainer) signInContainer.classList.remove('hidden');
                    if (profileContainer) profileContainer.classList.add('hidden');
                    if (platformsContainer) platformsContainer.classList.add('hidden');
                }
            }
            
            function toggleUserMenu() {
                const menu = document.getElementById('userDropdownMenu');
                if (menu) {
                    menu.classList.toggle('hidden');
                }
            }
            
            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                const menu = document.getElementById('userDropdownMenu');
                const button = document.getElementById('userMenuButton');
                if (menu && button && !menu.contains(e.target) && !button.contains(e.target)) {
                    menu.classList.add('hidden');
                }
            });
            
            function showConnectedPlatforms() {
                toggleUserMenu();
                document.getElementById('platformConnectionsModal').classList.remove('hidden');
            }
            
            function closePlatformConnectionsModal() {
                document.getElementById('platformConnectionsModal').classList.add('hidden');
            }
            
            function showAccountSettings() {
                toggleUserMenu();
                document.getElementById('accountSettingsModal').classList.remove('hidden');
            }
            
            function closeAccountSettingsModal() {
                document.getElementById('accountSettingsModal').classList.add('hidden');
            }
            
            function updatePlatformConnectionStatus() {
                const platformsList = document.getElementById('platformsList');
                if (!platformsList) return;
                
                const platforms = [
                    { id: 'youtube', name: 'YouTube', icon: 'fab fa-youtube', color: '#FF0000', desc: 'Videos & Subscriptions' },
                    { id: 'reddit', name: 'Reddit', icon: 'fab fa-reddit', color: '#FF4500', desc: 'Posts & Communities' },
                    { id: 'pinterest', name: 'Pinterest', icon: 'fab fa-pinterest', color: '#E60023', desc: 'Pins & Boards' },
                    { id: 'twitter', name: 'Twitter / X', icon: 'fab fa-twitter', color: '#1DA1F2', desc: 'Tweets & Timeline' },
                    { id: 'instagram', name: 'Instagram', icon: 'fab fa-instagram', color: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', desc: 'Photos & Stories' },
                    { id: 'tiktok', name: 'TikTok', icon: 'fab fa-tiktok', color: '#000000', desc: 'Short Videos' }
                ];
                
                platformsList.innerHTML = platforms.map(platform => {
                    const isConnected = connectedPlatforms.some(p => p.platform === platform.id);
                    const bgStyle = platform.id === 'instagram' ? 'background: ' + platform.color : 'background: ' + platform.color;
                    
                    return '<div class="platform-connection-card p-4 rounded-lg border-2" style="border-color: var(--border-color);">' +
                        '<div class="flex items-center justify-between mb-3">' +
                            '<div class="flex items-center space-x-3">' +
                                '<div class="w-10 h-10 rounded-lg flex items-center justify-center" style="' + bgStyle + ';">' +
                                    '<i class="' + platform.icon + ' text-white text-xl"></i>' +
                                '</div>' +
                                '<div>' +
                                    '<div class="font-semibold" style="color: var(--text-primary);">' + platform.name + '</div>' +
                                    '<div class="text-xs" style="color: var(--text-muted);">' + platform.desc + '</div>' +
                                '</div>' +
                            '</div>' +
                            '<div id="' + platform.id + '-status" class="text-xs px-2 py-1 rounded" style="' + 
                                (isConnected ? 'background: var(--vario-success); color: white;' : 'background: var(--accent-bg); color: var(--text-muted);') + '">' +
                                (isConnected ? 'Connected' : 'Not Connected') +
                            '</div>' +
                        '</div>' +
                        '<button ' +
                            'id="' + platform.id + '-connect-btn" ' +
                            'onclick="' + (isConnected ? 'disconnectPlatform(&quot;' + platform.id + '&quot;)' : 'connectPlatform(&quot;' + platform.id + '&quot;)') + '" ' +
                            'class="w-full py-2 rounded-lg text-sm font-semibold transition-all" ' +
                            'style="' + (isConnected ? 'background: var(--vario-danger);' : 'background: var(--vario-gradient);') + ' color: white;">' +
                            (isConnected ? 'Disconnect' : 'Connect ' + platform.name) +
                        '</button>' +
                    '</div>';
                }).join('');
            }
            
            async function connectPlatform(platform) {
                if (!sessionToken) {
                    showNotification('Please sign in first', 'warning');
                    return;
                }
                
                try {
                    // Get OAuth URL
                    const response = await fetch('/api/auth/connect/' + platform + '?redirect_uri=' + encodeURIComponent(window.location.origin + '/auth/callback'), {
                        headers: {
                            'Authorization': 'Bearer ' + sessionToken
                        }
                    });
                    
                    if (response.ok) {
                        const data = await response.json();
                        
                        // Save state for verification
                        localStorage.setItem('oauth_state', data.state);
                        localStorage.setItem('oauth_platform', platform);
                        
                        // Redirect to OAuth page
                        window.location.href = data.authUrl;
                    } else {
                        showNotification('Failed to connect ' + platform, 'error');
                    }
                } catch (error) {
                    console.error('Platform connection error:', error);
                    showNotification('Failed to connect ' + platform, 'error');
                }
            }
            
            async function disconnectPlatform(platform) {
                if (!sessionToken) return;
                
                if (!confirm('Are you sure you want to disconnect ' + platform + '?')) {
                    return;
                }
                
                try {
                    const response = await fetch('/api/auth/disconnect/' + platform, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': 'Bearer ' + sessionToken
                        }
                    });
                    
                    if (response.ok) {
                        // Remove from connected platforms
                        connectedPlatforms = connectedPlatforms.filter(p => p.platform !== platform);
                        updatePlatformConnectionStatus();
                        showNotification(platform + ' disconnected successfully', 'success');
                    } else {
                        showNotification('Failed to disconnect ' + platform, 'error');
                    }
                } catch (error) {
                    console.error('Disconnect error:', error);
                    showNotification('Failed to disconnect ' + platform, 'error');
                }
            }
            
            function showNotification(message, type = 'info') {
                // Create notification element
                const notification = document.createElement('div');
                notification.className = 'fixed top-4 right-4 z-50 glass-card rounded-lg p-4 shadow-lg transition-all';
                notification.style.minWidth = '300px';
                
                const colors = {
                    success: 'var(--vario-success)',
                    error: 'var(--vario-danger)',
                    warning: 'var(--vario-warning)',
                    info: 'var(--vario-accent)'
                };
                
                const icons = {
                    success: 'fa-check-circle',
                    error: 'fa-exclamation-circle',
                    warning: 'fa-exclamation-triangle',
                    info: 'fa-info-circle'
                };
                
                notification.innerHTML = '<div class="flex items-center space-x-3">' +
                    '<i class="fas ' + icons[type] + ' text-xl" style="color: ' + colors[type] + ';"></i>' +
                    '<span style="color: var(--text-primary);">' + message + '</span>' +
                '</div>';
                
                document.body.appendChild(notification);
                
                // Auto remove after 3 seconds
                setTimeout(() => {
                    notification.style.opacity = '0';
                    setTimeout(() => notification.remove(), 300);
                }, 3000);
            }
            
            // Theme Management
            function initializeTheme() {
                const savedTheme = localStorage.getItem('vario_theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
                applyTheme(currentTheme);
                
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                    if (!localStorage.getItem('vario_theme')) {
                        currentTheme = e.matches ? 'dark' : 'light';
                        applyTheme(currentTheme);
                    }
                });
            }
            
            function toggleTheme() {
                currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
                applyTheme(currentTheme);
                localStorage.setItem('vario_theme', currentTheme);
            }
            
            function applyTheme(theme) {
                document.documentElement.setAttribute('data-theme', theme);
                
                const darkIcon = document.querySelector('.theme-icon.dark');
                const lightIcon = document.querySelector('.theme-icon.light');
                
                if (theme === 'light') {
                    darkIcon.classList.add('hidden');
                    lightIcon.classList.remove('hidden');
                } else {
                    darkIcon.classList.remove('hidden');
                    lightIcon.classList.add('hidden');
                }
            }
            
            // Navigation
            function setupEventListeners() {
                // Navigation links
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const section = this.getAttribute('href').substring(1);
                        showSection(section);
                    });
                });
                
                // Search input
                document.getElementById('mainSearch').addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        performSearch();
                    }
                });
                
                // Topic form
                document.getElementById('topicForm').addEventListener('submit', function(e) {
                    e.preventDefault();
                    submitCustomTopic();
                });
                
                // Topic icon selection
                document.querySelectorAll('.topic-icon-btn').forEach(btn => {
                    btn.addEventListener('click', function(e) {
                        e.preventDefault();
                        document.querySelectorAll('.topic-icon-btn').forEach(b => b.classList.remove('selected'));
                        this.classList.add('selected');
                        selectedTopicIcon = this.dataset.icon;
                    });
                });
            }
            
            function showSection(section) {
                // Hide all sections
                document.querySelectorAll('main > section').forEach(s => s.classList.add('hidden'));
                
                // Show target section
                const targetSection = document.getElementById(section);
                if (targetSection) {
                    targetSection.classList.remove('hidden');
                }
                
                // Update navigation
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + section) {
                        link.classList.add('active');
                    }
                });
                
                currentSection = section;
                
                // Load section-specific content
                if (section === 'for-you') {
                    loadForYouContent();
                } else if (section === 'saved') {
                    loadSavedContent();
                } else if (section === 'topics') {
                    loadCustomTopics();
                }
            }
            
            // Search Functionality
            function performSearch() {
                const searchInput = document.getElementById('mainSearch');
                if (!searchInput) return;
                
                const query = searchInput.value.trim();
                if (!query) return;
                
                // Show results section
                const searchSection = document.getElementById('search');
                const resultsSection = document.getElementById('searchResults');
                const loadingResults = document.getElementById('loadingResults');
                const resultsGrid = document.getElementById('resultsGrid');
                
                if (searchSection) searchSection.classList.add('hidden');
                if (resultsSection) resultsSection.classList.remove('hidden');
                if (loadingResults) loadingResults.classList.remove('hidden');
                if (resultsGrid) resultsGrid.classList.add('hidden');
                
                // Fetch real results from API
                fetchRealResults(query);
            }
            
            async function fetchRealResults(query) {
                const loadingResults = document.getElementById('loadingResults');
                const resultsGrid = document.getElementById('resultsGrid');
                const resultsCount = document.getElementById('resultsCount');
                
                try {
                    const startTime = Date.now();
                    
                    // Call the unified search API
                    const response = await fetch('/api/vario/search?q=' + encodeURIComponent(query) + '&platforms=youtube,reddit,amazon,pinterest,ai&limit=10');
                    
                    if (!response.ok) {
                        throw new Error('Search failed');
                    }
                    
                    const data = await response.json();
                    const searchTime = ((Date.now() - startTime) / 1000).toFixed(2);
                    
                    // Hide loading
                    if (loadingResults) loadingResults.classList.add('hidden');
                    if (resultsGrid) resultsGrid.classList.remove('hidden');
                    
                    // Update count
                    if (resultsCount) {
                        resultsCount.textContent = 'Found ' + data.total_results + ' results in ' + searchTime + ' seconds';
                    }
                    
                    // Store results for preview
                    allResults = data.results || [];
                    
                    // Display results
                    if (resultsGrid && data.results) {
                        resultsGrid.innerHTML = data.results.map(result => createResultCard(result)).join('');
                        
                        // Initialize masonry layout
                        setTimeout(() => {
                            if (window.Masonry) {
                                new window.Masonry(resultsGrid, {
                                    itemSelector: '.masonry-item',
                                    columnWidth: '.masonry-item',
                                    percentPosition: true
                                });
                            }
                        }, 100);
                    }
                } catch (error) {
                    console.error('Search error:', error);
                    
                    // Hide loading and show error
                    if (loadingResults) loadingResults.classList.add('hidden');
                    if (resultsGrid) {
                        resultsGrid.classList.remove('hidden');
                        resultsGrid.innerHTML = '<div class="col-span-full text-center py-12">' +
                            '<i class="fas fa-exclamation-circle text-6xl mb-4" style="color: var(--vario-danger);"></i>' +
                            '<h3 class="text-xl font-semibold mb-2" style="color: var(--text-primary);">Search Failed</h3>' +
                            '<p style="color: var(--text-secondary);">Unable to fetch results. Please try again.</p>' +
                            '<button onclick="performSearch()" class="mt-4 vario-gradient text-white px-6 py-2 rounded-lg">Retry</button>' +
                        '</div>';
                    }
                }
            }
            
            function displaySearchResults(query) {
                const resultsGrid = document.getElementById('resultsGrid');
                const loadingResults = document.getElementById('loadingResults');
                const resultsCount = document.getElementById('resultsCount');
                
                if (!resultsGrid || !loadingResults) return;
                
                // Hide loading
                loadingResults.classList.add('hidden');
                resultsGrid.classList.remove('hidden');
                
                // Update count
                if (resultsCount) {
                    resultsCount.textContent = 'Found 847 results in 0.23 seconds';
                }
                
                // Generate sample results
                const results = generateSampleResults(query);
                resultsGrid.innerHTML = results.map(result => createResultCard(result)).join('');
            }
            
            function generateSampleResults(query) {
                const platforms = ['youtube', 'tiktok', 'instagram', 'reddit', 'twitter', 'pinterest', 'amazon', 'ai'];
                const results = [];
                
                for (let i = 0; i < 20; i++) {
                    const platform = platforms[Math.floor(Math.random() * platforms.length)];
                    results.push({
                        id: 'result_' + i,
                        platform: platform,
                        title: generateResultTitle(query, platform),
                        description: generateResultDescription(query, platform),
                        image: generateResultImage(platform),
                        author: generateAuthor(platform),
                        engagement: generateEngagement(platform),
                        price: platform === 'amazon' ? '$' + (Math.random() * 200 + 10).toFixed(2) : null,
                        timestamp: generateTimestamp()
                    });
                }
                
                return results;
            }
            
            function createResultCard(result) {
                const platformClass = 'platform-' + result.platform;
                const platformName = result.platform.charAt(0).toUpperCase() + result.platform.slice(1);
                
                // Handle different data formats from different platforms
                const author = result.author || result.channelTitle || 'Unknown';
                const timestamp = result.timestamp || result.publishedAt || result.createdAt || 'Recent';
                const engagement = result.engagement || result.score || result.views || result.saves || '';
                const price = result.price || '';
                const viewUrl = result.viewUrl || result.embedUrl || '#';
                
                // Format timestamp
                let formattedTime = timestamp;
                try {
                    if (timestamp && timestamp.includes('T')) {
                        const date = new Date(timestamp);
                        const now = new Date();
                        const diff = now - date;
                        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                        if (days === 0) formattedTime = 'Today';
                        else if (days === 1) formattedTime = 'Yesterday';
                        else if (days < 7) formattedTime = days + ' days ago';
                        else if (days < 30) formattedTime = Math.floor(days / 7) + ' weeks ago';
                        else formattedTime = Math.floor(days / 30) + ' months ago';
                    }
                } catch (e) {
                    // Keep original timestamp if parsing fails
                }
                
                return '<div class="masonry-item">' +
                    '<div class="content-card rounded-xl overflow-hidden relative cursor-pointer hover-lift" onclick="previewContent(&quot;' + result.id + '&quot;)">' +
                        '<button class="save-btn ' + (savedItems.includes(result.id) ? 'saved' : '') + '" onclick="event.stopPropagation(); toggleSave(&quot;' + result.id + '&quot;, this)">' +
                            '<i class="fas fa-heart"></i>' +
                        '</button>' +
                        
                        '<img src="' + result.image + '" alt="Content" class="w-full h-48 object-cover" onerror="this.src=&quot;https://via.placeholder.com/400x300?text=' + platformName + '&quot;">' +
                        
                        '<div class="p-4">' +
                            '<div class="flex items-center mb-2">' +
                                '<div class="platform-icon ' + platformClass + ' mr-2" style="width: 20px; height: 20px; font-size: 10px;">' +
                                    (result.platform === 'youtube' ? '📺' :
                                     result.platform === 'tiktok' ? '🎵' :
                                     result.platform === 'instagram' ? '📷' :
                                     result.platform === 'reddit' ? '💬' :
                                     result.platform === 'twitter' ? '🐦' :
                                     result.platform === 'pinterest' ? '📌' :
                                     result.platform === 'amazon' ? '🛒' : '🤖') +
                                '</div>' +
                                '<span class="text-xs opacity-75">' + platformName + '</span>' +
                            '</div>' +
                            
                            '<h3 class="font-semibold mb-2 line-clamp-2" style="color: var(--text-primary);">' + (result.title || 'Untitled') + '</h3>' +
                            '<p class="text-sm mb-3 line-clamp-3" style="color: var(--text-secondary);">' + (result.description || '') + '</p>' +
                            
                            '<div class="flex items-center justify-between text-xs" style="color: var(--text-muted);">' +
                                '<div class="flex items-center space-x-2">' +
                                    '<span>' + author + '</span>' +
                                    (formattedTime ? '<span>•</span><span>' + formattedTime + '</span>' : '') +
                                '</div>' +
                                
                                '<div class="flex items-center space-x-2">' +
                                    (price ? '<span class="font-semibold text-green-400">' + price + '</span>' : 
                                     engagement ? '<span>👍 ' + engagement + '</span>' : '') +
                                '</div>' +
                            '</div>' +
                            
                            '<div class="mt-3 flex items-center justify-between">' +
                                '<a href="' + viewUrl + '" target="_blank" onclick="event.stopPropagation()" class="text-xs px-3 py-1 rounded-full" style="background: var(--vario-gradient); color: white;">Open in ' + platformName + '</a>' +
                                '<button onclick="event.stopPropagation(); previewContent(&quot;' + result.id + '&quot;)" class="text-xs px-3 py-1 rounded-full border" style="border-color: var(--border-color); color: var(--text-secondary);">Preview</button>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
            }
            
            // Store all results for preview
            let allResults = [];
            
            function previewContent(contentId) {
                const content = allResults.find(r => r.id === contentId);
                if (!content) return;
                
                // Create preview modal
                const modal = document.createElement('div');
                modal.id = 'contentPreviewModal';
                modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4';
                modal.style.background = 'rgba(0, 0, 0, 0.8)';
                modal.style.backdropFilter = 'blur(10px)';
                
                let previewHTML = '';
                
                // YouTube - embed video
                if (content.platform === 'youtube' && content.embedUrl) {
                    previewHTML = '<iframe width="100%" height="450" src="' + content.embedUrl + '" frameborder="0" allowfullscreen></iframe>';
                }
                // Reddit - show post details
                else if (content.platform === 'reddit') {
                    previewHTML = '<div class="p-6">' +
                        '<h2 class="text-2xl font-bold mb-4" style="color: var(--text-primary);">' + content.title + '</h2>' +
                        '<p class="text-sm mb-4" style="color: var(--text-secondary);">r/' + (content.subreddit || 'reddit') + ' • by u/' + content.author + '</p>' +
                        '<div class="mb-4" style="color: var(--text-secondary);">' + (content.description || '') + '</div>' +
                        '<a href="' + content.viewUrl + '" target="_blank" class="vario-gradient text-white px-6 py-2 rounded-lg inline-block">View on Reddit</a>' +
                    '</div>';
                }
                // Amazon - show product details
                else if (content.platform === 'amazon') {
                    previewHTML = '<div class="p-6 text-center">' +
                        '<img src="' + content.image + '" alt="Product" class="max-w-sm mx-auto mb-4 rounded-lg">' +
                        '<h2 class="text-2xl font-bold mb-2" style="color: var(--text-primary);">' + content.title + '</h2>' +
                        '<p class="text-3xl font-bold mb-4" style="color: var(--vario-success);">' + content.price + '</p>' +
                        '<p class="mb-4" style="color: var(--text-secondary);">' + content.description + '</p>' +
                        '<a href="' + content.viewUrl + '" target="_blank" class="vario-gradient text-white px-6 py-2 rounded-lg inline-block">View on Amazon</a>' +
                    '</div>';
                }
                // Default - show content details
                else {
                    previewHTML = '<div class="p-6">' +
                        '<img src="' + content.image + '" alt="Content" class="w-full max-h-64 object-cover rounded-lg mb-4">' +
                        '<h2 class="text-2xl font-bold mb-4" style="color: var(--text-primary);">' + content.title + '</h2>' +
                        '<p class="mb-4" style="color: var(--text-secondary);">' + content.description + '</p>' +
                        '<a href="' + (content.viewUrl || '#') + '" target="_blank" class="vario-gradient text-white px-6 py-2 rounded-lg inline-block">View Original</a>' +
                    '</div>';
                }
                
                modal.innerHTML = '<div class="glass-card rounded-2xl max-w-4xl max-h-[90vh] overflow-auto relative" style="width: 90%; max-width: 900px;">' +
                    '<button onclick="closePreviewModal()" class="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center z-10" style="background: var(--vario-danger); color: white;">' +
                        '<i class="fas fa-times"></i>' +
                    '</button>' +
                    previewHTML +
                '</div>';
                
                document.body.appendChild(modal);
                
                // Close on background click
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) {
                        closePreviewModal();
                    }
                });
            }
            
            function closePreviewModal() {
                const modal = document.getElementById('contentPreviewModal');
                if (modal) {
                    modal.remove();
                }
            }
            
            // Content Generation Helpers
            function generateResultTitle(query, platform) {
                const templates = {
                    youtube: ['How to ' + query, query + ' Tutorial', 'Best ' + query + ' Guide'],
                    tiktok: [query + ' hack you need to know', 'POV: ' + query, query + ' trend'],
                    instagram: [query + ' inspiration', 'Amazing ' + query + ' photos', query + ' aesthetic'],
                    reddit: ['Discussion: ' + query, 'r/' + query.replace(' ', ''), 'What do you think about ' + query + '?'],
                    twitter: [query + ' thoughts', 'Thread about ' + query, 'Hot take on ' + query],
                    pinterest: [query + ' ideas', 'DIY ' + query, query + ' inspiration board'],
                    amazon: [query + ' - Premium Quality', 'Best ' + query + ' 2024', query + ' with Fast Delivery'],
                    ai: ['Everything about ' + query, query + ' explained', 'AI analysis of ' + query]
                };
                
                const options = templates[platform] || [query];
                return options[Math.floor(Math.random() * options.length)];
            }
            
            function generateResultDescription(query, platform) {
                const templates = {
                    youtube: 'Comprehensive tutorial covering everything you need to know about ' + query + '. Step-by-step guide with practical examples.',
                    tiktok: 'Viral content about ' + query + ' that everyone is talking about. Quick tips and amazing results!',
                    instagram: 'Beautiful visual content showcasing ' + query + '. Get inspired by these stunning examples and creative ideas.',
                    reddit: 'Community discussion about ' + query + '. Real users sharing experiences, tips, and honest opinions.',
                    twitter: 'Latest thoughts and trending conversations about ' + query + '. Join the discussion and share your views.',
                    pinterest: 'Creative ideas and inspiration for ' + query + '. Save these beautiful pins to your boards.',
                    amazon: 'High-quality ' + query + ' with excellent reviews. Fast shipping and great customer service.',
                    ai: 'AI-powered analysis and insights about ' + query + '. Comprehensive information from multiple sources.'
                };
                
                return templates[platform] || 'Discover more about ' + query + ' with this amazing content.';
            }
            
            function generateResultImage(platform) {
                const categories = ['technology', 'fashion', 'food', 'travel', 'fitness', 'art', 'nature', 'business'];
                const category = categories[Math.floor(Math.random() * categories.length)];
                const imageId = Math.floor(Math.random() * 1000) + 100;
                return 'https://picsum.photos/300/200?random=' + imageId;
            }
            
            function generateAuthor(platform) {
                const authors = {
                    youtube: ['TechReviewer', 'CreativeChannel', 'ExpertGuide'],
                    tiktok: ['@coolcreator', '@trendysetter', '@viralvideos'],
                    instagram: ['@photographer', '@influencer', '@artist'],
                    reddit: ['u/helpful_user', 'u/expert_advice', 'u/community_mod'],
                    twitter: ['@thoughtleader', '@industry_expert', '@trending_topic'],
                    pinterest: ['Creative Ideas', 'Inspiration Hub', 'DIY Master'],
                    amazon: ['Brand Store', 'Top Seller', 'Amazon Choice'],
                    ai: ['AI Assistant', 'Vario AI', 'Smart Analysis']
                };
                
                const options = authors[platform] || ['Content Creator'];
                return options[Math.floor(Math.random() * options.length)];
            }
            
            function generateEngagement(platform) {
                const engagements = {
                    youtube: (Math.floor(Math.random() * 500) + 50) + 'K views',
                    tiktok: (Math.floor(Math.random() * 2000) + 100) + 'K likes',
                    instagram: (Math.floor(Math.random() * 10000) + 1000) + ' likes',
                    reddit: (Math.floor(Math.random() * 500) + 50) + ' upvotes',
                    twitter: (Math.floor(Math.random() * 1000) + 100) + ' retweets',
                    pinterest: (Math.floor(Math.random() * 5000) + 500) + ' saves',
                    amazon: '⭐ ' + (4 + Math.random()).toFixed(1) + ' (' + Math.floor(Math.random() * 1000) + ')',
                    ai: '99% accuracy'
                };
                
                return engagements[platform] || 'Popular';
            }
            
            function generateTimestamp() {
                const options = ['2h ago', '5h ago', '1d ago', '2d ago', '1w ago', '2w ago', '1m ago'];
                return options[Math.floor(Math.random() * options.length)];
            }
            
            // Save Functionality
            function toggleSave(itemId, button) {
                if (savedItems.includes(itemId)) {
                    savedItems = savedItems.filter(id => id !== itemId);
                    button.classList.remove('saved');
                } else {
                    savedItems.push(itemId);
                    button.classList.add('saved');
                }
                
                localStorage.setItem('vario_saved', JSON.stringify(savedItems));
            }
            
            // Search Filters
            function setSearchFilter(e, filter) {
                const searchInput = document.getElementById('mainSearch');
                let currentValue = searchInput.value;
                
                // Remove existing filter prefixes
                currentValue = currentValue.replace(/^(products|videos|posts|answers|trends):\s*/, '');
                
                // Add new filter
                searchInput.value = filter + ': ' + currentValue;
                
                // Update filter button styles
                document.querySelectorAll('.topic-tag').forEach(tag => {
                    tag.classList.remove('selected');
                });
                
                if (e && e.target) {
                    e.target.classList.add('selected');
                }
            }
            
            function searchTopic(topic) {
                document.getElementById('mainSearch').value = topic;
                performSearch();
            }
            
            // For You Page
            function loadForYouContent() {
                const feed = document.getElementById('forYouFeed');
                if (!feed) return;
                
                // Generate personalized content based on user interests
                const personalizedResults = [];
                userInterests.forEach(interest => {
                    const results = generateSampleResults(interest);
                    personalizedResults.push(...results.slice(0, 3));
                });
                
                feed.innerHTML = personalizedResults.map(result => createResultCard(result)).join('');
            }
            
            function addInterest() {
                const newInterest = prompt('Enter a new interest:');
                if (newInterest && !userInterests.includes(newInterest)) {
                    userInterests.push(newInterest);
                    localStorage.setItem('vario_interests', JSON.stringify(userInterests));
                    updateInterestsUI();
                    loadForYouContent();
                }
            }
            
            function removeInterest(button) {
                const interestTag = button.parentElement;
                const interest = interestTag.textContent.replace('×', '').trim();
                
                userInterests = userInterests.filter(i => i !== interest);
                localStorage.setItem('vario_interests', JSON.stringify(userInterests));
                
                interestTag.remove();
                loadForYouContent();
            }
            
            // Custom Topics
            function createCustomTopic() {
                document.getElementById('topicModal').classList.remove('hidden');
            }
            
            function closeTopicModal() {
                document.getElementById('topicModal').classList.add('hidden');
                document.getElementById('topicForm').reset();
                document.querySelectorAll('.topic-icon-btn').forEach(b => b.classList.remove('selected'));
                selectedTopicIcon = '🚀';
            }
            
            function submitCustomTopic() {
                const name = document.getElementById('topicName').value;
                const description = document.getElementById('topicDescription').value;
                const keywords = document.getElementById('topicKeywords').value;
                
                if (!name || !description) {
                    alert('Please fill in all required fields');
                    return;
                }
                
                const newTopic = {
                    id: 'custom_' + Date.now(),
                    name: name,
                    description: description,
                    keywords: keywords.split(',').map(k => k.trim()),
                    icon: selectedTopicIcon,
                    created: new Date().toISOString(),
                    items: 0
                };
                
                customTopics.push(newTopic);
                localStorage.setItem('vario_custom_topics', JSON.stringify(customTopics));
                
                closeTopicModal();
                loadCustomTopics();
            }
            
            function loadCustomTopics() {
                const container = document.getElementById('customTopics');
                if (!container) return;
                
                if (customTopics.length === 0) {
                    container.innerHTML = '<div class="col-span-full text-center py-8" style="color: var(--text-muted);">No custom topics yet. Create your first topic!</div>';
                    return;
                }
                
                container.innerHTML = customTopics.map(topic => 
                    '<div class="glass-card rounded-xl p-4 hover-lift cursor-pointer" onclick="exploreTopic(&quot;' + topic.id + '&quot;)">' +
                        '<div class="flex items-center justify-between mb-2">' +
                            '<div class="flex items-center">' +
                                '<span class="text-2xl mr-3">' + topic.icon + '</span>' +
                                '<div>' +
                                    '<h4 class="font-semibold" style="color: var(--text-primary);">' + topic.name + '</h4>' +
                                    '<p class="text-xs" style="color: var(--text-muted);">' + topic.items + ' items</p>' +
                                '</div>' +
                            '</div>' +
                            '<button onclick="event.stopPropagation(); deleteCustomTopic(&quot;' + topic.id + '&quot;)" class="text-red-400 hover:text-red-300">' +
                                '<i class="fas fa-trash text-sm"></i>' +
                            '</button>' +
                        '</div>' +
                        '<p class="text-sm mb-3" style="color: var(--text-secondary);">' + topic.description + '</p>' +
                        '<div class="flex flex-wrap gap-1">' +
                            topic.keywords.map(keyword => 
                                '<span class="topic-tag px-2 py-1 rounded text-xs">' + keyword + '</span>'
                            ).join('') +
                        '</div>' +
                    '</div>'
                ).join('');
            }
            
            function deleteCustomTopic(topicId) {
                if (confirm('Are you sure you want to delete this topic?')) {
                    customTopics = customTopics.filter(t => t.id !== topicId);
                    localStorage.setItem('vario_custom_topics', JSON.stringify(customTopics));
                    loadCustomTopics();
                }
            }
            
            // Saved Content
            function loadSavedContent() {
                const container = document.getElementById('savedItemsGrid');
                if (!container) return;
                
                if (savedItems.length === 0) {
                    container.innerHTML = '<div class="col-span-full text-center py-8" style="color: var(--text-muted);">No saved items yet. Start exploring and save interesting content!</div>';
                    return;
                }
                
                // Generate content for saved items
                const savedContent = savedItems.map(itemId => {
                    return {
                        id: itemId,
                        platform: 'mixed',
                        title: 'Saved Item ' + itemId,
                        description: 'This is a saved item from your discoveries.',
                        image: 'https://picsum.photos/300/200?random=' + itemId,
                        author: 'Various',
                        engagement: 'Saved',
                        timestamp: '1d ago'
                    };
                });
                
                container.innerHTML = savedContent.map(item => createResultCard(item)).join('');
            }
            
            // Utility Functions
            function loadPersonalizedContent() {
                // Load initial content
                if (currentSection === 'for-you') {
                    loadForYouContent();
                }
            }
            
            function updateUI() {
                updateInterestsUI();
                loadCustomTopics();
            }
            
            function updateInterestsUI() {
                // This would update the interests display in For You section
                // Implementation depends on current UI state
            }
            
            function exploreTopic(topicId) {
                // Navigate to topic exploration
                const searchInput = document.getElementById('mainSearch');
                if (searchInput) {
                    searchInput.value = topicId;
                    showSection('search');
                    performSearch();
                }
            }
            
            function setResultsView(e, view) {
                console.log('setResultsView called with view:', view);
                
                // Remove active class from all buttons
                document.querySelectorAll('.results-view-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                if (e) {
                    // Handle clicks on icon or button
                    const button = e.target.closest('.results-view-btn');
                    if (button) {
                        button.classList.add('active');
                        console.log('Active class added to button');
                    } else {
                        console.log('Button not found via closest()');
                    }
                }
                
                // Update grid layout
                const grid = document.getElementById('resultsGrid');
                if (grid) {
                    console.log('Grid found, switching to', view, 'view');
                    if (view === 'list') {
                        // List view - single column, full width cards
                        grid.style.columnCount = '1';
                        grid.classList.remove('masonry-grid');
                        // Make cards full width in list view
                        grid.querySelectorAll('.result-card').forEach(card => {
                            card.style.width = '100%';
                            card.style.marginBottom = '1rem';
                        });
                    } else {
                        // Grid view - masonry layout
                        grid.style.columnCount = '';
                        grid.classList.add('masonry-grid');
                        // Reset card widths for masonry grid
                        grid.querySelectorAll('.result-card').forEach(card => {
                            card.style.width = '';
                            card.style.marginBottom = '';
                        });
                    }
                } else {
                    console.log('Grid not found - resultsGrid element missing');
                }
            }
            
            function createCollection() {
                const name = prompt('Enter collection name:');
                if (name) {
                    // Add collection creation logic
                    alert('Collection "' + name + '" created!');
                }
            }
            
            // Expose functions to global scope for onclick handlers
            window.toggleTheme = toggleTheme;
            window.performSearch = performSearch;
            window.setSearchFilter = setSearchFilter;
            window.searchTopic = searchTopic;
            window.setResultsView = setResultsView;
            window.removeInterest = removeInterest;
            window.addInterest = addInterest;
            window.createCustomTopic = createCustomTopic;
            window.closeTopicModal = closeTopicModal;
            window.submitCustomTopic = submitCustomTopic;
            window.exploreTopic = exploreTopic;
            window.deleteCustomTopic = deleteCustomTopic;
            window.toggleSave = toggleSave;
            window.createCollection = createCollection;
            window.previewContent = previewContent;
            window.closePreviewModal = closePreviewModal;
            window.handleGoogleSignIn = handleGoogleSignIn;
            window.handleGoogleSignInResponse = handleGoogleSignInResponse;
            window.handleSignOut = handleSignOut;
            window.connectPlatform = connectPlatform;
            window.disconnectPlatform = disconnectPlatform;
            window.toggleUserMenu = toggleUserMenu;
            window.showConnectedPlatforms = showConnectedPlatforms;
            window.closePlatformConnectionsModal = closePlatformConnectionsModal;
            window.showAccountSettings = showAccountSettings;
            window.closeAccountSettingsModal = closeAccountSettingsModal;
            
            // CRITICAL: Add event listeners as backup for view toggle buttons
            // This ensures buttons work even if onclick handlers fail
            console.log('Initializing view toggle button event listeners...');
            
            // Wait for DOM to be ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', initViewToggleButtons);
            } else {
                initViewToggleButtons();
            }
            
            function initViewToggleButtons() {
                console.log('Setting up view toggle button event listeners');
                
                // Use event delegation on the parent container
                const resultsSection = document.getElementById('search');
                if (resultsSection) {
                    resultsSection.addEventListener('click', function(e) {
                        // Check if click is on a view toggle button or its child
                        const button = e.target.closest('.results-view-btn');
                        if (button) {
                            e.preventDefault();
                            e.stopPropagation();
                            
                            console.log('View toggle button clicked!', button);
                            
                            // Determine which view based on button icon
                            const icon = button.querySelector('i');
                            const isGrid = icon && icon.classList.contains('fa-th');
                            const view = isGrid ? 'grid' : 'list';
                            
                            console.log('Switching to view:', view);
                            setResultsView(e, view);
                        }
                    });
                    console.log('Event delegation set up on search section');
                } else {
                    console.log('Search section not found for event delegation');
                }
            }
        </script>
    </body>
    </html>
    `;
}