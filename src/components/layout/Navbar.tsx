
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpenText, Calendar, FileText, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Главная', path: '/', icon: Home },
    { name: 'Услуги', path: '/services', icon: BookOpenText },
    { name: 'Записаться', path: '/book', icon: Calendar, special: true },
    { name: 'Статьи', path: '/articles', icon: FileText },
    { name: 'Кабинет', path: '/profile', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-nav py-2 px-1 z-50">
      <div className="max-w-md mx-auto flex justify-between items-center">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center px-3 pt-2 pb-1 rounded-lg transition-all duration-300",
              location.pathname === item.path
                ? "text-primary font-medium"
                : "text-warmgray-600 hover:text-warmgray-800",
              item.special && "relative"
            )}
          >
            {item.special ? (
              <div className="relative">
                <div className="absolute inset-0 rounded-full animate-glow"></div>
                <div className="bg-primary rounded-full p-3 mb-1 shadow-md relative z-10">
                  <item.icon className="w-6 h-6 text-warmgray-800" />
                </div>
              </div>
            ) : (
              <item.icon className="nav-icon" />
            )}
            <span className={cn(
              "text-xs mt-1",
              item.special && "font-medium"
            )}>
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
