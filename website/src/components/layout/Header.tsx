'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'Corporate Transport', href: '/services/corporate' },
    { name: 'School Trips', href: '/services/school-trips' },
    { name: 'Wedding Transport', href: '/services/wedding' },
    { name: 'Airport Transfers', href: '/services/airport' },
    { name: 'Day Trips', href: '/services/day-trips' },
    { name: 'Long Distance', href: '/services/long-distance' },
  ]

  const isActive = (href: string) => pathname === href

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && event.target instanceof Element) {
        const sidebar = document.getElementById('sidebar-menu')
        const menuButton = document.getElementById('menu-button')
        if (sidebar && !sidebar.contains(event.target) && !menuButton?.contains(event.target)) {
          setIsMenuOpen(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      {/* Fixed Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 relative group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/images/logos/logo.png"
                    alt="Britannia Coaches"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-crimson-red-800 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-display font-bold text-slate-ink-900">
                  Britannia Coaches
                </h1>
                <p className="text-xs font-medium text-slate-ink-900/70">
                  Premium Transportation
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-crimson-red-800 font-semibold'
                      : 'text-slate-ink-900 hover:text-crimson-red-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact & Menu Button */}
            <div className="flex items-center gap-4">
              <a
                href="tel:01462436125"
                className="hidden md:flex items-center gap-2 text-slate-ink-900 hover:text-crimson-red-800 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">01462 436125</span>
              </a>

              <Link
                href="/contact"
                className="hidden sm:inline-flex bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Get Quote
              </Link>

              {/* Hamburger Menu Button */}
              <button
                id="menu-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-slate-ink-900 hover:text-crimson-red-800 transition-colors duration-200"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" />
      )}

      {/* Side Navigation Menu */}
      <div
        id="sidebar-menu"
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative">
                <Image
                  src="/images/logos/logo.png"
                  alt="Britannia Coaches"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-lg font-display font-bold text-slate-ink-900">
                  Britannia Coaches
                </h2>
                <p className="text-xs text-slate-ink-900/70">Premium Transportation</p>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-slate-ink-900 hover:text-crimson-red-800 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-6 space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between w-full p-3 rounded-lg transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'bg-crimson-red-50 text-crimson-red-800 font-semibold'
                        : 'text-slate-ink-900 hover:bg-slate-50 hover:text-crimson-red-800'
                    }`}
                  >
                    <span className="text-base">{item.name}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  
                  {/* Services submenu */}
                  {item.name === 'Services' && (
                    <div className="mt-2 ml-4 space-y-1 border-l-2 border-slate-100 pl-4">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block p-2 text-sm rounded-lg transition-colors duration-200 ${
                            isActive(service.href)
                              ? 'bg-crimson-red-50 text-crimson-red-800 font-medium'
                              : 'text-slate-ink-900/70 hover:bg-slate-50 hover:text-crimson-red-800'
                          }`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-slate-200 bg-slate-50">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-ink-900">
                <Phone className="w-5 h-5 text-crimson-red-800" />
                <div>
                  <p className="text-sm font-medium">01462 436125</p>
                  <p className="text-xs text-slate-ink-900/70">24/7 Support</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-slate-ink-900">
                <Mail className="w-5 h-5 text-crimson-red-800" />
                <div>
                  <p className="text-sm font-medium">enquiries@britanniacoaches.co.uk</p>
                  <p className="text-xs text-slate-ink-900/70">Email Support</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-slate-ink-900">
                <MapPin className="w-5 h-5 text-crimson-red-800" />
                <div>
                  <p className="text-sm font-medium">Hitchin, Hertfordshire</p>
                  <p className="text-xs text-slate-ink-900/70">UK Coverage</p>
                </div>
              </div>
            </div>
            
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full mt-6 bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
            >
              Get Your Quote
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header