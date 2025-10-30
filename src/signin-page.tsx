import type { Context } from 'hono'

export function signinPage(c: Context) {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sign In - Earnly | Access Your Account</title>
        <meta name="description" content="Sign in to your Earnly account to manage your AI monetization platform and view analytics.">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <style>
            /* Modern gradient design matching get-started page */
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
            
            .form-input::placeholder {
                color: #94a3b8;
            }
            
            .testimonial-card {
                background: rgba(15, 23, 42, 0.6);
                border: 1px solid rgba(148, 163, 184, 0.2);
                backdrop-filter: blur(15px);
            }
            
            .signin-btn {
                background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
                transition: all 0.3s ease;
                box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
            }
            
            .signin-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
            }
            
            .floating-animation {
                animation: float 6s ease-in-out infinite;
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
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
                             class="h-10 w-auto">
                    </a>
                    
                    <div class="flex items-center space-x-6">
                        <span class="text-slate-300 text-sm">Don't have an account?</span>
                        <a href="/get-started" class="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium backdrop-blur-sm border border-white/20">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content - Two Column Layout -->
        <div class="py-8 lg:py-12">
            <div class="max-w-7xl mx-auto px-6 lg:px-8 w-full">
                <div class="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                    
                    <!-- Left Side - Welcome Back & Testimonial -->
                    <div class="text-white">
                        <div class="mb-8">
                            <h1 class="text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                Welcome back
                            </h1>
                            <p class="text-xl text-slate-300 mb-8 leading-relaxed">
                                Sign in to your account to continue managing your AI monetization platform
                            </p>
                        </div>
                        
                        <!-- Success Story Testimonial -->
                        <div class="testimonial-card rounded-2xl p-8 floating-animation">
                            <div class="flex items-start space-x-4 mb-6">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" 
                                     class="w-16 h-16 rounded-full border-2 border-green-400/50" alt="Marcus Chen">
                                <div class="flex-1">
                                    <div class="flex items-center space-x-2 mb-2">
                                        <div class="font-bold text-white text-lg">Marcus Chen</div>
                                        <div class="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded-full">
                                            <i class="fas fa-check mr-1"></i>
                                            Verified
                                        </div>
                                    </div>
                                    <div class="text-sm text-slate-400 mb-4">CEO, AutomateAI Solutions</div>
                                </div>
                            </div>
                            <blockquote class="text-slate-200 text-lg leading-relaxed mb-6">
                                "Earnly gave us instant visibility across all AI apps. We hit <span class="text-green-400 font-semibold">500 conversions</span> in our first week through AI-driven offers. It's the future of marketing."
                            </blockquote>
                            
                            <!-- Success Metrics -->
                            <div class="grid grid-cols-3 gap-4 bg-white/5 rounded-xl p-4">
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-green-400">500+</div>
                                    <div class="text-xs text-slate-400">Conversions</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-blue-400">$12.4K</div>
                                    <div class="text-xs text-slate-400">Revenue</div>
                                </div>
                                <div class="text-center">
                                    <div class="text-2xl font-bold text-purple-400">8.7%</div>
                                    <div class="text-xs text-slate-400">CVR</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Side - Sign In Form -->
                    <div class="glass-card rounded-3xl p-8 max-w-lg mx-auto w-full">
                        <div class="text-center mb-6">
                            <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
                                <i class="fas fa-sign-in-alt text-white text-2xl"></i>
                            </div>
                            <h2 class="text-3xl font-bold text-white mb-2">Sign In</h2>
                            <p class="text-slate-400">Access your Earnly account and dashboard</p>
                        </div>

                        <!-- Sign In Form -->
                        <form onsubmit="handleSignin(event)" class="space-y-6">
                            <!-- Email -->
                            <div>
                                <label class="block text-sm font-semibold text-slate-300 mb-3">
                                    Email
                                </label>
                                <div class="relative group">
                                    <input type="email" 
                                           name="email"
                                           required
                                           class="form-input w-full px-4 py-3 pl-12 rounded-xl text-lg"
                                           placeholder="name@example.com"
                                           value="">
                                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <i class="fas fa-envelope text-slate-500 group-focus-within:text-blue-400 transition-colors"></i>
                                    </div>
                                </div>
                            </div>

                            <!-- Password -->
                            <div>
                                <div class="flex items-center justify-between mb-3">
                                    <label class="block text-sm font-semibold text-slate-300">
                                        Password
                                    </label>
                                    <a href="/forgot-password" class="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                                        Forgot password?
                                    </a>
                                </div>
                                <div class="relative group">
                                    <input type="password" 
                                           name="password"
                                           required
                                           class="form-input w-full px-4 py-3 pl-12 pr-14 rounded-xl text-lg"
                                           placeholder="••••••••">
                                    <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <i class="fas fa-lock text-slate-500 group-focus-within:text-blue-400 transition-colors"></i>
                                    </div>
                                    <button type="button" onclick="toggleSigninPassword()" class="absolute inset-y-0 right-0 pr-4 flex items-center">
                                        <i class="fas fa-eye text-slate-500 hover:text-slate-300 transition-colors" id="signin-password-toggle"></i>
                                    </button>
                                </div>
                            </div>

                            <!-- Remember Me -->
                            <div class="flex items-center justify-between">
                                <label class="flex items-center space-x-3 cursor-pointer">
                                    <input type="checkbox" 
                                           name="remember"
                                           class="w-4 h-4 text-blue-600 bg-slate-700 border-slate-500 rounded focus:ring-blue-500 focus:ring-2">
                                    <span class="text-sm text-slate-300">Remember me</span>
                                </label>
                            </div>

                            <!-- Sign In Button -->
                            <button type="submit" 
                                    class="signin-btn w-full text-white py-4 px-6 rounded-xl font-semibold text-lg mt-6">
                                <span class="flex items-center justify-center space-x-2">
                                    <span>Sign in</span>
                                    <i class="fas fa-arrow-right"></i>
                                </span>
                            </button>

                            <!-- Terms Agreement -->
                            <p class="text-xs text-slate-400 text-center leading-relaxed mt-6">
                                By continuing, you agree to Earnly's 
                                <a href="/terms" class="text-blue-400 hover:text-blue-300 underline">Terms of Service</a> 
                                and 
                                <a href="/privacy" class="text-blue-400 hover:text-blue-300 underline">Privacy Policy</a>.
                            </p>

                            <!-- Create Account Link -->
                            <div class="text-center mt-8 pt-6 border-t border-white/10">
                                <p class="text-sm text-slate-400">
                                    Don't have an account? 
                                    <a href="/get-started" class="text-blue-400 hover:text-blue-300 font-semibold transition-colors">Get started</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <!-- JavaScript for Enhanced Functionality -->
        <script>
            function toggleSigninPassword() {
                const passwordInput = document.querySelector('input[name="password"]');
                const toggleIcon = document.getElementById('signin-password-toggle');

                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    toggleIcon.className = 'fas fa-eye-slash text-slate-500 hover:text-slate-300 transition-colors';
                } else {
                    passwordInput.type = 'password';
                    toggleIcon.className = 'fas fa-eye text-slate-500 hover:text-slate-300 transition-colors';
                }
            }

            async function handleSignin(event) {
                event.preventDefault();
                
                const formData = new FormData(event.target);
                const data = {
                    email: formData.get('email'),
                    password: formData.get('password'),
                    remember: formData.get('remember') === 'on'
                };

                // Show loading state
                const submitButton = event.target.querySelector('button[type="submit"]');
                const originalContent = submitButton.innerHTML;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Signing in...';
                submitButton.disabled = true;

                try {
                    // Simulate API call
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    
                    // Show success and redirect
                    submitButton.innerHTML = '<i class="fas fa-check mr-2"></i>Welcome back!';
                    submitButton.className = 'w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold text-lg';
                    
                    setTimeout(() => {
                        // Redirect to dashboard or homepage
                        window.location.href = '/?welcome=back';
                    }, 1500);

                } catch (error) {
                    submitButton.innerHTML = originalContent;
                    submitButton.disabled = false;
                    alert('Sign in failed. Please check your credentials and try again.');
                }
            }

            // Auto-focus email field on page load
            document.addEventListener('DOMContentLoaded', function() {
                document.querySelector('input[name="email"]').focus();
            });
        </script>
    </body>
    </html>
  `)
}