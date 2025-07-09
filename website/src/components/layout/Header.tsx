'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Corporate Transport', href: '/services/corporate' },
        { name: 'School Trips', href: '/services/school-trips' },
        { name: 'Wedding Transport', href: '/services/wedding' },
        { name: 'Airport Transfers', href: '/services/airport' },
        { name: 'Day Trips', href: '/services/day-trips' },
        { name: 'Long Distance', href: '/services/long-distance' },
      ]
    },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Corporate', href: '/corporate' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>

      {/* Solid Floating Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'shadow-2xl' 
          : ''
      }`}>
        {/* Sleek Floating Container */}
        <div className="mx-6 mt-2">
          <div className={`max-w-7xl mx-auto transition-all duration-500 ${
            isScrolled 
              ? 'bg-white rounded-xl shadow-luxury-xl border border-cream-200 px-6 py-2' 
              : 'bg-navy-900 rounded-2xl border border-gold-400/30 px-8 py-3'
          }`}>
            <div className="flex justify-between items-center h-14">
              {/* Sleek Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-10 h-10 relative group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/images/logos/logo.png"
                      alt="Britannia Coaches"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-gold-400 rounded-full animate-pulse"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className={`text-lg font-display font-bold transition-colors duration-300 ${
                    isScrolled ? 'text-navy-900' : 'text-white'
                  }`}>
                    Britannia Coaches
                  </h1>
                  <p className={`text-xs font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-navy-600' : 'text-white/80'
                  }`}>
                    Premium Transportation
                  </p>
                </div>
              </Link>

              {/* Floating Navigation */}
              <nav className="hidden lg:flex items-center gap-2">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.dropdown ? (
                      <div 
                        className="relative"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <button
                          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all duration-300 ${
                            isActive(item.href) 
                              ? `font-semibold ${isScrolled ? 'text-navy-800 bg-gold-100' : 'text-gold-300 bg-navy-800'}` 
                              : `font-medium ${isScrolled ? 'text-navy-700 hover:text-gold-600 hover:bg-gold-50' : 'text-white hover:text-gold-300 hover:bg-navy-800'}`
                          }`}
                        >
                          {item.name}
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                      
                        {isServicesOpen && (
                          <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gold-200 py-2 animate-fade-in-down">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className="block px-4 py-2 text-sm text-navy-700 hover:text-gold-600 hover:bg-gold-50 transition-all duration-200 rounded-lg mx-2"
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`px-3 py-1.5 rounded-lg transition-all duration-300 ${
                          isActive(item.href) 
                            ? `font-semibold ${isScrolled ? 'text-navy-800 bg-gold-100' : 'text-gold-300 bg-navy-800'}` 
                            : `font-medium ${isScrolled ? 'text-navy-700 hover:text-gold-600 hover:bg-gold-50' : 'text-white hover:text-gold-300 hover:bg-navy-800'}`
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                </div>
              ))}
            </nav>

              {/* Sleek CTA */}
              <div className="hidden lg:flex items-center gap-3">
                <a href="tel:01234567890" className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300 font-bold ${
                  isScrolled 
                    ? 'text-navy-800 hover:text-gold-600 hover:bg-gold-50' 
                    : 'text-white hover:text-gold-300 hover:bg-navy-800'
                }`}>
                  <div className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse"></div>
                  <Phone className="w-3.5 h-3.5" />
                  <span className="hidden xl:inline text-sm">0123 456 7890</span>
                </a>
                <Link
                  href="/contact"
                  className={`px-5 py-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    isScrolled 
                      ? 'bg-navy-800 hover:bg-navy-900 text-white shadow-md hover:shadow-lg' 
                      : 'bg-gold-500 hover:bg-gold-600 text-navy-900 shadow-md hover:shadow-lg'
                  }`}
                >
                  Get Quote
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? 'text-navy-800 hover:bg-navy-100' 
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-cream-200 animate-fade-in-down">
            <div className="max-w-7xl mx-auto container-padding py-4">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`block py-2 ${
                        isActive(item.href) ? 'text-navy-800 font-semibold' : 'text-navy-700 hover:text-gold-600 font-medium transition-colors duration-200'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block py-1 text-sm text-navy-600 hover:text-gold-600 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-cream-200">
                  <Link
                    href="/contact"
                    className="bg-navy-800 hover:bg-navy-900 text-cream-50 px-6 py-3 text-lg font-medium rounded-lg shadow-luxury hover:shadow-luxury-md transition-all duration-200 w-full inline-flex items-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header