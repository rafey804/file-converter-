'use client';

import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ApiService } from '@/lib/api';
import { HealthStatus } from '@/types';
import './globals.css'
export default function HomePage() {
  const [healthStatus, setHealthStatus] = useState<HealthStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const status = await ApiService.checkHealth();
        setHealthStatus(status);
      } catch (error) {
        console.error('Health check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkHealth();
  }, []);

  const features = [
    {
      title: 'PDF to Word',
      description: 'Convert PDF documents to editable Word files while preserving formatting and layout integrity',
      icon: '📝',
      href: '/convert-pdf-to-word-online',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      title: 'Word to PDF',
      description: 'Transform Word documents into professional, print-ready PDF files with maintained formatting',
      icon: '📄',
      href: '/word-to-pdf-online',
      color: 'from-emerald-500 to-emerald-600',
      hoverColor: 'hover:from-emerald-600 hover:to-emerald-700',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
    },
    {
      title: 'Merge PDFs',
      description: 'Combine multiple PDF files into a single document with customizable page order',
      icon: '🔗',
      href: '/merge-pdf-files-free',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
    {
      title: 'PDF to Images',
      description: 'Convert PDF pages to high-quality PNG images with adjustable resolution settings',
      icon: '🖼️',
      href: '/pdf-to-images-converter',
      color: 'from-pink-500 to-pink-600',
      hoverColor: 'hover:from-pink-600 hover:to-pink-700',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
    },
  ];

  const benefits = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Advanced algorithms ensure quick processing without compromising quality',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      icon: '🔒',
      title: 'Bank-Level Security',
      description: 'End-to-end encryption with automatic file deletion after processing',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: '🎯',
      title: 'Intuitive Interface',
      description: 'Drag-and-drop simplicity with real-time processing feedback',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: '📱',
      title: 'Cross-Platform',
      description: 'Seamlessly works on desktop, tablet, and mobile devices',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "This tool has streamlined our document workflow. The PDF to Word conversion is incredibly accurate!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      content: "Fast, reliable, and secure. I use it daily for client projects. Highly recommended!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Legal Assistant",
      content: "The merge PDF feature saves me hours every week. Professional quality results every time.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Free PDF Converter | PDF to Word, Word to PDF, Merge PDF, PDF to Images</title>
        <meta name="description" content="Convert PDF to Word, Word to PDF, merge PDFs, and convert PDFs to images with our free, secure online converter. Fast processing with professional quality results." />
        <meta name="keywords" content="PDF converter, PDF to Word, Word to PDF, merge PDF, PDF to images, free PDF tools, online document converter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Free PDF Converter - Professional Document Conversion Tools" />
        <meta property="og:description" content="Convert, merge, and transform your documents with our secure online PDF converter tools. Free, fast, and user-friendly." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yoursite.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "PDF Converter",
            "description": "Professional PDF conversion tools for converting PDF to Word, Word to PDF, merging PDFs, and converting PDFs to images",
            "applicationCategory": "Utility",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
          
          <div className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-8 animate-fade-in">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl text-white text-3xl mb-6 shadow-lg">
                  📄
                </div>
                <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
                  PDF Converter Pro
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Professional-grade document conversion tools. Transform PDFs to Word, Word to PDF, merge multiple files, 
                  and convert to images with <span className="font-semibold text-blue-600">enterprise-level security</span> and 
                  <span className="font-semibold text-purple-600"> lightning-fast processing</span>.
                </p>
              </div>

              {/* Service Status */}
              <div className="mb-16">
                {isLoading ? (
                  <div className="inline-flex items-center space-x-3 text-gray-500 bg-white px-6 py-3 rounded-full shadow-md border">
                    <div className="animate-spin w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full"></div>
                    <span className="font-medium">Checking service status...</span>
                  </div>
                ) : healthStatus ? (
                  <div className="inline-flex items-center space-x-3 text-green-700 bg-gradient-to-r from-green-50 to-emerald-50 px-6 py-3 rounded-full shadow-md border border-green-200">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-sm"></div>
                    <span className="font-semibold">🚀 All Systems Online</span>
                    <span className="text-green-600">• v{healthStatus.version}</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center space-x-3 text-red-700 bg-gradient-to-r from-red-50 to-pink-50 px-6 py-3 rounded-full shadow-md border border-red-200">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-semibold">Service Temporarily Unavailable</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Conversion Tool</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional-grade tools designed for speed, accuracy, and security
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4 mb-20">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                href={feature.href}
                className={`
                  group block relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 
                  hover:shadow-2xl bg-white border border-gray-100 shadow-lg
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8 text-center relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-xl text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {feature.description}
                  </p>
                  <div className={`inline-flex items-center ${feature.textColor} font-semibold text-sm group-hover:gap-3 gap-2 transition-all`}>
                    Start Converting
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </Link>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100 to-transparent rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-100 to-transparent rounded-full -ml-24 -mb-24"></div>
            
            <div className="text-center mb-16 relative z-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose PDF Converter Pro?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Experience the perfect blend of speed, security, and simplicity. Built for professionals who demand excellence.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${benefit.bgColor} rounded-2xl text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Professionals Worldwide
            </h2>
            <p className="text-lg text-gray-600">
              Join thousands of users who rely on our conversion tools daily
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { number: '4', label: 'Conversion Tools', icon: '🛠️' },
              { number: '100MB', label: 'Max File Size', icon: '📁' },
              { number: '10/min', label: 'Processing Speed', icon: '⚡' },
              { number: '100%', label: 'Free Forever', icon: '🎉' }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Hear from professionals who trust our tools</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">&quot;{testimonial.content}&quot;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl p-8 md:p-16 text-white shadow-2xl">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Documents?
              </h2>
              <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto">
                Join thousands of professionals who trust our secure, fast, and reliable conversion tools
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-4xl mx-auto">
                {features.map((feature) => (
                  <Link
                    key={feature.title}
                    href={feature.href}
                    className="bg-white text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    {feature.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-emerald-200">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl">
                  🛡️
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Your Privacy & Security Matter</h3>
                <div className="grid md:grid-cols-2 gap-4 text-emerald-800">
                  <div className="flex items-start space-x-3">
                    <div className="text-emerald-600">✓</div>
                    <div>
                      <strong>End-to-End Encryption:</strong> All file transfers are secured with SSL encryption
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-emerald-600">✓</div>
                    <div>
                      <strong>Auto-Delete:</strong> Files removed from servers within 1 hour of processing
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-emerald-600">✓</div>
                    <div>
                      <strong>No Data Storage:</strong> We never save, share, or access your documents
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-emerald-600">✓</div>
                    <div>
                      <strong>GDPR Compliant:</strong> Full compliance with international privacy regulations
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-16 mx-auto max-w-4xl sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Get answers to common questions about our conversion tools</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does the conversion process take?",
                answer: "Most conversions complete within 30-60 seconds, depending on file size and complexity. Our optimized servers ensure fast processing times."
              },
              {
                question: "What's the maximum file size I can convert?",
                answer: "You can convert files up to 100MB in size. For larger files, consider compressing them first or contact us for enterprise solutions."
              },
              {
                question: "Are my files secure during conversion?",
                answer: "Absolutely. We use bank-level SSL encryption for all transfers and automatically delete files within 1 hour. We never access or store your documents."
              },
              {
                question: "Do you support batch conversions?",
                answer: "Yes! You can convert multiple files at once using our bulk conversion feature. This is particularly useful for the merge PDF and PDF to images tools."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <footer className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 border-t border-gray-200 mt-20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Converting Today</h3>
            <p className="text-gray-600 mb-8">Professional document conversion tools, completely free</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/pdf-to-word" className="text-blue-600 hover:text-blue-700 font-medium">PDF to Word</Link>
              <span className="text-gray-300">•</span>
              <Link href="/word-to-pdf" className="text-blue-600 hover:text-blue-700 font-medium">Word to PDF</Link>
              <span className="text-gray-300">•</span>
              <Link href="/merge-pdf" className="text-blue-600 hover:text-blue-700 font-medium">Merge PDF</Link>
              <span className="text-gray-300">•</span>
              <Link href="/pdf-to-images" className="text-blue-600 hover:text-blue-700 font-medium">PDF to Images</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}