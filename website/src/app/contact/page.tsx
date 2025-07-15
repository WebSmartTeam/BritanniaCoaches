import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-ink-900 via-slate-ink-800 to-slate-ink-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative w-full px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-white">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              Get in touch for a free quote. Professional coach transport across the UK with 35+ years of experience.
            </p>
            <div className="flex justify-center">
              <a
                href="tel:01462436125"
                className="bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                <span>01462 436125</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-[rgb(220,231,245)]">
        <div className="w-full px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-ink-900 mb-6">
              Get Your Quote
            </h2>
            <p className="text-lg text-slate-ink-900/70 max-w-2xl mx-auto">
              Choose the best way to reach us for your transport needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-crimson-red-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-ink-900 mb-4">Call Us</h3>
              <p className="text-slate-ink-900/70 mb-4">Speak directly to our team</p>
              <a 
                href="tel:01462436125"
                className="text-crimson-red-800 font-semibold hover:text-crimson-red-900 transition-colors text-lg"
              >
                01462 436125
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-crimson-red-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-ink-900 mb-4">Email Us</h3>
              <p className="text-slate-ink-900/70 mb-4">Send us your requirements</p>
              <a 
                href="mailto:enquiries@britanniacoaches.co.uk"
                className="text-crimson-red-800 font-semibold hover:text-crimson-red-900 transition-colors text-sm"
              >
                enquiries@britanniacoaches.co.uk
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-crimson-red-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-ink-900 mb-4">Visit Us</h3>
              <p className="text-slate-ink-900/70 mb-4">Our location</p>
              <p className="text-slate-ink-900/80 text-sm">
                North End, Bury Mead Road<br />
                Hitchin, Hertfordshire SG5 1RT
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
              <div className="w-16 h-16 bg-crimson-red-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-ink-900 mb-4">Office Hours</h3>
              <p className="text-slate-ink-900/70 mb-4">When we&apos;re available</p>
              <p className="text-slate-ink-900/80 text-sm">
                Mon - Fri: 8:00 AM - 6:00 PM<br />
                Sat: 9:00 AM - 4:00 PM<br />
                Sun: By appointment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="w-full px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-ink-900 mb-4">
                Quick Quote Form
              </h2>
              <p className="text-lg text-slate-ink-900/70">
                Fill out this form and we&apos;ll get back to you within 24 hours
              </p>
            </div>

            <form className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-xl shadow-lg border border-slate-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-ink-900 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-crimson-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-ink-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-crimson-red-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-slate-ink-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-crimson-red-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block text-sm font-medium text-slate-ink-900 mb-2">
                  Service Type
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-crimson-red-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="corporate">Corporate Transport</option>
                  <option value="school">School Trips</option>
                  <option value="wedding">Wedding Transport</option>
                  <option value="airport">Airport Transfers</option>
                  <option value="daytrips">Day Trips</option>
                  <option value="longdistance">Long Distance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-ink-900 mb-2">
                  Your Requirements *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-crimson-red-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your transport needs, dates, passenger numbers, pickup/drop-off locations..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-crimson-red-800 hover:bg-crimson-red-900 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-3"
              >
                <span>Send Message</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}