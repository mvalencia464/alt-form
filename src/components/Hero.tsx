import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  // Trade show images for background grid
  const backgroundImages = [
    'https://storage.googleapis.com/msgsndr/rlPIrRx253CZBZYwMMFj/media/68a8bbe21614bd04ceb29f1e.webp',
    'https://storage.googleapis.com/msgsndr/rlPIrRx253CZBZYwMMFj/media/68a8bbe23a9e2911afb28d01.webp',
    'https://storage.googleapis.com/msgsndr/rlPIrRx253CZBZYwMMFj/media/68a8bbe23a9e29847fb28d11.webp',
    'https://storage.googleapis.com/msgsndr/rlPIrRx253CZBZYwMMFj/media/68a8bbe254a62612acc87743.webp',
    'https://storage.googleapis.com/msgsndr/rlPIrRx253CZBZYwMMFj/media/68a8bbe254a6266c49c87744.webp',
    'https://storage.googleapis.com/msgsndr/rlPIrRx253CZBZYwMMFj/media/68a8bbe25f2e6e38069baa10.webp',
    'https://storage.googleapis.com/msgsndr/rlPIrRx253CZBZYwMMFj/media/68a8bbe25f2e6e9bb39baa1b.webp',
    'https://storage.googleapis.com/msgsndr/rlPIrRx253CZBZYwMMFj/media/68a8bbe25f2e6eca709baa11.webp',
    'https://storage.googleapis.com/msgsndr/rlPIrRx253CZBZYwMMFj/media/68a8bbe27dc6b0918f8588db.webp',
    'https://storage.googleapis.com/msgsndr/rlPIrRx253CZBZYwMMFj/media/68a8bbe29c19c00757f1b00d.webp',
    'https://storage.googleapis.com/msgsndr/rlPIrRx253CZBZYwMMFj/media/68a8bbe29c19c07979f1b00c.webp',
    'https://storage.googleapis.com/msgsndr/rlPIrRx253CZBZYwMMFj/media/68a8bbe2b199f3495af4b7aa.webp'
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 py-20 lg:py-32 overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.webp"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        {/* Gradient overlay - fades from left (existing colors) to right (low opacity image) */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-slate-900/80 to-transparent"></div>
      </div>
      
      {/* Background Image Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="grid grid-cols-6 gap-2 h-full w-full">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg"
              style={{
                gridRow: `span ${Math.floor(Math.random() * 2) + 1}`,
                animationDelay: `${index * 0.3}s`
              }}
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover opacity-40 hover:opacity-70 transition-all duration-2000 transform hover:scale-105"
                style={{
                  filter: 'grayscale(80%) contrast(1.3) brightness(0.8)',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-gray-900/40 to-slate-800/60"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400/35 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-300/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                className="brand-button text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group shadow-lg shadow-yellow-500/25"
              >
                Start your free design today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-yellow-400/50 text-yellow-300 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500/20 hover:border-yellow-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                View Services
              </button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800/50 to-gray-900/50 backdrop-blur-sm border border-slate-700/50">
              <img
                src="https://storage.googleapis.com/msgsndr/rlPIrRx253CZBZYwMMFj/media/689951c7d580d6c4095814fa.webp"
                alt="Trade Show Exhibition"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-md border border-slate-600/50 rounded-xl p-4 shadow-xl floating-animation">
              <div className="text-2xl font-bold text-yellow-400">30+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-md border border-slate-600/50 rounded-xl p-4 shadow-xl floating-animation" style={{ animationDelay: '2s' }}>
              <div className="text-2xl font-bold text-orange-400">200+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;