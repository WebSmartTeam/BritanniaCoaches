'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calculator, MapPin, Clock } from 'lucide-react'

const Hero = () => {
  const [isQuickToolOpen, setIsQuickToolOpen] = useState(false)

  return (
    <section className={`relative flex items-end overflow-hidden -mt-20 transition-all duration-300 ${isQuickToolOpen ? 'h-screen' : 'h-[85vh]'}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/premium/luxury-coach-3.webp"
          alt="Britannia Coaches - Luxury Transportation"
          fill
          className="object-cover object-center"
          priority
          quality={95}
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto container-padding w-full pb-16">
        <div className="max-w-4xl hero-content">
          
          {/* 🧬 DNA INJECTION: Authority Headlines - Enterprise Pattern */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight text-shadow-lg">
            Britain&apos;s Premier
            <span className="block text-white">Coach Transportation</span>
          </h1>
          
          {/* 🧬 DNA INJECTION: Value Proposition - Conversion Optimized */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl">
            <span className="font-semibold text-white">25+ years</span> of excellence serving corporate events, school trips, weddings & more. 
            <span className="font-semibold text-white">Professional drivers, modern fleet, unmatched reliability.</span>
          </p>


          {/* 🧬 DNA INJECTION: Primary CTA Pattern - Proven Conversion */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/fleet"
              className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 text-xl font-semibold rounded-xl shadow-luxury-lg hover:shadow-luxury-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 group"
            >
              <span>View Our Fleet</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/services"
              className="bg-royal-blue-800/20 backdrop-blur-sm hover:bg-royal-blue-800/30 text-white border-2 border-white/30 hover:border-crimson-red-800 px-8 py-4 text-xl font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
            >
              <span>View Services</span>
            </Link>
          </div>

          {/* Quick Tools Widget */}
          <div className="mt-8">
            <button
              onClick={() => setIsQuickToolOpen(!isQuickToolOpen)}
              className="bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white/80 hover:text-white border border-white/20 hover:border-white/40 px-6 py-3 rounded-2xl transition-all duration-300 inline-flex items-center gap-3 text-sm font-light"
            >
              <Calculator className="w-4 h-4" />
              <span>Quick Trip Calculator</span>
              <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isQuickToolOpen ? 'rotate-90' : ''}`} />
            </button>

            {isQuickToolOpen && (
              <div className="mt-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl animate-fade-in-down">
                <h3 className="text-white font-semibold text-lg mb-4">Estimate Your Trip</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm mb-2">From</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                      <input
                        type="text"
                        placeholder="Pickup location"
                        className="w-full bg-white/20 border border-white/30 rounded-lg px-10 py-3 text-white placeholder-white/60 focus:border-white/60 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-2">To</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                      <input
                        type="text"
                        placeholder="Destination"
                        className="w-full bg-white/20 border border-white/30 rounded-lg px-10 py-3 text-white placeholder-white/60 focus:border-white/60 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-2">Date</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/60" />
                      <input
                        type="date"
                        className="w-full bg-white/20 border border-white/30 rounded-lg px-10 py-3 text-white focus:border-white/60 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div className="text-white/80 text-sm">
                    <span className="text-white font-medium">Popular routes:</span> London, Birmingham, Manchester
                  </div>
                  <Link
                    href="/contact"
                    className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-6 py-2 rounded-lg transition-all duration-300 text-sm font-medium"
                  >
                    Get Exact Quote
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero