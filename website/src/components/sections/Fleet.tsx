import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Users, Wifi, Coffee, Monitor, Shield, Wind, Volume2, Zap } from 'lucide-react'

const Fleet = () => {
  const fleetTypes = [
    {
      type: 'Luxury Executive',
      capacity: '16-25 passengers',
      image: '/images/premium/luxury-coach-2.jpg',
      features: ['Premium Leather Seats', 'WiFi & USB Charging', 'Climate Control', 'Entertainment System'],
      ideal: 'Corporate events, VIP transport, executive travel',
    },
    {
      type: 'Standard Coach',
      capacity: '35-49 passengers',
      image: '/images/premium/luxury-coach-3.jpg',
      features: ['Comfortable Seating', 'Air Conditioning', 'Luggage Storage', 'PA System'],
      ideal: 'School trips, group travel, day trips',
    },
    {
      type: 'Mini Coach',
      capacity: '8-16 passengers',
      image: '/images/premium/luxury-coach-4.jpg',
      features: ['Compact Design', 'Easy Boarding', 'Flexible Seating', 'Personal Service'],
      ideal: 'Small groups, airport transfers, local trips',
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
    <section className="section-padding bg-neutral-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
            Our Modern Fleet
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Experience comfort and reliability with our modern fleet of coaches. Each vehicle is maintained 
            to the highest standards and equipped with the latest amenities for your comfort and safety.
          </p>
        </div>

        {/* Fleet Types */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {fleetTypes.map((fleet, index) => (
            <div key={index} className="card card-hover overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={fleet.image}
                  alt={fleet.type}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {fleet.capacity}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-3">
                  {fleet.type}
                </h3>
                
                <p className="text-neutral-600 mb-4">
                  {fleet.ideal}
                </p>

                <div className="space-y-2">
                  {fleet.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-neutral-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Premium Amenities
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Every coach in our fleet comes equipped with modern amenities to ensure your journey is comfortable and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                  {amenity.title}
                </h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fleet Stats */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white mb-16">
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

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-clean-lg">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Ready to Experience Our Fleet?
            </h3>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Book your transportation today and experience the comfort and reliability of our modern fleet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn btn-primary btn-lg"
              >
                Book Now
              </Link>
              <Link
                href="/fleet"
                className="btn btn-outline-primary btn-lg"
              >
                View Full Fleet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fleet