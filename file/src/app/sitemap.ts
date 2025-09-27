// app/sitemap.ts - Optimized version to prevent 2000+ URL generation
import type { MetadataRoute } from 'next'

interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://flipfilex.com';
  
  // High-demand conversions only (based on search volume data)
  const popularImageConversions = [
    'jpg-to-png', 'png-to-jpg', 'webp-to-png', 'png-to-webp',
    'avif-to-png', 'png-to-avif', 'heic-to-jpg', 'svg-to-png',
    'jpeg-to-png', 'png-to-jpeg', 'gif-to-png', 'bmp-to-png',
    'tiff-to-png', 'ico-to-png', 'webp-to-jpg', 'avif-to-webp',
    'heic-to-png', 'svg-to-jpg', 'png-to-gif', 'jpg-to-webp'
  ];
  
  const popularVideoConversions = [
    'mp4-to-mov', 'mov-to-mp4', 'avi-to-mp4', 'mkv-to-mp4',
    'webm-to-mp4', 'flv-to-mp4', 'wmv-to-mp4', 'mp4-to-webm',
    'mov-to-avi', 'avi-to-mov'
  ];
  
  const popularAudioConversions = [
    'wav-to-mp3', 'mp3-to-wav', 'flac-to-mp3', 'aac-to-mp3',
    'm4a-to-mp3', 'ogg-to-mp3', 'mp3-to-aac'
  ];
  
  const documentConversions = [
    'pdf-to-word', 'word-to-pdf', 'excel-to-pdf', 'powerpoint-to-pdf',
    'text-to-pdf', 'html-to-pdf', 'csv-to-excel', 'json-to-csv',
    'pdf-to-excel', 'pdf-to-powerpoint'
  ];

  // Helper function to determine priority based on popularity
  const getPriority = (conversion: string): number => {
    const highDemand = ['jpg-to-png', 'png-to-jpg', 'pdf-to-word', 'word-to-pdf', 'webp-to-png'];
    const mediumDemand = ['mp4-to-mov', 'wav-to-mp3', 'avif-to-png'];
    
    if (highDemand.includes(conversion)) return 0.95;
    if (mediumDemand.includes(conversion)) return 0.85;
    return 0.7;
  };

  const converterUrls: SitemapEntry[] = [];
  
  // Add high-demand image conversions
  popularImageConversions.forEach(conversion => {
    converterUrls.push({
      url: `${baseUrl}/${conversion}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: getPriority(conversion),
    });
  });
  
  // Add popular video conversions
  popularVideoConversions.forEach(conversion => {
    converterUrls.push({
      url: `${baseUrl}/${conversion}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: getPriority(conversion),
    });
  });

  // Add popular audio conversions
  popularAudioConversions.forEach(conversion => {
    converterUrls.push({
      url: `${baseUrl}/${conversion}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: getPriority(conversion),
    });
  });

  // Add document conversions
  documentConversions.forEach(conversion => {
    converterUrls.push({
      url: `${baseUrl}/${conversion}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: getPriority(conversion),
    });
  });

  return [
    // Main pages (highest priority)
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    
    // Category pages
    {
      url: `${baseUrl}/image-converter`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/video-converter`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/audio-converter`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/document-converter`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pdf-tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    
    // Essential pages
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    
    // All converter URLs
    ...converterUrls,
  ];
}

// Total URLs: ~70-80 instead of 2000+
// This focuses on high-value, high-search-volume conversions
// Better for SEO, faster indexing, improved crawl budget efficiency