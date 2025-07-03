'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronDown, Clock } from 'lucide-react';

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
      {/* Enhanced Top Bar */}
      <div className="bg-gradient-to-r from-britannia-blue to-britannia-blue-dark text-white py-3 hidden md:block shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <Clock size={16} className="text-accent-gold" />
                <span className="font-medium">24/7 Emergency Service Available</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-accent-gold" />
                <span>Serving UK Wide • 35+ Years Experience</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="mailto:info@britanniacoaches.co.uk" className="flex items-center gap-2 hover:text-accent-gold transition-colors">
                <Mail size={16} />
                <span>info@britanniacoaches.co.uk</span>
              </a>
              <a href="tel:01462436125" className="flex items-center gap-2 bg-britannia-red hover:bg-britannia-red-dark px-4 py-2 rounded-full font-semibold transition-colors">
                <Phone size={16} />
                <span>01462 436125</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Main Header */}
      <header className="bg-white shadow-xl sticky top-0 z-50 border-b border-neutral-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-6">
            {/* Enhanced Logo */}
            <div className="flex items-center group">
              <div className="bg-gradient-to-r from-britannia-blue to-britannia-blue-dark bg-clip-text text-transparent text-3xl md:text-4xl font-display font-bold group-hover:scale-105 transition-transform duration-300">
                <span className="text-4xl md:text-5xl">🚌</span> Britannia Coaches
              </div>
              <div className="ml-4 hidden lg:block">
                <div className="text-xs text-neutral-slate font-medium">Professional Transportation</div>
                <div className="text-xs text-accent-gold font-semibold">35+ Years • UK Wide</div>
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
                    className="flex items-center gap-1 text-neutral-charcoal hover:text-britannia-blue font-medium transition-colors py-2"
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
                            className="block px-4 py-2 text-neutral-charcoal hover:bg-britannia-blue hover:text-white transition-colors"
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

            {/* Enhanced CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="/quote"
                className="group bg-gradient-to-r from-accent-gold to-amber-500 hover:from-amber-500 hover:to-accent-gold text-britannia-blue px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="group-hover:animate-pulse">Get Free Quote</span>
              </a>
              <a
                href="tel:01462436125"
                className="group bg-gradient-to-r from-britannia-red to-red-600 hover:from-red-600 hover:to-britannia-red text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
              >
                <Phone size={20} className="group-hover:animate-pulse" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-neutral-charcoal"
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