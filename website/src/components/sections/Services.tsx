import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Building2, GraduationCap, Heart, Plane, MapPin, Navigation, ArrowRight } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'Corporate Transport',
      description: 'Professional transportation for business events, conferences, and corporate meetings.',
      features: ['Executive Coaches', 'Professional Drivers', 'Flexible Scheduling'],
      href: '/services/corporate',
      image: '/images/services/corporate/assets_task_01jztkbqygfp8rcvfs4ez2t15y_1752165762_img_2.webp',
      gradient: 'from-royal-blue-800/90 to-royal-blue-900/90',
    },
    {
      icon: GraduationCap,
      title: 'School Trips',
      description: 'Safe and secure transportation for educational trips and student travel.',
      features: ['Safety Certified', 'DBS Checked Drivers', 'Educational Discounts'],
      href: '/services/school-trips',
      image: '/images/services/school-trips/assets_task_01jztkd5vyf0trmn8qgw271f9c_1752165789_img_2.webp',
      gradient: 'from-emerald-600/90 to-emerald-700/90',
    },
    {
      icon: Heart,
      title: 'Wedding Transport',
      description: 'Elegant transportation for your special day and guest shuttles.',
      features: ['Luxury Coaches', 'Decorative Options', 'Flexible Timings'],
      href: '/services/wedding',
      image: '/images/services/wedding/assets_task_01jztnpaegfdrtgwwk7v9h9rpd_1752168189_img_3.webp',
      gradient: 'from-rose-600/90 to-rose-700/90',
    },
    {
      icon: Plane,
      title: 'Airport Transfers',
      description: 'Reliable airport transfers with flight monitoring and meet & greet service.',
      features: ['Flight Monitoring', 'Meet & Greet', 'All UK Airports'],
      href: '/services/airport',
      image: '/images/services/airport/assets_task_01jztp22ebe4jrxcxjh8je438b_1752168577_img_0.webp',
      gradient: 'from-sky-indigo-800/90 to-royal-blue-900/90',
    },
    {
      icon: MapPin,
      title: 'Day Trips',
      description: 'Memorable day trips to popular destinations with flexible itineraries.',
      features: ['Popular Destinations', 'Group Discounts', 'Local Guides'],
      href: '/services/day-trips',
      image: '/images/services/day-trips/assets_task_01jztp9f7xftvbyh0vj3544368_1752168825_img_0.webp',
      gradient: 'from-amber-600/90 to-orange-600/90',
    },
    {
      icon: Navigation,
      title: 'Long Distance',
      description: 'Comfortable long-distance travel across the UK and Europe.',
      features: ['Modern Amenities', 'Rest Stops', 'European Travel'],
      href: '/services/long-distance',
      image: '/images/services/long-distance/assets_task_01jztpdvw0fm8vhd1675pncbax_1752168967_img_0.webp',
      gradient: 'from-purple-600/90 to-purple-700/90',
    },
  ]

  return (
    <section className="py-20 bg-ice-grey-50">
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
                      {service.title.split(' ')[0]}
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

        {/* Clean CTA Section */}
        <div className="bg-slate-ink-900 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-16 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              We offer flexible transportation solutions tailored to your specific requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 font-semibold transition-colors duration-300 inline-flex items-center gap-3 group"
              >
                <span>Get Custom Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="tel:01234567890"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-ink-900 px-8 py-4 font-semibold transition-all duration-300"
              >
                Call 0123 456 7890
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services