/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ['flipfilex.com', 'www.flipfilex.com'],
  },
  // Remove API rewrites since we'll handle this via nginx
  // Add environment variables
  env: {
    METADATA_BASE_URL: process.env.METADATA_BASE_URL || 'https://flipfilex.com',
  },
  // Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Output configuration for standalone deployment
  output: 'standalone',
  // Optimize for production
  swcMinify: true,
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;