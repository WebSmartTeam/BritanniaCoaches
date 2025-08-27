import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Building2, GraduationCap, Heart, Plane, Sun, Globe, ArrowRight, Shield, Clock, Star, Users, Phone } from 'lucide-react'

export default function ServicesPage() {
  const services = [
    {
      title: 'Corporate Transport',
      description: 'Professional business transportation with executive comfort and reliability for corporate events, meetings, and VIP travel. Our experienced drivers ensure punctual, discreet service with modern amenities.',
      image: '/images/services/corporate/NEW.webp',
      href: '/services/corporate',
      icon: Building2,
      features: ['Executive Seating', 'WiFi & Charging', 'Professional Drivers', 'Flexible Scheduling'],
      category: 'Business',
      color: 'from-slate-800 to-slate-900'
    },
    {
      title: 'School Trips',
      description: 'Safe and reliable educational transport with DBS-checked drivers and comprehensive safety equipment. We specialize in school excursions, sports events, and educational visits with full risk assessment.',
      image: '/images/services/school-trips/NEW.webp',
      href: '/services/school-trips',
      icon: GraduationCap,
      features: ['DBS Checked Drivers', 'Safety Equipment', 'Educational Planning', 'Group Discounts'],
      category: 'Education',
      color: 'from-slate-800 to-slate-900'
    },
    {
      title: 'Wedding Transport',
      description: 'Elegant luxury transportation for your special day with premium amenities and professional coordination. From bridal parties to guest transport, we ensure your wedding day runs smoothly.',
      image: '/images/services/wedding/NEW.webp',
      href: '/services/wedding',
      icon: Heart,
      features: ['Luxury Interior', 'Wedding Coordination', 'Champagne Service', 'Red Carpet'],
      category: 'Special Events',
      color: 'from-slate-800 to-slate-900'
    },
    {
      title: 'Airport Transfers',
      description: 'Reliable transfers to all major UK airports with flight monitoring and meet & greet service. We track your flight and adjust pickup times accordingly, ensuring stress-free travel.',
      image: '/images/services/airport/NEW.webp',
      href: '/services/airport',
      icon: Plane,
      features: ['Flight Monitoring', 'Meet & Greet', 'All UK Airports', 'Fixed Pricing'],
      category: 'Travel',
      color: 'from-slate-800 to-slate-900'
    },
    {
      title: 'Day Trips',
      description: 'Comfortable day excursions to historic sites, theme parks, and scenic destinations. Our experienced local drivers provide commentary and ensure you make the most of your journey.',
      image: '/images/services/day-trips/NEW.webp',
      href: '/services/day-trips',
      icon: Sun,
      features: ['Historic Sites', 'Theme Parks', 'Coastal Trips', 'Group Outings'],
      category: 'Leisure',
      color: 'from-slate-800 to-slate-900'
    },
    {
      title: 'Long Distance',
      description: 'Premium long-distance travel across UK and Europe with luxury amenities and professional service. Multi-day tours, overnight trips, and European excursions with experienced tour coordination.',
      image: '/images/services/long-distance/assets_task_01jztpdvw0fm8vhd1675pncbax_1752168967_img_0.webp',
      href: '/services/long-distance',
      icon: Globe,
      features: ['European Tours', 'Multi-Day Trips', 'Luxury Amenities', 'Custom Itineraries'],
      category: 'Extended Travel',
      color: 'from-slate-800 to-slate-900'
    }
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed DVSA operator with comprehensive insurance coverage for your peace of mind.',
      stat: '100%'
    },
    {
      icon: Clock,
      title: 'Punctual Service',
      description: 'Guaranteed on-time performance with advanced route planning and real-time tracking.',
      stat: '99%'
    },
    {
      icon: Star,
      title: 'Customer Satisfaction',
      description: 'Consistently rated 5 stars by our clients for professional service and reliability.',
      stat: '5★'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Professional drivers with extensive knowledge and commitment to passenger safety.',
      stat: '35+'
    }
  ]

  const businessStats = [
    { number: '35+', label: 'Years Experience', sublabel: 'Trusted since 1988' },
    { number: '50+', label: 'Modern Fleet', sublabel: 'Well-maintained coaches' },
    { number: '24/7', label: 'Available', sublabel: 'Round-the-clock service' },
    { number: 'UK', label: 'Wide Coverage', sublabel: 'Service across UK & Europe' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-ink-900 via-slate-ink-800 to-slate-ink-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-crimson-red-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Professional Transport Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-white">
              Our Transport Services
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-12">
              From corporate events to special occasions, we provide safe, comfortable, and reliable coach transportation 
              across the UK and Europe. Professional service with 35+ years of experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                <span>Get Custom Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="tel:01462436125"
                className="border-2 border-white/30 text-white px-8 py-4 text-lg font-semibold rounded-xl hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                <span>01462 436125</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-ink-900 mb-6">
              Comprehensive Transport Solutions
            </h2>
            <p className="text-lg text-slate-ink-900/70 max-w-3xl mx-auto">
              Choose from our range of professional transport services, each designed to meet specific needs 
              with the highest standards of safety, comfort, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`} />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-slate-ink-900 mb-4 group-hover:text-crimson-red-800 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-ink-900/70 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-crimson-red-800 hover:text-crimson-red-900 font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    <span>Learn More & Get Quote</span>
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-ink-900 mb-6">
              Why Choose Britannia Coaches
            </h2>
            <p className="text-lg text-slate-ink-900/70 max-w-3xl mx-auto">
              With over 35 years of experience, we have established ourselves as the UK&apos;s leading professional 
              coach transport provider, trusted by thousands of satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-crimson-red-800 to-crimson-red-900 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-crimson-red-800 mb-2">{item.stat}</div>
                <h3 className="text-lg font-bold text-slate-ink-900 mb-2">{item.title}</h3>
                <p className="text-slate-ink-900/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Business Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {businessStats.map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="text-3xl font-bold text-crimson-red-800 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-slate-ink-900 mb-1">{stat.label}</div>
                <div className="text-sm text-slate-ink-900/70">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-ink-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Book Your Transport?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Our professional team is ready to provide you with a personalized quote and expert advice 
              on your transport requirements. Contact us today for reliable, comfortable travel.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-3 group"
              >
                <span>Get Your Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/fleet"
                className="border-2 border-white/30 text-white px-8 py-4 text-lg font-semibold rounded-xl hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                <span>View Our Fleet</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}