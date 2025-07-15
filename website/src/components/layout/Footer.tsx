'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-ink-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 relative">
                <Image
                  src="/images/logos/logo.png"
                  alt="Britannia Coaches"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Britannia Coaches</h3>
                <p className="text-white/70 text-sm">Premium Transportation Services</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Professional coach transportation across the UK and Europe. With over 35 years of experience, 
              we provide safe, comfortable, and reliable transport solutions for every occasion.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-crimson-red-400" />
                <span className="text-white/80 text-sm">
                  North End, Bury Mead Road, Hitchin, Hertfordshire SG5 1RT
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-crimson-red-400" />
                <a href="tel:01462436125" className="text-white/80 hover:text-white transition-colors text-sm">
                  01462 436125
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-crimson-red-400" />
                <a href="mailto:enquiries@britanniacoaches.co.uk" className="text-white/80 hover:text-white transition-colors text-sm break-all">
                  enquiries@britanniacoaches.co.uk
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-crimson-red-400" />
                <span className="text-white/80 text-sm">
                  Mon-Fri: 8AM-6PM | Weekend: By appointment
                </span>
              </div>
            </div>
          </div>

          {/* Main Pages */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Main Pages</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors text-sm">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="text-white/70 hover:text-white transition-colors text-sm">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Transport Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Transport Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/corporate" className="text-white/70 hover:text-white transition-colors text-sm">
                  Corporate Transport
                </Link>
              </li>
              <li>
                <Link href="/services/school-trips" className="text-white/70 hover:text-white transition-colors text-sm">
                  School Trips
                </Link>
              </li>
              <li>
                <Link href="/services/wedding" className="text-white/70 hover:text-white transition-colors text-sm">
                  Wedding Transport
                </Link>
              </li>
              <li>
                <Link href="/services/airport" className="text-white/70 hover:text-white transition-colors text-sm">
                  Airport Transfers
                </Link>
              </li>
              <li>
                <Link href="/services/day-trips" className="text-white/70 hover:text-white transition-colors text-sm">
                  Day Trips
                </Link>
              </li>
              <li>
                <Link href="/services/long-distance" className="text-white/70 hover:text-white transition-colors text-sm">
                  Long Distance Travel
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company Info</h4>
            <ul className="space-y-2">
              <li>
                <div className="text-white/70 text-sm">
                  <div className="font-medium text-white mb-1">Experience</div>
                  35+ Years in Business
                </div>
              </li>
              <li>
                <div className="text-white/70 text-sm">
                  <div className="font-medium text-white mb-1">Fleet Size</div>
                  50+ Modern Coaches
                </div>
              </li>
              <li>
                <div className="text-white/70 text-sm">
                  <div className="font-medium text-white mb-1">Coverage</div>
                  UK & European Travel
                </div>
              </li>
              <li>
                <div className="text-white/70 text-sm">
                  <div className="font-medium text-white mb-1">Safety Record</div>
                  100% Professional Standards
                </div>
              </li>
              <li>
                <div className="text-white/70 text-sm">
                  <div className="font-medium text-white mb-1">Available</div>
                  24/7 Booking Support
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © {currentYear} Britannia Coaches. All rights reserved. | Professional Coach Transport Services UK
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-white/70 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/70 hover:text-white transition-colors text-sm">
                Terms & Conditions
              </Link>
              <span className="text-white/50 text-xs">
                Est. 1988
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer