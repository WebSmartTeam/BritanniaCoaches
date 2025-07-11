import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Corporate Transport', href: '/services/corporate' },
      { name: 'School Trips', href: '/services/school-trips' },
      { name: 'Wedding Transport', href: '/services/wedding' },
      { name: 'Airport Transfers', href: '/services/airport' },
      { name: 'Day Trips', href: '/services/day-trips' },
      { name: 'Long Distance', href: '/services/long-distance' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Fleet', href: '/fleet' },
      { name: 'Safety & Compliance', href: '/safety' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Contact Us', href: '/contact' },
    ],
    areas: [
      { name: 'London', href: '/areas/london' },
      { name: 'Birmingham', href: '/areas/birmingham' },
      { name: 'Manchester', href: '/areas/manchester' },
      { name: 'Leeds', href: '/areas/leeds' },
      { name: 'Liverpool', href: '/areas/liverpool' },
      { name: 'UK Wide', href: '/areas' },
    ],
  }

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ]

  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BC</span>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">
                  Britannia Coaches
                </h3>
                <p className="text-sm text-neutral-400">Professional Transportation</p>
              </div>
            </Link>
            
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Professional coach transportation services across the UK. With 25+ years of experience, 
              we provide reliable, safe, and comfortable travel solutions for all your needs.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">01462 436125</p>
                  <p className="text-sm text-neutral-400">24/7 Emergency Line</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">info@britanniacoaches.co.uk</p>
                  <p className="text-sm text-neutral-400">General Enquiries</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">UK Wide Coverage</p>
                  <p className="text-sm text-neutral-400">Depot: Birmingham, UK</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Mon-Fri: 7:00 AM - 10:00 PM</p>
                  <p className="text-sm text-neutral-400">Sat-Sun: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Trust Indicators */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto container-padding py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">✓</span>
                </div>
                <span className="text-sm text-neutral-300">Fully Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">25+</span>
                </div>
                <span className="text-sm text-neutral-300">Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">★</span>
                </div>
                <span className="text-sm text-neutral-300">Professional Drivers</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-400">We Accept:</span>
              <div className="flex gap-2">
                <div className="w-8 h-5 bg-blue-600 rounded text-xs text-white flex items-center justify-center font-bold">
                  VISA
                </div>
                <div className="w-8 h-5 bg-red-600 rounded text-xs text-white flex items-center justify-center font-bold">
                  MC
                </div>
                <div className="w-8 h-5 bg-green-600 rounded text-xs text-white flex items-center justify-center font-bold">
                  £
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">
              © {currentYear} Britannia Coaches Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-neutral-400">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer