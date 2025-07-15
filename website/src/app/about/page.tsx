import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Users, Award, Shield, MapPin, Clock, Phone, Mail } from 'lucide-react'

export default function AboutPage() {

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Safety is our absolute priority. All drivers are professionally trained, DBS checked, and our fleet undergoes rigorous maintenance.',
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      description: 'We maintain the highest standards of professionalism in every aspect of our service delivery and customer interaction.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Every journey is tailored to meet our customers\' specific needs with personalized service and attention to detail.',
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Punctuality and reliability are fundamental to our service. We pride ourselves on being on time, every time.',
    },
  ]

  const stats = [
    { number: '35+', label: 'Years Experience', icon: Calendar },
    { number: '50+', label: 'Modern Coaches', icon: Users },
    { number: '1000+', label: 'Happy Customers', icon: Award },
    { number: '100%', label: 'Safety Record', icon: Shield },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-ink-900 via-slate-ink-800 to-slate-ink-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative w-full px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-white">
              About Britannia Coaches
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              35+ years of excellence in professional coach transportation. 
              From humble beginnings to becoming one of the UK&apos;s most trusted coach operators.
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

      {/* Company Story */}
      <section className="py-20 bg-[rgb(220,231,245)]">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="px-6">
              <div className="inline-flex items-center gap-2 bg-crimson-red-800 text-white px-3 py-1 rounded-full mb-6">
                <span className="text-xs font-semibold uppercase tracking-wide">Heritage</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-ink-900 mb-6 leading-tight">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-slate-ink-900/80 leading-relaxed">
                <p>
                  Founded in 1988, Britannia Coaches began as a family business with a commitment to providing 
                  safe, reliable transportation services. What started as a local operation has grown into 
                  one of the UK&apos;s most respected coach companies.
                </p>
                <p>
                  Over more than three decades, we&apos;ve built our reputation on exceptional service, safety, 
                  and reliability. Our team of professional drivers and modern fleet have safely transported 
                  thousands of passengers across the UK and Europe.
                </p>
                <p>
                  Today, we&apos;re proud to serve corporations, schools, wedding parties, and private groups. 
                  Every journey is approached with the same dedication to excellence that has defined us 
                  since day one.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-72 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/services/corporate/assets_task_01jztkbqygfp8rcvfs4ez2t15y_1752165762_img_2.webp"
                  alt="Britannia Coaches - Professional Transportation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-ink-900">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-crimson-red-800 text-white px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">By The Numbers</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Numbers that reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <div className="w-16 h-16 bg-crimson-red-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-crimson-red-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Values */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-crimson-red-800 text-white px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Core Values</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-ink-900 mb-6 leading-tight">
              Our Values
            </h2>
            <p className="text-xl text-slate-ink-900/70 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-crimson-red-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-ink-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-slate-ink-900/70 leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Location */}
      <section className="py-20 bg-slate-ink-900">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-crimson-red-800 text-white px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Contact Us</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Ready to book your next journey? Our professional team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-crimson-red-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Call Us
              </h3>
              <p className="text-white/80 mb-4">
                Speak to our friendly team
              </p>
              <Link 
                href="tel:01462436125"
                className="text-crimson-red-400 font-semibold hover:text-crimson-red-300 transition-colors"
              >
                01462 436125
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center">
              <div className="w-16 h-16 bg-crimson-red-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Email Us
              </h3>
              <p className="text-white/80 mb-4">
                Get a quote via email
              </p>
              <Link 
                href="mailto:enquiries@britanniacoaches.co.uk"
                className="text-crimson-red-400 font-semibold hover:text-crimson-red-300 transition-colors break-all"
              >
                enquiries@britanniacoaches.co.uk
              </Link>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-crimson-red-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Visit Us
              </h3>
              <p className="text-white/80 mb-4">
                North End, Bury Mead Road<br />
                Hitchin, Hertfordshire SG5 1RT
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
            >
              <span>Get Your Quote Today</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}