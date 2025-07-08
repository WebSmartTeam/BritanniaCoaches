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
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-clean-md' 
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
                <Image
                  src="/images/logos/logo.png"
                  alt="Britannia Coaches"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-display font-bold text-navy-900">
                  Britannia Coaches
                </h1>
                <p className="text-sm text-navy-600">Professional Transportation</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1 ${
                          isActive(item.href) ? 'text-navy-800 font-semibold' : 'text-navy-700 hover:text-gold-600 font-medium transition-colors duration-200'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-luxury-lg border border-cream-200 py-2 animate-fade-in-down">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-navy-700 hover:text-gold-600 hover:bg-cream-50 transition-colors duration-200"
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
                      className={isActive(item.href) ? 'text-navy-800 font-semibold' : 'text-navy-700 hover:text-gold-600 font-medium transition-colors duration-200'}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button with Phone */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:01234567890" className="flex items-center gap-2 text-navy-800 hover:text-gold-600 transition-colors duration-300 font-bold">
                <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
                <Phone className="w-4 h-4" />
                0123 456 7890
              </a>
              <Link
                href="/contact"
                className="bg-navy-800 hover:bg-navy-900 text-cream-50 px-6 py-3 text-lg font-medium rounded-lg shadow-luxury hover:shadow-luxury-md transition-all duration-200"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-cream-100 transition-colors duration-200 text-navy-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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