'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calculator, MapPin, Clock } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden -mt-20 h-screen">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          {/* Left Column - Main Content */}
          <div className="max-w-4xl hero-content mt-16">
            
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
          </div>

          {/* Right Column - Always Open Calculator */}
          <div className="lg:ml-auto w-full max-w-md">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="w-5 h-5 text-crimson-red-400" />
                <h3 className="text-white font-semibold text-lg">Estimate Your Trip</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-2 gap-4">
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
              
              <div className="mt-6">
                <div className="text-white/80 text-sm mb-4">
                  <span className="text-white font-medium">Popular routes:</span> London, Birmingham, Manchester
                </div>
                <Link
                  href="/contact"
                  className="w-full bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-6 py-3 rounded-lg transition-all duration-300 text-sm font-medium inline-flex items-center justify-center gap-2"
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