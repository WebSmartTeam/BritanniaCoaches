import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, GraduationCap, Heart, Plane, MapPin, Navigation, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Corporate Transport',
      category: 'BUSINESS',
      description: 'Professional transportation for business events, conferences, and corporate meetings.',
      features: ['Executive Coaches', 'Professional Drivers', 'Flexible Scheduling'],
      href: '/services/corporate',
      image: '/images/services/corporate/assets_task_01jztkbqygfp8rcvfs4ez2t15y_1752165762_img_2.webp',
      gradient: 'from-royal-blue-800/90 to-royal-blue-900/90',
    },
    {
      icon: GraduationCap,
      title: 'School Trips',
      category: 'EDUCATION',
      description: 'Safe and secure transportation for educational trips and student travel.',
      features: ['Safety Certified', 'DBS Checked Drivers', 'Educational Discounts'],
      href: '/services/school-trips',
      image: '/images/services/school-trips/assets_task_01jztkd5vyf0trmn8qgw271f9c_1752165789_img_2.webp',
      gradient: 'from-emerald-600/90 to-emerald-700/90',
    },
    {
      icon: Heart,
      title: 'Wedding Transport',
      category: 'SPECIAL EVENTS',
      description: 'Elegant transportation for your special day and guest shuttles.',
      features: ['Luxury Coaches', 'Decorative Options', 'Flexible Timings'],
      href: '/services/wedding',
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
    <section className="py-20 bg-gradient-to-br from-ice-grey-50 via-white to-ice-grey-100">
      <div className="w-full">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-ink-900 mb-6">
            Our Transportation Services
          </h2>
          <p className="text-xl text-slate-ink-900/70 max-w-3xl mx-auto leading-relaxed">
            Professional coach services tailored to your needs. From corporate events to family day trips, 
            we provide safe, reliable, and comfortable transportation solutions across the UK.
          </p>
        </div>

        {/* Services Grid - Clean White Cards */}
        <div className="w-full px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href} className="group block">
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Category Label */}
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
        </div>

        {/* Premium CTA Section */}
        <div className="relative mt-20 overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-900 via-slate-ink-900 to-royal-blue-900" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
          
          <div className="relative max-w-7xl mx-auto px-6 py-24">
            <div className="text-center text-white max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-crimson-red-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Custom Transportation Solutions</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Ready for Your Next Journey?
              </h3>
              <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                From intimate groups to large events, we create bespoke transportation experiences 
                that exceed expectations. Let's plan something extraordinary together.
              </p>
              
              {/* Enhanced CTA Buttons */}
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
                    href="tel:01234567890"
                    className="group flex items-center gap-3 text-white hover:text-white/80 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center group-hover:border-white/50 transition-colors duration-300">
                      <span className="text-lg font-bold">📞</span>
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-white/60">Call us directly</div>
                      <div className="font-semibold">0123 456 7890</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services