// GEO Report - Generative Engine Optimization Performance Tracking
export const GeoReportPage = () => {
  return `
    <!DOCTYPE html>
    <html lang="en" class="scroll-smooth">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>GEO Report | Earnly - Generative Engine Optimization Analytics</title>
        <meta name="description" content="Track your Generative Engine Optimization performance across AI platforms. Monitor AI search rankings, optimization scores, and conversion rates across ChatGPT, Claude, Gemini, and more.">
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://getearnly.com/geo-report">
        <meta property="og:title" content="GEO Report | Earnly - Generative Engine Optimization">
        <meta property="og:description" content="Track GEO performance across AI platforms. Monitor rankings, scores, and conversions for ChatGPT, Claude, Gemini, and more.">
        <meta property="og:image" content="https://getearnly.com/static/og-geo.png">
        
        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="https://getearnly.com/geo-report">
        <meta property="twitter:title" content="GEO Report | Generative Engine Optimization Analytics">
        <meta property="twitter:description" content="Monitor your AI search performance across ChatGPT, Claude, Gemini, and Perplexity.">
        <meta property="twitter:image" content="https://getearnly.com/static/og-geo.png">
        
        <!-- Additional SEO -->
        <meta name="keywords" content="GEO, generative engine optimization, AI search optimization, ChatGPT SEO, Claude optimization, Gemini ranking, AI visibility">
        <meta name="robots" content="index, follow">
        <link rel="canonical" href="https://getearnly.com/geo-report">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/advanced-styles.css" rel="stylesheet">
        
        <!-- Additional Libraries -->
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        
        <style>
          /* Dark theme matching homepage */
          body {
            background: linear-gradient(-45deg, #1a1a2e, #16213e, #0f3460, #533483);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
          }
          
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .geo-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .geo-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 25px 50px rgba(0,0,0,0.3);
            background: rgba(255, 255, 255, 0.15);
            border-color: rgba(255, 255, 255, 0.3);
          }
          
          .ai-platform-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
          }
          
          .ai-platform-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            border-color: rgba(139, 92, 246, 0.6);
            background: rgba(255, 255, 255, 0.15);
          }
          
          .optimization-score {
            background: conic-gradient(from 0deg, #10b981, #34d399, #fbbf24, #f59e0b, #ef4444);
            border-radius: 50%;
            position: relative;
          }
          
          .score-pulse {
            animation: scorePulse 2s infinite;
          }
          
          @keyframes scorePulse {
            0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(139, 92, 246, 0.4); }
            50% { transform: scale(1.1); box-shadow: 0 0 30px rgba(139, 92, 246, 0.8); }
          }
          
          .trend-up {
            color: #34d399;
            animation: trendUp 1s ease-in-out infinite alternate;
          }
          
          .trend-down {
            color: #f87171;
            animation: trendDown 1s ease-in-out infinite alternate;
          }
          
          @keyframes trendUp {
            from { transform: translateY(0); }
            to { transform: translateY(-2px); }
          }
          
          @keyframes trendDown {
            from { transform: translateY(0); }
            to { transform: translateY(2px); }
          }
          
          .ai-suggestions {
            background: rgba(16, 185, 129, 0.1);
            border-left: 4px solid #10b981;
            backdrop-filter: blur(10px);
          }
          
          .floating-widget {
            animation: float 3s ease-in-out infinite;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          .glow-effect {
            box-shadow: 0 0 20px rgba(139, 92, 246, 0.4);
            animation: glow 2s ease-in-out infinite alternate;
          }
          
          @keyframes glow {
            from { box-shadow: 0 0 20px rgba(139, 92, 246, 0.4); }
            to { box-shadow: 0 0 30px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.6); }
          }
          
          .glass-nav {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          .metric-number {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .platform-gradient-chatgpt { background: linear-gradient(135deg, #10a37f, #00d4aa); }
          .platform-gradient-claude { background: linear-gradient(135deg, #d97706, #f59e0b); }
          .platform-gradient-gemini { background: linear-gradient(135deg, #4285f4, #34a853); }
          .platform-gradient-perplexity { background: linear-gradient(135deg, #8b5cf6, #a855f7); }
          
          .btn-interactive {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .btn-interactive:hover {
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
          }
          
          /* Hover effects */
          .hover-scale {
            transition: all 0.3s ease;
          }
          .hover-scale:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }
          
          .earnly-logo {
            height: 40px;
            width: auto;
            object-fit: contain;
            transition: all 0.3s ease;
            opacity: 0.95;
          }
          
          .earnly-logo:hover {
            opacity: 1;
            transform: scale(1.05);
            filter: brightness(1.1);
          }
        </style>
    </head>
    <body class="text-white overflow-x-hidden min-h-screen">
        <!-- Navigation -->
        <nav class="fixed top-0 w-full z-50 glass-nav">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center space-x-4">
                        <a href="/" class="flex items-center">
                            <div class="flex items-center justify-center py-2 pr-2">
                                <img src="https://raw.githubusercontent.com/7gmnmsbwzx-ship-it/earnly-assets/main/earnly%20logo.png" 
                                     alt="Earnly Logo" 
                                     class="h-9 w-auto"
                                     style="background: transparent;">
                            </div>
                        </a>
                    </div>
                    
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-white hover:text-blue-400 transition-colors">Home</a>
                        <a href="/for-advertisers" class="text-white hover:text-blue-400 transition-colors">For Advertisers</a>
                        <a href="/for-ai-platforms" class="text-white hover:text-blue-400 transition-colors">For AI Platforms</a>
                        <a href="/creators" class="text-white hover:text-purple-400 transition-colors">For Creators</a>
                        <div class="hidden lg:flex items-center space-x-2 text-sm">
                            <div class="flex items-center space-x-1">
                                <div class="w-2 h-2 bg-green-400 rounded-full pulse-glow"></div>
                                <span class="text-green-400">Live</span>
                            </div>
                            <span class="text-gray-400">|</span>
                            <span class="text-white">Real-time GEO</span>
                        </div>
                        
                        <button onclick="bookDemo()" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover-scale transition-all duration-300">
                            Book a Demo
                        </button>

                    </div>
                </div>
            </div>
        </nav>

        <!-- Free GEO Report Generator Section -->
        <section class="pt-24 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
            <div class="absolute inset-0 bg-black bg-opacity-30"></div>
            
            <!-- Floating Background Elements -->
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div class="floating-widget absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
                <div class="floating-widget absolute top-40 right-20 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
                <div class="floating-widget absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500 rounded-full opacity-20 blur-xl"></div>
            </div>
            
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <div class="inline-flex items-center space-x-2 bg-orange-500 bg-opacity-20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-lg border border-orange-500 border-opacity-30">
                        <i class="fas fa-bolt"></i>
                        <span id="geo-dynamic-banner">AI-powered search is already cannibalizing up to 50% of publisher traffic.</span>
                    </div>
                    
                    <h1 class="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                        Instantly Generate Your
                        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400">
                            Free GEO Report
                        </span>
                    </h1>
                    
                    <p class="text-xl lg:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Simply enter your website to instantly generate a <strong class="text-green-400">Free GEO Report</strong> showing your traffic and sales by AI-powered recommendations. 
                        See how <strong class="text-blue-400">audience insights</strong> can power your next campaign.
                    </p>
                </div>
                
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Report Generator Form -->
                    <div class="glass-card p-8 hover-lift">
                        <div class="mb-6">
                            <h3 class="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                <i class="fas fa-chart-line text-purple-600 mr-3"></i>
                                Generate Free Report
                            </h3>
                            <p class="text-gray-600">Enter any website URL to see AI optimization opportunities and performance insights.</p>
                        </div>
                        
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                                <div class="relative">
                                    <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                        <i class="fas fa-globe"></i>
                                    </span>
                                    <input type="url" id="website-url" value="etsy.com" 
                                           class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 font-semibold text-lg bg-white"
                                           placeholder="example.com" oninput="updateReportPreview()">
                                </div>
                            </div>
                            
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                                    <select id="report-industry" onchange="updateReportPreview()" 
                                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-gray-900 font-semibold bg-white">
                                        <option value="ecommerce">E-commerce</option>
                                        <option value="marketplace">Marketplace</option>
                                        <option value="saas">SaaS</option>
                                        <option value="retail">Retail</option>
                                        <option value="services">Services</option>
                                    </select>
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">Region</label>
                                    <select id="report-region" onchange="updateReportPreview()" 
                                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 text-gray-900 font-semibold bg-white">
                                        <option value="global">Global</option>
                                        <option value="us">United States</option>
                                        <option value="eu">Europe</option>
                                        <option value="asia">Asia-Pacific</option>
                                    </select>
                                </div>
                            </div>
                            
                            <button onclick="generateFreeReport()" 
                                    class="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                                <i class="fas fa-chart-bar mr-2"></i>
                                Generate Free Report
                            </button>
                            
                            <div class="text-center">
                                <p class="text-sm text-gray-500">
                                    <i class="fas fa-shield-alt text-green-500 mr-1"></i>
                                    100% Free • No Email Required • Instant Results
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Live Example Preview -->
                    <div class="glass-card p-8">
                        <div class="mb-6 flex items-center justify-between">
                            <h3 class="text-2xl font-bold text-gray-900 flex items-center">
                                <i class="fas fa-eye text-blue-600 mr-3"></i>
                                Live Example: Etsy.com
                            </h3>
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-green-500 rounded-full pulse-glow"></div>
                                <span class="text-sm text-green-600 font-medium">Live Data</span>
                            </div>
                        </div>
                        
                        <div class="space-y-6">

                            
                            <!-- Key Insights -->
                            <div class="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4">
                                <h4 class="font-semibold text-gray-800 mb-3">Key Opportunities</h4>
                                <div class="space-y-2">
                                    <div class="flex items-start">
                                        <i class="fas fa-arrow-up text-green-600 mt-1 mr-2"></i>
                                        <span class="text-sm text-gray-700">47% increase potential in "handmade gifts" queries</span>
                                    </div>
                                    <div class="flex items-start">
                                        <i class="fas fa-target text-blue-600 mt-1 mr-2"></i>
                                        <span class="text-sm text-gray-700">Untapped seasonal optimization opportunities</span>
                                    </div>
                                    <div class="flex items-start">
                                        <i class="fas fa-lightbulb text-purple-600 mt-1 mr-2"></i>
                                        <span class="text-sm text-gray-700">Content gaps in AI recommendation algorithms</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- CTA for Advertisers -->
                            <div class="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-4 border border-orange-200">
                                <div class="flex items-center mb-3">
                                    <i class="fas fa-bullhorn text-orange-600 mr-2"></i>
                                    <h4 class="font-semibold text-gray-800">Advertiser Opportunity</h4>
                                </div>
                                <p class="text-sm text-gray-700 mb-3">
                                    Etsy's audience shows high engagement with AI recommendations. 
                                    <strong>Perfect target for contextual advertising campaigns.</strong>
                                </p>
                                <button onclick="startAdvertiserCampaign()" 
                                        class="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg font-semibold text-sm hover:scale-105 transition-all">
                                    <i class="fas fa-rocket mr-2"></i>
                                    Start Advertising Campaign
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <!-- Main GEO Analytics Dashboard -->
        <section class="py-16 bg-gray-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <div class="inline-flex items-center space-x-2 bg-purple-500 bg-opacity-20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-lg border border-purple-500 border-opacity-30">
                        <i class="fas fa-robot"></i>
                        <span>Generative Engine Optimization</span>
                    </div>
                    <h1 class="text-6xl font-bold mb-6">
                        <span class="text-white">GEO Report</span>
                        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                            AI Optimization Performance
                        </span>
                    </h1>
                    <p class="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Track your optimization performance across generative AI platforms. Monitor rankings in ChatGPT, Claude, Gemini, Perplexity, and other AI engines to maximize your visibility and conversions.
                    </p>
                </div>

                <!-- Key Metrics Overview -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    <div class="geo-card rounded-2xl p-8 text-center floating-widget">
                        <div class="w-20 h-20 platform-gradient-chatgpt rounded-full flex items-center justify-center mx-auto mb-6 score-pulse">
                            <i class="fas fa-search text-white text-2xl"></i>
                        </div>
                        <h3 class="text-4xl font-bold text-white mb-3" id="overall-score">87</h3>
                        <p class="text-gray-300 font-medium text-lg mb-4">Overall GEO Score</p>
                        <div class="flex items-center justify-center">
                            <i class="fas fa-arrow-up trend-up mr-2"></i>
                            <span class="text-green-400 font-bold text-lg">+12.4%</span>
                        </div>
                    </div>

                    <div class="geo-card rounded-2xl p-8 text-center floating-widget" style="animation-delay: -0.5s;">
                        <div class="w-20 h-20 platform-gradient-claude rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-eye text-white text-2xl"></i>
                        </div>
                        <h3 class="text-4xl font-bold text-white mb-3" id="visibility-score">92</h3>
                        <p class="text-gray-300 font-medium text-lg mb-4">AI Visibility Score</p>
                        <div class="flex items-center justify-center">
                            <i class="fas fa-arrow-up trend-up mr-2"></i>
                            <span class="text-green-400 font-bold text-lg">+8.7%</span>
                        </div>
                    </div>

                    <div class="geo-card rounded-2xl p-8 text-center floating-widget" style="animation-delay: -1s;">
                        <div class="w-20 h-20 platform-gradient-gemini rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-chart-line text-white text-2xl"></i>
                        </div>
                        <h3 class="text-4xl font-bold text-white mb-3" id="conversion-rate">15.8%</h3>
                        <p class="text-gray-300 font-medium text-lg mb-4">AI Conversion Rate</p>
                        <div class="flex items-center justify-center">
                            <i class="fas fa-arrow-up trend-up mr-2"></i>
                            <span class="text-green-400 font-bold text-lg">+23.1%</span>
                        </div>
                    </div>

                    <div class="geo-card rounded-2xl p-8 text-center floating-widget" style="animation-delay: -1.5s;">
                        <div class="w-20 h-20 platform-gradient-perplexity rounded-full flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-dollar-sign text-white text-2xl"></i>
                        </div>
                        <h3 class="text-4xl font-bold text-white mb-3" id="ai-revenue">$47.2K</h3>
                        <p class="text-gray-300 font-medium text-lg mb-4">AI-Generated Revenue</p>
                        <div class="flex items-center justify-center">
                            <i class="fas fa-arrow-up trend-up mr-2"></i>
                            <span class="text-green-400 font-bold text-lg">+34.5%</span>
                        </div>
                    </div>
                </div>



                <!-- Combined Analytics Dashboard -->
                <div class="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
                    <!-- GEO Performance Overview -->
                    <div class="geo-card rounded-2xl p-6 flex flex-col h-full">
                        <h3 class="text-lg font-bold text-white mb-5 flex items-center">
                            <i class="fas fa-chart-line mr-3 text-blue-400 text-lg"></i>
                            GEO Performance Overview
                        </h3>
                        <div class="flex-1 flex flex-col">
                            <!-- Key Metrics -->
                            <div class="grid grid-cols-2 gap-3 mb-5">
                                <div class="bg-blue-500 bg-opacity-15 rounded-xl p-3 text-center border border-blue-400 border-opacity-20">
                                    <div class="text-3xl font-bold text-blue-400 mb-1" id="overall-score">94</div>
                                    <div class="text-xs font-medium text-gray-300">Overall Score</div>
                                </div>
                                <div class="bg-green-500 bg-opacity-15 rounded-xl p-3 text-center border border-green-400 border-opacity-20">
                                    <div class="text-3xl font-bold text-green-400 mb-1" id="ai-visibility">87</div>
                                    <div class="text-xs font-medium text-gray-300">AI Visibility</div>
                                </div>
                            </div>
                            
                            <!-- Additional Metrics Row -->
                            <div class="grid grid-cols-2 gap-3 mb-5">
                                <div class="bg-purple-500 bg-opacity-15 rounded-lg p-2 text-center">
                                    <div class="text-lg font-bold text-purple-400">15.8%</div>
                                    <div class="text-xs text-gray-400">Conversion</div>
                                </div>
                                <div class="bg-orange-500 bg-opacity-15 rounded-lg p-2 text-center">
                                    <div class="text-lg font-bold text-orange-400">42.3K</div>
                                    <div class="text-xs text-gray-400">Queries</div>
                                </div>
                            </div>
                            
                            <!-- Mini Trend Chart -->
                            <div class="flex-1 min-h-[100px] mb-4">
                                <canvas id="optimization-trends-chart" width="280" height="100"></canvas>
                            </div>
                            
                            <!-- Performance Summary -->
                            <div class="mt-auto pt-3 border-t border-white border-opacity-10">
                                <div class="flex justify-between items-center text-sm mb-2">
                                    <span class="text-gray-300">This Week</span>
                                    <span class="text-green-400 font-semibold flex items-center">
                                        <i class="fas fa-arrow-up text-xs mr-1"></i>
                                        +12.4%
                                    </span>
                                </div>
                                <div class="flex justify-between items-center text-xs">
                                    <span class="text-gray-400">Trend</span>
                                    <span class="text-blue-400 font-medium">Strongly Positive</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Platform Performance Comparison -->
                    <div class="geo-card rounded-2xl p-6 flex flex-col h-full">
                        <h3 class="text-lg font-bold text-white mb-5 flex items-center">
                            <i class="fas fa-robot mr-3 text-green-400 text-lg"></i>
                            Platform Performance
                        </h3>
                        <div class="flex-1 flex flex-col">
                            <!-- Platform Rankings -->
                            <div class="space-y-2 mb-5" id="platform-rankings">
                                <!-- Will be populated by JavaScript -->
                            </div>
                            
                            <!-- Performance Chart -->
                            <div class="flex-1 min-h-[120px] mb-4">
                                <canvas id="query-performance-chart" width="280" height="120"></canvas>
                            </div>
                            
                            <!-- Platform Insights -->
                            <div class="mt-auto pt-3 border-t border-white border-opacity-10">
                                <div class="flex justify-between items-center text-sm mb-2">
                                    <span class="text-gray-300">Best Platform</span>
                                    <span class="text-green-400 font-semibold">ChatGPT</span>
                                </div>
                                <div class="flex justify-between items-center text-xs">
                                    <span class="text-gray-400">Growth Rate</span>
                                    <span class="text-green-400 font-medium">+12.4% avg</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Query Intelligence -->
                    <div class="geo-card rounded-2xl p-6 flex flex-col h-full">
                        <h3 class="text-lg font-bold text-white mb-5 flex items-center">
                            <i class="fas fa-brain mr-3 text-purple-400 text-lg"></i>
                            Query Intelligence
                        </h3>
                        <div class="flex-1 flex flex-col">
                            <!-- Top Query Highlight -->
                            <div class="bg-purple-500 bg-opacity-15 rounded-xl p-3 mb-5 border border-purple-400 border-opacity-20">
                                <div class="flex items-center justify-between">
                                    <div class="flex-1 min-w-0">
                                        <div class="text-xs font-semibold text-purple-400 mb-1">Top Performing Query</div>
                                        <div class="text-white text-sm font-medium truncate" id="top-query-text">
                                            "best AI-powered productivity tools"
                                        </div>
                                        <div class="text-xs text-gray-400 mt-1" id="top-query-stats">
                                            8,420 imp • 234 conv
                                        </div>
                                    </div>
                                    <div class="ml-3">
                                        <div class="w-10 h-10 relative">
                                            <svg class="w-10 h-10 transform -rotate-90">
                                                <circle cx="20" cy="20" r="16" stroke="currentColor" stroke-width="2" fill="transparent" class="text-white text-opacity-20"/>
                                                <circle cx="20" cy="20" r="16" stroke="currentColor" stroke-width="2" fill="transparent" class="text-purple-400" 
                                                  stroke-dasharray="100" stroke-dashoffset="6" stroke-linecap="round"/>
                                            </svg>
                                            <div class="absolute inset-0 flex items-center justify-center">
                                                <span class="text-xs font-bold text-white">94</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Query Categories -->
                            <div class="mb-5">
                                <h4 class="text-sm font-medium text-gray-300 mb-3">Query Categories</h4>
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center space-x-2">
                                            <div class="w-3 h-3 bg-blue-400 rounded-full"></div>
                                            <span class="text-sm text-gray-300">Product</span>
                                        </div>
                                        <span class="text-blue-400 font-semibold text-sm">35%</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center space-x-2">
                                            <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                                            <span class="text-sm text-gray-300">Compare</span>
                                        </div>
                                        <span class="text-green-400 font-semibold text-sm">28%</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center space-x-2">
                                            <div class="w-3 h-3 bg-orange-400 rounded-full"></div>
                                            <span class="text-sm text-gray-300">How-to</span>
                                        </div>
                                        <span class="text-orange-400 font-semibold text-sm">15%</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Categories Chart -->
                            <div class="flex-1 flex items-center justify-center min-h-[120px] mb-4">
                                <canvas id="query-categories-chart" width="180" height="120"></canvas>
                            </div>
                            
                            <!-- Query Summary -->
                            <div class="mt-auto pt-3 border-t border-white border-opacity-10">
                                <div class="flex justify-between items-center text-sm mb-2">
                                    <span class="text-gray-300">Total Queries</span>
                                    <span class="text-purple-400 font-semibold">42.3K</span>
                                </div>
                                <div class="flex justify-between items-center text-xs">
                                    <span class="text-gray-400">Avg Score</span>
                                    <span class="text-purple-400 font-medium">87.2</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- AI Optimization Suggestions -->
                <div class="geo-card rounded-2xl p-10 mb-16">
                    <h2 class="text-3xl font-bold text-white mb-10 flex items-center">
                        <i class="fas fa-lightbulb mr-4 text-yellow-400"></i>
                        AI Optimization Suggestions
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8" id="optimization-suggestions">
                        <!-- Suggestions will be populated by JavaScript -->
                    </div>
                </div>


            </div>
        </section>

        <!-- GEO vs Traditional SEO Comparison -->
        <section class="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
                        GEO vs Traditional SEO
                    </h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Understanding the key differences between Generative Engine Optimization and traditional Search Engine Optimization
                    </p>
                </div>

                <div class="grid md:grid-cols-2 gap-8 mb-20">
                    <!-- Traditional SEO -->
                    <div class="geo-card rounded-3xl p-8 border-l-4 border-gray-500">
                        <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
                            <i class="fas fa-search mr-3 text-gray-400"></i>
                            Traditional SEO
                        </h3>
                        <div class="space-y-4">
                            <div class="flex items-start space-x-3">
                                <i class="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i>
                                <span class="text-gray-300">Optimizes for search engine rankings</span>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i>
                                <span class="text-gray-300">Focuses on driving traffic to websites</span>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i>
                                <span class="text-gray-300">Keyword-focused content strategy</span>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fas fa-check-circle text-green-400 mt-1 flex-shrink-0"></i>
                                <span class="text-gray-300">Link building for domain authority</span>
                            </div>
                        </div>
                    </div>

                    <!-- Generative Engine Optimization -->
                    <div class="geo-card rounded-3xl p-8 border-l-4 border-blue-500">
                        <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
                            <i class="fas fa-robot mr-3 text-blue-400"></i>
                            Generative Engine Optimization
                        </h3>
                        <div class="space-y-4">
                            <div class="flex items-start space-x-3">
                                <i class="fas fa-check-circle text-blue-400 mt-1 flex-shrink-0"></i>
                                <span class="text-gray-300">Optimizes for AI search citations</span>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fas fa-check-circle text-blue-400 mt-1 flex-shrink-0"></i>
                                <span class="text-gray-300">Focuses on brand visibility in AI responses</span>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fas fa-check-circle text-blue-400 mt-1 flex-shrink-0"></i>
                                <span class="text-gray-300">Answer-first content structure</span>
                            </div>
                            <div class="flex items-start space-x-3">
                                <i class="fas fa-check-circle text-blue-400 mt-1 flex-shrink-0"></i>
                                <span class="text-gray-300">Entity optimization and schema markup</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Key GEO Strategies -->
                <div class="text-center mb-12">
                    <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Key GEO Strategies
                    </h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Essential optimization techniques for maximizing your visibility in AI-powered search results
                    </p>
                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <!-- Answer-First Content -->
                    <div class="geo-card rounded-3xl p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                                <i class="fas fa-question-circle text-white text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Answer-First Content</h3>
                        </div>
                        <p class="text-gray-300 mb-4">
                            Structure content to directly answer questions in the first 50-80 words, making it easy for AI systems to extract and cite.
                        </p>
                        <div class="bg-gray-800 rounded-lg p-4">
                            <div class="text-sm text-gray-400 mb-2">Best Practice:</div>
                            <div class="text-blue-400 font-mono text-sm">
                                "The best email marketing platform for small businesses is [Answer]. Here's why: [3-5 key benefits]..."
                            </div>
                        </div>
                    </div>

                    <!-- Schema Markup -->
                    <div class="geo-card rounded-3xl p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mr-4">
                                <i class="fas fa-code text-white text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Schema Markup</h3>
                        </div>
                        <p class="text-gray-300 mb-4">
                            Implement comprehensive structured data to help AI systems understand your content and business entities.
                        </p>
                        <div class="bg-gray-800 rounded-lg p-4">
                            <div class="text-sm text-gray-400 mb-2">Key Types:</div>
                            <div class="text-green-400 font-mono text-sm">
                                FAQPage, Product, Organization, Article, Review, HowTo
                            </div>
                        </div>
                    </div>

                    <!-- Entity Optimization -->
                    <div class="geo-card rounded-3xl p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                                <i class="fas fa-network-wired text-white text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Entity Optimization</h3>
                        </div>
                        <p class="text-gray-300 mb-4">
                            Build strong entity relationships and topical authority to become a trusted source for AI systems.
                        </p>
                        <div class="bg-gray-800 rounded-lg p-4">
                            <div class="text-sm text-gray-400 mb-2">Focus Areas:</div>
                            <div class="text-purple-400 font-mono text-sm">
                                Brand mentions, Expert authorship, Industry connections
                            </div>
                        </div>
                    </div>

                    <!-- Citation Tracking -->
                    <div class="geo-card rounded-3xl p-8">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mr-4">
                                <i class="fas fa-chart-line text-white text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold text-white">Citation Tracking</h3>
                        </div>
                        <p class="text-gray-300 mb-4">
                            Monitor and measure your brand's visibility across AI platforms to optimize performance continuously.
                        </p>
                        <div class="bg-gray-800 rounded-lg p-4">
                            <div class="text-sm text-gray-400 mb-2">Track:</div>
                            <div class="text-orange-400 font-mono text-sm">
                                Citation frequency, Source attribution, Response quality
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>

        <!-- Optimized Footer -->
        <footer class="bg-gray-900 text-white py-16 border-t border-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-5 md:grid-cols-4 gap-8">
                    <!-- Company Info -->
                    <div class="lg:col-span-2">
                        <div class="flex items-center mb-6">
                            <img src="https://raw.githubusercontent.com/7gmnmsbwzx-ship-it/earnly-assets/main/earnly%20logo.png" 
                                 alt="Earnly Logo" 
                                 class="h-10 w-auto"
                                 style="background: transparent;">
                        </div>
                        <p class="text-gray-400 mb-6 leading-relaxed max-w-md">
                            The world's most advanced AI-native monetization platform connecting advertisers with AI platforms through contextual recommendations and real-time optimization.
                        </p>
                        <div class="flex space-x-4">
                            <a href="https://twitter.com/getearnly" class="text-gray-400 hover:text-blue-400 transition-colors" title="Follow us on Twitter">
                                <i class="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="https://linkedin.com/company/getearnly" class="text-gray-400 hover:text-blue-500 transition-colors" title="Connect on LinkedIn">
                                <i class="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="https://github.com/getearnly" class="text-gray-400 hover:text-purple-400 transition-colors" title="View our GitHub">
                                <i class="fab fa-github text-xl"></i>
                            </a>
                            <a href="https://discord.gg/earnly" class="text-gray-400 hover:text-indigo-400 transition-colors" title="Join our Discord">
                                <i class="fab fa-discord text-xl"></i>
                            </a>
                        </div>
                    </div>
                    
                    <!-- Solutions -->
                    <div>
                        <h4 class="font-semibold text-white mb-6">Solutions</h4>
                        <ul class="space-y-3 text-gray-400">
                            <li><a href="/for-advertisers" class="hover:text-white transition-colors flex items-center">
                                <i class="fas fa-bullhorn w-4 text-xs mr-3"></i>For Advertisers
                            </a></li>
                            <li><a href="/for-ai-platforms" class="hover:text-white transition-colors flex items-center">
                                <i class="fas fa-robot w-4 text-xs mr-3"></i>For AI Platforms
                            </a></li>
                            <li><a href="/creators" class="hover:text-white transition-colors flex items-center">
                                <i class="fas fa-users w-4 text-xs mr-3"></i>For Creators
                            </a></li>
                            <li><a href="/geo-report" class="hover:text-white transition-colors flex items-center">
                                <i class="fas fa-chart-line w-4 text-xs mr-3"></i>GEO Analytics
                            </a></li>
                        </ul>
                    </div>
                    
                    <!-- Resources -->
                    <div>
                        <h4 class="font-semibold text-white mb-6">Resources</h4>
                        <ul class="space-y-3 text-gray-400">
                            <li><a href="/docs" class="hover:text-white transition-colors flex items-center">
                                <i class="fas fa-book w-4 text-xs mr-3"></i>Documentation
                            </a></li>
                            <li><a href="https://api.getearnly.com" class="hover:text-white transition-colors flex items-center">
                                <i class="fas fa-code w-4 text-xs mr-3"></i>API Reference
                            </a></li>
                            <li><a href="/help" class="hover:text-white transition-colors flex items-center">
                                <i class="fas fa-question-circle w-4 text-xs mr-3"></i>Help Center
                            </a></li>
                            <li><a href="https://status.getearnly.com" class="hover:text-white transition-colors flex items-center">
                                <i class="fas fa-heartbeat w-4 text-xs mr-3"></i>System Status
                            </a></li>
                        </ul>
                    </div>
                    
                    <!-- Company & Contact -->
                    <div>
                        <h4 class="font-semibold text-white mb-6">Contact</h4>
                        <ul class="space-y-3 text-gray-400">
                            <li><a href="mailto:hello@getearnly.com" class="hover:text-white transition-colors flex items-center">
                                <i class="fas fa-envelope w-4 text-xs mr-3"></i>hello@getearnly.com
                            </a></li>
                            <li><a href="mailto:support@getearnly.com" class="hover:text-white transition-colors flex items-center">
                                <i class="fas fa-life-ring w-4 text-xs mr-3"></i>Support
                            </a></li>
                            <li><a href="mailto:partnerships@getearnly.com" class="hover:text-white transition-colors flex items-center">
                                <i class="fas fa-handshake w-4 text-xs mr-3"></i>Partnerships
                            </a></li>
                            <li><a href="/careers" class="hover:text-white transition-colors flex items-center">
                                <i class="fas fa-briefcase w-4 text-xs mr-3"></i>Careers
                            </a></li>
                        </ul>
                    </div>
                </div>
                
                <!-- Bottom Section -->
                <div class="border-t border-gray-800 mt-12 pt-8">
                    <div class="flex flex-col lg:flex-row justify-between items-center">
                        <div class="text-gray-400 text-sm mb-6 lg:mb-0 text-center lg:text-left">
                            <p>&copy; 2025 Earnly AI. All rights reserved.</p>
                            <p class="mt-1">Transforming AI conversations into revenue streams worldwide.</p>
                        </div>
                        <div class="flex flex-wrap justify-center lg:justify-end gap-6 text-sm text-gray-400">
                            <a href="/privacy" class="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="/terms" class="hover:text-white transition-colors">Terms of Service</a>
                            <a href="/security" class="hover:text-white transition-colors">Security</a>
                            <a href="/cookies" class="hover:text-white transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <script src="/static/geo-report.js"></script>
    </body>
    </html>
  `
}