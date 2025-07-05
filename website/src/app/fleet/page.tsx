import React from 'react'
import Image from 'next/image'
import { Users, Wifi, Monitor, Wind, Shield, Coffee, Zap, Volume2, CheckCircle } from 'lucide-react'

export default function FleetPage() {
  const fleetCategories = [
    {
      category: 'Executive Coaches',
      capacity: '16-25 passengers',
      description: 'Premium coaches designed for corporate travel and VIP transport.',
      image: '/images/premium/luxury-coach-1.jpg',
      features: [
        'Premium leather seating',
        'Individual climate control',
        'WiFi and USB charging points',
        'Entertainment systems',
        'Refreshment facilities',
        'Professional uniformed driver',
      ],
      amenities: [
        { icon: Users, name: 'Premium Seating' },
        { icon: Wifi, name: 'High-Speed WiFi' },
        { icon: Monitor, name: 'Entertainment' },
        { icon: Coffee, name: 'Refreshments' },
      ],
      idealFor: ['Corporate events', 'VIP transport', 'Executive meetings', 'Airport transfers'],
    },
    {
      category: 'Standard Coaches',
      capacity: '35-49 passengers',
      description: 'Comfortable and reliable coaches perfect for group travel and day trips.',
      image: '/images/premium/luxury-coach-2.jpg',
      features: [
        'Comfortable reclining seats',
        'Air conditioning system',
        'PA system for announcements',
        'Large luggage compartment',
        'Emergency exits and safety equipment',
        'Professional driver service',
      ],
      amenities: [
        { icon: Users, name: 'Comfortable Seating' },
        { icon: Wind, name: 'Air Conditioning' },
        { icon: Volume2, name: 'PA System' },
        { icon: Shield, name: 'Safety Features' },
      ],
      idealFor: ['School trips', 'Group outings', 'Sports teams', 'Day trips'],
    },
    {
      category: 'Mini Coaches',
      capacity: '8-16 passengers',
      description: 'Compact coaches ideal for smaller groups and local transportation.',
      image: '/images/premium/luxury-coach-3.jpg',
      features: [
        'Flexible seating arrangements',
        'Easy boarding access',
        'Climate control',
        'USB charging points',
        'Compact luggage space',
        'Personal driver service',
      ],
      amenities: [
        { icon: Users, name: 'Flexible Seating' },
        { icon: Zap, name: 'USB Charging' },
        { icon: Wind, name: 'Climate Control' },
        { icon: CheckCircle, name: 'Easy Access' },
      ],
      idealFor: ['Small groups', 'Airport transfers', 'Local trips', 'Wedding parties'],
    },
  ]

  const allAmenities = [
    {
      icon: Users,
      title: 'Comfortable Seating',
      description: 'Ergonomically designed seats with ample legroom and reclining options for maximum comfort.',
    },
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description: 'Stay connected throughout your journey with complimentary high-speed internet access.',
    },
    {
      icon: Zap,
      title: 'USB Charging',
      description: 'Individual charging ports at every seat to keep your devices powered throughout the trip.',
    },
    {
      icon: Wind,
      title: 'Climate Control',
      description: 'Advanced air conditioning and heating systems maintain optimal temperature in all weather.',
    },
    {
      icon: Monitor,
      title: 'Entertainment Systems',
      description: 'Audio/visual equipment for presentations, movies, or music during your journey.',
    },
    {
      icon: Coffee,
      title: 'Refreshment Services',
      description: 'Optional catering and refreshment services can be arranged for longer journeys.',
    },
    {
      icon: Shield,
      title: 'Safety Features',
      description: 'Latest safety technology including GPS tracking, emergency equipment, and safety belts.',
    },
    {
      icon: Volume2,
      title: 'PA System',
      description: 'Professional sound system for clear announcements and background music.',
    },
  ]

  const fleetStats = [
    { number: '50+', label: 'Total Coaches' },
    { number: '5', label: 'Years Average Age' },
    { number: '100%', label: 'Safety Certified' },
    { number: '24/7', label: 'Maintenance' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Our Modern Fleet
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Experience comfort, safety, and reliability with our diverse fleet of modern coaches. 
              Each vehicle is maintained to the highest standards and equipped with premium amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Stats */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {fleetStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Categories */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
              Fleet Categories
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our range of coaches designed to meet different group sizes and travel requirements.
            </p>
          </div>

          <div className="space-y-16">
            {fleetCategories.map((fleet, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
                    <Image
                      src={fleet.image}
                      alt={fleet.category}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-4 py-2 rounded-full font-medium">
                      {fleet.capacity}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
                    {fleet.category}
                  </h3>
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    {fleet.description}
                  </p>

                  {/* Amenities Icons */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {fleet.amenities.map((amenity, amenityIndex) => (
                      <div key={amenityIndex} className="text-center">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                          <amenity.icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <p className="text-sm text-neutral-600">{amenity.name}</p>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-neutral-900 mb-4">Features Include:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {fleet.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-neutral-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-neutral-900 mb-4">Ideal For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {fleet.idealFor.map((use, useIndex) => (
                        <span
                          key={useIndex}
                          className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Amenities */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
              Premium Amenities
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Every coach in our fleet comes equipped with modern amenities designed to make your journey comfortable and enjoyable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {allAmenities.map((amenity, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {amenity.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Maintenance */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
              Safety & Maintenance
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Your safety is our priority. Our comprehensive maintenance program ensures every coach meets the highest safety standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Regular Inspections
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                All coaches undergo daily pre-trip inspections and comprehensive weekly safety checks 
                to ensure optimal performance and safety.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Certified Maintenance
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Our maintenance team consists of certified technicians who follow strict manufacturer 
                guidelines and industry best practices.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                GPS Tracking
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Every coach is equipped with GPS tracking systems for real-time monitoring 
                and enhanced security throughout your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Environmental Commitment
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We&apos;re committed to reducing our environmental impact while maintaining the highest service standards.
            </p>
          </div>

          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">Euro 6</div>
                <div className="text-white/90">Low Emission Engines</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">30%</div>
                <div className="text-white/90">Fuel Efficiency Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-white/90">Eco-Friendly Cleaning</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
            Experience Our Fleet
          </h2>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Ready to travel with us? Book your journey today and experience the comfort and reliability of our modern fleet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="btn btn-primary btn-xl"
            >
              Get Your Quote
            </a>
            <a
              href="tel:01234567890"
              className="btn btn-outline-primary btn-xl"
            >
              Call 0123 456 7890
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}