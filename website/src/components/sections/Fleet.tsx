'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Users, Wifi, Coffee, Monitor, Shield, Wind, Volume2, Zap, Play, ArrowRight } from 'lucide-react'

const Fleet = () => {
  const [activeFleet, setActiveFleet] = useState(0)

  const fleetTypes = [
    {
      type: 'Luxury Executive',
      capacity: '16-25 passengers',
      image: '/images/premium/luxury-coach-2.webp',
      features: ['Premium Leather Seats', 'WiFi & USB Charging', 'Climate Control', 'Entertainment System'],
      ideal: 'Corporate events, VIP transport, executive travel',
      price: 'From £120/hour',
      highlight: 'Most Popular',
    },
    {
      type: 'Standard Coach',
      capacity: '35-49 passengers',
      image: '/images/premium/luxury-coach-3.webp',
      features: ['Comfortable Seating', 'Air Conditioning', 'Luggage Storage', 'PA System'],
      ideal: 'School trips, group travel, day trips',
      price: 'From £95/hour',
      highlight: 'Best Value',
    },
    {
      type: 'Mini Coach',
      capacity: '8-16 passengers',
      image: '/images/premium/luxury-coach-4.webp',
      features: ['Compact Design', 'Easy Boarding', 'Flexible Seating', 'Personal Service'],
      ideal: 'Small groups, airport transfers, local trips',
      price: 'From £85/hour',
      highlight: 'Flexible',
    },
  ]

  const amenities = [
    {
      icon: Users,
      title: 'Comfortable Seating',
      description: 'Ergonomic seats with ample legroom and reclining options',
    },
    {
      icon: Wifi,
      title: 'Free WiFi',
      description: 'Stay connected with high-speed internet throughout your journey',
    },
    {
      icon: Zap,
      title: 'USB Charging',
      description: 'Individual charging ports for all your devices',
    },
    {
      icon: Wind,
      title: 'Climate Control',
      description: 'Advanced air conditioning for optimal comfort',
    },
    {
      icon: Monitor,
      title: 'Entertainment',
      description: 'Audio/visual systems for presentations and entertainment',
    },
    {
      icon: Coffee,
      title: 'Refreshments',
      description: 'Optional catering and refreshment services',
    },
    {
      icon: Shield,
      title: 'Safety Features',
      description: 'Latest safety technology and regular maintenance',
    },
    {
      icon: Volume2,
      title: 'PA System',
      description: 'Professional sound system for announcements and music',
    },
  ]

  const stats = [
    { number: '50+', label: 'Modern Coaches' },
    { number: '5', label: 'Years Average Age' },
    { number: '100%', label: 'Safety Certified' },
    { number: '24/7', label: 'Maintenance Support' },
  ]

  return (
    <section className="section-padding bg-slate-ink-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-blue-800 to-crimson-red-800" />
      </div>
      
      <div className="max-w-7xl mx-auto container-padding relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Our Modern Fleet
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Experience comfort and reliability with our modern fleet of coaches. Interactive coach selector 
            to help you choose the perfect vehicle for your journey.
          </p>
        </div>

        {/* Interactive Fleet Selector */}
        <div className="mb-16">
          {/* Fleet Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {fleetTypes.map((fleet, index) => (
              <button
                key={index}
                onClick={() => setActiveFleet(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeFleet === index
                    ? 'bg-crimson-red-800 text-white shadow-luxury'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                {fleet.type}
              </button>
            ))}
          </div>

          {/* Active Fleet Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={fleetTypes[activeFleet].image}
                  alt={fleetTypes[activeFleet].type}
                  fill
                  className="object-cover transition-opacity duration-500"
                />
                <div className="absolute top-4 left-4 bg-crimson-red-800 text-white px-4 py-2 rounded-full font-medium">
                  {fleetTypes[activeFleet].highlight}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                  <Play className="w-4 h-4 inline mr-2" />
                  Virtual Tour
                </div>
              </div>
            </div>

            {/* Details Side */}
            <div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-3xl font-display font-bold text-white mb-4">
                  {fleetTypes[activeFleet].type}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-crimson-red-800">{fleetTypes[activeFleet].capacity}</div>
                    <div className="text-sm text-white/70">Passenger Capacity</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-crimson-red-800">{fleetTypes[activeFleet].price}</div>
                    <div className="text-sm text-white/70">Starting Price</div>
                  </div>
                </div>

                <p className="text-white/80 mb-6 leading-relaxed">
                  {fleetTypes[activeFleet].ideal}
                </p>

                <div className="space-y-3 mb-8">
                  {fleetTypes[activeFleet].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-crimson-red-800 rounded-full" />
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 group"
                >
                  <span>Book This Coach</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Amenities Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Premium Amenities
            </h3>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Every coach comes equipped with modern amenities for your comfort and convenience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-crimson-red-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {amenity.title}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet Excellence Stats */}
        <div className="bg-gradient-to-r from-crimson-red-800 to-royal-blue-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Fleet Excellence
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our commitment to quality and safety is reflected in our fleet statistics
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-white/90 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fleet