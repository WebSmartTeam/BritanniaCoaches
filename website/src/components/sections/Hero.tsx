'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Star, Calendar, Calculator, MapPin, Clock } from 'lucide-react'

const Hero = () => {
  const [isQuickToolOpen, setIsQuickToolOpen] = useState(false)

  return (
    <section className="relative h-screen flex items-center overflow-hidden -mt-20">
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
      <div className="relative z-10 max-w-7xl mx-auto container-padding w-full">
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
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 hover:border-white/50 px-6 py-3 rounded-xl transition-all duration-300 inline-flex items-center gap-3 text-sm font-medium"
            >
              <Calculator className="w-5 h-5" />
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
                    Estimated distance: <span className="text-white font-semibold">~45 miles</span>
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

      {/* Floating Stats Widget */}
      <div className="absolute bottom-8 right-8 z-10 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-xs text-white/80">Happy Clients</div>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">4.9</div>
              <div className="text-xs text-white/80">Rating</div>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-2">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-xs text-white/80">Years</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero