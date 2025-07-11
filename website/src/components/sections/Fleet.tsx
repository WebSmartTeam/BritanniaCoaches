import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Users, Wifi, Coffee, Monitor, Shield, Wind, Volume2, Zap } from 'lucide-react'

const Fleet = () => {

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
    <section className="py-20 bg-ice-grey-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="border-l-4 border-crimson-red-800 pl-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-slate-ink-900">
              Our Modern Fleet
            </h2>
            <p className="text-xl text-slate-ink-900/60 max-w-2xl leading-relaxed">
              Experience comfort and reliability with our modern fleet of coaches.
            </p>
          </div>
        </div>

        {/* Clean Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {fleetTypes.map((fleet, index) => (
            <div key={index} className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <Image
                  src={fleet.image}
                  alt={fleet.type}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-crimson-red-800 text-white px-3 py-1 rounded font-medium text-sm">
                  {fleet.highlight}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-ink-900 mb-2">
                  {fleet.type}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-ice-grey-50 rounded">
                    <div className="text-lg font-bold text-crimson-red-800">{fleet.capacity}</div>
                    <div className="text-xs text-slate-ink-900/60">Capacity</div>
                  </div>
                  <div className="text-center p-3 bg-ice-grey-50 rounded">
                    <div className="text-lg font-bold text-crimson-red-800">{fleet.price}</div>
                    <div className="text-xs text-slate-ink-900/60">Starting</div>
                  </div>
                </div>

                <p className="text-slate-ink-900/70 mb-4 text-sm">
                  {fleet.ideal}
                </p>

                <div className="space-y-2 mb-6">
                  {fleet.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-slate-ink-900/70">
                      <div className="w-1.5 h-1.5 bg-crimson-red-800 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="w-full bg-crimson-red-800 hover:bg-crimson-red-900 text-white py-3 text-center font-medium transition-colors duration-300 inline-block"
                >
                  Book This Coach
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Amenities Grid */}
        <div className="mb-16">
          <div className="mb-12">
            <div className="border-l-4 border-crimson-red-800 pl-8">
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight text-slate-ink-900">
                Premium Amenities
              </h3>
              <p className="text-xl text-slate-ink-900/60 max-w-2xl leading-relaxed">
                Every coach comes equipped with modern amenities for your comfort.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-crimson-red-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-ink-900 mb-2">
                  {amenity.title}
                </h4>
                <p className="text-slate-ink-900/70 text-sm">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet Stats */}
        <div className="bg-slate-ink-900 rounded-lg p-8 md:p-12 text-white">
          <div className="mb-8">
            <div className="border-l-4 border-crimson-red-800 pl-8">
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-4 leading-tight text-white">
                Fleet Excellence
              </h3>
              <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                Our commitment to quality and safety
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-crimson-red-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">
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