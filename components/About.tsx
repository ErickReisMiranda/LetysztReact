import React from 'react';
import { SITE_CONTENT } from '../constants';

const About: React.FC = () => {
  const { title, description, profileImage } = SITE_CONTENT.about;

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute -inset-4 bg-safety-100 rounded-2xl transform -rotate-3 transition-transform group-hover:rotate-0 duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] md:aspect-[4/5]">
              <img
                src={profileImage}
                alt="Foto de Perfil"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">Manobreira Profissional</p>
                <p className="text-sm text-gray-300">Experiência & Dedicação</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-railway-900 mb-6 relative inline-block">
              {title}
              <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-safety-500 rounded-full"></span>
            </h2>
            
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              {description.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-railway-900 text-2xl">5+</h4>
                <p className="text-gray-500 text-sm">Anos de Experiência</p>
              </div>
              <div>
                <h4 className="font-bold text-railway-900 text-2xl">100%</h4>
                <p className="text-gray-500 text-sm">Compromisso com Segurança</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;