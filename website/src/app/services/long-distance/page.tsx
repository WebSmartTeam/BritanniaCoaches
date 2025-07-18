import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Globe, Bed, Wifi, Route, CheckCircle, Phone } from 'lucide-react'

export default function LongDistancePage() {
  const features = [
    'Luxury reclining seats',
    'Onboard WiFi and entertainment',
    'Professional tour drivers',
    'Overnight accommodation coordination',
    'European travel documentation',
    'Multi-day itinerary planning',
    'Luggage storage included',
    'Regular comfort stops'
  ]

  const destinations = [
    {
      title: 'European Tours',
      description: 'Multi-day tours across Europe with comfortable overnight stops.',
      icon: Globe
    },
    {
      title: 'UK & Scotland',
      description: 'Extended tours throughout the UK and Scottish Highlands.',
      icon: Route
    },
    {
      title: 'Multi-Day Trips',
      description: 'Comprehensive travel packages with accommodation included.',
      icon: Bed
    },
    {
      title: 'Custom Itineraries',
      description: 'Tailored long-distance travel plans to meet your specific needs.',
      icon: Wifi
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
              Long Distance Travel
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Premium long-distance coach travel across the UK and Europe. Comfortable multi-day tours 
              with luxury amenities, professional drivers, and complete travel coordination.
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
                Journey in Comfort
              </h2>
              <p className="text-lg text-slate-ink-900/80 leading-relaxed mb-6">
                Our long-distance travel service provides premium comfort for extended journeys. With luxury coaches, 
                experienced drivers, and complete travel coordination, we make long trips enjoyable and stress-free.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold text-slate-ink-900 mb-3">Premium Features</h4>
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
                Plan Long Distance Trip
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-72 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/long-distance/assets_task_01jztpdvw0fm8vhd1675pncbax_1752168967_img_0.webp"
                  alt="Long Distance Travel - Premium Comfort"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Options */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-ink-900 mb-6">
              Travel Options
            </h2>
            <p className="text-lg text-slate-ink-900/70 max-w-2xl mx-auto">
              Comprehensive long-distance travel solutions for every adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-crimson-red-800 rounded-lg flex items-center justify-center mb-4">
                  <destination.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-ink-900 mb-3">
                  {destination.title}
                </h3>
                <p className="text-slate-ink-900/70 text-sm leading-relaxed">
                  {destination.description}
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
              Start Your Journey
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Contact us to plan your long-distance travel with premium comfort and professional service.
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