import React from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Compact Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-ink-900 via-slate-ink-800 to-slate-ink-900 text-white py-16">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative w-full px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight text-white">
              Contact Us
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Get in touch for a free quote. Professional coach transport across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-[rgb(220,231,245)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-ink-900 mb-4">
                  Quick Quote Form
                </h2>
                <p className="text-lg text-slate-ink-900/70">
                  Fill out this form and we&apos;ll get back to you within 24 hours
                </p>
              </div>

              <form className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
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

            {/* Get Your Quote Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-ink-900 mb-4">
                  Get Your Quote
                </h2>
                <p className="text-lg text-slate-ink-900/70">
                  Multiple ways to reach us for your transport needs
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:border-crimson-red-300 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-crimson-red-800 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-ink-900 mb-1">Call Us</h3>
                      <p className="text-slate-ink-900/70 text-sm mb-1">Speak directly to our team</p>
                      <a 
                        href="tel:01462436125"
                        className="text-crimson-red-800 font-semibold hover:text-crimson-red-900 transition-colors text-lg"
                      >
                        01462 436125
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:border-crimson-red-300 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-crimson-red-800 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-ink-900 mb-1">Email Us</h3>
                      <p className="text-slate-ink-900/70 text-sm mb-1">Send us your requirements</p>
                      <a 
                        href="mailto:enquiries@britanniacoaches.co.uk"
                        className="text-crimson-red-800 font-semibold hover:text-crimson-red-900 transition-colors text-sm break-all"
                      >
                        enquiries@britanniacoaches.co.uk
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:border-crimson-red-300 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-crimson-red-800 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-ink-900 mb-1">Visit Us</h3>
                      <p className="text-slate-ink-900/70 text-sm mb-1">Our location</p>
                      <p className="text-slate-ink-900/80 text-sm">
                        North End, Bury Mead Road<br />
                        Hitchin, Hertfordshire SG5 1RT
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:border-crimson-red-300 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-crimson-red-800 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-ink-900 mb-1">Office Hours</h3>
                      <p className="text-slate-ink-900/70 text-sm mb-1">When we&apos;re available</p>
                      <p className="text-slate-ink-900/80 text-sm">
                        Mon - Fri: 8:00 AM - 6:00 PM<br />
                        Sat: 9:00 AM - 4:00 PM<br />
                        Sun: By appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}