'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        ? 'bg-britannia-cream/95 backdrop-blur-md shadow-elegant border-b elegant-border' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Clean and Elegant */}
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/images/logos/logo.png"
              alt="Britannia Coaches"
              width={48}
              height={35}
              className="h-10 w-auto transition-transform duration-200 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-serif font-semibold text-britannia-navy">
                Britannia Coaches
              </h1>
              <p className="text-xs text-britannia-slate">Premium Transportation</p>
            </div>
          </Link>

          {/* Desktop Navigation - Clean Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-britannia-charcoal hover:text-britannia-navy font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-britannia-gold transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Contact & CTA - Elegant */}
          <div className="hidden xl:flex items-center space-x-6">
            <div className="text-right">
              <div className="text-sm text-britannia-slate">Call us now</div>
              <a
                href="tel:01462436125"
                className="text-lg font-semibold text-britannia-navy hover:text-britannia-red transition-colors duration-200"
              >
                01462 436125
              </a>
            </div>
            <Link href="/contact" className="btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button - Clean */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-britannia-pearl transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute left-0 top-1 w-6 h-0.5 bg-britannia-navy transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-3' : ''
              }`}></span>
              <span className={`absolute left-0 top-3 w-6 h-0.5 bg-britannia-navy transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute left-0 top-5 w-6 h-0.5 bg-britannia-navy transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-3' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation - Clean */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t elegant-border">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-britannia-charcoal hover:text-britannia-navy hover:bg-britannia-pearl rounded-lg font-medium transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="px-4 py-6 border-t elegant-border mt-6">
              <div className="text-center mb-4">
                <div className="text-sm text-britannia-slate">Call us now</div>
                <a
                  href="tel:01462436125"
                  className="text-xl font-semibold text-britannia-navy hover:text-britannia-red transition-colors duration-200"
                >
                  01462 436125
                </a>
              </div>
              <Link
                href="/contact"
                className="btn-primary w-full text-center block"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;