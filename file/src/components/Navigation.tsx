'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

// Define the navigation item type inline to avoid external type conflicts
interface NavItem {
  name: string;
  href: string;
  emoji: string;
  description: string;
}

// Navigation items with emojis and descriptions - includes both main tools and SEO pages
const navigationItems: NavItem[] = [
  {
    name: 'Home',
    href: '/',
    emoji: '🏠',
    description: 'Main dashboard and tools overview'
  },
  {
    name: 'PDF to Word',
    href: '/convert-pdf-to-word-online',
    emoji: '📝',
    description: 'Convert PDF files to editable Word documents'
  },
  {
    name: 'Word to PDF',
    href: '/word-to-pdf-online',
    emoji: '📄',
    description: 'Transform Word documents into PDF files'
  },
  {
    name: 'Merge PDFs',
    href: '/merge-pdf-files-free',
    emoji: '🔗',
    description: 'Combine multiple PDF files into one'
  },
  {
    name: 'PDF to Images',
    href: '/pdf-to-images-converter',
    emoji: '🖼️',
    description: 'Convert PDF pages to image files'
  },
  {
    name: 'Blog',
    href: '/blog',
    emoji: '📰',
    description: 'Read our latest articles and tips'
  },
];

// SEO landing pages - these won't show in navigation but will be recognized as active paths
const seoPages = [
  '/convert-pdf-to-word-online',
  '/cookies',
  '/merge-pdf-files-free',
  '/pdf-to-images-converter',
  '/privacy-policy',
  '/terms',
  '/word-to-pdf-online',
  '/blog'
];

// Icon components for additional visual enhancement
const HomeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const DocumentTextIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const DocumentIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const LinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const PhotographIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const BlogIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
  </svg>
);

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check if current path is active (includes SEO pages that map to main tools)
  const isPathActive = (itemHref: string) => {
    if (pathname === itemHref) return true;
    
    // Map SEO pages to their corresponding main tool pages
    const seoToMainMapping: { [key: string]: string } = {
      '/convert-pdf-to-word-online': '/pdf-to-word',
      '/word-to-pdf-online': '/word-to-pdf',
      '/merge-pdf-files-free': '/merge-pdf',
      '/pdf-to-images-converter': '/pdf-to-images'
    };
    
    return seoToMainMapping[pathname] === itemHref;
  };

  // Get the appropriate SVG icon for each navigation item
  const getSvgIcon = (itemName: string, className?: string) => {
    switch (itemName) {
      case 'Home':
        return <HomeIcon className={className} />;
      case 'PDF to Word':
        return <DocumentTextIcon className={className} />;
      case 'Word to PDF':
        return <DocumentIcon className={className} />;
      case 'Merge PDFs':
        return <LinkIcon className={className} />;
      case 'PDF to Images':
        return <PhotographIcon className={className} />;
      case 'Blog':
        return <BlogIcon className={className} />;
      default:
        return null;
    }
  };

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-white shadow-sm border-b border-gray-200'
        }
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo Section */}
            <div className="flex items-center">
              <Link 
                href="/" 
                className="flex items-center space-x-3 group transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    📄
                  </div>
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    PDF Converter Pro
                  </span>
                  <div className="text-xs text-gray-500 font-medium">
                    Professional Document Tools
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navigationItems.map((item) => {
                const isActive = isPathActive(item.href);
                
                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      className={`
                        relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                        flex items-center space-x-2 overflow-hidden
                        ${isActive
                          ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg transform scale-105'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }
                      `}
                    >
                      <div className="flex items-center space-x-2">
                        {/* Emoji for visual appeal */}
                        <span className="text-base">{item.emoji}</span>
                        {/* SVG Icon for consistency */}
                        <div className={`w-4 h-4 ${isActive ? 'text-white opacity-30' : 'text-gray-500 opacity-0 group-hover:opacity-100'} transition-opacity duration-300`}>
                          {getSvgIcon(item.name, 'w-4 h-4')}
                        </div>
                      </div>
                      <span>{item.name}</span>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 animate-pulse rounded-xl"></div>
                      )}
                    </Link>
                    
                    {/* Tooltip */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                      {item.description}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center">
              <div className="lg:hidden mobile-menu-container">
                <button
                  type="button"
                  onClick={toggleMobileMenu}
                  className={`
                    relative p-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500
                    ${isMobileMenuOpen 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                    }
                  `}
                  aria-label="Toggle navigation menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <div className="w-6 h-6 relative">
                    <span className={`
                      absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out
                      ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'}
                    `} />
                    <span className={`
                      absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out translate-y-2.5
                      ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}
                    `} />
                    <span className={`
                      absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out
                      ${isMobileMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'}
                    `} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`
          lg:hidden mobile-menu-container overflow-hidden transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-2">
              {navigationItems.map((item, index) => {
                const isActive = isPathActive(item.href);
                
                return (
                  <div
                    key={item.name}
                    className={`
                      transform transition-all duration-300 ease-out
                      ${isMobileMenuOpen 
                        ? 'translate-x-0 opacity-100' 
                        : 'translate-x-4 opacity-0'
                      }
                    `}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <Link
                      href={item.href}
                      className={`
                        group flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300
                        ${isActive
                          ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 shadow-md'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 border border-transparent'
                        }
                      `}
                    >
                      <div className={`
                        w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 relative
                        ${isActive 
                          ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg' 
                          : 'bg-gray-100 group-hover:bg-gray-200'
                        }
                      `}>
                        <span className="text-lg z-10">{item.emoji}</span>
                        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isActive ? 'opacity-20' : 'opacity-0 group-hover:opacity-60'}`}>
                          {getSvgIcon(item.name, 'w-5 h-5')}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{item.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                      </div>
                      {isActive && (
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-medium text-blue-600">Active</span>
                        </div>
                      )}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16"></div>
    </>
  );
}