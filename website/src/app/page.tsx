import { Phone, Mail, MapPin, Clock, Users, Award, Shield, Heart } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-britannia-blue text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-display font-bold">
              Britannia Coaches
            </div>
            <div className="flex items-center gap-6">
              <a href="tel:01462436125" className="flex items-center gap-2 hover:text-accent-gold transition-colors">
                <Phone size={20} />
                <span className="hidden md:inline">01462 436125</span>
              </a>
              <a href="mailto:info@britanniacoaches.co.uk" className="flex items-center gap-2 hover:text-accent-gold transition-colors">
                <Mail size={20} />
                <span className="hidden md:inline">Get Quote</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-britannia-blue to-britannia-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Professional Coach Transportation
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Reliable, comfortable, and safe travel across the UK. 35+ years of trusted service for all your transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:01462436125" 
              className="bg-britannia-red hover:bg-britannia-red-dark px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Call 01462 436125
            </a>
            <a 
              href="#quote" 
              className="border-2 border-white hover:bg-white hover:text-britannia-blue px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-britannia-blue mb-4">
              Our Transportation Services
            </h2>
            <p className="text-lg text-neutral-slate max-w-2xl mx-auto">
              Professional coach and bus services for every occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-britannia-blue" />,
                title: "Group Travel",
                description: "Comfortable transportation for groups of all sizes with professional drivers."
              },
              {
                icon: <MapPin className="w-12 h-12 text-britannia-blue" />,
                title: "UK Tours",
                description: "Sightseeing tours and day trips across beautiful destinations in the UK."
              },
              {
                icon: <Clock className="w-12 h-12 text-britannia-blue" />,
                title: "Airport Transfers",
                description: "Reliable airport transportation with punctual service and flight monitoring."
              },
              {
                icon: <Award className="w-12 h-12 text-britannia-blue" />,
                title: "Corporate Travel",
                description: "Professional business transportation for conferences, meetings, and events."
              },
              {
                icon: <Shield className="w-12 h-12 text-britannia-blue" />,
                title: "School Transport",
                description: "Safe and reliable transportation for educational institutions and school trips."
              },
              {
                icon: <Heart className="w-12 h-12 text-britannia-blue" />,
                title: "Special Events",
                description: "Wedding transportation, sporting events, and special occasion travel."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-britannia transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-display font-semibold text-britannia-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-slate">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-britannia-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
            Why Choose Britannia Coaches?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "35+", label: "Years Experience" },
              { number: "100%", label: "Licensed & Insured" },
              { number: "5-Star", label: "Customer Rating" },
              { number: "24/7", label: "Professional Service" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-display font-bold text-accent-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="quote" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-britannia-blue mb-8">
            Get Your Free Quote Today
          </h2>
          <p className="text-lg text-neutral-slate mb-8 max-w-2xl mx-auto">
            Contact us for a personalized quote for your transportation needs. Professional service guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:01462436125" 
              className="flex items-center gap-3 bg-britannia-red hover:bg-britannia-red-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <Phone size={24} />
              Call 01462 436125
            </a>
            <a 
              href="mailto:info@britanniacoaches.co.uk" 
              className="flex items-center gap-3 border-2 border-britannia-blue text-britannia-blue hover:bg-britannia-blue hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              <Mail size={24} />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-charcoal text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">Britannia Coaches</h3>
              <p className="text-neutral-silver mb-4">
                Professional transportation services across the UK. Reliable, comfortable, and safe travel for over 35 years.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-display font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-neutral-silver">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>01462 436125</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>info@britanniacoaches.co.uk</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Hertfordshire, UK</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-display font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-neutral-silver">
                <li>Group Travel</li>
                <li>Airport Transfers</li>
                <li>Corporate Transport</li>
                <li>School Trips</li>
                <li>Special Events</li>
                <li>UK Tours</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-slate mt-8 pt-8 text-center text-neutral-silver">
            <p>&copy; 2025 Britannia Coaches. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}