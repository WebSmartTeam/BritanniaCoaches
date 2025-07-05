import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/logos/logo.png"
                  alt="Britannia Coaches"
                  width={40}
                  height={30}
                  className="h-8 w-auto brightness-0 invert"
                />
                <div>
                  <h3 className="text-xl font-semibold">Britannia Coaches</h3>
                  <p className="text-gray-400 text-sm">Professional Transportation</p>
                </div>
              </Link>
              <p className="text-gray-300 mb-4 max-w-md">
                With over 25 years of experience, we provide reliable, comfortable, 
                and safe transportation services across the UK. Professional drivers 
                and modern fleet for all your transportation needs.
              </p>
              <a
                href="tel:01462436125"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-semibold">01462 436125</span>
              </a>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/fleet" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Our Fleet
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
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
                  <Link href="/services#corporate" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Corporate Events
                  </Link>
                </li>
                <li>
                  <Link href="/services#school" className="text-gray-300 hover:text-white transition-colors duration-200">
                    School Trips
                  </Link>
                </li>
                <li>
                  <Link href="/services#wedding" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Wedding Transport
                  </Link>
                </li>
                <li>
                  <Link href="/services#airport" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Airport Transfers
                  </Link>
                </li>
                <li>
                  <Link href="/services#events" className="text-gray-300 hover:text-white transition-colors duration-200">
                    Special Events
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Britannia Coaches. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
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