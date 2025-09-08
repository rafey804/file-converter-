'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle newsletter subscription
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  const toolLinks = [
    { name: 'PDF to Word', href: '/convert-pdf-to-word-online' },
    { name: 'Word to PDF', href: '/word-to-pdf-online' },
    { name: 'Merge PDFs', href: '/merge-pdf-files-free' },
    { name: 'PDF to Images', href: '/pdf-to-images-converter' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'API Documentation', href: '/api-docs' },
    { name: 'Status Page', href: '/status' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Get notified about new features, tips for document conversion, and exclusive offers.
            </p>
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="mt-4 text-green-200 font-medium">Thank you for subscribing!</p>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl">
                📄
              </div>
              <span className="text-xl font-bold">PDF Converter</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional PDF conversion tools that help millions of users worldwide convert, merge, 
              and transform their documents with ease. Fast, secure, and completely free.
            </p>
            {/* Developer Credit */}
            <div className="text-sm text-gray-400 mb-4">
              Developed by <span className="text-blue-400 font-medium">Rafey</span>
            </div>
          </div>

          {/* Conversion Tools */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Conversion Tools</h3>
            <ul className="space-y-3">
              {toolLinks.map((tool) => (
                <li key={tool.name}>
                  <Link
                    href={tool.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-purple-500 transition-colors"></span>
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((support) => (
                <li key={support.name}>
                  <Link
                    href={support.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-yellow-500 transition-colors"></span>
                    {support.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((company) => (
                <li key={company.name}>
                  <Link
                    href={company.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:bg-pink-500 transition-colors"></span>
                    {company.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Security & Trust Badges */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span>SOC 2 Certified</span>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <span>Files processed: 2.5M+ this month</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} PDF Converter. All rights reserved. Made with care for document conversion.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
              <Link href="/security" className="hover:text-white transition-colors">
                Security
              </Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">
                Accessibility
              </Link>
              <div className="flex items-center space-x-1">
                <span>🌍</span>
                <select className="bg-gray-900 text-gray-400 hover:text-white focus:outline-none border border-gray-700 rounded px-2 py-1">
                  <option value="en" className="bg-gray-900 text-white">English</option>
                  <option value="es" className="bg-gray-900 text-white">Español</option>
                  <option value="fr" className="bg-gray-900 text-white">Français</option>
                  <option value="de" className="bg-gray-900 text-white">Deutsch</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schema.org markup for footer */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "PDF Converter",
            "url": "https://Flipfilex.com",
            "logo": "https://Flipfilex.com/images/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": ["English", "Spanish", "French", "German"]
            }
          })
        }}
      />
    </footer>
  );
}