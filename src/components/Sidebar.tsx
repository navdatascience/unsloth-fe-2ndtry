import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Settings, Layout } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Sidebar() {
  const location = useLocation();
  const { isDarkMode } = useTheme();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Layout },
    { name: 'Documents', href: '/documents', icon: FileText },
    { name: 'Settings', href: '/settings', icon: Settings },
  ];

  return (
    <div className={`w-64 flex-shrink-0 ${isDarkMode ? 'bg-dark-surface' : 'bg-white'} border-r ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="h-16 flex items-center justify-center">
        <h1 className="text-xl font-bold">Unsloth</h1>
      </div>
      <nav className="mt-5 flex-1 px-2 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`${
                isActive
                  ? 'bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100'
                  : `${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-50'}`
              } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
            >
              <Icon className="mr-3 h-6 w-6" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}