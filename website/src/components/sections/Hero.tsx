'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/premium/luxury-coach-1.webp"
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
          {/* DNA INJECTION: Enhanced Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 text-white">
            <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
            <span>25+ Years of Excellence • Professional Drivers • UK Wide Service</span>
          </div>
          
          {/* DNA INJECTION: MBDiamond Authority Headlines */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Premium Coach Transportation Services
          </h1>
          
          {/* DNA INJECTION: Value Proposition */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl">
            Professional luxury coach hire for corporate events, school trips, weddings, and special occasions. 
            Serving the UK with modern fleet and experienced drivers.
          </p>

          {/* DNA INJECTION: MBDiamond CTA Pattern */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Get Instant Quote
              <ArrowRight size={20} />
            </button>
            <a 
              href="tel:01234567890"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Call Now: 01234 567 890
            </a>
          </div>
        </div>
      </div>

      {/* Elegant Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-cream-100/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cream-100/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero