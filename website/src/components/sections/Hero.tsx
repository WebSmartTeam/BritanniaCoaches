'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

const Hero = () => {
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
          {/* 🧬 DNA INJECTION: Enhanced Trust Badge - Proven Conversion Pattern */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-8 text-cream-100 border border-gold-400/30">
            <div className="w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
            <span>Trusted by 1000+ Customers • 25+ Years Excellence • Professional Certified</span>
          </div>
          
          {/* 🧬 DNA INJECTION: Authority Headlines - Enterprise Pattern */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-cream-50 mb-6 leading-tight text-shadow-lg">
            Britain&apos;s Premier
            <span className="block text-gold-400">Coach Transportation</span>
          </h1>
          
          {/* 🧬 DNA INJECTION: Value Proposition - Conversion Optimized */}
          <p className="text-xl md:text-2xl text-cream-100/90 mb-8 leading-relaxed max-w-3xl">
            <span className="font-semibold text-gold-400">25+ years</span> of excellence serving corporate events, school trips, weddings & more. 
            <span className="font-semibold text-cream-50">Professional drivers, modern fleet, unmatched reliability.</span>
          </p>

          {/* 🧬 DNA INJECTION: Instant Contact Strip - High Converting Pattern */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gold-400/20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="text-cream-100 text-center lg:text-left">
                <p className="text-lg font-semibold">Need immediate assistance?</p>
                <p className="text-cream-200">Call now for instant quote & booking</p>
              </div>
              <a href="tel:01234567890" className="flex items-center gap-3 bg-gold-600 hover:bg-gold-700 text-navy-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-luxury-lg hover:shadow-luxury-xl transform hover:scale-105">
                <Phone className="w-6 h-6" />
                <span className="text-xl">0123 456 7890</span>
              </a>
            </div>
          </div>

          {/* 🧬 DNA INJECTION: Primary CTA Pattern - Proven Conversion */}
          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/contact"
              className="bg-gold-600 hover:bg-gold-700 text-navy-900 px-8 py-4 text-xl font-semibold rounded-xl shadow-luxury-lg hover:shadow-luxury-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 group"
            >
              <span>Get Instant Quote</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              href="/services"
              className="bg-navy-800/20 backdrop-blur-sm hover:bg-navy-800/30 text-cream-50 border-2 border-cream-50/30 hover:border-gold-400 px-8 py-4 text-xl font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
            >
              <span>View Services</span>
            </Link>
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