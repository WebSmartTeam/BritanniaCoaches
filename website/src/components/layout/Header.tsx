'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-clean-md' 
        : 'bg-white'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logos/logo.png"
              alt="Britannia Coaches"
              width={40}
              height={30}
              className="h-8 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-semibold text-gray-900">
                Britannia Coaches
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block text-right">
              <div className="text-sm text-gray-500">Call us</div>
              <a
                href="tel:01462436125"
                className="text-lg font-semibold text-gray-900 hover:text-primary-600 transition-colors duration-200"
              >
                01462 436125
              </a>
            </div>
            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute left-0 top-1 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-3' : ''
              }`}></span>
              <span className={`absolute left-0 top-3 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute left-0 top-5 w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-3' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="px-4 py-4 border-t border-gray-200 mt-4">
              <div className="text-center mb-3">
                <div className="text-sm text-gray-500">Call us</div>
                <a
                  href="tel:01462436125"
                  className="text-xl font-semibold text-gray-900 hover:text-primary-600 transition-colors duration-200"
                >
                  01462 436125
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;