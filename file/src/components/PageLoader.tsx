'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
    </div>
  );
}