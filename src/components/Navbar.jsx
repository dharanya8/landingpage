// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with animation */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <Sparkles className="h-7 w-7 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-blue-400 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              AI-Marketo
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 transform">
              Book Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with animation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-3 border-t border-gray-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-600 hover:text-blue-600 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;