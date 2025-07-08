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
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-xl shadow-luxury-xl border-b border-white/20' 
          : 'bg-gradient-to-r from-white/95 via-cream-50/90 to-white/95 backdrop-blur-sm'
      }`}>
        {/* Creative Top Border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-800 via-gold-500 to-navy-800"></div>
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex justify-between items-center h-20">
            {/* Logo with Creative Background */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-navy-800 via-navy-700 to-gold-600 rounded-2xl shadow-luxury-md group-hover:shadow-luxury-lg transition-all duration-300 group-hover:scale-105 flex items-center justify-center">
                  <div className="w-10 h-10 relative">
                    <Image
                      src="/images/logos/logo.png"
                      alt="Britannia Coaches"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold-400 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-display font-bold text-navy-900 group-hover:text-navy-800 transition-colors duration-300">
                  Britannia Coaches
                </h1>
                <p className="text-sm text-navy-600 font-medium tracking-wide">Premium Transportation</p>
              </div>
            </Link>

            {/* Creative Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div 
                      className="relative group"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1 px-4 py-2 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                          isActive(item.href) 
                            ? 'text-navy-800 font-semibold bg-gold-100/50' 
                            : 'text-navy-700 hover:text-gold-600 font-medium hover:bg-gold-50/30'
                        }`}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <ChevronDown className="w-4 h-4 relative z-10 group-hover:rotate-180 transition-transform duration-300" />
                        {/* Hover effect background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-100/0 via-gold-100/50 to-gold-100/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      </button>
                      
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-3 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-luxury-xl border border-gold-200/50 py-3 animate-fade-in-down overflow-hidden">
                          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-navy-800 via-gold-500 to-navy-800"></div>
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="group flex items-center px-5 py-3 text-sm text-navy-700 hover:text-gold-600 hover:bg-gradient-to-r hover:from-gold-50/50 hover:to-cream-50/50 transition-all duration-300 relative overflow-hidden"
                            >
                              <span className="relative z-10">{dropdownItem.name}</span>
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                        isActive(item.href) 
                          ? 'text-navy-800 font-semibold bg-gold-100/50' 
                          : 'text-navy-700 hover:text-gold-600 font-medium hover:bg-gold-50/30'
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gold-100/0 via-gold-100/50 to-gold-100/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Creative CTA Section */}
            <div className="hidden lg:flex items-center gap-6">
              <a href="tel:01234567890" className="group flex items-center gap-3 px-4 py-2 rounded-xl bg-gradient-to-r from-gold-50/50 to-cream-50/50 border border-gold-200/50 hover:border-gold-300 transition-all duration-300 hover:shadow-luxury-md">
                <div className="relative">
                  <div className="w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 bg-gold-400 rounded-full animate-ping opacity-30"></div>
                </div>
                <Phone className="w-4 h-4 text-navy-700 group-hover:text-gold-600 transition-colors duration-300" />
                <span className="text-navy-800 font-bold group-hover:text-gold-600 transition-colors duration-300">0123 456 7890</span>
              </a>
              <Link
                href="/contact"
                className="relative overflow-hidden bg-gradient-to-r from-navy-800 to-navy-900 hover:from-navy-700 hover:to-navy-800 text-cream-50 px-8 py-3 text-lg font-semibold rounded-2xl shadow-luxury-lg hover:shadow-luxury-xl transition-all duration-300 group"
              >
                <span className="relative z-10">Get Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-600/20 via-gold-500/30 to-gold-600/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
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