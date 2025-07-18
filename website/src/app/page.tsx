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
      
      <div className="relative py-12 bg-slate-ink-900">
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px bg-white/20 flex-1"></div>
            <span className="text-white font-bold text-lg">Making Group Travel <span className="text-warm-gold-300">Simple</span>, No Matter the Distance</span>
            <div className="h-px bg-white/20 flex-1"></div>
          </div>
        </div>
      </div>
      
      <Testimonials />
    </>
  )
}