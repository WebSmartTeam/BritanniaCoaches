import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Event Coordinator",
      company: "Corporate Events Ltd",
      rating: 5,
      text: "Britannia Coaches provided exceptional service for our corporate retreat. The coaches were immaculate and the drivers were professional throughout the journey.",
      avatar: "SJ",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Michael Chen",
      role: "School Administrator", 
      company: "St. Mary's Primary School",
      rating: 5,
      text: "We've used Britannia Coaches for multiple school trips. Their safety standards are excellent and the children always arrive happy and comfortable.",
      avatar: "MC",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      name: "Emma Williams",
      role: "Wedding Planner",
      company: "Perfect Day Events",
      rating: 5,
      text: "The service was flawless for our wedding party transportation. Punctual, professional, and the coaches were spotless. Highly recommend!",
      avatar: "EW",
      color: "from-rose-500 to-rose-600"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-ice-grey-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Left Bar - Full Width */}
        <div className="w-full px-6 mb-16">
          <div className="border-l-4 border-crimson-red-800 pl-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-slate-ink-900">
              Client Testimonials
            </h2>
            <p className="text-xl text-slate-ink-900/60 max-w-2xl leading-relaxed">
              Hear what our satisfied customers have to say about their experience with Britannia Coaches
            </p>
          </div>
        </div>

        {/* Testimonial Cards - Full Width */}
        <div className="w-full px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center relative">
                  <div className="w-10 h-10 bg-slate-ink-900 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white fill-current" />
                  </div>
                  <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center absolute left-6 border-2 border-white -z-10`}>
                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                  </div>
                </div>
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-slate-ink-900" />
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-ink-900/70 text-sm leading-relaxed mb-5 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              <div className="border-t border-slate-200 pt-4">
                <div className="font-bold text-slate-ink-900 text-sm">{testimonial.name}</div>
                <div className="text-slate-500 text-xs">{testimonial.role}</div>
                <div className="text-slate-400 text-xs">{testimonial.company}</div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials