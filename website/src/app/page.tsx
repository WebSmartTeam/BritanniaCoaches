import React from 'react'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Amenities from '@/components/sections/Amenities'
import Testimonials from '@/components/sections/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Amenities />
      
      <div className="relative py-16 bg-gradient-to-r from-slate-ink-900 to-crimson-red-900">
        <div className="absolute inset-0 bg-opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-6">
            <div className="h-px bg-white/20 flex-1"></div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4">
              <div className="w-3 h-3 bg-crimson-red-400 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold text-lg tracking-wide">What Our Customers Say</span>
              <div className="w-3 h-3 bg-crimson-red-400 rounded-full animate-pulse"></div>
            </div>
            <div className="h-px bg-white/20 flex-1"></div>
          </div>
        </div>
      </div>
      
      <Testimonials />
    </>
  )
}