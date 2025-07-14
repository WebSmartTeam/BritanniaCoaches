import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Building2, GraduationCap, Heart, Plane, MapPin, Navigation, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      icon: Building2,
      title: 'Corporate Transport',
      description: 'Professional business transportation solutions for conferences, meetings, and corporate events.',
      image: '/images/services/corporate/assets_task_01jztkbqygfp8rcvfs4ez2t15y_1752165762_img_2.webp',
      features: ['Executive coaches with premium amenities', 'Professional uniformed drivers', 'Corporate account management'],
      href: '/services/corporate',
    },
    {
      icon: GraduationCap,
      title: 'School Trips',
      description: 'Safe and secure transportation for educational trips with enhanced safety measures and DBS checked drivers.',
      image: '/images/services/school-trips/assets_task_01jztkd5vyf0trmn8qgw271f9c_1752165789_img_2.webp',
      features: ['DBS checked and trained drivers', 'Comprehensive risk assessments', 'Educational establishment discounts'],
      href: '/services/school-trips',
    },
    {
      icon: Heart,
      title: 'Wedding Transport',
      description: 'Elegant transportation for your special day, from bridal parties to guest shuttles with luxury styling.',
      image: '/images/services/wedding/assets_task_01jztnpaegfdrtgwwk7v9h9rpd_1752168189_img_3.webp',
      features: ['Luxury coaches with decorative options', 'Flexible timing and coordination', 'Special occasion styling'],
      href: '/services/wedding',
    },
    {
      icon: Plane,
      title: 'Airport Transfers',
      description: 'Reliable airport transfers for groups with flight monitoring and professional meet & greet service.',
      image: '/images/services/airport/assets_task_01jztp22ebe4jrxcxjh8je438b_1752168577_img_0.webp',
      features: ['Flight monitoring and tracking', 'Meet and greet services', 'All major UK airports covered'],
      href: '/services/airport',
    },
    {
      icon: MapPin,
      title: 'Day Trips',
      description: 'Memorable day trips to popular destinations, perfect for family groups and organized tours.',
      image: '/images/services/day-trips/assets_task_01jztp9f7xftvbyh0vj3544368_1752168825_img_0.webp',
      features: ['Popular destination packages', 'Flexible itinerary planning', 'Group discount pricing'],
      href: '/services/day-trips',
    },
    {
      icon: Navigation,
      title: 'Long Distance',
      description: 'Comfortable long-distance travel across the UK and Europe with modern amenities and rest stops.',
      image: '/images/services/long-distance/assets_task_01jztpdvw0fm8vhd1675pncbax_1752168967_img_0.webp',
      features: ['Modern coaches with entertainment', 'Planned rest stops', 'European travel documentation'],
      href: '/services/long-distance',
    },
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: '35+ Years Experience',
      description: 'Over three decades of providing reliable transportation services across the UK and Europe.',
    },
    {
      icon: CheckCircle,
      title: '100% Safety Record',
      description: 'All our drivers are professionally trained and DBS checked for your complete peace of mind.',
    },
    {
      icon: CheckCircle,
      title: '50+ Modern Coaches',
      description: 'Modern fleet equipped with the latest amenities, safety features, and comfort technology.',
    },
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
              <span className="text-sm font-semibold">Our Services</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Transportation Services
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Comprehensive coach transportation solutions across the UK and Europe. From corporate events to family day trips, 
              we provide professional, reliable, and comfortable transportation services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[rgb(220,231,245)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-ink-900 mb-6 leading-tight">
              Our Service Range
            </h2>
            <p className="text-xl text-slate-ink-900/70 max-w-3xl mx-auto leading-relaxed">
              Professional transportation solutions for every occasion, from business travel to special celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-crimson-red-800 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-ink-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-ink-900/70 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-ink-900/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-crimson-red-800 text-white px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Why Choose Us</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-ink-900 mb-6 leading-tight">
              Excellence in Every Journey
            </h2>
            <p className="text-xl text-slate-ink-900/70 max-w-3xl mx-auto leading-relaxed">
              Our commitment to safety, reliability, and professional service has made us a trusted name in UK transportation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-crimson-red-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-ink-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-ink-900/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Travel Benefits */}
      <section className="py-20 bg-slate-ink-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-crimson-red-800 text-white px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Special Offer</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Group Travel Benefits
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Groups of 15+ on day trips get free coach travel for one person! Professional service for clubs, societies, and group travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
              <div className="text-3xl font-bold text-crimson-red-400 mb-2">15+</div>
              <div className="text-white/80 text-sm">Group Size for Free Travel</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
              <div className="text-3xl font-bold text-crimson-red-400 mb-2">24/7</div>
              <div className="text-white/80 text-sm">Customer Support</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
              <div className="text-3xl font-bold text-crimson-red-400 mb-2">100%</div>
              <div className="text-white/80 text-sm">Safety Record</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center">
              <div className="text-3xl font-bold text-crimson-red-400 mb-2">50+</div>
              <div className="text-white/80 text-sm">Modern Coaches</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[rgb(220,231,245)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-ink-900 mb-6 leading-tight">
              Ready to Book?
            </h2>
            <p className="text-xl text-slate-ink-900/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Get a personalized quote for your transportation needs. Our team is ready to help plan your perfect journey.
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
                <Phone className="w-5 h-5" />
                <span>Call: 01462 436125</span>
              </Link>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="mailto:enquiries@britanniacoaches.co.uk"
                className="inline-flex items-center gap-2 text-slate-ink-900/70 hover:text-crimson-red-800 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>enquiries@britanniacoaches.co.uk</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}