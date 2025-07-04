import React from 'react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Safety First',
      description: 'All our coaches undergo regular safety inspections and our drivers are fully qualified and CRB checked for your peace of mind.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Comfort & Cleanliness',
      description: 'Our modern fleet features comfortable seating, climate control, and entertainment systems. Every coach is thoroughly cleaned before each journey.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Punctuality',
      description: 'We pride ourselves on reliability and punctuality. Our drivers plan routes carefully and arrive on time, every time.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Customer Service',
      description: 'From booking to drop-off, we provide exceptional customer service. Our team is always ready to help and ensure your satisfaction.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 4a2 2 0 012-2h6a2 2 0 012 2v2h2a2 2 0 012 2l1 5a2 2 0 01-2 2H9a2 2 0 01-2-2v-2H5a2 2 0 01-2-2V4z" />
        </svg>
      ),
      title: 'Competitive Pricing',
      description: 'We offer transparent, competitive pricing with no hidden costs. Get excellent value for professional transportation services.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Wide Coverage',
      description: 'Serving destinations across the UK with local knowledge and expertise. From short trips to long-distance journeys.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            Why Choose Britannia Coaches?
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            With over 25 years of experience in the transportation industry, we have built our reputation on reliability, 
            safety, and exceptional customer service. Here&apos;s what sets us apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-britannia-gray rounded-lg p-6 hover:shadow-britannia-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-britannia-red rounded-lg flex items-center justify-center text-white group-hover:bg-britannia-primary transition-colors duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-britannia-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-britannia-text leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-britannia-primary rounded-lg p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-britannia-light">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-britannia-light">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-britannia-light">Modern Coaches</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-britannia-light">On-Time Performance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;