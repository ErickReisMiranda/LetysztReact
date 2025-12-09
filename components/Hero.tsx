import React from 'react';
import { ArrowDown } from 'lucide-react';
import { SITE_CONTENT } from '../constants';

const Hero: React.FC = () => {
  const { title, subtitle, backgroundImage } = SITE_CONTENT.hero;

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Ferrovia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-railway-900/90 to-railway-800/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="inline-block px-3 py-1 mb-6 border border-safety-500/50 rounded-full bg-safety-500/10 backdrop-blur-sm">
          <span className="text-safety-400 text-sm font-semibold tracking-wider uppercase">Portfólio Profissional</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-safety-500 hover:bg-safety-600 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-safety-500/25"
          >
            Entrar em Contato
          </a>
          <a
            href="#about"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg backdrop-blur-sm transition-all border border-white/20"
          >
            Saiba Mais
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};

export default Hero;