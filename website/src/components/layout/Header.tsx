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
    { name: 'Fleet', href: '/fleet' },
    { name: 'Corporate', href: '/corporate' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <>

      {/* Solid Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
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
                <div className="hidden sm:block">
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
              <nav className="hidden lg:flex items-center gap-2">
                {navigation.map((item) => (
                  <div key={item.name} className="relative">
                    {item.megaMenu ? (
                      <div 
                        className="relative"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <button
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
                          <div className="fixed left-1/2 transform -translate-x-1/2 w-[1000px] max-w-[calc(100vw-3rem)] bg-white rounded-xl shadow-2xl border border-ice-grey-200 p-6 animate-fade-in-down z-50" style={{ top: '80px' }}>
                            <div className="mb-4">
                              <h3 className="text-lg font-display font-bold text-slate-ink-900 mb-1">Our Services</h3>
                              <p className="text-slate-ink-900/60 text-xs">Professional transportation solutions for every need</p>
                            </div>
                            
                            <div className="grid grid-cols-6 gap-4">
                              {item.megaMenu.map((service) => (
                                <Link
                                  key={service.name}
                                  href={service.href}
                                  className="group block bg-gradient-to-br from-slate-50 to-white p-3 rounded-lg border border-ice-grey-100 hover:border-crimson-red-200 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                                >
                                  <div className="relative h-16 mb-3 overflow-hidden rounded-md">
                                    <Image
                                      src={service.image}
                                      alt={service.name}
                                      fill
                                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                  </div>
                                  
                                  <div className="space-y-1">
                                    <h4 className="font-medium text-sm text-slate-ink-900 group-hover:text-crimson-red-800 transition-colors duration-200 leading-tight">
                                      {service.name}
                                    </h4>
                                    <p className="text-xs text-slate-ink-900/60 leading-relaxed line-clamp-2">
                                      {service.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            
                            <div className="mt-4 pt-4 border-t border-ice-grey-200">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-medium text-slate-ink-900">Need a custom solution?</p>
                                  <p className="text-xs text-slate-ink-900/60">Get a personalized quote for your requirements</p>
                                </div>
                                <Link
                                  href="/contact"
                                  className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-md"
                                >
                                  Get Quote
                                </Link>
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
              <div className="hidden lg:flex items-center gap-3">
                <a href="tel:01234567890" className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300 font-bold ${
                  isScrolled 
                    ? 'text-white hover:text-crimson-red-300 hover:bg-royal-blue-900' 
                    : 'text-royal-blue-800 hover:text-crimson-red-800 hover:bg-crimson-red-50'
                }`}>
                  <div className="w-1.5 h-1.5 bg-crimson-red-800 rounded-full animate-pulse"></div>
                  <Phone className="w-3.5 h-3.5" />
                  <span className="hidden xl:inline text-sm">01462 436125</span>
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

              {/* Mobile Menu Button */}
              <button
                className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? 'text-white hover:bg-royal-blue-900' 
                    : 'text-royal-blue-800 hover:bg-royal-blue-100'
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
          <div className="lg:hidden bg-white border-t border-ice-grey-200 animate-fade-in-down">
            <div className="max-w-7xl mx-auto container-padding py-4">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={`block py-2 ${
                        isActive(item.href) ? 'text-royal-blue-800 font-semibold' : 'text-slate-ink-900 hover:text-crimson-red-800 font-medium transition-colors duration-200'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.megaMenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.megaMenu.map((menuItem) => (
                          <Link
                            key={menuItem.name}
                            href={menuItem.href}
                            className="block py-1 text-sm text-slate-ink-900 hover:text-crimson-red-800 transition-colors duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {menuItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-ice-grey-200">
                  <Link
                    href="/contact"
                    className="bg-royal-blue-800 hover:bg-royal-blue-900 text-white px-6 py-3 text-lg font-medium rounded-lg shadow-luxury hover:shadow-luxury-md transition-all duration-200 w-full inline-flex items-center justify-center"
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