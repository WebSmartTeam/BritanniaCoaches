import React from 'react'
import Link from 'next/link'
import { Building2, GraduationCap, Heart, Plane, MapPin, Navigation, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Corporate Transport',
      description: 'Professional transportation for business events, conferences, and corporate meetings. Reliable service with professional drivers.',
      features: ['Executive Coaches', 'Professional Drivers', 'Flexible Scheduling', 'Corporate Accounts'],
      href: '/services/corporate',
      color: 'bg-primary-50 text-primary-600',
    },
    {
      icon: GraduationCap,
      title: 'School Trips',
      description: 'Safe and secure transportation for educational trips, school outings, and student travel with enhanced safety measures.',
      features: ['Safety Certified', 'DBS Checked Drivers', 'Educational Discounts', 'Risk Assessments'],
      href: '/services/school-trips',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Heart,
      title: 'Wedding Transport',
      description: 'Elegant transportation for your special day. From bridal parties to guest shuttles, we make your wedding memorable.',
      features: ['Luxury Coaches', 'Decorative Options', 'Flexible Timings', 'Guest Coordination'],
      href: '/services/wedding',
      color: 'bg-pink-50 text-pink-600',
    },
    {
      icon: Plane,
      title: 'Airport Transfers',
      description: 'Reliable airport transfers for groups. Flight monitoring, meet & greet service, and comfortable travel to all major airports.',
      features: ['Flight Monitoring', 'Meet & Greet', 'Luggage Handling', 'All UK Airports'],
      href: '/services/airport',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: MapPin,
      title: 'Day Trips',
      description: 'Organize memorable day trips to popular destinations. Perfect for family groups, friends, and organized tours.',
      features: ['Popular Destinations', 'Flexible Itineraries', 'Group Discounts', 'Local Guides'],
      href: '/services/day-trips',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: Navigation,
      title: 'Long Distance',
      description: 'Comfortable long-distance travel across the UK and Europe. Modern coaches with amenities for extended journeys.',
      features: ['Modern Amenities', 'Rest Stops', 'Entertainment', 'European Travel'],
      href: '/services/long-distance',
      color: 'bg-purple-50 text-purple-600',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
            Our Transportation Services
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Professional coach services tailored to your needs. From corporate events to family day trips, 
            we provide safe, reliable, and comfortable transportation solutions across the UK.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card card-hover p-8 group cursor-pointer"
            >
              <Link href={service.href} className="block">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-neutral-500">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary-600 font-medium group-hover:text-primary-700 transition-colors duration-200">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We offer flexible transportation solutions tailored to your specific requirements. 
              Get in touch to discuss your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn btn-secondary btn-lg"
              >
                Get Custom Quote
              </Link>
              <Link
                href="tel:01234567890"
                className="btn btn-outline-primary btn-lg border-white text-white hover:bg-white hover:text-primary-600"
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