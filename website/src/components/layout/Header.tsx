'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown, Mail, MapPin, ChevronRight } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null)
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
      megaMenu: [
        { 
          name: 'Corporate Transport', 
          href: '/services/corporate',
          description: 'Professional business transportation solutions',
          image: '/images/services/corporate/assets_task_01jztkbqygfp8rcvfs4ez2t15y_1752165762_img_2.webp'
        },
        { 
          name: 'School Trips', 
          href: '/services/school-trips',
          description: 'Safe and reliable educational travel',
          image: '/images/services/school-trips/assets_task_01jztkd5vyf0trmn8qgw271f9c_1752165789_img_2.webp'
        },
        { 
          name: 'Wedding Transport', 
          href: '/services/wedding',
          description: 'Elegant transportation for special occasions',
          image: '/images/services/wedding/assets_task_01jztnpaegfdrtgwwk7v9h9rpd_1752168189_img_3.webp'
        },
        { 
          name: 'Airport Transfers', 
          href: '/services/airport',
          description: 'Reliable transfers to all UK airports',
          image: '/images/services/airport/assets_task_01jztp22ebe4jrxcxjh8je438b_1752168577_img_0.webp'
        },
        { 
          name: 'Day Trips', 
          href: '/services/day-trips',
          description: 'Comfortable day excursions and tours',
          image: '/images/services/day-trips/assets_task_01jztp9f7xftvbyh0vj3544368_1752168825_img_0.webp'
        },
        { 
          name: 'Long Distance', 
          href: '/services/long-distance',
          description: 'Extended travel across UK and Europe',
          image: '/images/services/long-distance/assets_task_01jztpdvw0fm8vhd1675pncbax_1752168967_img_0.webp'
        },
      ]
    },
    { name: 'About', href: '/about' },
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
      {/* Desktop/Laptop Header with Animation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent hidden lg:block">
        {/* Sleek Floating Container */}
        <div className="mx-6 mt-2">
          <div className={`max-w-7xl mx-auto transition-all duration-500 ${
            isScrolled 
              ? 'bg-royal-blue-800 rounded-xl shadow-luxury-xl px-6 py-2' 
              : 'bg-white rounded-2xl border border-ice-grey-200 px-8 py-3'
          }`}>
            <div className="flex justify-between items-center h-14">
              {/* Sleek Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-20 h-20 relative group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src="/images/logos/logo.png"
                      alt="Britannia Coaches"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-crimson-red-800 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h1 className={`text-lg font-display font-bold transition-colors duration-300 ${
                    isScrolled ? 'text-white' : 'text-royal-blue-800'
                  }`}>
                    Britannia Coaches
                  </h1>
                  <p className={`text-xs font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-white/80' : 'text-slate-ink-900'
                  }`}>
                    Premium Transportation
                  </p>
                </div>
              </Link>

              {/* Floating Navigation */}
              <nav className="flex items-center gap-2">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.megaMenu ? (
                      <div 
                        className="relative"
                        onMouseEnter={() => {
                          if (hoverTimeout) {
                            clearTimeout(hoverTimeout)
                            setHoverTimeout(null)
                          }
                          setIsServicesOpen(true)
                        }}
                        onMouseLeave={() => {
                          const timeout = setTimeout(() => setIsServicesOpen(false), 150)
                          setHoverTimeout(timeout)
                        }}
                      >
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all duration-300 ${
                            isActive(item.href) 
                              ? `font-semibold ${isScrolled ? 'text-crimson-red-300 bg-royal-blue-900' : 'text-royal-blue-800 bg-crimson-red-100'}` 
                              : `font-medium ${isScrolled ? 'text-white hover:text-crimson-red-300 hover:bg-royal-blue-900' : 'text-slate-ink-900 hover:text-crimson-red-800 hover:bg-crimson-red-50'}`
                          }`}
                        >
                          {item.name}
                          <ChevronDown className="w-3.5 h-3.5" />
                        </button>
                      
                        {isServicesOpen && (
                          <div 
                            className="fixed inset-x-0 mx-auto w-[1100px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50" 
                            style={{ top: '80px' }}
                            onMouseEnter={() => {
                              if (hoverTimeout) {
                                clearTimeout(hoverTimeout)
                                setHoverTimeout(null)
                              }
                              setIsServicesOpen(true)
                            }}
                            onMouseLeave={() => {
                              const timeout = setTimeout(() => setIsServicesOpen(false), 150)
                              setHoverTimeout(timeout)
                            }}
                          >
                            {/* Premium Header */}
                            <div className="bg-gradient-to-r from-slate-ink-900 via-slate-ink-800 to-slate-ink-900 px-8 py-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <div className="w-10 h-10 bg-crimson-red-800 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">🚌</span>
                                  </div>
                                  <div>
                                    <h3 className="text-white font-bold text-lg">Premium Transportation Services</h3>
                                    <p className="text-white/70 text-sm">Professional solutions for every journey</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <div className="text-crimson-red-400 font-bold text-lg">35+ Years</div>
                                  <div className="text-white/70 text-xs">Industry Experience</div>
                                </div>
                              </div>
                            </div>

                            {/* Services Grid */}
                            <div className="p-6">
                              <div className="flex gap-6">
                                {/* Featured Popular Service */}
                                <div className="w-1/2">
                                  <Link
                                    href={item.megaMenu[0].href}
                                    className="group relative block bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:border-crimson-red-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                  >
                                    {/* Popular Badge */}
                                    <div className="absolute -top-2 -right-2 bg-crimson-red-800 text-white text-xs px-3 py-1 rounded-full font-medium">
                                      Popular
                                    </div>
                                    
                                    <div className="relative h-36 mb-4 overflow-hidden rounded-lg">
                                      <Image
                                        src={item.megaMenu[0].image}
                                        alt={item.megaMenu[0].name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                      <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-slate-800">
                                        Most Requested
                                      </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                      <h4 className="font-bold text-lg text-slate-ink-900 group-hover:text-crimson-red-800 transition-colors duration-200">
                                        {item.megaMenu[0].name}
                                      </h4>
                                      <p className="text-sm text-slate-ink-900/70 leading-relaxed">
                                        {item.megaMenu[0].description}
                                      </p>
                                    </div>
                                    
                                    {/* Features */}
                                    <div className="mt-4 flex items-center gap-3 text-xs text-slate-600">
                                      <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                        <span>Available</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                        <span>Instant Quote</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                        <span>24/7 Service</span>
                                      </div>
                                    </div>
                                    
                                    <div className="mt-4 flex items-center justify-between">
                                      <div className="text-crimson-red-800 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        Learn More →
                                      </div>
                                      <div className="text-sm font-semibold text-crimson-red-800">
                                        Get Quote
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                                
                                {/* Other Services - Compact Style */}
                                <div className="w-1/2 space-y-3">
                                  {item.megaMenu.slice(1, 6).map((service) => (
                                    <Link
                                      key={service.name}
                                      href={service.href}
                                      className="group flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 hover:border-crimson-red-200 transition-all duration-300"
                                    >
                                      <div className="relative w-12 h-12 overflow-hidden rounded-lg flex-shrink-0">
                                        <Image
                                          src={service.image}
                                          alt={service.name}
                                          fill
                                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <h5 className="font-medium text-slate-ink-900 group-hover:text-crimson-red-800 transition-colors text-sm">
                                          {service.name}
                                        </h5>
                                        <p className="text-xs text-slate-600 truncate">
                                          {service.description}
                                        </p>
                                      </div>
                                      <div className="text-crimson-red-800 opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                                        →
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Bottom CTA Bar */}
                            <div className="bg-gradient-to-r from-crimson-red-800 to-crimson-red-900 px-8 py-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                  <div className="text-white">
                                    <div className="font-bold text-sm">24/7 Support</div>
                                    <div className="text-white/80 text-xs">Always here to help</div>
                                  </div>
                                  <div className="text-white">
                                    <div className="font-bold text-sm">Instant Quotes</div>
                                    <div className="text-white/80 text-xs">Get pricing in seconds</div>
                                  </div>
                                  <div className="text-white">
                                    <div className="font-bold text-sm">Licensed & Insured</div>
                                    <div className="text-white/80 text-xs">Fully compliant</div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-3">
                                  <Link
                                    href="/services"
                                    className="bg-white text-crimson-red-800 px-6 py-2 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-all duration-200 hover:scale-105"
                                  >
                                    View All Services
                                  </Link>
                                  <Link
                                    href="/fleet"
                                    className="border-2 border-white/30 text-white px-4 py-2 rounded-lg font-medium text-sm hover:border-white/50 transition-all duration-200"
                                  >
                                    Our Fleet
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`px-3 py-1.5 rounded-lg transition-all duration-300 ${
                          isActive(item.href) 
                            ? `font-semibold ${isScrolled ? 'text-crimson-red-300 bg-royal-blue-900' : 'text-royal-blue-800 bg-crimson-red-100'}` 
                            : `font-medium ${isScrolled ? 'text-white hover:text-crimson-red-300 hover:bg-royal-blue-900' : 'text-slate-ink-900 hover:text-crimson-red-800 hover:bg-crimson-red-50'}`
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Sleek CTA */}
              <div className="flex items-center gap-3">
                <a href="tel:01234567890" className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300 font-bold ${
                  isScrolled 
                    ? 'text-white hover:text-crimson-red-300 hover:bg-royal-blue-900' 
                    : 'text-royal-blue-800 hover:text-crimson-red-800 hover:bg-crimson-red-50'
                }`}>
                  <Phone className="w-3.5 h-3.5" />
                  <span className="text-sm">01462 436125</span>
                </a>
                <Link
                  href="/contact"
                  className={`px-5 py-2 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    isScrolled 
                      ? 'bg-crimson-red-800 hover:bg-crimson-red-900 text-white shadow-md hover:shadow-lg' 
                      : 'bg-royal-blue-800 hover:bg-sky-indigo-800 text-white shadow-md hover:shadow-lg'
                  }`}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-ink-900 shadow-lg lg:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
              <div>
                <h1 className="text-lg font-display font-bold text-white">
                  Britannia Coaches
                </h1>
                <p className="text-xs font-medium text-white/70">
                  Premium Transportation
                </p>
              </div>
            </Link>

            {/* Contact & Menu Button */}
            <div className="flex items-center gap-4">
              <a
                href="tel:01462436125"
                className="hidden md:flex items-center gap-2 text-white hover:text-crimson-red-400 transition-colors duration-200"
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
                className="p-2 text-white hover:text-crimson-red-400 transition-colors duration-200"
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