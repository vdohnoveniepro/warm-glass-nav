
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
    <nav className="fixed bottom-0 left-0 right-0 frosted-glass py-2 px-1 z-50 border-t border-white/20">
      <div className="max-w-md mx-auto flex justify-between items-center">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center px-3 pt-2 pb-1 rounded-lg transition-all duration-300",
              location.pathname === item.path
                ? "text-indigo-600 font-medium"
                : "text-gray-600 hover:text-gray-800",
              item.special && "relative"
            )}
          >
            {item.special ? (
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-3 mb-1 shadow-lg relative z-10 hover:shadow-indigo-200/50 hover:translate-y-[-2px] transition-all">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xs font-medium">
                  {item.name}
                </span>
              </div>
            ) : (
              <>
                <item.icon className="w-5 h-5 mb-1" />
                <span className="text-xs">
                  {item.name}
                </span>
              </>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
