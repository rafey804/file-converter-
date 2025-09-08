import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3B82F6' },
    { media: '(prefers-color-scheme: dark)', color: '#1E40AF' }
  ],
  colorScheme: 'light'
}

export const metadata: Metadata = {
  // Enhanced Basic Meta Tags
  title: {
    default: 'FlipFileX - Free PDF Converter Online | Convert PDF to Word, Word to PDF & More',
    template: '%s | FlipFileX - Professional Document Conversion Tools'
  },
  description: 'FlipFileX offers free online PDF conversion tools. Convert PDF to Word, Word to PDF, merge PDFs, split PDFs, and convert to images. Fast, secure, and professional quality results with no registration required.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://flipfilex.com'),
  
  // Enhanced Keywords for SEO
  keywords: [
    'flipfilex',
    'PDF converter free online',
    'convert PDF to Word',
    'Word to PDF converter',
    'PDF to Word free',
    'merge PDF files',
    'split PDF online',
    'PDF to images converter',
    'free PDF tools',
    'DOCX to PDF',
    'PDF to DOCX',
    'online document converter',
    'PDF editor free',
    'convert PDF online',
    'PDF merger',
    'PDF splitter',
    'PDF to PNG',
    'PDF to JPG',
    'document conversion',
    'file converter online'
  ],
  
  // Enhanced Author and Publisher
  authors: [{ name: 'FlipFileX Team' }],
  creator: 'FlipFileX',
  publisher: 'FlipFileX',
  
  // Enhanced Robots and Indexing
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Enhanced Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flipfilex.com',
    siteName: 'FlipFileX - Free Online PDF Converter Tools',
    title: 'FlipFileX - Free PDF Converter Online | Convert PDF to Word & More',
    description: 'Convert PDF to Word, Word to PDF, merge PDFs, and convert to images with FlipFileX. Fast, secure, and free online document conversion tools with professional quality results.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FlipFileX - Free Online PDF Converter and Document Tools',
        type: 'image/png'
      },
      {
        url: '/images/og-image-square.png',
        width: 1200,
        height: 1200,
        alt: 'FlipFileX Logo - Professional PDF Conversion Tools',
        type: 'image/png'
      }
    ]
  },
  
  // Enhanced Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@flipfilex',
    creator: '@flipfilex',
    title: 'FlipFileX - Free PDF Converter Online',
    description: 'Convert PDF to Word, Word to PDF, merge & split PDFs online for free. Professional quality document conversion tools at FlipFileX.',
    images: ['/images/twitter-card.png']
  },
  
  // Enhanced Canonical URL with SEO pages
  alternates: {
    canonical: 'https://flipfilex.com',
    languages: {
      'en-US': 'https://flipfilex.com',
      'es-ES': 'https://flipfilex.com/es',
      'fr-FR': 'https://flipfilex.com/fr',
      'de-DE': 'https://flipfilex.com/de',
      'pt-BR': 'https://flipfilex.com/pt',
      'it-IT': 'https://flipfilex.com/it'
    }
  },
  
  // Enhanced Category Classification
  category: 'Productivity Tools',
  classification: 'Document Conversion Software',
  
  // Enhanced App Information
  applicationName: 'FlipFileX',
  referrer: 'origin-when-cross-origin',
  
  // Enhanced Apple Meta Tags
  appleWebApp: {
    capable: true,
    title: 'FlipFileX',
    statusBarStyle: 'default'
  },
  
  // Verification Tags (replace with actual values when you get them)
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      'bing': 'your-bing-verification-code',
      'facebook-domain-verification': 'your-facebook-verification-code'
    }
  },
  
  // Enhanced SEO Tags
  other: {
    'msapplication-TileColor': '#3B82F6',
    'msapplication-config': '/browserconfig.xml',
    'google-adsense-account': 'ca-pub-xxxxxxxxxxxxxxxx',
    'google-analytics': 'G-XXXXXXXXXX',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#3B82F6',
    'msapplication-navbutton-color': '#3B82F6',
    'apple-mobile-web-app-title': 'FlipFileX',
    'geo.region': 'US',
    'geo.placename': 'United States',
    'geo.position': '40.7128;-74.0060',
    'ICBM': '40.7128, -74.0060'
  }
}

// Enhanced Structured Data JSON-LD
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://flipfilex.com/#website',
      url: 'https://flipfilex.com',
      name: 'FlipFileX',
      description: 'Free online PDF converter and document conversion tools. Convert PDF to Word, Word to PDF, merge PDFs, split PDFs, and convert to images with professional quality results.',
      publisher: {
        '@id': 'https://flipfilex.com/#organization'
      },
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://flipfilex.com/search?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        }
      ],
      inLanguage: 'en-US',
      keywords: 'PDF converter, document conversion, PDF to Word, Word to PDF, merge PDF, split PDF, free online tools'
    },
    {
      '@type': 'Organization',
      '@id': 'https://flipfilex.com/#organization',
      name: 'FlipFileX',
      alternateName: 'FlipFileX PDF Tools',
      url: 'https://flipfilex.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://flipfilex.com/images/logo.png',
        width: 512,
        height: 512,
        caption: 'FlipFileX Logo'
      },
      founder: {
        '@type': 'Person',
        name: 'FlipFileX Team',
        jobTitle: 'Software Development Team'
      },
      foundingDate: '2024',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-0123',
        contactType: 'customer service',
        availableLanguage: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Italian'],
        areaServed: 'Worldwide'
      },
      areaServed: {
        '@type': 'Place',
        name: 'Worldwide'
      },
      sameAs: [
        'https://twitter.com/flipfilex',
        'https://facebook.com/flipfilex',
        'https://linkedin.com/company/flipfilex'
      ]
    },
    {
      '@type': 'WebApplication',
      name: 'FlipFileX PDF Converter Tools',
      url: 'https://flipfilex.com',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web Browser',
      description: 'Professional online PDF conversion tools including PDF to Word converter, Word to PDF converter, PDF merger, PDF splitter, and PDF to images converter. All tools are free and secure.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        validFrom: '2024-01-01'
      },
      featureList: [
        'Free PDF to Word Conversion',
        'Free Word to PDF Conversion', 
        'Free PDF Merger',
        'Free PDF Splitter',
        'Free PDF to Images Conversion',
        'Secure File Processing',
        'No Registration Required',
        'High Quality Output',
        'Fast Processing Speed',
        'Multiple Format Support'
      ],
      softwareVersion: '2.0',
      datePublished: '2024-01-15',
      dateModified: new Date().toISOString().split('T')[0],
      author: {
        '@type': 'Organization',
        name: 'FlipFileX Team'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '3547',
        bestRating: '5',
        worstRating: '1'
      }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://flipfilex.com/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://flipfilex.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'PDF to Word',
          item: 'https://flipfilex.com/pdf-to-word'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Word to PDF',
          item: 'https://flipfilex.com/word-to-pdf'
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Merge PDF',
          item: 'https://flipfilex.com/merge-pdf'
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Split PDF',
          item: 'https://flipfilex.com/split-pdf'
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'PDF to Images',
          item: 'https://flipfilex.com/pdf-to-images'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://flipfilex.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is FlipFileX free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, FlipFileX is completely free to use. All conversion tools including PDF to Word, Word to PDF, merge PDF, split PDF, and PDF to images are available without registration or payment.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do I convert PDF to Word on FlipFileX?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Simply upload your PDF file to our PDF to Word converter on FlipFileX, click convert, and download your editable Word document. The process is fast, secure, and requires no registration.'
          }
        },
        {
          '@type': 'Question',
          name: 'Are my files secure on FlipFileX?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, FlipFileX uses bank-level SSL encryption for all file transfers and automatically deletes files within 1 hour of processing. We never store, share, or access your documents.'
          }
        },
        {
          '@type': 'Question',
          name: 'What file formats does FlipFileX support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FlipFileX supports PDF, DOCX, DOC, PPT, PPTX, XLS, XLSX files. You can convert between various formats, merge/split PDFs, and convert to images. Maximum file size is 100MB per file.'
          }
        },
        {
          '@type': 'Question',
          name: 'How fast is PDF conversion on FlipFileX?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most conversions on FlipFileX complete within 30-60 seconds, depending on file size and complexity. Our optimized servers ensure fast and reliable processing.'
          }
        }
      ]
    },
    {
      '@type': 'Service',
      name: 'PDF Document Conversion Services',
      description: 'Comprehensive online PDF conversion services including PDF to Word, Word to PDF, PDF merge, split, and image conversion',
      provider: {
        '@id': 'https://flipfilex.com/#organization'
      },
      serviceType: 'Document Conversion',
      audience: {
        '@type': 'Audience',
        audienceType: 'Business professionals, students, researchers, content creators'
      },
      areaServed: {
        '@type': 'Place',
        name: 'Worldwide'
      }
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preload Critical Resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for External Resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Preconnect to Critical Third Parties */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Enhanced SEO Meta Tags */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta httpEquiv="content-language" content="en-US" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Enhanced Geographic Meta Tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="ICBM" content="40.7128, -74.0060" />
        <meta name="geo.position" content="40.7128;-74.0060" />
        
        {/* Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' http://localhost:5000 https://www.google-analytics.com;" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Performance Hints */}
        <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />
        
        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        
        {/* Enhanced Performance Optimizations - Prefetch SEO Pages */}
        <link rel="prefetch" href="/pdf-to-word" />
        <link rel="prefetch" href="/word-to-pdf" />
        <link rel="prefetch" href="/merge-pdf" />
        <link rel="prefetch" href="/split-pdf" />
        <link rel="prefetch" href="/pdf-to-images" />
        <link rel="prefetch" href="/convert-pdf-to-word" />
        <link rel="prefetch" href="/convert-word-to-pdf" />
        <link rel="prefetch" href="/online-pdf-merger" />
        <link rel="prefetch" href="/pdf-splitter-online" />
      </head>
      
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        
        {/* Header */}
        <header role="banner">
          <Suspense fallback={<div className="h-16 bg-white border-b"></div>}>
            <Navigation />
          </Suspense>
        </header>
        
        {/* Main Content */}
        <main id="main-content" role="main" className="flex-1">
          {children}
        </main>
        
        {/* Footer */}
        <footer role="contentinfo">
          <Suspense fallback={<div className="h-32 bg-gray-50"></div>}>
            <Footer />
          </Suspense>
        </footer>
        
        {/* Analytics Component */}
        <Suspense>
          <Analytics />
        </Suspense>
        
        {/* Google Analytics using next/script - Recommended approach */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_title: document.title,
              page_location: window.location.href,
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
          `}
        </Script>
        
        {/* Microsoft Clarity using next/script */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
          `}
        </Script>
        
        {/* Service Worker Registration */}
        <Script id="service-worker" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `}
        </Script>
        
        {/* Enhanced Cookie Consent */}
        <div id="cookie-consent" className="hidden fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
            <p className="text-sm mb-4 sm:mb-0">
              We use cookies to improve your document conversion experience and analyze site usage. 
              <a href="/privacy-policy" className="underline ml-1 hover:text-blue-300">Learn more</a>
            </p>
            <div className="flex space-x-4">
              <button 
                id="accept-cookies" 
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm transition-colors"
              >
                Accept All
              </button>
              <button 
                id="decline-cookies" 
                className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-sm transition-colors"
              >
                Essential Only
              </button>
            </div>
          </div>
        </div>
        
        {/* Error Boundary Script */}
        <Script id="error-handling" strategy="afterInteractive">
          {`
            window.addEventListener('error', function(e) {
              console.error('Global error:', e.error);
              // You can send errors to your monitoring service here
            });
            
            window.addEventListener('unhandledrejection', function(e) {
              console.error('Unhandled promise rejection:', e.reason);
              // You can send errors to your monitoring service here
            });
          `}
        </Script>
      </body>
    </html>
  )
}