'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Building2, GraduationCap, Heart, Plane, Sun, Globe, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Corporate Transport',
      description: 'Professional business transportation with executive comfort for meetings, conferences, and VIP travel.',
      image: '/images/services/corporate/assets_task_01jztkbqygfp8rcvfs4ez2t15y_1752165762_img_2.webp',
      href: '/services/corporate',
      features: ['Executive Seating', 'WiFi & Charging', 'Professional Drivers']
    },
    {
      icon: GraduationCap,
      title: 'School Trips',
      description: 'Safe educational transport with DBS-checked drivers and comprehensive safety equipment.',
      image: '/images/services/school-trips/assets_task_01jztkd5vyf0trmn8qgw271f9c_1752165789_img_2.webp',
      href: '/services/school-trips',
      features: ['DBS Checked Drivers', 'Safety Equipment', 'Group Discounts']
    },
    {
      icon: Heart,
      title: 'Wedding Transport',
      description: 'Elegant luxury transportation for your special day with premium amenities and red carpet service.',
      image: '/images/services/wedding/assets_task_01jztnpaegfdrtgwwk7v9h9rpd_1752168189_img_3.webp',
      href: '/services/wedding',
      features: ['Luxury Interior', 'Red Carpet Service', 'Wedding Coordination']
    },
    {
      icon: Plane,
      title: 'Airport Transfers',
      description: 'Reliable transfers to all major UK airports with flight monitoring and guaranteed arrival.',
      image: '/images/services/airport/assets_task_01jztp22ebe4jrxcxjh8je438b_1752168577_img_0.webp',
      href: '/services/airport',
      features: ['Flight Monitoring', 'Meet & Greet', 'All UK Airports']
    },
    {
      icon: Sun,
      title: 'Day Trips',
      description: 'Comfortable excursions to historic sites, theme parks, and scenic destinations.',
      image: '/images/services/day-trips/assets_task_01jztp9f7xftvbyh0vj3544368_1752168825_img_0.webp',
      href: '/services/day-trips',
      features: ['Historic Sites', 'Theme Parks', 'Coastal Trips']
    },
    {
      icon: Globe,
      title: 'Long Distance',
      description: 'Premium long-distance travel across UK and Europe with luxury amenities.',
      image: '/images/services/long-distance/assets_task_01jztpdvw0fm8vhd1675pncbax_1752168967_img_0.webp',
      href: '/services/long-distance',
      features: ['European Tours', 'Multi-Day Trips', 'Luxury Amenities']
    },
  ]

  return (
    <section className="py-20 bg-[rgb(220,231,245)]">
      <div className="w-full px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-slate-ink-900">
            Our Transportation Services
          </h2>
          <p className="text-xl text-slate-ink-900/70 max-w-3xl mx-auto leading-relaxed">
            Professional coach transportation solutions for every occasion, from corporate events to special celebrations
          </p>
        </div>

        {/* Services Grid - Alternating Layout */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl group">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-crimson-red-800/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`px-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-ink-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg text-slate-ink-900/80 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-crimson-red-800 rounded-full"></div>
                        <span className="text-sm text-slate-ink-900/70 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Link
                  href={service.href}
                  className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2 group"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <Link
            href="/services"
            className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
          >
            <span>View All Services</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services