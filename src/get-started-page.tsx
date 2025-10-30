import type { Context } from 'hono'

export function getStartedPage(c: Context) {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Get Started with Earnly - Create Your Account</title>
        <meta name="description" content="Join Earnly and start monetizing AI platforms instantly. Create your account in 2 easy steps.">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <style>
            /* Modern gradient design */
            body {
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                color: #fff;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                min-height: 100vh;
            }
            
            .glass-card {
                background: rgba(30, 41, 59, 0.8);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(148, 163, 184, 0.2);
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
            }
            
            .form-input {
                transition: all 0.3s ease;
                background: rgba(15, 23, 42, 0.6);
                border: 1px solid rgba(148, 163, 184, 0.3);
                color: #fff;
                backdrop-filter: blur(10px);
            }
            
            .form-input:focus {
                border-color: #3b82f6;
                background: rgba(15, 23, 42, 0.8);
                outline: none;
                box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
                transform: translateY(-1px);
            }
            
            .form-input:disabled {
                opacity: 0.5;
                cursor: not-allowed;
                background: rgba(15, 23, 42, 0.4);
            }
            
            .form-input::placeholder {
                color: #94a3b8;
            }
            
            .role-card {
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                background: rgba(15, 23, 42, 0.6);
                border: 2px solid rgba(148, 163, 184, 0.3);
                backdrop-filter: blur(10px);
                cursor: pointer;
            }
            
            .role-card:hover {
                background: rgba(59, 130, 246, 0.1);
                border-color: #3b82f6;
                transform: translateY(-4px);
                box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2);
            }
            
            .role-card.selected {
                background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                border-color: #3b82f6;
                color: white;
                box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
                transform: translateY(-4px);
            }
            
            .role-card.selected .role-icon {
                background: rgba(255, 255, 255, 0.2);
                color: white;
            }
            
            .role-icon {
                transition: all 0.3s ease;
            }
            
            /* Progress Steps */
            .progress-step {
                transition: all 0.3s ease;
            }
            
            .progress-step.active {
                background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                color: white;
                box-shadow: 0 4px 15px rgba(59, 130, 246, 0.4);
            }
            
            .progress-step.completed {
                background: #10b981;
                color: white;
            }
            
            .progress-line {
                transition: all 0.3s ease;
            }
            
            .progress-line.completed {
                background: #10b981;
            }
            
            /* Platform Buttons */
            .platform-btn {
                transition: all 0.3s ease;
                background: rgba(15, 23, 42, 0.6);
                border: 2px solid rgba(148, 163, 184, 0.3);
            }
            
            .platform-btn:hover {
                border-color: #3b82f6;
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(59, 130, 246, 0.2);
            }
            
            /* Password Requirements */
            .password-requirement {
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 13px;
                color: #94a3b8;
                padding: 4px 0;
                transition: all 0.3s ease;
            }
            
            .password-requirement.met {
                color: #10b981;
            }
            
            .requirement-dot {
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #374151;
                transition: all 0.3s ease;
                border: 1px solid #4b5563;
            }
            
            .requirement-dot.met {
                background: #10b981;
                border-color: #10b981;
                box-shadow: 0 0 10px rgba(16, 185, 129, 0.4);
            }
            
            /* Validation Messages */
            .validation-message {
                font-size: 12px;
                margin-top: 4px;
                transition: all 0.3s ease;
            }
            
            .validation-message.error {
                color: #ef4444;
            }
            
            .validation-message.success {
                color: #10b981;
            }
            
            /* Button Styles */
            .primary-btn {
                background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                transition: all 0.3s ease;
                box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
            }
            
            .primary-btn:hover:not(:disabled) {
                transform: translateY(-2px);
                box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
            }
            
            .primary-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            
            /* Testimonial Card */
            .testimonial-card {
                background: rgba(15, 23, 42, 0.6);
                border: 1px solid rgba(148, 163, 184, 0.2);
                backdrop-filter: blur(15px);
                transition: opacity 0.3s ease-in-out;
            }
            
            .testimonial-content {
                display: none;
            }
            
            .testimonial-content:not(.hidden) {
                display: block;
            }
            
            /* Slide Animation */
            .slide-enter {
                animation: slideIn 0.3s ease-out;
            }
            
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateX(20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            .floating-animation {
                animation: float 6s ease-in-out infinite;
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
            
            /* Hide/Show Steps */
            .step-content {
                display: none;
            }
            
            .step-content.active {
                display: block;
            }
        </style>
    </head>
    <body class="text-white min-h-screen">
        <!-- Header Navigation -->
        <nav class="backdrop-blur-sm bg-white/5 border-b border-white/10 py-6">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="flex items-center justify-between">
                    <a href="/" class="flex items-center floating-animation">
                        <img src="https://raw.githubusercontent.com/7gmnmsbwzx-ship-it/earnly-assets/main/earnly%20logo.png" 
                             alt="Earnly Logo" 
                             class="h-10 w-auto"
                             onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 60%22%3E%3Ctext x=%2210%22 y=%2240%22 font-family=%22Arial%22 font-size=%2236%22 font-weight=%22bold%22 fill=%22%234f46e5%22%3EEarnly%3C/text%3E%3C/svg%3E';">
                    </a>
                    
                    <div class="flex items-center space-x-6">
                        <span class="text-slate-300 text-sm">Already have an account?</span>
                        <a href="/signin" class="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium backdrop-blur-sm border border-white/20">
                            Sign in
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <div class="py-8 lg:py-12">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    
                    <!-- Left Side - Welcome & Testimonial -->
                    <div class="text-white hidden lg:block">
                        <div class="mb-8">
                            <h1 class="text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                Welcome to Earnly
                            </h1>
                            <p class="text-xl text-slate-300 mb-8 leading-relaxed">
                                Join our platform to monetize AI interactions and connect with your audience
                            </p>
                        </div>
                        
                        <!-- Dynamic Testimonial Card -->
                        <div class="testimonial-card rounded-2xl p-8 floating-animation" id="testimonial-card">
                            <!-- Advertiser Testimonial -->
                            <div id="advertiser-testimonial" class="testimonial-content hidden">
                                <div class="flex items-start space-x-4 mb-6">
                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" 
                                         class="w-16 h-16 rounded-full border-2 border-blue-400/50" alt="Mike R.">
                                    <div class="flex-1">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="font-bold text-white text-lg">Mike R.</div>
                                            <div class="bg-blue-500/20 text-blue-300 text-xs px-2 py-1 rounded-full">
                                                Verified User
                                            </div>
                                        </div>
                                        <div class="text-sm text-slate-400 mb-4">Marketing Director, TechFlow Solutions</div>
                                    </div>
                                </div>
                                <blockquote class="text-slate-200 text-lg leading-relaxed mb-4">
                                    "Earnly gave us instant visibility across all apps. We hit <span class="text-green-400 font-semibold">500 conversions</span> in our first week through AI-driven offers. It's the future of marketing."
                                </blockquote>
                                <div class="flex items-center space-x-4 text-sm text-slate-400">
                                    <div class="flex items-center space-x-1">
                                        <i class="fas fa-star text-yellow-400"></i>
                                        <span>5.0 rating</span>
                                    </div>
                                    <div class="flex items-center space-x-1">
                                        <i class="fas fa-calendar text-blue-400"></i>
                                        <span>2 weeks ago</span>
                                    </div>
                                </div>
                            </div>

                            <!-- AI Platform Testimonial -->
                            <div id="platform-testimonial" class="testimonial-content hidden">
                                <div class="flex items-start space-x-4 mb-6">
                                    <img src="https://randomuser.me/api/portraits/men/45.jpg" 
                                         class="w-16 h-16 rounded-full border-2 border-purple-400/50" alt="Alex T.">
                                    <div class="flex-1">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="font-bold text-white text-lg">Alex T.</div>
                                            <div class="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded-full">
                                                Verified User
                                            </div>
                                        </div>
                                        <div class="text-sm text-slate-400 mb-4">CTO, IntelliChat AI</div>
                                    </div>
                                </div>
                                <blockquote class="text-slate-200 text-lg leading-relaxed mb-4">
                                    "Integrating Earnly's monetization layer increased our <span class="text-green-400 font-semibold">revenue by 340%</span>. Our AI responses now generate income while providing better user experiences."
                                </blockquote>
                                <div class="flex items-center space-x-4 text-sm text-slate-400">
                                    <div class="flex items-center space-x-1">
                                        <i class="fas fa-star text-yellow-400"></i>
                                        <span>5.0 rating</span>
                                    </div>
                                    <div class="flex items-center space-x-1">
                                        <i class="fas fa-calendar text-purple-400"></i>
                                        <span>1 week ago</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Creator Testimonial -->
                            <div id="creator-testimonial" class="testimonial-content">
                                <div class="flex items-start space-x-4 mb-6">
                                    <img src="https://randomuser.me/api/portraits/women/44.jpg" 
                                         class="w-16 h-16 rounded-full border-2 border-pink-400/50" alt="Sarah Chen">
                                    <div class="flex-1">
                                        <div class="flex items-center space-x-2 mb-2">
                                            <div class="font-bold text-white text-lg">Sarah Chen</div>
                                            <div class="bg-pink-500/20 text-pink-300 text-xs px-2 py-1 rounded-full">
                                                Verified Creator
                                            </div>
                                        </div>
                                        <div class="text-sm text-slate-400 mb-4">Tech YouTuber • 850K subscribers</div>
                                    </div>
                                </div>
                                <blockquote class="text-slate-200 text-lg leading-relaxed mb-4">
                                    "My 5-year-old tech tutorials are still earning me money! AI assistants reference my content daily, and I get paid for each citation. It's like having <span class="text-green-400 font-semibold">passive income from my entire content history</span>."
                                </blockquote>
                                <div class="flex items-center space-x-4 text-sm text-slate-400">
                                    <div class="flex items-center space-x-1">
                                        <i class="fas fa-star text-yellow-400"></i>
                                        <span>5.0 rating</span>
                                    </div>
                                    <div class="flex items-center space-x-1">
                                        <i class="fas fa-calendar text-pink-400"></i>
                                        <span>3 days ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Side - Form Container -->
                    <div>
                        <!-- Progress Indicator -->
                        <div class="mb-8">
                            <div class="flex items-center justify-center">
                                <div class="flex items-center space-x-4">
                                    <!-- Step 1 -->
                                    <div class="flex items-center">
                                        <div class="progress-step active flex items-center justify-center w-10 h-10 rounded-full bg-slate-700 text-white font-bold text-sm" id="step-1-indicator">
                                            1
                                        </div>
                                        <span class="ml-3 text-sm font-medium text-white" id="step-1-label">Choose Role</span>
                                    </div>
                                    
                                    <!-- Line -->
                                    <div class="progress-line w-16 h-1 bg-slate-700" id="progress-line"></div>
                                    
                                    <!-- Step 2 -->
                                    <div class="flex items-center">
                                        <div class="progress-step flex items-center justify-center w-10 h-10 rounded-full bg-slate-700 text-slate-400 font-bold text-sm" id="step-2-indicator">
                                            2
                                        </div>
                                        <span class="ml-3 text-sm font-medium text-slate-400" id="step-2-label">Create Account</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Form Container -->
                        <div class="glass-card rounded-3xl p-8">
                    
                    <!-- Step 1: Role Selection -->
                    <div class="step-content active slide-enter" id="step-1">
                        <div class="text-center mb-8">
                            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
                                <i class="fas fa-rocket text-white text-2xl"></i>
                            </div>
                            <h2 class="text-3xl font-bold text-white mb-2">Welcome to Earnly</h2>
                            <p class="text-slate-400">Let's get you started. First, tell us who you are.</p>
                        </div>

                        <!-- Role Selection Cards -->
                        <div class="grid md:grid-cols-3 gap-4 mb-8">
                            <!-- Advertiser -->
                            <div class="role-card rounded-2xl p-6 text-center" onclick="selectRole('advertiser')" id="role-advertiser">
                                <div class="role-icon w-16 h-16 mx-auto mb-4 rounded-xl bg-blue-500/20 flex items-center justify-center">
                                    <i class="fas fa-bullhorn text-blue-400 text-2xl"></i>
                                </div>
                                <h3 class="font-bold text-lg mb-2 text-white">Advertiser</h3>
                                <p class="text-sm text-slate-400">Promote products through AI platforms</p>
                            </div>

                            <!-- AI Platform -->
                            <div class="role-card rounded-2xl p-6 text-center" onclick="selectRole('platform')" id="role-platform">
                                <div class="role-icon w-16 h-16 mx-auto mb-4 rounded-xl bg-purple-500/20 flex items-center justify-center">
                                    <i class="fas fa-robot text-purple-400 text-2xl"></i>
                                </div>
                                <h3 class="font-bold text-lg mb-2 text-white">AI Platform</h3>
                                <p class="text-sm text-slate-400">Monetize your AI assistant</p>
                            </div>

                            <!-- Creator -->
                            <div class="role-card rounded-2xl p-6 text-center" onclick="selectRole('creator')" id="role-creator">
                                <div class="role-icon w-16 h-16 mx-auto mb-4 rounded-xl bg-pink-500/20 flex items-center justify-center">
                                    <i class="fas fa-palette text-pink-400 text-2xl"></i>
                                </div>
                                <h3 class="font-bold text-lg mb-2 text-white">Creator</h3>
                                <p class="text-sm text-slate-400">Earn from your content</p>
                            </div>
                        </div>

                        <!-- Continue Button -->
                        <button onclick="goToStep2()" class="primary-btn w-full text-white py-4 px-6 rounded-xl font-semibold" id="continue-btn" disabled>
                            <span class="flex items-center justify-center space-x-2">
                                <span>Continue</span>
                                <i class="fas fa-arrow-right"></i>
                            </span>
                        </button>
                    </div>

                    <!-- Step 2A: Advertiser/Platform Flow -->
                    <div class="step-content slide-enter" id="step-2-business">
                        <div class="text-center mb-8">
                            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
                                <i class="fas fa-building text-white text-2xl" id="business-icon"></i>
                            </div>
                            <h2 class="text-3xl font-bold text-white mb-2" id="business-title">Create Your Account</h2>
                            <p class="text-slate-400" id="business-subtitle">Enter your business details</p>
                        </div>

                        <form onsubmit="handleBusinessRegistration(event)" class="space-y-6">
                            <!-- Website URL -->
                            <div>
                                <label class="block text-sm font-semibold text-slate-300 mb-3">
                                    <i class="fas fa-globe mr-2 text-blue-400"></i>
                                    <span id="website-label">Website URL</span>
                                </label>
                                <div class="relative group">
                                    <input type="url" 
                                           name="website"
                                           required
                                           class="form-input w-full px-4 py-3 pl-12 rounded-xl text-lg"
                                           placeholder="https://example.com"
                                           id="website-input"
                                           oninput="detectEmailDomain(this.value)">
                                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <i class="fas fa-link text-slate-500 group-focus-within:text-blue-400 transition-colors"></i>
                                    </div>
                                </div>
                                <div class="validation-message" id="website-validation"></div>
                            </div>

                            <!-- Work Email -->
                            <div>
                                <label class="block text-sm font-semibold text-slate-300 mb-3">
                                    <i class="fas fa-envelope mr-2 text-blue-400"></i>
                                    Work Email
                                </label>
                                <div class="flex gap-2">
                                    <!-- Email Prefix -->
                                    <div class="relative group flex-1">
                                        <input type="text" 
                                               name="email-prefix"
                                               required
                                               class="form-input w-full px-4 py-3 pl-12 rounded-xl text-lg"
                                               placeholder="john"
                                               id="email-prefix"
                                               oninput="updateFullEmail()">
                                        <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <i class="fas fa-user text-slate-500 group-focus-within:text-blue-400 transition-colors"></i>
                                        </div>
                                    </div>
                                    
                                    <!-- Email Domain (Auto-filled & Locked) -->
                                    <div class="relative flex-1">
                                        <input type="text" 
                                               name="email-domain"
                                               required
                                               readonly
                                               class="form-input w-full px-4 py-3 rounded-xl text-lg bg-slate-800/50 cursor-not-allowed"
                                               placeholder="@example.com"
                                               id="email-domain"
                                               value="@example.com">
                                        <div class="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                            <i class="fas fa-lock text-slate-500 text-sm"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="validation-message mt-2" id="email-validation"></div>
                                <p class="text-xs text-slate-500 mt-2">
                                    <i class="fas fa-info-circle mr-1"></i>
                                    Email domain is automatically detected from your website
                                </p>
                            </div>

                            <!-- Password -->
                            <div>
                                <label class="block text-sm font-semibold text-slate-300 mb-3">
                                    <i class="fas fa-lock mr-2 text-blue-400"></i>
                                    Password
                                </label>
                                <div class="relative group">
                                    <input type="password" 
                                           name="password"
                                           required
                                           minlength="8"
                                           class="form-input w-full px-4 py-3 pl-12 pr-12 rounded-xl text-lg"
                                           placeholder="••••••••"
                                           id="business-password"
                                           oninput="checkPasswordRequirements(this.value, 'business')">
                                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <i class="fas fa-key text-slate-500 group-focus-within:text-blue-400 transition-colors"></i>
                                    </div>
                                    <button type="button" onclick="togglePassword('business-password', 'business-password-toggle')" class="absolute inset-y-0 right-0 pr-4 flex items-center">
                                        <i class="fas fa-eye text-slate-500 hover:text-slate-300 transition-colors" id="business-password-toggle"></i>
                                    </button>
                                </div>
                                
                                <!-- Password Requirements -->
                                <div class="mt-3 space-y-2">
                                    <p class="text-xs text-slate-400 font-medium">Password must contain:</p>
                                    <div class="grid grid-cols-2 gap-2">
                                        <div class="password-requirement" id="business-req-length">
                                            <div class="requirement-dot"></div>
                                            <span>At least 8 characters</span>
                                        </div>
                                        <div class="password-requirement" id="business-req-uppercase">
                                            <div class="requirement-dot"></div>
                                            <span>One uppercase letter</span>
                                        </div>
                                        <div class="password-requirement" id="business-req-number">
                                            <div class="requirement-dot"></div>
                                            <span>One number</span>
                                        </div>
                                        <div class="password-requirement" id="business-req-symbol">
                                            <div class="requirement-dot"></div>
                                            <span>One special character</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Buttons -->
                            <div class="flex gap-4 pt-4">
                                <button type="button" onclick="goToStep1()" class="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-4 px-6 rounded-xl font-semibold transition-all">
                                    <i class="fas fa-arrow-left mr-2"></i>Back
                                </button>
                                <button type="submit" class="primary-btn flex-1 text-white py-4 px-6 rounded-xl font-semibold" id="business-submit-btn">
                                    <span class="flex items-center justify-center space-x-2">
                                        <span>Create Account</span>
                                        <i class="fas fa-check"></i>
                                    </span>
                                </button>
                            </div>

                            <!-- Terms -->
                            <p class="text-xs text-slate-400 text-center leading-relaxed pt-4 border-t border-white/10">
                                By continuing, you agree to Earnly's 
                                <a href="/terms" class="text-blue-400 hover:text-blue-300 underline">Terms of Service</a> 
                                and 
                                <a href="/privacy" class="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a>
                            </p>
                        </form>
                    </div>

                    <!-- Step 2B: Creator Flow -->
                    <div class="step-content slide-enter" id="step-2-creator">
                        <div class="text-center mb-8">
                            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4">
                                <i class="fas fa-palette text-white text-2xl"></i>
                            </div>
                            <h2 class="text-3xl font-bold text-white mb-2">Connect Your Platform</h2>
                            <p class="text-slate-400">Link your social media or blog to get started</p>
                        </div>

                        <!-- Social Media Input -->
                        <div class="mb-6">
                            <label class="block text-sm font-semibold text-slate-300 mb-3">
                                <i class="fas fa-link mr-2 text-pink-400"></i>
                                Social Media Handle or Blog URL
                            </label>
                            <div class="relative group">
                                <input type="text" 
                                       name="social-url"
                                       required
                                       class="form-input w-full px-4 py-3 pl-12 rounded-xl text-lg"
                                       placeholder="@username or https://yourblog.com"
                                       id="social-url"
                                       oninput="detectPlatform(this.value)">
                                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <i class="fas fa-at text-slate-500 group-focus-within:text-blue-400 transition-colors"></i>
                                </div>
                            </div>
                            <div class="validation-message mt-2" id="social-validation"></div>
                        </div>

                        <!-- Detected Platform -->
                        <div class="mb-6 hidden" id="detected-platform-container">
                            <p class="text-sm text-slate-400 mb-3">
                                <i class="fas fa-check-circle text-green-400 mr-2"></i>
                                Platform detected
                            </p>
                            <div class="bg-slate-800/50 rounded-xl p-4 border border-slate-700" id="detected-platform-info">
                                <!-- Platform info will be injected here -->
                            </div>
                        </div>

                        <!-- Platform Connection Buttons -->
                        <div class="space-y-3 mb-6" id="platform-buttons-container">
                            <p class="text-sm text-slate-400 mb-3">Or connect directly:</p>
                            
                            <!-- YouTube -->
                            <button type="button" onclick="connectPlatform('youtube')" class="platform-btn w-full rounded-xl p-4 text-left flex items-center space-x-4">
                                <div class="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center">
                                    <i class="fab fa-youtube text-red-500 text-2xl"></i>
                                </div>
                                <div class="flex-1">
                                    <div class="font-semibold text-white">YouTube</div>
                                    <div class="text-sm text-slate-400">Connect your YouTube channel</div>
                                </div>
                                <i class="fas fa-arrow-right text-slate-500"></i>
                            </button>

                            <!-- TikTok -->
                            <button type="button" onclick="connectPlatform('tiktok')" class="platform-btn w-full rounded-xl p-4 text-left flex items-center space-x-4">
                                <div class="w-12 h-12 rounded-lg bg-black/50 flex items-center justify-center">
                                    <i class="fab fa-tiktok text-white text-2xl"></i>
                                </div>
                                <div class="flex-1">
                                    <div class="font-semibold text-white">TikTok</div>
                                    <div class="text-sm text-slate-400">Connect your TikTok account</div>
                                </div>
                                <i class="fas fa-arrow-right text-slate-500"></i>
                            </button>

                            <!-- Instagram -->
                            <button type="button" onclick="connectPlatform('instagram')" class="platform-btn w-full rounded-xl p-4 text-left flex items-center space-x-4">
                                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                    <i class="fab fa-instagram text-white text-2xl"></i>
                                </div>
                                <div class="flex-1">
                                    <div class="font-semibold text-white">Instagram</div>
                                    <div class="text-sm text-slate-400">Connect your Instagram profile</div>
                                </div>
                                <i class="fas fa-arrow-right text-slate-500"></i>
                            </button>

                            <!-- Blog/Website -->
                            <button type="button" onclick="connectPlatform('blog')" class="platform-btn w-full rounded-xl p-4 text-left flex items-center space-x-4">
                                <div class="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                    <i class="fas fa-blog text-blue-400 text-2xl"></i>
                                </div>
                                <div class="flex-1">
                                    <div class="font-semibold text-white">Blog / Website</div>
                                    <div class="text-sm text-slate-400">Connect your blog or website</div>
                                </div>
                                <i class="fas fa-arrow-right text-slate-500"></i>
                            </button>
                        </div>

                        <!-- Back Button -->
                        <button type="button" onclick="goToStep1()" class="w-full bg-slate-700 hover:bg-slate-600 text-white py-4 px-6 rounded-xl font-semibold transition-all">
                            <i class="fas fa-arrow-left mr-2"></i>Back to Role Selection
                        </button>

                        <!-- Terms -->
                        <p class="text-xs text-slate-400 text-center leading-relaxed pt-6 border-t border-white/10 mt-6">
                            By connecting, you agree to Earnly's 
                            <a href="/terms" class="text-blue-400 hover:text-blue-300 underline">Terms of Service</a> 
                            and 
                            <a href="/privacy" class="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a>
                        </p>
                    </div>

                        </div>
                        <!-- End Form Container -->
                    </div>
                    <!-- End Right Column -->
                    
                </div>
                <!-- End Grid -->
            </div>
        </div>

        <!-- JavaScript -->
        <script>
            let selectedRole = null;
            let detectedDomain = '';

            // Step 1: Role Selection
            function selectRole(role) {
                selectedRole = role;
                
                // Reset all role cards
                document.querySelectorAll('.role-card').forEach(card => {
                    card.classList.remove('selected');
                });
                
                // Select the clicked role
                document.getElementById('role-' + role).classList.add('selected');
                
                // Enable continue button
                document.getElementById('continue-btn').disabled = false;
                
                // Show corresponding testimonial
                showTestimonial(role);
            }
            
            // Show testimonial based on role
            function showTestimonial(type) {
                // Hide all testimonials
                document.getElementById('advertiser-testimonial').classList.add('hidden');
                document.getElementById('platform-testimonial').classList.add('hidden');
                document.getElementById('creator-testimonial').classList.add('hidden');

                // Show selected testimonial with fade effect
                const testimonialCard = document.getElementById('testimonial-card');
                if (testimonialCard) {
                    testimonialCard.style.opacity = '0.7';
                    
                    setTimeout(() => {
                        document.getElementById(type + '-testimonial').classList.remove('hidden');
                        testimonialCard.style.opacity = '1';
                    }, 150);
                }
            }

            // Navigate to Step 2
            function goToStep2() {
                if (!selectedRole) return;
                
                // Update progress indicators
                document.getElementById('step-1-indicator').classList.remove('active');
                document.getElementById('step-1-indicator').classList.add('completed');
                document.getElementById('step-1-indicator').innerHTML = '<i class="fas fa-check"></i>';
                document.getElementById('step-1-label').classList.add('text-slate-400');
                
                document.getElementById('step-2-indicator').classList.add('active');
                document.getElementById('step-2-indicator').classList.remove('text-slate-400');
                document.getElementById('step-2-label').classList.remove('text-slate-400');
                document.getElementById('step-2-label').classList.add('text-white');
                
                document.getElementById('progress-line').classList.add('completed');
                
                // Hide Step 1
                document.getElementById('step-1').classList.remove('active');
                
                // Show appropriate Step 2 based on role
                if (selectedRole === 'creator') {
                    document.getElementById('step-2-creator').classList.add('active');
                } else {
                    // Update UI for advertiser or platform
                    const icon = selectedRole === 'advertiser' ? 'fa-bullhorn' : 'fa-robot';
                    const title = selectedRole === 'advertiser' ? 'Advertiser Account' : 'AI Platform Account';
                    const subtitle = selectedRole === 'advertiser' ? 'Promote your products through AI platforms' : 'Monetize your AI assistant';
                    
                    document.getElementById('business-icon').className = 'fas ' + icon + ' text-white text-2xl';
                    document.getElementById('business-title').textContent = title;
                    document.getElementById('business-subtitle').textContent = subtitle;
                    document.getElementById('website-label').textContent = selectedRole === 'advertiser' ? 'Company Website' : 'AI Platform Website';
                    
                    document.getElementById('step-2-business').classList.add('active');
                }
            }

            // Navigate back to Step 1
            function goToStep1() {
                // Reset progress indicators
                document.getElementById('step-1-indicator').classList.add('active');
                document.getElementById('step-1-indicator').classList.remove('completed');
                document.getElementById('step-1-indicator').textContent = '1';
                document.getElementById('step-1-label').classList.remove('text-slate-400');
                
                document.getElementById('step-2-indicator').classList.remove('active');
                document.getElementById('step-2-indicator').classList.add('text-slate-400');
                document.getElementById('step-2-label').classList.add('text-slate-400');
                document.getElementById('step-2-label').classList.remove('text-white');
                
                document.getElementById('progress-line').classList.remove('completed');
                
                // Show Step 1
                document.getElementById('step-1').classList.add('active');
                
                // Hide Step 2
                document.getElementById('step-2-business').classList.remove('active');
                document.getElementById('step-2-creator').classList.remove('active');
            }

            // Auto-detect email domain from website URL
            function detectEmailDomain(url) {
                const websiteValidation = document.getElementById('website-validation');
                
                try {
                    // Extract domain from URL
                    let domain = url.trim();
                    
                    // Remove protocol
                    domain = domain.replace(/^https?:\\/\\//, '');
                    
                    // Remove www.
                    domain = domain.replace(/^www\\./, '');
                    
                    // Remove path
                    domain = domain.split('/')[0];
                    
                    // Remove port
                    domain = domain.split(':')[0];
                    
                    if (domain && domain.includes('.')) {
                        detectedDomain = domain;
                        document.getElementById('email-domain').value = '@' + domain;
                        websiteValidation.className = 'validation-message success';
                        websiteValidation.innerHTML = '<i class="fas fa-check-circle mr-1"></i>Domain detected: ' + domain;
                        updateFullEmail();
                    } else if (url.length > 0) {
                        websiteValidation.className = 'validation-message error';
                        websiteValidation.innerHTML = '<i class="fas fa-exclamation-circle mr-1"></i>Please enter a valid website URL';
                        document.getElementById('email-domain').value = '@example.com';
                    } else {
                        websiteValidation.textContent = '';
                        document.getElementById('email-domain').value = '@example.com';
                    }
                } catch (e) {
                    websiteValidation.className = 'validation-message error';
                    websiteValidation.innerHTML = '<i class="fas fa-exclamation-circle mr-1"></i>Invalid URL format';
                }
            }

            // Update full email display
            function updateFullEmail() {
                const prefix = document.getElementById('email-prefix').value;
                const domain = document.getElementById('email-domain').value;
                const emailValidation = document.getElementById('email-validation');
                
                if (prefix && domain !== '@example.com') {
                    const fullEmail = prefix + domain;
                    emailValidation.className = 'validation-message success';
                    emailValidation.innerHTML = '<i class="fas fa-check-circle mr-1"></i>Your email: ' + fullEmail;
                } else if (prefix) {
                    emailValidation.className = 'validation-message';
                    emailValidation.innerHTML = '<i class="fas fa-info-circle mr-1"></i>Enter your website URL first to auto-fill domain';
                } else {
                    emailValidation.textContent = '';
                }
            }

            // Password validation
            function checkPasswordRequirements(password, prefix) {
                const lengthReq = document.getElementById(prefix + '-req-length');
                const uppercaseReq = document.getElementById(prefix + '-req-uppercase');
                const numberReq = document.getElementById(prefix + '-req-number');
                const symbolReq = document.getElementById(prefix + '-req-symbol');
                
                // Check length
                const hasLength = password.length >= 8;
                lengthReq.classList.toggle('met', hasLength);
                lengthReq.querySelector('.requirement-dot').classList.toggle('met', hasLength);
                
                // Check uppercase
                const hasUppercase = /[A-Z]/.test(password);
                uppercaseReq.classList.toggle('met', hasUppercase);
                uppercaseReq.querySelector('.requirement-dot').classList.toggle('met', hasUppercase);
                
                // Check number
                const hasNumber = /[0-9]/.test(password);
                numberReq.classList.toggle('met', hasNumber);
                numberReq.querySelector('.requirement-dot').classList.toggle('met', hasNumber);
                
                // Check symbol
                const hasSymbol = /[^a-zA-Z0-9]/.test(password);
                symbolReq.classList.toggle('met', hasSymbol);
                symbolReq.querySelector('.requirement-dot').classList.toggle('met', hasSymbol);
                
                return hasLength && hasUppercase && hasNumber && hasSymbol;
            }

            // Toggle password visibility
            function togglePassword(inputId, iconId) {
                const passwordInput = document.getElementById(inputId);
                const toggleIcon = document.getElementById(iconId);

                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    toggleIcon.className = 'fas fa-eye-slash text-slate-500 hover:text-slate-300 transition-colors';
                } else {
                    passwordInput.type = 'password';
                    toggleIcon.className = 'fas fa-eye text-slate-500 hover:text-slate-300 transition-colors';
                }
            }

            // Handle business registration (advertiser/platform)
            async function handleBusinessRegistration(event) {
                event.preventDefault();
                
                const formData = new FormData(event.target);
                const website = formData.get('website');
                const emailPrefix = formData.get('email-prefix');
                const emailDomain = document.getElementById('email-domain').value;
                const password = formData.get('password');
                
                // Validate password
                if (!checkPasswordRequirements(password, 'business')) {
                    alert('Please ensure your password meets all requirements');
                    return;
                }
                
                const data = {
                    accountType: selectedRole,
                    website: website,
                    email: emailPrefix + emailDomain,
                    password: password
                };

                // Show loading state
                const submitButton = document.getElementById('business-submit-btn');
                const originalContent = submitButton.innerHTML;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Creating Account...';
                submitButton.disabled = true;

                try {
                    const response = await fetch('/api/register', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                    });

                    if (response.ok) {
                        // Show success
                        submitButton.innerHTML = '<i class="fas fa-check mr-2"></i>Account Created!';
                        submitButton.className = 'w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold';
                        
                        // Redirect to dashboard
                        setTimeout(() => {
                            if (selectedRole === 'advertiser') {
                                window.location.href = '/for-advertisers?welcome=true';
                            } else if (selectedRole === 'platform') {
                                window.location.href = '/for-ai-platforms?welcome=true';
                            }
                        }, 1500);
                    } else {
                        throw new Error('Registration failed');
                    }

                } catch (error) {
                    submitButton.innerHTML = originalContent;
                    submitButton.disabled = false;
                    alert('Registration failed. Please try again.');
                }
            }

            // Detect platform from URL/handle
            function detectPlatform(input) {
                const validation = document.getElementById('social-validation');
                const platformContainer = document.getElementById('detected-platform-container');
                const platformInfo = document.getElementById('detected-platform-info');
                
                input = input.trim().toLowerCase();
                
                let platform = null;
                let username = '';
                
                // YouTube detection
                if (input.includes('youtube.com/') || input.includes('youtu.be/')) {
                    platform = 'youtube';
                    const match = input.match(/@([\\w-]+)|channel\\/([\\w-]+)|user\\/([\\w-]+)/);
                    username = match ? (match[1] || match[2] || match[3]) : 'your channel';
                } 
                // TikTok detection
                else if (input.includes('tiktok.com/@') || input.startsWith('@')) {
                    platform = 'tiktok';
                    username = input.replace(/.*@/, '@');
                } 
                // Instagram detection
                else if (input.includes('instagram.com/')) {
                    platform = 'instagram';
                    const match = input.match(/instagram\\.com\\/([\\w.-]+)/);
                    username = match ? '@' + match[1] : 'your profile';
                } 
                // Blog/Website detection
                else if (input.includes('.com') || input.includes('.io') || input.includes('.net') || input.includes('http')) {
                    platform = 'blog';
                    try {
                        const url = new URL(input.startsWith('http') ? input : 'https://' + input);
                        username = url.hostname;
                    } catch (e) {
                        username = input;
                    }
                }
                
                if (platform && input.length > 2) {
                    const icons = {
                        youtube: 'fab fa-youtube text-red-500',
                        tiktok: 'fab fa-tiktok text-white',
                        instagram: 'fab fa-instagram text-pink-500',
                        blog: 'fas fa-blog text-blue-400'
                    };
                    
                    const names = {
                        youtube: 'YouTube',
                        tiktok: 'TikTok',
                        instagram: 'Instagram',
                        blog: 'Blog/Website'
                    };
                    
                    platformInfo.innerHTML = '<div class="flex items-center space-x-3">' +
                        '<div class="w-12 h-12 rounded-lg bg-slate-700 flex items-center justify-center">' +
                            '<i class="' + icons[platform] + ' text-2xl"></i>' +
                        '</div>' +
                        '<div>' +
                            '<div class="font-semibold text-white">' + names[platform] + '</div>' +
                            '<div class="text-sm text-slate-400">' + username + '</div>' +
                        '</div>' +
                    '</div>';
                    
                    platformContainer.classList.remove('hidden');
                    validation.className = 'validation-message success';
                    validation.innerHTML = '<i class="fas fa-check-circle mr-1"></i>Platform detected! Click the button below to connect.';
                } else if (input.length > 0) {
                    platformContainer.classList.add('hidden');
                    validation.className = 'validation-message';
                    validation.innerHTML = '<i class="fas fa-info-circle mr-1"></i>Enter your social media URL or handle';
                } else {
                    platformContainer.classList.add('hidden');
                    validation.textContent = '';
                }
            }

            // Connect platform (OAuth simulation)
            async function connectPlatform(platform) {
                const platformNames = {
                    youtube: 'YouTube',
                    tiktok: 'TikTok',
                    instagram: 'Instagram',
                    blog: 'Blog/Website'
                };
                
                const platformName = platformNames[platform];
                
                // Show confirmation
                if (!confirm('You will be redirected to ' + platformName + ' to authorize Earnly to access your account. Continue?')) {
                    return;
                }
                
                // In production, this would redirect to OAuth provider
                // For now, simulate OAuth flow
                alert('🔄 Redirecting to ' + platformName + ' OAuth...');
                
                // Simulate OAuth delay
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Simulate successful OAuth
                alert('✅ Successfully connected to ' + platformName + '!');
                
                // Redirect to creator dashboard
                window.location.href = '/creator-dashboard?welcome=true&platform=' + platform;
            }
        </script>
    </body>
    </html>
  `)
}
