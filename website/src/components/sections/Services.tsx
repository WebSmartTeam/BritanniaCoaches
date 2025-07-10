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
    <section className="py-20 bg-gradient-to-br from-ice-grey-50 to-white">
      <div className="w-full">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-ink-900 mb-6">
            Our Transportation Services
          </h2>
          <p className="text-xl text-slate-ink-900/70 max-w-3xl mx-auto leading-relaxed">
            Professional coach services tailored to your needs. From corporate events to family day trips, 
            we provide safe, reliable, and comfortable transportation solutions across the UK.
          </p>
        </div>

        {/* Services Grid with Proper Spacing */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="group block">
                <div className="relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-ink-900 to-slate-ink-800 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-crimson-red-800/20 to-royal-blue-800/20 rounded-full blur-xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-lg" />
                  
                  {/* Content */}
                  <div className="relative p-8 h-full flex flex-col justify-between text-white">
                    <div className="w-14 h-14 bg-gradient-to-br from-crimson-red-800 to-royal-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-3">
                        {service.title}
                      </h3>
                      
                      <p className="text-white/90 leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-crimson-red-400 rounded-full" />
                            <span className="text-sm text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all duration-300">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Clean CTA Section */}
        <div className="bg-slate-ink-900 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-16 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              We offer flexible transportation solutions tailored to your specific requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 font-semibold transition-colors duration-300 inline-flex items-center gap-3 group"
              >
                <span>Get Custom Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="tel:01234567890"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-ink-900 px-8 py-4 font-semibold transition-all duration-300"
              >
                Call 0123 456 7890
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services