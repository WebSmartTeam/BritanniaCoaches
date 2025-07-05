import React from 'react'
import Image from 'next/image'
import { Calendar, Users, Award, Shield, MapPin, Clock } from 'lucide-react'

export default function AboutPage() {
  const milestones = [
    {
      year: '1999',
      title: 'Company Founded',
      description: 'Britannia Coaches was established with a single coach and a vision to provide professional transportation services.',
    },
    {
      year: '2005',
      title: 'Fleet Expansion',
      description: 'Expanded to 15 coaches, establishing ourselves as a trusted name in corporate and school transportation.',
    },
    {
      year: '2010',
      title: 'Safety Certification',
      description: 'Achieved full safety certification and implemented comprehensive driver training programs.',
    },
    {
      year: '2015',
      title: 'Technology Integration',
      description: 'Introduced GPS tracking, online booking systems, and modern coach amenities.',
    },
    {
      year: '2020',
      title: 'COVID-19 Adaptations',
      description: 'Implemented enhanced safety protocols and sanitization procedures during the pandemic.',
    },
    {
      year: '2024',
      title: 'Modern Fleet',
      description: 'Now operating 50+ modern coaches with latest safety features and eco-friendly options.',
    },
  ]

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Safety is our top priority. All drivers are professionally trained, DBS checked, and our fleet undergoes regular maintenance.',
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      description: 'We maintain the highest standards of professionalism in every aspect of our service delivery.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Every journey is tailored to meet our customers\' specific needs with personalized service and attention to detail.',
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Punctuality and reliability are fundamental to our service. We pride ourselves on being on time, every time.',
    },
  ]

  const stats = [
    { number: '25+', label: 'Years in Business', icon: Calendar },
    { number: '50+', label: 'Modern Coaches', icon: Users },
    { number: '1000+', label: 'Happy Customers', icon: Award },
    { number: '100%', label: 'Safety Record', icon: Shield },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              About Britannia Coaches
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              25+ years of excellence in professional coach transportation. 
              From humble beginnings to becoming one of the UK&apos;s most trusted coach operators.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-neutral-600 leading-relaxed">
                <p>
                  Founded in 1999, Britannia Coaches began as a small family business with a single coach 
                  and a commitment to providing safe, reliable transportation services. What started as a 
                  local operation has grown into one of the UK&apos;s most respected coach companies.
                </p>
                <p>
                  Over the past 25 years, we&apos;ve built our reputation on the foundation of exceptional service, 
                  safety, and reliability. Our team of professional drivers and modern fleet of coaches have 
                  safely transported over 100,000 passengers across the UK and Europe.
                </p>
                <p>
                  Today, we&apos;re proud to serve a diverse range of clients, from large corporations and schools 
                  to families and wedding parties. Every journey we undertake is approached with the same 
                  dedication to excellence that has defined us since day one.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/premium/luxury-coach-5.jpg"
                  alt="Britannia Coaches - Professional Transportation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              From a single coach to a modern fleet, here&apos;s how we&apos;ve grown while maintaining our commitment to excellence.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-primary-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center relative z-10 flex-shrink-0">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} pl-6 md:pl-0`}>
                    <div className="card p-6">
                      <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3">{milestone.title}</h3>
                      <p className="text-neutral-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
              Professional Team
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Our experienced team of drivers and support staff are the backbone of our service excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Professional Drivers
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                All our drivers are professionally trained, DBS checked, and committed to providing 
                the highest level of customer service.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Safety Certified
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Every team member undergoes comprehensive safety training and regular assessments 
                to ensure the highest safety standards.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Customer Service
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Our customer service team is available 24/7 to assist with bookings, 
                changes, and any questions you may have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding bg-neutral-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Our Location
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Based in Birmingham, we serve clients across the UK and Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                  Head Office & Depot
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <p className="font-medium text-neutral-900">Birmingham, UK</p>
                      <p className="text-neutral-600">Centrally located for UK-wide coverage</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary-600 mt-1" />
                    <div>
                      <p className="font-medium text-neutral-900">Office Hours</p>
                      <p className="text-neutral-600">Mon-Fri: 7:00 AM - 10:00 PM</p>
                      <p className="text-neutral-600">Sat-Sun: 8:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">UK Coverage</h4>
                <p className="text-neutral-600">
                  We provide services across England, Scotland, and Wales.
                </p>
              </div>
              <div className="card p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">European Travel</h4>
                <p className="text-neutral-600">
                  Long-distance services to major European destinations.
                </p>
              </div>
              <div className="card p-6">
                <h4 className="font-semibold text-neutral-900 mb-2">24/7 Support</h4>
                <p className="text-neutral-600">
                  Emergency contact available around the clock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}