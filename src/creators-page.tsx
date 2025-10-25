import type { Context } from 'hono'

export function creatorsPage(c: Context) {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en" class="scroll-smooth">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>For Creators - Earnly | Monetize Your Content with AI-Native Advertising</title>
        <meta name="description" content="Transform your content into revenue streams. Join thousands of creators earning with Earnly's AI-native monetization platform designed specifically for content creators.">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/advanced-styles.css" rel="stylesheet">
        
        <style>
            /* Custom Creator-focused styling */
            body {
                background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
                color: #fff;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            
            .creator-gradient {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
            
            .creator-card {
                background: rgba(30, 41, 59, 0.8);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(148, 163, 184, 0.2);
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .creator-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 35px 70px rgba(0, 0, 0, 0.4);
                border-color: rgba(102, 126, 234, 0.3);
            }
            
            .revenue-counter {
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-weight: 800;
            }
            
            .creator-stat {
                background: rgba(16, 185, 129, 0.1);
                border: 1px solid rgba(16, 185, 129, 0.3);
                border-radius: 12px;
                padding: 1.5rem;
                text-align: center;
                transition: all 0.3s ease;
            }
            
            .creator-stat:hover {
                background: rgba(16, 185, 129, 0.2);
                transform: scale(1.05);
            }
            
            .feature-icon {
                width: 60px;
                height: 60px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 16px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1rem;
            }
            
            .testimonial-card {
                background: rgba(15, 23, 42, 0.7);
                backdrop-filter: blur(15px);
                border: 1px solid rgba(148, 163, 184, 0.2);
                border-radius: 20px;
                padding: 2rem;
                position: relative;
                overflow: hidden;
            }
            
            .testimonial-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            }
            
            .floating-animation {
                animation: float 6s ease-in-out infinite;
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
            
            .pulse-glow {
                animation: pulse-glow 2s infinite;
            }
            
            @keyframes pulse-glow {
                0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.4); }
                50% { box-shadow: 0 0 30px rgba(16, 185, 129, 0.8); }
            }
            
            .creator-hero-bg {
                background: 
                    radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.2) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.2) 0%, transparent 50%),
                    radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
            }
        </style>
    </head>
    <body class="text-white overflow-x-hidden">
        <!-- Navigation -->
        <nav class="fixed top-0 w-full z-50 glass" id="navbar">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center space-x-4">
                        <a href="/" class="flex items-center">
                            <img src="https://github.com/7gmnmsbwzx-ship-it/earnly-assets/blob/main/earnly%20logo.png?raw=true" 
                                 alt="Earnly Logo" 
                                 class="h-9 w-auto">
                        </a>
                        
                        <div class="hidden md:flex space-x-8 ml-10">
                            <a href="/for-advertisers" class="text-white hover:text-blue-400 transition-colors">For Advertisers</a>
                            <a href="/for-ai-platforms" class="text-white hover:text-blue-400 transition-colors">For AI Platforms</a>
                            <a href="/creators" class="text-purple-400 hover:text-purple-300 transition-colors font-semibold">For Creators</a>
                            <a href="/geo-report" class="text-white hover:text-blue-400 transition-colors">GEO Analytics</a>
                        </div>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <div class="hidden lg:flex items-center space-x-2 text-sm">
                            <div class="flex items-center space-x-1">
                                <div class="w-2 h-2 bg-green-400 rounded-full pulse-glow"></div>
                                <span class="text-green-400">Live</span>
                            </div>
                            <span class="text-gray-400">|</span>
                            <span class="text-white counter" id="live-creators">12,847</span>
                            <span class="text-gray-400">creators earning</span>
                        </div>
                        
                        <a href="/signin" class="text-white hover:text-blue-400 transition-colors px-4 py-2 font-medium">
                            Sign In
                        </a>
                        <a href="/get-started" class="creator-gradient text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform">
                            Start Earning
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center creator-hero-bg pt-16">
            <div class="absolute inset-0 bg-black bg-opacity-40"></div>
            
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Hero Content -->
                    <div class="animate-fade-in-up">
                        <div class="mb-6">
                            <div class="inline-flex items-center space-x-2 creator-gradient rounded-full px-4 py-2 mb-6">
                                <i class="fas fa-circle text-orange-400 text-xs"></i>
                                <span class="text-sm text-white font-semibold" id="dynamic-message">Content creators deserve payment when AI uses their work.</span>
                            </div>
                        </div>
                        
                        <h1 class="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                            <span class="block text-white mb-2">Your Ideas Built</span>
                            <span class="block text-white mb-2">the Internet.</span>
                            <span class="block creator-gradient bg-clip-text text-transparent">Now They Pay You Back.</span>
                        </h1>
                        
                        <p class="text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
                            Monetize every AI interaction — from search to chat to comparison. Earnly helps you launch AI agents, syndicate your data, and turn your content into a new income engine.
                        </p>
                        
                        <!-- Creator Stats -->
                        <div class="grid grid-cols-3 gap-4 mb-8">
                            <div class="creator-stat">
                                <div class="revenue-counter text-3xl font-bold">$2.4M+</div>
                                <div class="text-sm text-gray-300">Paid to Creators</div>
                            </div>
                            <div class="creator-stat">
                                <div class="revenue-counter text-3xl font-bold">847%</div>
                                <div class="text-sm text-gray-300">Avg Revenue Increase</div>
                            </div>
                            <div class="creator-stat">
                                <div class="revenue-counter text-3xl font-bold">24hrs</div>
                                <div class="text-sm text-gray-300">Setup Time</div>
                            </div>
                        </div>

                        <!-- CTA Buttons -->
                        <div class="flex flex-col sm:flex-row gap-4 mb-8">
                            <a href="/get-started" class="creator-gradient text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform text-center">
                                <i class="fas fa-rocket mr-2"></i>
                                Start Earning Today
                            </a>
                            <a href="#how-it-works" class="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all text-center">
                                <i class="fas fa-play mr-2"></i>
                                See How It Works
                            </a>
                        </div>
                        
                        <!-- Trust Indicators -->
                        <div class="flex items-center space-x-8 text-sm text-gray-300">
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-shield-check text-green-400"></i>
                                <span>Bank-Grade Security</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-clock text-blue-400"></i>
                                <span>Real-time Payments</span>
                            </div>
                            <div class="flex items-center space-x-2">
                                <i class="fas fa-users text-purple-400"></i>
                                <span>12K+ Active Creators</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Revenue Dashboard Preview -->
                    <div class="animate-scale-in floating-animation">
                        <div class="creator-card p-8 hover-lift">
                            <div class="mb-6 flex items-center justify-between">
                                <h3 class="text-2xl font-bold text-white">Your Creator Dashboard</h3>
                                <div class="flex items-center space-x-2">
                                    <div class="w-2 h-2 bg-green-500 rounded-full pulse-glow"></div>
                                    <span class="text-sm text-green-400 font-medium">Live Earnings</span>
                                </div>
                            </div>
                            
                            <!-- Earnings Overview -->
                            <div class="grid grid-cols-2 gap-4 mb-6">
                                <div class="creator-gradient rounded-xl p-4 text-white">
                                    <div class="text-sm opacity-90 mb-1">This Month</div>
                                    <div class="text-3xl font-bold counter" id="monthly-earnings">$8,247</div>
                                    <div class="text-xs opacity-75 mt-1">
                                        <i class="fas fa-arrow-up mr-1"></i>+342% vs last month
                                    </div>
                                </div>
                                
                                <div class="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl p-4 text-white">
                                    <div class="text-sm opacity-90 mb-1">Content Views</div>
                                    <div class="text-3xl font-bold counter" id="content-views">2.8M</div>
                                    <div class="text-xs opacity-75 mt-1">
                                        <i class="fas fa-arrow-up mr-1"></i>+89% engagement
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Recent Activity -->
                            <div class="bg-gray-800/50 rounded-xl p-4 mb-6">
                                <h4 class="font-semibold text-white mb-3 flex items-center">
                                    <i class="fas fa-coins text-yellow-400 mr-2"></i>
                                    Recent Earnings
                                </h4>
                                
                                <div class="space-y-3">
                                    <div class="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                                        <div class="flex items-center space-x-3">
                                            <div class="w-10 h-10 creator-gradient rounded-lg flex items-center justify-center">
                                                <i class="fas fa-video text-white"></i>
                                            </div>
                                            <div>
                                                <div class="font-medium text-white">YouTube Video</div>
                                                <div class="text-sm text-gray-400">"AI Tools for Creators"</div>
                                            </div>
                                        </div>
                                        <div class="text-right">
                                            <div class="text-lg font-bold text-green-400">+$247</div>
                                            <div class="text-xs text-gray-500">2 hours ago</div>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                                        <div class="flex items-center space-x-3">
                                            <div class="w-10 h-10 creator-gradient rounded-lg flex items-center justify-center">
                                                <i class="fas fa-blog text-white"></i>
                                            </div>
                                            <div>
                                                <div class="font-medium text-white">Blog Post</div>
                                                <div class="text-sm text-gray-400">"Content Monetization Guide"</div>
                                            </div>
                                        </div>
                                        <div class="text-right">
                                            <div class="text-lg font-bold text-green-400">+$389</div>
                                            <div class="text-xs text-gray-500">5 hours ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Content Performance -->
                            <div class="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-4">
                                <h4 class="font-semibold text-white mb-3 flex items-center">
                                    <i class="fas fa-chart-bar text-purple-400 mr-2"></i>
                                    Top Performing Content
                                </h4>
                                <div class="space-y-2">
                                    <div class="flex justify-between">
                                        <span class="text-sm text-gray-300">Tech Reviews</span>
                                        <span class="text-sm font-semibold text-green-400">$2,847/month</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-sm text-gray-300">Tutorials</span>
                                        <span class="text-sm font-semibold text-green-400">$1,924/month</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-sm text-gray-300">Lifestyle Content</span>
                                        <span class="text-sm font-semibold text-green-400">$1,476/month</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Authentic Content Value Section -->
        <section class="py-20 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-5xl font-bold text-white mb-6">
                        <span class="creator-gradient bg-clip-text text-transparent">Every Piece</span> of Content Earns
                    </h2>
                    <p class="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
                        Your authentic content becomes a goldmine. When AI systems reference your work to answer users' questions, 
                        <span class="text-green-400 font-semibold">you get paid automatically.</span>
                    </p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    <!-- Content Type 1 -->
                    <div class="creator-card rounded-2xl p-6 text-center">
                        <div class="w-16 h-16 creator-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-blog text-white text-2xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-white mb-2">Blog Posts</h3>
                        <p class="text-gray-300 text-sm mb-4">
                            AI agents cite your articles when answering questions in your niche
                        </p>
                        <div class="text-green-400 font-semibold">$0.05 per reference</div>
                    </div>

                    <!-- Content Type 2 -->
                    <div class="creator-card rounded-2xl p-6 text-center">
                        <div class="w-16 h-16 creator-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-video text-white text-2xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-white mb-2">Video Content</h3>
                        <p class="text-gray-300 text-sm mb-4">
                            YouTube videos and tutorials referenced by AI chatbots and assistants
                        </p>
                        <div class="text-green-400 font-semibold">$0.12 per reference</div>
                    </div>

                    <!-- Content Type 3 -->
                    <div class="creator-card rounded-2xl p-6 text-center">
                        <div class="w-16 h-16 creator-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-podcast text-white text-2xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-white mb-2">Podcasts</h3>
                        <p class="text-gray-300 text-sm mb-4">
                            Episode transcripts used by AI to provide expert insights and advice
                        </p>
                        <div class="text-green-400 font-semibold">$0.08 per reference</div>
                    </div>

                    <!-- Content Type 4 -->
                    <div class="creator-card rounded-2xl p-6 text-center">
                        <div class="w-16 h-16 creator-gradient rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <i class="fas fa-book text-white text-2xl"></i>
                        </div>
                        <h3 class="text-lg font-bold text-white mb-2">Guides & Tutorials</h3>
                        <p class="text-gray-300 text-sm mb-4">
                            How-to content referenced when AI helps users solve problems
                        </p>
                        <div class="text-green-400 font-semibold">$0.15 per reference</div>
                    </div>
                </div>

                <!-- AI Usage Examples -->
                <div class="creator-card rounded-3xl p-8">
                    <h3 class="text-3xl font-bold text-white mb-8 text-center">
                        See Your Content in Action
                    </h3>
                    
                    <div class="grid md:grid-cols-2 gap-8">
                        <!-- AI Chat Example -->
                        <div class="bg-gray-800/50 rounded-2xl p-6">
                            <div class="mb-4">
                                <div class="flex items-center space-x-3 mb-4">
                                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                                        <i class="fas fa-robot text-white text-sm"></i>
                                    </div>
                                    <span class="text-gray-300 font-medium">AI Assistant</span>
                                </div>
                                <div class="bg-blue-500/20 rounded-xl p-4 text-blue-200">
                                    "Based on <span class="text-green-400 font-semibold">@YourChannel's tutorial</span>, here's how to set up a home studio..."
                                </div>
                            </div>
                            <div class="flex items-center justify-between text-sm">
                                <span class="text-gray-400">Referenced your content</span>
                                <span class="text-green-400 font-semibold">+$0.12 earned</span>
                            </div>
                        </div>

                        <!-- Search Result Example -->
                        <div class="bg-gray-800/50 rounded-2xl p-6">
                            <div class="mb-4">
                                <div class="flex items-center space-x-3 mb-4">
                                    <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                        <i class="fas fa-search text-white text-sm"></i>
                                    </div>
                                    <span class="text-gray-300 font-medium">AI Search Engine</span>
                                </div>
                                <div class="bg-purple-500/20 rounded-xl p-4 text-purple-200">
                                    "According to <span class="text-green-400 font-semibold">your blog post</span>, the best practices for content creation are..."
                                </div>
                            </div>
                            <div class="flex items-center justify-between text-sm">
                                <span class="text-gray-400">Cited your article</span>
                                <span class="text-green-400 font-semibold">+$0.05 earned</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="text-center mt-8">
                        <div class="inline-flex items-center space-x-2 bg-green-500/20 rounded-full px-6 py-3">
                            <i class="fas fa-coins text-green-400"></i>
                            <span class="text-green-400 font-semibold">Average creator earns $50-500/month from authentic content</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- How It Works Section -->
        <section id="how-it-works" class="py-20 bg-gray-900/50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-5xl font-bold text-white mb-6">
                        How <span class="creator-gradient bg-clip-text text-transparent">AI Monetization</span> Works
                    </h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        From connecting your content to earning from AI references — completely automated
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8 mb-16">
                    <!-- Step 1 -->
                    <div class="creator-card rounded-2xl p-8 text-center">
                        <div class="feature-icon mb-6">
                            <i class="fas fa-link text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-4">1. Connect Your Content Library</h3>
                        <p class="text-gray-300 mb-6">
                            Connect your existing content sources. We index your <span class="text-green-400">entire content history</span> — 
                            blog posts, videos, podcasts, tutorials, and guides become revenue sources.
                        </p>
                        <div class="bg-gray-800/50 rounded-lg p-4">
                            <div class="text-sm text-gray-400 mb-2">Content Indexed:</div>
                            <div class="text-green-400 font-semibold">2,847 pieces ready to earn</div>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="creator-card rounded-2xl p-8 text-center">
                        <div class="feature-icon mb-6">
                            <i class="fas fa-brain text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-4">2. AI Systems Reference Your Work</h3>
                        <p class="text-gray-300 mb-6">
                            When users ask AI assistants, chatbots, or copilots questions in your expertise area, 
                            <span class="text-purple-400">they cite your content</span> to provide accurate answers.
                        </p>
                        <div class="bg-gray-800/50 rounded-lg p-4">
                            <div class="text-sm text-gray-400 mb-2">This Month:</div>
                            <div class="text-purple-400 font-semibold">12,847 AI references</div>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="creator-card rounded-2xl p-8 text-center">
                        <div class="feature-icon mb-6">
                            <i class="fas fa-coins text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-white mb-4">3. Get Paid Per Reference</h3>
                        <p class="text-gray-300 mb-6">
                            <span class="text-green-400">Earn automatically</span> every time AI systems use your content. 
                            No audience needed — your authentic knowledge generates passive income forever.
                        </p>
                        <div class="creator-gradient rounded-lg p-4">
                            <div class="text-sm text-white/90 mb-1">Earnings from References</div>
                            <div class="text-2xl font-bold text-white">$1,247/month</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-5xl font-bold text-white mb-6">
                        <span class="creator-gradient bg-clip-text text-transparent">Powerful Features</span> for Creators
                    </h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Everything you need to maximize your content monetization potential
                    </p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Feature 1 -->
                    <div class="creator-card rounded-2xl p-8">
                        <div class="w-12 h-12 creator-gradient rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-chart-line text-white text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3">Real-Time Analytics</h3>
                        <p class="text-gray-300">
                            Track your earnings, audience engagement, and content performance with detailed analytics and insights.
                        </p>
                    </div>

                    <!-- Feature 2 -->
                    <div class="creator-card rounded-2xl p-8">
                        <div class="w-12 h-12 creator-gradient rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-magic text-white text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3">AI-Powered Matching</h3>
                        <p class="text-gray-300">
                            Our advanced AI ensures perfect product-content alignment for maximum conversion rates and earnings.
                        </p>
                    </div>

                    <!-- Feature 3 -->
                    <div class="creator-card rounded-2xl p-8">
                        <div class="w-12 h-12 creator-gradient rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-bolt text-white text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3">Instant Payouts</h3>
                        <p class="text-gray-300">
                            Get paid instantly with our real-time payment system. No waiting periods or minimum thresholds.
                        </p>
                    </div>

                    <!-- Feature 4 -->
                    <div class="creator-card rounded-2xl p-8">
                        <div class="w-12 h-12 creator-gradient rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-shield-alt text-white text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3">Brand Safety</h3>
                        <p class="text-gray-300">
                            All products are vetted for quality and brand safety, protecting your reputation and audience trust.
                        </p>
                    </div>

                    <!-- Feature 5 -->
                    <div class="creator-card rounded-2xl p-8">
                        <div class="w-12 h-12 creator-gradient rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-mobile-alt text-white text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3">Mobile Optimization</h3>
                        <p class="text-gray-300">
                            Seamless experience across all devices with mobile-first design and lightning-fast load times.
                        </p>
                    </div>

                    <!-- Feature 6 -->
                    <div class="creator-card rounded-2xl p-8">
                        <div class="w-12 h-12 creator-gradient rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-headset text-white text-xl"></i>
                        </div>
                        <h3 class="text-xl font-bold text-white mb-3">24/7 Support</h3>
                        <p class="text-gray-300">
                            Dedicated creator success team available around the clock to help you maximize your earnings.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Success Stories Section -->
        <section class="py-20 bg-gray-900/50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-5xl font-bold text-white mb-6">
                        Creator <span class="creator-gradient bg-clip-text text-transparent">Success Stories</span>
                    </h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Real creators, real results. See how Earnly is transforming content monetization.
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Testimonial 1 -->
                    <div class="testimonial-card">
                        <div class="flex items-center mb-6">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" 
                                 class="w-16 h-16 rounded-full mr-4" alt="Sarah Chen">
                            <div>
                                <h4 class="font-bold text-white">Sarah Chen</h4>
                                <p class="text-sm text-gray-400">Tech YouTuber • 850K subscribers</p>
                            </div>
                        </div>
                        <blockquote class="text-gray-200 mb-4">
                            "My 5-year-old tech tutorials are still earning me money! AI assistants reference my content daily, 
                            and I get paid for each citation. It's like having a passive income from my entire content history."
                        </blockquote>
                        <div class="flex items-center space-x-4 text-sm">
                            <span class="text-green-400 font-semibold">$847/month from authentic content</span>
                            <span class="text-gray-400">•</span>
                            <span class="text-gray-400">850 curated videos earning</span>
                        </div>
                    </div>

                    <!-- Testimonial 2 -->
                    <div class="testimonial-card">
                        <div class="flex items-center mb-6">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" 
                                 class="w-16 h-16 rounded-full mr-4" alt="Marcus Rodriguez">
                            <div>
                                <h4 class="font-bold text-white">Marcus Rodriguez</h4>
                                <p class="text-sm text-gray-400">Lifestyle Blogger • 2.3M monthly readers</p>
                            </div>
                        </div>
                        <blockquote class="text-gray-200 mb-4">
                            "I never imagined my blog posts from 2019 would still be making money. AI chatbots cite my lifestyle articles 
                            daily, and each reference adds up. It's incredible passive income from content I already created."
                        </blockquote>
                        <div class="flex items-center space-x-4 text-sm">
                            <span class="text-green-400 font-semibold">$1,240/month authentic content</span>
                            <span class="text-gray-400">•</span>
                            <span class="text-gray-400">2,300+ posts indexed</span>
                        </div>
                    </div>

                    <!-- Testimonial 3 -->
                    <div class="testimonial-card">
                        <div class="flex items-center mb-6">
                            <img src="https://randomuser.me/api/portraits/women/68.jpg" 
                                 class="w-16 h-16 rounded-full mr-4" alt="Emma Thompson">
                            <div>
                                <h4 class="font-bold text-white">Emma Thompson</h4>
                                <p class="text-sm text-gray-400">Podcast Host • 500K downloads/month</p>
                            </div>
                        </div>
                        <blockquote class="text-gray-200 mb-4">
                            "My podcast episodes from years ago are goldmines now. When AI systems answer business questions, 
                            they reference my old episodes and I earn from each citation. Pure passive income from existing work."
                        </blockquote>
                        <div class="flex items-center space-x-4 text-sm">
                            <span class="text-green-400 font-semibold">$580/month from 500+ episodes</span>
                            <span class="text-gray-400">•</span>
                            <span class="text-gray-400">5 years of content earning</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div class="creator-card rounded-3xl p-12">
                    <h2 class="text-5xl font-bold text-white mb-6">
                        Ready to <span class="creator-gradient bg-clip-text text-transparent">Transform</span> Your Content?
                    </h2>
                    <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join thousands of creators who are earning more with less effort. 
                        Start your monetization journey today — completely free.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <a href="/get-started" class="creator-gradient text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform">
                            <i class="fas fa-rocket mr-2"></i>
                            Start Earning Now — Free
                        </a>
                        <a href="mailto:creators@earnly.app" class="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all">
                            <i class="fas fa-comments mr-2"></i>
                            Talk to Creator Success Team
                        </a>
                    </div>
                    
                    <div class="flex items-center justify-center space-x-8 text-sm text-gray-400">
                        <div class="flex items-center space-x-2">
                            <i class="fas fa-check text-green-400"></i>
                            <span>Free Forever Plan</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <i class="fas fa-check text-green-400"></i>
                            <span>No Setup Fees</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <i class="fas fa-check text-green-400"></i>
                            <span>Cancel Anytime</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- JavaScript for Interactions -->
        <script>
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // Animate counters
            function animateCounter(element, target) {
                let current = 0;
                const increment = target / 100;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        element.textContent = target.toLocaleString();
                        clearInterval(timer);
                    } else {
                        element.textContent = Math.floor(current).toLocaleString();
                    }
                }, 20);
            }

            // Intersection Observer for animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        
                        // Animate counters when they come into view
                        if (entry.target.classList.contains('counter')) {
                            const text = entry.target.textContent;
                            if (text.includes('$')) {
                                const number = parseInt(text.replace(/[^0-9]/g, ''));
                                animateCounter(entry.target, number);
                            }
                        }
                    }
                });
            }, observerOptions);

            // Observe elements
            document.querySelectorAll('.creator-card, .creator-stat, .testimonial-card').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.6s ease-out';
                observer.observe(el);
            });

            // Update live creator count
            setInterval(() => {
                const liveCreators = document.getElementById('live-creators');
                if (liveCreators) {
                    const current = parseInt(liveCreators.textContent.replace(',', ''));
                    const newCount = current + Math.floor(Math.random() * 5) + 1;
                    liveCreators.textContent = newCount.toLocaleString();
                }
            }, 30000);

            // Dynamic message rotation
            const messages = [
                "Content creators deserve payment when AI uses their work.",
                "Traditional ad models fail in the AI era—new monetization is needed.",
                "Your content powers 80% of AI responses—earn from every interaction.",
                "Smart publishers are already earning from AI-powered queries.",
                "Creators lose $50B annually to AI content usage without compensation."
            ];

            let currentMessageIndex = 0;

            function rotateMessage() {
                const messageElement = document.getElementById('dynamic-message');
                if (messageElement) {
                    // Fade out
                    messageElement.style.opacity = '0';
                    
                    setTimeout(() => {
                        // Change message
                        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
                        messageElement.textContent = messages[currentMessageIndex];
                        
                        // Fade in
                        messageElement.style.opacity = '1';
                    }, 300);
                }
            }

            // Add transition style to message element
            document.addEventListener('DOMContentLoaded', () => {
                const messageElement = document.getElementById('dynamic-message');
                if (messageElement) {
                    messageElement.style.transition = 'opacity 0.3s ease-in-out';
                }
            });

            // Rotate message every 4 seconds
            setInterval(rotateMessage, 4000);
        </script>
    </body>
    </html>
  `)
}