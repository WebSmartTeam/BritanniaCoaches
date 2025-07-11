import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, Heart, Plane, MapPin, Navigation, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Group Coach Hire',
      category: 'GROUPS',
      description: 'Smart, clean, and comfortable coaches for clubs, societies, and groups of 10 or more.',
      features: ['Air Conditioning', 'Onboard Restrooms', 'Entertainment Systems'],
      href: '/services/group-hire',
      image: '/images/services/corporate/assets_task_01jztkbqygfp8rcvfs4ez2t15y_1752165762_img_2.webp',
      gradient: 'from-royal-blue-800/90 to-royal-blue-900/90',
    },
    {
      icon: MapPin,
      title: 'Day Trips',
      category: 'LEISURE',
      description: 'Comfortable and reliable transportation for day trips and group excursions.',
      features: ['Flexible Pickup', 'Comfortable Seating', 'Punctual Service'],
      href: '/services/day-trips',
      image: '/images/services/school-trips/assets_task_01jztkd5vyf0trmn8qgw271f9c_1752165789_img_2.webp',
      gradient: 'from-emerald-600/90 to-emerald-700/90',
    },
    {
      icon: Heart,
      title: 'Special Events',
      category: 'OCCASIONS',
      description: 'Professional transportation for weddings, celebrations, and special occasions.',
      features: ['Free Ticket Offer', 'Group Discounts', 'Reliable Service'],
      href: '/services/special-events',
      image: '/images/services/wedding/assets_task_01jztnpaegfdrtgwwk7v9h9rpd_1752168189_img_3.webp',
      gradient: 'from-rose-600/90 to-rose-700/90',
    },
    {
      icon: Plane,
      title: 'Airport Transfers',
      category: 'TRAVEL',
      description: 'Reliable airport transfers with flight monitoring and meet & greet service.',
      features: ['Flight Monitoring', 'Meet & Greet', 'All UK Airports'],
      href: '/services/airport',
      image: '/images/services/airport/assets_task_01jztp22ebe4jrxcxjh8je438b_1752168577_img_0.webp',
      gradient: 'from-sky-indigo-800/90 to-royal-blue-900/90',
    },
    {
      icon: MapPin,
      title: 'Day Trips',
      category: 'LEISURE',
      description: 'Memorable day trips to popular destinations with flexible itineraries.',
      features: ['Popular Destinations', 'Group Discounts', 'Local Guides'],
      href: '/services/day-trips',
      image: '/images/services/day-trips/assets_task_01jztp9f7xftvbyh0vj3544368_1752168825_img_0.webp',
      gradient: 'from-amber-600/90 to-orange-600/90',
    },
    {
      icon: Navigation,
      title: 'Long Distance',
      category: 'TOURING',
      description: 'Comfortable long-distance travel across the UK and Europe.',
      features: ['Modern Amenities', 'Rest Stops', 'European Travel'],
      href: '/services/long-distance',
      image: '/images/services/long-distance/assets_task_01jztpdvw0fm8vhd1675pncbax_1752168967_img_0.webp',
      gradient: 'from-purple-600/90 to-purple-700/90',
    },
  ]

  return (
    <div className="py-12 bg-[rgb(220,231,245)]">
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Heading */}
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-ink-900/5 backdrop-blur-sm border border-slate-ink-900/10 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-crimson-red-800 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-slate-ink-900/80 uppercase tracking-wide">Premium Fleet</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-ink-900 mb-6 leading-tight">
                Our Transportation
                <span className="block text-crimson-red-800">Services</span>
              </h2>
            </div>
            
            {/* Right Column - Description */}
            <div className="lg:pl-8">
              <p className="text-xl text-slate-ink-900/70 leading-relaxed mb-6">
                Smart, clean, and comfortable coaches for clubs, societies, and groups. 
                Professional service with modern amenities including air conditioning, restrooms, and entertainment systems.
              </p>
              
              {/* Feature highlights */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-ink-900/10 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-sm font-medium text-slate-ink-900">Air Conditioning</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-ink-900/10 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-sm font-medium text-slate-ink-900">Onboard Restrooms</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-ink-900/10 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-sm font-medium text-slate-ink-900">Entertainment Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <Link key={index} href={service.href} className="group block">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs font-medium text-slate-ink-900/60 uppercase tracking-wide mb-2">
                      {service.category}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-ink-900 mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-ink-900/70 leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-crimson-red-800 font-medium group-hover:gap-3 transition-all duration-300 mt-auto">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* View More Services Button */}
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="bg-slate-ink-900 hover:bg-slate-ink-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 group"
            >
              <span>View More Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        <div className="relative mt-20 overflow-hidden">
          <div className="absolute inset-0 bg-slate-ink-900" />
          
          <div className="relative max-w-7xl mx-auto px-6 py-24">
            <div className="text-center text-white max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-crimson-red-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Custom Transportation Solutions</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight text-white">
                Special Group Offer
              </h3>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Book for 15+ people and get one free coach ticket! 
                Professional, punctual, and comfortable transportation for your group.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="bg-crimson-red-800 hover:bg-crimson-red-700 text-white px-10 py-5 text-lg font-semibold rounded-xl shadow-luxury-lg hover:shadow-luxury-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 group"
                >
                  <span>Get Custom Quote</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                
                <div className="flex items-center gap-4">
                  <div className="hidden sm:block w-px h-12 bg-white/20" />
                  <Link
                    href="tel:01462436125"
                    className="group flex items-center gap-3 text-white hover:text-white/80 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center group-hover:border-white/50 transition-colors duration-300">
                      <span className="text-lg font-bold">📞</span>
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-white/60">Call us directly</div>
                      <div className="font-semibold">01462 436125</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services