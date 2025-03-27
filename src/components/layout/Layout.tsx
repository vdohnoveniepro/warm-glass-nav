
import React from 'react';
import Navbar from './Navbar';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  hideNavbar?: boolean;
}

const Layout = ({ children, className, hideNavbar = false }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-warmbeige-50 to-warmbeige-100 overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-noise pointer-events-none"></div>
      <main className={cn(
        "max-w-md mx-auto px-4 pt-6 pb-24 min-h-screen",
        className
      )}>
        {children}
      </main>
      {!hideNavbar && <Navbar />}
    </div>
  );
};

export default Layout;
