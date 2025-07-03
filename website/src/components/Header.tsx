'use client';

import { useState } from 'react';
import { Phone, MapPin, Menu, X, ChevronDown, Clock, Bus } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      dropdown: [
        { name: 'Group Travel', href: '/services/group-travel' },
        { name: 'Corporate Transport', href: '/services/corporate' },
        { name: 'Airport Transfers', href: '/services/airport-transfers' },
        { name: 'School Transport', href: '/services/school-transport' },
        { name: 'Special Events', href: '/services/special-events' },
        { name: 'Day Tours', href: '/services/day-tours' },
      ]
    },
    {
      name: 'Our Fleet',
      href: '/fleet',
      dropdown: [
        { name: 'Executive Coaches', href: '/fleet/executive-coaches' },
        { name: 'Mini Buses', href: '/fleet/mini-buses' },
        { name: 'Luxury Coaches', href: '/fleet/luxury-coaches' },
        { name: 'Accessible Vehicles', href: '/fleet/accessible' },
      ]
    },
    { name: 'About Us', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Brand Top Bar */}
      <div className="bg-britannia-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-britannia-red" />
                <span>24/7 Emergency Service Available</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-britannia-red" />
                <span>Serving UK Wide • 35+ Years Experience</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:info@britanniacoaches.co.uk" className="hover:text-britannia-red transition-colors opacity-90 hover:opacity-100">
                info@britanniacoaches.co.uk
              </a>
              <a href="tel:01462436125" className="font-semibold text-white hover:text-britannia-red transition-colors">
                01462 436125
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-neutral-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Brand Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <div className="bg-britannia-primary text-white p-2 rounded-lg shadow-md">
                  <Bus className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-britannia-text">
                    Britannia Coaches
                  </div>
                  <div className="text-xs text-britannia-text/70">Professional Transportation</div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="flex items-center gap-1 text-britannia-text hover:text-britannia-primary font-medium transition-colors py-2"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={16} />}
                  </a>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-britannia border border-neutral-light z-50">
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-britannia-text hover:bg-britannia-primary hover:text-white transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Brand CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="/quote"
                className="border-2 border-britannia-primary text-britannia-primary hover:bg-britannia-primary hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Get Quote
              </a>
              <a
                href="tel:01462436125"
                className="bg-gradient-to-r from-britannia-primary to-britannia-primary-dark hover:from-britannia-red hover:to-britannia-red-dark text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-md"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-britannia-text"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-light">
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block text-neutral-charcoal hover:text-britannia-blue font-medium py-2"
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="pl-4 space-y-2 mt-2">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm text-neutral-slate hover:text-britannia-blue py-1"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="flex flex-col gap-3 pt-4 border-t border-neutral-light">
                <a
                  href="/quote"
                  className="bg-accent-gold hover:bg-accent-gold-dark text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                >
                  Get Free Quote
                </a>
                <a
                  href="tel:01462436125"
                  className="bg-britannia-red hover:bg-britannia-red-dark text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  01462 436125
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;