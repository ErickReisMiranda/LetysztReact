
import React from 'react';
import { SITE_CONTENT } from '../constants';
import { Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  const { gallery } = SITE_CONTENT;

  if (!gallery || gallery.length === 0) return null;

  return (
    <section id="gallery" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="p-3 bg-safety-100 rounded-full text-safety-600 mb-4">
            <Camera size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-railway-900 mb-4">
            Galeria Operacional
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Registros visuais das operações, equipamentos e rotina de trabalho no ambiente ferroviário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] cursor-pointer">
              <img 
                src={item.url} 
                alt={item.description}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
