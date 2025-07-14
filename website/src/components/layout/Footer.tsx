'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ChevronUp, Star, Shield, Award, CheckCircle } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [openSection, setOpenSection] = useState<string | null>(null)

  const footerLinks = {
    services: [
      { name: 'Group Coach Hire', href: '/services/corporate' },
      { name: 'Corporate Transport', href: '/services/corporate' },
      { name: 'Educational Trips', href: '/services/school-trips' },
      { name: 'Event Transportation', href: '/services/wedding' },
      { name: 'Airport Transfers', href: '/services/airport' },
      { name: 'Day Excursions', href: '/services/day-trips' },
    ],
    company: [
      { name: 'About Britannia', href: '/about' },
      { name: 'Our Modern Fleet', href: '/fleet' },
      { name: 'Safety Standards', href: '/safety' },
      { name: 'Get Quote', href: '/contact' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
    support: [
      { name: 'Contact Support', href: '/contact' },
      { name: 'Booking Help', href: '/help' },
      { name: 'Driver Portal', href: '/drivers' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Live Chat', href: '#' },
      { name: 'Emergency Line', href: 'tel:01462436125' },
    ],
  }

  const certifications = [
    { 
      icon: Shield, 
      title: 'FENSA Certified',
      subtitle: 'Quality Assured'
    },
    { 
      icon: Star, 
      title: 'Which? Trusted Trader',
      subtitle: 'Customer Approved'
    },
    { 
      icon: Award, 
      title: '35+ Years Experience',
      subtitle: 'Industry Leader'
    },
    { 
      icon: CheckCircle, 
      title: 'Fully Insured',
      subtitle: 'Complete Protection'
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-ink-900 via-slate-ink-900 to-slate-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 50%)`
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Brand Section */}
            <div className="lg:col-span-1">
              <div className="group">
                <Link href="/" className="flex items-center gap-4 mb-6 hover:scale-105 transition-transform duration-300">
                  <div className="w-24 h-24 relative">
                    <Image
                      src="/images/logos/logo.png"
                      alt="Britannia Coaches"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-crimson-red-400 transition-colors duration-300">
                      Britannia Coaches
                    </h3>
                    <p className="text-sm text-white/60">Professional Transportation</p>
                  </div>
                </Link>
                
                <p className="text-white/80 mb-8 leading-relaxed text-sm">
                  Professional coach transportation across the UK. With 35+ years of experience, 
                  we deliver reliable, safe, and comfortable travel solutions for every journey.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                    <div className="text-xl font-bold text-crimson-red-400">1000+</div>
                    <div className="text-xs text-white/60">Happy Clients</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg backdrop-blur-sm">
                    <div className="text-xl font-bold text-crimson-red-400">35+</div>
                    <div className="text-xs text-white/60">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Links */}
            <div className="lg:block">
              <div className="flex items-center justify-between lg:justify-start mb-6 lg:mb-6">
                <h4 className="text-lg font-semibold text-white">Our Services</h4>
                <button 
                  className="lg:hidden text-white/60"
                  onClick={() => toggleSection('services')}
                >
                  <ChevronUp className={`w-5 h-5 transition-transform duration-300 ${openSection === 'services' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <div className={`space-y-3 ${openSection === 'services' ? 'block' : 'hidden'} lg:block`}>
                {footerLinks.services.map((link, index) => (
                  <div key={link.name} style={{ animationDelay: `${index * 0.1}s` }}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="w-1 h-1 bg-crimson-red-400 rounded-full group-hover:w-2 transition-all duration-300" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Links */}
            <div className="lg:block">
              <div className="flex items-center justify-between lg:justify-start mb-6">
                <h4 className="text-lg font-semibold text-white">Company</h4>
                <button 
                  className="lg:hidden text-white/60"
                  onClick={() => toggleSection('company')}
                >
                  <ChevronUp className={`w-5 h-5 transition-transform duration-300 ${openSection === 'company' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <div className={`space-y-3 ${openSection === 'company' ? 'block' : 'hidden'} lg:block`}>
                {footerLinks.company.map((link, index) => (
                  <div key={link.name} style={{ animationDelay: `${index * 0.1}s` }}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      <div className="w-1 h-1 bg-crimson-red-400 rounded-full group-hover:w-2 transition-all duration-300" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <Link
                  href="tel:01462436125" 
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 w-full"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-crimson-red-600/20 to-crimson-red-800/20 rounded-xl flex items-center justify-center group-hover:from-crimson-red-600/30 group-hover:to-crimson-red-800/30 transition-all duration-300 backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-crimson-red-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm">01462 436125</p>
                    <p className="text-xs text-white/60">Mon-Fri 8AM-6PM</p>
                  </div>
                </Link>
                
                <Link
                  href="mailto:enquiries@britanniacoaches.co.uk"
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 w-full"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-crimson-red-600/20 to-crimson-red-800/20 rounded-xl flex items-center justify-center group-hover:from-crimson-red-600/30 group-hover:to-crimson-red-800/30 transition-all duration-300 backdrop-blur-sm">
                    <Mail className="w-6 h-6 text-crimson-red-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm truncate">enquiries@britanniacoaches.co.uk</p>
                    <p className="text-xs text-white/60">24/7 Email Support</p>
                  </div>
                </Link>
                
                <div className="group flex items-center gap-4 p-4 rounded-xl w-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-crimson-red-600/20 to-crimson-red-800/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-crimson-red-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm">North End, Bury Mead Road</p>
                    <p className="text-xs text-white/60">Hitchin, Hertfordshire SG5 1RT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className="group flex flex-col items-center text-center p-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-crimson-red-600/20 to-crimson-red-800/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="w-6 h-6 text-crimson-red-400" />
                  </div>
                  <h5 className="text-sm font-semibold text-white mb-1">{cert.title}</h5>
                  <p className="text-xs text-white/60">{cert.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-white/60">
                © {currentYear} Britannia Coaches Ltd. All rights reserved. | Licensed & Insured UK Coach Operator
              </p>
              <div className="flex items-center gap-6 text-sm text-white/60">
                <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-crimson-red-600 hover:bg-crimson-red-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  )
}

export default Footer