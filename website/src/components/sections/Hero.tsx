import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-britannia-cream">
      {/* Clean, minimal hero design */}
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          
          {/* Left Content - Clean Typography */}
          <div className="space-y-8 lg:pr-8">
            {/* Elegant Badge */}
            <div className="inline-flex items-center space-x-3 bg-britannia-pearl border border-luxury-platinum rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-britannia-gold rounded-full"></div>
              <span className="text-sm font-medium text-britannia-slate">Est. 1998 • Premium Transportation</span>
            </div>

            {/* Hero Heading - Clean, Elegant Typography */}
            <div className="space-y-6">
              <h1 className="heading-hero">
                Britannia Coaches
                <span className="block text-britannia-gold">Luxury Transportation</span>
              </h1>
              <p className="text-body max-w-xl">
                Experience unparalleled comfort and reliability with our premium fleet. 
                From corporate events to special occasions, we deliver excellence in 
                every journey across the United Kingdom.
              </p>
            </div>

            {/* Clean Feature List */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-britannia-gold flex items-center justify-center">
                    <svg className="w-3 h-3 text-britannia-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-feature">25+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-britannia-gold flex items-center justify-center">
                    <svg className="w-3 h-3 text-britannia-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-feature">Professional Drivers</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-britannia-gold flex items-center justify-center">
                    <svg className="w-3 h-3 text-britannia-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-feature">Modern Fleet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-britannia-gold flex items-center justify-center">
                    <svg className="w-3 h-3 text-britannia-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-feature">Fully Insured</span>
                </div>
              </div>
            </div>

            {/* Clean CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/contact" className="btn-primary">
                Request Quote
              </Link>
              <Link href="/fleet" className="btn-outline">
                View Our Fleet
              </Link>
            </div>

            {/* Contact Information - Elegant Card */}
            <div className="card-elegant">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-britannia-slate text-sm font-medium mb-1">
                    Call us for immediate assistance
                  </p>
                  <a
                    href="tel:01462436125"
                    className="text-2xl font-semibold text-britannia-navy hover:text-britannia-gold transition-colors duration-200"
                  >
                    01462 436125
                  </a>
                </div>
                <div className="text-right">
                  <div className="text-britannia-gold text-sm font-medium">Available 24/7</div>
                  <div className="text-britannia-slate text-sm">Emergency Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images - Sophisticated Gallery Layout */}
          <div className="relative">
            {/* Main Premium Coach Image */}
            <div className="relative group">
              <Image
                src="/images/coaches/placeholder_cover-original.jpg"
                alt="Britannia Coaches Luxury Fleet"
                width={600}
                height={400}
                className="rounded-2xl shadow-luxury w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              
              {/* Elegant overlay with stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-britannia-pearl/95 backdrop-blur-sm border border-luxury-platinum rounded-xl p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-semibold text-britannia-navy">50+</div>
                      <div className="text-sm text-britannia-slate">Premium Coaches</div>
                    </div>
                    <div className="border-l border-r border-luxury-platinum">
                      <div className="text-2xl font-semibold text-britannia-navy">10K+</div>
                      <div className="text-sm text-britannia-slate">Happy Customers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold text-britannia-navy">99%</div>
                      <div className="text-sm text-britannia-slate">On-Time Record</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Fleet Gallery - Elegant Grid */}
            <div className="hidden lg:grid grid-cols-2 gap-4 mt-6">
              <div className="relative group">
                <Image
                  src="/images/misc/placeholder_square.jpg"
                  alt="Britannia Coaches Interior Luxury"
                  width={300}
                  height={200}
                  className="rounded-xl shadow-elegant w-full h-32 object-cover transition-all duration-300 group-hover:shadow-elegant-lg"
                />
                <div className="absolute inset-0 bg-britannia-navy/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Executive Interior</span>
                </div>
              </div>
              
              <div className="relative group">
                <Image
                  src="/images/coaches/placeholder_cover-1024x458.jpg"
                  alt="Britannia Coaches Premium Service"
                  width={300}
                  height={200}
                  className="rounded-xl shadow-elegant w-full h-32 object-cover transition-all duration-300 group-hover:shadow-elegant-lg"
                />
                <div className="absolute inset-0 bg-britannia-navy/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">Premium Comfort</span>
                </div>
              </div>
            </div>

            {/* Floating Premium Badge */}
            <div className="absolute -top-4 -right-4 bg-britannia-gold text-britannia-navy px-4 py-2 rounded-full text-sm font-semibold shadow-elegant">
              Premium Fleet
            </div>

            {/* Elegant decoration */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-britannia-gold/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Clean bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-luxury-platinum"></div>
    </section>
  );
};

export default Hero;