// For AI Platforms - Integration & Revenue Opportunities Page
export const ForAIPlatformsPage = () => {
  return `
    <!DOCTYPE html>
    <html lang="en" class="scroll-smooth">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>For AI Platforms | Earnly - Monetize Every Conversation</title>
        <meta name="description" content="Transform your AI platform into a revenue engine. Seamless integration, contextual recommendations, transparent earnings.">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/advanced-styles.css" rel="stylesheet">
        
        <style>
          .integration-card {
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .integration-card:hover {
            transform: translateY(-8px) rotateY(5deg);
            box-shadow: 0 25px 50px rgba(0,0,0,0.15);
          }
          
          .revenue-metric {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            animation: revenue-pulse 3s infinite;
          }
          
          @keyframes revenue-pulse {
            0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
            50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.6); }
          }
          
          .code-preview {
            background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
            font-family: 'Monaco', 'Menlo', monospace;
          }
          
          .tech-stack {
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
          }
          
          /* Custom slider styles */
          .slider {
            -webkit-appearance: none;
            background: transparent;
            cursor: pointer;
          }
          
          .slider::-webkit-slider-track {
            background: #374151;
            height: 8px;
            border-radius: 4px;
          }
          
          .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            border: 2px solid #1f2937;
          }
          
          .slider::-moz-range-track {
            background: #374151;
            height: 8px;
            border-radius: 4px;
          }
          
          .slider::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            border: 2px solid #1f2937;
          }
          
          /* Glass morphism effects */
          .glass {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          
          /* Hover effects */
          .hover-scale {
            transition: all 0.3s ease;
          }
          .hover-scale:hover {
            transform: translateY(-2px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          }
          
          /* Pulse glow animation */
          .pulse-glow {
            animation: pulse-glow 2s infinite;
          }
          
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 5px rgba(34, 197, 94, 0.5); }
            50% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.8), 0 0 30px rgba(34, 197, 94, 0.6); }
          }
        </style>
    </head>
    <body class="bg-gray-900 text-white overflow-x-hidden">
        <!-- Navigation -->
        <nav class="fixed top-0 w-full z-50 glass">
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
                        <a href="/creators" class="text-white hover:text-purple-400 transition-colors">For Creators</a>
                        <a href="/geo-report" class="text-white hover:text-blue-400 transition-colors">GEO Analytics</a>
                        <a href="/dashboard/platform" class="text-white hover:text-blue-400 transition-colors bg-green-600 bg-opacity-20 px-3 py-1 rounded-lg border border-green-500 border-opacity-30">
                            <i class="fas fa-cogs mr-2"></i>Dashboard
                        </a>
                        <button onclick="startIntegrationNow()" class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover-scale transition-all duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section class="relative min-h-screen flex items-center animated-bg pt-16">
            <div class="absolute inset-0 bg-black bg-opacity-50"></div>
            
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Hero Content -->
                    <div class="animate-fade-in-up">
                        <div class="mb-6">
                            <div class="inline-flex items-center space-x-2 bg-white bg-opacity-10 rounded-full px-4 py-2 mb-4">
                                <span class="w-2 h-2 bg-green-400 rounded-full pulse-glow"></span>
                                <span class="text-sm text-white" id="ai-platform-dynamic-banner">Real-time data integration boosts AI accuracy by 40%.</span>
                            </div>
                        </div>
                        
                        <h1 class="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                            Turn Conversations Into
                            <span class="text-gradient text-glow">Revenue Streams</span>
                        </h1>
                        
                        <p class="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
                            Seamlessly monetize your AI platform with contextual recommendations that 
                            <span class="text-green-400 font-semibold">users actually appreciate</span>. 
                            <span class="text-blue-400 font-semibold">One SDK call</span> to unlock 
                            <span class="text-purple-400 font-semibold">unlimited revenue potential</span>.
                        </p>
                        
                        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                            <button onclick="startQuickIntegration()" class="btn-interactive bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover-lift">
                                <i class="fas fa-code mr-3"></i>
                                Quick Integration
                            </button>
                            <button onclick="viewLiveDemo()" class="btn-interactive bg-white bg-opacity-10 border border-white border-opacity-30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover-lift">
                                <i class="fas fa-play mr-3"></i>
                                See Live Demo
                            </button>
                        </div>
                        
                        <!-- Live Revenue Metrics -->
                        <div class="grid grid-cols-3 gap-6 text-center">
                            <div>
                                <div class="text-3xl font-bold text-green-400 counter" id="live-monthly-revenue" data-target="124750">$124,750</div>
                                <div class="text-gray-300 text-sm">Monthly Revenue</div>
                                <div class="text-gray-400 text-xs">average performance</div>
                            </div>
                            <div>
                                <div class="text-3xl font-bold text-blue-400 counter" id="live-integration-time" data-target="15">15min</div>
                                <div class="text-gray-300 text-sm">Avg Integration Time</div>
                                <div class="text-gray-400 text-xs">to first revenue</div>
                            </div>
                            <div>
                                <div class="text-3xl font-bold text-purple-400 counter" id="live-satisfaction" data-target="94">94%</div>
                                <div class="text-gray-300 text-sm">User Satisfaction</div>
                                <div class="text-gray-400 text-xs">recommendation quality</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Live Integration Preview -->
                    <div class="animate-scale-in">
                        <div class="glass-card p-6 hover-lift">
                            <div class="mb-4 flex items-center justify-between">
                                <h3 class="text-xl font-bold text-gray-800">Live Integration Preview</h3>
                                <div class="flex items-center space-x-2">
                                    <div class="w-2 h-2 bg-green-500 rounded-full pulse-glow"></div>
                                    <span class="text-sm text-green-600 font-medium">Running</span>
                                </div>
                            </div>
                            
                            <!-- AI Conversation Simulation -->
                            <div class="bg-gray-50 rounded-xl p-4 mb-4">
                                <div class="mb-3">
                                    <div class="flex items-center space-x-2 mb-2">
                                        <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                            <i class="fas fa-user text-white text-xs"></i>
                                        </div>
                                        <span class="text-gray-800 font-medium text-sm">User</span>
                                    </div>
                                    <div class="bg-white rounded-lg p-2 ml-8">
                                        <p class="text-gray-800 text-sm">I need a reliable project management tool for my team</p>
                                    </div>
                                </div>
                                
                                <div class="mb-2">
                                    <div class="flex items-center space-x-2 mb-2">
                                        <div class="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                            <i class="fas fa-robot text-white text-xs"></i>
                                        </div>
                                        <span class="text-gray-800 font-medium text-sm">Your AI</span>
                                    </div>
                                    <div class="bg-white rounded-lg p-2 ml-8">
                                        <p class="text-gray-800 text-sm mb-2">I can help you find the perfect project management solution! Based on your team size and needs:</p>
                                        
                                        <!-- Earnly Monetization -->
                                        <div class="border-l-4 border-green-500 bg-green-50 rounded-r-lg p-2">
                                            <div class="flex items-center space-x-2">
                                                <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=40&h=40&fit=crop" 
                                                     class="w-10 h-10 rounded-lg object-cover flex-shrink-0" alt="Product">
                                                <div class="flex-1 min-w-0">
                                                    <div class="flex items-center justify-between">
                                                        <h4 class="font-semibold text-gray-900 text-sm truncate">Asana Premium</h4>
                                                        <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs flex-shrink-0">97% Match</span>
                                                    </div>
                                                    <p class="text-xs text-gray-600">Advanced project tracking with team collaboration</p>
                                                    <div class="flex items-center justify-between mt-1">
                                                        <span class="text-sm font-bold text-green-600">Free Trial</span>
                                                        <span class="text-xs text-gray-500"><i class="fas fa-shield-alt mr-1"></i>Sponsored by Earnly</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Integration Code -->
                            <div class="code-preview rounded-xl p-3 text-green-400 text-sm mb-4">
                                <div class="mb-1 text-gray-400 text-xs">// Your integration (3 lines)</div>
                                <div class="mb-1">import { Earnly } from 'earnly-sdk'</div>
                                <div class="mb-1">const recommendations = await earnly.query({</div>
                                <div class="ml-4 mb-1">context: userMessage</div>
                                <div>})</div>
                            </div>
                            
                            <div class="flex space-x-2">
                                <button onclick="tryLiveDemo()" class="flex-1 bg-gradient-to-r from-green-600 to-teal-600 text-white py-2 px-3 rounded-lg font-semibold text-sm hover:scale-105 transition-transform">
                                    Try Interactive Demo
                                </button>
                                <button onclick="viewFullCode()" class="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                                    <i class="fas fa-code text-sm"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Integration Methods Section -->
        <section class="py-20 bg-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-5xl font-bold text-white mb-6">
                        Integration Made Simple
                    </h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Choose the integration method that works best for your platform. 
                        From one-line SDK to enterprise webhooks, we support every architecture.
                    </p>
                </div>
                
                <div class="grid md:grid-cols-3 gap-8">
                    <!-- SDK Integration -->
                    <div class="integration-card glass-card p-8 hover-lift">
                        <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                            <i class="fas fa-bolt text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Quick Start SDK</h3>
                        <p class="text-gray-600 mb-6">
                            One line of code, unlimited possibilities. Perfect for rapid integration 
                            and getting started in minutes, not hours.
                        </p>
                        
                        <div class="bg-gray-900 rounded-lg p-4 mb-6 text-green-400 text-sm font-mono">
                            <div class="text-gray-400 mb-2">npm install earnly-sdk</div>
                            <div>const recs = earnly.query(context)</div>
                        </div>
                        
                        <ul class="space-y-2 text-sm text-gray-700 mb-6">
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>2-minute setup</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Auto-optimization</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Real-time analytics</li>
                        </ul>
                        
                        <button onclick="startSDKIntegration()" class="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                            Start with SDK
                        </button>
                    </div>
                    
                    <!-- REST API -->
                    <div class="integration-card glass-card p-8 hover-lift">
                        <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                            <i class="fas fa-code text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">REST API</h3>
                        <p class="text-gray-600 mb-6">
                            Full control with our RESTful API. Perfect for custom implementations 
                            and advanced use cases with complete flexibility.
                        </p>
                        
                        <div class="bg-gray-900 rounded-lg p-4 mb-6 text-green-400 text-sm font-mono">
                            <div class="text-gray-400 mb-2">POST /api/recommendations</div>
                            <div>curl -H "Authorization: Bearer $KEY"</div>
                        </div>
                        
                        <ul class="space-y-2 text-sm text-gray-700 mb-6">
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Full customization</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Language agnostic</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Enterprise ready</li>
                        </ul>
                        
                        <button onclick="exploreAPI()" class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                            Explore API
                        </button>
                    </div>
                    
                    <!-- Enterprise Solutions -->
                    <div class="integration-card glass-card p-8 hover-lift">
                        <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                            <i class="fas fa-users text-white text-2xl"></i>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-900 mb-4">Enterprise Solutions</h3>
                        <p class="text-gray-600 mb-6">
                            White-label integrations with dedicated support. Custom AI models, 
                            private deployments, and enterprise-grade compliance.
                        </p>
                        
                        <div class="bg-gray-900 rounded-lg p-4 mb-6 text-green-400 text-sm font-mono">
                            <div class="text-gray-400 mb-2"># Your dedicated instance</div>
                            <div>your-company.getearnly.com</div>
                        </div>
                        
                        <ul class="space-y-2 text-sm text-gray-700 mb-6">
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Dedicated support</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Custom AI models</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>SOC 2 compliance</li>
                        </ul>
                        
                        <button onclick="contactEnterprise()" class="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why AI Platforms Choose Earnly Section -->
        <section class="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
            <!-- Background effects -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
            
            <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">

                    <h2 class="text-5xl lg:text-6xl font-bold text-white mb-6">
                        Why AI Platforms Choose
                        <span class="text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Earnly</span>
                    </h2>
                    <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        Join 200+ AI platforms that chose Earnly for seamless monetization with zero compromise on user experience
                    </p>
                </div>
                
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <!-- Benefits Cards -->
                    <div class="space-y-6">
                        <!-- No Inventory Required -->
                        <div class="group relative">
                            <div class="absolute inset-0 bg-gradient-to-r from-green-600/20 to-teal-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <div class="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:transform hover:scale-[1.02] transition-all duration-500">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                                        <i class="fas fa-box-open text-white text-2xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold text-white mb-2">No Inventory Required</h3>
                                        <div class="w-12 h-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>
                                    </div>
                                </div>
                                <p class="text-gray-200 text-lg leading-relaxed mb-4">
                                    Focus on your AI while we handle product sourcing, affiliate relationships, and inventory management across thousands of partners.
                                </p>
                                <div class="flex items-center text-green-400 font-semibold">
                                    <i class="fas fa-check-circle mr-2"></i>
                                    <span>Zero overhead, maximum revenue</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Better User Outcomes -->
                        <div class="group relative">
                            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <div class="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:transform hover:scale-[1.02] transition-all duration-500">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                                        <i class="fas fa-heart text-white text-2xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold text-white mb-2">Better User Outcomes</h3>
                                        <div class="w-12 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                                    </div>
                                </div>
                                <p class="text-gray-200 text-lg leading-relaxed mb-4">
                                    AI-powered contextual recommendations that users actually appreciate. 94% satisfaction rate with recommendations that solve real problems.
                                </p>
                                <div class="flex items-center text-blue-400 font-semibold">
                                    <i class="fas fa-thumbs-up mr-2"></i>
                                    <span>94% user satisfaction rate</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Clear Earning Logic -->
                        <div class="group relative">
                            <div class="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <div class="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:transform hover:scale-[1.02] transition-all duration-500">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                                        <i class="fas fa-chart-line text-white text-2xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold text-white mb-2">Clear Earning Logic</h3>
                                        <div class="w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                                    </div>
                                </div>
                                <p class="text-gray-200 text-lg leading-relaxed mb-4">
                                    Transparent revenue sharing with real-time analytics. Know exactly how much you earn from each interaction with detailed breakdowns.
                                </p>
                                <div class="flex items-center text-purple-400 font-semibold">
                                    <i class="fas fa-dollar-sign mr-2"></i>
                                    <span>Real-time revenue tracking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- AI Platform Dashboard Preview -->
                    <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl"></div>
                        <div class="relative bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-2xl">
                            <div class="flex items-center justify-between mb-6">
                                <h3 class="text-2xl font-bold text-white">AI Platform Dashboard</h3>
                                <div class="flex items-center space-x-2">
                                    <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span class="text-green-400 font-medium">Live</span>
                                </div>
                            </div>
                            
                            <!-- Revenue Metrics -->
                            <div class="grid grid-cols-2 gap-4 mb-8">
                                <div class="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-4 border border-green-500/30">
                                    <div class="text-green-400 text-sm font-medium mb-1">Monthly Revenue</div>
                                    <div class="text-3xl font-bold text-white">$124,750</div>
                                    <div class="text-green-400 text-sm">↗ +31% this month</div>
                                </div>
                                <div class="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl p-4 border border-blue-500/30">
                                    <div class="text-blue-400 text-sm font-medium mb-1">Conversion Rate</div>
                                    <div class="text-3xl font-bold text-white">1.2%</div>
                                    <div class="text-blue-400 text-sm">↗ +0.3% from last month</div>
                                </div>
                            </div>
                            
                            <!-- Recent Earnings Chart Simulation -->
                            <div class="mb-8">
                                <div class="text-white font-semibold mb-4">Recent Earnings (7 days)</div>
                                <div class="h-32 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl flex items-end justify-between p-4 space-x-2">
                                    <div class="bg-gradient-to-t from-green-500 to-green-400 rounded-sm" style="height: 60%; width: 12%;"></div>
                                    <div class="bg-gradient-to-t from-blue-500 to-blue-400 rounded-sm" style="height: 45%; width: 12%;"></div>
                                    <div class="bg-gradient-to-t from-purple-500 to-purple-400 rounded-sm" style="height: 80%; width: 12%;"></div>
                                    <div class="bg-gradient-to-t from-teal-500 to-teal-400 rounded-sm" style="height: 65%; width: 12%;"></div>
                                    <div class="bg-gradient-to-t from-pink-500 to-pink-400 rounded-sm" style="height: 90%; width: 12%;"></div>
                                    <div class="bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-sm" style="height: 75%; width: 12%;"></div>
                                    <div class="bg-gradient-to-t from-green-500 to-green-400 rounded-sm" style="height: 95%; width: 12%;"></div>
                                </div>
                            </div>
                            
                            <!-- Top Performing Categories -->
                            <div class="space-y-3">
                                <div class="text-white font-semibold mb-4">Top Performing Categories</div>
                                <div class="flex items-center justify-between bg-white/5 rounded-lg p-3">
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                        <span class="text-gray-200">E-commerce</span>
                                    </div>
                                    <span class="text-green-400 font-semibold">$18,650</span>
                                </div>
                                <div class="flex items-center justify-between bg-white/5 rounded-lg p-3">
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                        <span class="text-gray-200">SaaS</span>
                                    </div>
                                    <span class="text-green-400 font-semibold">$14,280</span>
                                </div>
                                <div class="flex items-center justify-between bg-white/5 rounded-lg p-3">
                                    <div class="flex items-center">
                                        <div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                        <span class="text-gray-200">Finance</span>
                                    </div>
                                    <span class="text-green-400 font-semibold">$12,450</span>
                                </div>
                            </div>
                            
                            <div class="mt-6 pt-6 border-t border-white/20">
                                <button onclick="viewFullDashboard()" class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform shadow-lg">
                                    <i class="fas fa-external-link-alt mr-2"></i>
                                    View Full Dashboard
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Earnings Calculator Section -->
        <section class="py-20 bg-gray-900">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">

                    <h2 class="text-5xl font-bold text-white mb-6">See Your Earning Potential</h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Use our interactive calculator to estimate how much you could earn by integrating 
                        Earnly into your AI platform.
                    </p>
                </div>
                
                <div class="max-w-6xl mx-auto">
                    <div class="grid lg:grid-cols-2 gap-8">
                        <!-- Configure Your Platform -->
                        <div class="bg-gray-800 rounded-2xl p-8 border border-gray-700">
                            <div class="flex items-center mb-8">
                                <div class="w-6 h-6 bg-blue-500 rounded mr-3 flex items-center justify-center">
                                    <i class="fas fa-cog text-white text-xs"></i>
                                </div>
                                <h3 class="text-xl font-bold text-white">Configure Your Platform</h3>
                            </div>
                            
                            <!-- Monthly Active Users/Queries -->
                            <div class="mb-8">
                                <div class="flex items-center mb-4">
                                    <label class="text-white text-sm font-medium mr-2">Monthly Active Users/Queries</label>
                                    <div class="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center cursor-help" title="Total monthly active users or queries processed">
                                        <i class="fas fa-question text-xs text-gray-300"></i>
                                    </div>
                                </div>
                                <div class="relative">
                                    <input type="range" id="monthly-users" min="1000" max="10000000" value="25000" step="1000" 
                                           class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                                           oninput="calculatePlatformRevenueRealTime()" onchange="calculatePlatformRevenueRealTime()">
                                    <div class="flex justify-between text-xs text-gray-400 mt-2">
                                        <span>1K</span>
                                        <span id="monthly-users-value" class="font-bold text-white">25K</span>
                                        <span>10M</span>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Qualified Engagement Rate -->
                            <div class="mb-8">
                                <div class="flex items-center mb-4">
                                    <label class="text-white text-sm font-medium mr-2">Qualified Engagement Rate (%)</label>
                                    <div class="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center cursor-help" title="Percentage of engaged users shown offers">
                                        <i class="fas fa-question text-xs text-gray-300"></i>
                                    </div>
                                </div>
                                <div class="relative">
                                    <input type="range" id="sessions-per-user" min="1" max="60" value="15" step="1"
                                           class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                                           oninput="calculatePlatformRevenueRealTime()" onchange="calculatePlatformRevenueRealTime()">
                                    <div class="flex justify-between text-xs text-gray-400 mt-2">
                                        <span>10%</span>
                                        <span id="engagement-rate-value" class="font-bold text-white">75%</span>
                                        <span>60%</span>
                                    </div>
                                </div>
                                <p class="text-xs text-gray-400 mt-2">Only engaged users are shown offers (real-world: 5-15% typical for general AI)</p>
                            </div>
                            
                            <!-- Revenue Model -->
                            <div class="mb-8">
                                <div class="text-white text-sm font-medium mb-4">Revenue Model</div>
                                <div class="flex justify-between text-xs text-gray-400 mb-4">
                                    <span>Content Category</span>
                                    <span>Custom Values</span>
                                </div>
                                
                                <div class="grid grid-cols-2 gap-3">
                                    <!-- E-commerce -->
                                    <div class="bg-gray-700 rounded-lg p-4 cursor-pointer border-2 border-gray-600" id="category-ecommerce" onclick="selectCategory('ecommerce')">
                                        <div class="flex items-center mb-2">
                                            <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                                            <span class="text-white font-medium text-sm">E-commerce</span>
                                        </div>
                                        <div class="text-xs text-gray-300">$15 CPA • 1.8%</div>
                                    </div>
                                    
                                    <!-- SaaS -->
                                    <div class="bg-gray-700 rounded-lg p-4 cursor-pointer border-2 border-green-500" id="category-saas" onclick="selectCategory('saas')">
                                        <div class="flex items-center mb-2">
                                            <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                            <span class="text-white font-medium text-sm">SaaS</span>
                                        </div>
                                        <div class="text-xs text-gray-300">$25 CPA • 1.5%</div>
                                    </div>
                                    
                                    <!-- Finance -->
                                    <div class="bg-gray-700 rounded-lg p-4 cursor-pointer border-2 border-gray-600" id="category-finance" onclick="selectCategory('finance')">
                                        <div class="flex items-center mb-2">
                                            <div class="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                                            <span class="text-white font-medium text-sm">Finance</span>
                                        </div>
                                        <div class="text-xs text-gray-300">$28 CPA • 1.0%</div>
                                    </div>
                                    
                                    <!-- Education -->
                                    <div class="bg-gray-700 rounded-lg p-4 cursor-pointer border-2 border-gray-600" id="category-education" onclick="selectCategory('education')">
                                        <div class="flex items-center mb-2">
                                            <div class="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                                            <span class="text-white font-medium text-sm">Education</span>
                                        </div>
                                        <div class="text-xs text-gray-300">$18 CPA • 1.5%</div>
                                    </div>
                                    
                                    <!-- Travel -->
                                    <div class="bg-gray-700 rounded-lg p-4 cursor-pointer border-2 border-gray-600" id="category-travel" onclick="selectCategory('travel')">
                                        <div class="flex items-center mb-2">
                                            <div class="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                                            <span class="text-white font-medium text-sm">Travel</span>
                                        </div>
                                        <div class="text-xs text-gray-300">$16 CPA • 1.6%</div>
                                    </div>
                                    
                                    <!-- Health -->
                                    <div class="bg-gray-700 rounded-lg p-4 cursor-pointer border-2 border-gray-600" id="category-health" onclick="selectCategory('health')">
                                        <div class="flex items-center mb-2">
                                            <div class="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                                            <span class="text-white font-medium text-sm">Health</span>
                                        </div>
                                        <div class="text-xs text-gray-300">$20 CPA • 1.4%</div>
                                    </div>
                                </div>
                                
                                <div class="text-xs text-gray-400 mt-3">Realistic CPA: $25 • Conversion Rate: 1.5%</div>
                            </div>
                        </div>
                        
                        <!-- Gross Revenue from Conversions -->
                        <div class="bg-gray-700 rounded-2xl p-8">
                            <div class="flex items-center mb-8">
                                <div class="w-6 h-6 bg-green-500 rounded mr-3 flex items-center justify-center">
                                    <i class="fas fa-chart-line text-white text-xs"></i>
                                </div>
                                <h3 class="text-xl font-bold text-white">Gross Revenue from Conversions</h3>
                            </div>
                            
                            <!-- Main Revenue Display -->
                            <div class="text-center mb-8">
                                <div class="text-6xl font-bold text-white mb-2" id="gross-revenue">$2,640</div>
                                <div class="text-gray-300 text-lg">/mo</div>
                                <div class="text-green-400 text-sm mt-2" id="yearly-revenue">$31,680 /YR</div>
                                <div class="text-xs text-gray-400 mt-2">All figures: "Gross, before fees or splits"</div>
                            </div>
                            
                            <!-- Metrics Grid -->
                            <div class="grid grid-cols-3 gap-4 mb-8">
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-white" id="monthly-users-display">25,000</div>
                                    <div class="text-xs text-gray-400">Monthly Users</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-white" id="engaged-offers">3,750</div>
                                    <div class="text-xs text-gray-400">Engaged w/ Offers</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-white" id="paid-conversions">45</div>
                                    <div class="text-xs text-gray-400">Paid Conversions</div>
                                </div>
                            </div>
                            
                            <!-- CPA and Conversion Rate -->
                            <div class="grid grid-cols-2 gap-4 mb-8">
                                <div class="text-center bg-gray-800 rounded-lg p-4">
                                    <div class="text-2xl font-bold text-white" id="cpa-rate">$22.00</div>
                                    <div class="text-xs text-gray-400">CPA Rate</div>
                                </div>
                                <div class="text-center bg-gray-800 rounded-lg p-4">
                                    <div class="text-2xl font-bold text-white" id="conversion-rate">1.2%</div>
                                    <div class="text-xs text-gray-400">Conversion Rate</div>
                                </div>
                            </div>
                            
                            <!-- Ready to Start Earning -->
                            <div class="bg-white rounded-xl p-6">
                                <h4 class="text-lg font-bold text-gray-900 text-center mb-4">Ready to Start Earning?</h4>
                                <p class="text-sm text-gray-600 text-center mb-6">
                                    Join Earnly and see how much real revenue your platform can generate from qualified conversions.
                                </p>
                                <button onclick="getStartedEarning()" class="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center">
                                    Get Started
                                    <i class="fas fa-arrow-right ml-2"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <!-- Comprehensive Developer Documentation -->
        <section class="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-5xl font-bold text-white mb-6">
                        Complete Integration Guide
                    </h2>
                    <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                        Everything you need to integrate Earnly: from quick start to advanced optimization, 
                        with real examples for every AI platform type.
                    </p>
                </div>

                <!-- Documentation Navigation -->
                <div class="mb-12">
                    <div class="flex flex-wrap justify-center gap-4 mb-8">
                        <button onclick="showDocSection('quickstart')" id="nav-quickstart" class="doc-nav-btn active bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105">
                            <i class="fas fa-rocket mr-2"></i>Quick Start
                        </button>
                        <button onclick="showDocSection('platforms')" id="nav-platforms" class="doc-nav-btn bg-gray-700 text-gray-300 px-6 py-3 rounded-lg font-semibold transition-all hover:bg-gray-600">
                            <i class="fas fa-layer-group mr-2"></i>Platform Types
                        </button>
                        <button onclick="showDocSection('formats')" id="nav-formats" class="doc-nav-btn bg-gray-700 text-gray-300 px-6 py-3 rounded-lg font-semibold transition-all hover:bg-gray-600">
                            <i class="fas fa-palette mr-2"></i>Ad Formats
                        </button>
                        <button onclick="showDocSection('api')" id="nav-api" class="doc-nav-btn bg-gray-700 text-gray-300 px-6 py-3 rounded-lg font-semibold transition-all hover:bg-gray-600">
                            <i class="fas fa-code mr-2"></i>API Reference
                        </button>
                        <button onclick="showDocSection('examples')" id="nav-examples" class="doc-nav-btn bg-gray-700 text-gray-300 px-6 py-3 rounded-lg font-semibold transition-all hover:bg-gray-600">
                            <i class="fas fa-play mr-2"></i>Live Examples
                        </button>
                    </div>
                </div>

                <!-- Quick Start Section -->
                <div id="doc-quickstart" class="doc-section">
                    <div class="grid lg:grid-cols-2 gap-12">
                        <!-- Installation & Setup -->
                        <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700">
                            <div class="flex items-center mb-6">
                                <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mr-4">
                                    <i class="fas fa-download text-white text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-2xl font-bold text-white">1. Install SDK</h3>
                                    <p class="text-gray-400">Get started in under 2 minutes</p>
                                </div>
                            </div>
                            
                            <div class="space-y-4">
                                <div class="bg-black rounded-lg p-4">
                                    <div class="flex items-center justify-between mb-3">
                                        <span class="text-green-400 font-mono text-sm">npm</span>
                                        <button onclick="copyToClipboard('npm-install')" class="text-gray-400 hover:text-white transition-colors">
                                            <i class="fas fa-copy"></i>
                                        </button>
                                    </div>
                                    <div id="npm-install" class="font-mono text-green-400 text-sm">npm install earnly-sdk</div>
                                </div>
                                
                                <div class="bg-black rounded-lg p-4">
                                    <div class="flex items-center justify-between mb-3">
                                        <span class="text-blue-400 font-mono text-sm">yarn</span>
                                        <button onclick="copyToClipboard('yarn-install')" class="text-gray-400 hover:text-white transition-colors">
                                            <i class="fas fa-copy"></i>
                                        </button>
                                    </div>
                                    <div id="yarn-install" class="font-mono text-green-400 text-sm">yarn add earnly-sdk</div>
                                </div>
                                
                                <div class="bg-black rounded-lg p-4">
                                    <div class="flex items-center justify-between mb-3">
                                        <span class="text-purple-400 font-mono text-sm">cdn</span>
                                        <button onclick="copyToClipboard('cdn-install')" class="text-gray-400 hover:text-white transition-colors">
                                            <i class="fas fa-copy"></i>
                                        </button>
                                    </div>
                                    <div id="cdn-install" class="font-mono text-green-400 text-sm">
                                        &lt;script src="https://cdn.getearnly.com/sdk.js"&gt;&lt;/script&gt;
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- First Integration -->
                        <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700">
                            <div class="flex items-center mb-6">
                                <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                                    <i class="fas fa-code text-white text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="text-2xl font-bold text-white">2. First Integration</h3>
                                    <p class="text-gray-400">One API call, instant results</p>
                                </div>
                            </div>
                            
                            <div class="bg-black rounded-lg p-4">
                                <div class="flex items-center justify-between mb-3">
                                    <span class="text-green-400 font-mono text-sm">JavaScript</span>
                                    <button onclick="copyToClipboard('js-example')" class="text-gray-400 hover:text-white transition-colors">
                                        <i class="fas fa-copy"></i>
                                    </button>
                                </div>
                                <pre id="js-example" class="font-mono text-sm text-green-400 overflow-x-auto"><code>import { Earnly } from 'earnly-sdk'

const earnly = new Earnly('your-api-key')

// Get contextual recommendations
const recommendations = await earnly.query({
  context: "I need a project management tool",
  userId: "user_123",
  platform: "ai-assistant",
  intent: "software_recommendation"
})

// Display recommendations
recommendations.forEach(rec => {
  console.log(rec.title, rec.description)
  // Use rec.earnly_link for tracking
})</code></pre>
                            </div>
                            
                            <div class="mt-4 p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 border border-green-500/30 rounded-lg">
                                <div class="flex items-center">
                                    <i class="fas fa-lightbulb text-yellow-400 mr-2"></i>
                                    <span class="text-yellow-400 font-semibold">Pro Tip:</span>
                                </div>
                                <p class="text-gray-300 text-sm mt-2">
                                    Use specific context and intent for better recommendations. 
                                    The more context you provide, the higher the conversion rates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Platform Types Section -->
                <div id="doc-platforms" class="doc-section hidden">
                    <div class="mb-12">
                        <h3 class="text-3xl font-bold text-white mb-6 text-center">
                            Optimize by AI Platform Type
                        </h3>
                        <p class="text-gray-300 text-center max-w-3xl mx-auto mb-12">
                            Different AI platforms need different integration approaches. Here's how to optimize 
                            Earnly for your specific platform type with proven best practices.
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <!-- Conversational AI -->
                        <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all">
                            <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fas fa-comments text-white text-2xl"></i>
                            </div>
                            
                            <h4 class="text-xl font-bold text-white mb-4">Conversational AI</h4>
                            <p class="text-gray-400 mb-6">ChatGPT, Claude, Gemini-style platforms</p>
                            
                            <div class="space-y-4">
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-green-400 font-semibold text-sm mb-2">Best Format:</div>
                                    <div class="text-gray-300 text-sm">Inline Citations + Product Cards</div>
                                </div>
                                
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-blue-400 font-semibold text-sm mb-2">Timing:</div>
                                    <div class="text-gray-300 text-sm">After helpful response, before follow-up</div>
                                </div>
                                
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-purple-400 font-semibold text-sm mb-2">Conversion Rate:</div>
                                    <div class="text-gray-300 text-sm">2.1% average (industry leading)</div>
                                </div>
                            </div>
                            
                            <button onclick="showPlatformCode('conversational')" class="w-full mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                                View Integration Code
                            </button>
                        </div>

                        <!-- Search & Discovery -->
                        <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700 hover:border-green-500/50 transition-all">
                            <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fas fa-search text-white text-2xl"></i>
                            </div>
                            
                            <h4 class="text-xl font-bold text-white mb-4">Search & Discovery</h4>
                            <p class="text-gray-400 mb-6">Perplexity, You.com, SearchGPT-style</p>
                            
                            <div class="space-y-4">
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-green-400 font-semibold text-sm mb-2">Best Format:</div>
                                    <div class="text-gray-300 text-sm">Sponsored Results + Shopping Cards</div>
                                </div>
                                
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-blue-400 font-semibold text-sm mb-2">Timing:</div>
                                    <div class="text-gray-300 text-sm">Mixed with organic results</div>
                                </div>
                                
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-purple-400 font-semibold text-sm mb-2">Conversion Rate:</div>
                                    <div class="text-gray-300 text-sm">1.8% average (high intent)</div>
                                </div>
                            </div>
                            
                            <button onclick="showPlatformCode('search')" class="w-full mt-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                                View Integration Code
                            </button>
                        </div>

                        <!-- Code & Development -->
                        <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all">
                            <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fas fa-terminal text-white text-2xl"></i>
                            </div>
                            
                            <h4 class="text-xl font-bold text-white mb-4">Code & Development</h4>
                            <p class="text-gray-400 mb-6">GitHub Copilot, Cursor, Replit-style</p>
                            
                            <div class="space-y-4">
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-green-400 font-semibold text-sm mb-2">Best Format:</div>
                                    <div class="text-gray-300 text-sm">Tool Suggestions + API Cards</div>
                                </div>
                                
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-blue-400 font-semibold text-sm mb-2">Timing:</div>
                                    <div class="text-gray-300 text-sm">After code generation, with tools</div>
                                </div>
                                
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-purple-400 font-semibold text-sm mb-2">Conversion Rate:</div>
                                    <div class="text-gray-300 text-sm">2.8% average (developer tools)</div>
                                </div>
                            </div>
                            
                            <button onclick="showPlatformCode('development')" class="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                                View Integration Code
                            </button>
                        </div>

                        <!-- Creative & Content -->
                        <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all">
                            <div class="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fas fa-palette text-white text-2xl"></i>
                            </div>
                            
                            <h4 class="text-xl font-bold text-white mb-4">Creative & Content</h4>
                            <p class="text-gray-400 mb-6">Midjourney, DALL-E, Jasper-style</p>
                            
                            <div class="space-y-4">
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-green-400 font-semibold text-sm mb-2">Best Format:</div>
                                    <div class="text-gray-300 text-sm">Creative Tools + Asset Marketplace</div>
                                </div>
                                
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-blue-400 font-semibold text-sm mb-2">Timing:</div>
                                    <div class="text-gray-300 text-sm">After generation, with enhancements</div>
                                </div>
                                
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-purple-400 font-semibold text-sm mb-2">Conversion Rate:</div>
                                    <div class="text-gray-300 text-sm">1.9% average (creative tools)</div>
                                </div>
                            </div>
                            
                            <button onclick="showPlatformCode('creative')" class="w-full mt-6 bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                                View Integration Code
                            </button>
                        </div>

                        <!-- Business & Productivity -->
                        <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700 hover:border-teal-500/50 transition-all">
                            <div class="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fas fa-briefcase text-white text-2xl"></i>
                            </div>
                            
                            <h4 class="text-xl font-bold text-white mb-4">Business & Productivity</h4>
                            <p class="text-gray-400 mb-6">Notion AI, Zapier, Monday.com-style</p>
                            
                            <div class="space-y-4">
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-green-400 font-semibold text-sm mb-2">Best Format:</div>
                                    <div class="text-gray-300 text-sm">SaaS Cards + Integration Hub</div>
                                </div>
                                
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-blue-400 font-semibold text-sm mb-2">Timing:</div>
                                    <div class="text-gray-300 text-sm">Workflow completion + upgrades</div>
                                </div>
                                
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-purple-400 font-semibold text-sm mb-2">Conversion Rate:</div>
                                    <div class="text-gray-300 text-sm">3.2% average (B2B SaaS)</div>
                                </div>
                            </div>
                            
                            <button onclick="showPlatformCode('business')" class="w-full mt-6 bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                                View Integration Code
                            </button>
                        </div>

                        <!-- Education & Learning -->
                        <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700 hover:border-indigo-500/50 transition-all">
                            <div class="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                                <i class="fas fa-graduation-cap text-white text-2xl"></i>
                            </div>
                            
                            <h4 class="text-xl font-bold text-white mb-4">Education & Learning</h4>
                            <p class="text-gray-400 mb-6">Khan Academy AI, Coursera AI, Duolingo</p>
                            
                            <div class="space-y-4">
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-green-400 font-semibold text-sm mb-2">Best Format:</div>
                                    <div class="text-gray-300 text-sm">Course Cards + Learning Resources</div>
                                </div>
                                
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-blue-400 font-semibold text-sm mb-2">Timing:</div>
                                    <div class="text-gray-300 text-sm">After explanation, with next steps</div>
                                </div>
                                
                                <div class="bg-black rounded-lg p-3">
                                    <div class="text-purple-400 font-semibold text-sm mb-2">Conversion Rate:</div>
                                    <div class="text-gray-300 text-sm">2.4% average (education)</div>
                                </div>
                            </div>
                            
                            <button onclick="showPlatformCode('education')" class="w-full mt-6 bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                                View Integration Code
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Ad Formats Section -->
                <div id="doc-formats" class="doc-section hidden">
                    <div class="text-center mb-12">
                        <h3 class="text-3xl font-bold text-white mb-6">
                            Proven Ad Formats & UI Components
                        </h3>
                        <p class="text-gray-300 max-w-3xl mx-auto">
                            Ready-to-use UI components with proven conversion rates. Each format is optimized 
                            for specific use cases and platform types.
                        </p>
                    </div>

                    <!-- Format Tabs -->
                    <div class="flex flex-wrap justify-center gap-4 mb-8">
                        <button onclick="showFormat('inline')" id="format-inline" class="format-btn active bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold">
                            Inline Citations
                        </button>
                        <button onclick="showFormat('cards')" id="format-cards" class="format-btn bg-gray-700 text-gray-300 px-6 py-3 rounded-lg font-semibold">
                            Product Cards
                        </button>
                        <button onclick="showFormat('summary')" id="format-summary" class="format-btn bg-gray-700 text-gray-300 px-6 py-3 rounded-lg font-semibold">
                            Summary Unit
                        </button>
                        <button onclick="showFormat('sidebar')" id="format-sidebar" class="format-btn bg-gray-700 text-gray-300 px-6 py-3 rounded-lg font-semibold">
                            Sidebar Widget
                        </button>
                        <button onclick="showFormat('banner')" id="format-banner" class="format-btn bg-gray-700 text-gray-300 px-6 py-3 rounded-lg font-semibold">
                            Smart Banner
                        </button>
                    </div>

                    <!-- Inline Citations Format -->
                    <div id="format-inline-content" class="format-content">
                        <div class="grid lg:grid-cols-2 gap-12">
                            <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700">
                                <h4 class="text-2xl font-bold text-white mb-4">Inline Citations</h4>
                                <p class="text-gray-400 mb-6">
                                    Blend recommendations naturally within AI responses. Highest user satisfaction (94%) 
                                    with minimal disruption to user experience.
                                </p>
                                
                                <!-- Live Preview -->
                                <div class="bg-white rounded-xl p-6 mb-6">
                                    <h5 class="font-bold text-gray-900 mb-4">Live Preview:</h5>
                                    <div class="space-y-4">
                                        <div class="text-gray-800">
                                            <p class="mb-3">For project management, I recommend considering these popular options:</p>
                                            
                                            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-3">
                                                <div class="flex items-center justify-between">
                                                    <div class="flex items-center space-x-3">
                                                        <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=40&h=40&fit=crop" 
                                                             class="w-10 h-10 rounded object-cover" alt="Asana">
                                                        <div>
                                                            <div class="font-semibold text-gray-900">Asana Premium</div>
                                                            <div class="text-sm text-gray-600">Advanced project tracking</div>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center space-x-2">
                                                        <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">94% Match</span>
                                                        <span class="text-xs text-gray-500">Sponsored</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <p>Each tool has different strengths depending on your team size and workflow preferences.</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Performance Stats -->
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="text-center bg-black rounded-lg p-3">
                                        <div class="text-2xl font-bold text-green-400">2.1%</div>
                                        <div class="text-xs text-gray-400">Conversion Rate</div>
                                    </div>
                                    <div class="text-center bg-black rounded-lg p-3">
                                        <div class="text-2xl font-bold text-blue-400">94%</div>
                                        <div class="text-xs text-gray-400">User Satisfaction</div>
                                    </div>
                                    <div class="text-center bg-black rounded-lg p-3">
                                        <div class="text-2xl font-bold text-purple-400">0.2s</div>
                                        <div class="text-xs text-gray-400">Load Time</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Implementation Code -->
                            <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700">
                                <h5 class="text-xl font-bold text-white mb-4">Implementation</h5>
                                
                                <div class="bg-black rounded-lg p-4 mb-4">
                                    <div class="flex items-center justify-between mb-3">
                                        <span class="text-green-400 font-mono text-sm">React Component</span>
                                        <button onclick="copyToClipboard('inline-react')" class="text-gray-400 hover:text-white">
                                            <i class="fas fa-copy"></i>
                                        </button>
                                    </div>
                                    <pre id="inline-react" class="text-sm text-green-400 overflow-x-auto"><code>function InlineCitation({ recommendation }) {
  return (
    &lt;div className="inline-citation"&gt;
      &lt;div className="flex items-center p-3 
                    bg-blue-50 border-l-4 
                    border-blue-500 rounded-r-lg"&gt;
        &lt;img src={recommendation.image} 
             className="w-10 h-10 rounded mr-3" /&gt;
        &lt;div className="flex-1"&gt;
          &lt;div className="font-semibold"&gt;
            {recommendation.title}
          &lt;/div&gt;
          &lt;div className="text-sm text-gray-600"&gt;
            {recommendation.description}
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;a href={recommendation.earnly_link} 
           className="ml-3 bg-blue-600 text-white 
                    px-3 py-1 rounded text-sm"&gt;
          View
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  )
}</code></pre>
                                </div>
                                
                                <div class="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-lg p-4">
                                    <div class="flex items-center mb-2">
                                        <i class="fas fa-rocket text-green-400 mr-2"></i>
                                        <span class="text-green-400 font-semibold">Best Practices:</span>
                                    </div>
                                    <ul class="text-gray-300 text-sm space-y-1">
                                        <li>• Place after helpful content, not before</li>
                                        <li>• Use subtle styling that matches your brand</li>
                                        <li>• Include match percentage for credibility</li>
                                        <li>• Add "Sponsored" label for transparency</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Product Cards Format -->
                    <div id="format-cards-content" class="format-content hidden">
                        <div class="grid lg:grid-cols-2 gap-12">
                            <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700">
                                <h4 class="text-2xl font-bold text-white mb-4">Product Cards</h4>
                                <p class="text-gray-400 mb-6">
                                    Dedicated product showcases perfect for e-commerce and SaaS recommendations. 
                                    Higher click-through rates with rich product information.
                                </p>
                                
                                <!-- Live Preview -->
                                <div class="bg-white rounded-xl p-6 mb-6">
                                    <h5 class="font-bold text-gray-900 mb-4">Live Preview:</h5>
                                    <div class="grid grid-cols-2 gap-4">
                                        <div class="border rounded-xl p-4 hover:shadow-lg transition-shadow">
                                            <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=120&fit=crop" 
                                                 class="w-full h-24 object-cover rounded-lg mb-3" alt="Product">
                                            <div class="font-semibold text-gray-900 mb-2">Notion Premium</div>
                                            <div class="text-sm text-gray-600 mb-3">All-in-one workspace for teams</div>
                                            <div class="flex items-center justify-between">
                                                <span class="text-lg font-bold text-green-600">$8/month</span>
                                                <button class="bg-blue-600 text-white px-3 py-1 rounded text-sm">Try Free</button>
                                            </div>
                                        </div>
                                        
                                        <div class="border rounded-xl p-4 hover:shadow-lg transition-shadow">
                                            <img src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=120&fit=crop" 
                                                 class="w-full h-24 object-cover rounded-lg mb-3" alt="Product">
                                            <div class="font-semibold text-gray-900 mb-2">Slack Pro</div>
                                            <div class="text-sm text-gray-600 mb-3">Team communication platform</div>
                                            <div class="flex items-center justify-between">
                                                <span class="text-lg font-bold text-green-600">$7.25/month</span>
                                                <button class="bg-blue-600 text-white px-3 py-1 rounded text-sm">Try Free</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Performance Stats -->
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="text-center bg-black rounded-lg p-3">
                                        <div class="text-2xl font-bold text-green-400">1.8%</div>
                                        <div class="text-xs text-gray-400">Conversion Rate</div>
                                    </div>
                                    <div class="text-center bg-black rounded-lg p-3">
                                        <div class="text-2xl font-bold text-blue-400">3.2%</div>
                                        <div class="text-xs text-gray-400">Click-through Rate</div>
                                    </div>
                                    <div class="text-center bg-black rounded-lg p-3">
                                        <div class="text-2xl font-bold text-purple-400">$24</div>
                                        <div class="text-xs text-gray-400">Avg. Commission</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Implementation Code -->
                            <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700">
                                <h5 class="text-xl font-bold text-white mb-4">Implementation</h5>
                                
                                <div class="bg-black rounded-lg p-4 mb-4">
                                    <div class="flex items-center justify-between mb-3">
                                        <span class="text-green-400 font-mono text-sm">Vue Component</span>
                                        <button onclick="copyToClipboard('card-vue')" class="text-gray-400 hover:text-white">
                                            <i class="fas fa-copy"></i>
                                        </button>
                                    </div>
                                    <pre id="card-vue" class="text-sm text-green-400 overflow-x-auto"><code>&lt;template&gt;
  &lt;div class="product-card border rounded-xl p-4 
              hover:shadow-lg transition-all"&gt;
    &lt;img :src="product.image" 
         class="w-full h-32 object-cover 
                rounded-lg mb-4" /&gt;
    
    &lt;h3 class="font-bold text-gray-900 mb-2"&gt;
      {{ product.title }}
    &lt;/h3&gt;
    
    &lt;p class="text-sm text-gray-600 mb-4"&gt;
      {{ product.description }}
    &lt;/p&gt;
    
    &lt;div class="flex justify-between items-center"&gt;
      &lt;span class="text-xl font-bold text-green-600"&gt;
        {{ product.price }}
      &lt;/span&gt;
      
      &lt;a :href="product.earnly_link" 
         class="bg-blue-600 text-white px-4 py-2 
                rounded font-semibold hover:bg-blue-700"&gt;
        {{ product.cta_text }}
      &lt;/a&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
                                </div>
                                
                                <div class="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-lg p-4">
                                    <div class="flex items-center mb-2">
                                        <i class="fas fa-palette text-purple-400 mr-2"></i>
                                        <span class="text-purple-400 font-semibold">Design Tips:</span>
                                    </div>
                                    <ul class="text-gray-300 text-sm space-y-1">
                                        <li>• Use high-quality product images</li>
                                        <li>• Include pricing and clear CTAs</li>
                                        <li>• Add hover effects for engagement</li>
                                        <li>• Group 2-4 cards for best results</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Summary Unit Format -->
                    <div id="format-summary-content" class="format-content hidden">
                        <div class="grid lg:grid-cols-2 gap-12">
                            <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700">
                                <h4 class="text-2xl font-bold text-white mb-4">Summary Unit</h4>
                                <p class="text-gray-400 mb-6">
                                    AI-powered comprehensive summaries with embedded recommendations. Perfect for search engines 
                                    and conversational AI that provide detailed analysis and reviews.
                                </p>
                                
                                <!-- Live Preview -->
                                <div class="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 mb-6 shadow-lg">
                                    <h5 class="font-bold text-gray-900 mb-6 text-lg">Live Preview:</h5>
                                    
                                    <!-- Summary Unit Preview -->
                                    <div class="bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 shadow-lg">
                                        <!-- AI Analysis Header -->
                                        <div class="flex items-start space-x-4 mb-5">
                                            <div class="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                                                <i class="fas fa-brain text-white text-xl"></i>
                                            </div>
                                            <div class="flex-1">
                                                <div class="flex items-center justify-between mb-2">
                                                    <h4 class="font-bold text-gray-900 text-lg">AI Analysis</h4>
                                                    <span class="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold border border-blue-300">Smart Match</span>
                                                </div>
                                                <p class="text-gray-700 text-sm leading-relaxed">
                                                    Based on your requirements, I found <strong>Asana Premium</strong> to be an excellent match with high relevance scores.
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <!-- Recommendation Card -->
                                        <div class="bg-white rounded-xl p-5 border border-gray-300 shadow-sm mb-4">
                                            <div class="flex items-start space-x-4">
                                                <div class="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <span class="text-blue-700 font-bold text-2xl">A</span>
                                                </div>
                                                <div class="flex-1">
                                                    <div class="flex items-center justify-between mb-3">
                                                        <h5 class="font-bold text-gray-900 text-lg">Asana Premium</h5>
                                                        <div class="flex items-center">
                                                            <span class="text-yellow-500">★★★★★</span>
                                                            <span class="text-gray-600 text-sm ml-2 font-medium">4.8/5</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <!-- User Review Quote -->
                                                    <div class="bg-gray-50 rounded-lg p-3 mb-3 border-l-4 border-blue-500">
                                                        <p class="text-gray-700 text-sm italic mb-2">"Exceptional platform that transformed our workflow. The AI features are incredibly intuitive."</p>
                                                        <div class="text-xs text-gray-500">— Sarah M., Product Manager</div>
                                                    </div>
                                                    
                                                    <!-- Key Features -->
                                                    <div class="grid grid-cols-2 gap-2 mb-4">
                                                        <div class="flex items-center text-xs text-gray-600">
                                                            <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                                            <span>Enterprise Security</span>
                                                        </div>
                                                        <div class="flex items-center text-xs text-gray-600">
                                                            <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                                            <span>24/7 Support</span>
                                                        </div>
                                                        <div class="flex items-center text-xs text-gray-600">
                                                            <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                                            <span>Free Trial</span>
                                                        </div>
                                                        <div class="flex items-center text-xs text-gray-600">
                                                            <i class="fas fa-check-circle text-green-500 mr-2"></i>
                                                            <span>No Setup Fees</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <!-- Action Section -->
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center space-x-3">
                                                <button class="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                                                    Explore Asana
                                                </button>
                                                <button class="text-gray-600 hover:text-gray-800 text-sm font-medium">
                                                    Save for Later
                                                </button>
                                            </div>
                                            <div class="text-right">
                                                <div class="text-xs text-gray-500">Sponsored content</div>
                                                <div class="text-xs text-blue-600 font-medium">Verified by AI</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Performance Stats -->
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="text-center bg-black rounded-lg p-3">
                                        <div class="text-2xl font-bold text-green-400">2.3%</div>
                                        <div class="text-xs text-gray-400">Conversion Rate</div>
                                    </div>
                                    <div class="text-center bg-black rounded-lg p-3">
                                        <div class="text-2xl font-bold text-blue-400">4.1%</div>
                                        <div class="text-xs text-gray-400">Engagement Rate</div>
                                    </div>
                                    <div class="text-center bg-black rounded-lg p-3">
                                        <div class="text-2xl font-bold text-purple-400">$31</div>
                                        <div class="text-xs text-gray-400">Avg. Commission</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Implementation Code -->
                            <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700">
                                <h5 class="text-xl font-bold text-white mb-4">Implementation</h5>
                                
                                <div class="bg-black rounded-lg p-4 mb-4">
                                    <div class="flex items-center justify-between mb-3">
                                        <span class="text-green-400 font-mono text-sm">JavaScript Implementation</span>
                                        <button onclick="copyToClipboard('summary-js')" class="text-gray-400 hover:text-white">
                                            <i class="fas fa-copy"></i>
                                        </button>
                                    </div>
                                    <pre id="summary-js" class="text-sm text-green-400 overflow-x-auto"><code>// Summary Unit Integration
async function generateSummaryUnit(query, context) {
  const response = await earnly.query({
    context: query,
    format: 'summary_unit',
    includeReviews: true,
    includeFeatures: true,
    maxRecommendations: 1
  })
  
  return \`
    &lt;div class="summary-unit"&gt;
      &lt;div class="ai-header"&gt;
        &lt;h4&gt;AI Analysis&lt;/h4&gt;
        &lt;span class="match-badge"&gt;Smart Match&lt;/span&gt;
      &lt;/div&gt;
      
      &lt;div class="recommendation-card"&gt;
        &lt;h5&gt;\${response.title}&lt;/h5&gt;
        &lt;div class="review-quote"&gt;
          \${response.featured_review}
        &lt;/div&gt;
        &lt;div class="features"&gt;
          \${response.key_features.map(f =&gt; 
            \`&lt;span&gt;✓ \${f}&lt;/span&gt;\`
          ).join('')}
        &lt;/div&gt;
      &lt;/div&gt;
      
      &lt;div class="actions"&gt;
        &lt;a href="\${response.earnly_link}"&gt;
          Explore \${response.title}
        &lt;/a&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  \`
}</code></pre>
                                </div>
                                
                                <div class="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-lg p-4">
                                    <div class="flex items-center mb-2">
                                        <i class="fas fa-lightbulb text-orange-400 mr-2"></i>
                                        <span class="text-orange-400 font-semibold">Best Use Cases:</span>
                                    </div>
                                    <ul class="text-gray-300 text-sm space-y-1">
                                        <li>• Search engines providing detailed product analysis</li>
                                        <li>• AI assistants giving comprehensive recommendations</li>
                                        <li>• Research platforms with in-depth reviews</li>
                                        <li>• Comparison tools and buying guides</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Sidebar Widget Format -->
                    <div id="format-sidebar-content" class="format-content hidden">
                        <div class="grid lg:grid-cols-2 gap-12">
                            <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700">
                                <h4 class="text-2xl font-bold text-white mb-4">Sidebar Widget</h4>
                                <p class="text-gray-400 mb-6">
                                    Persistent sidebar recommendations that don't interrupt the main content flow. 
                                    Perfect for content platforms, documentation sites, and dashboard interfaces.
                                </p>
                                
                                <!-- Live Preview -->
                                <div class="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 mb-6 shadow-lg">
                                    <h5 class="font-bold text-gray-900 mb-6 text-lg">Live Preview:</h5>
                                    
                                    <div class="flex gap-4">
                                        <!-- Main Content Area -->
                                        <div class="flex-1 bg-white border border-gray-200 rounded-lg p-4">
                                            <h6 class="font-semibold text-gray-800 mb-2">Main Content Area</h6>
                                            <p class="text-sm text-gray-600 mb-2">This is where your primary AI conversation or content appears...</p>
                                            <p class="text-xs text-gray-500">User can focus on main interaction while recommendations are available in sidebar</p>
                                        </div>
                                        
                                        <!-- Sidebar Widget -->
                                        <div class="w-64 bg-gradient-to-b from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 shadow-sm">
                                            <div class="flex items-center mb-3">
                                                <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                                                    <i class="fas fa-magic text-white text-xs"></i>
                                                </div>
                                                <h6 class="font-semibold text-gray-800 text-sm">Recommended</h6>
                                            </div>
                                            
                                            <!-- Compact Recommendation Cards -->
                                            <div class="space-y-3">
                                                <div class="bg-white rounded-lg p-3 border border-gray-200 hover:shadow-md transition-shadow">
                                                    <div class="flex items-center space-x-2 mb-2">
                                                        <div class="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                                                            <span class="text-white font-bold text-xs">N</span>
                                                        </div>
                                                        <div class="flex-1 min-w-0">
                                                            <div class="font-semibold text-gray-900 text-sm truncate">Notion</div>
                                                            <div class="text-xs text-gray-600">$8/month</div>
                                                        </div>
                                                    </div>
                                                    <button class="w-full bg-blue-600 text-white py-1 px-2 rounded text-xs font-medium hover:bg-blue-700 transition-colors">
                                                        Try Free
                                                    </button>
                                                </div>
                                                
                                                <div class="bg-white rounded-lg p-3 border border-gray-200 hover:shadow-md transition-shadow">
                                                    <div class="flex items-center space-x-2 mb-2">
                                                        <div class="w-8 h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded-lg flex items-center justify-center flex-shrink-0">
                                                            <span class="text-white font-bold text-xs">S</span>
                                                        </div>
                                                        <div class="flex-1 min-w-0">
                                                            <div class="font-semibold text-gray-900 text-sm truncate">Slack</div>
                                                            <div class="text-xs text-gray-600">$7.25/month</div>
                                                        </div>
                                                    </div>
                                                    <button class="w-full bg-green-600 text-white py-1 px-2 rounded text-xs font-medium hover:bg-green-700 transition-colors">
                                                        Try Free
                                                    </button>
                                                </div>
                                                
                                                <div class="bg-white rounded-lg p-3 border border-gray-200 hover:shadow-md transition-shadow">
                                                    <div class="flex items-center space-x-2 mb-2">
                                                        <div class="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center flex-shrink-0">
                                                            <span class="text-white font-bold text-xs">A</span>
                                                        </div>
                                                        <div class="flex-1 min-w-0">
                                                            <div class="font-semibold text-gray-900 text-sm truncate">Asana</div>
                                                            <div class="text-xs text-gray-600">$10.99/month</div>
                                                        </div>
                                                    </div>
                                                    <button class="w-full bg-orange-600 text-white py-1 px-2 rounded text-xs font-medium hover:bg-orange-700 transition-colors">
                                                        Try Free
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            <div class="mt-3 pt-3 border-t border-blue-200">
                                                <div class="text-xs text-gray-500 text-center">
                                                    <i class="fas fa-shield-alt text-blue-500 mr-1"></i>
                                                    Sponsored by Earnly
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Performance Stats -->
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="text-center bg-black rounded-lg p-3">
                                        <div class="text-2xl font-bold text-green-400">1.4%</div>
                                        <div class="text-xs text-gray-400">Conversion Rate</div>
                                    </div>
                                    <div class="text-center bg-black rounded-lg p-3">
                                        <div class="text-2xl font-bold text-blue-400">8.7%</div>
                                        <div class="text-xs text-gray-400">View Rate</div>
                                    </div>
                                    <div class="text-center bg-black rounded-lg p-3">
                                        <div class="text-2xl font-bold text-purple-400">0.1s</div>
                                        <div class="text-xs text-gray-400">Load Time</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Implementation Code -->
                            <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700">
                                <h5 class="text-xl font-bold text-white mb-4">Implementation</h5>
                                
                                <div class="bg-black rounded-lg p-4 mb-4">
                                    <div class="flex items-center justify-between mb-3">
                                        <span class="text-green-400 font-mono text-sm">CSS + HTML Setup</span>
                                        <button onclick="copyToClipboard('sidebar-html')" class="text-gray-400 hover:text-white">
                                            <i class="fas fa-copy"></i>
                                        </button>
                                    </div>
                                    <pre id="sidebar-html" class="text-sm text-green-400 overflow-x-auto"><code>&lt;!-- Sidebar Widget Layout --&gt;
&lt;div class="layout-container"&gt;
  &lt;main class="main-content"&gt;
    &lt;!-- Your AI conversation content --&gt;
  &lt;/main&gt;
  
  &lt;aside class="earnly-sidebar"&gt;
    &lt;div class="sidebar-header"&gt;
      &lt;h3&gt;Recommended&lt;/h3&gt;
    &lt;/div&gt;
    
    &lt;div id="earnly-recommendations"&gt;
      &lt;!-- Dynamic recommendations loaded here --&gt;
    &lt;/div&gt;
  &lt;/aside&gt;
&lt;/div&gt;

&lt;style&gt;
.layout-container {
  display: flex;
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.main-content {
  flex: 1;
  min-width: 0;
}

.earnly-sidebar {
  width: 280px;
  background: linear-gradient(to bottom, #eff6ff, #e0e7ff);
  border: 1px solid #c7d2fe;
  border-radius: 12px;
  padding: 1rem;
  height: fit-content;
  position: sticky;
  top: 20px;
}
&lt;/style&gt;</code></pre>
                                </div>
                                
                                <div class="bg-black rounded-lg p-4 mb-4">
                                    <div class="flex items-center justify-between mb-3">
                                        <span class="text-green-400 font-mono text-sm">JavaScript Integration</span>
                                        <button onclick="copyToClipboard('sidebar-js')" class="text-gray-400 hover:text-white">
                                            <i class="fas fa-copy"></i>
                                        </button>
                                    </div>
                                    <pre id="sidebar-js" class="text-sm text-green-400 overflow-x-auto"><code>// Initialize Sidebar Widget
class EarnlySidebarWidget {
  constructor(container, options = {}) {
    this.container = container
    this.maxItems = options.maxItems || 3
    this.updateInterval = options.updateInterval || 30000
    this.init()
  }
  
  async init() {
    await this.loadRecommendations()
    this.startAutoUpdate()
  }
  
  async loadRecommendations() {
    try {
      const context = this.getPageContext()
      const recommendations = await earnly.query({
        context,
        format: 'sidebar',
        limit: this.maxItems
      })
      
      this.renderRecommendations(recommendations)
    } catch (error) {
      console.error('Sidebar widget error:', error)
    }
  }
  
  renderRecommendations(recommendations) {
    const html = recommendations.map(rec =&gt; \`
      &lt;div class="sidebar-item"&gt;
        &lt;div class="item-header"&gt;
          &lt;div class="item-icon"&gt;\${rec.title.charAt(0)}&lt;/div&gt;
          &lt;div class="item-info"&gt;
            &lt;div class="item-title"&gt;\${rec.title}&lt;/div&gt;
            &lt;div class="item-price"&gt;\${rec.price}&lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
        &lt;a href="\${rec.earnly_link}" class="item-cta"&gt;
          Try Free
        &lt;/a&gt;
      &lt;/div&gt;
    \`).join('')
    
    this.container.innerHTML = html
  }
  
  getPageContext() {
    // Extract context from current conversation/page
    return document.querySelector('.main-content')?.textContent || ''
  }
  
  startAutoUpdate() {
    setInterval(() =&gt; {
      this.loadRecommendations()
    }, this.updateInterval)
  }
}

// Initialize widget
const sidebar = new EarnlySidebarWidget(
  document.getElementById('earnly-recommendations'),
  { maxItems: 3, updateInterval: 30000 }
)</code></pre>
                                </div>
                                
                                <div class="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-lg p-4">
                                    <div class="flex items-center mb-2">
                                        <i class="fas fa-columns text-cyan-400 mr-2"></i>
                                        <span class="text-cyan-400 font-semibold">Design Guidelines:</span>
                                    </div>
                                    <ul class="text-gray-300 text-sm space-y-1">
                                        <li>• Keep sidebar width between 240-320px for optimal UX</li>
                                        <li>• Use sticky positioning to maintain visibility while scrolling</li>
                                        <li>• Limit to 3-5 recommendations to avoid overwhelming users</li>
                                        <li>• Update recommendations based on conversation context</li>
                                        <li>• Ensure mobile responsiveness (hide on small screens)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Smart Banner Format -->
                    <div id="format-banner-content" class="format-content hidden">
                        <div class="grid lg:grid-cols-2 gap-12">
                            <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700">
                                <h4 class="text-2xl font-bold text-white mb-4">Smart Banner</h4>
                                <p class="text-gray-400 mb-6">
                                    Intelligent banner placements that adapt to user behavior and content context. 
                                    Non-intrusive yet highly visible for maximum engagement without disrupting experience.
                                </p>
                                
                                <!-- Live Preview -->
                                <div class="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 mb-6 shadow-lg">
                                    <h5 class="font-bold text-gray-900 mb-6 text-lg">Live Preview:</h5>
                                    
                                    <div class="space-y-4">
                                        <!-- Top Banner Example -->
                                        <div>
                                            <div class="text-xs text-gray-600 mb-2">Top Banner Placement:</div>
                                            <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-4 text-white shadow-lg">
                                                <div class="flex items-center justify-between">
                                                    <div class="flex items-center space-x-3">
                                                        <div class="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                                                            <i class="fas fa-star text-white"></i>
                                                        </div>
                                                        <div>
                                                            <div class="font-semibold">Boost your productivity with Notion</div>
                                                            <div class="text-xs opacity-90">Join 20M+ users who chose Notion for team collaboration</div>
                                                        </div>
                                                    </div>
                                                    <button class="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                                                        Try Free
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <!-- Inline Banner Example -->
                                        <div>
                                            <div class="text-xs text-gray-600 mb-2">Inline Banner Placement:</div>
                                            <div class="bg-white border-2 border-dashed border-gray-300 p-3 rounded-lg">
                                                <div class="text-sm text-gray-600 mb-3">AI conversation content above...</div>
                                                
                                                <div class="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 my-3">
                                                    <div class="flex items-center justify-between">
                                                        <div class="flex items-center space-x-3">
                                                            <div class="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                                                                <span class="text-white font-bold">S</span>
                                                            </div>
                                                            <div>
                                                                <div class="font-semibold text-gray-900">Slack - Team Communication</div>
                                                                <div class="text-sm text-gray-600">Recommended based on your workflow needs</div>
                                                                <div class="flex items-center mt-1">
                                                                    <span class="text-yellow-500 text-sm">★★★★★</span>
                                                                    <span class="text-xs text-gray-500 ml-2">4.6/5 • Free trial available</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <button class="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-700 transition-colors">
                                                            Try Free
                                                        </button>
                                                    </div>
                                                </div>
                                                
                                                <div class="text-sm text-gray-600">...AI conversation content continues below</div>
                                            </div>
                                        </div>
                                        
                                        <!-- Bottom Banner Example -->
                                        <div>
                                            <div class="text-xs text-gray-600 mb-2">Bottom Banner Placement:</div>
                                            <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-3 text-white shadow-lg">
                                                <div class="flex items-center justify-between text-sm">
                                                    <div class="flex items-center space-x-2">
                                                        <i class="fas fa-rocket"></i>
                                                        <span><strong>Asana Premium</strong> - Perfect for your project management needs</span>
                                                    </div>
                                                    <button class="bg-white text-purple-600 px-3 py-1 rounded-lg font-semibold text-xs hover:bg-gray-100 transition-colors">
                                                        Start Free Trial
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Performance Stats -->
                                <div class="grid grid-cols-3 gap-4">
                                    <div class="text-center bg-black rounded-lg p-3">
                                        <div class="text-2xl font-bold text-green-400">3.2%</div>
                                        <div class="text-xs text-gray-400">Click Rate</div>
                                    </div>
                                    <div class="text-center bg-black rounded-lg p-3">
                                        <div class="text-2xl font-bold text-blue-400">12.8%</div>
                                        <div class="text-xs text-gray-400">View Rate</div>
                                    </div>
                                    <div class="text-center bg-black rounded-lg p-3">
                                        <div class="text-2xl font-bold text-purple-400">$19</div>
                                        <div class="text-xs text-gray-400">Avg. Commission</div>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Implementation Code -->
                            <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700">
                                <h5 class="text-xl font-bold text-white mb-4">Implementation</h5>
                                
                                <div class="bg-black rounded-lg p-4 mb-4">
                                    <div class="flex items-center justify-between mb-3">
                                        <span class="text-green-400 font-mono text-sm">Smart Banner Manager</span>
                                        <button onclick="copyToClipboard('banner-js')" class="text-gray-400 hover:text-white">
                                            <i class="fas fa-copy"></i>
                                        </button>
                                    </div>
                                    <pre id="banner-js" class="text-sm text-green-400 overflow-x-auto"><code>// Smart Banner Integration
class EarnlySmartBanner {
  constructor(options = {}) {
    this.placements = options.placements || ['top', 'inline', 'bottom']
    this.maxBanners = options.maxBanners || 1
    this.contextWindow = options.contextWindow || 1000
    this.init()
  }
  
  async init() {
    this.observeContent()
    await this.loadBanner()
  }
  
  async loadBanner() {
    const context = this.getContentContext()
    const placement = this.determineBestPlacement()
    
    try {
      const recommendation = await earnly.query({
        context,
        format: 'banner',
        placement: placement,
        limit: 1
      })
      
      if (recommendation) {
        this.createBanner(recommendation, placement)
      }
    } catch (error) {
      console.error('Banner loading error:', error)
    }
  }
  
  createBanner(rec, placement) {
    const banner = document.createElement('div')
    banner.className = \`earnly-banner earnly-banner-\${placement}\`
    banner.innerHTML = this.getBannerTemplate(rec, placement)
    
    this.insertBanner(banner, placement)
    this.trackBannerView(rec.id, placement)
  }
  
  getBannerTemplate(rec, placement) {
    const templates = {
      top: \`
        &lt;div class="banner-top"&gt;
          &lt;div class="banner-content"&gt;
            &lt;div class="banner-icon"&gt;⭐&lt;/div&gt;
            &lt;div class="banner-text"&gt;
              &lt;strong&gt;\${rec.title}&lt;/strong&gt;
              &lt;span&gt;\${rec.description}&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;button onclick="window.open('\${rec.earnly_link}')"&gt;
            Try Free
          &lt;/button&gt;
        &lt;/div&gt;
      \`,
      inline: \`
        &lt;div class="banner-inline"&gt;
          &lt;div class="banner-product"&gt;
            &lt;div class="product-icon"&gt;\${rec.title.charAt(0)}&lt;/div&gt;
            &lt;div class="product-info"&gt;
              &lt;h4&gt;\${rec.title}&lt;/h4&gt;
              &lt;p&gt;\${rec.description}&lt;/p&gt;
              &lt;div class="rating"&gt;
                ⭐⭐⭐⭐⭐ \${rec.rating}/5
              &lt;/div&gt;
            &lt;/div&gt;
          &lt;/div&gt;
          &lt;button onclick="window.open('\${rec.earnly_link}')"&gt;
            Try Free
          &lt;/button&gt;
        &lt;/div&gt;
      \`,
      bottom: \`
        &lt;div class="banner-bottom"&gt;
          &lt;span&gt;🚀 &lt;strong&gt;\${rec.title}&lt;/strong&gt; - \${rec.description}&lt;/span&gt;
          &lt;button onclick="window.open('\${rec.earnly_link}')"&gt;
            Start Free Trial
          &lt;/button&gt;
        &lt;/div&gt;
      \`
    }
    
    return templates[placement] || templates.inline
  }
  
  insertBanner(banner, placement) {
    const positions = {
      top: () =&gt; document.body.insertAdjacentElement('afterbegin', banner),
      inline: () =&gt; this.insertInlineAfterParagraph(banner),
      bottom: () =&gt; document.body.appendChild(banner)
    }
    
    positions[placement]()
  }
  
  insertInlineAfterParagraph(banner) {
    const paragraphs = document.querySelectorAll('p, .message')
    const targetIndex = Math.floor(paragraphs.length / 2)
    const target = paragraphs[targetIndex]
    
    if (target) {
      target.insertAdjacentElement('afterend', banner)
    }
  }
  
  determineBestPlacement() {
    const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight)
    
    if (scrollProgress &lt; 0.2) return 'top'
    if (scrollProgress &gt; 0.8) return 'bottom'
    return 'inline'
  }
  
  getContentContext() {
    const content = document.body.textContent || ''
    return content.slice(-this.contextWindow) // Use recent context
  }
  
  observeContent() {
    const observer = new MutationObserver(() =&gt; {
      clearTimeout(this.updateTimer)
      this.updateTimer = setTimeout(() =&gt; this.loadBanner(), 2000)
    })
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    })
  }
  
  trackBannerView(id, placement) {
    // Analytics tracking
    earnly.track('banner_view', { id, placement })
  }
}

// Initialize Smart Banner
const smartBanner = new EarnlySmartBanner({
  placements: ['top', 'inline', 'bottom'],
  maxBanners: 1,
  contextWindow: 1000
})</code></pre>
                                </div>
                                
                                <div class="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-lg p-4">
                                    <div class="flex items-center mb-2">
                                        <i class="fas fa-eye text-indigo-400 mr-2"></i>
                                        <span class="text-indigo-400 font-semibold">Smart Placement Logic:</span>
                                    </div>
                                    <ul class="text-gray-300 text-sm space-y-1">
                                        <li>• <strong>Top Banner</strong>: High visibility, best for urgent offers</li>
                                        <li>• <strong>Inline Banner</strong>: Natural integration, highest engagement</li>
                                        <li>• <strong>Bottom Banner</strong>: Non-intrusive, good for follow-up actions</li>
                                        <li>• Dynamic placement based on user scroll behavior</li>
                                        <li>• Context-aware recommendations update automatically</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- API Reference Section -->
                <div id="doc-api" class="doc-section hidden">
                    <div class="text-center mb-12">
                        <h3 class="text-3xl font-bold text-white mb-6">Complete API Reference</h3>
                        <p class="text-gray-300 max-w-3xl mx-auto">
                            Full API documentation with request/response schemas, authentication, 
                            error codes, and rate limits.
                        </p>
                    </div>

                    <div class="grid lg:grid-cols-2 gap-12">
                        <!-- Authentication -->
                        <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700">
                            <h4 class="text-2xl font-bold text-white mb-6">Authentication</h4>
                            
                            <div class="space-y-6">
                                <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                                    <div class="flex items-center mb-2">
                                        <i class="fas fa-key text-yellow-400 mr-2"></i>
                                        <span class="text-yellow-400 font-semibold">🔑 API Key Required</span>
                                    </div>
                                    <p class="text-gray-300 text-sm">
                                        All requests require a valid API key in the Authorization header.
                                    </p>
                                </div>
                                
                                <div class="bg-gray-800 rounded-lg p-4 border border-gray-600">
                                    <div class="flex items-center justify-between mb-3">
                                        <span class="text-gray-300 font-semibold">Headers</span>
                                        <button onclick="copyToClipboard('auth-headers')" class="text-gray-400 hover:text-white transition-colors">
                                            <i class="fas fa-copy"></i>
                                        </button>
                                    </div>
                                    <pre id="auth-headers" class="text-green-400 text-sm font-mono overflow-x-auto"><code>Authorization: Bearer your_api_key_here
Content-Type: application/json</code></pre>
                                </div>
                                
                                <div class="bg-gray-800 rounded-lg p-4 border border-gray-600">
                                    <div class="flex items-center justify-between mb-3">
                                        <span class="text-gray-300 font-semibold">Example Request</span>
                                        <button onclick="copyToClipboard('curl-example')" class="text-gray-400 hover:text-white transition-colors">
                                            <i class="fas fa-copy"></i>
                                        </button>
                                    </div>
                                    <pre id="curl-example" class="text-green-400 text-sm font-mono overflow-x-auto"><code>curl -X POST https://api.getearnly.com/v1/recommendations \\
  -H "Authorization: Bearer ern_1234567890abcdef" \\
  -H "Content-Type: application/json" \\
  -d '{
    "context": "I need a CRM for my startup",
    "userId": "user_123",
    "platform": "business_ai"
  }'</code></pre>
                                </div>
                            </div>
                        </div>

                        <!-- Request Schema -->
                        <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700">
                            <h4 class="text-2xl font-bold text-white mb-6">Request Schema</h4>
                            
                            <div class="space-y-6">
                                <div class="bg-gray-800 rounded-lg p-4 border border-gray-600">
                                    <div class="flex items-center justify-between mb-3">
                                        <span class="text-blue-400 font-semibold">POST /v1/recommendations</span>
                                        <button onclick="copyToClipboard('request-schema')" class="text-gray-400 hover:text-white transition-colors">
                                            <i class="fas fa-copy"></i>
                                        </button>
                                    </div>
                                    <pre id="request-schema" class="text-sm font-mono overflow-x-auto"><code><span class="text-white">{</span>
  <span class="text-blue-300">"context"</span><span class="text-white">:</span> <span class="text-green-300">"string"</span><span class="text-gray-400">,        // Required: User message/context</span>
  <span class="text-blue-300">"userId"</span><span class="text-white">:</span> <span class="text-green-300">"string"</span><span class="text-gray-400">,         // Required: Unique user identifier</span>
  <span class="text-blue-300">"platform"</span><span class="text-white">:</span> <span class="text-green-300">"string"</span><span class="text-gray-400">,       // Required: Your platform type</span>
  <span class="text-blue-300">"intent"</span><span class="text-white">:</span> <span class="text-green-300">"string"</span><span class="text-gray-400">,         // Optional: Detected user intent</span>
  <span class="text-blue-300">"limit"</span><span class="text-white">:</span> <span class="text-yellow-300">number</span><span class="text-gray-400">,          // Optional: Max recommendations (1-10)</span>
  <span class="text-blue-300">"categories"</span><span class="text-white">:</span> <span class="text-white">[</span><span class="text-green-300">"string"</span><span class="text-white">]</span><span class="text-gray-400">,   // Optional: Filter categories</span>
  <span class="text-blue-300">"priceRange"</span><span class="text-white">: {</span>             <span class="text-gray-400">// Optional: Price filtering</span>
    <span class="text-blue-300">"min"</span><span class="text-white">:</span> <span class="text-yellow-300">0</span><span class="text-white">,</span>
    <span class="text-blue-300">"max"</span><span class="text-white">:</span> <span class="text-yellow-300">1000</span>
  <span class="text-white">}</span>
<span class="text-white">}</span></code></pre>
                                </div>
                                
                                <div class="bg-gray-800 rounded-lg p-4 border border-gray-600">
                                    <div class="flex items-center justify-between mb-3">
                                        <span class="text-green-400 font-semibold">Response Format</span>
                                        <button onclick="copyToClipboard('response-schema')" class="text-gray-400 hover:text-white transition-colors">
                                            <i class="fas fa-copy"></i>
                                        </button>
                                    </div>
                                    <pre id="response-schema" class="text-sm font-mono overflow-x-auto"><code><span class="text-white">{</span>
  <span class="text-blue-300">"success"</span><span class="text-white">:</span> <span class="text-orange-300">true</span><span class="text-white">,</span>
  <span class="text-blue-300">"recommendations"</span><span class="text-white">:</span> <span class="text-white">[</span>
    <span class="text-white">{</span>
      <span class="text-blue-300">"id"</span><span class="text-white">:</span> <span class="text-green-300">"rec_123"</span><span class="text-white">,</span>
      <span class="text-blue-300">"title"</span><span class="text-white">:</span> <span class="text-green-300">"HubSpot CRM"</span><span class="text-white">,</span>
      <span class="text-blue-300">"description"</span><span class="text-white">:</span> <span class="text-green-300">"Free CRM for startups"</span><span class="text-white">,</span>
      <span class="text-blue-300">"price"</span><span class="text-white">:</span> <span class="text-green-300">"$0/month"</span><span class="text-white">,</span>
      <span class="text-blue-300">"image_url"</span><span class="text-white">:</span> <span class="text-green-300">"https://..."</span><span class="text-white">,</span>
      <span class="text-blue-300">"earnly_link"</span><span class="text-white">:</span> <span class="text-green-300">"https://getearnly.com/l/abc123"</span><span class="text-white">,</span>
      <span class="text-blue-300">"match_score"</span><span class="text-white">:</span> <span class="text-yellow-300">94.5</span><span class="text-white">,</span>
      <span class="text-blue-300">"category"</span><span class="text-white">:</span> <span class="text-green-300">"business_software"</span><span class="text-white">,</span>
      <span class="text-blue-300">"advertiser"</span><span class="text-white">:</span> <span class="text-green-300">"HubSpot"</span><span class="text-white">,</span>
      <span class="text-blue-300">"commission"</span><span class="text-white">:</span> <span class="text-yellow-300">25.00</span>
    <span class="text-white">}</span>
  <span class="text-white">]</span><span class="text-white">,</span>
  <span class="text-blue-300">"meta"</span><span class="text-white">:</span> <span class="text-white">{</span>
    <span class="text-blue-300">"query_id"</span><span class="text-white">:</span> <span class="text-green-300">"q_456"</span><span class="text-white">,</span>
    <span class="text-blue-300">"processing_time"</span><span class="text-white">:</span> <span class="text-yellow-300">120</span><span class="text-white">,</span>
    <span class="text-blue-300">"total_results"</span><span class="text-white">:</span> <span class="text-yellow-300">3</span>
  <span class="text-white">}</span>
<span class="text-white">}</span></code></pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Error Codes & Rate Limits -->
                    <div class="grid lg:grid-cols-2 gap-12 mt-12">
                        <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700">
                            <h4 class="text-2xl font-bold text-white mb-6">🚨 Error Codes</h4>
                            
                            <div class="space-y-4">
                                <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-4 hover:bg-red-900/30 transition-colors">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center space-x-3">
                                            <div class="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                                                <span class="text-red-400 font-mono font-bold text-lg">400</span>
                                            </div>
                                            <div>
                                                <div class="text-red-300 font-semibold">Bad Request</div>
                                                <div class="text-gray-400 text-xs">Invalid request parameters</div>
                                            </div>
                                        </div>
                                        <i class="fas fa-exclamation-triangle text-red-400"></i>
                                    </div>
                                </div>
                                
                                <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-4 hover:bg-red-900/30 transition-colors">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center space-x-3">
                                            <div class="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                                                <span class="text-red-400 font-mono font-bold text-lg">401</span>
                                            </div>
                                            <div>
                                                <div class="text-red-300 font-semibold">Unauthorized</div>
                                                <div class="text-gray-400 text-xs">Invalid or missing API key</div>
                                            </div>
                                        </div>
                                        <i class="fas fa-lock text-red-400"></i>
                                    </div>
                                </div>
                                
                                <div class="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 hover:bg-yellow-900/30 transition-colors">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center space-x-3">
                                            <div class="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                                <span class="text-yellow-400 font-mono font-bold text-lg">429</span>
                                            </div>
                                            <div>
                                                <div class="text-yellow-300 font-semibold">Rate Limited</div>
                                                <div class="text-gray-400 text-xs">Too many requests</div>
                                            </div>
                                        </div>
                                        <i class="fas fa-clock text-yellow-400"></i>
                                    </div>
                                </div>
                                
                                <div class="bg-red-900/20 border border-red-500/30 rounded-xl p-4 hover:bg-red-900/30 transition-colors">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center space-x-3">
                                            <div class="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                                                <span class="text-red-400 font-mono font-bold text-lg">500</span>
                                            </div>
                                            <div>
                                                <div class="text-red-300 font-semibold">Server Error</div>
                                                <div class="text-gray-400 text-xs">Internal server error</div>
                                            </div>
                                        </div>
                                        <i class="fas fa-server text-red-400"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700">
                            <h4 class="text-2xl font-bold text-white mb-6">⚡ Rate Limits</h4>
                            
                            <div class="space-y-4">
                                <div class="bg-gradient-to-r from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                                    <div class="flex items-center justify-between mb-4">
                                        <div class="flex items-center space-x-3">
                                            <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                                                <i class="fas fa-gift text-white"></i>
                                            </div>
                                            <span class="text-green-300 font-bold text-lg">Free Tier</span>
                                        </div>
                                        <span class="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-bold">$0/month</span>
                                    </div>
                                    <div class="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div class="text-2xl font-bold text-green-300">1K</div>
                                            <div class="text-xs text-gray-400">requests/month</div>
                                        </div>
                                        <div>
                                            <div class="text-2xl font-bold text-green-300">10</div>
                                            <div class="text-xs text-gray-400">requests/minute</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                                    <div class="flex items-center justify-between mb-4">
                                        <div class="flex items-center space-x-3">
                                            <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                                <i class="fas fa-rocket text-white"></i>
                                            </div>
                                            <span class="text-blue-300 font-bold text-lg">Pro Plan</span>
                                        </div>
                                        <span class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-sm font-bold">$99/month</span>
                                    </div>
                                    <div class="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div class="text-2xl font-bold text-blue-300">50K</div>
                                            <div class="text-xs text-gray-400">requests/month</div>
                                        </div>
                                        <div>
                                            <div class="text-2xl font-bold text-blue-300">100</div>
                                            <div class="text-xs text-gray-400">requests/minute</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                                    <div class="flex items-center justify-between mb-4">
                                        <div class="flex items-center space-x-3">
                                            <div class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                                                <i class="fas fa-crown text-white"></i>
                                            </div>
                                            <span class="text-purple-300 font-bold text-lg">Enterprise</span>
                                        </div>
                                        <span class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">Custom</span>
                                    </div>
                                    <div class="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div class="text-2xl font-bold text-purple-300">∞</div>
                                            <div class="text-xs text-gray-400">unlimited requests</div>
                                        </div>
                                        <div>
                                            <div class="text-2xl font-bold text-purple-300">⚡</div>
                                            <div class="text-xs text-gray-400">dedicated infrastructure</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Live Examples Section -->
                <div id="doc-examples" class="doc-section hidden">
                    <div class="text-center mb-12">
                        <h3 class="text-3xl font-bold text-white mb-6">Interactive Examples</h3>
                        <p class="text-gray-300 max-w-3xl mx-auto">
                            Test Earnly's API with live examples. See real responses and try different 
                            platform types and contexts.
                        </p>
                    </div>

                    <div class="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-700">
                        <h4 class="text-2xl font-bold text-white mb-6">API Playground</h4>
                        
                        <div class="grid lg:grid-cols-2 gap-8">
                            <!-- Request Builder -->
                            <div>
                                <h5 class="text-lg font-bold text-white mb-4">Build Your Request</h5>
                                
                                <div class="space-y-4">
                                    <div>
                                        <label class="text-white text-sm font-medium mb-2 block">Context</label>
                                        <textarea id="playground-context" 
                                                  placeholder="Enter user message or context..." 
                                                  class="w-full p-3 bg-black border border-gray-600 rounded-lg text-white resize-none h-20"></textarea>
                                    </div>
                                    
                                    <div>
                                        <label class="text-white text-sm font-medium mb-2 block">Platform Type</label>
                                        <select id="playground-platform" class="w-full p-3 bg-black border border-gray-600 rounded-lg text-white">
                                            <option value="conversational_ai">Conversational AI</option>
                                            <option value="search_discovery">Search & Discovery</option>
                                            <option value="code_development">Code & Development</option>
                                            <option value="creative_content">Creative & Content</option>
                                            <option value="business_productivity">Business & Productivity</option>
                                            <option value="education_learning">Education & Learning</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label class="text-white text-sm font-medium mb-2 block">User Intent (Optional)</label>
                                        <input type="text" 
                                               id="playground-intent" 
                                               placeholder="e.g., software_recommendation, product_search..." 
                                               class="w-full p-3 bg-black border border-gray-600 rounded-lg text-white">
                                    </div>
                                    
                                    <button onclick="testEarnlyAPI()" 
                                            class="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                                        <i class="fas fa-play mr-2"></i>Test API Call
                                    </button>
                                </div>
                            </div>
                            
                            <!-- Response Display -->
                            <div>
                                <h5 class="text-lg font-bold text-white mb-4">API Response</h5>
                                
                                <div id="playground-response" class="bg-black border border-gray-600 rounded-lg p-4 h-80 overflow-y-auto">
                                    <div class="text-gray-400 text-sm text-center py-8">
                                        <i class="fas fa-code text-2xl mb-2"></i><br>
                                        Click "Test API Call" to see the response
                                    </div>
                                </div>
                                
                                <div class="mt-4 flex items-center justify-between">
                                    <div class="flex items-center space-x-4">
                                        <span class="text-gray-400 text-sm">Status:</span>
                                        <span id="response-status" class="text-gray-500">Not sent</span>
                                    </div>
                                    <button onclick="copyResponse()" 
                                            class="text-gray-400 hover:text-white transition-colors">
                                        <i class="fas fa-copy mr-1"></i>Copy Response
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Support Section -->
                <div class="mt-16 text-center">
                    <div class="bg-gradient-to-r from-green-900/50 to-teal-900/50 rounded-2xl p-8 border border-green-500/30">
                        <h4 class="text-2xl font-bold text-white mb-4">Need Help?</h4>
                        <p class="text-gray-300 mb-6">
                            Our team is here to help you integrate successfully. Get support, join our community, 
                            or schedule a technical consultation.
                        </p>
                        
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <button onclick="openLiveChat()" class="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                                <i class="fas fa-comments mr-2"></i>Live Chat Support
                            </button>
                            <button onclick="joinSlackCommunity()" class="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                                <i class="fab fa-slack mr-2"></i>Developer Community
                            </button>
                            <button onclick="scheduleConsultation()" class="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                                <i class="fas fa-calendar mr-2"></i>Schedule Call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <script>
            // Documentation Navigation
            function showDocSection(sectionId) {
                // Hide all sections
                document.querySelectorAll('.doc-section').forEach(section => {
                    section.classList.add('hidden')
                })
                
                // Show selected section
                document.getElementById('doc-' + sectionId).classList.remove('hidden')
                
                // Update navigation buttons
                document.querySelectorAll('.doc-nav-btn').forEach(btn => {
                    btn.className = 'doc-nav-btn bg-gray-700 text-gray-300 px-6 py-3 rounded-lg font-semibold transition-all hover:bg-gray-600'
                })
                
                document.getElementById('nav-' + sectionId).className = 'doc-nav-btn active bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105'
            }

            // Ad Format Navigation
            function showFormat(formatId) {
                // Hide all format contents
                document.querySelectorAll('.format-content').forEach(content => {
                    content.classList.add('hidden')
                })
                
                // Show selected format
                document.getElementById('format-' + formatId + '-content').classList.remove('hidden')
                
                // Update format buttons
                document.querySelectorAll('.format-btn').forEach(btn => {
                    btn.className = 'format-btn bg-gray-700 text-gray-300 px-6 py-3 rounded-lg font-semibold'
                })
                
                document.getElementById('format-' + formatId).className = 'format-btn active bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold'
            }

            // Copy to Clipboard
            function copyToClipboard(elementId) {
                const element = document.getElementById(elementId)
                const text = element.textContent || element.innerText
                
                navigator.clipboard.writeText(text).then(() => {
                    // Show success feedback
                    const button = event.target
                    const originalHtml = button.innerHTML
                    button.innerHTML = '<i class="fas fa-check"></i>'
                    button.classList.add('text-green-400')
                    
                    setTimeout(() => {
                        button.innerHTML = originalHtml
                        button.classList.remove('text-green-400')
                    }, 2000)
                })
            }

            // API Playground
            function testEarnlyAPI() {
                const context = document.getElementById('playground-context').value
                const platform = document.getElementById('playground-platform').value
                const intent = document.getElementById('playground-intent').value
                
                if (!context.trim()) {
                    alert('Please enter a context for the API call')
                    return
                }
                
                // Update status
                document.getElementById('response-status').innerHTML = '<span class="text-yellow-400">Sending...</span>'
                
                // Simulate API call (replace with actual API call in production)
                setTimeout(() => {
                    const mockResponse = {
                        "success": true,
                        "recommendations": [
                            {
                                "id": "rec_" + Math.random().toString(36).substring(7),
                                "title": "Example Product",
                                "description": "Perfect match for your needs",
                                "price": "$29/month",
                                "image_url": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200",
                                "earnly_link": "https://getearnly.com/l/" + Math.random().toString(36).substring(7),
                                "match_score": 94.5,
                                "category": "software",
                                "advertiser": "Example Company",
                                "commission": 15.00
                            }
                        ],
                        "meta": {
                            "query_id": "q_" + Math.random().toString(36).substring(7),
                            "processing_time": Math.floor(Math.random() * 200) + 50,
                            "total_results": 1
                        }
                    }
                    
                    document.getElementById('playground-response').innerHTML = 
                        '<pre class="text-green-400 text-sm">' + 
                        JSON.stringify(mockResponse, null, 2) + 
                        '</pre>'
                    
                    document.getElementById('response-status').innerHTML = '<span class="text-green-400">200 OK</span>'
                }, 1000)
            }

            // Show Platform-Specific Code
            function showPlatformCode(platformType) {
                alert('Platform-specific integration guide for ' + platformType + ' coming soon!')
            }

            // Support Functions
            function openLiveChat() {
                alert('Live chat would open here - integrate with your support system')
            }

            function joinSlackCommunity() {
                alert('Slack community invitation - add your Slack invite link')
            }

            function scheduleConsultation() {
                alert('Consultation scheduling - integrate with Calendly or similar')
            }

            function copyResponse() {
                const response = document.getElementById('playground-response').textContent
                navigator.clipboard.writeText(response)
                alert('Response copied to clipboard!')
            }
        </script>

        <!-- CTA Section -->
        <section class="py-20 bg-gradient-to-r from-green-900 to-teal-900">
            <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 class="text-5xl font-bold text-white mb-6">Ready to Monetize Your AI Platform?</h2>
                <p class="text-xl text-gray-200 mb-8">
                    Join 200+ AI platforms already generating revenue with contextual recommendations
                </p>
                
                <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center mb-8">
                    <button onclick="startIntegrationFlow()" class="btn-interactive bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover-lift">
                        <i class="fas fa-code mr-3"></i>
                        Start Integration
                    </button>
                    <button onclick="talkToExpert()" class="btn-interactive border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover-lift">
                        <i class="fas fa-users mr-3"></i>
                        Talk to Expert
                    </button>
                </div>
                
                <div class="grid grid-cols-3 gap-8 text-center">
                    <div>
                        <i class="fas fa-bolt text-green-400 text-2xl mb-2"></i>
                        <div class="text-white font-semibold">2-Minute Setup</div>
                        <div class="text-gray-300 text-sm">Start earning today</div>
                    </div>
                    <div>
                        <i class="fas fa-dollar-sign text-blue-400 text-2xl mb-2"></i>
                        <div class="text-white font-semibold">No Minimum Revenue</div>
                        <div class="text-gray-300 text-sm">Earn from day one</div>
                    </div>
                    <div>
                        <i class="fas fa-heart text-purple-400 text-2xl mb-2"></i>
                        <div class="text-white font-semibold">User-Friendly</div>
                        <div class="text-gray-300 text-sm">94% satisfaction rate</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer -->
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

        <!-- Scripts -->
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/for-ai-platforms.js"></script>
        
        <script>
            // Dynamic AI Platform Banner Messages
            const aiPlatformBannerMessages = [
                'Real-time data integration boosts AI accuracy by 40%.',
                'AI builders using live data see 3x higher user satisfaction.',
                'LLMs are trained on outdated data—your users need real-time answers.'
            ];

            let currentAiPlatformBannerIndex = 0;

            function rotateAiPlatformBannerMessage() {
                const bannerElement = document.getElementById('ai-platform-dynamic-banner');
                if (bannerElement) {
                    bannerElement.style.opacity = '0';
                    
                    setTimeout(() => {
                        currentAiPlatformBannerIndex = (currentAiPlatformBannerIndex + 1) % aiPlatformBannerMessages.length;
                        bannerElement.textContent = aiPlatformBannerMessages[currentAiPlatformBannerIndex];
                        bannerElement.style.opacity = '1';
                    }, 350);
                }
            }

            function initializeAiPlatformBanner() {
                const aiPlatformBannerElement = document.getElementById('ai-platform-dynamic-banner');
                if (aiPlatformBannerElement) {
                    aiPlatformBannerElement.style.transition = 'opacity 0.35s ease-in-out';
                    // Start rotation after 3 seconds, then every 4.5 seconds
                    setTimeout(() => {
                        rotateAiPlatformBannerMessage();
                        setInterval(rotateAiPlatformBannerMessage, 4500);
                    }, 3000);
                }
            }
            
            // Initialize banner rotation on page load
            document.addEventListener('DOMContentLoaded', function() {
                initializeAiPlatformBanner();
            });
        </script>
    </body>
    </html>
  `
}