import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-britannia-primary text-white">
      <div className="container-custom">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/logos/logo.png"
                  alt="Britannia Coaches"
                  width={60}
                  height={44}
                  className="h-12 w-auto brightness-0 invert"
                />
                <div>
                  <h3 className="text-2xl font-display font-bold">
                    Britannia Coaches
                  </h3>
                  <p className="text-britannia-light text-sm">
                    Professional Transportation Services
                  </p>
                </div>
              </Link>
              <p className="text-britannia-light mb-4 max-w-md">
                With over 25 years of experience, we provide reliable, 
                comfortable, and safe transportation services across the UK. 
                Our modern fleet and professional drivers ensure your journey 
                is smooth and enjoyable.
              </p>
              <div className="flex space-x-4">
                <a
                  href="tel:01462436125"
                  className="flex items-center space-x-2 text-britannia-light hover:text-white transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>01462 436125</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-britannia-light hover:text-white transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-britannia-light hover:text-white transition-colors duration-200">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/fleet" className="text-britannia-light hover:text-white transition-colors duration-200">
                    Our Fleet
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-britannia-light hover:text-white transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-britannia-light hover:text-white transition-colors duration-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services#corporate" className="text-britannia-light hover:text-white transition-colors duration-200">
                    Corporate Events
                  </Link>
                </li>
                <li>
                  <Link href="/services#school" className="text-britannia-light hover:text-white transition-colors duration-200">
                    School Trips
                  </Link>
                </li>
                <li>
                  <Link href="/services#wedding" className="text-britannia-light hover:text-white transition-colors duration-200">
                    Wedding Transport
                  </Link>
                </li>
                <li>
                  <Link href="/services#airport" className="text-britannia-light hover:text-white transition-colors duration-200">
                    Airport Transfers
                  </Link>
                </li>
                <li>
                  <Link href="/services#day-trips" className="text-britannia-light hover:text-white transition-colors duration-200">
                    Day Trips
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-britannia-primary-dark mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-britannia-light text-sm mb-4 md:mb-0">
              © {currentYear} Britannia Coaches. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-britannia-light hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-britannia-light hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;