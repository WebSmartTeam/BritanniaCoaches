import React from 'react'
import { Building2, GraduationCap, Heart, Plane, MapPin, Navigation } from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: 'Corporate Transport',
      description: 'Professional transportation solutions for business events, conferences, and corporate meetings.',
      features: [
        'Executive coaches with premium amenities',
        'Professional uniformed drivers',
        'Flexible scheduling and route planning',
        'Corporate account management',
        'Conference and meeting transport',
        'Employee shuttle services',
      ],
      benefits: [
        'Enhance company image with professional transport',
        'Reduce travel stress for employees',
        'Reliable and punctual service',
        'Cost-effective group transportation',
      ],
      href: '/services/corporate',
      color: 'bg-primary-600',
    },
    {
      icon: GraduationCap,
      title: 'School Trips',
      description: 'Safe and secure transportation for educational trips and school outings with enhanced safety measures.',
      features: [
        'DBS checked and trained drivers',
        'Comprehensive risk assessments',
        'Educational establishment discounts',
        'Child safety and welfare protocols',
        'Flexible booking for term dates',
        'Emergency contact procedures',
      ],
      benefits: [
        'Maximum safety for students',
        'Stress-free organization for teachers',
        'Cost-effective educational trips',
        'Reliable service you can trust',
      ],
      href: '/services/school-trips',
      color: 'bg-green-600',
    },
    {
      icon: Heart,
      title: 'Wedding Transport',
      description: 'Elegant transportation for your special day, from bridal parties to guest shuttles.',
      features: [
        'Luxury coaches with decorative options',
        'Flexible timing and coordination',
        'Guest shuttle services',
        'Bridal party transportation',
        'Multiple vehicle coordination',
        'Special occasion styling',
      ],
      benefits: [
        'Stress-free wedding day transport',
        'Elegant arrival for guests',
        'Professional coordination',
        'Memorable experience for all',
      ],
      href: '/services/wedding',
      color: 'bg-pink-600',
    },
    {
      icon: Plane,
      title: 'Airport Transfers',
      description: 'Reliable airport transfers for groups with flight monitoring and meet & greet service.',
      features: [
        'Flight monitoring and tracking',
        'Meet and greet services',
        'Luggage handling assistance',
        'All major UK airports covered',
        'Group coordination services',
        'Return journey arrangements',
      ],
      benefits: [
        'Stress-free airport transfers',
        'Professional meet and greet',
        'Reliable flight tracking',
        'Group coordination made easy',
      ],
      href: '/services/airport',
      color: 'bg-blue-600',
    },
    {
      icon: MapPin,
      title: 'Day Trips',
      description: 'Memorable day trips to popular destinations, perfect for family groups and organized tours.',
      features: [
        'Popular destination packages',
        'Flexible itinerary planning',
        'Group discount pricing',
        'Local knowledge and guides',
        'Scenic route planning',
        'Rest stop coordination',
      ],
      benefits: [
        'Hassle-free day trip planning',
        'Professional local knowledge',
        'Group-friendly pricing',
        'Memorable experiences',
      ],
      href: '/services/day-trips',
      color: 'bg-orange-600',
    },
    {
      icon: Navigation,
      title: 'Long Distance',
      description: 'Comfortable long-distance travel across the UK and Europe with modern amenities.',
      features: [
        'Modern coaches with entertainment',
        'Planned rest stops and comfort breaks',
        'European travel documentation',
        'Long-distance driver regulations',
        'Overnight accommodation coordination',
        'Route planning and optimization',
      ],
      benefits: [
        'Comfortable extended travel',
        'Professional route planning',
        'Compliance with regulations',
        'Stress-free long journeys',
      ],
      href: '/services/long-distance',
      color: 'bg-purple-600',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Our Transportation Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Comprehensive coach transportation solutions across the UK. From corporate events to family day trips, 
              we provide professional, reliable, and comfortable transportation services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="card card-hover p-8">
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-neutral-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3">Features Include:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-sm text-neutral-600">
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-neutral-900 mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2 text-sm text-neutral-600">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      href={service.href}
                      className="btn btn-primary btn-lg"
                    >
                      Learn More & Book
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
              Why Choose Britannia Coaches?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              25+ years of excellence in providing professional transportation services across the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary-600">25+</div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Years Experience</h3>
              <p className="text-neutral-600">
                Over two decades of providing reliable transportation services across the UK.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-green-600">100%</div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Safety Certified</h3>
              <p className="text-neutral-600">
                All our drivers are professionally trained and DBS checked for your peace of mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-blue-600">50+</div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Modern Fleet</h3>
              <p className="text-neutral-600">
                Modern coaches equipped with the latest amenities and safety features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Book Your Transport?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get a free quote today and experience the difference of professional transportation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn btn-secondary btn-xl"
            >
              Get Free Quote
            </Link>
            <Link
              href="tel:01462436125"
              className="btn btn-outline-primary btn-xl border-white text-white hover:bg-white hover:text-primary-600"
            >
              Call 01462 436125
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}