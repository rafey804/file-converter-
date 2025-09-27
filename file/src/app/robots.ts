// app/robots.ts - Corrected SEO robots configuration
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/*',
          '/admin/*',
          '/_next/*',
          '/private/*',
          '/temp/*',
          '/uploads/*',
          '/download/*',
          '*.json',
          '/search?*',
          '*?preview=*'
        ],
        crawlDelay: 0.5
      },
      {
        userAgent: ['Googlebot', 'Bingbot'],
        allow: '/',
        disallow: ['/api/*', '/admin/*', '/_next/*']
      }
    ],
    sitemap: 'https://flipfilex.com/sitemap.xml',
    host: 'https://flipfilex.com'
  }
}