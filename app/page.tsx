'use client';

import { useState, useEffect } from 'react';

declare global {
  interface Window {
    lm_intake: (id: string, scriptId: string, options: any) => void;
  }
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLawmaticsForm = () => {
    window.open('https://app.lawmatics.com/forms/share/2a7cbed9-37bd-4ca3-a772-877253eac3f2', '_blank');
  };

  const handleScheduling = () => {
    window.open('https://app.lawmatics.com/appointment-calendar/MzI0NTg=%7CWyIxNDIwNSJd%7CInpvb20i', '_blank');
  };

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically integrate with your newsletter service
      // For now, we'll just show an alert
      alert(`Thank you for subscribing with email: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-accent-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-secondary-500">MHSB</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-secondary-400 hover:text-primary-500 transition-colors duration-300">Services</a>
              <a href="#expertise" className="text-secondary-400 hover:text-primary-500 transition-colors duration-300">Expertise</a>
              <a href="#contact" className="text-secondary-400 hover:text-primary-500 transition-colors duration-300">Contact</a>
              <button
                onClick={handleLawmaticsForm}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover-lift shadow-lg"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2"
            >
              <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-accent-200">
              <div className="px-6 py-4 space-y-4">
                <a
                  href="#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-secondary-400 hover:text-primary-500 transition-colors duration-300"
                >
                  Services
                </a>
                <a
                  href="#expertise"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-secondary-400 hover:text-primary-500 transition-colors duration-300"
                >
                  Expertise
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-secondary-400 hover:text-primary-500 transition-colors duration-300"
                >
                  Contact
                </a>
                <button
                  onClick={() => {
                    handleLawmaticsForm();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover-lift shadow-lg"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 px-6 sm:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="text-secondary-500">Transform Your</span>
              <br />
              <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">Legal Practice</span>
            </h1>
            <p className="text-xl sm:text-2xl text-secondary-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Expert legal tech consultants specializing in CRM implementation, case management systems, practice management platforms, and AI solutions that drive efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <button
                onClick={handleScheduling}
                className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 hover-lift shadow-xl"
              >
                Schedule Consultation
              </button>
              <a
                href="#services"
                className="border-2 border-secondary-300 text-secondary-500 px-10 py-4 rounded-xl text-lg font-semibold hover:border-primary-500 hover:text-primary-500 transition-all duration-300 hover-lift"
              >
                View Our Services
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover-lift shadow-lg border border-accent-200">
              <div className="text-4xl font-bold text-primary-500 mb-2">250+</div>
              <div className="text-secondary-400">Law Firms Transformed</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover-lift shadow-lg border border-accent-200">
              <div className="text-4xl font-bold text-primary-500 mb-2">98%</div>
              <div className="text-secondary-400">Client Satisfaction</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover-lift shadow-lg border border-accent-200">
              <div className="text-4xl font-bold text-primary-500 mb-2">15+</div>
              <div className="text-secondary-400">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 sm:px-8 bg-secondary-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-secondary-500 mb-6">Our Expertise</h2>
            <p className="text-xl text-secondary-400 max-w-3xl mx-auto">
              Comprehensive legal technology solutions designed to streamline your practice and enhance client service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 hover-lift shadow-lg border border-accent-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-500 mb-4">CRM Solutions</h3>
              <p className="text-secondary-400">Implement and optimize customer relationship management systems tailored for legal practices.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover-lift shadow-lg border border-accent-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-500 mb-4">Case Management</h3>
              <p className="text-secondary-400">Streamline case workflows with advanced management systems and automated processes.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover-lift shadow-lg border border-accent-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-500 mb-4">AI Adoption and Integration</h3>
              <p className="text-secondary-400">Strategic implementation of artificial intelligence to automate research, document review, and client communications.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 hover-lift shadow-lg border border-accent-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary-500 mb-4">Agent Readiness Audits</h3>
              <p className="text-secondary-400">Comprehensive benchmarking and opportunity mapping to assess your firm's readiness for AI agent implementation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 px-6 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-secondary-500 mb-8">Why Choose MHSB?</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-500 mb-2">Deep Legal Industry Knowledge</h3>
                    <p className="text-secondary-400">15+ years specializing exclusively in legal technology implementations and optimizations.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-500 mb-2">Cutting-Edge AI Solutions</h3>
                    <p className="text-secondary-400">Leading experts in implementing AI tools that revolutionize legal research and document processing.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-500 mb-2">Proven Track Record</h3>
                    <p className="text-secondary-400">Successfully transformed 250+ law firms with 98% client satisfaction and measurable ROI improvements.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary-500 mb-2">End-to-End Support</h3>
                    <p className="text-secondary-400">From consultation to implementation, training, and ongoing support - we're with you every step.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-3xl"></div>
                <div className="relative">
                  <blockquote className="text-2xl text-secondary-500 font-medium mb-6 leading-relaxed">
                    "MHSB transformed our practice with their CRM implementation. We've seen a 36% increase in efficiency and our client satisfaction has never been higher."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">JF</span>
                    </div>
                    <div>
                      <div className="font-bold text-secondary-500">J.F.</div>
                      <div className="text-secondary-400">Managing Partner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 sm:px-8 bg-gradient-to-br from-secondary-500 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-secondary-200 mb-12 leading-relaxed">
            Join 250+ law firms that have revolutionized their operations with our expert technology consulting.
            Schedule your free consultation today and discover how we can help you achieve unprecedented efficiency and growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <button
              onClick={handleScheduling}
              className="bg-white text-secondary-500 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-accent-50 transition-all duration-300 hover-lift shadow-xl"
            >
              Schedule Free Consultation
            </button>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated with Legal Tech Insights</h3>
            <p className="text-secondary-200 mb-6">Get the latest trends, case studies, and implementation guides delivered to your inbox.</p>
            <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg text-secondary-500 placeholder-secondary-300 focus:outline-none focus:ring-2 focus:ring-accent-300"
              />
              <button
                type="submit"
                className="bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-all duration-300 hover-lift"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-16 border-t border-white/20">
            <div className="text-center px-4">
              <div className="text-2xl lg:text-3xl font-bold text-accent-300 mb-3">
                <a href="mailto:info@mhsbsolutions.com" className="hover:text-white transition-colors break-words">
                  info@mhsbsolutions.com
                </a>
              </div>
              <div className="text-secondary-200">Email Us</div>
            </div>
            <div className="text-center px-4">
              <div className="text-2xl lg:text-3xl font-bold text-accent-300 mb-3">
                <a href="tel:864-495-4179" className="hover:text-white transition-colors">
                  (864) 495-4179
                </a>
              </div>
              <div className="text-secondary-200">Call Us</div>
            </div>
            <div className="text-center px-4">
              <div className="text-2xl lg:text-3xl font-bold text-accent-300 mb-3">Personalized</div>
              <div className="text-secondary-200">Consulting Approach</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-600 py-12 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-bold text-white">MHSB</span>
            </div>
            <div className="text-secondary-300">
              © 2024 MHSB Legal Tech Consultants. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}