'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calculator, MapPin, Clock } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/premium/luxury-coach-3.webp"
          alt="Britannia Coaches - Premium Transportation"
          fill
          className="object-cover object-center"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Left Column - Hero Content */}
          <div className="lg:col-span-2 text-center lg:text-left">
            {/* Main Heading with Enhanced Typography */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-sky-indigo-400/20 to-royal-blue-600/20 rounded-full blur-xl"></div>
              <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                <span className="text-white">Britain&apos;s </span>
                <span className="text-crimson-red-800 relative">
                  Premier
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-crimson-red-800 to-sky-indigo-400 rounded-full opacity-60"></div>
                </span>
                <br />
                <span className="text-white">Coach Transportation</span>
              </h1>
            </div>
            
            {/* Enhanced Subheading with Visual Hierarchy */}
            <div className="relative">
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-royal-blue-600/10 to-sky-indigo-400/10 rounded-full blur-lg"></div>
              <p className="relative text-xl sm:text-2xl text-white/95 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <span className="font-semibold text-white border-l-4 border-sky-indigo-400 pl-4 block mb-2">
                  Smart, clean, and comfortable coaches
                </span>
                <span className="text-white/85">
                  for clubs, societies, and groups. Professional service, modern fleet, punctual and reliable.
                </span>
              </p>
            </div>

            {/* Professional Stats Bar */}
            <div className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-sky-indigo-400">35+</div>
                <div className="text-xs text-white/80 uppercase tracking-wide">Years</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-sky-indigo-400">50+</div>
                <div className="text-xs text-white/80 uppercase tracking-wide">Coaches</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                <div className="text-2xl font-bold text-sky-indigo-400">24/7</div>
                <div className="text-xs text-white/80 uppercase tracking-wide">Support</div>
              </div>
            </div>

          </div>

          {/* Right Column - Enhanced Quote Calculator */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 p-6 shadow-2xl w-full max-w-md">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-6 h-6 text-crimson-red-400" />
                <h3 className="text-black font-semibold text-lg">Get Your Quote</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-black/80 text-sm font-medium mb-2">Pick-up Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black/60" />
                    <input
                      type="text"
                      placeholder="Enter pickup location"
                      className="w-full bg-white/20 border border-white/30 rounded-lg pl-10 pr-4 py-3 text-black placeholder-black/60 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-black/80 text-sm font-medium mb-2">Destination</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black/60" />
                    <input
                      type="text"
                      placeholder="Enter destination"
                      className="w-full bg-white/20 border border-white/30 rounded-lg pl-10 pr-4 py-3 text-black placeholder-black/60 focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-black/80 text-sm font-medium mb-2">Travel Date</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black/60" />
                    <input
                      type="date"
                      className="w-full bg-white/20 border border-white/30 rounded-lg pl-10 pr-4 py-3 text-black focus:border-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="text-black/80 text-sm mb-4">
                  <span className="text-black font-medium">Popular destinations:</span> London, Birmingham, Manchester
                </div>
                <Link
                  href="/contact"
                  className="w-full bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-6 py-3 rounded-lg transition-all duration-300 font-medium inline-flex items-center justify-center gap-2"
                >
                  Get Exact Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero