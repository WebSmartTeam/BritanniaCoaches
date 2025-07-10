import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, GraduationCap, Heart, Plane, MapPin, Navigation, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Corporate Transport',
      description: 'Professional transportation for business events, conferences, and corporate meetings.',
      features: ['Executive Coaches', 'Professional Drivers', 'Flexible Scheduling'],
      href: '/services/corporate',
      image: '/images/premium/luxury-coach-1.webp',
      gradient: 'from-royal-blue-800/90 to-royal-blue-900/90',
    },
    {
      icon: GraduationCap,
      title: 'School Trips',
      description: 'Safe and secure transportation for educational trips and student travel.',
      features: ['Safety Certified', 'DBS Checked Drivers', 'Educational Discounts'],
      href: '/services/school-trips',
      image: '/images/premium/luxury-coach-2.webp',
      gradient: 'from-emerald-600/90 to-emerald-700/90',
    },
    {
      icon: Heart,
      title: 'Wedding Transport',
      description: 'Elegant transportation for your special day and guest shuttles.',
      features: ['Luxury Coaches', 'Decorative Options', 'Flexible Timings'],
      href: '/services/wedding',
      image: '/images/premium/luxury-coach-3.webp',
      gradient: 'from-rose-600/90 to-rose-700/90',
    },
    {
      icon: Plane,
      title: 'Airport Transfers',
      description: 'Reliable airport transfers with flight monitoring and meet & greet service.',
      features: ['Flight Monitoring', 'Meet & Greet', 'All UK Airports'],
      href: '/services/airport',
      image: '/images/premium/luxury-coach-4.webp',
      gradient: 'from-sky-indigo-800/90 to-royal-blue-900/90',
    },
    {
      icon: MapPin,
      title: 'Day Trips',
      description: 'Memorable day trips to popular destinations with flexible itineraries.',
      features: ['Popular Destinations', 'Group Discounts', 'Local Guides'],
      href: '/services/day-trips',
      image: '/images/premium/luxury-coach-5.webp',
      gradient: 'from-amber-600/90 to-orange-600/90',
    },
    {
      icon: Navigation,
      title: 'Long Distance',
      description: 'Comfortable long-distance travel across the UK and Europe.',
      features: ['Modern Amenities', 'Rest Stops', 'European Travel'],
      href: '/services/long-distance',
      image: '/images/premium/luxury-coach-1.webp',
      gradient: 'from-purple-600/90 to-purple-700/90',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-ice-grey-50 to-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-ink-900 mb-6">
            Our Transportation Services
          </h2>
          <p className="text-xl text-slate-ink-900/70 max-w-3xl mx-auto leading-relaxed">
            Professional coach services tailored to your needs. From corporate events to family day trips, 
            we provide safe, reliable, and comfortable transportation solutions across the UK.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group block">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-xl transition-all duration-500 transform hover:scale-105">
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient}`} />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  {/* Icon */}
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <ArrowRight className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-white transition-colors duration-200">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/90 leading-relaxed mb-4 text-sm">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex} 
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-md text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Interactive CTA Section */}
        <div className="mt-20">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/premium/luxury-coach-3.webp"
                alt="Custom Transportation Solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-900/95 to-crimson-red-800/95" />
            </div>
            
            {/* Content */}
            <div className="relative p-8 md:p-16 text-center text-white">
              <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Need a Custom Solution?
              </h3>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                We specialize in creating bespoke transportation solutions. Whether it&apos;s a unique route, 
                special event, or specific requirements, our team will craft the perfect solution for you.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">24/7</span>
                  </div>
                  <p className="text-sm text-white/80">Available Support</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">UK</span>
                  </div>
                  <p className="text-sm text-white/80">Nationwide Coverage</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl font-bold">+25</span>
                  </div>
                  <p className="text-sm text-white/80">Years Experience</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-royal-blue-800 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 group"
                >
                  <span>Get Custom Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="tel:01234567890"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-royal-blue-800 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Call 0123 456 7890
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