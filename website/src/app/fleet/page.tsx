import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Shield, Award, CheckCircle, Users } from 'lucide-react'
import Testimonials from '@/components/sections/Testimonials'

export default function FleetPage() {
  const coaches = [
    {
      name: 'Executive Coach',
      image: '/images/services/corporate/NEW.webp',
      features: ['Luxury Reclining Seats', 'Air Conditioning', 'Onboard WC', 'PA System', 'WiFi Available', 'USB Charging', 'Premium Interior', 'Tinted Windows'],
      description: 'Our flagship executive coaches feature premium amenities and spacious interiors, perfect for corporate travel and long-distance journeys.',
      suitable: ['Corporate Events', 'Airport Transfers', 'Long Distance Travel', 'VIP Transport'],
      specifications: {
        length: '12m',
        width: '2.5m',
        height: '3.8m',
        luggage: 'Large underfloor storage'
      }
    },
    {
      name: 'Standard Coach',
      image: '/images/services/school-trips/NEW.webp',
      features: ['Comfortable Seating', 'Air Conditioning', 'PA System', 'Large Windows', 'Safety Equipment', 'First Aid Kit', 'Storage Space', 'Professional Driver'],
      description: 'Reliable and comfortable coaches perfect for school trips, group excursions, and day trips with excellent safety features.',
      suitable: ['School Trips', 'Day Trips', 'Group Excursions', 'Sports Teams'],
      specifications: {
        length: '12m',
        width: '2.5m',
        height: '3.8m',
        luggage: 'Underfloor storage'
      }
    },
    {
      name: 'Luxury Coach',
      image: '/images/services/wedding/NEW.webp',
      features: ['Premium Leather Seats', 'Entertainment System', 'Onboard WC', 'Air Conditioning', 'Mood Lighting', 'Panoramic Windows', 'Champagne Bar', 'Red Carpet Service'],
      description: 'Our luxury coaches provide the ultimate travel experience with premium amenities for special occasions and VIP transportation.',
      suitable: ['Weddings', 'Special Events', 'VIP Transport', 'Corporate Hospitality'],
      specifications: {
        length: '12m',
        width: '2.5m',
        height: '3.8m',
        luggage: 'Large underfloor storage'
      }
    },
    {
      name: 'Mini Coach',
      image: '/images/services/day-trips/NEW.webp',
      features: ['Comfortable Seating', 'Air Conditioning', 'Easy Access', 'Luggage Space', 'PA System', 'Wheelchair Accessible', 'Safety Equipment', 'Local Knowledge'],
      description: 'Perfect for smaller groups and local transport, our mini coaches offer flexibility and comfort for intimate journeys.',
      suitable: ['Small Groups', 'Local Transport', 'Shuttle Services', 'Airport Transfers'],
      specifications: {
        length: '8m',
        width: '2.3m',
        height: '3.2m',
        luggage: 'Rear storage'
      }
    },
    {
      name: 'Double Decker',
      image: '/images/services/corporate/NEW.webp',
      features: ['Two-Level Seating', 'Panoramic Views', 'Air Conditioning', 'Multiple WCs', 'PA System', 'Staircase Access', 'Large Capacity', 'Tour Guide Area'],
      description: 'Our double-decker coaches maximize capacity while providing excellent views, perfect for large groups and sightseeing tours.',
      suitable: ['Large Groups', 'Sightseeing Tours', 'Corporate Events', 'Festival Transport'],
      specifications: {
        length: '12m',
        width: '2.5m',
        height: '4.4m',
        luggage: 'Large underfloor storage'
      }
    },
    {
      name: 'Accessible Coach',
      image: '/images/services/school-trips/NEW.webp',
      features: ['Wheelchair Lift', 'Accessible Seating', 'Wide Aisles', 'Accessible WC', 'Safety Equipment', 'Trained Staff', 'Secure Wheelchair Bay', 'Easy Access'],
      description: 'Specially designed coaches with full accessibility features, ensuring comfortable travel for passengers with mobility requirements.',
      suitable: ['Accessible Travel', 'Care Homes', 'Special Needs Groups', 'Medical Transport'],
      specifications: {
        length: '12m',
        width: '2.5m',
        height: '3.8m',
        luggage: 'Accessible storage'
      }
    }
  ]

  const certifications = [
    {
      icon: Shield,
      title: 'Safety Certified',
      description: 'All coaches meet VOSA safety standards with regular MOT and safety inspections.',
      credential: 'VOSA Approved'
    },
    {
      icon: Award,
      title: 'Industry Awards',
      description: 'Recognized for excellence in passenger transport and customer service.',
      credential: 'Multiple Awards'
    },
    {
      icon: CheckCircle,
      title: 'Fully Licensed',
      description: 'Complete PSV licensing and comprehensive insurance coverage.',
      credential: 'PSV Licensed'
    },
    {
      icon: Users,
      title: 'Trained Drivers',
      description: 'Professional drivers with CPC qualifications and DBS checks.',
      credential: 'CPC Qualified'
    }
  ]



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-ink-900 via-slate-ink-800 to-slate-ink-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative w-full px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-white">
              Professional Coach Fleet
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover our comprehensive range of modern, well-maintained coaches designed for every journey. 
              From intimate groups to large parties, we have the perfect vehicle with professional drivers and premium amenities.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
              >
                <span>View Our Fleet</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Coach Showcase */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-crimson-red-800 text-white px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Premium Fleet</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-ink-900 mb-6 leading-tight">
              Professional Coach Solutions
            </h2>
            <p className="text-lg text-slate-ink-900/80 max-w-2xl mx-auto leading-relaxed">
              From executive coaches to accessible vehicles, we provide the perfect transportation solution for every journey and group size.
            </p>
          </div>

          <div className="space-y-16">
            {coaches.map((coach, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative h-72 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                </div>
                
                <div className={`px-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-ink-900 mb-4">
                    {coach.name}
                  </h3>
                  <p className="text-lg text-slate-ink-900/80 leading-relaxed mb-6">
                    {coach.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-slate-ink-900 mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {coach.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-slate-ink-900/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Suitable For */}
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-slate-ink-900 mb-3">Perfect For</h4>
                    <div className="flex flex-wrap gap-2">
                      {coach.suitable.map((use, useIndex) => (
                        <span key={useIndex} className="bg-crimson-red-100 text-crimson-red-800 px-3 py-1 rounded-full text-sm font-medium">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
                  >
                    Get Quote for This Coach
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-ink-900">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Safety & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-crimson-red-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {cert.title}
                </h3>
                <div className="text-sm font-semibold text-crimson-red-400 bg-crimson-red-400/10 px-3 py-1 rounded-full inline-block">
                  {cert.credential}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-ink-900 mb-6 leading-tight">
              Ready to Book Your Coach?
            </h2>
            <p className="text-xl text-slate-ink-900/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Contact us today to discuss your requirements and get a personalized quote for your journey. 
              Professional service, modern fleet, competitive prices.
            </p>
            
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
              >
                <span>Get Your Quote</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}