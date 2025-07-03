import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Phone, Mail, Clock, Users, Award, Shield,
  Star, CheckCircle, ArrowRight, Bus,
  Briefcase, GraduationCap, PartyPopper, Camera, Plane,
  Headphones
} from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      icon: <Users className="w-16 h-16 text-britannia-blue" />,
      title: "Group Travel",
      description: "Comfortable transportation for groups of all sizes with professional drivers and modern coaches equipped with all amenities.",
      features: ["8-57 Passenger Capacity", "Professional Drivers", "Modern Fleet", "Flexible Scheduling"],
      href: "/services/group-travel"
    },
    {
      icon: <Briefcase className="w-16 h-16 text-britannia-blue" />,
      title: "Corporate Transport",
      description: "Professional business transportation for conferences, meetings, executive travel and corporate events with premium comfort.",
      features: ["Executive Comfort", "WiFi Available", "Professional Service", "Flexible Booking"],
      href: "/services/corporate"
    },
    {
      icon: <Plane className="w-16 h-16 text-britannia-blue" />,
      title: "Airport Transfers",
      description: "Reliable airport transportation with punctual service, flight monitoring and professional drivers for stress-free travel.",
      features: ["Flight Monitoring", "Meet & Greet", "Luggage Assistance", "All UK Airports"],
      href: "/services/airport-transfers"
    },
    {
      icon: <GraduationCap className="w-16 h-16 text-britannia-blue" />,
      title: "School Transport",
      description: "Safe and reliable transportation for educational institutions, school trips and student travel with enhanced safety measures.",
      features: ["DBS Checked Drivers", "Safety First", "Educational Trips", "Regular Services"],
      href: "/services/school-transport"
    },
    {
      icon: <PartyPopper className="w-16 h-16 text-britannia-blue" />,
      title: "Special Events",
      description: "Wedding transportation, sporting events, celebrations and special occasion travel services with attention to detail.",
      features: ["Wedding Transport", "Sports Events", "Celebrations", "Special Occasions"],
      href: "/services/special-events"
    },
    {
      icon: <Camera className="w-16 h-16 text-britannia-blue" />,
      title: "UK Day Tours",
      description: "Sightseeing tours and day trips across beautiful destinations throughout the United Kingdom with expert guidance.",
      features: ["Scenic Routes", "Historic Sites", "Custom Tours", "Expert Guides"],
      href: "/services/day-tours"
    }
  ];

  const fleetHighlights = [
    {
      name: "Executive Coach",
      capacity: "49-57 Passengers",
      features: ["Reclining Seats", "Air Conditioning", "Toilet Facilities", "Entertainment System", "WiFi Available", "Professional Driver"],
      image: "🚌",
      description: "Our flagship coaches for long-distance travel and corporate events"
    },
    {
      name: "Luxury Mini Coach",
      capacity: "16-35 Passengers",
      features: ["Executive Seating", "Climate Control", "USB Charging", "Professional Driver", "Luggage Storage", "Entertainment"],
      image: "🚐",
      description: "Perfect for smaller groups requiring premium comfort and style"
    },
    {
      name: "Mini Bus",
      capacity: "8-16 Passengers",
      features: ["Comfortable Seating", "Air Conditioning", "Luggage Space", "Professional Service", "Easy Access", "Modern Design"],
      image: "🚌",
      description: "Ideal for local trips, airport transfers and small group travel"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      text: "Britannia Coaches provided exceptional service for our corporate event. Professional drivers, punctual service, and comfortable coaches. Our team was impressed with the attention to detail and reliability. Highly recommended for any business transportation needs!",
      rating: 5,
      service: "Corporate Transport"
    },
    {
      name: "Michael Chen",
      company: "St. Mary's School",
      text: "Outstanding service for our school trips. The drivers are experienced with children, and safety is clearly their top priority. Parents and teachers are always impressed with the professionalism and care shown by the entire team.",
      rating: 5,
      service: "School Transport"
    },
    {
      name: "Emma Thompson",
      company: "Wedding Party",
      text: "Perfect wedding transportation! The coach was immaculate, the driver was professional and friendly. Made our special day even more memorable. The service exceeded our expectations and helped make our wedding day stress-free.",
      rating: 5,
      service: "Wedding Transport"
    }
  ];

  const stats = [
    { number: "35+", label: "Years Experience", icon: <Award className="w-10 h-10 text-accent-gold" /> },
    { number: "10,000+", label: "Happy Customers", icon: <Users className="w-10 h-10 text-accent-gold" /> },
    { number: "100%", label: "Licensed & Insured", icon: <Shield className="w-10 h-10 text-accent-gold" /> },
    { number: "5-Star", label: "Average Rating", icon: <Star className="w-10 h-10 text-accent-gold" /> },
    { number: "24/7", label: "Emergency Service", icon: <Clock className="w-10 h-10 text-accent-gold" /> },
    { number: "50+", label: "Modern Coaches", icon: <Bus className="w-10 h-10 text-accent-gold" /> }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-16 h-16 text-accent-gold" />,
      title: "Safety First",
      description: "Regular maintenance, professional drivers, comprehensive insurance, and strict safety protocols ensure your peace of mind on every journey."
    },
    {
      icon: <Clock className="w-16 h-16 text-accent-gold" />,
      title: "Always On Time",
      description: "Reliable scheduling, advanced route planning, and professional service you can depend on for punctual arrival at your destination."
    },
    {
      icon: <Headphones className="w-16 h-16 text-accent-gold" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service and emergency support for your peace of mind, ensuring assistance whenever you need it."
    },
    {
      icon: <Award className="w-16 h-16 text-accent-gold" />,
      title: "Professional Excellence",
      description: "Licensed drivers, modern fleet, and award-winning service for over 35 years. Excellence is our standard, not our goal."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-britannia-blue via-britannia-blue-dark to-slate-800 text-white py-24 md:py-40 overflow-hidden">
        {/* Modern Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold rounded-full opacity-5 -translate-y-48 translate-x-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-britannia-red rounded-full opacity-5 translate-y-40 -translate-x-40 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block bg-accent-gold text-britannia-blue px-6 py-2 rounded-full text-sm font-semibold mb-6">
                🚌 Trusted for 35+ Years
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight">
              Professional Coach
              <span className="block bg-gradient-to-r from-accent-gold to-yellow-300 bg-clip-text text-transparent">
                Transportation
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl text-neutral-silver mt-4">
                Across the UK
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 opacity-90 leading-relaxed max-w-4xl mx-auto">
              Reliable, comfortable, and safe travel for over 35 years. From corporate events to school trips, 
              airport transfers to special occasions - we&apos;re your trusted transportation partner.
            </p>
            
            {/* Enhanced Stats Display */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12 max-w-4xl mx-auto">
              {stats.slice(0, 6).map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-accent-gold">{stat.number}</div>
                  <div className="text-xs md:text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:01462436125" 
                className="group bg-britannia-red hover:bg-britannia-red-dark px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center gap-3 hover:scale-105 shadow-2xl"
              >
                <Phone size={24} className="group-hover:animate-pulse" />
                Call 01462 436125
              </a>
              <a 
                href="/quote" 
                className="group border-2 border-white hover:bg-white hover:text-britannia-blue px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center gap-3 hover:scale-105"
              >
                Get Free Quote
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            {/* Emergency Contact Bar */}
            <div className="mt-12 bg-britannia-red/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 inline-block">
              <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-accent-gold animate-pulse" />
                  <span className="font-semibold">24/7 Emergency Service Available</span>
                </div>
                <div className="h-6 w-px bg-white/30"></div>
                <div className="flex items-center gap-2">
                  <Phone className="w-6 h-6 text-accent-gold" />
                  <span className="text-xl font-bold">01462 436125</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-light to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-britannia-blue text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Professional Services
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-britannia-blue mb-8">
              Transportation Solutions
              <span className="block text-3xl md:text-4xl text-neutral-slate mt-2">For Every Occasion</span>
            </h2>
            <p className="text-xl md:text-2xl text-neutral-slate max-w-4xl mx-auto leading-relaxed">
              Professional coach and bus services for every occasion. Whether you need corporate transport, 
              school trips, airport transfers, or special events - we have the perfect solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-neutral-light overflow-hidden relative">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-britannia-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="mb-8 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  
                  <h3 className="text-2xl font-display font-bold text-britannia-blue mb-6 group-hover:text-britannia-red transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-slate mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-neutral-charcoal">
                        <CheckCircle size={20} className="text-success flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={service.href}
                    className="inline-flex items-center gap-3 text-britannia-blue hover:text-britannia-red font-bold text-lg transition-colors group/link"
                  >
                    Learn More
                    <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Fleet Showcase */}
      <section className="py-24 bg-britannia-blue text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block bg-accent-gold text-britannia-blue px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Professional Fleet
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
              Modern & Comfortable
              <span className="block text-3xl md:text-4xl text-accent-gold mt-2">Transportation Fleet</span>
            </h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              Professional, comfortable, and safe coaches with modern amenities. 
              Our fleet is regularly maintained and equipped with the latest safety features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {fleetHighlights.map((coach, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/15 transition-all duration-300 border border-white/20">
                <div className="p-10 text-center">
                  <div className="text-8xl mb-6">{coach.image}</div>
                  <h3 className="text-2xl font-display font-bold mb-3">
                    {coach.name}
                  </h3>
                  <div className="text-accent-gold font-bold text-xl mb-6">{coach.capacity}</div>
                  <p className="text-white/80 mb-8 leading-relaxed">{coach.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {coach.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle size={16} className="text-accent-gold" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/fleet"
              className="inline-flex items-center gap-3 bg-accent-gold hover:bg-accent-gold-dark text-britannia-blue px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105"
            >
              View Full Fleet
              <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us */}
      <section className="py-24 bg-gradient-to-b from-white to-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-britannia-red text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Why Choose Britannia Coaches
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-britannia-blue mb-8">
              Excellence in Every Journey
            </h2>
            <p className="text-xl md:text-2xl text-neutral-slate max-w-4xl mx-auto leading-relaxed">
              Over three decades of excellence in transportation services. 
              We&apos;re committed to safety, reliability, and exceptional customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {whyChooseUs.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-britannia-blue mb-6">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-slate leading-relaxed text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-block bg-accent-gold text-britannia-blue px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Customer Reviews
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-britannia-blue mb-8">
              What Our Customers Say
            </h2>
            <p className="text-xl md:text-2xl text-neutral-slate max-w-4xl mx-auto leading-relaxed">
              Don&apos;t just take our word for it. Read what our satisfied customers say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-light hover:-translate-y-2">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-accent-gold fill-current" />
                  ))}
                </div>
                
                <p className="text-neutral-charcoal mb-8 leading-relaxed italic text-lg">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                <div className="border-t border-neutral-light pt-6">
                  <div className="font-bold text-britannia-blue text-lg">{testimonial.name}</div>
                  <div className="text-neutral-slate">{testimonial.company}</div>
                  <div className="text-sm text-britannia-red font-semibold mt-2">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/testimonials"
              className="inline-flex items-center gap-3 border-2 border-britannia-blue text-britannia-blue hover:bg-britannia-blue hover:text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105"
            >
              Read More Reviews
              <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Contact CTA */}
      <section className="py-24 bg-gradient-to-r from-accent-gold via-amber-500 to-yellow-500 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-bl from-white/20 via-transparent to-white/10" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-britannia-blue mb-8">
            Ready to Book Your Journey?
          </h2>
          <p className="text-xl md:text-2xl text-britannia-blue/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Get your free quote today or speak to our friendly team about your transportation needs. 
            We&apos;re here to make your journey comfortable and stress-free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a 
              href="tel:01462436125" 
              className="group bg-britannia-red hover:bg-britannia-red-dark text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center gap-4 hover:scale-105 shadow-2xl"
            >
              <Phone size={28} className="group-hover:animate-pulse" />
              Call 01462 436125
            </a>
            <a 
              href="/quote" 
              className="group bg-white hover:bg-neutral-light text-britannia-blue px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center gap-4 hover:scale-105 shadow-2xl"
            >
              <Mail size={28} />
              Get Free Quote
              <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* Contact Information */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <Phone className="w-8 h-8 text-britannia-blue mx-auto mb-3" />
              <div className="text-britannia-blue font-bold">Phone</div>
              <div className="text-britannia-blue/80">01462 436125</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <Mail className="w-8 h-8 text-britannia-blue mx-auto mb-3" />
              <div className="text-britannia-blue font-bold">Email</div>
              <div className="text-britannia-blue/80">info@britanniacoaches.co.uk</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <Clock className="w-8 h-8 text-britannia-blue mx-auto mb-3" />
              <div className="text-britannia-blue font-bold">Available</div>
              <div className="text-britannia-blue/80">24/7 Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}