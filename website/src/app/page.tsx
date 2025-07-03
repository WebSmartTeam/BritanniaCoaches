import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Phone, Mail, Clock, Users, Award, Shield,
  Star, CheckCircle, ArrowRight, Bus,
  Briefcase, GraduationCap, PartyPopper, Camera, Plane,
  Headphones, MapPin
} from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      icon: <Users className="w-8 h-8 text-britannia-primary" />,
      title: "Group Travel",
      description: "Comfortable transportation for groups of all sizes with professional drivers and modern coaches equipped with all amenities.",
      features: ["8-57 Passenger Capacity", "Professional Drivers", "Modern Fleet", "Flexible Scheduling"],
      href: "/services/group-travel"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-britannia-primary" />,
      title: "Corporate Transport",
      description: "Professional business transportation for conferences, meetings, executive travel and corporate events with premium comfort.",
      features: ["Executive Comfort", "WiFi Available", "Professional Service", "Flexible Booking"],
      href: "/services/corporate"
    },
    {
      icon: <Plane className="w-8 h-8 text-britannia-primary" />,
      title: "Airport Transfers",
      description: "Reliable airport transportation with punctual service, flight monitoring and professional drivers for stress-free travel.",
      features: ["Flight Monitoring", "Meet & Greet", "Luggage Assistance", "All UK Airports"],
      href: "/services/airport-transfers"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-britannia-primary" />,
      title: "School Transport",
      description: "Safe and reliable transportation for educational institutions, school trips and student travel with enhanced safety measures.",
      features: ["DBS Checked Drivers", "Safety First", "Educational Trips", "Regular Services"],
      href: "/services/school-transport"
    },
    {
      icon: <PartyPopper className="w-8 h-8 text-britannia-primary" />,
      title: "Special Events",
      description: "Wedding transportation, sporting events, celebrations and special occasion travel services with attention to detail.",
      features: ["Wedding Transport", "Sports Events", "Celebrations", "Special Occasions"],
      href: "/services/special-events"
    },
    {
      icon: <Camera className="w-8 h-8 text-britannia-primary" />,
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
      description: "Our flagship coaches for long-distance travel and corporate events"
    },
    {
      name: "Luxury Mini Coach", 
      capacity: "16-35 Passengers",
      features: ["Executive Seating", "Climate Control", "USB Charging", "Professional Driver", "Luggage Storage", "Entertainment"],
      description: "Perfect for smaller groups requiring premium comfort and style"
    },
    {
      name: "Mini Bus",
      capacity: "8-16 Passengers", 
      features: ["Comfortable Seating", "Air Conditioning", "Luggage Space", "Professional Service", "Easy Access", "Modern Design"],
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

  const whyChooseUs = [
    {
      icon: <Shield className="w-8 h-8 text-britannia-red" />,
      title: "Safety First",
      description: "Regular maintenance, professional drivers, comprehensive insurance, and strict safety protocols ensure your peace of mind on every journey."
    },
    {
      icon: <Clock className="w-8 h-8 text-britannia-red" />,
      title: "Always On Time", 
      description: "Reliable scheduling, advanced route planning, and professional service you can depend on for punctual arrival at your destination."
    },
    {
      icon: <Headphones className="w-8 h-8 text-britannia-red" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service and emergency support for your peace of mind, ensuring assistance whenever you need it."
    },
    {
      icon: <Award className="w-8 h-8 text-britannia-red" />,
      title: "Professional Excellence",
      description: "Licensed drivers, modern fleet, and award-winning service for over 35 years. Excellence is our standard, not our goal."
    }
  ];

  const stats = [
    { number: "35+", label: "Years Experience", icon: <Award className="w-6 h-6 text-britannia-red" /> },
    { number: "10,000+", label: "Happy Customers", icon: <Users className="w-6 h-6 text-britannia-red" /> },
    { number: "100%", label: "Licensed & Insured", icon: <Shield className="w-6 h-6 text-britannia-red" /> },
    { number: "24/7", label: "Emergency Service", icon: <Clock className="w-6 h-6 text-britannia-red" /> }
  ];

  return (
    <div className="min-h-screen bg-britannia-white">
      <Header />

      {/* Hero Section - White background with brand colors */}
      <section className="relative bg-britannia-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Brand Badge */}
              <div className="mb-8">
                <div className="inline-flex items-center bg-britannia-primary text-white px-6 py-3 rounded-full shadow-lg">
                  <Bus className="w-5 h-5 mr-3" />
                  <span className="font-bold">Britannia Coaches</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold text-britannia-text mb-6 leading-tight">
                Professional Coach
                <span className="block text-britannia-primary">Transportation</span>
                <span className="block text-2xl md:text-3xl font-normal text-britannia-text/70 mt-2">
                  Across the United Kingdom
                </span>
              </h1>
              
              <p className="text-xl text-britannia-text/80 mb-8 leading-relaxed">
                Reliable, comfortable, and safe travel for over 35 years. From corporate events to school trips, 
                airport transfers to special occasions - we&apos;re your trusted transportation partner.
              </p>
              
              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-britannia-light rounded-lg">
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-britannia-primary">{stat.number}</div>
                    <div className="text-sm text-britannia-text/70">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:01462436125" 
                  className="bg-gradient-to-r from-britannia-primary to-britannia-primary-dark hover:from-britannia-primary-dark hover:to-britannia-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <Phone size={20} />
                  Call 01462 436125
                </a>
                <a 
                  href="/quote" 
                  className="border-2 border-britannia-primary text-britannia-primary hover:bg-britannia-primary hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Get Free Quote
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>

            {/* Right Content - Coach Image Placeholder */}
            <div className="relative">
              <div className="bg-britannia-light rounded-2xl p-12 text-center min-h-[400px] flex items-center justify-center shadow-lg">
                <div className="text-britannia-text/60">
                  <Bus className="w-24 h-24 mx-auto mb-4 text-britannia-primary" />
                  <h3 className="text-xl font-semibold mb-2 text-britannia-text">Professional Coach Fleet</h3>
                  <p className="text-britannia-text/70">Modern, comfortable, and safe transportation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Light background */}
      <section className="py-16 md:py-20 bg-britannia-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-britannia-primary text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Transportation Services
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-britannia-text mb-6">
              Transportation Solutions
              <span className="block text-2xl md:text-3xl font-normal text-britannia-text/70 mt-2">For Every Occasion</span>
            </h2>
            <p className="text-xl text-britannia-text/80 max-w-3xl mx-auto leading-relaxed">
              Professional coach and bus services for every occasion. Whether you need corporate transport, 
              school trips, airport transfers, or special events - we have the perfect solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-britannia-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6 bg-britannia-light p-3 rounded-lg inline-block">{service.icon}</div>
                
                <h3 className="text-xl font-display font-semibold text-britannia-text mb-4">
                  {service.title}
                </h3>
                
                <p className="text-britannia-text/80 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-britannia-text">
                      <CheckCircle size={16} className="text-success flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={service.href}
                  className="inline-flex items-center gap-2 text-britannia-primary hover:text-britannia-red font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Showcase - White background */}
      <section className="py-16 md:py-20 bg-britannia-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-britannia-red text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Our Professional Fleet
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-britannia-text mb-6">
              Modern & Comfortable
              <span className="block text-2xl md:text-3xl font-normal text-britannia-text/70 mt-2">Transportation Fleet</span>
            </h2>
            <p className="text-xl text-britannia-text/80 max-w-3xl mx-auto leading-relaxed">
              Professional, comfortable, and safe coaches with modern amenities. 
              Our fleet is regularly maintained and equipped with the latest safety features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {fleetHighlights.map((coach, index) => (
              <div key={index} className="bg-britannia-light rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Coach Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-britannia-primary/10 to-britannia-primary/5 flex items-center justify-center">
                  <Bus className="w-16 h-16 text-britannia-primary" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-britannia-text mb-2">
                    {coach.name}
                  </h3>
                  <div className="text-britannia-red font-semibold mb-4">{coach.capacity}</div>
                  <p className="text-britannia-text/80 mb-4 text-sm leading-relaxed">{coach.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {coach.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-britannia-text">
                        <CheckCircle size={12} className="text-success" />
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
              className="inline-flex items-center gap-3 bg-gradient-to-r from-britannia-primary to-britannia-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              View Full Fleet
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Light background */}
      <section className="py-16 md:py-20 bg-britannia-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-britannia-red text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Why Choose Britannia Coaches
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-britannia-text mb-6">
              Excellence in Every Journey
            </h2>
            <p className="text-xl text-britannia-text/80 max-w-3xl mx-auto leading-relaxed">
              Over three decades of excellence in transportation services. 
              We&apos;re committed to safety, reliability, and exceptional customer service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-britannia-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex justify-center mb-6 bg-britannia-light p-4 rounded-full mx-auto w-fit">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-britannia-text mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-britannia-text/80 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - White background */}
      <section className="py-16 md:py-20 bg-britannia-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-britannia-primary text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              Customer Reviews
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-britannia-text mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-britannia-text/80 max-w-3xl mx-auto leading-relaxed">
              Don&apos;t just take our word for it. Read what our satisfied customers say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-britannia-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-britannia-text mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                
                <div className="border-t border-britannia-white pt-4">
                  <div className="font-semibold text-britannia-text">{testimonial.name}</div>
                  <div className="text-sm text-britannia-text/70">{testimonial.company}</div>
                  <div className="text-xs text-britannia-red font-medium mt-1">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/testimonials"
              className="inline-flex items-center gap-3 border-2 border-britannia-primary text-britannia-primary hover:bg-britannia-primary hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Read More Reviews
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA - Primary color background */}
      <section className="py-16 bg-gradient-to-r from-britannia-primary to-britannia-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Book Your Journey?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Get your free quote today or speak to our friendly team about your transportation needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:01462436125" 
                className="bg-britannia-red hover:bg-britannia-red-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-3 shadow-lg"
              >
                <Phone size={20} />
                Call 01462 436125
              </a>
              <a 
                href="/quote" 
                className="bg-white hover:bg-britannia-light text-britannia-primary px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-3 shadow-lg"
              >
                <Mail size={20} />
                Get Free Quote
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 text-britannia-red" />
                <span className="opacity-90">01462 436125</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5 text-britannia-red" />
                <span className="opacity-90">info@britanniacoaches.co.uk</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-britannia-red" />
                <span className="opacity-90">Serving UK Wide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}