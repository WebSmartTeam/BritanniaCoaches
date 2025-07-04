'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
        ? 'bg-britannia-surface/70 backdrop-blur-xl shadow-soft border-b border-white/10' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute -inset-2 bg-britannia-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <Image
                src="/images/logos/logo.png"
                alt="Britannia Coaches"
                width={60}
                height={44}
                className="h-12 w-auto relative z-10 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-britannia-primary to-britannia-primary-light bg-clip-text text-transparent">
                Britannia Coaches
              </h1>
              <p className="text-xs text-britannia-text-light font-medium">Premium Transportation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-6 py-3 text-britannia-text hover:text-britannia-primary font-medium transition-all duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-britannia-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-britannia-accent transition-all duration-300 group-hover:w-8 transform -translate-x-1/2"></div>
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden xl:flex items-center space-x-6">
            <div className="text-right">
              <div className="text-sm text-britannia-text-light font-medium">Premium Hotline</div>
              <a
                href="tel:01462436125"
                className="text-lg font-bold text-britannia-primary hover:text-britannia-accent transition-colors duration-300"
              >
                01462 436125
              </a>
            </div>
            <Link
              href="/contact"
              className="btn-primary"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-3 rounded-2xl bg-britannia-surface/80 backdrop-blur-md border border-white/20 hover:bg-britannia-primary/10 transition-all duration-300"
            aria-label="Toggle navigation menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 top-1 w-6 h-0.5 bg-britannia-primary transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-3' : ''
              }`}></span>
              <span className={`absolute left-0 top-3 w-6 h-0.5 bg-britannia-primary transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute left-0 top-5 w-6 h-0.5 bg-britannia-primary transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-3' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-6 border-t border-white/10">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-6 py-4 text-britannia-text hover:text-britannia-primary hover:bg-britannia-primary/5 rounded-2xl font-medium transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            <div className="px-6 py-6 border-t border-white/10 mt-6">
              <div className="text-center mb-4">
                <div className="text-sm text-britannia-text-light font-medium">Premium Hotline</div>
                <a
                  href="tel:01462436125"
                  className="text-2xl font-bold text-britannia-primary hover:text-britannia-accent transition-colors duration-300"
                >
                  01462 436125
                </a>
              </div>
              <Link
                href="/contact"
                className="btn-primary w-full text-center block"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Premium Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;