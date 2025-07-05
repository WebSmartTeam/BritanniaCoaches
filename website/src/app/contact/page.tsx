import React from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['0123 456 7890', '24/7 Emergency Line'],
      link: 'tel:01234567890',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@britanniacoaches.co.uk', 'quotes@britanniacoaches.co.uk'],
      link: 'mailto:info@britanniacoaches.co.uk',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Birmingham, UK', 'Serving UK Wide'],
      link: '#',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon-Fri: 7:00 AM - 10:00 PM', 'Sat-Sun: 8:00 AM - 8:00 PM'],
      link: '#',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Get in touch with our team to discuss your transportation needs. We&apos;re here to help 
              you plan the perfect journey with our professional coach services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className={`${detailIndex === 0 ? 'font-medium text-neutral-900' : 'text-neutral-600'}`}>
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6">
                Get Your Free Quote
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Fill out the form below and we&apos;ll get back to you within 1 hour during business hours.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="input-field"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className="input-field"
                      placeholder="Your phone number"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Service Type *
                  </label>
                  <select className="input-field" required>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Pickup Location *
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Enter pickup location"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Destination
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Enter destination"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Time
                    </label>
                    <input
                      type="time"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Passengers *
                    </label>
                    <select className="input-field" required>
                      <option value="">How many?</option>
                      <option value="1-10">1-10 passengers</option>
                      <option value="11-20">11-20 passengers</option>
                      <option value="21-30">21-30 passengers</option>
                      <option value="31-50">31-50 passengers</option>
                      <option value="50+">50+ passengers</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    className="input-field min-h-[120px]"
                    placeholder="Please provide any additional details about your requirements..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-neutral-600">
                    I agree to the{' '}
                    <a href="/terms" className="text-primary-600 hover:text-primary-700">
                      Terms and Conditions
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" className="text-primary-600 hover:text-primary-700">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-full"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Quote Request
                </button>
              </form>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6">
                Why Choose Us?
              </h2>
              
              <div className="space-y-8">
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Quick Response Time
                  </h3>
                  <p className="text-neutral-600">
                    We respond to all quote requests within 1 hour during business hours. 
                    For urgent bookings, call our 24/7 emergency line.
                  </p>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Competitive Pricing
                  </h3>
                  <p className="text-neutral-600">
                    We offer transparent, competitive pricing with no hidden fees. 
                    All quotes include fuel, tolls, and driver expenses.
                  </p>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Professional Service
                  </h3>
                  <p className="text-neutral-600">
                    Our professional drivers are uniformed, DBS checked, and trained to 
                    provide the highest level of customer service.
                  </p>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    Flexible Booking
                  </h3>
                  <p className="text-neutral-600">
                    From last-minute bookings to advance planning, we accommodate your 
                    schedule with flexible payment options.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-hero rounded-xl text-white">
                <h3 className="text-xl font-semibold mb-3">
                  Emergency & Last-Minute Bookings
                </h3>
                <p className="text-white/90 mb-4">
                  Need transport urgently? Call our 24/7 emergency line for immediate assistance.
                </p>
                <a
                  href="tel:01234567890"
                  className="btn btn-secondary btn-lg"
                >
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Our Service Areas
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We provide professional coach transportation services across the UK, with our main depot in Birmingham.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Birmingham & West Midlands',
              'London & Greater London',
              'Manchester & Greater Manchester',
              'Leeds & Yorkshire',
              'Liverpool & Merseyside',
              'Bristol & South West',
              'Newcastle & North East',
              'Cardiff & Wales',
              'Scotland (Edinburgh & Glasgow)',
            ].map((area, index) => (
              <div key={index} className="card p-6 text-center">
                <MapPin className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-900">
                  {area}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}