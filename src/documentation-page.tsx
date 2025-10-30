// Documentation Page - Comprehensive Earnly AI Documentation
export const DocumentationPage = () => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Documentation | Earnly AI - Complete Developer Guide & API Reference</title>
        <meta name="description" content="Complete developer documentation for Earnly AI integration. API reference, SDKs, code examples, and best practices for AI-native advertising implementation.">
        
        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://getearnly.com/docs">
        <meta property="og:title" content="Documentation | Earnly AI Developer Guide">
        <meta property="og:description" content="Complete API reference, SDKs, and code examples for Earnly AI integration.">
        <meta property="og:image" content="https://getearnly.com/static/og-docs.png">
        
        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url" content="https://getearnly.com/docs">
        <meta property="twitter:title" content="Earnly AI Documentation & API Reference">
        <meta property="twitter:description" content="Developer guide for AI-native advertising integration with complete API documentation.">
        <meta property="twitter:image" content="https://getearnly.com/static/og-docs.png">
        
        <!-- Additional SEO -->
        <meta name="keywords" content="API documentation, developer guide, SDK integration, API reference, code examples, AI advertising API">
        <meta name="robots" content="index, follow">
        <link rel="canonical" href="https://getearnly.com/docs">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/themes/prism-tomorrow.min.css" rel="stylesheet">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/components/prism-core.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.24.1/plugins/autoloader/prism-autoloader.min.js"></script>
        
        <style>
          .glass {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 0, 0, 0.1);
          }
          
          .sidebar-scroll {
            scrollbar-width: thin;
            scrollbar-color: #cbd5e1 transparent;
          }
          
          .sidebar-scroll::-webkit-scrollbar {
            width: 6px;
          }
          
          .sidebar-scroll::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .sidebar-scroll::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 3px;
          }
          
          .code-block {
            position: relative;
          }
          
          .copy-button {
            position: absolute;
            top: 0.75rem;
            right: 0.75rem;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 0.5rem;
            border-radius: 0.375rem;
            color: #e2e8f0;
            font-size: 0.75rem;
            transition: all 0.2s;
          }
          
          .copy-button:hover {
            background: rgba(255, 255, 255, 0.2);
          }
          
          .nav-link.active {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            color: white;
          }
          
          .content-section {
            scroll-margin-top: 2rem;
          }
          
          .main-content {
            scrollbar-width: thin;
            scrollbar-color: #cbd5e1 #f8fafc;
          }
          
          .main-content::-webkit-scrollbar {
            width: 8px;
          }
          
          .main-content::-webkit-scrollbar-track {
            background: #f8fafc;
          }
          
          .main-content::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 4px;
          }
          
          .main-content::-webkit-scrollbar-thumb:hover {
            background-color: #94a3b8;
          }
          
          .docs-table {
            border-collapse: collapse;
            width: 100%;
            font-size: 0.875rem;
          }
          
          .docs-table th,
          .docs-table td {
            border: 1px solid #e5e7eb;
            padding: 0.75rem;
            text-align: left;
          }
          
          .docs-table th {
            background-color: #f9fafb;
            font-weight: 600;
            color: #374151;
          }
          
          .docs-table tr:nth-child(even) {
            background-color: #f9fafb;
          }
        </style>
    </head>
    <body class="bg-gray-50">
        <div class="flex h-screen overflow-hidden">
            <!-- Sidebar -->
            <div class="glass fixed left-0 top-0 h-full w-80 border-r bg-white/95 backdrop-blur-sm z-30 overflow-hidden">
                <!-- Header -->
                <div class="border-b p-6">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <i class="fas fa-code text-white text-sm"></i>
                        </div>
                        <div>
                            <h1 class="text-lg font-bold text-gray-900">Earnly AI Docs</h1>
                            <p class="text-xs text-gray-500">Complete Developer Guide</p>
                        </div>
                    </div>
                    
                    <!-- Search -->
                    <div class="mt-4 relative">
                        <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                        <input
                            type="text"
                            id="search-input"
                            placeholder="Search documentation..."
                            class="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                            oninput="searchDocs()"
                        >
                    </div>
                </div>
                
                <!-- Navigation -->
                <nav class="p-4 sidebar-scroll" style="height: calc(100vh - 140px); overflow-y: auto;">
                    <div class="space-y-1">
                        <!-- Getting Started -->
                        <div class="mb-4">
                            <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Getting Started</h3>
                            <a href="#introduction" onclick="showSection('introduction')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fas fa-play mr-2 text-xs"></i>Introduction
                            </a>
                            <a href="#quick-start" onclick="showSection('quick-start')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fas fa-rocket mr-2 text-xs"></i>Quick Start
                            </a>
                        </div>

                        <!-- SDKs -->
                        <div class="mb-4">
                            <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">SDKs & Integration</h3>
                            <a href="#react-sdk" onclick="showSection('react-sdk')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fab fa-react mr-2 text-xs"></i>React SDK
                            </a>
                            <a href="#vue-sdk" onclick="showSection('vue-sdk')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fab fa-vuejs mr-2 text-xs"></i>Vue.js SDK
                            </a>
                            <a href="#angular-sdk" onclick="showSection('angular-sdk')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fab fa-angular mr-2 text-xs"></i>Angular SDK
                            </a>
                            <a href="#nodejs-sdk" onclick="showSection('nodejs-sdk')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fab fa-node-js mr-2 text-xs"></i>Node.js SDK
                            </a>
                            <a href="#python-sdk" onclick="showSection('python-sdk')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fab fa-python mr-2 text-xs"></i>Python SDK
                            </a>
                            <a href="#go-sdk" onclick="showSection('go-sdk')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fas fa-code mr-2 text-xs"></i>Go SDK
                            </a>
                            <a href="#php-sdk" onclick="showSection('php-sdk')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fab fa-php mr-2 text-xs"></i>PHP SDK
                            </a>
                        </div>

                        <!-- APIs -->
                        <div class="mb-4">
                            <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">APIs</h3>
                            <a href="#rest-api" onclick="showSection('rest-api')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fas fa-code mr-2 text-xs"></i>REST API
                            </a>
                            <a href="#recommendations" onclick="showSection('recommendations')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fas fa-thumbs-up mr-2 text-xs"></i>Recommendations API
                            </a>
                            <a href="#analytics-api" onclick="showSection('analytics-api')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fas fa-chart-bar mr-2 text-xs"></i>Analytics API
                            </a>
                        </div>

                        <!-- Advanced Features -->
                        <div class="mb-4">
                            <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Advanced Features</h3>
                            <a href="#attribution" onclick="showSection('attribution')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fas fa-link mr-2 text-xs"></i>Attribution & Tracking
                            </a>
                            <a href="#auto-optimization" onclick="showSection('auto-optimization')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fas fa-magic mr-2 text-xs"></i>Auto-Optimization
                            </a>
                            <a href="#ab-testing" onclick="showSection('ab-testing')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fas fa-flask mr-2 text-xs"></i>A/B Testing
                            </a>
                            <a href="#webhooks" onclick="showSection('webhooks')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fas fa-webhook mr-2 text-xs"></i>Webhooks
                            </a>
                        </div>

                        <!-- Platform Integrations -->
                        <div class="mb-4">
                            <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Platform Examples</h3>
                            <a href="#chatgpt-integration" onclick="showSection('chatgpt-integration')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fas fa-comments mr-2 text-xs"></i>ChatGPT Integration
                            </a>
                            <a href="#claude-integration" onclick="showSection('claude-integration')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fas fa-robot mr-2 text-xs"></i>Claude Integration
                            </a>
                        </div>

                        <!-- Resources -->
                        <div class="mb-4">
                            <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Resources</h3>
                            <a href="#support" onclick="showSection('support')" class="nav-link block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                                <i class="fas fa-life-ring mr-2 text-xs"></i>Support
                            </a>
                        </div>
                    </div>
                </nav>
            </div>

            <!-- Main Content -->
            <main class="flex-1 ml-80 overflow-auto main-content">
                <div class="max-w-4xl mx-auto p-8">
                    <!-- Introduction -->
                    <section id="introduction" class="content-section">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">Welcome to Earnly AI</h1>
                        
                        <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border border-blue-200">
                            <h2 class="text-2xl font-semibold text-gray-900 mb-4">AI-Native Advertising Platform</h2>
                            <p class="text-gray-700 mb-4">
                                Earnly AI is the world's first AI-native advertising platform designed specifically for AI applications, 
                                chatbots, and intelligent systems. We provide contextual recommendations, real-time optimization, 
                                and comprehensive analytics to maximize both user engagement and revenue.
                            </p>
                            
                            <div class="grid md:grid-cols-3 gap-4 mt-6">
                                <div class="bg-white p-4 rounded-lg border border-blue-100">
                                    <i class="fas fa-brain text-blue-600 text-2xl mb-2"></i>
                                    <h3 class="font-semibold text-gray-900 mb-1">AI-Powered</h3>
                                    <p class="text-gray-600 text-sm">Advanced machine learning algorithms for intelligent recommendations</p>
                                </div>
                                <div class="bg-white p-4 rounded-lg border border-purple-100">
                                    <i class="fas fa-tachometer-alt text-purple-600 text-2xl mb-2"></i>
                                    <h3 class="font-semibold text-gray-900 mb-1">Real-time</h3>
                                    <p class="text-gray-600 text-sm">Instant optimization and contextual targeting</p>
                                </div>
                                <div class="bg-white p-4 rounded-lg border border-green-100">
                                    <i class="fas fa-chart-line text-green-600 text-2xl mb-2"></i>
                                    <h3 class="font-semibold text-gray-900 mb-1">Performance</h3>
                                    <p class="text-gray-600 text-sm">Maximize revenue with advanced attribution models</p>
                                </div>
                            </div>
                        </div>

                        <h2 class="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
                        
                        <div class="grid md:grid-cols-2 gap-6 mb-8">
                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">
                                    <i class="fas fa-magic text-blue-600 mr-2"></i>
                                    Smart Recommendations
                                </h3>
                                <ul class="space-y-2 text-gray-700">
                                    <li>• Contextual product and content recommendations</li>
                                    <li>• Real-time personalization engine</li>
                                    <li>• Multi-touch attribution tracking</li>
                                    <li>• Advanced filtering and targeting</li>
                                </ul>
                            </div>
                            
                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">
                                    <i class="fas fa-cog text-green-600 mr-2"></i>
                                    Auto-Optimization
                                </h3>
                                <ul class="space-y-2 text-gray-700">
                                    <li>• Automated A/B testing framework</li>
                                    <li>• Performance-based optimization</li>
                                    <li>• Revenue maximization algorithms</li>
                                    <li>• Fraud detection and prevention</li>
                                </ul>
                            </div>
                            
                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">
                                    <i class="fas fa-shield-alt text-purple-600 mr-2"></i>
                                    Privacy-First
                                </h3>
                                <ul class="space-y-2 text-gray-700">
                                    <li>• GDPR and CCPA compliant</li>
                                    <li>• Server-side attribution</li>
                                    <li>• No third-party cookies</li>
                                    <li>• Anonymized user profiling</li>
                                </ul>
                            </div>
                            
                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">
                                    <i class="fas fa-puzzle-piece text-orange-600 mr-2"></i>
                                    Easy Integration
                                </h3>
                                <ul class="space-y-2 text-gray-700">
                                    <li>• SDK-first development approach</li>
                                    <li>• No-code WordPress & Shopify plugins</li>
                                    <li>• Cross-platform compatibility</li>
                                    <li>• Comprehensive API documentation</li>
                                </ul>
                            </div>
                        </div>

                        <div class="bg-green-50 border border-green-200 rounded-lg p-6">
                            <h3 class="text-lg font-semibold text-green-800 mb-3">What Makes Earnly Different?</h3>
                            <p class="text-green-700 mb-3">
                                Unlike traditional advertising platforms, Earnly AI is built from the ground up for AI applications. 
                                We understand the unique requirements of chatbots, AI assistants, and intelligent systems.
                            </p>
                            <div class="flex flex-wrap gap-4">
                                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">AI-Native Design</span>
                                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Contextual Understanding</span>
                                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Performance Optimization</span>
                                <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Developer-Friendly</span>
                            </div>
                        </div>
                    </section>

                    <!-- Quick Start -->
                    <section id="quick-start" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">Quick Start Guide</h1>
                        
                        <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8 border border-green-200">
                            <h2 class="text-xl font-semibold text-gray-900 mb-4">Get Started in Minutes</h2>
                            <p class="text-gray-700">Choose your integration path and start generating revenue with AI-powered recommendations.</p>
                        </div>

                        <div class="grid md:grid-cols-2 gap-6 mb-8">
                            <div class="bg-white border-2 border-blue-200 rounded-lg p-6 hover:border-blue-300 transition-colors cursor-pointer" onclick="showDeveloperPath()">
                                <div class="flex items-center mb-4">
                                    <i class="fas fa-code text-2xl text-blue-600 mr-3"></i>
                                    <h3 class="text-xl font-semibold text-gray-900">Developer Integration</h3>
                                </div>
                                <p class="text-gray-600 mb-4">For developers who want full control and customization</p>
                                <div class="flex items-center text-blue-600 font-medium">
                                    <span>Choose Developer Path</span>
                                    <i class="fas fa-arrow-right ml-2"></i>
                                </div>
                            </div>
                            
                            <div class="bg-white border-2 border-green-200 rounded-lg p-6 hover:border-green-300 transition-colors cursor-pointer" onclick="showNoCodePath()">
                                <div class="flex items-center mb-4">
                                    <i class="fas fa-plug text-2xl text-green-600 mr-3"></i>
                                    <h3 class="text-xl font-semibold text-gray-900">No-Code Integration</h3>
                                </div>
                                <p class="text-gray-600 mb-4">Quick setup with WordPress, Shopify, and other platforms</p>
                                <div class="flex items-center text-green-600 font-medium">
                                    <span>Choose No-Code Path</span>
                                    <i class="fas fa-arrow-right ml-2"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Developer Path -->
                        <div id="developer-path" class="hidden">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6">Developer Integration Path</h2>
                            
                            <div class="space-y-6">
                                <div class="bg-white border border-gray-200 rounded-lg p-6">
                                    <div class="flex items-center mb-4">
                                        <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</div>
                                        <h3 class="text-lg font-semibold text-gray-900">Install SDK</h3>
                                    </div>
                                    <div class="code-block">
                                        <button class="copy-button" onclick="copyCode(this)">
                                            <i class="fas fa-copy mr-1"></i>Copy
                                        </button>
                                        <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-bash"># React
npm install @earnly/react-sdk

# Vue.js
npm install @earnly/vue-sdk

# Node.js
npm install @earnly/node-sdk

# Python
pip install earnly-python-sdk

# Go
go get github.com/earnly/go-sdk

# PHP
composer require earnly/php-sdk</code></pre>
                                    </div>
                                </div>

                                <div class="bg-white border border-gray-200 rounded-lg p-6">
                                    <div class="flex items-center mb-4">
                                        <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</div>
                                        <h3 class="text-lg font-semibold text-gray-900">Initialize Client</h3>
                                    </div>
                                    <div class="code-block">
                                        <button class="copy-button" onclick="copyCode(this)">
                                            <i class="fas fa-copy mr-1"></i>Copy
                                        </button>
                                        <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">import { EarnlyProvider } from '@earnly/react-sdk'

function App() {
  return (
    <EarnlyProvider apiKey="your-api-key" userId="user-123">
      <YourAppComponents />
    </EarnlyProvider>
  )
}</code></pre>
                                    </div>
                                </div>

                                <div class="bg-white border border-gray-200 rounded-lg p-6">
                                    <div class="flex items-center mb-4">
                                        <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</div>
                                        <h3 class="text-lg font-semibold text-gray-900">Add Recommendations</h3>
                                    </div>
                                    <div class="code-block">
                                        <button class="copy-button" onclick="copyCode(this)">
                                            <i class="fas fa-copy mr-1"></i>Copy
                                        </button>
                                        <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">import { EarnlyRecommendations } from '@earnly/react-sdk'

function HomePage() {
  return (
    <div>
      <h1>Welcome to Your Site</h1>
      <EarnlyRecommendations
        context={{ page: 'homepage', category: 'electronics' }}
        maxRecommendations={6}
        layout="grid"
      />
    </div>
  )
}</code></pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- No-Code Path -->
                        <div id="no-code-path" class="hidden">
                            <h2 class="text-2xl font-bold text-gray-900 mb-6">No-Code Integration Path</h2>
                            
                            <div class="grid md:grid-cols-2 gap-6">
                                <div class="bg-white border border-gray-200 rounded-lg p-6">
                                    <div class="flex items-center mb-4">
                                        <i class="fab fa-wordpress text-2xl text-blue-600 mr-3"></i>
                                        <h3 class="text-lg font-semibold text-gray-900">WordPress Plugin</h3>
                                    </div>
                                    <p class="text-gray-600 mb-4">Add AI-powered recommendations to any WordPress site with our official plugin.</p>
                                    <ol class="text-sm text-gray-700 space-y-2">
                                        <li>1. Install "Earnly AI Recommendations" plugin</li>
                                        <li>2. Enter your API key in settings</li>
                                        <li>3. Add [earnly_recommendations] shortcode</li>
                                        <li>4. Customize appearance and targeting</li>
                                    </ol>
                                </div>
                                
                                <div class="bg-white border border-gray-200 rounded-lg p-6">
                                    <div class="flex items-center mb-4">
                                        <i class="fas fa-shopping-cart text-2xl text-green-600 mr-3"></i>
                                        <h3 class="text-lg font-semibold text-gray-900">Shopify App</h3>
                                    </div>
                                    <p class="text-gray-600 mb-4">Boost e-commerce sales with intelligent product recommendations.</p>
                                    <ol class="text-sm text-gray-700 space-y-2">
                                        <li>1. Install Earnly AI app from Shopify store</li>
                                        <li>2. Connect your Earnly account</li>
                                        <li>3. Configure recommendation settings</li>
                                        <li>4. Choose placement locations</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- React SDK -->
                    <section id="react-sdk" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">React SDK</h1>
                        
                        <div class="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-8 border border-blue-200">
                            <div class="flex items-center mb-4">
                                <i class="fab fa-react text-2xl text-blue-600 mr-3"></i>
                                <h2 class="text-xl font-semibold text-gray-900">React Integration</h2>
                            </div>
                            <p class="text-gray-700 mb-4">Seamlessly integrate AI-powered recommendations into your React applications with our comprehensive SDK featuring hooks, components, and TypeScript support.</p>
                        </div>

                        <h2 class="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
                        
                        <div class="code-block mb-6">
                            <button class="copy-button" onclick="copyCode(this)">
                                <i class="fas fa-copy mr-1"></i>Copy
                            </button>
                            <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-bash">npm install @earnly/react-sdk
# or
yarn add @earnly/react-sdk
# or
pnpm add @earnly/react-sdk</code></pre>
                        </div>

                        <h2 class="text-2xl font-bold text-gray-900 mb-4">Setup & Configuration</h2>
                        
                        <div class="code-block mb-6">
                            <button class="copy-button" onclick="copyCode(this)">
                                <i class="fas fa-copy mr-1"></i>Copy
                            </button>
                            <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">import { EarnlyProvider } from '@earnly/react-sdk'
import React from 'react'

function App() {
  return (
    <EarnlyProvider 
      apiKey="your-api-key"
      userId="user-123"
      environment="production"
      options={{
        autoTrack: true,
        enableAnalytics: true,
        privacyMode: false,
        cacheEnabled: true
      }}
    >
      <YourAppComponents />
    </EarnlyProvider>
  )
}

export default App</code></pre>
                        </div>

                        <h2 class="text-2xl font-bold text-gray-900 mb-4">Basic Usage</h2>
                        
                        <div class="code-block mb-6">
                            <button class="copy-button" onclick="copyCode(this)">
                                <i class="fas fa-copy mr-1"></i>Copy
                            </button>
                            <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">import { EarnlyRecommendations, useEarnly } from '@earnly/react-sdk'
import React from 'react'

function ProductPage({ productId }) {
  const { trackEvent } = useEarnly()

  const handleRecommendationClick = (recommendation) => {
    trackEvent('recommendation_click', {
      recommendationId: recommendation.id,
      productId,
      timestamp: Date.now()
    })
  }

  return (
    <div>
      <h1>Product Details</h1>
      
      <EarnlyRecommendations
        context={{
          page: 'product-detail',
          category: 'electronics',
          currentProduct: productId,
          userPreferences: {
            priceRange: '$100-$500',
            brand: 'premium'
          }
        }}
        options={{
          maxRecommendations: 6,
          layout: 'grid',
          enableTracking: true
        }}
        onRecommendationClick={handleRecommendationClick}
      />
    </div>
  )
}

export default ProductPage</code></pre>
                        </div>

                        <h2 class="text-2xl font-bold text-gray-900 mb-4">Advanced Hooks</h2>
                        
                        <div class="grid md:grid-cols-2 gap-6 mb-8">
                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">useRecommendations Hook</h3>
                                <div class="code-block mb-4">
                                    <button class="copy-button" onclick="copyCode(this)">
                                        <i class="fas fa-copy mr-1"></i>Copy
                                    </button>
                                    <pre class="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto"><code class="language-javascript">import { useRecommendations } from '@earnly/react-sdk'

function CustomRecommendations() {
  const {
    recommendations,
    loading,
    error,
    refresh
  } = useRecommendations({
    context: { page: 'homepage' },
    maxRecommendations: 4
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      {recommendations.map(rec => (
        <RecommendationCard key={rec.id} {...rec} />
      ))}
    </div>
  )
}</code></pre>
                                </div>
                            </div>
                            
                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">useAnalytics Hook</h3>
                                <div class="code-block mb-4">
                                    <button class="copy-button" onclick="copyCode(this)">
                                        <i class="fas fa-copy mr-1"></i>Copy
                                    </button>
                                    <pre class="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto"><code class="language-javascript">import { useAnalytics } from '@earnly/react-sdk'

function Dashboard() {
  const {
    metrics,
    loading,
    timeRange,
    setTimeRange
  } = useAnalytics({
    metrics: ['ctr', 'revenue', 'conversions'],
    timeRange: 'last_30_days'
  })

  return (
    <div>
      <select onChange={(e) => setTimeRange(e.target.value)}>
        <option value="last_7_days">Last 7 Days</option>
        <option value="last_30_days">Last 30 Days</option>
      </select>
      
      {loading ? 'Loading...' : (
        <MetricsDisplay metrics={metrics} />
      )}
    </div>
  )
}</code></pre>
                                </div>
                            </div>
                        </div>

                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <h4 class="font-semibold text-blue-800 mb-2">React Best Practices</h4>
                            <ul class="text-blue-700 text-sm space-y-1">
                                <li>• Use EarnlyProvider at the top level of your app</li>
                                <li>• Implement proper error boundaries for recommendation components</li>
                                <li>• Use React.memo for performance optimization</li>
                                <li>• Track user interactions with useEarnly hook</li>
                                <li>• Implement loading and error states</li>
                            </ul>
                        </div>
                    </section>

                    <!-- Additional sections would continue here with the same pattern -->
                    <!-- For now, let me add placeholder sections for the remaining ones -->
                    
                    <section id="vue-sdk" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">Vue.js SDK</h1>
                        <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-8 border border-green-200">
                            <div class="flex items-center mb-4">
                                <i class="fab fa-vuejs text-2xl text-green-600 mr-3"></i>
                                <h2 class="text-xl font-semibold text-gray-900">Vue.js Integration</h2>
                            </div>
                            <p class="text-gray-700">Comprehensive Vue.js SDK with Composition API support, reactive data binding, and TypeScript integration.</p>
                        </div>
                        <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                            <p class="text-green-700">Vue.js SDK documentation with components, composables, and best practices coming soon.</p>
                        </div>
                    </section>

                    <section id="angular-sdk" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">Angular SDK</h1>
                        <div class="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 mb-8 border border-red-200">
                            <div class="flex items-center mb-4">
                                <i class="fab fa-angular text-2xl text-red-600 mr-3"></i>
                                <h2 class="text-xl font-semibold text-gray-900">Angular Integration</h2>
                            </div>
                            <p class="text-gray-700">Enterprise-grade Angular SDK with dependency injection, RxJS observables, and Angular CLI support.</p>
                        </div>
                        <div class="bg-red-50 border border-red-200 rounded-lg p-4">
                            <p class="text-red-700">Angular SDK documentation with services, components, and modules coming soon.</p>
                        </div>
                    </section>

                    <section id="nodejs-sdk" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">Node.js SDK</h1>
                        <div class="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 mb-8 border border-green-200">
                            <div class="flex items-center mb-4">
                                <i class="fab fa-node-js text-2xl text-green-600 mr-3"></i>
                                <h2 class="text-xl font-semibold text-gray-900">Server-Side Integration</h2>
                            </div>
                            <p class="text-gray-700">Full-featured Node.js SDK for server-side recommendation generation and analytics.</p>
                        </div>
                        <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                            <p class="text-green-700">Node.js SDK documentation with Express, Koa, and Fastify examples coming soon.</p>
                        </div>
                    </section>

                    <section id="python-sdk" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">Python SDK</h1>
                        <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-200">
                            <div class="flex items-center mb-4">
                                <i class="fab fa-python text-2xl text-blue-600 mr-3"></i>
                                <h2 class="text-xl font-semibold text-gray-900">Python Integration</h2>
                            </div>
                            <p class="text-gray-700">Comprehensive Python SDK with Django, Flask, FastAPI support and ML integration tools.</p>
                        </div>
                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p class="text-blue-700">Python SDK documentation with framework integrations and data science tools coming soon.</p>
                        </div>
                    </section>

                    <section id="go-sdk" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">Go SDK</h1>
                        <div class="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 mb-8 border border-cyan-200">
                            <div class="flex items-center mb-4">
                                <i class="fas fa-code text-2xl text-cyan-600 mr-3"></i>
                                <h2 class="text-xl font-semibold text-gray-900">Go Integration</h2>
                            </div>
                            <p class="text-gray-700">High-performance Go SDK optimized for microservices and cloud-native applications.</p>
                        </div>
                        <div class="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                            <p class="text-cyan-700">Go SDK documentation with microservices patterns and performance optimization coming soon.</p>
                        </div>
                    </section>

                    <section id="php-sdk" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">PHP SDK</h1>
                        <div class="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 mb-8 border border-purple-200">
                            <div class="flex items-center mb-4">
                                <i class="fab fa-php text-2xl text-purple-600 mr-3"></i>
                                <h2 class="text-xl font-semibold text-gray-900">PHP Integration</h2>
                            </div>
                            <p class="text-gray-700">Robust PHP SDK with Laravel, Symfony, WordPress support and Composer integration.</p>
                        </div>
                        <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
                            <p class="text-purple-700">PHP SDK documentation with framework integrations and WordPress plugins coming soon.</p>
                        </div>
                    </section>

                    <section id="rest-api" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">REST API Reference</h1>
                        <div class="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 mb-8 border border-emerald-200">
                            <div class="flex items-center mb-4">
                                <i class="fas fa-code text-2xl text-emerald-600 mr-3"></i>
                                <h2 class="text-xl font-semibold text-gray-900">Complete API Reference</h2>
                            </div>
                            <p class="text-gray-700">Comprehensive REST API documentation with detailed endpoints, authentication, and examples.</p>
                        </div>
                        <div class="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                            <p class="text-emerald-700">REST API reference with all endpoints, request/response formats, and authentication methods coming soon.</p>
                        </div>
                    </section>

                    <section id="recommendations" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">Recommendations API</h1>
                        <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border border-blue-200">
                            <div class="flex items-center mb-4">
                                <i class="fas fa-thumbs-up text-2xl text-blue-600 mr-3"></i>
                                <h2 class="text-xl font-semibold text-gray-900">Advanced Recommendation Features</h2>
                            </div>
                            <p class="text-gray-700">Detailed documentation for advanced recommendation features, filtering, and personalization.</p>
                        </div>
                        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p class="text-blue-700">Advanced recommendation features and personalization documentation coming soon.</p>
                        </div>
                    </section>

                    <section id="analytics-api" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">Analytics API</h1>
                        <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8 border border-purple-200">
                            <div class="flex items-center mb-4">
                                <i class="fas fa-chart-bar text-2xl text-purple-600 mr-3"></i>
                                <h2 class="text-xl font-semibold text-gray-900">Advanced Analytics & Insights</h2>
                            </div>
                            <p class="text-gray-700">Comprehensive analytics API for performance tracking and optimization insights.</p>
                        </div>
                        <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
                            <p class="text-purple-700">Analytics API documentation with performance metrics and insights coming soon.</p>
                        </div>
                    </section>

                    <section id="attribution" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">Attribution & Tracking</h1>
                        <div class="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 mb-8 border border-indigo-200">
                            <div class="flex items-center mb-4">
                                <i class="fas fa-link text-2xl text-indigo-600 mr-3"></i>
                                <h2 class="text-xl font-semibold text-gray-900">Multi-Touch Attribution</h2>
                            </div>
                            <p class="text-gray-700">Advanced attribution models and privacy-first tracking capabilities.</p>
                        </div>
                        <div class="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                            <p class="text-indigo-700">Attribution and tracking documentation with privacy-first approaches coming soon.</p>
                        </div>
                    </section>

                    <section id="auto-optimization" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">Auto-Optimization Engine</h1>
                        <div class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 mb-8 border border-yellow-200">
                            <div class="flex items-center mb-4">
                                <i class="fas fa-magic text-2xl text-yellow-600 mr-3"></i>
                                <h2 class="text-xl font-semibold text-gray-900">Automated Performance Optimization</h2>
                            </div>
                            <p class="text-gray-700">AI-powered optimization engine that automatically improves performance over time.</p>
                        </div>
                        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <p class="text-yellow-700">Auto-optimization engine documentation and configuration options coming soon.</p>
                        </div>
                    </section>

                    <section id="ab-testing" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">A/B Testing Framework</h1>
                        <div class="bg-gradient-to-r from-pink-50 to-red-50 rounded-xl p-6 mb-8 border border-pink-200">
                            <div class="flex items-center mb-4">
                                <i class="fas fa-flask text-2xl text-pink-600 mr-3"></i>
                                <h2 class="text-xl font-semibold text-gray-900">Built-in A/B Testing</h2>
                            </div>
                            <p class="text-gray-700">Comprehensive A/B testing framework with statistical analysis and automated decision-making.</p>
                        </div>
                        <div class="bg-pink-50 border border-pink-200 rounded-lg p-4">
                            <p class="text-pink-700">A/B testing framework documentation with statistical analysis coming soon.</p>
                        </div>
                    </section>

                    <section id="webhooks" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">Webhooks</h1>
                        <div class="bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-6 mb-8 border border-teal-200">
                            <div class="flex items-center mb-4">
                                <i class="fas fa-webhook text-2xl text-teal-600 mr-3"></i>
                                <h2 class="text-xl font-semibold text-gray-900">Event-Driven Integration</h2>
                            </div>
                            <p class="text-gray-700">Real-time webhook notifications for events, conversions, and system updates.</p>
                        </div>
                        <div class="bg-teal-50 border border-teal-200 rounded-lg p-4">
                            <p class="text-teal-700">Webhook configuration and event handling documentation coming soon.</p>
                        </div>
                    </section>

                    <section id="chatgpt-integration" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">ChatGPT Integration Example</h1>
                        <div class="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8 border border-green-200">
                            <div class="flex items-center mb-4">
                                <i class="fas fa-comments text-2xl text-green-600 mr-3"></i>
                                <h2 class="text-xl font-semibold text-gray-900">ChatGPT Plugin Integration</h2>
                            </div>
                            <p class="text-gray-700">Step-by-step guide for integrating Earnly AI with ChatGPT plugins and GPT applications.</p>
                        </div>
                        <div class="bg-green-50 border border-green-200 rounded-lg p-4">
                            <p class="text-green-700">ChatGPT integration guide with plugin development examples coming soon.</p>
                        </div>
                    </section>

                    <section id="claude-integration" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">Claude Integration Example</h1>
                        <div class="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 mb-8 border border-purple-200">
                            <div class="flex items-center mb-4">
                                <i class="fas fa-robot text-2xl text-purple-600 mr-3"></i>
                                <h2 class="text-xl font-semibold text-gray-900">Claude AI Assistant Integration</h2>
                            </div>
                            <p class="text-gray-700">Integration guide for Claude AI assistants and Anthropic's AI platform.</p>
                        </div>
                        <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
                            <p class="text-purple-700">Claude integration documentation with AI assistant examples coming soon.</p>
                        </div>
                    </section>

                    <section id="support" class="content-section hidden">
                        <h1 class="text-4xl font-bold text-gray-900 mb-6">Support & Resources</h1>
                        
                        <div class="grid md:grid-cols-2 gap-6 mb-8">
                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">
                                    <i class="fas fa-comments text-blue-600 mr-2"></i>
                                    Community Support
                                </h3>
                                <p class="text-gray-600 mb-4">Join our developer community for discussions, examples, and peer support.</p>
                                <a href="https://discord.gg/earnly" class="text-blue-600 hover:text-blue-700 font-medium" target="_blank">
                                    Join Discord Community →
                                </a>
                            </div>
                            
                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-semibold text-gray-900 mb-3">
                                    <i class="fas fa-envelope text-green-600 mr-2"></i>
                                    Email Support
                                </h3>
                                <p class="text-gray-600 mb-4">Get direct help from our technical team.</p>
                                <a href="mailto:support@getearnly.com" class="text-green-600 hover:text-green-700 font-medium">
                                    support@getearnly.com →
                                </a>
                            </div>
                        </div>

                        <div class="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-8 border border-blue-200">
                            <h3 class="text-lg font-semibold text-gray-900 mb-3">Enterprise Support</h3>
                            <p class="text-gray-600 mb-4">Enterprise clients receive priority support with dedicated account management and SLA guarantees.</p>
                            <div class="flex flex-wrap gap-4">
                                <div class="flex items-center text-sm text-gray-700">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    <span>24/7 Priority Support</span>
                                </div>
                                <div class="flex items-center text-sm text-gray-700">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    <span>Dedicated Account Manager</span>
                                </div>
                                <div class="flex items-center text-sm text-gray-700">
                                    <i class="fas fa-check text-green-500 mr-2"></i>
                                    <span>Custom Integration Support</span>
                                </div>
                            </div>
                        </div>

                        <h2 class="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
                        
                        <div class="grid md:grid-cols-3 gap-4 mb-8">
                            <a href="https://status.getearnly.com" target="_blank" class="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                                <div class="flex items-center mb-2">
                                    <i class="fas fa-heartbeat text-green-600 mr-2"></i>
                                    <h4 class="font-semibold text-gray-900">System Status</h4>
                                </div>
                                <p class="text-gray-600 text-sm">Real-time API status and uptime monitoring</p>
                            </a>
                            
                            <a href="https://github.com/getearnly" target="_blank" class="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                                <div class="flex items-center mb-2">
                                    <i class="fab fa-github text-gray-900 mr-2"></i>
                                    <h4 class="font-semibold text-gray-900">GitHub</h4>
                                </div>
                                <p class="text-gray-600 text-sm">Open source SDKs and code examples</p>
                            </a>
                            
                            <a href="/changelog" class="block bg-white border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                                <div class="flex items-center mb-2">
                                    <i class="fas fa-history text-blue-600 mr-2"></i>
                                    <h4 class="font-semibold text-gray-900">Changelog</h4>
                                </div>
                                <p class="text-gray-600 text-sm">Latest API updates and new features</p>
                            </a>
                        </div>
                    </section>

                </div>
            </main>
        </div>

        <script>
            // Navigation functionality
            function showSection(sectionId) {
                // Hide all sections
                document.querySelectorAll('.content-section').forEach(section => {
                    section.classList.add('hidden');
                });
                
                // Show target section
                document.getElementById(sectionId).classList.remove('hidden');
                
                // Update navigation active state
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    link.classList.add('text-gray-600', 'hover:text-gray-900', 'hover:bg-gray-100');
                });
                
                // Set active link
                const activeLink = document.querySelector(\`[href="#\${sectionId}"]\`);
                if (activeLink) {
                    activeLink.classList.add('active');
                    activeLink.classList.remove('text-gray-600', 'hover:text-gray-900', 'hover:bg-gray-100');
                }
                
                // Scroll to top of content
                document.querySelector('.main-content').scrollTop = 0;
                
                // Update URL hash
                window.history.replaceState(null, null, \`#\${sectionId}\`);
            }
            
            // Copy code functionality
            function copyCode(button) {
                const codeBlock = button.parentElement.querySelector('code');
                const text = codeBlock.textContent;
                
                navigator.clipboard.writeText(text).then(() => {
                    const originalText = button.innerHTML;
                    button.innerHTML = '<i class="fas fa-check mr-1"></i>Copied!';
                    button.classList.add('bg-green-600', 'text-white');
                    
                    setTimeout(() => {
                        button.innerHTML = originalText;
                        button.classList.remove('bg-green-600', 'text-white');
                    }, 2000);
                });
            }
            
            // Search functionality
            function searchDocs() {
                const query = document.getElementById('search-input').value.toLowerCase();
                const navLinks = document.querySelectorAll('.nav-link');
                
                navLinks.forEach(link => {
                    const text = link.textContent.toLowerCase();
                    if (text.includes(query)) {
                        link.style.display = 'block';
                    } else {
                        link.style.display = query === '' ? 'block' : 'none';
                    }
                });
            }
            
            // Handle URL hash on load
            document.addEventListener('DOMContentLoaded', function() {
                const hash = window.location.hash.substring(1);
                if (hash && document.getElementById(hash)) {
                    showSection(hash);
                } else {
                    showSection('introduction');
                }
            });
            
            // Handle browser back/forward
            window.addEventListener('hashchange', function() {
                const hash = window.location.hash.substring(1);
                if (hash && document.getElementById(hash)) {
                    showSection(hash);
                }
            });
            
            // Integration path selection
            function showDeveloperPath() {
                document.getElementById('developer-path').classList.remove('hidden');
                document.getElementById('no-code-path').classList.add('hidden');
            }
            
            function showNoCodePath() {
                document.getElementById('no-code-path').classList.remove('hidden');
                document.getElementById('developer-path').classList.add('hidden');
            }
        </script>
    </body>
    </html>
  `
}