export function CreatorDashboard() {
    return `
    <!DOCTYPE html>
    <html lang="en" class="scroll-smooth">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Creator Dashboard - Earnly AI</title>
        <meta name="description" content="Comprehensive creator dashboard for earnings tracking, content monetization, and AI marketplace integration.">
        
        <!-- Styling -->
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/date-fns@2.29.3/index.min.js"></script>
        
        <style>
            /* Theme Configuration */
            :root {
                --primary-bg: #1f2937;
                --secondary-bg: #374151;
                --accent-bg: #4b5563;
                --card-bg: rgba(255, 255, 255, 0.1);
                --text-primary: #ffffff;
                --text-secondary: #d1d5db;
                --text-muted: #9ca3af;
                --border-color: rgba(255, 255, 255, 0.2);
                --shadow-color: rgba(31, 38, 135, 0.37);
                --sidebar-bg: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
                --glass-border: rgba(255, 255, 255, 0.2);
            }
            
            [data-theme="light"] {
                --primary-bg: #f9fafb;
                --secondary-bg: #ffffff;
                --accent-bg: #f3f4f6;
                --card-bg: rgba(255, 255, 255, 0.8);
                --text-primary: #111827;
                --text-secondary: #374151;
                --text-muted: #6b7280;
                --border-color: rgba(0, 0, 0, 0.1);
                --shadow-color: rgba(0, 0, 0, 0.1);
                --sidebar-bg: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
                --glass-border: rgba(0, 0, 0, 0.1);
            }

            /* Custom Dashboard Styles */
            .dashboard-gradient {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
            
            .earnings-gradient {
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            }
            
            .content-gradient {
                background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            }
            
            .rag-gradient {
                background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
            }
            
            .glass-card {
                background: var(--card-bg);
                backdrop-filter: blur(10px);
                border: 1px solid var(--glass-border);
                box-shadow: 0 8px 32px 0 var(--shadow-color);
            }
            
            /* Theme Toggle Button */
            .theme-toggle {
                position: relative;
                width: 60px;
                height: 30px;
                background: var(--accent-bg);
                border-radius: 15px;
                cursor: pointer;
                transition: all 0.3s ease;
                border: 1px solid var(--border-color);
            }
            
            .theme-toggle::before {
                content: '';
                position: absolute;
                top: 3px;
                left: 3px;
                width: 24px;
                height: 24px;
                background: white;
                border-radius: 50%;
                transition: all 0.3s ease;
                box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            }
            
            .theme-toggle.active::before {
                transform: translateX(30px);
                background: #fbbf24;
            }
            
            .theme-icon {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                font-size: 12px;
                transition: all 0.3s ease;
            }
            
            .theme-icon.sun {
                right: 8px;
                opacity: 0;
            }
            
            .theme-icon.moon {
                left: 8px;
                opacity: 1;
            }
            
            .theme-toggle.active .theme-icon.sun {
                opacity: 1;
            }
            
            .theme-toggle.active .theme-icon.moon {
                opacity: 0;
            }
            
            .metric-card {
                transition: all 0.3s ease;
                cursor: pointer;
            }
            
            .metric-card:hover {
                transform: translateY(-5px);
                box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            }
            
            .sidebar {
                background: var(--sidebar-bg);
                min-height: 100vh;
            }
            
            .sidebar-item {
                transition: all 0.3s ease;
                padding: 12px 20px;
                margin: 4px 12px;
                border-radius: 8px;
                cursor: pointer;
            }
            
            .sidebar-item:hover, .sidebar-item.active {
                background: rgba(102, 126, 234, 0.2);
                border-left: 4px solid #667eea;
            }
            
            .chart-container {
                position: relative;
                height: 300px;
                margin: 20px 0;
            }
            
            .progress-ring {
                transition: stroke-dasharray 0.35s;
                transform: rotate(-90deg);
                transform-origin: 50% 50%;
            }
            
            .animate-counter {
                animation: countUp 2s ease-out forwards;
            }
            
            @keyframes countUp {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .content-card {
                transition: all 0.3s ease;
                border: 1px solid rgba(255,255,255,0.1);
            }
            
            .content-card:hover {
                transform: scale(1.02);
                box-shadow: 0 15px 35px rgba(0,0,0,0.1);
            }
            
            .status-badge {
                padding: 4px 12px;
                border-radius: 20px;
                font-size: 0.75rem;
                font-weight: 600;
            }
            
            .status-published {
                background: rgba(34, 197, 94, 0.2);
                color: #22c55e;
            }
            
            .status-processing {
                background: rgba(251, 191, 36, 0.2);
                color: #fbbf24;
            }
            
            .status-draft {
                background: rgba(156, 163, 175, 0.2);
                color: #9ca3af;
            }
        </style>
    </head>
    <body class="font-sans transition-colors duration-300" style="background-color: var(--primary-bg); color: var(--text-primary);">
        <!-- Dashboard Layout -->
        <div id="dashboardContent">
            <!-- Sidebar -->
            <div class="fixed left-0 top-0 w-64 sidebar z-40">
                <div class="p-6 border-b" style="border-color: var(--border-color);">
                    <div class="flex items-center">
                        <img src="https://raw.githubusercontent.com/7gmnmsbwzx-ship-it/earnly-assets/main/earnly%20logo.png" 
                             alt="Earnly Logo" 
                             class="h-10 w-auto"
                             onerror="this.onerror=null; this.innerHTML='<span class=\'text-xl font-bold\' style=\'color: var(--text-primary);\'><i class=\'fas fa-brain text-blue-400 mr-2\'></i>Earnly</span>';">
                    </div>
                </div>
                
                <nav class="mt-6">
                    <div class="sidebar-item active" data-section="overview">
                        <i class="fas fa-tachometer-alt mr-3 w-5"></i>
                        Overview
                    </div>
                    <div class="sidebar-item" data-section="earnings">
                        <i class="fas fa-chart-line mr-3 w-5"></i>
                        Earnings Analytics
                    </div>
                    <div class="sidebar-item" data-section="content">
                        <i class="fas fa-file-alt mr-3 w-5"></i>
                        Content Library
                    </div>
                    <div class="sidebar-item" data-section="rag-marketplace">
                        <i class="fas fa-store mr-3 w-5"></i>
                        RAG Marketplace
                    </div>
                    <div class="sidebar-item" data-section="ai-optimization">
                        <i class="fas fa-robot mr-3 w-5"></i>
                        AI Optimization
                    </div>
                    <div class="sidebar-item" data-section="payouts">
                        <i class="fas fa-credit-card mr-3 w-5"></i>
                        Payouts
                    </div>
                    <div class="sidebar-item" data-section="integrations">
                        <i class="fas fa-plug mr-3 w-5"></i>
                        Integrations
                    </div>
                    <div class="sidebar-item" data-section="settings">
                        <i class="fas fa-cog mr-3 w-5"></i>
                        Settings
                    </div>
                </nav>
                
                <!-- User Profile -->
                <div class="absolute bottom-0 w-full p-6 border-t border-gray-700">
                    <div class="flex items-center">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Profile" class="w-10 h-10 rounded-full mr-3">
                        <div>
                            <div class="font-semibold text-sm" id="userName">Alex Chen</div>
                            <div class="text-xs text-gray-400">Creator Pro</div>
                        </div>
                        <button class="ml-auto text-gray-400 hover:text-white" onclick="logout()">
                            <i class="fas fa-sign-out-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Main Content -->
            <div class="ml-64 min-h-screen">
                <!-- Header -->
                <header class="px-8 py-4 sticky top-0 z-30 transition-colors duration-300" style="background-color: var(--secondary-bg); border-bottom: 1px solid var(--border-color);">
                    <div class="flex justify-between items-center">
                        <div>
                            <h2 class="text-2xl font-bold" id="sectionTitle" style="color: var(--text-primary);">Dashboard Overview</h2>
                            <p class="text-sm" id="sectionSubtitle" style="color: var(--text-muted);">Monitor your earnings and optimize your content monetization</p>
                        </div>
                        
                        <div class="flex items-center space-x-4">
                            <!-- Theme Toggle -->
                            <div class="flex items-center space-x-2">
                                <span class="text-sm" style="color: var(--text-muted);">Theme</span>
                                <div class="theme-toggle" id="themeToggle" onclick="toggleTheme()">
                                    <i class="fas fa-moon theme-icon moon" style="color: var(--text-muted);"></i>
                                    <i class="fas fa-sun theme-icon sun" style="color: var(--text-muted);"></i>
                                </div>
                            </div>
                            
                            <!-- Notification Bell -->
                            <button class="relative" style="color: var(--text-muted);" onmouseover="this.style.color='var(--text-primary)'" onmouseout="this.style.color='var(--text-muted)'">
                                <i class="fas fa-bell text-xl"></i>
                                <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                            </button>
                            
                            <!-- Quick Actions -->
                            <button class="dashboard-gradient text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90" onclick="showSection('content')">
                                <i class="fas fa-plus mr-2"></i>
                                Upload Content
                            </button>
                        </div>
                    </div>
                </header>
                
                <!-- Dashboard Sections -->
                <main class="p-8 transition-colors duration-300" style="background-color: var(--primary-bg);">
                    <!-- Overview Section -->
                    <div id="overview-section" class="dashboard-section">
                        <!-- Key Metrics -->
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div class="metric-card glass-card p-6 rounded-xl">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="earnings-gradient p-3 rounded-lg">
                                        <i class="fas fa-dollar-sign text-white text-xl"></i>
                                    </div>
                                    <span class="text-green-400 text-sm font-semibold">+23.5%</span>
                                </div>
                                <div class="text-3xl font-bold animate-counter">$12,847</div>
                                <div class="text-gray-400 text-sm">Total Earnings</div>
                                <div class="mt-2 text-xs text-gray-500">This month</div>
                            </div>
                            
                            <div class="metric-card glass-card p-6 rounded-xl">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="content-gradient p-3 rounded-lg">
                                        <i class="fas fa-file-alt text-white text-xl"></i>
                                    </div>
                                    <span class="text-blue-400 text-sm font-semibold">+12</span>
                                </div>
                                <div class="text-3xl font-bold animate-counter">247</div>
                                <div class="text-gray-400 text-sm">Content Items</div>
                                <div class="mt-2 text-xs text-gray-500">Active in library</div>
                            </div>
                            
                            <div class="metric-card glass-card p-6 rounded-xl">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="rag-gradient p-3 rounded-lg">
                                        <i class="fas fa-brain text-white text-xl"></i>
                                    </div>
                                    <span class="text-green-400 text-sm font-semibold">+8</span>
                                </div>
                                <div class="text-3xl font-bold animate-counter">34</div>
                                <div class="text-gray-400 text-sm">RAG Models</div>
                                <div class="mt-2 text-xs text-gray-500">Marketplace listings</div>
                            </div>
                            
                            <div class="metric-card glass-card p-6 rounded-xl">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="dashboard-gradient p-3 rounded-lg">
                                        <i class="fas fa-eye text-white text-xl"></i>
                                    </div>
                                    <span class="text-purple-400 text-sm font-semibold">+45.2%</span>
                                </div>
                                <div class="text-3xl font-bold animate-counter">89,700</div>
                                <div class="text-gray-400 text-sm">AI Interactions</div>
                                <div class="mt-2 text-xs text-gray-500">Total views</div>
                            </div>
                        </div>
                        
                        <!-- Charts Row -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            <!-- Revenue Chart -->
                            <div class="glass-card p-6 rounded-xl">
                                <div class="flex justify-between items-center mb-4">
                                    <h3 class="text-xl font-semibold">Revenue Trends</h3>
                                    <select class="rounded px-3 py-1 text-sm transition-colors duration-300" style="background-color: var(--accent-bg); border: 1px solid var(--border-color); color: var(--text-primary);">
                                        <option>Last 30 days</option>
                                        <option>Last 90 days</option>
                                        <option>Last year</option>
                                    </select>
                                </div>
                                <div class="chart-container">
                                    <canvas id="revenueChart"></canvas>
                                </div>
                            </div>
                            
                            <!-- Content Performance -->
                            <div class="glass-card p-6 rounded-xl">
                                <h3 class="text-xl font-semibold mb-4">Content Performance</h3>
                                <div class="space-y-4">
                                    <div class="flex items-center justify-between p-4 rounded-lg transition-colors duration-300" style="background-color: var(--accent-bg);">
                                        <div class="flex items-center">
                                            <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                            <span style="color: var(--text-primary);">AI Training Data</span>
                                        </div>
                                        <div class="text-right">
                                            <div class="font-semibold" style="color: var(--text-primary);">$4,231</div>
                                            <div class="text-sm" style="color: var(--text-muted);">67% of revenue</div>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-center justify-between p-4 rounded-lg transition-colors duration-300" style="background-color: var(--accent-bg);">
                                        <div class="flex items-center">
                                            <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                            <span style="color: var(--text-primary);">Content Licensing</span>
                                        </div>
                                        <div class="text-right">
                                            <div class="font-semibold" style="color: var(--text-primary);">$2,156</div>
                                            <div class="text-sm" style="color: var(--text-muted);">23% of revenue</div>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-center justify-between p-4 rounded-lg transition-colors duration-300" style="background-color: var(--accent-bg);">
                                        <div class="flex items-center">
                                            <div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                            <span style="color: var(--text-primary);">RAG Marketplace</span>
                                        </div>
                                        <div class="text-right">
                                            <div class="font-semibold" style="color: var(--text-primary);">$1,460</div>
                                            <div class="text-sm" style="color: var(--text-muted);">10% of revenue</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Quick Actions -->
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div class="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform cursor-pointer" onclick="showSection('content')">
                                <div class="content-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-upload text-white text-2xl"></i>
                                </div>
                                <h3 class="text-lg font-semibold mb-2">Upload Content</h3>
                                <p class="text-gray-400 text-sm">Add new content to your library and start monetizing</p>
                            </div>
                            
                            <div class="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform cursor-pointer" onclick="showSection('rag-marketplace')">
                                <div class="rag-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-store text-white text-2xl"></i>
                                </div>
                                <h3 class="text-lg font-semibold mb-2">Create RAG Model</h3>
                                <p class="text-gray-400 text-sm">Transform content into AI-ready format for licensing</p>
                            </div>
                            
                            <div class="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform cursor-pointer" onclick="showSection('ai-optimization')">
                                <div class="dashboard-gradient p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-chart-line text-white text-2xl"></i>
                                </div>
                                <h3 class="text-lg font-semibold mb-2">Optimize Performance</h3>
                                <p class="text-gray-400 text-sm">Get AI insights to maximize your earnings</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Earnings Analytics Section -->
                    <div id="earnings-section" class="dashboard-section hidden">
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                            <!-- Revenue Breakdown -->
                            <div class="lg:col-span-2 glass-card p-6 rounded-xl">
                                <div class="flex justify-between items-center mb-6">
                                    <h3 class="text-2xl font-semibold">Revenue Analytics</h3>
                                    <div class="flex space-x-2">
                                        <button class="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">Daily</button>
                                        <button class="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm">Weekly</button>
                                        <button class="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg text-sm">Monthly</button>
                                    </div>
                                </div>
                                <div class="chart-container" style="height: 400px;">
                                    <canvas id="earningsChart"></canvas>
                                </div>
                            </div>
                            
                            <!-- Revenue Stats -->
                            <div class="space-y-6">
                                <div class="glass-card p-6 rounded-xl">
                                    <h4 class="text-lg font-semibold mb-4">This Month</h4>
                                    <div class="space-y-4">
                                        <div class="flex justify-between">
                                            <span class="text-gray-400">Gross Revenue</span>
                                            <span class="font-semibold">$12,847.32</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-400">Platform Fee (5%)</span>
                                            <span class="text-red-400">-$642.37</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span class="text-gray-400">Processing Fee</span>
                                            <span class="text-red-400">-$38.54</span>
                                        </div>
                                        <hr class="border-gray-600">
                                        <div class="flex justify-between text-lg font-semibold">
                                            <span>Net Earnings</span>
                                            <span class="text-green-400">$12,166.41</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="glass-card p-6 rounded-xl">
                                    <h4 class="text-lg font-semibold mb-4">Top Revenue Sources</h4>
                                    <div class="space-y-3">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                                <span class="text-sm">Tech Tutorials</span>
                                            </div>
                                            <span class="font-semibold">$4,231</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                                <span class="text-sm">Code Libraries</span>
                                            </div>
                                            <span class="font-semibold">$3,156</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center">
                                                <div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                                <span class="text-sm">Research Papers</span>
                                            </div>
                                            <span class="font-semibold">$2,460</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Detailed Earnings Table -->
                        <div class="glass-card p-6 rounded-xl">
                            <div class="flex justify-between items-center mb-6">
                                <h3 class="text-xl font-semibold">Recent Transactions</h3>
                                <button class="text-blue-400 hover:underline">View All</button>
                            </div>
                            
                            <div class="overflow-x-auto">
                                <table class="w-full">
                                    <thead>
                                        <tr class="border-b border-gray-700">
                                            <th class="text-left py-3 px-4">Date</th>
                                            <th class="text-left py-3 px-4">Content</th>
                                            <th class="text-left py-3 px-4">AI Company</th>
                                            <th class="text-left py-3 px-4">Type</th>
                                            <th class="text-right py-3 px-4">Amount</th>
                                            <th class="text-center py-3 px-4">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b border-gray-800">
                                            <td class="py-3 px-4 text-gray-300">Dec 15, 2024</td>
                                            <td class="py-3 px-4">Python ML Tutorial Series</td>
                                            <td class="py-3 px-4">OpenAI Research</td>
                                            <td class="py-3 px-4"><span class="status-badge status-published">Training Data</span></td>
                                            <td class="py-3 px-4 text-right font-semibold">$342.50</td>
                                            <td class="py-3 px-4 text-center"><span class="text-green-400">✓ Paid</span></td>
                                        </tr>
                                        <tr class="border-b border-gray-800">
                                            <td class="py-3 px-4 text-gray-300">Dec 14, 2024</td>
                                            <td class="py-3 px-4">React Component Library</td>
                                            <td class="py-3 px-4">Anthropic Claude</td>
                                            <td class="py-3 px-4"><span class="status-badge status-processing">License</span></td>
                                            <td class="py-3 px-4 text-right font-semibold">$156.25</td>
                                            <td class="py-3 px-4 text-center"><span class="text-yellow-400">⏳ Pending</span></td>
                                        </tr>
                                        <tr class="border-b border-gray-800">
                                            <td class="py-3 px-4 text-gray-300">Dec 13, 2024</td>
                                            <td class="py-3 px-4">AI Ethics Research</td>
                                            <td class="py-3 px-4">Google DeepMind</td>
                                            <td class="py-3 px-4"><span class="status-badge status-published">RAG Model</span></td>
                                            <td class="py-3 px-4 text-right font-semibold">$428.75</td>
                                            <td class="py-3 px-4 text-center"><span class="text-green-400">✓ Paid</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Content Library Section -->
                    <div id="content-section" class="dashboard-section hidden">
                        <!-- Content Upload Area -->
                        <div class="glass-card p-8 rounded-xl mb-8">
                            <div class="text-center">
                                <div class="content-gradient p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-cloud-upload-alt text-white text-3xl"></i>
                                </div>
                                <h3 class="text-2xl font-semibold mb-2">Upload Your Content</h3>
                                <p class="text-gray-400 mb-6">Transform your content into AI-ready format and start earning revenue</p>
                                
                                <div class="border-2 border-dashed border-gray-600 rounded-xl p-8 mb-6">
                                    <div class="text-center">
                                        <i class="fas fa-file-upload text-4xl text-gray-500 mb-4"></i>
                                        <p class="text-lg mb-2">Drag and drop your files here</p>
                                        <p class="text-gray-500 mb-4">or</p>
                                        <button class="dashboard-gradient text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90">
                                            Choose Files
                                        </button>
                                        <p class="text-sm text-gray-500 mt-4">Supports: PDF, DOCX, TXT, MD, JSON, CSV (Max 100MB)</p>
                                    </div>
                                </div>
                                
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                                    <div class="p-4 rounded-lg transition-colors duration-300" style="background-color: var(--accent-bg);">
                                        <h4 class="font-semibold mb-2" style="color: var(--text-primary);">📚 Educational Content</h4>
                                        <p class="text-sm" style="color: var(--text-muted);">Tutorials, courses, guides</p>
                                    </div>
                                    <div class="p-4 rounded-lg transition-colors duration-300" style="background-color: var(--accent-bg);">
                                        <h4 class="font-semibold mb-2" style="color: var(--text-primary);">📊 Research & Data</h4>
                                        <p class="text-sm" style="color: var(--text-muted);">Papers, datasets, analysis</p>
                                    </div>
                                    <div class="p-4 rounded-lg transition-colors duration-300" style="background-color: var(--accent-bg);">
                                        <h4 class="font-semibold mb-2" style="color: var(--text-primary);">💻 Code & Documentation</h4>
                                        <p class="text-sm" style="color: var(--text-muted);">Libraries, APIs, technical docs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Content Library Grid -->
                        <div class="mb-6">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-2xl font-semibold">Your Content Library</h3>
                                <div class="flex space-x-4">
                                    <select class="rounded px-3 py-2 transition-colors duration-300" style="background-color: var(--accent-bg); border: 1px solid var(--border-color); color: var(--text-primary);">
                                        <option>All Content</option>
                                        <option>Published</option>
                                        <option>Processing</option>
                                        <option>Draft</option>
                                    </select>
                                    <select class="rounded px-3 py-2 transition-colors duration-300" style="background-color: var(--accent-bg); border: 1px solid var(--border-color); color: var(--text-primary);">
                                        <option>Sort by Date</option>
                                        <option>Sort by Revenue</option>
                                        <option>Sort by Views</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <!-- Content Item 1 -->
                            <div class="content-card glass-card p-6 rounded-xl">
                                <div class="flex justify-between items-start mb-4">
                                    <div class="bg-green-500 p-2 rounded-lg">
                                        <i class="fas fa-code text-white"></i>
                                    </div>
                                    <span class="status-badge status-published">Published</span>
                                </div>
                                <h4 class="text-lg font-semibold mb-2">Python ML Tutorial Series</h4>
                                <p class="text-gray-400 text-sm mb-4">Comprehensive machine learning tutorials with code examples</p>
                                
                                <div class="space-y-2 text-sm">
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Revenue:</span>
                                        <span class="font-semibold text-green-400">$1,247.32</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">AI Interactions:</span>
                                        <span class="font-semibold">12,400</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Licenses:</span>
                                        <span class="font-semibold">3 Active</span>
                                    </div>
                                </div>
                                
                                <div class="mt-4 pt-4 border-t border-gray-700 flex justify-between">
                                    <button class="text-blue-400 hover:underline text-sm">View Details</button>
                                    <button class="text-purple-400 hover:underline text-sm">Create RAG Model</button>
                                </div>
                            </div>
                            
                            <!-- Content Item 2 -->
                            <div class="content-card glass-card p-6 rounded-xl">
                                <div class="flex justify-between items-start mb-4">
                                    <div class="bg-blue-500 p-2 rounded-lg">
                                        <i class="fas fa-chart-bar text-white"></i>
                                    </div>
                                    <span class="status-badge status-processing">Processing</span>
                                </div>
                                <h4 class="text-lg font-semibold mb-2">Data Science Research Papers</h4>
                                <p class="text-gray-400 text-sm mb-4">Collection of peer-reviewed research in data science and AI</p>
                                
                                <div class="space-y-2 text-sm">
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Revenue:</span>
                                        <span class="font-semibold text-green-400">$892.16</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">AI Interactions:</span>
                                        <span class="font-semibold">8,700</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Licenses:</span>
                                        <span class="font-semibold">2 Pending</span>
                                    </div>
                                </div>
                                
                                <div class="mt-4 pt-4 border-t border-gray-700 flex justify-between">
                                    <button class="text-blue-400 hover:underline text-sm">View Details</button>
                                    <button class="text-gray-500 text-sm cursor-not-allowed">Processing...</button>
                                </div>
                            </div>
                            
                            <!-- Content Item 3 -->
                            <div class="content-card glass-card p-6 rounded-xl">
                                <div class="flex justify-between items-start mb-4">
                                    <div class="bg-purple-500 p-2 rounded-lg">
                                        <i class="fas fa-book text-white"></i>
                                    </div>
                                    <span class="status-badge status-published">Published</span>
                                </div>
                                <h4 class="text-lg font-semibold mb-2">React Component Library</h4>
                                <p class="text-gray-400 text-sm mb-4">Reusable React components with TypeScript documentation</p>
                                
                                <div class="space-y-2 text-sm">
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Revenue:</span>
                                        <span class="font-semibold text-green-400">$634.89</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">AI Interactions:</span>
                                        <span class="font-semibold">5,200</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Licenses:</span>
                                        <span class="font-semibold">1 Active</span>
                                    </div>
                                </div>
                                
                                <div class="mt-4 pt-4 border-t border-gray-700 flex justify-between">
                                    <button class="text-blue-400 hover:underline text-sm">View Details</button>
                                    <button class="text-purple-400 hover:underline text-sm">Create RAG Model</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- RAG Marketplace Section -->
                    <div id="rag-marketplace-section" class="dashboard-section hidden">
                        <!-- Marketplace Header -->
                        <div class="glass-card p-8 rounded-xl mb-8">
                            <div class="text-center">
                                <div class="rag-gradient p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-store text-white text-3xl"></i>
                                </div>
                                <h3 class="text-3xl font-semibold mb-2">RAG Marketplace</h3>
                                <p class="text-gray-400 mb-6">Transform your content into AI-ready RAG models and license to AI companies</p>
                                
                                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                                    <div class="p-6 rounded-lg transition-colors duration-300" style="background-color: var(--accent-bg);">
                                        <h4 class="font-semibold mb-2 text-green-400">🧠 AI-Ready Format</h4>
                                        <p class="text-sm" style="color: var(--text-muted);">Automatic conversion to RAG-compatible embeddings and vector databases</p>
                                    </div>
                                    <div class="p-6 rounded-lg transition-colors duration-300" style="background-color: var(--accent-bg);">
                                        <h4 class="font-semibold mb-2 text-blue-400">💼 Enterprise Licensing</h4>
                                        <p class="text-sm" style="color: var(--text-muted);">License your models to leading AI companies for training and inference</p>
                                    </div>
                                    <div class="p-6 rounded-lg transition-colors duration-300" style="background-color: var(--accent-bg);">
                                        <h4 class="font-semibold mb-2 text-purple-400">📊 Performance Analytics</h4>
                                        <p class="text-sm" style="color: var(--text-muted);">Track usage, revenue, and optimization opportunities in real-time</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- RAG Models Grid -->
                        <div class="mb-6">
                            <div class="flex justify-between items-center mb-4">
                                <h3 class="text-2xl font-semibold">Your RAG Models</h3>
                                <button class="rag-gradient text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90">
                                    <i class="fas fa-plus mr-2"></i>
                                    Create New Model
                                </button>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <!-- RAG Model 1 -->
                            <div class="glass-card p-6 rounded-xl">
                                <div class="flex justify-between items-start mb-4">
                                    <div class="rag-gradient p-3 rounded-lg">
                                        <i class="fas fa-brain text-white text-xl"></i>
                                    </div>
                                    <div class="text-right">
                                        <div class="status-badge status-published">Active</div>
                                        <div class="text-sm text-gray-400 mt-1">3 Licenses</div>
                                    </div>
                                </div>
                                
                                <h4 class="text-xl font-semibold mb-2">TechTutorials-RAG-v2.1</h4>
                                <p class="text-gray-400 text-sm mb-4">Comprehensive programming and AI tutorials optimized for code generation and technical Q&A</p>
                                
                                <!-- Model Stats -->
                                <div class="grid grid-cols-2 gap-4 mb-4">
                                    <div class="p-3 rounded transition-colors duration-300" style="background-color: var(--accent-bg);">
                                        <div class="text-sm" style="color: var(--text-muted);">Monthly Revenue</div>
                                        <div class="text-lg font-semibold text-green-400">$2,347</div>
                                    </div>
                                    <div class="p-3 rounded transition-colors duration-300" style="background-color: var(--accent-bg);">
                                        <div class="text-sm" style="color: var(--text-muted);">Query Volume</div>
                                        <div class="text-lg font-semibold text-blue-400">45.2K</div>
                                    </div>
                                </div>
                                
                                <!-- Model Details -->
                                <div class="space-y-2 text-sm mb-4">
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Vector Dimensions:</span>
                                        <span>1536</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Documents:</span>
                                        <span>2,847</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Embeddings:</span>
                                        <span>156,000</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Accuracy Score:</span>
                                        <span class="text-green-400">94.7%</span>
                                    </div>
                                </div>
                                
                                <!-- Licensees -->
                                <div class="mb-4">
                                    <div class="text-sm font-semibold mb-2">Licensed To:</div>
                                    <div class="flex space-x-2">
                                        <span class="bg-blue-600 text-white px-2 py-1 rounded text-xs">OpenAI</span>
                                        <span class="bg-green-600 text-white px-2 py-1 rounded text-xs">Anthropic</span>
                                        <span class="bg-purple-600 text-white px-2 py-1 rounded text-xs">Cohere</span>
                                    </div>
                                </div>
                                
                                <div class="flex justify-between pt-4 border-t border-gray-700">
                                    <button class="text-blue-400 hover:underline text-sm">View Analytics</button>
                                    <button class="text-green-400 hover:underline text-sm">Manage Licenses</button>
                                </div>
                            </div>
                            
                            <!-- RAG Model 2 -->
                            <div class="glass-card p-6 rounded-xl">
                                <div class="flex justify-between items-start mb-4">
                                    <div class="rag-gradient p-3 rounded-lg">
                                        <i class="fas fa-database text-white text-xl"></i>
                                    </div>
                                    <div class="text-right">
                                        <div class="status-badge status-processing">Training</div>
                                        <div class="text-sm text-gray-400 mt-1">ETA: 2 hours</div>
                                    </div>
                                </div>
                                
                                <h4 class="text-xl font-semibold mb-2">DataScience-RAG-v1.0</h4>
                                <p class="text-gray-400 text-sm mb-4">Research papers and datasets focused on machine learning and statistical analysis</p>
                                
                                <!-- Training Progress -->
                                <div class="mb-4">
                                    <div class="flex justify-between text-sm mb-2">
                                        <span>Training Progress</span>
                                        <span>73%</span>
                                    </div>
                                    <div class="w-full bg-gray-700 rounded-full h-2">
                                        <div class="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style="width: 73%"></div>
                                    </div>
                                </div>
                                
                                <!-- Model Details -->
                                <div class="space-y-2 text-sm mb-4">
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Source Documents:</span>
                                        <span>1,243</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Processed:</span>
                                        <span>907 / 1,243</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Embeddings Generated:</span>
                                        <span>89.4K</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Estimated Revenue:</span>
                                        <span class="text-yellow-400">$1,500/mo</span>
                                    </div>
                                </div>
                                
                                <div class="flex justify-between pt-4 border-t border-gray-700">
                                    <button class="text-blue-400 hover:underline text-sm">View Training Log</button>
                                    <button class="text-gray-500 text-sm cursor-not-allowed">Publishing Soon</button>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Marketplace Insights -->
                        <div class="mt-8 glass-card p-6 rounded-xl">
                            <h3 class="text-xl font-semibold mb-4">Marketplace Insights</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-green-400">$18,700</div>
                                    <div class="text-sm text-gray-400">Total RAG Revenue</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-blue-400">127,000</div>
                                    <div class="text-sm text-gray-400">Total Queries</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-purple-400">8</div>
                                    <div class="text-sm text-gray-400">AI Company Partners</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-orange-400">96.2%</div>
                                    <div class="text-sm text-gray-400">Avg Accuracy Score</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- AI Optimization Section -->
                    <div id="ai-optimization-section" class="dashboard-section hidden">
                        <!-- Optimization Header -->
                        <div class="glass-card p-8 rounded-xl mb-8">
                            <div class="text-center">
                                <div class="dashboard-gradient p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-robot text-white text-3xl"></i>
                                </div>
                                <h3 class="text-3xl font-semibold mb-2">AI Optimization Engine</h3>
                                <p class="text-gray-400 mb-6">Get personalized insights and recommendations to maximize your content monetization</p>
                            </div>
                        </div>
                        
                        <!-- Optimization Insights -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                            <!-- Performance Analysis -->
                            <div class="glass-card p-6 rounded-xl">
                                <h3 class="text-xl font-semibold mb-4">Performance Analysis</h3>
                                <div class="space-y-6">
                                    <div class="bg-green-500 bg-opacity-20 border border-green-500 p-4 rounded-lg">
                                        <div class="flex items-center mb-2">
                                            <i class="fas fa-arrow-up text-green-400 mr-2"></i>
                                            <span class="font-semibold text-green-400">Revenue Opportunity</span>
                                        </div>
                                        <p class="text-sm text-gray-300">Your Python tutorials could earn 34% more by adding advanced ML topics. Consider creating content on neural networks and deep learning.</p>
                                    </div>
                                    
                                    <div class="bg-blue-500 bg-opacity-20 border border-blue-500 p-4 rounded-lg">
                                        <div class="flex items-center mb-2">
                                            <i class="fas fa-lightbulb text-blue-400 mr-2"></i>
                                            <span class="font-semibold text-blue-400">Content Gap Analysis</span>
                                        </div>
                                        <p class="text-sm text-gray-300">High demand for React Native content. AI companies are seeking mobile development tutorials - potential $2,100/month opportunity.</p>
                                    </div>
                                    
                                    <div class="bg-purple-500 bg-opacity-20 border border-purple-500 p-4 rounded-lg">
                                        <div class="flex items-center mb-2">
                                            <i class="fas fa-chart-line text-purple-400 mr-2"></i>
                                            <span class="font-semibold text-purple-400">Optimization Suggestion</span>
                                        </div>
                                        <p class="text-sm text-gray-300">Convert your top-performing blog posts into RAG models. Estimated additional revenue: $890/month.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Market Trends -->
                            <div class="glass-card p-6 rounded-xl">
                                <h3 class="text-xl font-semibold mb-4">Market Trends</h3>
                                <div class="chart-container" style="height: 250px;">
                                    <canvas id="trendsChart"></canvas>
                                </div>
                                
                                <div class="mt-4 space-y-3">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <div class="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                            <span class="text-sm">AI/ML Content</span>
                                        </div>
                                        <span class="text-green-400 text-sm font-semibold">+127%</span>
                                    </div>
                                    
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <div class="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                            <span class="text-sm">Code Documentation</span>
                                        </div>
                                        <span class="text-blue-400 text-sm font-semibold">+89%</span>
                                    </div>
                                    
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center">
                                            <div class="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                            <span class="text-sm">Research Papers</span>
                                        </div>
                                        <span class="text-purple-400 text-sm font-semibold">+64%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Recommended Actions -->
                        <div class="glass-card p-6 rounded-xl">
                            <h3 class="text-xl font-semibold mb-6">Recommended Actions</h3>
                            
                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div class="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white">
                                    <div class="flex items-center justify-between mb-4">
                                        <i class="fas fa-plus-circle text-2xl"></i>
                                        <span class="bg-white bg-opacity-20 px-2 py-1 rounded text-xs">High Impact</span>
                                    </div>
                                    <h4 class="font-semibold mb-2">Create Advanced ML Series</h4>
                                    <p class="text-sm mb-4">Expand your Python tutorials with advanced machine learning topics.</p>
                                    <div class="text-sm">
                                        <div>Est. Revenue: <strong>$1,200/month</strong></div>
                                        <div>Time Investment: <strong>2-3 weeks</strong></div>
                                    </div>
                                </div>
                                
                                <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                                    <div class="flex items-center justify-between mb-4">
                                        <i class="fas fa-sync-alt text-2xl"></i>
                                        <span class="bg-white bg-opacity-20 px-2 py-1 rounded text-xs">Medium Impact</span>
                                    </div>
                                    <h4 class="font-semibold mb-2">Update Existing Content</h4>
                                    <p class="text-sm mb-4">Refresh your React tutorials with latest best practices.</p>
                                    <div class="text-sm">
                                        <div>Est. Revenue: <strong>+$340/month</strong></div>
                                        <div>Time Investment: <strong>1 week</strong></div>
                                    </div>
                                </div>
                                
                                <div class="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white">
                                    <div class="flex items-center justify-between mb-4">
                                        <i class="fas fa-brain text-2xl"></i>
                                        <span class="bg-white bg-opacity-20 px-2 py-1 rounded text-xs">Quick Win</span>
                                    </div>
                                    <h4 class="font-semibold mb-2">Convert to RAG Models</h4>
                                    <p class="text-sm mb-4">Transform your top 5 posts into RAG models for licensing.</p>
                                    <div class="text-sm">
                                        <div>Est. Revenue: <strong>+$890/month</strong></div>
                                        <div>Time Investment: <strong>2 days</strong></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Payouts Section -->
                    <div id="payouts-section" class="dashboard-section hidden">
                        <!-- Payout Header -->
                        <div class="glass-card p-8 rounded-xl mb-8">
                            <div class="flex justify-between items-center">
                                <div>
                                    <h3 class="text-3xl font-semibold mb-2">Payout Management</h3>
                                    <p class="text-gray-400">Manage your earnings, payment methods, and withdrawal history</p>
                                </div>
                                <button class="earnings-gradient text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90">
                                    <i class="fas fa-download mr-2"></i>
                                    Request Payout
                                </button>
                            </div>
                        </div>
                        
                        <!-- Payout Summary -->
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                            <div class="glass-card p-6 rounded-xl">
                                <div class="text-center">
                                    <div class="text-3xl font-bold text-green-400">$12,166.41</div>
                                    <div class="text-gray-400 text-sm">Available Balance</div>
                                    <div class="text-xs text-gray-500 mt-1">Ready for payout</div>
                                </div>
                            </div>
                            
                            <div class="glass-card p-6 rounded-xl">
                                <div class="text-center">
                                    <div class="text-3xl font-bold text-yellow-400">$2,347.83</div>
                                    <div class="text-gray-400 text-sm">Pending Earnings</div>
                                    <div class="text-xs text-gray-500 mt-1">Processing (3-5 days)</div>
                                </div>
                            </div>
                            
                            <div class="glass-card p-6 rounded-xl">
                                <div class="text-center">
                                    <div class="text-3xl font-bold text-blue-400">$45,892.16</div>
                                    <div class="text-gray-400 text-sm">Total Paid</div>
                                    <div class="text-xs text-gray-500 mt-1">All time earnings</div>
                                </div>
                            </div>
                            
                            <div class="glass-card p-6 rounded-xl">
                                <div class="text-center">
                                    <div class="text-3xl font-bold text-purple-400">15th</div>
                                    <div class="text-gray-400 text-sm">Next Payout</div>
                                    <div class="text-xs text-gray-500 mt-1">Monthly schedule</div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Payment Methods -->
                        <div class="glass-card p-6 rounded-xl mb-8">
                            <div class="flex justify-between items-center mb-6">
                                <h3 class="text-xl font-semibold">Payment Methods</h3>
                                <button class="text-blue-400 hover:underline">Add New Method</button>
                            </div>
                            
                            <div class="space-y-4">
                                <div class="flex items-center justify-between p-4 rounded-lg border-l-4 border-green-500 transition-colors duration-300" style="background-color: var(--accent-bg);">
                                    <div class="flex items-center">
                                        <i class="fas fa-university text-green-400 text-xl mr-4"></i>
                                        <div>
                                            <div class="font-semibold" style="color: var(--text-primary);">Bank Transfer (Primary)</div>
                                            <div class="text-sm" style="color: var(--text-muted);">Wells Fargo ****7892</div>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <div class="text-green-400 text-sm font-semibold">✓ Verified</div>
                                        <div class="text-xs" style="color: var(--text-muted);">2-3 business days</div>
                                    </div>
                                </div>
                                
                                <div class="flex items-center justify-between p-4 rounded-lg transition-colors duration-300" style="background-color: var(--accent-bg);">
                                    <div class="flex items-center">
                                        <i class="fab fa-paypal text-blue-400 text-xl mr-4"></i>
                                        <div>
                                            <div class="font-semibold" style="color: var(--text-primary);">PayPal</div>
                                            <div class="text-sm" style="color: var(--text-muted);">alex.chen@email.com</div>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <div class="text-yellow-400 text-sm font-semibold">⏳ Pending Verification</div>
                                        <div class="text-xs" style="color: var(--text-muted);">Instant transfer</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Payout History -->
                        <div class="glass-card p-6 rounded-xl">
                            <div class="flex justify-between items-center mb-6">
                                <h3 class="text-xl font-semibold">Payout History</h3>
                                <select class="rounded px-3 py-2 text-sm transition-colors duration-300" style="background-color: var(--accent-bg); border: 1px solid var(--border-color); color: var(--text-primary);">
                                    <option>Last 6 months</option>
                                    <option>Last year</option>
                                    <option>All time</option>
                                </select>
                            </div>
                            
                            <div class="overflow-x-auto">
                                <table class="w-full">
                                    <thead>
                                        <tr class="border-b border-gray-700">
                                            <th class="text-left py-3 px-4">Date</th>
                                            <th class="text-left py-3 px-4">Method</th>
                                            <th class="text-right py-3 px-4">Amount</th>
                                            <th class="text-center py-3 px-4">Status</th>
                                            <th class="text-center py-3 px-4">Transaction ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b border-gray-800">
                                            <td class="py-3 px-4 text-gray-300">Nov 15, 2024</td>
                                            <td class="py-3 px-4">Bank Transfer</td>
                                            <td class="py-3 px-4 text-right font-semibold">$11,247.83</td>
                                            <td class="py-3 px-4 text-center"><span class="text-green-400">✓ Completed</span></td>
                                            <td class="py-3 px-4 text-center text-gray-400">TX-2024-1115-847</td>
                                        </tr>
                                        <tr class="border-b border-gray-800">
                                            <td class="py-3 px-4 text-gray-300">Oct 15, 2024</td>
                                            <td class="py-3 px-4">Bank Transfer</td>
                                            <td class="py-3 px-4 text-right font-semibold">$9,634.52</td>
                                            <td class="py-3 px-4 text-center"><span class="text-green-400">✓ Completed</span></td>
                                            <td class="py-3 px-4 text-center text-gray-400">TX-2024-1015-623</td>
                                        </tr>
                                        <tr class="border-b border-gray-800">
                                            <td class="py-3 px-4 text-gray-300">Sep 15, 2024</td>
                                            <td class="py-3 px-4">PayPal</td>
                                            <td class="py-3 px-4 text-right font-semibold">$8,921.19</td>
                                            <td class="py-3 px-4 text-center"><span class="text-green-400">✓ Completed</span></td>
                                            <td class="py-3 px-4 text-center text-gray-400">TX-2024-0915-412</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Settings Section -->
                    <div id="settings-section" class="dashboard-section hidden">
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <!-- Profile Settings -->
                            <div class="lg:col-span-2 glass-card p-6 rounded-xl">
                                <h3 class="text-xl font-semibold mb-6">Profile Settings</h3>
                                
                                <form class="space-y-6">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label class="block text-sm font-medium mb-2" style="color: var(--text-primary);">First Name</label>
                                            <input type="text" value="Alex" class="w-full p-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300" style="background-color: var(--accent-bg); border: 1px solid var(--border-color); color: var(--text-primary);">
                                        </div>
                                        <div>
                                            <label class="block text-sm font-medium mb-2" style="color: var(--text-primary);">Last Name</label>
                                            <input type="text" value="Chen" class="w-full p-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300" style="background-color: var(--accent-bg); border: 1px solid var(--border-color); color: var(--text-primary);">
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium mb-2" style="color: var(--text-primary);">Email</label>
                                        <input type="email" value="alex.chen@email.com" class="w-full p-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300" style="background-color: var(--accent-bg); border: 1px solid var(--border-color); color: var(--text-primary);">
                                    </div>
                                    
                                    <div>
                                        <label class="block text-sm font-medium mb-2" style="color: var(--text-primary);">Bio</label>
                                        <textarea rows="4" class="w-full p-3 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300" style="background-color: var(--accent-bg); border: 1px solid var(--border-color); color: var(--text-primary);" placeholder="Tell us about yourself and your content...">Full-stack developer specializing in AI/ML applications. Creator of popular Python and React tutorials with focus on practical, real-world implementations.</textarea>
                                    </div>
                                    
                                    <button type="submit" class="dashboard-gradient text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90">
                                        Save Changes
                                    </button>
                                </form>
                            </div>
                            
                            <!-- Account Settings -->
                            <div class="space-y-6">
                                <div class="glass-card p-6 rounded-xl">
                                    <h4 class="text-lg font-semibold mb-4">Notifications</h4>
                                    <div class="space-y-4">
                                        <label class="flex items-center justify-between">
                                            <span class="text-sm">Revenue Updates</span>
                                            <input type="checkbox" checked class="toggle">
                                        </label>
                                        <label class="flex items-center justify-between">
                                            <span class="text-sm">New AI Company Interests</span>
                                            <input type="checkbox" checked class="toggle">
                                        </label>
                                        <label class="flex items-center justify-between">
                                            <span class="text-sm">Content Performance</span>
                                            <input type="checkbox" class="toggle">
                                        </label>
                                        <label class="flex items-center justify-between">
                                            <span class="text-sm">Weekly Reports</span>
                                            <input type="checkbox" checked class="toggle">
                                        </label>
                                    </div>
                                </div>
                                
                                <div class="glass-card p-6 rounded-xl">
                                    <h4 class="text-lg font-semibold mb-4">Privacy</h4>
                                    <div class="space-y-4">
                                        <label class="flex items-center justify-between">
                                            <span class="text-sm">Public Profile</span>
                                            <input type="checkbox" checked class="toggle">
                                        </label>
                                        <label class="flex items-center justify-between">
                                            <span class="text-sm">Show Earnings</span>
                                            <input type="checkbox" class="toggle">
                                        </label>
                                        <label class="flex items-center justify-between">
                                            <span class="text-sm">Anonymous Analytics</span>
                                            <input type="checkbox" checked class="toggle">
                                        </label>
                                    </div>
                                </div>
                                
                                <div class="glass-card p-6 rounded-xl">
                                    <h4 class="text-lg font-semibold mb-4 text-red-400">Danger Zone</h4>
                                    <button class="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm transition-colors">
                                        Delete Account
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Integrations Section -->
                    <div id="integrations-section" class="dashboard-section hidden">
                        <div class="glass-card p-8 rounded-xl mb-8">
                            <div class="text-center">
                                <div class="dashboard-gradient p-6 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                    <i class="fas fa-plug text-white text-3xl"></i>
                                </div>
                                <h3 class="text-3xl font-semibold mb-2">Integrations</h3>
                                <p class="text-gray-400 mb-6">Connect your content platforms and tools to maximize your monetization potential</p>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <!-- GitHub Integration -->
                            <div class="glass-card p-6 rounded-xl">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center">
                                        <i class="fab fa-github text-white text-2xl mr-3"></i>
                                        <div>
                                            <h4 class="font-semibold">GitHub</h4>
                                            <p class="text-sm text-gray-400">Code repositories</p>
                                        </div>
                                    </div>
                                    <span class="bg-green-500 text-white px-3 py-1 rounded-full text-xs">Connected</span>
                                </div>
                                <p class="text-sm text-gray-300 mb-4">Automatically monetize your code repositories and documentation.</p>
                                <div class="text-sm">
                                    <div class="flex justify-between mb-2">
                                        <span class="text-gray-400">Synced Repos:</span>
                                        <span>23</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Revenue:</span>
                                        <span class="text-green-400">$2,347/mo</span>
                                    </div>
                                </div>
                                <button class="w-full mt-4 bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors">
                                    Manage Integration
                                </button>
                            </div>
                            
                            <!-- Medium Integration -->
                            <div class="glass-card p-6 rounded-xl">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center">
                                        <i class="fab fa-medium text-white text-2xl mr-3"></i>
                                        <div>
                                            <h4 class="font-semibold">Medium</h4>
                                            <p class="text-sm text-gray-400">Blog articles</p>
                                        </div>
                                    </div>
                                    <span class="bg-green-500 text-white px-3 py-1 rounded-full text-xs">Connected</span>
                                </div>
                                <p class="text-sm text-gray-300 mb-4">Import and monetize your Medium articles as AI training data.</p>
                                <div class="text-sm">
                                    <div class="flex justify-between mb-2">
                                        <span class="text-gray-400">Articles:</span>
                                        <span>47</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="text-gray-400">Revenue:</span>
                                        <span class="text-green-400">$1,156/mo</span>
                                    </div>
                                </div>
                                <button class="w-full mt-4 bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-600 transition-colors">
                                    Manage Integration
                                </button>
                            </div>
                            
                            <!-- YouTube Integration -->
                            <div class="glass-card p-6 rounded-xl">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex items-center">
                                        <i class="fab fa-youtube text-white text-2xl mr-3"></i>
                                        <div>
                                            <h4 class="font-semibold">YouTube</h4>
                                            <p class="text-sm text-gray-400">Video transcripts</p>
                                        </div>
                                    </div>
                                    <span class="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs">Setup Required</span>
                                </div>
                                <p class="text-sm text-gray-300 mb-4">Convert video transcripts and descriptions into monetizable content.</p>
                                <div class="text-sm text-gray-500">
                                    <div>• Automatic transcript extraction</div>
                                    <div>• Chapter-based content segmentation</div>
                                    <div>• Enhanced metadata for AI training</div>
                                </div>
                                <button class="w-full mt-4 dashboard-gradient text-white py-2 rounded-lg hover:opacity-90 transition-opacity">
                                    Connect YouTube
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        
        <script>
            // Authentication State
            let isAuthenticated = false;
            
            // Theme Management
            function initializeTheme() {
                // Check for saved theme preference or default to system preference
                const savedTheme = localStorage.getItem('earnly_theme');
                const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                let currentTheme;
                if (savedTheme) {
                    currentTheme = savedTheme;
                } else {
                    currentTheme = systemPrefersDark ? 'dark' : 'light';
                }
                
                applyTheme(currentTheme);
                updateThemeToggle(currentTheme);
                
                // Listen for system theme changes
                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                    if (!localStorage.getItem('earnly_theme')) {
                        const newTheme = e.matches ? 'dark' : 'light';
                        applyTheme(newTheme);
                        updateThemeToggle(newTheme);
                    }
                });
            }
            
            function toggleTheme() {
                const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                applyTheme(newTheme);
                updateThemeToggle(newTheme);
                localStorage.setItem('earnly_theme', newTheme);
                
                // Add transition effect
                document.body.style.transition = 'all 0.3s ease';
                setTimeout(() => {
                    document.body.style.transition = '';
                }, 300);
            }
            
            function applyTheme(theme) {
                document.documentElement.setAttribute('data-theme', theme);
                
                // Update meta theme-color for mobile browsers
                const themeColorMeta = document.querySelector('meta[name="theme-color"]');
                if (themeColorMeta) {
                    themeColorMeta.setAttribute('content', theme === 'dark' ? '#1f2937' : '#f9fafb');
                } else {
                    const meta = document.createElement('meta');
                    meta.name = 'theme-color';
                    meta.content = theme === 'dark' ? '#1f2937' : '#f9fafb';
                    document.head.appendChild(meta);
                }
            }
            
            function updateThemeToggle(theme) {
                const toggle = document.getElementById('themeToggle');
                if (toggle) {
                    if (theme === 'light') {
                        toggle.classList.add('active');
                    } else {
                        toggle.classList.remove('active');
                    }
                }
            }
            
            // Initialize Dashboard
            document.addEventListener('DOMContentLoaded', function() {
                initializeTheme();
                checkAuthState();
                initializeCharts();
                setupEventListeners();
            });
            
            function checkAuthState() {
                // Check if user is logged in (in real app, check JWT/session)
                const savedAuth = localStorage.getItem('earnly_auth');
                if (savedAuth) {
                    isAuthenticated = true;
                    showDashboard();
                    
                    // Check if this is a new creator from OAuth
                    const urlParams = new URLSearchParams(window.location.search);
                    const isWelcome = urlParams.get('welcome') === 'true';
                    const platform = urlParams.get('platform');
                    
                    if (isWelcome && platform) {
                        // Show welcome notification for new creators
                        setTimeout(() => {
                            const platformName = platform.charAt(0).toUpperCase() + platform.slice(1);
                            showNotification('🎉 Welcome! Your ' + platformName + ' account is connected. Start monetizing your content now!', 'success');
                        }, 500);
                        
                        // Update user info from localStorage
                        const creatorEmail = localStorage.getItem('creator_email');
                        if (creatorEmail) {
                            document.getElementById('userName').textContent = creatorEmail.split('@')[0];
                        }
                    }
                } else {
                    // No authentication - redirect to Get Started
                    window.location.href = '/get-started';
                }
            }
            
            function showDashboard() {
                document.getElementById('dashboardContent').classList.remove('hidden');
            }
            
            function logout() {
                localStorage.removeItem('earnly_auth');
                localStorage.removeItem('creator_platform');
                localStorage.removeItem('creator_email');
                isAuthenticated = false;
                // Redirect to Get Started instead of showing login modal
                window.location.href = '/get-started';
            }
            
            // Section Navigation
            function setupEventListeners() {
                // Sidebar navigation
                document.querySelectorAll('.sidebar-item').forEach(item => {
                    item.addEventListener('click', function() {
                        const section = this.dataset.section;
                        showSection(section);
                    });
                });
            }
            
            function showSection(sectionName) {
                // Hide all sections
                document.querySelectorAll('.dashboard-section').forEach(section => {
                    section.classList.add('hidden');
                });
                
                // Show selected section
                document.getElementById(sectionName + '-section').classList.remove('hidden');
                
                // Update sidebar active state
                document.querySelectorAll('.sidebar-item').forEach(item => {
                    item.classList.remove('active');
                });
                document.querySelector('[data-section="' + sectionName + '"]').classList.add('active');
                
                // Update header
                updateSectionHeader(sectionName);
            }
            
            function updateSectionHeader(section) {
                const titles = {
                    'overview': 'Dashboard Overview',
                    'earnings': 'Earnings Analytics',
                    'content': 'Content Library',
                    'rag-marketplace': 'RAG Marketplace',
                    'ai-optimization': 'AI Optimization',
                    'payouts': 'Payout Management',
                    'integrations': 'Integrations',
                    'settings': 'Settings'
                };
                
                const subtitles = {
                    'overview': 'Monitor your earnings and optimize your content monetization',
                    'earnings': 'Detailed revenue analytics and financial insights',
                    'content': 'Manage your content library and track performance',
                    'rag-marketplace': 'Transform content into AI-ready models for licensing',
                    'ai-optimization': 'AI-powered insights and recommendations for maximum revenue',
                    'payouts': 'Manage payments, methods, and withdrawal history',
                    'integrations': 'Connect your platforms and maximize monetization',
                    'settings': 'Account preferences and configuration'
                };
                
                document.getElementById('sectionTitle').textContent = titles[section];
                document.getElementById('sectionSubtitle').textContent = subtitles[section];
            }
            
            // Chart Initialization
            function initializeCharts() {
                // Revenue Chart
                const revenueCtx = document.getElementById('revenueChart');
                if (revenueCtx) {
                    new Chart(revenueCtx, {
                        type: 'line',
                        data: {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            datasets: [{
                                label: 'Revenue',
                                data: [2100, 2800, 3200, 2900, 3800, 4200, 3900, 4800, 5200, 4900, 5600, 6200],
                                borderColor: '#667eea',
                                backgroundColor: 'rgba(102, 126, 234, 0.1)',
                                borderWidth: 3,
                                fill: true,
                                tension: 0.4
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: false
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    grid: {
                                        color: 'rgba(255, 255, 255, 0.1)'
                                    },
                                    ticks: {
                                        color: '#9ca3af'
                                    }
                                },
                                x: {
                                    grid: {
                                        color: 'rgba(255, 255, 255, 0.1)'
                                    },
                                    ticks: {
                                        color: '#9ca3af'
                                    }
                                }
                            }
                        }
                    });
                }
                
                // Earnings Chart
                const earningsCtx = document.getElementById('earningsChart');
                if (earningsCtx) {
                    new Chart(earningsCtx, {
                        type: 'bar',
                        data: {
                            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                            datasets: [
                                {
                                    label: 'AI Training Data',
                                    data: [1200, 1400, 1100, 1500],
                                    backgroundColor: 'rgba(34, 197, 94, 0.8)',
                                },
                                {
                                    label: 'Content Licensing',
                                    data: [800, 900, 750, 950],
                                    backgroundColor: 'rgba(59, 130, 246, 0.8)',
                                },
                                {
                                    label: 'RAG Marketplace',
                                    data: [400, 450, 380, 520],
                                    backgroundColor: 'rgba(147, 51, 234, 0.8)',
                                }
                            ]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    labels: {
                                        color: '#9ca3af'
                                    }
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    stacked: true,
                                    grid: {
                                        color: 'rgba(255, 255, 255, 0.1)'
                                    },
                                    ticks: {
                                        color: '#9ca3af'
                                    }
                                },
                                x: {
                                    stacked: true,
                                    grid: {
                                        color: 'rgba(255, 255, 255, 0.1)'
                                    },
                                    ticks: {
                                        color: '#9ca3af'
                                    }
                                }
                            }
                        }
                    });
                }
                
                // Trends Chart
                const trendsCtx = document.getElementById('trendsChart');
                if (trendsCtx) {
                    new Chart(trendsCtx, {
                        type: 'doughnut',
                        data: {
                            labels: ['AI/ML Content', 'Code Documentation', 'Research Papers', 'Tutorials'],
                            datasets: [{
                                data: [40, 25, 20, 15],
                                backgroundColor: [
                                    'rgba(34, 197, 94, 0.8)',
                                    'rgba(59, 130, 246, 0.8)',
                                    'rgba(147, 51, 234, 0.8)',
                                    'rgba(251, 191, 36, 0.8)'
                                ],
                                borderWidth: 0
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: false
                                }
                            }
                        }
                    });
                }
            }
            
            // Utility Functions
            function formatCurrency(amount) {
                return new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(amount);
            }
            
            function formatNumber(num) {
                return new Intl.NumberFormat('en-US').format(num);
            }
            
            // Animate counters on load
            function animateCounters() {
                document.querySelectorAll('.animate-counter').forEach(counter => {
                    const originalText = counter.textContent;
                    const isCurrency = originalText.includes('$');
                    const target = parseInt(originalText.replace(/[^0-9]/g, ''));
                    let current = 0;
                    const increment = target / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        const formattedNumber = formatNumber(Math.floor(current));
                        counter.textContent = isCurrency ? '$' + formattedNumber : formattedNumber;
                    }, 40);
                });
            }
            
            // Initialize animations after dashboard loads
            setTimeout(animateCounters, 500);
        </script>
    </body>
    </html>
    `;
}