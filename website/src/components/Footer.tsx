import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Shield, Award, Users, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Group Travel',
    'Corporate Transport',
    'Airport Transfers',
    'School Transport',
    'Special Events',
    'Day Tours',
    'Wedding Transport',
    'Sports Events',
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Fleet', href: '/fleet' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Safety Information', href: '/safety' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const operatingAreas = [
    'Hertfordshire',
    'Bedfordshire',
    'London',
    'Cambridge',
    'Oxford',
    'Birmingham',
    'Manchester',
    'UK Wide',
  ];

  return (
    <footer className="bg-neutral-charcoal text-white">
      {/* Clean Trust Indicators Bar */}
      <div className="bg-neutral-gray text-neutral-charcoal py-6 border-t border-neutral-light">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-6 h-6 text-britannia-blue mb-2" />
              <div className="font-semibold">Licensed & Insured</div>
              <div className="text-sm text-neutral-slate">Fully Compliant</div>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-6 h-6 text-britannia-blue mb-2" />
              <div className="font-semibold">35+ Years</div>
              <div className="text-sm text-neutral-slate">Industry Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-6 h-6 text-britannia-blue mb-2" />
              <div className="font-semibold">10,000+</div>
              <div className="text-sm text-neutral-slate">Happy Customers</div>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-6 h-6 text-britannia-blue mb-2" />
              <div className="font-semibold">5-Star</div>
              <div className="text-sm text-neutral-slate">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="text-2xl font-display font-bold text-white mb-4">
                🚌 Britannia Coaches
              </div>
              <p className="text-neutral-silver mb-6 leading-relaxed">
                Professional transportation services across the UK. Reliable, comfortable, and safe travel 
                for over 35 years. Your trusted partner for all transportation needs.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent-gold" />
                  <a href="tel:01462436125" className="text-white hover:text-accent-gold transition-colors">
                    01462 436125
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent-gold" />
                  <a href="mailto:info@britanniacoaches.co.uk" className="text-white hover:text-accent-gold transition-colors">
                    info@britanniacoaches.co.uk
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent-gold" />
                  <span className="text-neutral-silver">Hertfordshire, UK</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-accent-gold" />
                  <span className="text-neutral-silver">24/7 Emergency Service</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-neutral-silver hover:text-accent-gold transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-neutral-silver hover:text-accent-gold transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-neutral-silver hover:text-accent-gold transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-display font-semibold text-white mb-4">Our Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service}>
                    <a 
                      href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-neutral-silver hover:text-accent-gold transition-colors"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-display font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-neutral-silver hover:text-accent-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Operating Areas */}
            <div>
              <h3 className="text-lg font-display font-semibold text-white mb-4">Operating Areas</h3>
              <ul className="space-y-2">
                {operatingAreas.map((area) => (
                  <li key={area} className="text-neutral-silver">
                    {area}
                  </li>
                ))}
              </ul>

              {/* Emergency Contact */}
              <div className="mt-6 p-4 bg-britannia-red rounded-lg">
                <h4 className="text-white font-semibold mb-2">🚨 Emergency Service</h4>
                <p className="text-white text-sm mb-2">24/7 Available</p>
                <a 
                  href="tel:01462436125" 
                  className="text-white font-bold hover:text-accent-gold transition-colors"
                >
                  Call: 01462 436125
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-neutral-silver text-sm">
              © {currentYear} Britannia Coaches. All rights reserved. | Professional Transportation Services
            </div>
            
            {/* Certifications */}
            <div className="flex items-center gap-4 text-xs text-neutral-silver">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                DVSA Licensed
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-4 h-4" />
                CPT Certified
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                Passenger Safety
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;