import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-black py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-orange-500/20 to-cyan-500/20"></div>
      </div>
      
      {/* Neon Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 128, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 128, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">

            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Trade Show
              <span className="block brand-accent">
                Excellence
              </span>
              Delivered
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From concept to completion, Form 4 Design delivers comprehensive trade show solutions
              with over 30 years of industry expertise. We handle design, printing, production, and
              installation to ensure your success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="brand-button text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                View Services
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl brand-card">
              <img
                src="https://storage.googleapis.com/msgsndr/rlPIrRx253CZBZYwMMFj/media/689951c7d580d6c4095814fa.webp"
                alt="Trade Show Exhibition"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 brand-card rounded-xl p-4 shadow-xl floating-animation">
              <div className="text-2xl font-bold brand-accent">30+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>

            <div className="absolute -top-6 -right-6 brand-card rounded-xl p-4 shadow-xl floating-animation" style={{ animationDelay: '2s' }}>
              <div className="text-2xl font-bold brand-accent">200+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;