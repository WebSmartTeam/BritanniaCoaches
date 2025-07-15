import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Building2, GraduationCap, Heart, Plane, Sun, Globe, ArrowRight } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: 'Corporate Transport',
      description: 'Professional business transportation with executive comfort and reliability for corporate events, meetings, and VIP travel.',
      image: '/images/services/corporate/assets_task_01jztkbqygfp8rcvfs4ez2t15y_1752165762_img_2.webp',
      href: '/services/corporate',
      icon: Building2,
      features: ['Executive Seating', 'WiFi & Charging', 'Professional Drivers', 'Flexible Scheduling']
    },
    {
      title: 'School Trips',
      description: 'Safe and reliable educational transport with DBS-checked drivers and comprehensive safety equipment for all school excursions.',
      image: '/images/services/school-trips/assets_task_01jztkd5vyf0trmn8qgw271f9c_1752165789_img_2.webp',
      href: '/services/school-trips',
      icon: GraduationCap,
      features: ['DBS Checked Drivers', 'Safety Equipment', 'Educational Planning', 'Group Discounts']
    },
    {
      title: 'Wedding Transport',
      description: 'Elegant luxury transportation for your special day with premium amenities, red carpet service, and professional coordination.',
      image: '/images/services/wedding/assets_task_01jztnpaegfdrtgwwk7v9h9rpd_1752168189_img_3.webp',
      href: '/services/wedding',
      icon: Heart,
      features: ['Luxury Interior', 'Red Carpet Service', 'Champagne Bar', 'Wedding Coordination']
    },
    {
      title: 'Airport Transfers',
      description: 'Reliable transfers to all major UK airports with flight monitoring, meet & greet service, and guaranteed on-time arrival.',
      image: '/images/services/airport/assets_task_01jztp22ebe4jrxcxjh8je438b_1752168577_img_0.webp',
      href: '/services/airport',
      icon: Plane,
      features: ['Flight Monitoring', 'Meet & Greet', 'All UK Airports', 'Fixed Pricing']
    },
    {
      title: 'Day Trips',
      description: 'Comfortable day excursions to historic sites, theme parks, and scenic destinations with experienced local drivers.',
      image: '/images/services/day-trips/assets_task_01jztp9f7xftvbyh0vj3544368_1752168825_img_0.webp',
      href: '/services/day-trips',
      icon: Sun,
      features: ['Historic Sites', 'Theme Parks', 'Coastal Trips', 'Group Outings']
    },
    {
      title: 'Long Distance',
      description: 'Premium long-distance travel across UK and Europe with luxury amenities, overnight coordination, and professional service.',
      image: '/images/services/long-distance/assets_task_01jztpdvw0fm8vhd1675pncbax_1752168967_img_0.webp',
      href: '/services/long-distance',
      icon: Globe,
      features: ['European Tours', 'Multi-Day Trips', 'Luxury Amenities', 'Custom Itineraries']
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
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Professional coach transport solutions for every occasion. From corporate events to school trips, 
              weddings to long-distance tours - we provide safe, comfortable, and reliable service.
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

      {/* Services Grid */}
      <section className="py-20 bg-[rgb(220,231,245)]">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-ink-900 mb-6">
              Professional Transport Solutions
            </h2>
            <p className="text-lg text-slate-ink-900/70 max-w-2xl mx-auto">
              Choose from our comprehensive range of transport services designed for every need
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-xl group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-crimson-red-800/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`px-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-ink-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-slate-ink-900/80 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-crimson-red-800 rounded-full"></div>
                          <span className="text-sm text-slate-ink-900/70 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href={service.href}
                    className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2 group"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-ink-900 mb-6">
              Why Choose Britannia Coaches
            </h2>
            <p className="text-lg text-slate-ink-900/70 max-w-2xl mx-auto">
              35+ years of experience delivering professional transport solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-12 h-12 bg-crimson-red-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="text-white font-bold text-lg">35+</div>
              </div>
              <h3 className="text-lg font-bold text-slate-ink-900 mb-2">Years Experience</h3>
              <p className="text-slate-ink-900/70 text-sm">Trusted transport provider since 1988</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-12 h-12 bg-crimson-red-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="text-white font-bold text-lg">50+</div>
              </div>
              <h3 className="text-lg font-bold text-slate-ink-900 mb-2">Modern Fleet</h3>
              <p className="text-slate-ink-900/70 text-sm">Well-maintained coaches for every need</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-12 h-12 bg-crimson-red-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="text-white font-bold text-lg">24/7</div>
              </div>
              <h3 className="text-lg font-bold text-slate-ink-900 mb-2">Available</h3>
              <p className="text-slate-ink-900/70 text-sm">Round-the-clock booking and support</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-12 h-12 bg-crimson-red-800 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="text-white font-bold text-lg">UK</div>
              </div>
              <h3 className="text-lg font-bold text-slate-ink-900 mb-2">Wide Coverage</h3>
              <p className="text-slate-ink-900/70 text-sm">Service across UK and Europe</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-ink-900">
        <div className="w-full px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Book Your Transport?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Contact our professional team for a personalized quote and expert advice on your transport requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                <span>Get Your Quote</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </Link>
              <Link
                href="/fleet"
                className="border-2 border-white/30 text-white px-8 py-4 text-lg font-semibold rounded-xl hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                <span>View Our Fleet</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}