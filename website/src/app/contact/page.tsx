import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      subtitle: 'Speak directly with our team',
      details: '01462 436125',
      subtext: 'Mon-Fri 8AM-6PM',
      href: 'tel:01462436125',
      color: 'bg-green-600',
    },
    {
      icon: Mail,
      title: 'Email Us',
      subtitle: 'Get a quote via email',
      details: 'enquiries@britanniacoaches.co.uk',
      subtext: '24/7 Email Support',
      href: 'mailto:enquiries@britanniacoaches.co.uk',
      color: 'bg-blue-600',
    },
    {
      icon: MessageCircle,
      title: 'Quick Quote',
      subtitle: 'Use our contact form',
      details: 'Get instant response',
      subtext: 'Fast & Easy',
      href: '#quote-form',
      color: 'bg-crimson-red-800',
    },
  ]

  const serviceAreas = [
    'Hertfordshire & Bedfordshire',
    'London & Greater London', 
    'Cambridge & East Anglia',
    'Luton & Milton Keynes',
    'Oxford & Buckinghamshire',
    'Essex & Kent',
    'UK Wide & European Tours',
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-ink-900 via-slate-ink-800 to-slate-ink-900 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-crimson-red-800 text-white px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Get In Touch</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Contact Britannia Coaches
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Ready to book your transportation? Get in touch with our professional team for a personalized quote 
              and expert advice on your travel requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-[rgb(220,231,245)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-ink-900 mb-6 leading-tight">
              How to Reach Us
            </h2>
            <p className="text-xl text-slate-ink-900/70 max-w-3xl mx-auto leading-relaxed">
              Choose the method that works best for you. We respond quickly to all inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Link
                key={index}
                href={method.href}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className={`w-16 h-16 ${method.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-ink-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-slate-ink-900/70 mb-4">
                  {method.subtitle}
                </p>
                <div className="text-lg font-semibold text-slate-ink-900 mb-2">
                  {method.details}
                </div>
                <div className="text-sm text-slate-ink-900/60">
                  {method.subtext}
                </div>
              </Link>
            ))}
          </div>

          {/* Office Details */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-ink-900 mb-6">Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-ink-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-ink-900 mb-1">Address</h4>
                      <p className="text-slate-ink-900/70">
                        North End, Bury Mead Road<br />
                        Hitchin, Hertfordshire SG5 1RT
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-ink-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-ink-900 mb-1">Office Hours</h4>
                      <p className="text-slate-ink-900/70">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Weekend: By appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-slate-ink-900 mb-6">Service Areas</h3>
                <div className="grid grid-cols-1 gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-slate-ink-900/80">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Quote Form */}
      <section id="quote-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-crimson-red-800 text-white px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Quick Quote</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-ink-900 mb-6">
              Get Your Quote
            </h2>
            <p className="text-xl text-slate-ink-900/70 leading-relaxed">
              Fill out this simple form and we&apos;ll get back to you within 1 hour during business hours.
            </p>
          </div>

          <form className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl border border-slate-200 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-ink-900 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-crimson-red-800 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-ink-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-crimson-red-800 focus:border-transparent"
                  placeholder="Your phone number"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-ink-900 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-crimson-red-800 focus:border-transparent"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-ink-900 mb-2">
                  Service Type *
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-crimson-red-800 focus:border-transparent" required>
                  <option value="">Select a service</option>
                  <option value="corporate">Corporate Transport</option>
                  <option value="school">School Trips</option>
                  <option value="wedding">Wedding Transport</option>
                  <option value="airport">Airport Transfers</option>
                  <option value="day-trips">Day Trips</option>
                  <option value="long-distance">Long Distance</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-ink-900 mb-2">
                  Number of Passengers *
                </label>
                <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-crimson-red-800 focus:border-transparent" required>
                  <option value="">How many passengers?</option>
                  <option value="1-15">1-15 passengers</option>
                  <option value="16-25">16-25 passengers</option>
                  <option value="26-35">26-35 passengers</option>
                  <option value="36-50">36-50 passengers</option>
                  <option value="50+">50+ passengers</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-slate-ink-900 mb-2">
                  Pickup Location *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-crimson-red-800 focus:border-transparent"
                  placeholder="Where should we pick you up?"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-ink-900 mb-2">
                  Travel Date *
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-crimson-red-800 focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-slate-ink-900 mb-2">
                Additional Details
              </label>
              <textarea
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-crimson-red-800 focus:border-transparent min-h-[120px]"
                placeholder="Tell us about your journey requirements, destination, special needs, etc."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <Send className="w-5 h-5" />
              <span>Send Quote Request</span>
            </button>

            <p className="text-sm text-slate-ink-900/60 text-center mt-4">
              We typically respond within 1 hour during business hours
            </p>
          </form>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-slate-ink-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-crimson-red-800 text-white px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">24/7 Available</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Need Urgent Transport?
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12">
              For last-minute bookings and emergency transportation needs, our team is available 24/7 to help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="tel:01462436125"
                className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                <span>Call: 01462 436125</span>
              </Link>
              
              <Link
                href="mailto:enquiries@britanniacoaches.co.uk"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 inline-flex items-center gap-3"
              >
                <Mail className="w-5 h-5" />
                <span>Email Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}