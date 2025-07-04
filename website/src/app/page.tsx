import React from 'react';
import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Services from '@/components/sections/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
    </>
  );
}