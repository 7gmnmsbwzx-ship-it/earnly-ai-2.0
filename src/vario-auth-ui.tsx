/**
 * Vario™ Authentication UI Component
 * Google Sign-In and Platform Connection Interface
 */

export function VarioAuthUI() {
    return `
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
                    <!-- YouTube -->
                    <div class="platform-connection-card p-4 rounded-lg border-2" style="border-color: var(--border-color);">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background: #FF0000;">
                                    <i class="fab fa-youtube text-white text-xl"></i>
                                </div>
                                <div>
                                    <div class="font-semibold" style="color: var(--text-primary);">YouTube</div>
                                    <div class="text-xs" style="color: var(--text-muted);">Videos & Subscriptions</div>
                                </div>
                            </div>
                            <div id="youtube-status" class="text-xs px-2 py-1 rounded" style="background: var(--accent-bg); color: var(--text-muted);">
                                Not Connected
                            </div>
                        </div>
                        <button 
                            id="youtube-connect-btn"
                            onclick="connectPlatform('youtube')"
                            class="w-full py-2 rounded-lg text-sm font-semibold transition-all"
                            style="background: var(--vario-gradient); color: white;"
                        >
                            Connect YouTube
                        </button>
                    </div>

                    <!-- Reddit -->
                    <div class="platform-connection-card p-4 rounded-lg border-2" style="border-color: var(--border-color);">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background: #FF4500;">
                                    <i class="fab fa-reddit text-white text-xl"></i>
                                </div>
                                <div>
                                    <div class="font-semibold" style="color: var(--text-primary);">Reddit</div>
                                    <div class="text-xs" style="color: var(--text-muted);">Posts & Communities</div>
                                </div>
                            </div>
                            <div id="reddit-status" class="text-xs px-2 py-1 rounded" style="background: var(--accent-bg); color: var(--text-muted);">
                                Not Connected
                            </div>
                        </div>
                        <button 
                            id="reddit-connect-btn"
                            onclick="connectPlatform('reddit')"
                            class="w-full py-2 rounded-lg text-sm font-semibold transition-all"
                            style="background: var(--vario-gradient); color: white;"
                        >
                            Connect Reddit
                        </button>
                    </div>

                    <!-- Pinterest -->
                    <div class="platform-connection-card p-4 rounded-lg border-2" style="border-color: var(--border-color);">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background: #E60023;">
                                    <i class="fab fa-pinterest text-white text-xl"></i>
                                </div>
                                <div>
                                    <div class="font-semibold" style="color: var(--text-primary);">Pinterest</div>
                                    <div class="text-xs" style="color: var(--text-muted);">Pins & Boards</div>
                                </div>
                            </div>
                            <div id="pinterest-status" class="text-xs px-2 py-1 rounded" style="background: var(--accent-bg); color: var(--text-muted);">
                                Not Connected
                            </div>
                        </div>
                        <button 
                            id="pinterest-connect-btn"
                            onclick="connectPlatform('pinterest')"
                            class="w-full py-2 rounded-lg text-sm font-semibold transition-all"
                            style="background: var(--vario-gradient); color: white;"
                        >
                            Connect Pinterest
                        </button>
                    </div>

                    <!-- Twitter/X -->
                    <div class="platform-connection-card p-4 rounded-lg border-2" style="border-color: var(--border-color);">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background: #1DA1F2;">
                                    <i class="fab fa-twitter text-white text-xl"></i>
                                </div>
                                <div>
                                    <div class="font-semibold" style="color: var(--text-primary);">Twitter / X</div>
                                    <div class="text-xs" style="color: var(--text-muted);">Tweets & Timeline</div>
                                </div>
                            </div>
                            <div id="twitter-status" class="text-xs px-2 py-1 rounded" style="background: var(--accent-bg); color: var(--text-muted);">
                                Not Connected
                            </div>
                        </div>
                        <button 
                            id="twitter-connect-btn"
                            onclick="connectPlatform('twitter')"
                            class="w-full py-2 rounded-lg text-sm font-semibold transition-all"
                            style="background: var(--vario-gradient); color: white;"
                        >
                            Connect Twitter
                        </button>
                    </div>

                    <!-- Instagram -->
                    <div class="platform-connection-card p-4 rounded-lg border-2" style="border-color: var(--border-color);">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-lg flex items-center justify-center vario-gradient">
                                    <i class="fab fa-instagram text-white text-xl"></i>
                                </div>
                                <div>
                                    <div class="font-semibold" style="color: var(--text-primary);">Instagram</div>
                                    <div class="text-xs" style="color: var(--text-muted);">Photos & Stories</div>
                                </div>
                            </div>
                            <div id="instagram-status" class="text-xs px-2 py-1 rounded" style="background: var(--accent-bg); color: var(--text-muted);">
                                Not Connected
                            </div>
                        </div>
                        <button 
                            id="instagram-connect-btn"
                            onclick="connectPlatform('instagram')"
                            class="w-full py-2 rounded-lg text-sm font-semibold transition-all"
                            style="background: var(--vario-gradient); color: white;"
                        >
                            Connect Instagram
                        </button>
                    </div>

                    <!-- TikTok -->
                    <div class="platform-connection-card p-4 rounded-lg border-2" style="border-color: var(--border-color);">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 rounded-lg flex items-center justify-center" style="background: #000000;">
                                    <i class="fab fa-tiktok text-white text-xl"></i>
                                </div>
                                <div>
                                    <div class="font-semibold" style="color: var(--text-primary);">TikTok</div>
                                    <div class="text-xs" style="color: var(--text-muted);">Short Videos</div>
                                </div>
                            </div>
                            <div id="tiktok-status" class="text-xs px-2 py-1 rounded" style="background: var(--accent-bg); color: var(--text-muted);">
                                Not Connected
                            </div>
                        </div>
                        <button 
                            id="tiktok-connect-btn"
                            onclick="connectPlatform('tiktok')"
                            class="w-full py-2 rounded-lg text-sm font-semibold transition-all"
                            style="background: var(--vario-gradient); color: white;"
                        >
                            Connect TikTok
                        </button>
                    </div>
                </div>

                <div class="mt-6 p-4 rounded-lg" style="background: var(--vario-gradient-subtle);">
                    <div class="flex items-start space-x-3">
                        <i class="fas fa-shield-alt text-2xl" style="color: var(--vario-accent);"></i>
                        <div>
                            <div class="font-semibold mb-1" style="color: var(--text-primary);">🔒 Secure & Private</div>
                            <div class="text-sm" style="color: var(--text-secondary);">
                                Your OAuth tokens are encrypted and stored securely. You can disconnect any platform at any time. 
                                We never access your private data without permission.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
