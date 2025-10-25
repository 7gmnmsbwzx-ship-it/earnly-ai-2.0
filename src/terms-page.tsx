import type { Context } from 'hono'

export function termsPage(c: Context) {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Terms of Service - Earnly | AI-Native Monetization Platform</title>
        <meta name="description" content="Terms of Service for Earnly AI-native monetization platform. Review our user agreements, service policies, and legal terms.">
        
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <style>
            /* Professional document styling */
            body {
                background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.7;
            }
            
            .content-container {
                background: white;
                border-radius: 12px;
                box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
                border: 1px solid #e2e8f0;
            }
            
            .section-header {
                color: #1e293b;
                font-weight: 600;
                margin-top: 2rem;
                margin-bottom: 1rem;
                padding-bottom: 0.5rem;
                border-bottom: 2px solid #e2e8f0;
            }
            
            .subsection {
                color: #334155;
                font-weight: 500;
                margin-top: 1.5rem;
                margin-bottom: 0.75rem;
            }
            
            .legal-text {
                color: #475569;
                margin-bottom: 1rem;
                text-align: justify;
            }
            
            .highlight-box {
                background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
                border: 1px solid #3b82f6;
                border-radius: 8px;
                padding: 1rem;
                margin: 1rem 0;
            }
            
            .warning-box {
                background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
                border: 1px solid #f59e0b;
                border-radius: 8px;
                padding: 1rem;
                margin: 1rem 0;
            }
            
            .nav-glass {
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                border-bottom: 1px solid rgba(148, 163, 184, 0.2);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            }
            
            .toc-link {
                display: block;
                padding: 0.5rem 1rem;
                color: #475569;
                text-decoration: none;
                border-radius: 6px;
                transition: all 0.2s ease;
            }
            
            .toc-link:hover {
                background: #f1f5f9;
                color: #1e293b;
            }
            
            ul, ol {
                margin: 1rem 0;
                padding-left: 2rem;
            }
            
            li {
                margin: 0.5rem 0;
                color: #475569;
            }
        </style>
    </head>
    <body class="text-gray-800">
        <!-- Header Navigation -->
        <nav class="nav-glass sticky top-0 z-50 py-4">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
                <div class="flex items-center justify-between">
                    <a href="/" class="flex items-center">
                        <img src="https://github.com/7gmnmsbwzx-ship-it/earnly-assets/blob/main/earnly%20logo.png?raw=true" 
                             alt="Earnly Logo" 
                             class="h-10 w-auto">
                    </a>
                    
                    <div class="flex items-center space-x-6">
                        <a href="/privacy" class="text-slate-600 hover:text-slate-900 transition-colors">Privacy Policy</a>
                        <a href="/get-started" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Main Content -->
        <div class="max-w-6xl mx-auto px-6 lg:px-8 py-12">
            <div class="grid lg:grid-cols-4 gap-8">
                
                <!-- Table of Contents -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-lg p-6 shadow-sm border border-gray-200 sticky top-24">
                        <h3 class="font-semibold text-gray-900 mb-4 flex items-center">
                            <i class="fas fa-list mr-2 text-blue-600"></i>
                            Table of Contents
                        </h3>
                        <nav class="space-y-1">
                            <a href="#service-description" class="toc-link">1. Service Description</a>
                            <a href="#account-registration" class="toc-link">2. Account Registration</a>
                            <a href="#user-conduct" class="toc-link">3. User Conduct</a>
                            <a href="#intellectual-property" class="toc-link">4. Intellectual Property</a>
                            <a href="#payments-revenue" class="toc-link">5. Payments & Revenue</a>
                            <a href="#third-party-services" class="toc-link">6. Third-Party Services</a>
                            <a href="#disclaimer-warranties" class="toc-link">7. Disclaimer of Warranties</a>
                            <a href="#limitation-liability" class="toc-link">8. Limitation of Liability</a>
                            <a href="#changes-terms" class="toc-link">9. Changes to Terms</a>
                            <a href="#termination" class="toc-link">10. Termination</a>
                            <a href="#governing-law" class="toc-link">11. Governing Law</a>
                            <a href="#contact-information" class="toc-link">12. Contact Information</a>
                            <a href="#data-protection" class="toc-link">13. Data Protection</a>
                            <a href="#ai-platform-responsibilities" class="toc-link">14. AI Platform Responsibilities</a>
                        </nav>
                    </div>
                </div>

                <!-- Main Terms Content -->
                <div class="lg:col-span-3">
                    <div class="content-container p-8">
                        <!-- Header -->
                        <div class="text-center mb-8">
                            <h1 class="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
                            <div class="flex items-center justify-center space-x-4 text-sm text-gray-600">
                                <span class="flex items-center">
                                    <i class="fas fa-calendar mr-2"></i>
                                    Last Updated: January 15, 2025
                                </span>
                                <span class="flex items-center">
                                    <i class="fas fa-clock mr-2"></i>
                                    Effective Date: January 15, 2025
                                </span>
                            </div>
                        </div>

                        <div class="highlight-box">
                            <p class="text-blue-800 font-medium mb-2">
                                <i class="fas fa-info-circle mr-2"></i>
                                Important Notice
                            </p>
                            <p class="text-blue-700 text-sm">
                                By accessing or using Earnly's AI-native monetization platform, you agree to be bound by these Terms of Service. 
                                Please read them carefully as they contain important information about your rights and obligations.
                            </p>
                        </div>

                        <!-- 1. Service Description -->
                        <h2 id="service-description" class="section-header text-2xl">1. Service Description</h2>
                        <p class="legal-text">
                            Earnly operates an AI-native monetization platform that intelligently connects advertisers with AI platforms 
                            through contextual product recommendations and advanced machine learning algorithms. Our service facilitates 
                            revenue generation by matching user intent with relevant product offerings across various AI ecosystems, 
                            including but not limited to chatbots, AI assistants, and conversational interfaces.
                        </p>
                        <p class="legal-text">
                            The platform provides real-time optimization, predictive analytics, and comprehensive dashboard tools for 
                            both advertisers seeking to promote their products and AI platform operators looking to monetize their user interactions.
                        </p>

                        <!-- 2. Account Registration -->
                        <h2 id="account-registration" class="section-header text-2xl">2. Account Registration</h2>
                        <p class="legal-text">
                            Certain features of our Service require account registration. When creating an account, you must provide 
                            accurate, complete, and current information. You are responsible for maintaining the confidentiality of your 
                            account credentials and for all activities that occur under your account.
                        </p>
                        <div class="subsection text-lg">Account Requirements:</div>
                        <ul class="legal-text">
                            <li>You must be at least 18 years old or have reached the age of majority in your jurisdiction</li>
                            <li>You must provide a valid email address and company website</li>
                            <li>You must not create multiple accounts to circumvent platform limitations</li>
                            <li>You are responsible for keeping your account information up to date</li>
                        </ul>

                        <!-- 3. User Conduct -->
                        <h2 id="user-conduct" class="section-header text-2xl">3. User Conduct</h2>
                        <p class="legal-text">
                            You agree not to engage in any of the following prohibited activities:
                        </p>
                        <ul class="legal-text">
                            <li>Violating any applicable laws, regulations, or third-party rights</li>
                            <li>Attempting to gain unauthorized access to our systems or other users' accounts</li>
                            <li>Using automated tools, bots, or scripts without explicit written permission</li>
                            <li>Manipulating click tracking, conversion metrics, or revenue attribution systems</li>
                            <li>Interfering with or disrupting the integrity or performance of the Service</li>
                            <li>Uploading or transmitting malicious code, viruses, or harmful content</li>
                            <li>Engaging in fraudulent activities or misrepresenting your identity or affiliation</li>
                        </ul>

                        <!-- 4. Intellectual Property -->
                        <h2 id="intellectual-property" class="section-header text-2xl">4. Intellectual Property</h2>
                        <p class="legal-text">
                            All content, features, and functionality of the Earnly platform, including but not limited to text, graphics, 
                            logos, icons, images, audio clips, video content, software code, and underlying algorithms, are owned by 
                            Earnly and are protected by United States and international copyright, trademark, patent, trade secret, 
                            and other intellectual property laws.
                        </p>
                        <p class="legal-text">
                            You are granted a limited, non-exclusive, non-transferable license to access and use the Service for your 
                            business purposes in accordance with these Terms. You may not copy, modify, distribute, sell, or lease any 
                            part of our Service or included software without our prior written consent.
                        </p>

                        <!-- 5. Payments & Revenue -->
                        <h2 id="payments-revenue" class="section-header text-2xl">5. Payments & Revenue</h2>
                        <p class="legal-text">
                            Revenue sharing, commission payments, and advertiser charges are subject to our current pricing structure 
                            and payment terms as displayed on the platform. All payment amounts, eligibility criteria, and payment 
                            schedules are determined by Earnly and may be modified with appropriate notice.
                        </p>
                        <div class="subsection text-lg">Payment Terms:</div>
                        <ul class="legal-text">
                            <li>Payments are subject to verification and fraud prevention checks</li>
                            <li>Minimum payout thresholds may apply as specified in your account settings</li>
                            <li>Payment processing fees may be deducted from revenue shares</li>
                            <li>Disputed transactions will be investigated and resolved at Earnly's discretion</li>
                            <li>Tax responsibilities are the sole responsibility of the user</li>
                        </ul>

                        <!-- 6. Third-Party Services -->
                        <h2 id="third-party-services" class="section-header text-2xl">6. Third-Party Services</h2>
                        <p class="legal-text">
                            Our Service may contain links to or integrate with third-party websites, applications, or services. 
                            Earnly does not endorse, control, or assume responsibility for any third-party content, privacy policies, 
                            or practices. Your interactions with third-party services are solely between you and the third party.
                        </p>
                        <p class="legal-text">
                            We strongly advise you to review the terms and privacy policies of any third-party services that you access 
                            through our platform.
                        </p>

                        <!-- 7. Disclaimer of Warranties -->
                        <h2 id="disclaimer-warranties" class="section-header text-2xl">7. Disclaimer of Warranties</h2>
                        <div class="warning-box">
                            <p class="text-amber-800 font-medium mb-2">
                                <i class="fas fa-exclamation-triangle mr-2"></i>
                                Important Legal Notice
                            </p>
                            <p class="text-amber-700 text-sm">
                                The Service is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind.
                            </p>
                        </div>
                        <p class="legal-text">
                            EARNLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO 
                            WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. We do not warrant 
                            that the Service will be uninterrupted, error-free, secure, or free from harmful components.
                        </p>

                        <!-- 8. Limitation of Liability -->
                        <h2 id="limitation-liability" class="section-header text-2xl">8. Limitation of Liability</h2>
                        <p class="legal-text">
                            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, EARNLY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, 
                            GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING FROM YOUR USE OF THE SERVICE.
                        </p>
                        <p class="legal-text">
                            In no event shall Earnly's total liability to you for all damages exceed the amount paid by you to Earnly 
                            in the twelve (12) months preceding the claim, or one hundred dollars ($100), whichever is greater.
                        </p>

                        <!-- 9. Changes to Terms -->
                        <h2 id="changes-terms" class="section-header text-2xl">9. Changes to Terms</h2>
                        <p class="legal-text">
                            Earnly reserves the right to modify these Terms at any time. We will notify users of material changes through 
                            the Service, email, or other appropriate means. Your continued use of the Service after such modifications 
                            constitutes acceptance of the updated Terms.
                        </p>
                        <p class="legal-text">
                            We recommend regularly reviewing these Terms to stay informed of any updates or changes.
                        </p>

                        <!-- 10. Termination -->
                        <h2 id="termination" class="section-header text-2xl">10. Termination</h2>
                        <p class="legal-text">
                            Earnly may suspend or terminate your access to the Service at any time, with or without prior notice, 
                            for any reason, including breach of these Terms. Upon termination, your right to use the Service will 
                            cease immediately, and any outstanding payments may be withheld pending resolution of any disputes or violations.
                        </p>

                        <!-- 11. Governing Law -->
                        <h2 id="governing-law" class="section-header text-2xl">11. Governing Law</h2>
                        <p class="legal-text">
                            These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
                            United States, without regard to its conflict of law provisions. Any disputes arising under these Terms 
                            shall be subject to the exclusive jurisdiction of the courts located in Delaware.
                        </p>

                        <!-- 12. Contact Information -->
                        <h2 id="contact-information" class="section-header text-2xl">12. Contact Information</h2>
                        <div class="highlight-box">
                            <p class="text-blue-800 font-medium mb-2">Legal & Support Contact</p>
                            <div class="text-blue-700 text-sm space-y-1">
                                <p><strong>Legal Inquiries:</strong> legal@earnly.app</p>
                                <p><strong>General Support:</strong> support@earnly.app</p>
                                <p><strong>Business Inquiries:</strong> business@earnly.app</p>
                                <p><strong>Address:</strong> Earnly Inc., 123 AI Innovation Drive, San Francisco, CA 94107</p>
                            </div>
                        </div>

                        <!-- 13. Data Protection -->
                        <h2 id="data-protection" class="section-header text-2xl">13. Data Protection & Privacy</h2>
                        <p class="legal-text">
                            Earnly is committed to protecting user privacy and personal data. Our platform includes built-in data 
                            sanitization tools and privacy protection mechanisms designed to minimize the collection and processing 
                            of personally identifiable information (PII).
                        </p>
                        <div class="subsection text-lg">Data Handling Requirements:</div>
                        <ul class="legal-text">
                            <li>AI platforms must implement our recommended PII sanitization tools before API calls</li>
                            <li>Users are responsible for ensuring compliance with applicable privacy laws (GDPR, CCPA, etc.)</li>
                            <li>Earnly does not inspect or store conversation content beyond what is necessary for service operation</li>
                            <li>Data retention periods and deletion procedures are outlined in our Privacy Policy</li>
                        </ul>

                        <!-- 14. AI Platform Responsibilities -->
                        <h2 id="ai-platform-responsibilities" class="section-header text-2xl">14. AI Platform Responsibilities</h2>
                        <p class="legal-text">
                            AI platforms and integrators using Earnly's monetization services have specific responsibilities and 
                            warrant that their use of our Service complies with applicable laws and best practices.
                        </p>
                        <div class="subsection text-lg">Platform Obligations:</div>
                        <ul class="legal-text">
                            <li>Ensure all queries and content sent to Earnly are user-initiated and consensual</li>
                            <li>Do not include sensitive, confidential, or inappropriate content without explicit user consent</li>
                            <li>Implement appropriate disclosure when AI-generated recommendations include sponsored content</li>
                            <li>Maintain transparency with users about monetization through AI recommendations</li>
                            <li>Follow industry best practices for AI safety and responsible AI deployment</li>
                        </ul>
                        <div class="warning-box">
                            <p class="text-amber-800 font-medium mb-2">
                                <i class="fas fa-shield-alt mr-2"></i>
                                Platform Warranty
                            </p>
                            <p class="text-amber-700 text-sm">
                                By using our API, AI platforms warrant they have obtained necessary user consents and are complying 
                                with all applicable privacy laws and platform policies in their jurisdiction.
                            </p>
                        </div>

                        <!-- Footer -->
                        <div class="border-t border-gray-200 mt-12 pt-8">
                            <div class="text-center text-sm text-gray-600">
                                <p class="mb-4">
                                    <strong>Earnly Inc.</strong> - AI-Native Monetization Platform
                                </p>
                                <p class="mb-4">
                                    For questions about these Terms of Service, please contact us at 
                                    <a href="mailto:legal@earnly.app" class="text-blue-600 hover:text-blue-800">legal@earnly.app</a>
                                </p>
                                <div class="flex justify-center space-x-6 text-xs">
                                    <a href="/privacy" class="text-blue-600 hover:text-blue-800">Privacy Policy</a>
                                    <a href="/get-started" class="text-blue-600 hover:text-blue-800">Get Started</a>
                                    <a href="/" class="text-blue-600 hover:text-blue-800">Back to Home</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- JavaScript for smooth scrolling and interactions -->
        <script>
            // Smooth scroll for table of contents links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                        
                        // Update active link
                        document.querySelectorAll('.toc-link').forEach(link => {
                            link.classList.remove('bg-blue-50', 'text-blue-700', 'border-l-4', 'border-blue-600');
                        });
                        this.classList.add('bg-blue-50', 'text-blue-700', 'border-l-4', 'border-blue-600');
                    }
                });
            });

            // Highlight current section in table of contents on scroll
            window.addEventListener('scroll', function() {
                const sections = document.querySelectorAll('h2[id]');
                const scrollPos = window.scrollY + 100;
                
                sections.forEach(section => {
                    if (scrollPos >= section.offsetTop) {
                        const id = section.getAttribute('id');
                        const correspondingLink = document.querySelector(\`a[href="#\${id}"]\`);
                        
                        // Remove active class from all links
                        document.querySelectorAll('.toc-link').forEach(link => {
                            link.classList.remove('bg-blue-50', 'text-blue-700', 'border-l-4', 'border-blue-600');
                        });
                        
                        // Add active class to current link
                        if (correspondingLink) {
                            correspondingLink.classList.add('bg-blue-50', 'text-blue-700', 'border-l-4', 'border-blue-600');
                        }
                    }
                });
            });
        </script>
    </body>
    </html>
  `)
}