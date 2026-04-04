import React, { useState } from 'react';
import { Menu, X, Trophy, Calendar, Home, Store, Newspaper, Youtube, MapPin, Users, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'The Club', icon: Users, href: '#club' },
    { name: 'Matches', icon: Calendar, href: '#matches' },
    { name: 'Trophies', icon: Trophy, href: '#trophies' },
    { name: 'Gallery', icon: Shield, href: '#gallery' },
    { name: 'Events', icon: Calendar, href: '#events' },
    { name: 'Store', icon: Store, href: '#store' },
    { name: 'News', icon: Newspaper, href: '#news' },
    { name: 'YouTube', icon: Youtube, href: '#youtube' },
    { name: 'Schedule', icon: Calendar, href: '#schedule' },
    { name: 'Stadium', icon: MapPin, href: '#stadium' },
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '#careers' },
  ];

  return (
    <nav className="bg-blue-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-yellow-400">TSSA</h1>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-colors"
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                {item.icon && <item.icon className="w-5 h-5" />}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
