// components/ConverterNavigation.tsx - Navigation for popular converters
'use client';

import Link from 'next/link';

interface PopularConverter {
  from: string;
  to: string;
  fromName: string;
  toName: string;
  type: 'image' | 'video';
  popular: boolean;
}

const popularConverters: PopularConverter[] = [
  // Image converters
  { from: 'jpg', to: 'png', fromName: 'JPG', toName: 'PNG', type: 'image', popular: true },
  { from: 'png', to: 'jpg', fromName: 'PNG', toName: 'JPG', type: 'image', popular: true },
  { from: 'avif', to: 'png', fromName: 'AVIF', toName: 'PNG', type: 'image', popular: true },
  { from: 'webp', to: 'png', fromName: 'WebP', toName: 'PNG', type: 'image', popular: true },
  { from: 'png', to: 'webp', fromName: 'PNG', toName: 'WebP', type: 'image', popular: true },
  { from: 'svg', to: 'png', fromName: 'SVG', toName: 'PNG', type: 'image', popular: true },
  { from: 'heic', to: 'jpg', fromName: 'HEIC', toName: 'JPG', type: 'image', popular: true },
  { from: 'gif', to: 'mp4', fromName: 'GIF', toName: 'MP4', type: 'image', popular: true },
  
  // Video converters
  { from: 'mp4', to: 'mov', fromName: 'MP4', toName: 'MOV', type: 'video', popular: true },
  { from: 'mov', to: 'mp4', fromName: 'MOV', toName: 'MP4', type: 'video', popular: true },
  { from: 'avi', to: 'mp4', fromName: 'AVI', toName: 'MP4', type: 'video', popular: true },
  { from: 'mkv', to: 'mp4', fromName: 'MKV', toName: 'MP4', type: 'video', popular: true },
  { from: 'webm', to: 'mp4', fromName: 'WebM', toName: 'MP4', type: 'video', popular: true },
  { from: 'flv', to: 'mp4', fromName: 'FLV', toName: 'MP4', type: 'video', popular: true }
];

export default function ConverterNavigation() {
  const imageConverters = popularConverters.filter(c => c.type === 'image');
  const videoConverters = popularConverters.filter(c => c.type === 'video');

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Converters</h2>
          <p className="text-gray-600">Quick access to our most used conversion tools</p>
        </div>

        {/* Image Converters */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <span className="text-purple-600 mr-3">🖼️</span>
            Image Converters
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {imageConverters.map((converter, index) => (
              <Link
                key={index}
                href={`/${converter.from}-to-${converter.to}`}
                className="bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-200 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-purple-300"
              >
                <div className="text-sm font-bold text-purple-600 mb-2">
                  {converter.fromName} → {converter.toName}
                </div>
                <div className="text-xs text-gray-500">
                  .{converter.from} to .{converter.to}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Video Converters */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
            <span className="text-red-600 mr-3">🎬</span>
            Video Converters
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {videoConverters.map((converter, index) => (
              <Link
                key={index}
                href={`/${converter.from}-to-${converter.to}`}
                className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-red-300"
              >
                <div className="text-sm font-bold text-red-600 mb-2">
                  {converter.fromName} → {converter.toName}
                </div>
                <div className="text-xs text-gray-500">
                  .{converter.from} to .{converter.to}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Converters Link */}
        <div className="text-center mt-12">
          <Link
            href="/tools"
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>View All Converters</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}