
// next.config.js - Simplified configuration for clean URLs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Simplified config to fix chunk loading issues
  swcMinify: true,

  // Basic webpack config for chunk loading fix
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },

  // Optional: Add redirects if you want to support both URL formats
  async redirects() {
    return [
      // Redirect old converter URLs to clean format
      {
        source: '/:from-to-:to-converter',
        destination: '/:from-to-:to',
        permanent: true,
      },
      // Redirect /converter prefix URLs
      {
        source: '/converter/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;