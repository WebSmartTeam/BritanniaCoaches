import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 gradient-mesh"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-britannia-accent/10 rounded-full blur-xl floating-element"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-britannia-secondary/10 rounded-full blur-xl floating-element" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-lg floating-element" style={{ animationDelay: '4s' }}></div>

      {/* Mesh Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10 fade-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-glass-white backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-sm font-medium text-white">
              <span className="w-2 h-2 bg-britannia-accent rounded-full animate-pulse"></span>
              <span>Premium Transportation Since 1998</span>
            </div>

            <div className="space-y-6">
              <h1 className="heading-hero text-white leading-none">
                Luxury Coach
                <span className="block text-gradient">
                  Transportation
                </span>
                <span className="block text-white/90 text-5xl md:text-6xl lg:text-7xl">
                  Redefined
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed">
                Experience the pinnacle of comfort and sophistication with Britannia Coaches. 
                Our premium fleet and professional service ensure every journey exceeds expectations.
              </p>
            </div>

            {/* Modern Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="card-glass p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-britannia-accent rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Premium Safety</h3>
                    <p className="text-white/70 text-sm">Certified Excellence</p>
                  </div>
                </div>
              </div>
              
              <div className="card-glass p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-britannia-secondary rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">On-Time Promise</h3>
                    <p className="text-white/70 text-sm">99.8% Punctuality</p>
                  </div>
                </div>
              </div>
              
              <div className="card-glass p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Modern Fleet</h3>
                    <p className="text-white/70 text-sm">Latest Technology</p>
                  </div>
                </div>
              </div>
              
              <div className="card-glass p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">5-Star Service</h3>
                    <p className="text-white/70 text-sm">Customer Excellence</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link
                href="/contact"
                className="btn-primary text-center group relative overflow-hidden"
              >
                <span className="relative z-10">Get Premium Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-britannia-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/fleet"
                className="btn-glass text-center text-white"
              >
                Explore Our Fleet
              </Link>
            </div>

            {/* Contact Info */}
            <div className="card-glass p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/70 mb-2 font-medium">
                    Premium Booking Hotline
                  </p>
                  <a
                    href="tel:01462436125"
                    className="text-3xl md:text-4xl font-bold text-white hover:text-britannia-accent transition-colors duration-300"
                  >
                    01462 436125
                  </a>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 text-britannia-accent mb-2">
                    <div className="w-3 h-3 bg-britannia-accent rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-white">Available 24/7</span>
                  </div>
                  <p className="text-white/70 text-sm">Emergency Service Ready</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:block hidden">
            <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-700">
              {/* Glass Frame */}
              <div className="absolute -inset-4 bg-glass-white backdrop-blur-sm border border-white/20 rounded-3xl"></div>
              
              <Image
                src="/images/coaches/placeholder_cover-1024x458.jpg"
                alt="Premium Britannia Coach Fleet"
                width={1024}
                height={600}
                className="rounded-2xl shadow-hard w-full h-auto object-cover"
                priority
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-8 -right-8 card-glass p-4 text-center">
                <div className="text-2xl font-bold text-britannia-accent">25+</div>
                <div className="text-xs text-white/70">Years Excellence</div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 card-glass p-4 text-center">
                <div className="text-2xl font-bold text-britannia-secondary">50+</div>
                <div className="text-xs text-white/70">Premium Fleet</div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 -right-10 w-32 h-32 bg-britannia-accent/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-britannia-secondary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="#F8FAFC" fillOpacity="1"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;