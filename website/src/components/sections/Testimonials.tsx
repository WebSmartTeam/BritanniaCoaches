import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Corporate Event Manager',
      company: 'TechCorp Solutions',
      content: 'Britannia Coaches provided exceptional service for our annual company retreat. The drivers were professional, the coach was immaculate, and everything ran perfectly on schedule. Highly recommended!',
      rating: 5,
      service: 'Corporate Transport',
    },
    {
      name: 'Michael Thompson',
      role: 'School Trip Coordinator',
      company: 'St. Mary&apos;s Academy',
      content: 'Safety is our top priority when organizing school trips, and Britannia Coaches exceeded all our expectations. The drivers were fantastic with the children, and the coaches were spotless. We&apos;ve used them for 3 years running.',
      rating: 5,
      service: 'School Trips',
    },
    {
      name: 'Emma & David Wilson',
      role: 'Bride & Groom',
      company: 'Wedding Transport',
      content: 'Our wedding day was perfect, and Britannia Coaches played a huge part in that. They coordinated all our guest transportation flawlessly and even decorated the coach beautifully. Thank you for making our day special!',
      rating: 5,
      service: 'Wedding Transport',
    },
    {
      name: 'James Mitchell',
      role: 'Travel Group Leader',
      company: 'Golden Years Travel Club',
      content: 'We&apos;ve been using Britannia Coaches for our monthly day trips for over 2 years. The service is consistently excellent, the coaches are comfortable, and the drivers are always friendly and helpful.',
      rating: 5,
      service: 'Day Trips',
    },
    {
      name: 'Lisa Chen',
      role: 'HR Director',
      company: 'Global Finance Ltd',
      content: 'Reliable, professional, and always on time. We use Britannia Coaches for all our corporate events and airport transfers. They&apos;ve never let us down, and their customer service is outstanding.',
      rating: 5,
      service: 'Corporate Transport',
    },
    {
      name: 'Robert Andrews',
      role: 'Sports Club Manager',
      company: 'United Football Club',
      content: 'Transporting our football team and supporters requires reliability and professionalism. Britannia Coaches delivers both consistently. Great service, fair prices, and always punctual.',
      rating: 5,
      service: 'Sports Transport',
    },
  ]

  const stats = [
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '25+', label: 'Years of Service' },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about 
            their experience with Britannia Coaches.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-neutral-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <Quote className="testimonial-quote" />
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-neutral-700 leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Service Type */}
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <span>{testimonial.service}</span>
              </div>

              {/* Author */}
              <div className="border-t border-neutral-200 pt-4">
                <div className="font-semibold text-neutral-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-neutral-600">
                  {testimonial.role}
                </div>
                <div className="text-sm text-neutral-500">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Platforms */}
        <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Trusted Across All Platforms
            </h3>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in our consistently high ratings across all review platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
              <div className="text-lg font-semibold text-neutral-900 mb-1">Google Reviews</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-neutral-600">Based on 250+ reviews</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">4.8/5</div>
              <div className="text-lg font-semibold text-neutral-900 mb-1">Trustpilot</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-neutral-600">Based on 180+ reviews</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">5.0/5</div>
              <div className="text-lg font-semibold text-neutral-900 mb-1">Facebook</div>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-neutral-600">Based on 120+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials