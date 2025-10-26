import type { Context } from 'hono'

export function privacyPage(c: Context) {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Privacy Policy - Earnly</title>
        <meta name="description" content="Privacy Policy for Earnly - Learn how we protect your data and privacy on our AI-native monetization platform.">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <style>
            body {
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                color: #e2e8f0;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                line-height: 1.7;
            }
            
            .content-container {
                background: rgba(30, 41, 59, 0.8);
                backdrop-filter: blur(20px);
                border: 1px solid rgba(148, 163, 184, 0.2);
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
            }
            
            .section-title {
                color: #3b82f6;
                font-weight: 700;
                margin: 2rem 0 1rem 0;
                font-size: 1.25rem;
            }
            
            .subsection {
                margin: 1.5rem 0;
            }
            
            .highlight {
                color: #60a5fa;
                font-weight: 600;
            }
            
            .important-notice {
                background: rgba(59, 130, 246, 0.1);
                border-left: 4px solid #3b82f6;
                padding: 1rem;
                margin: 1.5rem 0;
                border-radius: 0.5rem;
            }
            
            .security-notice {
                background: rgba(16, 185, 129, 0.1);
                border-left: 4px solid #10b981;
                padding: 1rem;
                margin: 1.5rem 0;
                border-radius: 0.5rem;
            }
        </style>
    </head>
    <body>
        <!-- Navigation -->
        <nav class="backdrop-blur-sm bg-white/5 border-b border-white/10 py-4">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="flex items-center justify-between">
                    <a href="/" class="flex items-center">
                        <img src="https://github.com/7gmnmsbwzx-ship-it/earnly-assets/blob/main/earnly%20logo.png?raw=true" 
                             alt="Earnly Logo" 
                             class="h-8 w-auto">
                    </a>
                    
                    <div class="flex items-center space-x-4">
                        <a href="/" class="text-slate-300 hover:text-white transition-colors">Home</a>
                        <a href="/terms" class="text-slate-300 hover:text-white transition-colors">Terms of Service</a>
                        <a href="/get-started" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <div class="max-w-4xl mx-auto px-6 lg:px-8 py-12">
            <div class="content-container rounded-3xl p-8 lg:p-12">
                <!-- Header -->
                <div class="text-center mb-12">
                    <h1 class="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
                    <p class="text-slate-400 text-lg">Last Updated: January 24, 2025</p>
                </div>

                <!-- Introduction -->
                <div class="mb-8">
                    <p class="text-lg text-slate-300 leading-relaxed">
                        At Earnly, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our AI-native monetization platform.
                    </p>
                    
                    <div class="important-notice">
                        <p class="font-semibold text-blue-300 mb-2"><i class="fas fa-shield-alt mr-2"></i>Your Privacy Matters</p>
                        <p>We believe in transparency and give you control over your data. This policy explains your rights and how we protect your information.</p>
                    </div>
                </div>

                <!-- Table of Contents -->
                <div class="mb-12 bg-slate-800/50 rounded-xl p-6">
                    <h3 class="text-xl font-bold text-white mb-4">Table of Contents</h3>
                    <div class="grid md:grid-cols-2 gap-2 text-sm">
                        <a href="#information-we-collect" class="text-blue-400 hover:text-blue-300 transition-colors">1. Information We Collect</a>
                        <a href="#how-we-use" class="text-blue-400 hover:text-blue-300 transition-colors">2. How We Use Your Information</a>
                        <a href="#data-sharing" class="text-blue-400 hover:text-blue-300 transition-colors">3. Information Sharing</a>
                        <a href="#data-security" class="text-blue-400 hover:text-blue-300 transition-colors">4. Data Security</a>
                        <a href="#your-rights" class="text-blue-400 hover:text-blue-300 transition-colors">5. Your Rights and Choices</a>
                        <a href="#cookies" class="text-blue-400 hover:text-blue-300 transition-colors">6. Cookies and Tracking</a>
                        <a href="#international-transfers" class="text-blue-400 hover:text-blue-300 transition-colors">7. International Data Transfers</a>
                        <a href="#data-retention" class="text-blue-400 hover:text-blue-300 transition-colors">8. Data Retention</a>
                        <a href="#children-privacy" class="text-blue-400 hover:text-blue-300 transition-colors">9. Children's Privacy</a>
                        <a href="#changes" class="text-blue-400 hover:text-blue-300 transition-colors">10. Changes to This Policy</a>
                        <a href="#contact" class="text-blue-400 hover:text-blue-300 transition-colors">11. Contact Information</a>
                    </div>
                </div>

                <!-- 1. Information We Collect -->
                <section id="information-we-collect" class="subsection">
                    <h2 class="section-title">1. Information We Collect</h2>
                    
                    <div class="subsection">
                        <h4 class="font-semibold text-blue-300 mb-2">Information You Provide Directly:</h4>
                        <ul class="list-disc pl-6 space-y-2 text-slate-300">
                            <li><span class="highlight">Account Information:</span> Name, email address, company information, website URL</li>
                            <li><span class="highlight">Payment Information:</span> Billing details, payment method information (processed securely through third-party providers)</li>
                            <li><span class="highlight">Profile Information:</span> User preferences, communication settings, and profile customizations</li>
                            <li><span class="highlight">Support Communications:</span> Messages, feedback, and support requests you send to us</li>
                        </ul>
                    </div>
                    
                    <div class="subsection">
                        <h4 class="font-semibold text-blue-300 mb-2">Information Collected Automatically:</h4>
                        <ul class="list-disc pl-6 space-y-2 text-slate-300">
                            <li><span class="highlight">Usage Data:</span> How you interact with our platform, features used, time spent</li>
                            <li><span class="highlight">Technical Information:</span> IP address, browser type, device information, operating system</li>
                            <li><span class="highlight">Performance Data:</span> API usage statistics, response times, error logs</li>
                            <li><span class="highlight">Analytics Data:</span> Aggregated usage patterns and platform performance metrics</li>
                        </ul>
                    </div>
                    
                    <div class="subsection">
                        <h4 class="font-semibold text-blue-300 mb-2">AI Platform Integration Data:</h4>
                        <ul class="list-disc pl-6 space-y-2 text-slate-300">
                            <li><span class="highlight">Contextual Information:</span> Sanitized conversation context for recommendation matching</li>
                            <li><span class="highlight">Intent Analysis:</span> User intent classification and behavioral patterns</li>
                            <li><span class="highlight">Interaction Data:</span> Click-through rates, conversion metrics, and engagement statistics</li>
                            <li><span class="highlight">Platform Metadata:</span> API endpoint usage, integration performance data</li>
                        </ul>
                    </div>
                </section>

                <!-- 2. How We Use Your Information -->
                <section id="how-we-use" class="subsection">
                    <h2 class="section-title">2. How We Use Your Information</h2>
                    <p class="mb-4">We use your information for the following purposes:</p>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 class="font-semibold text-blue-300 mb-2">Service Delivery:</h4>
                            <ul class="list-disc pl-4 space-y-1 text-sm text-slate-300">
                                <li>Provide AI-powered product recommendations</li>
                                <li>Process payments and manage billing</li>
                                <li>Maintain and improve platform performance</li>
                                <li>Deliver customer support and assistance</li>
                                <li>Send service-related communications</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-blue-300 mb-2">Analytics and Optimization:</h4>
                            <ul class="list-disc pl-4 space-y-1 text-sm text-slate-300">
                                <li>Analyze usage patterns and user behavior</li>
                                <li>Optimize recommendation algorithms</li>
                                <li>Improve platform functionality and features</li>
                                <li>Generate performance reports and insights</li>
                                <li>Conduct research and development</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="subsection">
                        <h4 class="font-semibold text-blue-300 mb-2">Legal and Compliance:</h4>
                        <ul class="list-disc pl-6 space-y-2 text-slate-300">
                            <li>Comply with legal obligations and regulatory requirements</li>
                            <li>Protect against fraud, abuse, and security threats</li>
                            <li>Enforce our Terms of Service and other policies</li>
                            <li>Respond to legal requests and law enforcement inquiries</li>
                        </ul>
                    </div>
                </section>

                <!-- 3. Information Sharing -->
                <section id="data-sharing" class="subsection">
                    <h2 class="section-title">3. Information Sharing and Disclosure</h2>
                    <p class="mb-4">We do not sell your personal information. We may share your information in the following limited circumstances:</p>
                    
                    <div class="subsection">
                        <h4 class="font-semibold text-blue-300 mb-2">Service Providers:</h4>
                        <ul class="list-disc pl-6 space-y-2 text-slate-300">
                            <li><span class="highlight">Payment Processing:</span> Secure payment processors for transaction handling</li>
                            <li><span class="highlight">Cloud Infrastructure:</span> Hosting and data storage providers with strong security standards</li>
                            <li><span class="highlight">Analytics Services:</span> Performance monitoring and analytics tools</li>
                            <li><span class="highlight">Customer Support:</span> Third-party support platforms for ticket management</li>
                        </ul>
                        <p class="mt-4 text-sm text-slate-400">All service providers are contractually bound to protect your information and use it only for specified purposes.</p>
                    </div>
                    
                    <div class="subsection">
                        <h4 class="font-semibold text-blue-300 mb-2">Business Transfers:</h4>
                        <p class="text-slate-300">In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction, subject to the same privacy protections.</p>
                    </div>
                    
                    <div class="subsection">
                        <h4 class="font-semibold text-blue-300 mb-2">Legal Requirements:</h4>
                        <p class="text-slate-300">We may disclose your information when required by law, court order, or to protect our rights, property, or the safety of our users.</p>
                    </div>
                </section>

                <!-- 4. Data Security -->
                <section id="data-security" class="subsection">
                    <h2 class="section-title">4. Data Security and Protection</h2>
                    <p class="mb-4">We implement comprehensive security measures to protect your information:</p>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 class="font-semibold text-blue-300 mb-2">Technical Safeguards:</h4>
                            <ul class="list-disc pl-4 space-y-1 text-sm text-slate-300">
                                <li>End-to-end encryption for data in transit</li>
                                <li>AES-256 encryption for data at rest</li>
                                <li>Multi-factor authentication (MFA)</li>
                                <li>Regular security audits and penetration testing</li>
                                <li>Automated vulnerability scanning</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-blue-300 mb-2">Operational Security:</h4>
                            <ul class="list-disc pl-4 space-y-1 text-sm text-slate-300">
                                <li>Role-based access controls (RBAC)</li>
                                <li>Employee security training programs</li>
                                <li>Incident response and recovery procedures</li>
                                <li>Regular data backup and recovery testing</li>
                                <li>Secure development lifecycle practices</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="security-notice">
                        <p class="font-semibold text-green-300 mb-2"><i class="fas fa-lock mr-2"></i>Security Certifications</p>
                        <p>Our platform maintains SOC 2 Type II compliance and follows industry-standard security frameworks including NIST and ISO 27001 guidelines.</p>
                    </div>
                </section>

                <!-- 5. Your Rights and Choices -->
                <section id="your-rights" class="subsection">
                    <h2 class="section-title">5. Your Rights and Choices</h2>
                    <p class="mb-4">You have the following rights regarding your personal information:</p>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 class="font-semibold text-blue-300 mb-2">Data Access Rights:</h4>
                            <ul class="list-disc pl-4 space-y-1 text-sm text-slate-300">
                                <li>Access your personal information</li>
                                <li>Download a copy of your data</li>
                                <li>Request information about data processing</li>
                                <li>View data sharing practices</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-blue-300 mb-2">Data Control Rights:</h4>
                            <ul class="list-disc pl-4 space-y-1 text-sm text-slate-300">
                                <li>Correct inaccurate information</li>
                                <li>Delete your personal data</li>
                                <li>Restrict data processing</li>
                                <li>Object to certain uses of data</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="subsection">
                        <h4 class="font-semibold text-blue-300 mb-2">How to Exercise Your Rights:</h4>
                        <ul class="list-disc pl-6 space-y-2 text-slate-300">
                            <li><span class="highlight">Account Settings:</span> Manage most preferences directly in your account dashboard</li>
                            <li><span class="highlight">Email Requests:</span> Contact privacy@getearnly.com for data requests</li>
                            <li><span class="highlight">Support Portal:</span> Submit requests through our customer support system</li>
                            <li><span class="highlight">Response Time:</span> We respond to verified requests within 30 days</li>
                        </ul>
                    </div>
                </section>

                <!-- 6. Cookies and Tracking -->
                <section id="cookies" class="subsection">
                    <h2 class="section-title">6. Cookies and Tracking Technologies</h2>
                    <p class="mb-4">We use cookies and similar technologies to enhance your experience:</p>
                    
                    <div class="subsection">
                        <h4 class="font-semibold text-blue-300 mb-2">Types of Cookies:</h4>
                        <ul class="list-disc pl-6 space-y-2 text-slate-300">
                            <li><span class="highlight">Essential Cookies:</span> Required for basic platform functionality and security</li>
                            <li><span class="highlight">Performance Cookies:</span> Help us understand how you use our platform</li>
                            <li><span class="highlight">Functionality Cookies:</span> Remember your preferences and settings</li>
                            <li><span class="highlight">Analytics Cookies:</span> Provide insights into platform usage and performance</li>
                        </ul>
                    </div>
                    
                    <div class="subsection">
                        <h4 class="font-semibold text-blue-300 mb-2">Managing Cookies:</h4>
                        <p class="text-slate-300 mb-2">You can control cookie settings through:</p>
                        <ul class="list-disc pl-6 space-y-1 text-slate-300">
                            <li>Your browser settings and preferences</li>
                            <li>Our cookie consent banner (where applicable)</li>
                            <li>Platform privacy settings in your account</li>
                            <li>Third-party opt-out tools for analytics services</li>
                        </ul>
                    </div>
                </section>

                <!-- 7. International Data Transfers -->
                <section id="international-transfers" class="subsection">
                    <h2 class="section-title">7. International Data Transfers</h2>
                    <p class="mb-4">Your information may be processed in countries outside your residence:</p>
                    
                    <div class="subsection">
                        <h4 class="font-semibold text-blue-300 mb-2">Transfer Safeguards:</h4>
                        <ul class="list-disc pl-6 space-y-2 text-slate-300">
                            <li><span class="highlight">Adequacy Decisions:</span> Transfers to countries with equivalent privacy protection</li>
                            <li><span class="highlight">Standard Contractual Clauses:</span> EU-approved contract terms for international transfers</li>
                            <li><span class="highlight">Binding Corporate Rules:</span> Internal policies ensuring consistent data protection</li>
                            <li><span class="highlight">Certification Schemes:</span> Privacy Shield and similar certification programs</li>
                        </ul>
                    </div>
                </section>

                <!-- 8. Data Retention -->
                <section id="data-retention" class="subsection">
                    <h2 class="section-title">8. Data Retention</h2>
                    <p class="mb-4">We retain your information only as long as necessary:</p>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 class="font-semibold text-blue-300 mb-2">Account Data:</h4>
                            <ul class="list-disc pl-4 space-y-1 text-sm text-slate-300">
                                <li>Active accounts: Duration of service use</li>
                                <li>Inactive accounts: 2 years after last activity</li>
                                <li>Deleted accounts: 30 days (recovery period)</li>
                                <li>Payment records: 7 years (legal requirement)</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-blue-300 mb-2">Platform Data:</h4>
                            <ul class="list-disc pl-4 space-y-1 text-sm text-slate-300">
                                <li>Analytics data: 2 years maximum</li>
                                <li>Performance logs: 1 year maximum</li>
                                <li>Security logs: 1 year maximum</li>
                                <li>Aggregated data: May be retained indefinitely</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- 9. Children's Privacy -->
                <section id="children-privacy" class="subsection">
                    <h2 class="section-title">9. Children's Privacy</h2>
                    <p class="mb-4">Our platform is designed for business users and is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.</p>
                    
                    <p class="text-slate-300">If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.</p>
                </section>

                <!-- 10. Changes to This Policy -->
                <section id="changes" class="subsection">
                    <h2 class="section-title">10. Changes to This Privacy Policy</h2>
                    <p class="mb-4">We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.</p>
                    
                    <div class="subsection">
                        <h4 class="font-semibold text-blue-300 mb-2">Notification of Changes:</h4>
                        <ul class="list-disc pl-6 space-y-2 text-slate-300">
                            <li><span class="highlight">Email Notification:</span> For material changes affecting your rights</li>
                            <li><span class="highlight">Platform Notice:</span> Prominent notice on our website</li>
                            <li><span class="highlight">Version History:</span> Previous versions available upon request</li>
                            <li><span class="highlight">Effective Date:</span> Changes become effective 30 days after notice</li>
                        </ul>
                    </div>
                </section>

                <!-- 11. Contact Information -->
                <section id="contact" class="subsection">
                    <h2 class="section-title">11. Contact Information</h2>
                    <p class="mb-4">For questions about this Privacy Policy or your privacy rights, please contact us:</p>
                    
                    <div class="grid md:grid-cols-2 gap-6 bg-slate-800/50 rounded-xl p-6">
                        <div>
                            <h4 class="font-semibold text-blue-300 mb-2">Privacy Officer:</h4>
                            <p class="text-slate-300">
                                <i class="fas fa-envelope mr-2"></i>privacy@getearnly.com<br>
                                <i class="fas fa-phone mr-2"></i>+1 (555) 123-4567<br>
                                <i class="fas fa-clock mr-2"></i>Response within 48 hours
                            </p>
                        </div>
                        <div>
                            <h4 class="font-semibold text-blue-300 mb-2">Data Protection Officer:</h4>
                            <p class="text-slate-300">
                                <i class="fas fa-envelope mr-2"></i>dpo@getearnly.com<br>
                                <i class="fas fa-globe mr-2"></i>https://getearnly.com/privacy-rights<br>
                                <i class="fas fa-shield-alt mr-2"></i>GDPR & CCPA compliance
                            </p>
                        </div>
                    </div>
                    
                    <div class="mt-6 p-4 bg-blue-900/30 rounded-lg">
                        <p class="text-sm text-blue-300">
                            <i class="fas fa-info-circle mr-2"></i>
                            <strong>Last Updated:</strong> January 24, 2025 | 
                            <strong>Version:</strong> 1.0 | 
                            <strong>Next Review:</strong> July 24, 2025
                        </p>
                    </div>
                </section>
            </div>
        </div>

        <!-- Footer -->
        <footer class="border-t border-white/10 py-8 mt-12">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="flex flex-col md:flex-row justify-between items-center">
                    <div class="flex items-center space-x-6 mb-4 md:mb-0">
                        <img src="https://github.com/7gmnmsbwzx-ship-it/earnly-assets/blob/main/earnly%20logo.png?raw=true" 
                             alt="Earnly Logo" 
                             class="h-6 w-auto">
                        <span class="text-slate-400">© 2025 Earnly. All rights reserved.</span>
                    </div>
                    <div class="flex items-center space-x-6 text-sm">
                        <a href="/terms" class="text-slate-400 hover:text-white transition-colors">Terms</a>
                        <a href="/privacy" class="text-blue-400 hover:text-blue-300 transition-colors">Privacy</a>
                        <a href="/contact" class="text-slate-400 hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>

        <!-- Smooth Scrolling for Anchor Links -->
        <script>
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        </script>
    </body>
    </html>
  `)
}