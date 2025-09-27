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
  variable: '--font-inter',
  preload: true,
  weight: ['400', '500', '600', '700']
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
    default: 'FlipFileX Pro - Professional File Converter | PDF, Image, Video & Audio Tools',
    template: '%s | FlipFileX Pro - Advanced File Conversion Platform'
  },
  description: 'FlipFileX Pro offers comprehensive file conversion tools. Convert PDF to Word, Word to PDF, merge PDFs, convert between all image formats (AVIF, WebP, PNG, JPG, SVG, HEIC, GIF, BMP, TIFF), video formats (MP4, MOV, AVI, MKV, WebM), and audio formats (WAV to MP3). Enterprise-grade security, lightning-fast processing, 100% free.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://flipfilex.com'),
  
  // Comprehensive Keywords including all tools
  keywords: [
    'flipfilex pro',
    'professional file converter',
    'enterprise file conversion',
    
    // PDF Tools
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
    'file converter online',
    
    // Image Conversion - All Formats
    'AVIF to PNG converter',
    'AVIF to WebP converter', 
    'AVIF to JPG converter',
    'AVIF to JPEG converter',
    'WebP to PNG converter',
    'WebP to JPG converter',
    'WebP to JPEG converter',
    'WebP to AVIF converter',
    'PNG to WebP converter',
    'PNG to AVIF converter',
    'PNG to JPG converter',
    'PNG to JPEG converter',
    'JPG to PNG converter',
    'JPG to WebP converter',
    'JPG to AVIF converter',
    'JPEG to PNG converter',
    'JPEG to WebP converter',
    'JPEG to AVIF converter',
    'SVG to PNG converter',
    'SVG to JPG converter',
    'PNG to SVG converter',
    'GIF to PNG converter',
    'GIF to JPG converter',
    'BMP to PNG converter',
    'BMP to JPG converter',
    'TIFF to PNG converter',
    'TIFF to JPG converter',
    'ICO to PNG converter',
    'HEIC to JPG converter',
    'HEIC to PNG converter',
    'HEIC to WebP converter',
    'image format converter',
    'convert images online free',
    'image converter online',
    'WebP converter',
    'AVIF converter',
    'compress images',
    'image optimization',
    'modern image formats',
    'next-gen image formats',
    'raster to vector conversion',
    'vector to raster conversion',
    
    // Video Conversion
    'MP4 to MOV converter',
    'MOV to MP4 converter',
    'AVI to MP4 converter',
    'MKV to MP4 converter',
    'WebM to MP4 converter',
    'FLV to MP4 converter',
    'WMV to MP4 converter',
    'MP4 to WebM converter',
    'MP4 to AVI converter',
    'video converter online',
    'video format converter',
    'convert video online free',
    'video compression',
    'video optimization',
    'cross-platform video',
    'streaming video conversion',
    
    // Audio Conversion
    'WAV to MP3 converter',
    'WAV to MP3 free',
    'audio converter online',
    'audio format converter',
    'MP3 converter',
    'audio file converter',
    'compress audio files',
    'audio optimization',
    
    // Technical Keywords
    'batch file conversion',
    'bulk converter',
    'secure file processing',
    'enterprise security',
    'no registration required',
    'privacy-focused converter',
    'GDPR compliant converter',
    'professional quality conversion',
    'lossless conversion',
    'high-quality output'
  ],
  
  // Enhanced Author and Publisher
  authors: [{ name: 'FlipFileX Pro Team' }],
  creator: 'FlipFileX Pro',
  publisher: 'FlipFileX Pro',
  
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
    siteName: 'FlipFileX Pro - Professional File Conversion Platform',
    title: 'FlipFileX Pro - Professional File Converter | PDF, Image, Video & Audio Tools',
    description: 'Convert PDF to Word, Word to PDF, merge PDFs, convert between all image formats (AVIF, WebP, PNG, JPG, SVG, HEIC), video formats (MP4, MOV, AVI, MKV), and audio formats (WAV to MP3) with FlipFileX Pro. Enterprise-grade security, lightning-fast processing, professional quality results.',
    images: [
      {
        url: '/images/og-image-pro.png',
        width: 1200,
        height: 630,
        alt: 'FlipFileX Pro - Professional File Conversion Platform with comprehensive tools',
        type: 'image/png'
      },
      {
        url: '/images/og-image-square-pro.png',
        width: 1200,
        height: 1200,
        alt: 'FlipFileX Pro Logo - Advanced File Conversion Tools',
        type: 'image/png'
      }
    ]
  },
  
  // Enhanced Twitter Card
  twitter: {
    card: 'summary_large_image',
    site: '@flipfilexpro',
    creator: '@flipfilexpro',
    title: 'FlipFileX Pro - Professional File Converter',
    description: 'Convert PDF to Word, Word to PDF, all image formats (AVIF, WebP, PNG, JPG, SVG, HEIC), video formats (MP4, MOV, AVI, MKV), and audio formats (WAV to MP3) with enterprise-grade security and professional quality.',
    images: ['/images/twitter-card-pro.png']
  },
  
  // Enhanced Canonical URLs
  alternates: {
    canonical: 'https://flipfilex.com',
    languages: {
      'en-US': 'https://flipfilex.com',
      'es-ES': 'https://flipfilex.com/es',
      'fr-FR': 'https://flipfilex.com/fr',
      'de-DE': 'https://flipfilex.com/de',
      'pt-BR': 'https://flipfilex.com/pt',
      'it-IT': 'https://flipfilex.com/it',
      'ja-JP': 'https://flipfilex.com/ja',
      'ko-KR': 'https://flipfilex.com/ko',
      'zh-CN': 'https://flipfilex.com/zh'
    }
  },
  
  // Enhanced Category Classification
  category: 'Professional Productivity Tools',
  classification: 'Enterprise File Conversion Software',
  
  // Enhanced App Information
  applicationName: 'FlipFileX Pro',
  referrer: 'origin-when-cross-origin',
  
  // Enhanced Apple Meta Tags
  appleWebApp: {
    capable: true,
    title: 'FlipFileX Pro',
    statusBarStyle: 'default'
  },
  
  // Verification Tags
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
    'google-adsense-account': 'ca-pub-8694080572387733',
    'google-analytics': 'G-918R7EMM6E',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'theme-color': '#3B82F6',
    'msapplication-navbutton-color': '#3B82F6',
    'apple-mobile-web-app-title': 'FlipFileX Pro',
    'geo.region': 'US',
    'geo.placename': 'United States',
    'geo.position': '40.7128;-74.0060',
    'ICBM': '40.7128, -74.0060'
  }
}

// Comprehensive Structured Data JSON-LD
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://flipfilex.com/#website',
      url: 'https://flipfilex.com',
      name: 'FlipFileX Pro',
      description: 'Professional file conversion platform with comprehensive tools. Convert PDF to Word, Word to PDF, merge PDFs, convert between all image formats (AVIF, WebP, PNG, JPG, JPEG, SVG, HEIC, GIF, BMP, TIFF, ICO), video formats (MP4, MOV, AVI, MKV, WebM, FLV, WMV), and audio formats (WAV to MP3) with enterprise-grade security and professional quality results.',
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
      keywords: 'PDF converter, document conversion, image converter, video converter, audio converter, AVIF to PNG, WebP to JPG, PNG to WebP, SVG to PNG, HEIC to JPG, MP4 to MOV, MOV to MP4, AVI to MP4, MKV to MP4, WAV to MP3, PDF to Word, Word to PDF, merge PDF, enterprise security, professional tools'
    },
    {
      '@type': 'Organization',
      '@id': 'https://flipfilex.com/#organization',
      name: 'FlipFileX Pro',
      alternateName: 'FlipFileX Professional File Conversion Platform',
      url: 'https://flipfilex.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://flipfilex.com/images/logo-pro.png',
        width: 512,
        height: 512,
        caption: 'FlipFileX Pro Logo'
      },
      founder: {
        '@type': 'Person',
        name: 'FlipFileX Pro Development Team',
        jobTitle: 'Enterprise Software Development Team'
      },
      foundingDate: '2024',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-555-FLIPFX',
        contactType: 'customer service',
        availableLanguage: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Italian', 'Japanese', 'Korean', 'Chinese'],
        areaServed: 'Worldwide'
      },
      areaServed: {
        '@type': 'Place',
        name: 'Worldwide'
      },
      sameAs: [
        'https://twitter.com/flipfilexpro',
        'https://facebook.com/flipfilexpro',
        'https://linkedin.com/company/flipfilexpro',
        'https://github.com/flipfilexpro'
      ]
    },
    {
      '@type': 'WebApplication',
      name: 'FlipFileX Pro - Professional File Conversion Suite',
      url: 'https://flipfilex.com',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web Browser',
      description: 'Professional-grade online file conversion platform with enterprise security. Comprehensive tools for PDF conversion, image format conversion between all modern formats, video conversion, and audio conversion. All tools feature enterprise-grade security, lightning-fast processing, and professional quality output.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        validFrom: '2024-01-01'
      },
      featureList: [
        // PDF Tools
        'Professional PDF to Word Conversion',
        'Enterprise Word to PDF Conversion', 
        'Advanced PDF Merger with Custom Order',
        'Intelligent PDF Splitter',
        'High-Quality PDF to Images Conversion',
        
        // Image Tools - Complete Coverage
        'AVIF to PNG Conversion',
        'AVIF to WebP Conversion',
        'AVIF to JPG/JPEG Conversion',
        'WebP to PNG Conversion',
        'WebP to JPG/JPEG Conversion',
        'WebP to AVIF Conversion',
        'PNG to WebP Conversion',
        'PNG to AVIF Conversion',
        'PNG to JPG/JPEG Conversion',
        'JPG/JPEG to PNG Conversion',
        'JPG/JPEG to WebP Conversion',
        'JPG/JPEG to AVIF Conversion',
        'SVG to PNG Conversion',
        'PNG to SVG Conversion (Embedded)',
        'GIF to PNG Conversion',
        'BMP to PNG Conversion',
        'TIFF to PNG Conversion',
        'ICO to PNG Conversion',
        'HEIC to JPG Conversion',
        'HEIC to PNG Conversion',
        'HEIC to WebP Conversion',
        
        // Video Tools
        'MP4 to MOV Conversion',
        'MOV to MP4 Conversion',
        'AVI to MP4 Conversion',
        'MKV to MP4 Conversion',
        'WebM to MP4 Conversion',
        'FLV to MP4 Conversion',
        'WMV to MP4 Conversion',
        'MP4 to WebM Conversion',
        
        // Audio Tools
        'WAV to MP3 Conversion with Quality Control',
        
        // Security & Performance Features
        'Enterprise-Grade Security',
        'AES-256 Encryption',
        'GDPR Compliance',
        'SOC 2 Certification',
        'Zero Data Retention',
        'No Registration Required',
        'Professional Quality Output',
        'Lightning-Fast Processing',
        'Batch Conversion Support',
        'Cross-Platform Compatibility',
        'Mobile-Optimized Interface',
        'Progressive Web App Support'
      ],
      softwareVersion: '2.5.0',
      datePublished: '2024-01-15',
      dateModified: new Date().toISOString().split('T')[0],
      author: {
        '@type': 'Organization',
        name: 'FlipFileX Pro Development Team'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '15847',
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
        // PDF Tools
        {
          '@type': 'ListItem',
          position: 2,
          name: 'PDF to Word',
          item: 'https://flipfilex.com/convert-pdf-to-word-online'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Word to PDF',
          item: 'https://flipfilex.com/word-to-pdf-online'
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Merge PDF',
          item: 'https://flipfilex.com/merge-pdf-files-free'
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'PDF to Images',
          item: 'https://flipfilex.com/pdf-to-images-converter'
        },
        // Popular Image Tools
        {
          '@type': 'ListItem',
          position: 6,
          name: 'AVIF to PNG',
          item: 'https://flipfilex.com/avif-to-png'
        },
        {
          '@type': 'ListItem',
          position: 7,
          name: 'WebP to PNG',
          item: 'https://flipfilex.com/webp-to-png'
        },
        {
          '@type': 'ListItem',
          position: 8,
          name: 'PNG to WebP',
          item: 'https://flipfilex.com/png-to-webp'
        },
        {
          '@type': 'ListItem',
          position: 9,
          name: 'JPG to PNG',
          item: 'https://flipfilex.com/jpg-to-png'
        },
        {
          '@type': 'ListItem',
          position: 10,
          name: 'SVG to PNG',
          item: 'https://flipfilex.com/svg-to-png'
        },
        {
          '@type': 'ListItem',
          position: 11,
          name: 'HEIC to JPG',
          item: 'https://flipfilex.com/heic-to-jpg'
        },
        // Video Tools
        {
          '@type': 'ListItem',
          position: 12,
          name: 'MP4 to MOV',
          item: 'https://flipfilex.com/mp4-to-mov'
        },
        {
          '@type': 'ListItem',
          position: 13,
          name: 'MOV to MP4',
          item: 'https://flipfilex.com/mov-to-mp4'
        },
        {
          '@type': 'ListItem',
          position: 14,
          name: 'AVI to MP4',
          item: 'https://flipfilex.com/avi-to-mp4'
        },
        {
          '@type': 'ListItem',
          position: 15,
          name: 'MKV to MP4',
          item: 'https://flipfilex.com/mkv-to-mp4'
        },
        // Audio Tools
        {
          '@type': 'ListItem',
          position: 16,
          name: 'WAV to MP3',
          item: 'https://flipfilex.com/wav-to-mp3-converter'
        }
      ]
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://flipfilex.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is FlipFileX Pro free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, FlipFileX Pro is completely free to use. All conversion tools including PDF to Word, Word to PDF, merge PDF, comprehensive image conversion (AVIF, WebP, PNG, JPG, SVG, HEIC, GIF, BMP, TIFF), video conversion (MP4, MOV, AVI, MKV), and audio conversion (WAV to MP3) are available without registration or payment.'
          }
        },
        {
          '@type': 'Question',
          name: 'What image formats does FlipFileX Pro support?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FlipFileX Pro supports all modern image formats including AVIF, WebP, PNG, JPG, JPEG, SVG, HEIC, GIF, BMP, TIFF, and ICO. You can convert between any of these formats while maintaining professional quality. Maximum file size is 100MB per image with enterprise-grade processing.'
          }
        },
        {
          '@type': 'Question',
          name: 'How do I convert AVIF to PNG with FlipFileX Pro?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Simply upload your AVIF file to our AVIF to PNG converter, click convert, and download your PNG image. FlipFileX Pro maintains perfect image quality while ensuring universal compatibility with all browsers and applications.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can I convert videos with FlipFileX Pro?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, FlipFileX Pro supports video conversion between MP4, MOV, AVI, MKV, WebM, FLV, and WMV formats. Our enterprise-grade video processing maintains quality while optimizing for different platforms and devices.'
          }
        },
        {
          '@type': 'Question',
          name: 'How secure is file processing on FlipFileX Pro?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FlipFileX Pro uses enterprise-grade security with AES-256 encryption, GDPR compliance, SOC 2 certification, and zero data retention. Files are automatically deleted within 1 hour of processing. We never store, share, or access your documents, images, or videos.'
          }
        },
        {
          '@type': 'Question',
          name: 'What makes AVIF and WebP formats special?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AVIF and WebP are next-generation image formats that provide superior compression compared to JPEG and PNG while maintaining excellent quality. They support transparency, HDR, and wide color gamuts. However, for maximum compatibility, you can convert them to PNG or JPG using FlipFileX Pro.'
          }
        },
        {
          '@type': 'Question',
          name: 'Can I process multiple files at once?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, FlipFileX Pro supports batch processing for most conversion types. You can upload multiple files simultaneously and convert them in bulk, saving time and streamlining your workflow.'
          }
        },
        {
          '@type': 'Question',
          name: 'What video quality options are available?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'FlipFileX Pro offers multiple quality settings for video conversion including high quality for archival, medium quality for general use, and web-optimized for online streaming. All options maintain professional standards while optimizing file size.'
          }
        }
      ]
    },
    {
      '@type': 'Service',
      name: 'Professional File Conversion Services',
      description: 'Comprehensive enterprise-grade conversion services including PDF processing, complete image format conversion, video format conversion, and audio conversion with professional quality and enterprise security',
      provider: {
        '@id': 'https://flipfilex.com/#organization'
      },
      serviceType: 'Professional File Conversion Platform',
      audience: {
        '@type': 'Audience',
        audienceType: 'Enterprise professionals, business teams, content creators, web developers, graphic designers, photographers, video editors, audio professionals, digital marketers, researchers, students, archivists'
      },
      areaServed: {
        '@type': 'Place',
        name: 'Worldwide'
      }
    }
  ]
}
interface ReactNode {
  children?: any; // Children ko optional bana diya
  // any other props...
}
interface FooterProps {
  children?: ReactNode; // Children ko optional bana diya
  // any other props...
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google AdSense */}
        <meta name="google-adsense-account" content="ca-pub-8694080572387733"/>
        <meta name="google-adsense-platform-domain" content="flipfilex.com" />
        <meta name="google-site-verification" content="5XJNsNLnPHPvtfmI-dLp8pVKl053JPfj6b8G4rLi-cw" />
        {/* Preload Critical Resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for External Resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="//www.googleadservices.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="//www.clarity.ms" />
        
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
        <meta name="revisit-after" content="3 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta httpEquiv="content-language" content="en-US" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Enhanced Geographic Meta Tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="ICBM" content="40.7128, -74.0060" />
        <meta name="geo.position" content="40.7128;-74.0060" />
        
        {/* Enhanced CSP for Professional Platform */}
        <meta httpEquiv="Content-Security-Policy" content="
          default-src 'self' data:; 
          script-src 'self' 'unsafe-inline' 'unsafe-eval' 
            https://*.googletagmanager.com 
            https://*.google-analytics.com 
            https://pagead2.googlesyndication.com 
            https://*.googlesyndication.com
            https://www.googleadservices.com
            https://www.clarity.ms 
            https://fpyf8.com; 
          connect-src 'self' 
            https://*.google-analytics.com 
            https://pagead2.googlesyndication.com
            https://*.googlesyndication.com
            https://www.googleadservices.com
            https://fpyf8.com 
            https://*.monetag.com 
            https://www.clarity.ms 
            http://localhost:8000 
            ws://localhost:*; 
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
          font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com data:; 
          img-src 'self' data: https: blob:; 
          frame-src 'self' 
            https://*.googlesyndication.com
            https://googleads.g.doubleclick.net
            https://www.googleadservices.com
            https:; 
          media-src 'self' data: blob:; 
          object-src 'none';
        " />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
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
        
        {/* Comprehensive Tool Prefetching - All Tools */}
        {/* PDF Tools */}
        <link rel="prefetch" href="/convert-pdf-to-word-online" />
        <link rel="prefetch" href="/word-to-pdf-online" />
        <link rel="prefetch" href="/merge-pdf-files-free" />
        <link rel="prefetch" href="/pdf-to-images-converter" />
        
        {/* Image Conversion Tools - Complete Coverage */}
        <link rel="prefetch" href="/avif-to-png" />
        <link rel="prefetch" href="/avif-to-webp" />
        <link rel="prefetch" href="/avif-to-jpg" />
        <link rel="prefetch" href="/webp-to-png" />
        <link rel="prefetch" href="/webp-to-jpg" />
        <link rel="prefetch" href="/webp-to-avif" />
        <link rel="prefetch" href="/png-to-webp" />
        <link rel="prefetch" href="/png-to-avif" />
        <link rel="prefetch" href="/png-to-jpg" />
        <link rel="prefetch" href="/jpg-to-png" />
        <link rel="prefetch" href="/jpg-to-webp" />
        <link rel="prefetch" href="/jpg-to-avif" />
        <link rel="prefetch" href="/jpeg-to-png" />
        <link rel="prefetch" href="/jpeg-to-webp" />
        <link rel="prefetch" href="/jpeg-to-avif" />
        <link rel="prefetch" href="/svg-to-png" />
        <link rel="prefetch" href="/png-to-svg" />
        <link rel="prefetch" href="/gif-to-png" />
        <link rel="prefetch" href="/bmp-to-png" />
        <link rel="prefetch" href="/tiff-to-png" />
        <link rel="prefetch" href="/ico-to-png" />
        <link rel="prefetch" href="/heic-to-jpg" />
        <link rel="prefetch" href="/heic-to-png" />
        <link rel="prefetch" href="/heic-to-webp" />
        
        {/* Video Conversion Tools */}
        <link rel="prefetch" href="/mp4-to-mov" />
        <link rel="prefetch" href="/mov-to-mp4" />
        <link rel="prefetch" href="/avi-to-mp4" />
        <link rel="prefetch" href="/mkv-to-mp4" />
        <link rel="prefetch" href="/webm-to-mp4" />
        <link rel="prefetch" href="/flv-to-mp4" />
        <link rel="prefetch" href="/wmv-to-mp4" />
        <link rel="prefetch" href="/mp4-to-webm" />
        
        {/* Audio Conversion Tools */}
        <link rel="prefetch" href="/wav-to-mp3-converter" />
        
        {/* Essential Pages */}
        <link rel="prefetch" href="/tools" />
        <link rel="prefetch" href="/about" />
        <link rel="prefetch" href="/privacy-policy" />
        <link rel="prefetch" href="/terms-of-service" />
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
            <Footer/>
          </Suspense>
        </footer>
        
        {/* Analytics Component */}
        <Suspense>
          <Analytics />
        </Suspense>
        
        {/* Enhanced Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-918R7EMM6E"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-918R7EMM6E', {
              page_title: document.title,
              page_location: window.location.href,
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });

            // Non-blocking tracking functions
            window.trackConversion = function(sourceFormat, targetFormat, fileSize) {
              setTimeout(() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'file_conversion', {
                    event_category: 'File Conversion',
                    event_label: sourceFormat + '_to_' + targetFormat,
                    value: Math.round(fileSize / 1024)
                  });
                }
              }, 0);
            };

            window.trackPopularConversion = function(conversionType) {
              setTimeout(() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'popular_conversion_used', {
                    event_category: 'Popular Tools',
                    event_label: conversionType,
                    value: 1
                  });
                }
              }, 0);
            };
          `}
        </Script>
        
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
          `}
        </Script>
        
        {/* Navigation Fix Script - Critical for preventing navigation blocking */}
        <Script id="navigation-fix" strategy="beforeInteractive">
          {`
            // Prevent any scripts from blocking navigation
            window.addEventListener('DOMContentLoaded', function() {
              // Override any click capture that might block navigation
              document.addEventListener('click', function(e) {
                const target = e.target.closest('a[href]');
                if (target && target.href && target.href.startsWith(window.location.origin)) {
                  // Ensure navigation is not blocked
                  e.stopImmediatePropagation = function() {};
                  e.preventDefault = function() {};
                }
              }, true);

              // Clear any conflicting event listeners
              const originalAddEventListener = EventTarget.prototype.addEventListener;
              EventTarget.prototype.addEventListener = function(type, listener, options) {
                if (type === 'click' && this.tagName === 'A') {
                  // Prevent blocking of navigation links
                  return originalAddEventListener.call(this, type, function(e) {
                    try {
                      listener.call(this, e);
                    } catch (err) {
                      console.warn('Link click handler error (non-blocking):', err);
                    }
                  }, options);
                }
                return originalAddEventListener.call(this, type, listener, options);
              };
            });
          `}
        </Script>

        {/* Non-blocking Service Worker Registration */}
        <Script id="service-worker" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator && 'requestIdleCallback' in window) {
              requestIdleCallback(function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered successfully');
                  })
                  .catch(function(error) {
                    console.log('SW registration failed:', error);
                  });
              });
            }
          `}
        </Script>
        
        {/* Enhanced Cookie Consent */}
        <div id="cookie-consent" className="hidden fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-2xl">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
            <div className="flex-1 mb-4 sm:mb-0 sm:mr-6">
              <p className="text-sm leading-relaxed">
                We use cookies to enhance your file conversion experience, provide analytics, and ensure optimal performance. 
                <a href="/privacy-policy" className="underline ml-1 hover:text-blue-300 transition-colors">
                  Privacy Policy
                </a>
                {' • '}
                <a href="/cookie-policy" className="underline hover:text-blue-300 transition-colors">
                  Cookie Policy
                </a>
              </p>
            </div>
            <div className="flex space-x-3">
              <button 
                id="accept-cookies" 
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg"
              >
                Accept All
              </button>
              <button 
                id="customize-cookies" 
                className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Customize
              </button>
              <button 
                id="decline-cookies" 
                className="bg-gray-600 hover:bg-gray-500 px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Essential Only
              </button>
            </div>
          </div>
        </div>
        
        {/* Simplified Error Handling - Non-blocking */}
        <Script id="error-handling" strategy="afterInteractive">
          {`
            // Minimal error tracking without blocking navigation
            window.onerror = function(msg, url, line) {
              console.error('Error:', msg, 'at', url + ':' + line);
              return false; // Don't block default behavior
            };

            // Non-blocking tracking functions
            window.trackToolUsage = function(toolName, action) {
              setTimeout(() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'tool_usage', {
                    event_category: 'Tool Interaction',
                    event_label: toolName,
                    event_action: action,
                    value: 1
                  });
                }
              }, 0);
            };

            window.trackFormatPopularity = function(inputFormat, outputFormat) {
              setTimeout(() => {
                if (typeof gtag !== 'undefined') {
                  gtag('event', 'format_conversion', {
                    event_category: 'Format Usage',
                    event_label: inputFormat + '_to_' + outputFormat,
                    custom_parameter_1: inputFormat,
                    custom_parameter_2: outputFormat
                  });
                }
              }, 0);
            };
          `}
        </Script>
        
        {/* Professional Platform Badge */}
        <div className="fixed bottom-4 right-4 z-40 hidden lg:block">
          <div className="bg-white shadow-lg rounded-lg p-3 border border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-gray-700">Pro v3.0.0</span>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}