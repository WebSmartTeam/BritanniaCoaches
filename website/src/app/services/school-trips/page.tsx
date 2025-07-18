import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap, Shield, Users, Clock, CheckCircle, Phone } from 'lucide-react'

export default function SchoolTripsPage() {
  const features = [
    'DBS checked drivers',
    'CCTV security systems',
    'First aid equipment',
    'Seat belts for all passengers',
    'Emergency contact systems',
    'Qualified driver training',
    'Regular safety inspections',
    'Educational trip planning'
  ]

  const services = [
    {
      title: 'Educational Visits',
      description: 'Safe transport to museums, historic sites, and educational venues.',
      icon: GraduationCap
    },
    {
      title: 'Sports Events',
      description: 'Reliable transport for school sports teams and competitions.',
      icon: Users
    },
    {
      title: 'Day Trips',
      description: 'Comfortable journeys for school day trips and excursions.',
      icon: Clock
    },
    {
      title: 'Multi-Day Tours',
      description: 'Extended educational tours with overnight accommodation coordination.',
      icon: Shield
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
              School Trips
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Safe, reliable, and comfortable transportation for educational trips and school excursions. 
              Trusted by schools across the UK with full safety certification and experienced drivers.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
              >
                <span>Get Quote</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="px-6">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-ink-900 mb-6 leading-tight">
                Safety First
              </h2>
              <p className="text-lg text-slate-ink-900/80 leading-relaxed mb-6">
                We understand the responsibility of transporting students. Our school trip service prioritizes safety above all else, 
                with DBS-checked drivers, modern safety equipment, and comprehensive insurance coverage.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold text-slate-ink-900 mb-3">Safety Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-slate-ink-900/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link
                href="/contact"
                className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
              >
                Book School Trip
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-72 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/school-trips/assets_task_01jztkd5vyf0trmn8qgw271f9c_1752165789_img_2.webp"
                  alt="School Trips - Safe Educational Transport"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-ink-900 mb-6">
              Educational Transport
            </h2>
            <p className="text-lg text-slate-ink-900/70 max-w-2xl mx-auto">
              Comprehensive transport solutions for all educational activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-crimson-red-800 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-ink-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-ink-900/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-ink-900">
        <div className="w-full px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Plan Your School Trip
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Contact us to discuss your educational transport requirements and get a competitive quote.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                <span>Get Quote</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </Link>
              <a
                href="tel:01462436125"
                className="border-2 border-white/30 text-white px-8 py-4 text-lg font-semibold rounded-xl hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                <span>01462 436125</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}