import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Sparkles, Users, Clock, Phone } from 'lucide-react'

export default function WeddingTransportPage() {
  const features = [
    'Luxury interior with mood lighting',
    'Red carpet service',
    'Champagne bar available',
    'Professional uniformed chauffeur',
    'Decorated exterior options',
    'Wedding party coordination',
    'Flexible timing',
    'Photography assistance'
  ]

  const services = [
    {
      title: 'Bridal Party Transport',
      description: 'Elegant transport for the bride, groom, and wedding party.',
      icon: Heart
    },
    {
      title: 'Guest Shuttles',
      description: 'Convenient transport for wedding guests between venues.',
      icon: Users
    },
    {
      title: 'Venue Transfers',
      description: 'Seamless transfers between ceremony and reception venues.',
      icon: Clock
    },
    {
      title: 'Luxury Experience',
      description: 'Premium amenities and special touches for your special day.',
      icon: Sparkles
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
              Wedding Transport
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Elegant and luxurious transportation for your special day. Create unforgettable memories 
              with our premium wedding transport service featuring luxury coaches and professional service.
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
                Your Perfect Day
              </h2>
              <p className="text-lg text-slate-ink-900/80 leading-relaxed mb-6">
                Make your wedding day even more special with our luxury transport service. From the bridal party arrival 
                to guest shuttles, we ensure every journey is comfortable, elegant, and memorable.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-bold text-slate-ink-900 mb-3">Luxury Features</h4>
                <div className="flex flex-wrap gap-2">
                  {features.map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-slate-50 text-slate-ink-900/80 text-xs font-medium px-3 py-1.5 rounded-full border border-slate-200/50 hover:bg-slate-100 transition-colors duration-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <Link
                href="/contact"
                className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2"
              >
                Book Wedding Transport
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </Link>
            </div>
            <div className="relative">
              <div className="relative h-72 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/wedding/assets_task_01jztnpaegfdrtgwwk7v9h9rpd_1752168189_img_3.webp"
                  alt="Wedding Transport - Luxury Coach"
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
              Wedding Solutions
            </h2>
            <p className="text-lg text-slate-ink-900/70 max-w-2xl mx-auto">
              Complete transport solutions for every aspect of your wedding day
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
              Make Your Day Perfect
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
              Contact us to discuss your wedding transport needs and create a memorable experience.
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