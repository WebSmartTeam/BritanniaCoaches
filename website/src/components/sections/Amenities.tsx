import React from 'react'
import { Users, Monitor, Shield, Wind } from 'lucide-react'

const Amenities = () => {
  const amenities = [
    {
      icon: Users,
      title: 'Comfortable Seating',
      description: 'Well-maintained seats for a comfortable journey',
    },
    {
      icon: Wind,
      title: 'Air Conditioning',
      description: 'Climate control for passenger comfort',
    },
    {
      icon: Monitor,
      title: 'Entertainment Systems',
      description: 'Onboard entertainment for longer journeys',
    },
    {
      icon: Shield,
      title: 'WC Facilities',
      description: 'Onboard WC available on our coaches',
    },
  ]

  return (
    <section className="py-20 bg-[rgb(220,231,245)]">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
            <div className="relative">
              <div className="absolute -top-4 -left-4 transform -rotate-12">
                <div className="flex items-center gap-2 bg-crimson-red-800 rounded-full px-4 py-2 shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-xs font-bold text-white uppercase tracking-wide">Premium Features</span>
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-slate-ink-900">
                  Coach Amenities
                </h2>
                <p className="text-xl text-slate-ink-900/60 max-w-3xl mx-auto leading-relaxed">
                  Our coaches come equipped with essential amenities for comfortable travel.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-crimson-red-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <amenity.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-ink-900 mb-2">
                  {amenity.title}
                </h4>
                <p className="text-slate-ink-900/70 text-sm">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Amenities