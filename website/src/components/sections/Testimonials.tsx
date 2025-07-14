'use client'

import React from 'react'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Event Coordinator",
      company: "Corporate Events Ltd",
      rating: 5,
      text: "Britannia Coaches provided exceptional service for our corporate retreat. The coaches were immaculate and the drivers were professional throughout the journey.",
      avatar: "SJ",
      color: "from-slate-600 to-slate-700"
    },
    {
      name: "Michael Chen",
      role: "School Administrator", 
      company: "St. Mary's Primary School",
      rating: 5,
      text: "We've used Britannia Coaches for multiple school trips. Their safety standards are excellent and the children always arrive happy and comfortable.",
      avatar: "MC",
      color: "from-slate-700 to-slate-800"
    },
    {
      name: "Emma Williams",
      role: "Wedding Planner",
      company: "Perfect Day Events",
      rating: 5,
      text: "The service was flawless for our wedding party transportation. Punctual, professional, and the coaches were spotless. Highly recommend!",
      avatar: "EW",
      color: "from-slate-800 to-slate-900"
    },
    {
      name: "David Thompson",
      role: "Operations Manager",
      company: "Thompson Industries",
      rating: 5,
      text: "Reliable, professional service that never disappoints. Their fleet management and scheduling is impeccable for our corporate needs.",
      avatar: "DT",
      color: "from-slate-600 to-slate-700"
    },
    {
      name: "Rebecca Foster",
      role: "Travel Coordinator",
      company: "Global Events Group",
      rating: 5,
      text: "Outstanding service quality and attention to detail. Britannia Coaches consistently exceeds our expectations for executive transport.",
      avatar: "RF",
      color: "from-slate-700 to-slate-800"
    },
    {
      name: "James Mitchell",
      role: "Sports Director",
      company: "Elite Sports Academy",
      rating: 5,
      text: "Safety, comfort, and reliability - exactly what we need for our student athletes. Their drivers are professional and courteous.",
      avatar: "JM",
      color: "from-slate-800 to-slate-900"
    }
  ]

  return (
    <section className="py-20 bg-[rgb(220,231,245)]">
      <div className="w-full">
        {/* Header with Left Bar - Full Width */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="border-l-4 border-crimson-red-800 pl-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-slate-ink-900">
              Client Testimonials
            </h2>
            <p className="text-xl text-slate-ink-900/60 max-w-2xl leading-relaxed">
              Hear what our satisfied customers have to say about their experience with Britannia Coaches
            </p>
          </div>
        </div>

        {/* Testimonial Cards - Scrolling Animation */}
        <div className="relative overflow-hidden">
          <div className="animate-scroll-left flex gap-8 w-max">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className={`bg-gradient-to-br ${testimonial.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-80 flex-shrink-0`}>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center relative">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-white fill-current" />
                  </div>
                  <div className="w-10 h-10 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center absolute left-6 border-2 border-white/50">
                    <span className="text-white font-bold text-sm">{testimonial.avatar}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-white/90 text-sm leading-relaxed mb-5 italic">
                {testimonial.text}
              </p>
              
              <div className="border-t border-white/20 pt-4">
                <div className="font-bold text-white text-sm">{testimonial.name}</div>
                <div className="text-white/80 text-xs">{testimonial.role}</div>
                <div className="text-white/70 text-xs">{testimonial.company}</div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

export default Testimonials