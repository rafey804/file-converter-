'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define the navigation item type inline to avoid external type conflicts
interface NavItem {
  name: string;
  href: string;
  description: string;
}

// Navigation items - removed emojis as requested
const navigationItems: NavItem[] = [
  {
    name: 'Home',
    href: '/',
    description: 'Main dashboard and tools overview'
  },
  {
    name: 'PDF to Word',
    href: '/convert-pdf-to-word-online',
    description: 'Convert PDF files to editable Word documents'
  },
  {
    name: 'Word to PDF',
    href: '/word-to-pdf-online',
    description: 'Transform Word documents into PDF files'
  },
  {
    name: 'Merge PDFs',
    href: '/merge-pdf-files-free',
    description: 'Combine multiple PDF files into one'
  },
  {
    name: 'PDF to Images',
    href: '/pdf-to-images-converter',
    description: 'Convert PDF pages to image files'
  },
  {
    name: 'Blog',
    href: '/blog',
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
                  <Image
                    src="/logo.png"
                    alt="FlipFilex Logo"
                    width={40}
                    height={40}
                    className="rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    FlipFilex
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