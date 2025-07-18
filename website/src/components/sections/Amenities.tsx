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
    <section className="relative py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12">
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

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="group bg-white p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <div className="w-12 h-12 bg-crimson-red-800 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-crimson-red-700 transition-colors duration-300">
                  <amenity.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-slate-ink-900 mb-2 group-hover:text-crimson-red-800 transition-colors duration-300">
                  {amenity.title}
                </h4>
                <p className="text-slate-ink-900/70 text-sm group-hover:text-slate-ink-900/80 transition-colors duration-300">
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