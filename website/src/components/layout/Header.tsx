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

      {/* Hexagon Header Shape */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-luxury-md' 
          : 'bg-white'
      }`}>
        {/* Hexagon Background Shape */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-full h-32">
            <svg className="w-full h-full" viewBox="0 0 1200 120" fill="none">
              <path d="M0 0 L200 0 L250 60 L200 120 L0 120 Z" fill="url(#hexGradient1)" opacity="0.1"/>
              <path d="M200 0 L400 0 L450 60 L400 120 L200 120 L150 60 Z" fill="url(#hexGradient2)" opacity="0.1"/>
              <path d="M400 0 L600 0 L650 60 L600 120 L400 120 L350 60 Z" fill="url(#hexGradient3)" opacity="0.1"/>
              <path d="M600 0 L800 0 L850 60 L800 120 L600 120 L550 60 Z" fill="url(#hexGradient2)" opacity="0.1"/>
              <path d="M800 0 L1000 0 L1050 60 L1000 120 L800 120 L750 60 Z" fill="url(#hexGradient1)" opacity="0.1"/>
              <path d="M1000 0 L1200 0 L1200 120 L1000 120 L950 60 Z" fill="url(#hexGradient3)" opacity="0.1"/>
              <defs>
                <linearGradient id="hexGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0f172a"/>
                  <stop offset="100%" stopColor="#f59e0b"/>
                </linearGradient>
                <linearGradient id="hexGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b"/>
                  <stop offset="100%" stopColor="#0f172a"/>
                </linearGradient>
                <linearGradient id="hexGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f2c574"/>
                  <stop offset="100%" stopColor="#1e293b"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 relative z-10">
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

            {/* Morphing Menu Navigation */}
            <nav className="hidden lg:flex items-center gap-6 relative z-10">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div 
                      className="relative group"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-2 px-6 py-3 transition-all duration-500 transform hover:scale-110 ${
                          isActive(item.href) 
                            ? 'text-navy-800 font-semibold' 
                            : 'text-navy-700 hover:text-gold-600 font-medium'
                        }`}
                        style={{
                          clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                          background: isActive(item.href) ? 'linear-gradient(45deg, #f59e0b, #fbbf24)' : 'transparent',
                          color: isActive(item.href) ? 'white' : undefined
                        }}
                      >
                        <span className="relative z-10">{item.name}</span>
                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                      </button>
                      
                      {isServicesOpen && (
                        <div 
                          className="absolute top-full left-0 mt-4 w-72 bg-white rounded-3xl shadow-2xl border-2 border-gold-200 overflow-hidden"
                          style={{
                            clipPath: 'polygon(0 15px, 15px 0, calc(100% - 15px) 0, 100% 15px, 100% calc(100% - 15px), calc(100% - 15px) 100%, 15px 100%, 0 calc(100% - 15px))',
                            animation: 'morphIn 0.5s ease-out'
                          }}
                        >
                          {item.dropdown.map((dropdownItem, idx) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="group flex items-center px-6 py-4 text-sm text-navy-700 hover:text-white hover:bg-gradient-to-r hover:from-navy-800 hover:to-gold-600 transition-all duration-300 transform hover:scale-105"
                              style={{
                                animationDelay: `${idx * 100}ms`,
                                animation: 'slideInLeft 0.3s ease-out forwards'
                              }}
                            >
                              <span className="relative z-10">{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-6 py-3 transition-all duration-500 transform hover:scale-110 ${
                        isActive(item.href) 
                          ? 'text-navy-800 font-semibold' 
                          : 'text-navy-700 hover:text-gold-600 font-medium'
                      }`}
                      style={{
                        clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                        background: isActive(item.href) ? 'linear-gradient(45deg, #f59e0b, #fbbf24)' : 'transparent',
                        color: isActive(item.href) ? 'white' : undefined
                      }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA with Phone */}
            <div className="hidden lg:flex items-center gap-4 relative z-10">
              <a href="tel:01234567890" className="flex items-center gap-2 text-navy-800 hover:text-gold-600 transition-colors duration-300 font-bold">
                <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse"></div>
                <Phone className="w-4 h-4" />
                0123 456 7890
              </a>
              <Link
                href="/contact"
                className="bg-navy-800 hover:bg-navy-900 text-cream-50 px-8 py-4 text-lg font-medium shadow-luxury hover:shadow-luxury-md transition-all duration-300 transform hover:scale-105"
                style={{
                  clipPath: 'polygon(10% 0%, 90% 0%, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0% 75%, 0% 25%)'
                }}
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