import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Plane, Clock, Shield, MapPin, CheckCircle, Phone } from 'lucide-react'

export default function AirportTransfersPage() {
  const features = [
    'Flight monitoring service',
    'Meet & greet at arrivals',
    'Professional uniformed drivers',
    'Luggage assistance included',
    'All major UK airports covered',
    'Fixed pricing guarantee',
    '24/7 booking availability',
    'Real-time journey tracking'
  ]

  const airports = [
    {
      title: 'Heathrow Airport',
      description: 'Direct transfers to/from London Heathrow with premium service.',
      icon: Plane
    },
    {
      title: 'Gatwick Airport',
      description: 'Reliable transport to Gatwick with flight monitoring included.',
      icon: Clock
    },
    {
      title: 'Stansted Airport',
      description: 'Comfortable transfers to Stansted with meet & greet service.',
      icon: Shield
    },
    {
      title: 'All UK Airports',
      description: 'Coverage across all major UK airports with professional service.',
      icon: MapPin
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
              Airport Transfers
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Reliable airport transfers to all major UK airports. Professional service with flight monitoring, 
              meet & greet, and guaranteed on-time arrival for stress-free travel.
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
                Stress-Free Travel
              </h2>
              <p className="text-lg text-slate-ink-900/80 leading-relaxed mb-6">
                Our airport transfer service takes the stress out of air travel. With flight monitoring, professional drivers, 
                and meet & greet service, we ensure you arrive on time and travel in comfort.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold text-slate-ink-900 mb-3">Service Features</h4>
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
                Book Airport Transfer
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-72 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/airport/assets_task_01jztp22ebe4jrxcxjh8je438b_1752168577_img_0.webp"
                  alt="Airport Transfers - Professional Service"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Coverage */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-ink-900 mb-6">
              Airport Coverage
            </h2>
            <p className="text-lg text-slate-ink-900/70 max-w-2xl mx-auto">
              Professional transfers to all major UK airports with premium service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {airports.map((airport, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-crimson-red-800 rounded-lg flex items-center justify-center mb-4">
                  <airport.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-ink-900 mb-3">
                  {airport.title}
                </h3>
                <p className="text-slate-ink-900/70 text-sm leading-relaxed">
                  {airport.description}
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
              Book Your Airport Transfer
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Contact us for reliable airport transfers with professional service and competitive pricing.
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