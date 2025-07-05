import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-50 pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
              <span>Est. 1998 • Premium Transportation</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Professional Coach
                <span className="text-primary-600 block">Transportation</span>
                Services
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Experience comfort, reliability, and safety with Britannia Coaches. 
                Our modern fleet and professional drivers ensure your journey is 
                smooth and enjoyable.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">25+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Modern Fleet</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Professional Drivers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Fully Insured</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Get Free Quote
              </Link>
              <Link href="/fleet" className="btn-outline">
                View Our Fleet
              </Link>
            </div>

            {/* Contact Info */}
            <div className="card">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm mb-1">
                    Call us for immediate assistance
                  </p>
                  <a
                    href="tel:01462436125"
                    className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors duration-200"
                  >
                    01462 436125
                  </a>
                </div>
                <div className="text-right">
                  <div className="text-green-600 text-sm font-medium">Available 24/7</div>
                  <div className="text-gray-500 text-sm">Emergency Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            {/* Main Coach Image */}
            <div className="relative">
              <Image
                src="/images/premium/luxury-coach-1.webp"
                alt="Britannia Coaches Premium Fleet"
                width={600}
                height={400}
                className="rounded-2xl shadow-clean-lg w-full h-auto object-cover"
                priority
              />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-clean">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">50+</div>
                      <div className="text-sm text-gray-600">Premium Coaches</div>
                    </div>
                    <div className="border-l border-r border-gray-200">
                      <div className="text-2xl font-bold text-gray-900">10K+</div>
                      <div className="text-sm text-gray-600">Happy Customers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">99%</div>
                      <div className="text-sm text-gray-600">On-Time Record</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Images */}
            <div className="hidden lg:grid grid-cols-2 gap-4 mt-6">
              <div className="relative group">
                <Image
                  src="/images/premium/luxury-coach-2.webp"
                  alt="Britannia Coaches Interior"
                  width={250}
                  height={150}
                  className="rounded-xl shadow-clean w-full h-24 object-cover group-hover:shadow-clean-lg transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/20 rounded-xl transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Executive Interior
                  </span>
                </div>
              </div>
              
              <div className="relative group">
                <Image
                  src="/images/premium/luxury-coach-3.webp"
                  alt="Britannia Coaches Comfort"
                  width={250}
                  height={150}
                  className="rounded-xl shadow-clean w-full h-24 object-cover group-hover:shadow-clean-lg transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/20 rounded-xl transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Premium Comfort
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;