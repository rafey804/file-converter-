'use client';

import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ApiService } from '@/lib/api';
import { HealthStatus } from '@/types';
import './globals.css';

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
      description: 'Convert PDF documents to editable Word files while preserving formatting and layout integrity with advanced OCR technology',
      icon: '📝',
      href: '/convert-pdf-to-word-online',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      gradient: 'bg-gradient-to-br from-blue-500/10 to-blue-600/5',
    },
    {
      title: 'Word to PDF',
      description: 'Transform Word documents into professional, print-ready PDF files with maintained formatting and cross-platform compatibility',
      icon: '📄',
      href: '/word-to-pdf-online',
      color: 'from-emerald-500 to-emerald-600',
      hoverColor: 'hover:from-emerald-600 hover:to-emerald-700',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      gradient: 'bg-gradient-to-br from-emerald-500/10 to-emerald-600/5',
    },
    {
      title: 'Merge PDFs',
      description: 'Combine multiple PDF files into a single document with customizable page order and advanced compression options',
      icon: '🔗',
      href: '/merge-pdf-files-free',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      gradient: 'bg-gradient-to-br from-purple-500/10 to-purple-600/5',
    },
    {
      title: 'PDF to Images',
      description: 'Convert PDF pages to high-quality PNG images with adjustable resolution settings and batch processing capabilities',
      icon: '🖼️',
      href: '/pdf-to-images-converter',
      color: 'from-pink-500 to-pink-600',
      hoverColor: 'hover:from-pink-600 hover:to-pink-700',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      gradient: 'bg-gradient-to-br from-pink-500/10 to-pink-600/5',
    },
    {
      title: 'PNG to WebP',
      description: 'Convert PNG images to modern WebP format for faster loading, smaller file sizes, and better web performance',
      icon: '🌐',
      href: '/png-to-webp',
      color: 'from-teal-500 to-teal-600',
      hoverColor: 'hover:from-teal-600 hover:to-teal-700',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      gradient: 'bg-gradient-to-br from-teal-500/10 to-teal-600/5',
    },
    {
      title: 'AVIF to PNG',
      description: 'Convert modern AVIF images to widely supported PNG format for better compatibility across all platforms and browsers',
      icon: '🎨',
      href: '/avif-to-png',
      color: 'from-indigo-500 to-indigo-600',
      hoverColor: 'hover:from-indigo-600 hover:to-indigo-700',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      gradient: 'bg-gradient-to-br from-indigo-500/10 to-indigo-600/5',
    },
    {
      title: 'WebP to PNG',
      description: 'Convert WebP images to PNG format while preserving transparency, image quality, and metadata information',
      icon: '📸',
      href: '/webp-to-png',
      color: 'from-cyan-500 to-cyan-600',
      hoverColor: 'hover:from-cyan-600 hover:to-cyan-700',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600',
      gradient: 'bg-gradient-to-br from-cyan-500/10 to-cyan-600/5',
    },
    {
      title: 'WAV to MP3',
      description: 'Convert WAV audio files to compressed MP3 format with customizable quality settings and metadata preservation',
      icon: '🎵',
      href: '/wav-to-mp3-converter',
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      gradient: 'bg-gradient-to-br from-orange-500/10 to-orange-600/5',
    },
    {
      title: 'MP3 to WAV',
      description: 'Convert compressed MP3 files to lossless WAV format for professional audio editing and production',
      icon: '🎶',
      href: '/mp3-to-wav',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      gradient: 'bg-gradient-to-br from-purple-500/10 to-purple-600/5',
    },
    {
      title: 'FLAC to MP3',
      description: 'Convert lossless FLAC audio files to portable MP3 format while maintaining excellent sound quality',
      icon: '🎼',
      href: '/flac-to-mp3',
      color: 'from-indigo-500 to-indigo-600',
      hoverColor: 'hover:from-indigo-600 hover:to-indigo-700',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      gradient: 'bg-gradient-to-br from-indigo-500/10 to-indigo-600/5',
    },
    {
      title: 'AAC to MP3',
      description: 'Convert Apple AAC audio format to universal MP3 for better compatibility across all devices and platforms',
      icon: '🎤',
      href: '/aac-to-mp3',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      gradient: 'bg-gradient-to-br from-blue-500/10 to-blue-600/5',
    },
    {
      title: 'M4A to MP3',
      description: 'Convert iTunes M4A audio files to MP3 format for universal playback on any device or media player',
      icon: '🎧',
      href: '/m4a-to-mp3',
      color: 'from-pink-500 to-pink-600',
      hoverColor: 'hover:from-pink-600 hover:to-pink-700',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      gradient: 'bg-gradient-to-br from-pink-500/10 to-pink-600/5',
    },
    {
      title: 'JPG to PNG',
      description: 'Convert JPG images to PNG format for better quality, transparency support, and lossless image compression',
      icon: '🖼️',
      href: '/jpg-to-png',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      gradient: 'bg-gradient-to-br from-red-500/10 to-red-600/5',
    },
    {
      title: 'Excel to PDF',
      description: 'Convert Excel spreadsheets to professional PDF documents with preserved formatting and layout',
      icon: '📊',
      href: '/excel-to-pdf',
      color: 'from-emerald-500 to-teal-600',
      hoverColor: 'hover:from-emerald-600 hover:to-teal-700',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      gradient: 'bg-gradient-to-br from-emerald-500/10 to-teal-600/5',
    },
    {
      title: 'PowerPoint to PDF',
      description: 'Transform PowerPoint presentations into secure, shareable PDF documents with maintained quality',
      icon: '📺',
      href: '/powerpoint-to-pdf',
      color: 'from-orange-500 to-red-600',
      hoverColor: 'hover:from-orange-600 hover:to-red-700',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      gradient: 'bg-gradient-to-br from-orange-500/10 to-red-600/5',
    },
    {
      title: 'Text to PDF',
      description: 'Convert plain text files to formatted PDF documents with customizable styling and layout options',
      icon: '📃',
      href: '/text-to-pdf',
      color: 'from-gray-500 to-slate-600',
      hoverColor: 'hover:from-gray-600 hover:to-slate-700',
      bgColor: 'bg-gray-50',
      textColor: 'text-gray-600',
      gradient: 'bg-gradient-to-br from-gray-500/10 to-slate-600/5',
    },
    {
      title: 'HTML to PDF',
      description: 'Convert HTML web pages to PDF format while preserving styling, layout, and interactive elements',
      icon: '🌐',
      href: '/html-to-pdf',
      color: 'from-cyan-500 to-blue-600',
      hoverColor: 'hover:from-cyan-600 hover:to-blue-700',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600',
      gradient: 'bg-gradient-to-br from-cyan-500/10 to-blue-600/5',
    },
    {
      title: 'CSV to Excel',
      description: 'Transform CSV data files into Excel spreadsheets with proper formatting and data organization',
      icon: '📋',
      href: '/csv-to-excel',
      color: 'from-lime-500 to-green-600',
      hoverColor: 'hover:from-lime-600 hover:to-green-700',
      bgColor: 'bg-lime-50',
      textColor: 'text-lime-600',
      gradient: 'bg-gradient-to-br from-lime-500/10 to-green-600/5',
    },
    {
      title: 'JSON to CSV',
      description: 'Convert JSON data structures to CSV format for easy data analysis and spreadsheet compatibility',
      icon: '🔄',
      href: '/json-to-csv',
      color: 'from-violet-500 to-purple-600',
      hoverColor: 'hover:from-violet-600 hover:to-purple-700',
      bgColor: 'bg-violet-50',
      textColor: 'text-violet-600',
      gradient: 'bg-gradient-to-br from-violet-500/10 to-purple-600/5',
    },
    {
      title: 'OGG to MP3',
      description: 'Convert open-source OGG audio files to universal MP3 format for better compatibility and portability',
      icon: '🔊',
      href: '/ogg-to-mp3',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      gradient: 'bg-gradient-to-br from-green-500/10 to-green-600/5',
    },
    {
      title: 'WMA to MP3',
      description: 'Convert Windows Media Audio files to MP3 format for universal compatibility across all platforms',
      icon: '🎺',
      href: '/wma-to-mp3',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:from-red-600 hover:to-red-700',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      gradient: 'bg-gradient-to-br from-red-500/10 to-red-600/5',
    },
    {
      title: 'PNG to JPG',
      description: 'Convert PNG images to JPG format for smaller file sizes and better web performance optimization',
      icon: '📷',
      href: '/png-to-jpg',
      color: 'from-yellow-500 to-yellow-600',
      hoverColor: 'hover:from-yellow-600 hover:to-yellow-700',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      gradient: 'bg-gradient-to-br from-yellow-500/10 to-yellow-600/5',
    },
    {
      title: 'SVG to PNG',
      description: 'Convert scalable vector SVG images to PNG raster format for wider compatibility and usage',
      icon: '🎯',
      href: '/svg-to-png',
      color: 'from-teal-500 to-teal-600',
      hoverColor: 'hover:from-teal-600 hover:to-teal-700',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      gradient: 'bg-gradient-to-br from-teal-500/10 to-teal-600/5',
    },
    {
      title: 'GIF to PNG',
      description: 'Convert animated or static GIF images to PNG format for better quality and modern web standards',
      icon: '🎭',
      href: '/gif-to-png',
      color: 'from-pink-500 to-rose-600',
      hoverColor: 'hover:from-pink-600 hover:to-rose-700',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      gradient: 'bg-gradient-to-br from-pink-500/10 to-rose-600/5',
    },
    {
      title: 'QR Code Generator',
      description: 'Create professional QR codes for URLs, text, contact info, WiFi credentials, and more with custom styling',
      icon: '🔳',
      href: '/qr-code-generator',
      color: 'from-violet-500 to-purple-600',
      hoverColor: 'hover:from-violet-600 hover:to-purple-700',
      bgColor: 'bg-violet-50',
      textColor: 'text-violet-600',
      gradient: 'bg-gradient-to-br from-violet-500/10 to-purple-600/5',
    },
    {
      title: 'Image Compressor',
      description: 'Reduce image file sizes up to 90% while maintaining quality. Support for JPEG, PNG, WebP formats up to 200MB',
      icon: '🗜️',
      href: '/image-compressor',
      color: 'from-orange-500 to-red-600',
      hoverColor: 'hover:from-orange-600 hover:to-red-700',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      gradient: 'bg-gradient-to-br from-orange-500/10 to-red-600/5',
    },
    {
      title: 'OCR - Image to Text',
      description: 'Extract text from images using advanced AI technology. Support for 100+ languages with high accuracy recognition',
      icon: '📄',
      href: '/ocr-image-to-text',
      color: 'from-emerald-500 to-teal-600',
      hoverColor: 'hover:from-emerald-600 hover:to-teal-700',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-600',
      gradient: 'bg-gradient-to-br from-emerald-500/10 to-teal-600/5',
    }
  ];

  const imageConverterTools = [
    { name: 'Image Compressor', href: '/image-compressor', description: 'Reduce file sizes up to 90%', icon: '🗜️', popular: true },
    { name: 'PNG to WebP', href: '/png-to-webp', description: 'Next-gen web format', icon: '🌐', popular: true },
    { name: 'AVIF to PNG', href: '/avif-to-png', description: 'Universal compatibility', icon: '🎨', popular: true },
    { name: 'WebP to PNG', href: '/webp-to-png', description: 'Wide support', icon: '📸', popular: true },
    { name: 'JPG to PNG', href: '/jpg-to-png', description: 'Quality preservation', icon: '🖼️', popular: false },
    { name: 'PNG to JPG', href: '/png-to-jpg', description: 'Smaller file sizes', icon: '📷', popular: false },
    { name: 'SVG to PNG', href: '/svg-to-png', description: 'Vector to raster', icon: '🎯', popular: false },
    { name: 'GIF to PNG', href: '/gif-to-png', description: 'Static conversion', icon: '🎭', popular: false },
    { name: 'BMP to PNG', href: '/bmp-to-png', description: 'Modern format', icon: '🎪', popular: false },
    { name: 'TIFF to PNG', href: '/tiff-to-png', description: 'Professional format', icon: '📋', popular: false },
    { name: 'HEIC to JPG', href: '/heic-to-jpg', description: 'iPhone photos', icon: '📱', popular: true },
    { name: 'ICO to PNG', href: '/ico-to-png', description: 'Icon conversion', icon: '🔷', popular: false },
    { name: 'JPEG to WebP', href: '/jpeg-to-webp', description: 'Web optimization', icon: '⚡', popular: false }
  ];

  const videoConverterTools = [
    { name: 'MP4 to MOV', href: '/mp4-to-mov', description: 'Apple QuickTime', icon: '🎬', popular: true },
    { name: 'MOV to MP4', href: '/mov-to-mp4', description: 'Universal playback', icon: '📺', popular: true },
    { name: 'AVI to MP4', href: '/avi-to-mp4', description: 'Modern compression', icon: '🎞️', popular: false },
    { name: 'MKV to MP4', href: '/mkv-to-mp4', description: 'Streaming ready', icon: '📹', popular: true },
    { name: 'WebM to MP4', href: '/webm-to-mp4', description: 'Cross-platform', icon: '🌐', popular: false },
    { name: 'FLV to MP4', href: '/flv-to-mp4', description: 'Legacy conversion', icon: '📼', popular: false },
    { name: 'WMV to MP4', href: '/wmv-to-mp4', description: 'Windows format', icon: '🪟', popular: false },
    { name: 'MP4 to WebM', href: '/mp4-to-webm', description: 'Web optimized', icon: '⚡', popular: false }
  ];

  const audioConverterTools = [
    { name: 'WAV to MP3', href: '/wav-to-mp3', description: 'Lossless to compressed', icon: '🎵', popular: true },
    { name: 'MP3 to WAV', href: '/mp3-to-wav', description: 'Compressed to lossless', icon: '🎶', popular: true },
    { name: 'FLAC to MP3', href: '/flac-to-mp3', description: 'Lossless to portable', icon: '🎼', popular: true },
    { name: 'AAC to MP3', href: '/aac-to-mp3', description: 'Apple to universal', icon: '🎤', popular: false },
    { name: 'M4A to MP3', href: '/m4a-to-mp3', description: 'iTunes to universal', icon: '🎧', popular: true },
    { name: 'OGG to MP3', href: '/ogg-to-mp3', description: 'Open source to standard', icon: '🔊', popular: false },
    { name: 'WMA to MP3', href: '/wma-to-mp3', description: 'Windows to universal', icon: '🎺', popular: false },
    { name: 'MP3 to AAC', href: '/mp3-to-aac', description: 'Universal to Apple', icon: '🎻', popular: false }
  ];

  const benefits = [
    {
      icon: '⚡',
      title: 'Lightning Fast Processing',
      description: 'Advanced multi-core algorithms ensure quick processing without compromising quality. Average conversion time: 15-30 seconds.',
      color: 'text-yellow-600',
      bgColor: 'bg-gradient-to-br from-yellow-50 to-orange-50',
      borderColor: 'border-yellow-200'
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Military-grade encryption with automatic file deletion after processing. Zero-knowledge architecture ensures complete privacy.',
      color: 'text-green-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-emerald-50',
      borderColor: 'border-green-200'
    },
    {
      icon: '🎯',
      title: 'Smart Interface',
      description: 'AI-powered drag-and-drop interface with real-time processing feedback and intelligent format detection.',
      color: 'text-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: '📱',
      title: 'Universal Access',
      description: 'Seamlessly works on desktop, tablet, and mobile devices with progressive web app technology.',
      color: 'text-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      borderColor: 'border-purple-200'
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director at TechCorp",
      content: "FlipFileX has revolutionized our document workflow. The PDF to Word conversion maintains perfect formatting, saving us hours of manual work every day.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      content: "The image conversion tools are phenomenal! Converting AVIF to PNG and WebP conversions are lightning-fast with pristine quality. A game-changer for my workflow.",
      rating: 5,
      avatar: "👨‍🎨"
    },
    {
      name: "Emily Rodriguez",
      role: "Legal Assistant", 
      content: "Security and reliability are paramount in legal work. FlipFileX delivers both with enterprise-grade encryption and consistent professional quality results.",
      rating: 5,
      avatar: "👩‍⚖️"
    }
  ];

  const faqs = [
    {
      question: "How fast is your conversion process?",
      answer: "Our advanced multi-core processing engines deliver industry-leading speeds. Most conversions complete within 15-30 seconds, with simple image conversions taking just 5-10 seconds. File size and complexity affect timing, but our optimized infrastructure ensures consistently fast performance."
    },
    {
      question: "What file size limits do you have?",
      answer: "You can convert files up to 100MB per upload. For PDF conversions, this typically handles 200+ page documents. Image files can be up to 50MP resolution. For larger enterprise needs, contact us for custom solutions with higher limits."
    },
    {
      question: "How secure are my files during conversion?",
      answer: "We employ bank-level AES-256 encryption for all transfers and processing. Files are automatically deleted from our servers within 1 hour, with zero human access. We're GDPR compliant and SOC 2 certified, ensuring your data remains completely private."
    },
    {
      question: "Do you support bulk/batch conversions?",
      answer: "Absolutely! Upload multiple files simultaneously for batch processing. Perfect for converting entire photo albums, document sets, or media libraries. The interface shows individual progress for each file with estimated completion times."
    },
    {
      question: "What image and video formats are supported?",
      answer: "We support 25+ formats including PNG, WebP, AVIF, JPG, JPEG, SVG, GIF, BMP, TIFF, HEIC, ICO for images. Video formats include MP4, MOV, AVI, MKV, WebM, FLV, WMV with full metadata preservation and quality options."
    },
    {
      question: "Is there a quality loss during conversion?",
      answer: "Our smart algorithms minimize quality loss through advanced compression techniques. For lossless formats (PNG, TIFF), quality is preserved completely. For lossy formats, we offer customizable quality settings from web-optimized to maximum quality."
    },
    {
      question: "Can I use this on mobile devices?",
      answer: "Yes! Our responsive design works flawlessly on all devices. We also offer a Progressive Web App (PWA) that can be installed on your phone for app-like experience with offline capabilities for recently converted files."
    },
    {
      question: "Do you offer API access for developers?",
      answer: "We provide REST APIs for enterprise customers with comprehensive documentation, SDKs for popular languages, and dedicated support. Contact our enterprise team for API keys, pricing, and integration assistance."
    }
  ];

  return (
    <>
      <Head>
        <title>FlipFileX Pro v3.0.0 | Professional File Converter - PDF, Image & Video Tools</title>
        <meta name="description" content="Convert PDF to Word, Word to PDF, merge PDFs, convert images (PNG, WebP, AVIF, JPG, SVG, HEIC), and video files (MP4, MOV, AVI) with our professional-grade converter. Lightning-fast processing, enterprise security, 100% free." />
        <meta name="keywords" content="PDF converter online, image converter, video converter, PDF to Word converter, Word to PDF, PNG to WebP, AVIF to PNG, WebP to PNG, JPG to PNG, SVG to PNG, HEIC to JPG, MP4 to MOV, MOV to MP4, file conversion tools, document converter, photo converter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="FlipFileX Pro - Professional File Conversion Tools | Free Online Converter" />
        <meta property="og:description" content="Professional-grade file conversion tools. Convert PDFs, images, videos with enterprise security and lightning-fast processing. Trusted by 50,000+ professionals worldwide." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://flipfilex.com" />
        <meta property="og:image" content="https://flipfilex.com/og-image.jpg" />
        <meta property="og:site_name" content="FlipFileX Pro" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@flipfilex" />
        <meta name="twitter:title" content="FlipFileX Pro - Professional File Converter" />
        <meta name="twitter:description" content="Convert PDF, images, videos with enterprise-grade security. Free, fast, professional." />
        <meta name="twitter:image" content="https://flipfilex.com/twitter-image.jpg" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="FlipFileX Team" />
        <meta name="language" content="en" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <link rel="canonical" href="https://flipfilex.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3B82F6" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "FlipFileX Pro",
            "description": "Professional file conversion tools for PDFs, images, and videos including PNG to WebP, AVIF to PNG, PDF to Word, MP4 to MOV, and more",
            "applicationCategory": "UtilityApplication",
            "operatingSystem": "Web Browser",
            "url": "https://flipfilex.com",
            "author": {
              "@type": "Organization",
              "name": "FlipFileX"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "2847",
              "bestRating": "5",
              "worstRating": "1"
            },
            "featureList": [
              "PDF to Word Conversion",
              "Word to PDF Conversion", 
              "Image Format Conversion",
              "Video Format Conversion",
              "PDF Merge and Split",
              "Batch Processing",
              "Enterprise Security",
              "Mobile Support"
            ]
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-transparent to-purple-50"></div>
            <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-0 right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>
          
          <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="mb-8 animate-fade-in">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-600 rounded-3xl text-white mb-8 shadow-2xl transform hover:scale-110 transition-transform duration-300 animate-bounce">
                  <img src="/logo.png" alt="FlipFileX Logo" className="w-12 h-12" />
                </div>
                <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-8 leading-tight tracking-tight">
                  FlipFileX Pro
                </h1>
                
                <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-5xl mx-auto leading-relaxed font-light">
                  Next-generation file conversion platform. Transform <span className="font-bold text-blue-600">PDFs</span>, 
                  convert <span className="font-bold text-purple-600">images</span> (PNG, WebP, AVIF, JPG, SVG), 
                  process <span className="font-bold text-red-600">videos</span> (MP4, MOV, AVI), and more with 
                  <span className="font-bold text-emerald-600"> enterprise-grade security</span> and 
                  <span className="font-bold text-orange-600"> AI-powered optimization</span>.
                </p>
              </div>

              {/* Service Status */}
              <div className="mb-20">
                {isLoading ? (
                  <div className="inline-flex items-center space-x-4 text-gray-600 bg-white px-8 py-4 rounded-2xl shadow-xl border border-gray-200 backdrop-blur-sm">
                    <div className="animate-spin w-6 h-6 border-3 border-gray-300 border-t-blue-600 rounded-full"></div>
                    <span className="font-semibold text-lg">Initializing conversion engines...</span>
                  </div>
                ) : healthStatus ? (
                  <div className="inline-flex items-center space-x-4 text-green-800 bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 px-8 py-4 rounded-2xl shadow-xl border border-green-300 backdrop-blur-sm">
                    <div className="relative">
                      <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"></div>
                      <div className="absolute inset-0 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                    </div>
                    <span className="font-bold text-lg">All Systems Operational</span>
                    <span className="text-green-700 font-medium">• High Performance Mode • v{healthStatus.version}</span>
                  </div>
                ) : (
                  <div className="inline-flex items-center space-x-4 text-red-800 bg-gradient-to-r from-red-50 to-pink-50 px-8 py-4 rounded-2xl shadow-xl border border-red-300 backdrop-blur-sm">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="font-bold text-lg">Service Temporarily Unavailable</span>
                  </div>
                )}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                {[
                  { number: '2.8M+', label: 'Files Converted', icon: '📁' },
                  { number: '50K+', label: 'Active Users', icon: '👥' },
                  { number: '15sec', label: 'Avg Process Time', icon: '⚡' },
                  { number: '99.9%', label: 'Uptime Rate', icon: '🚀' }
                ].map((stat, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Professional Conversion Tools</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade solutions designed for speed, precision, and uncompromising security
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mb-24">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                href={feature.href}
                className={`group block relative overflow-hidden rounded-3xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl bg-white border border-gray-200 shadow-xl hover:rotate-1 ${feature.gradient}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
                <div className="p-8 text-center relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${feature.bgColor} rounded-2xl text-4xl mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-gray-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-8 text-base">
                    {feature.description}
                  </p>
                  <div className={`inline-flex items-center ${feature.textColor} font-bold text-base group-hover:gap-4 gap-3 transition-all bg-white/80 px-6 py-3 rounded-full shadow-md group-hover:shadow-lg`}>
                    Start Converting
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </Link>
            ))}
          </div>
        </section>

        {/* Image Converter Tools Section */}
        <section className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl border border-blue-200/50 shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
              <div className="absolute top-40 right-20 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-delayed"></div>
              <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
            </div>
            
            <div className="relative z-10 p-8 md:p-16">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl text-white text-3xl mb-8 shadow-xl animate-pulse">
                  🎨
                </div>
                <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent mb-8">
                  Image Conversion Studio
                </h2>
                <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
                  Transform images between all popular formats with AI-powered optimization and pixel-perfect quality preservation
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
                {imageConverterTools.map((tool, index) => (
                  <Link
                    key={tool.name}
                    href={tool.href}
                    className="relative group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:-rotate-1 overflow-hidden"
                  >
                    {tool.popular && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                        POPULAR
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-3xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        {tool.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-6 group-hover:text-gray-700">{tool.description}</p>
                      <div className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all bg-blue-50 px-4 py-2 rounded-full group-hover:bg-blue-100">
                        Convert Now
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/tools#image-converters"
                  className="inline-flex items-center text-blue-700 font-bold hover:text-blue-800 transition-colors bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl border border-blue-200 group"
                >
                  Explore All Image Tools
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Video Converter Tools Section */}
        <section className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50 rounded-3xl border border-red-200/50 shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-20 right-10 w-36 h-36 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
              <div className="absolute bottom-10 left-20 w-28 h-28 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-delayed"></div>
              <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
            </div>

            <div className="relative z-10 p-8 md:p-16">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-orange-600 rounded-3xl text-white text-3xl mb-8 shadow-xl animate-pulse">
                  🎬
                </div>
                <h2 className="text-5xl font-bold bg-gradient-to-r from-red-700 to-orange-700 bg-clip-text text-transparent mb-8">
                  Video Processing Lab
                </h2>
                <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
                  Convert video formats with advanced codecs while maintaining quality and optimizing for different platforms
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
                {videoConverterTools.map((tool, index) => (
                  <Link
                    key={tool.name}
                    href={tool.href}
                    className="relative group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:rotate-1 overflow-hidden"
                  >
                    {tool.popular && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-red-400 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md animate-pulse">
                        HOT
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-3xl mb-4 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                        {tool.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-6 group-hover:text-gray-700">{tool.description}</p>
                      <div className="inline-flex items-center text-red-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all bg-red-50 px-4 py-2 rounded-full group-hover:bg-red-100">
                        Convert Now
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/tools#video-converters"
                  className="inline-flex items-center text-red-700 font-bold hover:text-red-800 transition-colors bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl border border-red-200 group"
                >
                  Explore All Video Tools
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Audio Converter Tools Section */}
        <section className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-orange-50 rounded-3xl border border-purple-200/50 shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
              <div className="absolute top-40 right-20 w-24 h-24 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-delayed"></div>
              <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
            </div>

            <div className="relative z-10 p-8 md:p-16">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-orange-600 rounded-3xl text-white text-3xl mb-8 shadow-xl animate-pulse">
                  🎵
                </div>
                <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-700 to-orange-700 bg-clip-text text-transparent mb-8">
                  Audio Processing Studio
                </h2>
                <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
                  High-quality audio format conversion with perfect sound preservation and optimized compression for all your music needs
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
                {audioConverterTools.map((tool, index) => (
                  <Link
                    key={tool.name}
                    href={tool.href}
                    className="relative group bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:-rotate-1 overflow-hidden"
                  >
                    {tool.popular && (
                      <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md animate-pulse">
                        POPULAR
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <div className="text-3xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                        {tool.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-6 group-hover:text-gray-700">{tool.description}</p>
                      <div className="inline-flex items-center text-purple-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all bg-purple-50 px-4 py-2 rounded-full group-hover:bg-purple-100">
                        Convert Now
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center">
                <Link
                  href="/tools#audio-converters"
                  className="inline-flex items-center text-purple-700 font-bold hover:text-purple-800 transition-colors bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl border border-purple-200 group"
                >
                  Explore All Audio Tools
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl border border-gray-200">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
            
            <div className="relative z-10 p-8 md:p-16">
              <div className="text-center mb-20">
                <h2 className="text-5xl font-bold text-gray-900 mb-8">
                  Why FlipFileX Pro Leads the Industry
                </h2>
                <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                  Experience the perfect fusion of cutting-edge technology, military-grade security, and intuitive design crafted for professionals who demand excellence.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className={`text-center group p-8 rounded-3xl ${benefit.bgColor} border ${benefit.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1`}>
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl text-4xl mb-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                      {benefit.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-gray-700 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted by Professionals Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join millions of users who rely on our enterprise-grade conversion tools for mission-critical workflows
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { number: '25+', label: 'Conversion Formats', icon: '🛠️', color: 'from-blue-500 to-cyan-500' },
              { number: '100MB', label: 'Max File Size', icon: '📁', color: 'from-green-500 to-emerald-500' },
              { number: '15sec', label: 'Average Speed', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
              { number: '100%', label: 'Forever Free', icon: '🎉', color: 'from-purple-500 to-pink-500' }
            ].map((stat, index) => (
              <div key={index} className="relative group bg-white rounded-3xl p-8 text-center shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">{stat.icon}</div>
                  <div className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-semibold text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Success Stories from Our Community</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">Hear how FlipFileX Pro transforms workflows for professionals across industries</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-yellow-400 fill-current mr-1 group-hover:scale-110 transition-transform" style={{animationDelay: `${i * 100}ms`}} viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8 leading-relaxed italic text-lg font-medium">&quot;{testimonial.content}&quot;</p>
                  <div className="flex items-center">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform">{testimonial.avatar}</div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full -ml-40 -mb-40 animate-pulse" style={{animationDelay: '2s'}}></div>
            
            <div className="relative z-10 p-8 md:p-16 text-white text-center">
              <h2 className="text-5xl md:text-6xl font-bold mb-8">
                Ready to Transform Your Workflow?
              </h2>
              <p className="text-2xl mb-16 text-blue-100 max-w-3xl mx-auto font-light">
                Join over 50,000 professionals who trust our secure, lightning-fast, and enterprise-grade conversion platform
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-12">
                {[
                  { text: 'PDF to Word', href: '/convert-pdf-to-word-online' },
                  { text: 'Word to PDF', href: '/word-to-pdf-online' },
                  { text: 'PNG to WebP', href: '/png-to-webp' },
                  { text: 'AVIF to PNG', href: '/avif-to-png' },
                  { text: 'WebP to PNG', href: '/webp-to-png' },
                  { text: 'JPG to PNG', href: '/jpg-to-png' },
                  { text: 'MP4 to MOV', href: '/mp4-to-mov' },
                  { text: 'MOV to MP4', href: '/mov-to-mp4' }
                ].map((link, index) => (
                  <Link key={index} href={link.href} className="bg-white/20 backdrop-blur-sm text-white px-4 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg text-center border border-white/20">
                    {link.text}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/convert-pdf-to-word-online" className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
                  Start Converting Now
                </Link>
                <Link href="/tools" className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:scale-105 text-lg">
                  Browse All Tools
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Privacy */}
        <section className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-r from-emerald-50 via-white to-blue-50 rounded-3xl border-2 border-emerald-200 shadow-xl">
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-3xl flex items-center justify-center text-4xl text-white shadow-2xl animate-pulse">
                    🛡️
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-4xl font-bold text-emerald-900 mb-8">Enterprise-Grade Security & Privacy</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-emerald-800">
                    {[
                      { title: 'Military-Grade Encryption', desc: 'AES-256 encryption for all file transfers and processing' },
                      { title: 'Zero-Knowledge Architecture', desc: 'Files automatically deleted within 60 minutes of processing' },
                      { title: 'GDPR & SOC 2 Compliant', desc: 'Full compliance with international privacy regulations' },
                      { title: 'No Data Retention', desc: 'We never save, share, access, or analyze your documents' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-white/80 rounded-2xl shadow-lg border border-emerald-100">
                        <div className="text-emerald-600 text-2xl">✓</div>
                        <div>
                          <strong className="text-lg block mb-2">{item.title}:</strong>
                          <span className="text-emerald-700">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="px-4 py-24 mx-auto max-w-5xl sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">Everything you need to know about our professional conversion platform</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors flex items-center">
                    <span className="mr-4 text-2xl">❓</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg pl-12">{faq.answer}</p>
                </div>
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/contact" className="inline-flex items-center text-blue-700 font-bold hover:text-blue-800 transition-colors bg-blue-50 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl border border-blue-200 group text-lg">
              Still have questions? Contact our support team
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 border-t border-gray-200">
          <div className="text-center">
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Start Your Professional Journey Today</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Transform your files with enterprise-grade tools, completely free forever</p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Document Tools</h4>
                <div className="flex flex-col space-y-2">
                  <Link href="/convert-pdf-to-word-online" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">PDF to Word</Link>
                  <Link href="/word-to-pdf-online" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">Word to PDF</Link>
                  <Link href="/merge-pdf-files-free" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">Merge PDFs</Link>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Image Converters</h4>
                <div className="flex flex-col space-y-2">
                  <Link href="/png-to-webp" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">PNG to WebP</Link>
                  <Link href="/avif-to-png" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">AVIF to PNG</Link>
                  <Link href="/webp-to-png" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">WebP to PNG</Link>
                  <Link href="/jpg-to-png" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">JPG to PNG</Link>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Video Tools</h4>
                <div className="flex flex-col space-y-2">
                  <Link href="/mp4-to-mov" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">MP4 to MOV</Link>
                  <Link href="/mov-to-mp4" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">MOV to MP4</Link>
                  <Link href="/avi-to-mp4" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">AVI to MP4</Link>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-gray-600 text-lg">© 2024 FlipFileX Pro v3.0.0 - Professional File Conversion Platform</p>
              <p className="text-gray-500 mt-2">Trusted by professionals worldwide • Enterprise security • Lightning-fast processing</p>
            </div>
          </div>
        </footer>

        {/* Custom CSS for animations */}
        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-float-delayed {
            animation: float-delayed 6s ease-in-out infinite;
            animation-delay: 2s;
          }
          
          .animate-fade-in {
            animation: fadeIn 1s ease-in;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .bg-grid-slate-100 {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23e2e8f0'%3e%3cpath d='m0 .5 32 0M.5 0v32'/%3e%3c/svg%3e");
          }
        `}</style>
      </div>
    </>
  );
}