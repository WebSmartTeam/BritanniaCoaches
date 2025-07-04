import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Corporate Events',
      description: 'Professional transportation for business meetings, conferences, and corporate events. Reliable service that reflects your company&apos;s professionalism.',
      features: ['Executive coaches', 'Wi-Fi available', 'Professional drivers', 'Flexible scheduling'],
      image: '/images/coaches/placeholder_cover-1024x458.jpg',
      href: '/services#corporate',
    },
    {
      title: 'School Trips',
      description: 'Safe and comfortable transportation for educational trips and school events. All drivers are DBS checked and experienced with school groups.',
      features: ['Safety certified', 'DBS checked drivers', 'Seat belts', 'Competitive rates'],
      image: '/images/coaches/placeholder_cover-1024x458.jpg',
      href: '/services#school',
    },
    {
      title: 'Wedding Transportation',
      description: 'Make your special day perfect with our elegant wedding transportation services. From bridal parties to guest transfers.',
      features: ['Decorated coaches', 'Flexible timings', 'Professional service', 'Special occasion pricing'],
      image: '/images/coaches/placeholder_cover-1024x458.jpg',
      href: '/services#wedding',
    },
    {
      title: 'Airport Transfers',
      description: 'Stress-free airport transfers for groups of any size. Door-to-door service with flight monitoring and professional drivers.',
      features: ['Flight monitoring', 'Meet & greet', 'Luggage assistance', '24/7 availability'],
      image: '/images/coaches/placeholder_cover-1024x458.jpg',
      href: '/services#airport',
    },
    {
      title: 'Day Trips & Excursions',
      description: 'Comfortable transportation for day trips, shopping excursions, and leisure activities. Perfect for groups and organizations.',
      features: ['Comfortable seating', 'Entertainment systems', 'Rest stops', 'Tour planning'],
      image: '/images/coaches/placeholder_cover-1024x458.jpg',
      href: '/services#day-trips',
    },
    {
      title: 'Special Events',
      description: 'Transportation for concerts, sports events, festivals, and other special occasions. Group bookings welcome.',
      features: ['Large groups', 'Event coordination', 'Multiple pickups', 'Flexible returns'],
      image: '/images/coaches/placeholder_cover-1024x458.jpg',
      href: '/services#special-events',
    },
  ];

  return (
    <section className="section-padding bg-britannia-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            Our Transportation Services
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            From corporate events to family celebrations, we provide comprehensive transportation solutions 
            tailored to your specific needs. Our professional service ensures every journey is comfortable and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-britannia hover:shadow-britannia-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-britannia-primary bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-britannia-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-britannia-text mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-britannia-red flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-britannia-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={service.href}
                  className="inline-flex items-center text-britannia-primary hover:text-britannia-red font-medium transition-colors duration-200"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-britannia p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-britannia-primary mb-4">
              Need Custom Transportation?
            </h3>
            <p className="text-britannia-text mb-6">
              Don&apos;t see exactly what you need? We specialize in creating custom transportation solutions 
              for unique requirements and special occasions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary text-center"
              >
                Get Custom Quote
              </Link>
              <a
                href="tel:01462436125"
                className="btn-outline text-center"
              >
                Call: 01462 436125
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;