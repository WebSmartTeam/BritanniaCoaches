import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Users, Shield, Award, CheckCircle } from 'lucide-react'

export default function FleetPage() {
  const coaches = [
    {
      name: 'Executive Coach',
      image: '/images/services/corporate/assets_task_01jztkbqygfp8rcvfs4ez2t15y_1752165762_img_2.webp',
      features: ['Air Conditioning', 'Reclining Seats', 'Onboard WC', 'PA System', 'Storage Space'],
      description: 'Our premium executive coaches are perfect for corporate travel, offering maximum comfort and professional amenities.',
      suitable: ['Corporate Events', 'Airport Transfers', 'Long Distance Travel']
    },
    {
      name: 'Standard Coach',
      image: '/images/services/school-trips/assets_task_01jztkd5vyf0trmn8qgw271f9c_1752165789_img_2.webp',
      features: ['Air Conditioning', 'Comfortable Seating', 'PA System', 'Large Windows', 'Storage Space'],
      description: 'Reliable and comfortable coaches ideal for school trips, day excursions, and group travel.',
      suitable: ['School Trips', 'Day Trips', 'Group Excursions']
    },
    {
      name: 'Luxury Coach',
      image: '/images/services/wedding/assets_task_01jztnpaegfdrtgwwk7v9h9rpd_1752168189_img_3.webp',
      features: ['Luxury Seating', 'Entertainment System', 'Onboard WC', 'Air Conditioning', 'Premium Interior'],
      description: 'Our luxury coaches provide the ultimate travel experience for special occasions and VIP transportation.',
      suitable: ['Weddings', 'Special Events', 'VIP Transport']
    },
    {
      name: 'Mini Coach',
      image: '/images/services/day-trips/assets_task_01jztp9f7xftvbyh0vj3544368_1752168825_img_0.webp',
      features: ['Air Conditioning', 'Comfortable Seating', 'Easy Access', 'Luggage Space'],
      description: 'Perfect for smaller groups, our mini coaches offer flexibility and comfort for intimate journeys.',
      suitable: ['Small Groups', 'Local Transport', 'Shuttle Services']
    }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'All our coaches meet the highest safety standards with regular inspections and maintenance.',
      stats: '100% Safety Record'
    },
    {
      icon: Users,
      title: 'Professional Drivers',
      description: 'Experienced, DBS-checked drivers with excellent local knowledge and customer service skills.',
      stats: '35+ Years Experience'
    },
    {
      icon: Award,
      title: 'Modern Fleet',
      description: 'Well-maintained modern coaches with the latest amenities and comfort features.',
      stats: '50+ Vehicles'
    },
    {
      icon: CheckCircle,
      title: 'Fully Licensed',
      description: 'Fully licensed and insured with all necessary certifications for peace of mind.',
      stats: 'Licensed & Insured'
    }
  ]

  const amenities = [
    'Air Conditioning',
    'Reclining Seats',
    'Onboard WC Facilities',
    'PA Sound System',
    'Ample Storage Space',
    'Large Windows',
    'Professional Driver',
    'GPS Tracking'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-ink-900 via-slate-ink-800 to-slate-ink-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-crimson-red-800 text-white px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Our Fleet</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Modern Coach Fleet
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Discover our range of modern, well-maintained coaches designed for comfort, 
              safety, and reliability. From intimate groups to large parties, we have the perfect vehicle for your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20 bg-[rgb(220,231,245)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-ink-900 mb-6 leading-tight">
              Why Choose Our Fleet
            </h2>
            <p className="text-xl text-slate-ink-900/70 max-w-3xl mx-auto leading-relaxed">
              Every coach in our fleet is maintained to the highest standards, ensuring your journey is safe, comfortable, and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-crimson-red-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-ink-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-ink-900/70 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="text-sm font-semibold text-crimson-red-800 bg-crimson-red-50 px-3 py-1 rounded-full inline-block">
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coach Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-ink-900 mb-6 leading-tight">
              Our Coaches
            </h2>
            <p className="text-xl text-slate-ink-900/70 max-w-3xl mx-auto leading-relaxed">
              From executive coaches to mini coaches, we have the right vehicle for every occasion and group size.
            </p>
          </div>

          <div className="space-y-16">
            {coaches.map((coach, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={coach.image}
                      alt={coach.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-ink-900 mb-6">
                    {coach.name}
                  </h3>
                  <p className="text-lg text-slate-ink-900/80 leading-relaxed mb-8">
                    {coach.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-slate-ink-900 mb-4">Key Features</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {coach.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-slate-ink-900/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Suitable For */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-slate-ink-900 mb-4">Perfect For</h4>
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
                    className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
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

      {/* Standard Amenities */}
      <section className="py-20 bg-slate-ink-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Standard Amenities
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Every coach in our fleet comes with these standard features to ensure your comfort and safety.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <div className="text-white font-medium">{amenity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[rgb(220,231,245)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-ink-900 mb-6 leading-tight">
              Ready to Travel?
            </h2>
            <p className="text-xl text-slate-ink-900/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Contact us today to discuss your requirements and get a personalized quote for your journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="/contact"
                className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
              >
                <span>Get Your Quote</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </Link>
              
              <Link
                href="tel:01462436125"
                className="border-2 border-crimson-red-800 text-crimson-red-800 hover:bg-crimson-red-800 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 inline-flex items-center gap-3"
              >
                <span>Call: 01462 436125</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}