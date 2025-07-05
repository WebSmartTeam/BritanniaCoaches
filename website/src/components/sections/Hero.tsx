'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Users, MapPin, Calendar, Phone, ArrowRight, CheckCircle } from 'lucide-react'

const Hero = () => {

  const stats = [
    { number: '25+', label: 'Years Experience', icon: Calendar },
    { number: '50+', label: 'Modern Coaches', icon: Users },
    { number: '100K+', label: 'Happy Passengers', icon: CheckCircle },
    { number: 'UK Wide', label: 'Coverage Area', icon: MapPin },
  ]

  const features = [
    'Professional & Certified Drivers',
    'Modern Fleet with Latest Safety Features',
    'Fully Licensed & Insured',
    'Flexible Booking Options',
    'Competitive Pricing',
    '24/7 Customer Support',
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/premium/luxury-coach-1.jpg"
          alt="Britannia Coaches - Professional Transportation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto container-padding w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Trusted by 1000+ Customers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Professional Coach
              <span className="block text-secondary-400">Transportation</span>
              <span className="block text-primary-400">Across the UK</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              25+ years of excellence in providing safe, reliable, and comfortable coach services 
              for corporate events, school trips, weddings, and more.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="btn btn-secondary btn-xl inline-flex items-center gap-2"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                href="tel:01234567890"
                className="btn btn-outline-primary btn-xl inline-flex items-center gap-2 border-white text-white hover:bg-white hover:text-primary-600"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <div className="stats-counter">{stat.number}</div>
                  <div className="stats-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Quote Form */}
          <div className="lg:flex lg:justify-end">
            <div className="glass-card p-8 rounded-2xl max-w-md w-full">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">
                  Get Instant Quote
                </h3>
                <p className="text-neutral-600">
                  Fill out the form below and we&apos;ll get back to you within 1 hour
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Enter pickup location"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Destination
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Enter destination"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Time
                    </label>
                    <input
                      type="time"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Passengers
                    </label>
                    <select className="input-field">
                      <option>1-10 passengers</option>
                      <option>11-20 passengers</option>
                      <option>21-30 passengers</option>
                      <option>31-50 passengers</option>
                      <option>50+ passengers</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Service Type
                    </label>
                    <select className="input-field">
                      <option>Corporate Event</option>
                      <option>School Trip</option>
                      <option>Wedding</option>
                      <option>Airport Transfer</option>
                      <option>Day Trip</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Contact Details
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Your name"
                    />
                    <input
                      type="tel"
                      className="input-field"
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    className="input-field"
                    placeholder="Email address"
                  />
                </div>

                <div>
                  <textarea
                    className="input-field min-h-[80px]"
                    placeholder="Additional requirements (optional)"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-full"
                >
                  Get My Quote
                </button>
              </form>

              <div className="mt-4 text-center">
                <p className="text-sm text-neutral-600">
                  Or call us directly at{' '}
                  <Link href="tel:01234567890" className="font-medium text-primary-600 hover:text-primary-700">
                    0123 456 7890
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero