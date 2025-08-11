import React from 'react';
import { Palette, Hammer, Truck, Package, Zap } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Exhibit Design & Build',
    description: 'Custom exhibit design and construction that captures your brand and engages your audience.',
    features: ['Custom Design', '3D Visualization', 'Quality Construction', 'Brand Integration'],
    color: 'from-pink-500 to-purple-500',
    glowColor: 'shadow-pink-500/25'
  },
  {
    icon: Zap,
    title: 'Graphics Solutions',
    description: 'Eye-catching graphics and signage that make your booth stand out from the competition.',
    features: ['Large Format Printing', 'Digital Graphics', 'Fabric Displays', 'LED Solutions'],
    color: 'from-orange-500 to-yellow-500',
    glowColor: 'shadow-orange-500/25'
  },
  {
    icon: Hammer,
    title: 'I&D Services',
    description: 'Professional installation and dismantle services ensuring your exhibit is perfect.',
    features: ['Expert Installation', 'Timely Setup', 'Safe Dismantle', 'Quality Assurance'],
    color: 'from-green-500 to-emerald-500',
    glowColor: 'shadow-green-500/25'
  },
  {
    icon: Truck,
    title: 'Freight Logistics',
    description: 'Comprehensive logistics management from warehouse to show floor and back.',
    features: ['Shipping Coordination', 'Customs Handling', 'Tracking Services', 'Damage Protection'],
    color: 'from-cyan-500 to-blue-500',
    glowColor: 'shadow-cyan-500/25'
  },
  {
    icon: Package,
    title: 'Storage Solutions',
    description: 'Secure storage facilities to keep your exhibit materials safe between shows.',
    features: ['Climate Controlled', 'Secure Facilities', 'Inventory Management', 'Easy Access'],
    color: 'from-purple-500 to-indigo-500',
    glowColor: 'shadow-purple-500/25'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Complete Trade Show Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Form 4 Design offers a full range of services including design, printing, production, and
            installation. We oversee all aspects of show logistics from beginning to end with over 30
            years of industry expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="brand-card rounded-xl p-6 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="brand-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Make Your Next Trade Show a Success?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss your project and create a custom solution that fits your needs and budget.
            </p>
            <button 
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="brand-button text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Quote Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;