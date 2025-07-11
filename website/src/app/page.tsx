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
      <Testimonials />
    </>
  )
}