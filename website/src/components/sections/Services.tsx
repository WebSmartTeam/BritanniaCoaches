'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, Heart, Plane, ArrowRight, Users, Calendar, MapPin } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Corporate Transport',
      category: 'Business',
      description: 'Professional business transportation solutions for corporate events, meetings, and team outings.',
      features: ['Executive Coaches', 'Professional Drivers', 'Flexible Scheduling'],
      href: '/services/corporate',
      image: '/images/services/corporate/assets_task_01jztkbqygfp8rcvfs4ez2t15y_1752165762_img_2.webp',
      color: 'from-blue-600 to-blue-700',
      accent: 'blue'
    },
    {
      icon: Heart,
      title: 'Wedding Transport',
      category: 'Special Events',
      description: 'Elegant transportation for your special day, ensuring guests arrive in comfort and style.',
      features: ['Luxury Coaches', 'Wedding Packages', 'Guest Coordination'],
      href: '/services/wedding',
      image: '/images/services/wedding/assets_task_01jztnpaegfdrtgwwk7v9h9rpd_1752168189_img_3.webp',
      color: 'from-rose-600 to-rose-700',
      accent: 'rose'
    },
    {
      icon: Plane,
      title: 'Airport Transfers',
      category: 'Travel',
      description: 'Reliable airport transfers with flight monitoring, meet & greet service to all UK airports.',
      features: ['Flight Monitoring', 'Meet & Greet', 'All UK Airports'],
      href: '/services/airport',
      image: '/images/services/airport/assets_task_01jztp22ebe4jrxcxjh8je438b_1752168577_img_0.webp',
      color: 'from-emerald-600 to-emerald-700',
      accent: 'emerald'
    },
    {
      icon: Users,
      title: 'School Trips',
      category: 'Education',
      description: 'Safe and reliable educational travel for schools, with enhanced safety features and experienced drivers.',
      features: ['Safety First', 'Educational Trips', 'Experienced Drivers'],
      href: '/services/school-trips',
      image: '/images/services/school-trips/assets_task_01jztkd5vyf0trmn8qgw271f9c_1752165789_img_2.webp',
      color: 'from-amber-600 to-amber-700',
      accent: 'amber'
    },
    {
      icon: Calendar,
      title: 'Day Trips',
      category: 'Leisure',
      description: 'Comfortable day excursions and tours for groups, clubs, and societies across the UK.',
      features: ['Scenic Routes', 'Group Packages', 'Flexible Itineraries'],
      href: '/services/day-trips',
      image: '/images/services/day-trips/assets_task_01jztp9f7xftvbyh0vj3544368_1752168825_img_0.webp',
      color: 'from-purple-600 to-purple-700',
      accent: 'purple'
    },
    {
      icon: MapPin,
      title: 'Long Distance',
      category: 'Extended Travel',
      description: 'Extended travel across UK and Europe with comfortable coaches and professional service.',
      features: ['Long Distance', 'Europe Travel', 'Comfort Features'],
      href: '/services/long-distance',
      image: '/images/services/long-distance/assets_task_01jztpdvw0fm8vhd1675pncbax_1752168967_img_0.webp',
      color: 'from-indigo-600 to-indigo-700',
      accent: 'indigo'
    }
  ]

  return (
    <section className="relative py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-amber-200/50 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-crimson-red-600 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-slate-ink-900">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight text-slate-ink-900">
            Professional Transportation
          </h2>
          <p className="text-lg md:text-xl text-slate-ink-900/70 max-w-3xl mx-auto leading-relaxed">
            From corporate events to special occasions, we provide reliable, comfortable, and professional coach transportation across the UK.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-white/50 hover:border-white/80">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-ink-900 mb-3 group-hover:text-crimson-red-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-ink-900/70 leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="bg-slate-50 text-slate-ink-900/80 text-xs font-medium px-3 py-1 rounded-full border border-slate-200/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-crimson-red-800 hover:text-crimson-red-900 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-ink-900 mb-4">
              Need a Custom Quote?
            </h3>
            <p className="text-slate-ink-900/70 mb-6 max-w-2xl mx-auto">
              Every journey is unique. Contact us for a personalized quote tailored to your specific transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 group"
              >
                <span>Get Custom Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <div className="flex items-center gap-4">
                <div className="hidden sm:block w-px h-12 bg-slate-ink-900/20" />
                <Link
                  href="tel:01462436125"
                  className="group flex items-center gap-3 text-slate-ink-900 hover:text-crimson-red-800 transition-colors duration-300"
                >
                  <div className="w-12 h-12 border-2 border-slate-ink-900/20 rounded-full flex items-center justify-center group-hover:border-crimson-red-800/50 transition-colors duration-300">
                    <span className="text-lg font-bold">📞</span>
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-slate-ink-900/60">Call us directly</div>
                    <div className="font-semibold">01462 436125</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services