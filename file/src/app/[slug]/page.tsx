// app/[slug]/page.tsx - Updated with full converter support and URL shortener
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import SEOOptimizedImageConverter from '@/components/SEOOptimizedImageConverter';
import VideoFormatConverter from '@/components/VideoFormatConverter';
import AudioFormatConverter from '@/components/AudioFormatConverter';
import DocumentConverter from '@/components/DocumentConverter';
import FontFormatConverter from '@/components/FontFormatConverter';
import URLRedirect from '@/components/URLRedirect';

// Format definitions - Updated to include all formats
const IMAGE_FORMATS = [
  'avif', 'webp', 'png', 'jpg', 'jpeg', 'gif', 'bmp', 'tiff', 'ico', 'heic', 'svg', 'pdf',
  'ai', 'eps', 'cdr', 'psd', 'xcf', 'pcx', 'gltf', 'obj', 'fbx', 'stl'
];
const VIDEO_FORMATS = ['mp4', 'mov', 'wmv', 'avi', 'mkv', 'flv', 'webm', 'mpeg', 'h264', 'h265'];
const AUDIO_FORMATS = ['mp3', 'wav', 'flac', 'aac', 'm4a', 'ogg', 'wma', 'aiff', 'opus', 'ac3'];
const FONT_FORMATS = ['ttf', 'otf', 'woff', 'woff2', 'eot', 'svg', 'ps1'];

// Document conversion formats - based on your backend
const DOCUMENT_CONVERSIONS = [
  'excel-to-pdf', 'powerpoint-to-pdf', 'text-to-pdf',
  'html-to-pdf', 'csv-to-excel', 'json-to-csv'
];

// PDF and Utility tool routes that have dedicated pages
const PDF_UTILITY_ROUTES = [
  'split-pdf-pages', 'compress-pdf', 'pdf-password-protection',
  'merge-pdf-files-free', 'convert-pdf-to-word-online',
  'word-to-pdf-online', 'pdf-to-images-converter',
  'qr-code-generator', 'barcode-generator', 'password-generator',
  'hash-generator', 'url-shortener', 'color-palette-generator',
  'base64-encoder-decoder', 'image-compressor', 'ocr-image-to-text'
];

interface ConverterPageProps {
  params: {
    slug: string;
  };
}

// Check if slug is a potential short code (6 chars, alphanumeric, no dashes)
function isShortCode(slug: string): boolean {
  return slug.length === 6 && /^[a-zA-Z0-9]+$/.test(slug);
}

// Parse converter URL format: "wav-to-mp3" or "excel-to-pdf"
function parseConverterSlug(slug: string): {
  from: string;
  to: string;
  type: 'image' | 'video' | 'audio' | 'document' | 'font';
  conversionType?: string; // For document conversions
} | null {
  
  // Check if it's a document conversion first
  if (DOCUMENT_CONVERSIONS.includes(slug)) {
    const conversionType = slug.replace(/-/g, '_'); // Convert excel-to-pdf to excel_to_pdf
    const parts = slug.split('-to-');
    return {
      from: parts[0],
      to: parts[1],
      type: 'document',
      conversionType
    };
  }

  // Check regular format conversions
  if (!slug.includes('-to-')) {
    return null;
  }

  const parts = slug.split('-');
  const toIndex = parts.lastIndexOf('to');
  
  if (toIndex === -1 || toIndex === 0 || toIndex === parts.length - 1) {
    return null;
  }

  const sourceFormat = parts.slice(0, toIndex).join('-');
  const targetFormat = parts.slice(toIndex + 1).join('-');

  if (!sourceFormat || !targetFormat || sourceFormat === targetFormat) {
    return null;
  }

  // Determine conversion type
  const isImageConversion = IMAGE_FORMATS.includes(sourceFormat) && IMAGE_FORMATS.includes(targetFormat);
  const isVideoConversion = VIDEO_FORMATS.includes(sourceFormat) && VIDEO_FORMATS.includes(targetFormat);
  const isAudioConversion = AUDIO_FORMATS.includes(sourceFormat) && AUDIO_FORMATS.includes(targetFormat);
  const isFontConversion = FONT_FORMATS.includes(sourceFormat) && FONT_FORMATS.includes(targetFormat);

  if (isImageConversion) {
    return { from: sourceFormat, to: targetFormat, type: 'image' };
  }

  if (isVideoConversion) {
    return { from: sourceFormat, to: targetFormat, type: 'video' };
  }

  if (isAudioConversion) {
    return { from: sourceFormat, to: targetFormat, type: 'audio' };
  }

  if (isFontConversion) {
    return { from: sourceFormat, to: targetFormat, type: 'font' };
  }

  return null;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ConverterPageProps): Promise<Metadata> {
  const converterInfo = parseConverterSlug(params.slug);
  
  if (!converterInfo) {
    return {
      title: 'Page Not Found - FlipFileX',
      description: 'The page you are looking for does not exist.'
    };
  }

  const { from, to, type } = converterInfo;
  
  const formatNames: Record<string, string> = {
    // Image formats
    'avif': 'AVIF', 'webp': 'WebP', 'png': 'PNG', 'jpg': 'JPG', 'jpeg': 'JPEG',
    'gif': 'GIF', 'bmp': 'BMP', 'tiff': 'TIFF', 'ico': 'ICO', 'heic': 'HEIC',
    'svg': 'SVG', 'pdf': 'PDF',
    // Professional/Design formats
    'ai': 'AI', 'eps': 'EPS', 'cdr': 'CDR', 'psd': 'PSD', 'xcf': 'XCF', 'pcx': 'PCX',
    // 3D formats
    'gltf': 'GLTF', 'obj': 'OBJ', 'fbx': 'FBX', 'stl': 'STL',
    // Video formats
    'mp4': 'MP4', 'mov': 'MOV', 'wmv': 'WMV', 'avi': 'AVI', 'mkv': 'MKV',
    'flv': 'FLV', 'webm': 'WebM', 'mpeg': 'MPEG-2', 'h264': 'H.264', 'h265': 'H.265',
    // Audio formats
    'mp3': 'MP3', 'wav': 'WAV', 'flac': 'FLAC', 'aac': 'AAC', 'm4a': 'M4A',
    'ogg': 'OGG', 'wma': 'WMA', 'aiff': 'AIFF', 'opus': 'Opus', 'ac3': 'AC3',
    // Font formats
    'ttf': 'TTF', 'otf': 'OTF', 'woff': 'WOFF', 'woff2': 'WOFF2',
    'eot': 'EOT', 'ps1': 'PS Type 1',
    // Document formats
    'excel': 'Excel', 'powerpoint': 'PowerPoint', 'text': 'Text',
    'html': 'HTML', 'csv': 'CSV', 'json': 'JSON'
  };

  const fromName = formatNames[from] || from.toUpperCase();
  const toName = formatNames[to] || to.toUpperCase();
  
  let mediaType = 'File';
  if (type === 'image') mediaType = 'Image';
  else if (type === 'video') mediaType = 'Video';
  else if (type === 'audio') mediaType = 'Audio';
  else if (type === 'document') mediaType = 'Document';
  else if (type === 'font') mediaType = 'Font';

  return {
    title: `Convert ${fromName} to ${toName} | Free Online ${mediaType} Converter - FlipFileX`,
    description: `Convert ${fromName} to ${toName} online for free. Fast, secure, and high-quality ${type} conversion. No software download required.`,
    openGraph: {
      title: `Convert ${fromName} to ${toName} | FlipFileX`,
      description: `Free online ${fromName} to ${toName} converter. Fast, secure, high-quality conversion.`,
      type: 'website',
      url: `https://flipfilex.com/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Convert ${fromName} to ${toName} | FlipFileX`,
      description: `Free online ${fromName} to ${toName} converter. Fast, secure, high-quality conversion.`,
    },
    alternates: {
      canonical: `https://flipfilex.com/${params.slug}`
    }
  };
}

// Generate static params for popular combinations only
export async function generateStaticParams() {
  // Only generate static params for most popular conversions
  const popularCombinations: { slug: string }[] = [
    // Most popular image conversions
    { slug: 'jpg-to-png' },
    { slug: 'png-to-jpg' },
    { slug: 'webp-to-png' },
    { slug: 'png-to-webp' },
    { slug: 'avif-to-png' },
    { slug: 'png-to-avif' },
    { slug: 'heic-to-jpg' },
    { slug: 'svg-to-png' },
    { slug: 'gif-to-png' },
    { slug: 'jpeg-to-png' },
    { slug: 'png-to-jpeg' },
    { slug: 'bmp-to-png' },
    { slug: 'tiff-to-png' },
    { slug: 'ico-to-png' },
    { slug: 'webp-to-jpg' },
    { slug: 'avif-to-webp' },
    { slug: 'heic-to-png' },
    { slug: 'svg-to-jpg' },
    { slug: 'jpg-to-webp' },

    // Most popular video conversions
    { slug: 'mp4-to-mov' },
    { slug: 'mov-to-mp4' },
    { slug: 'avi-to-mp4' },
    { slug: 'mkv-to-mp4' },
    { slug: 'webm-to-mp4' },
    { slug: 'flv-to-mp4' },
    { slug: 'wmv-to-mp4' },
    { slug: 'mp4-to-webm' },

    // Most popular audio conversions
    { slug: 'wav-to-mp3' },
    { slug: 'mp3-to-wav' },
    { slug: 'flac-to-mp3' },
    { slug: 'aac-to-mp3' },
    { slug: 'm4a-to-mp3' },
    { slug: 'ogg-to-mp3' },

    // Document conversions
    ...DOCUMENT_CONVERSIONS.map(conversion => ({ slug: conversion })),

    // PDF tools - Remove split-pdf-pages since it has a dedicated page
    { slug: 'compress-pdf' },
    { slug: 'pdf-password-protection' },
    { slug: 'merge-pdf-files-free' },
    { slug: 'convert-pdf-to-word-online' },
    { slug: 'word-to-pdf-online' },
    { slug: 'pdf-to-images-converter' },

    // Utility tools
    { slug: 'qr-code-generator' },
    { slug: 'barcode-generator' },
    { slug: 'password-generator' },
    { slug: 'hash-generator' },
    { slug: 'url-shortener' },
    { slug: 'color-palette-generator' },
    { slug: 'base64-encoder-decoder' },
    { slug: 'image-compressor' },
    { slug: 'ocr-image-to-text' }
  ];

  return popularCombinations;
}

// Enable dynamic params for routes not in generateStaticParams
export const dynamicParams = true;

export default function ConverterPage({ params }: ConverterPageProps) {
  // Check if this is a short code for URL redirection
  if (isShortCode(params.slug)) {
    return <URLRedirect shortCode={params.slug} />;
  }

  // Check if this is a PDF/utility tool with a dedicated page
  if (PDF_UTILITY_ROUTES.includes(params.slug)) {
    // These routes have their own dedicated pages, return not found to let Next.js handle routing
    return notFound();
  }

  const converterInfo = parseConverterSlug(params.slug);

  if (!converterInfo) {
    return notFound();
  }

  const { from, to, type, conversionType } = converterInfo;
  
  if (type === 'image') {
    return <SEOOptimizedImageConverter sourceFormat={from} targetFormat={to} />;
  }
  
  if (type === 'video') {
    return <VideoFormatConverter sourceFormat={from} targetFormat={to} />;
  }

  if (type === 'audio') {
    return <AudioFormatConverter sourceFormat={from} targetFormat={to} />;
  }

  if (type === 'document') {
    return <DocumentConverter key={conversionType} conversionType={conversionType} />;
  }

  if (type === 'font') {
    return <FontFormatConverter sourceFormat={from} targetFormat={to} />;
  }

  return notFound();
}