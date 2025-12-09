import React from 'react';
import { ShieldCheck, Users, Eye, Activity, LucideIcon } from 'lucide-react';
import { SITE_CONTENT } from '../constants';

const iconMap: { [key: string]: LucideIcon } = {
  ShieldCheck,
  Users,
  Eye,
  Activity
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-railway-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-railway-900 mb-4">
            Principais Qualidades
          </h2>
          <p className="text-gray-600">
            Habilidades técnicas e comportamentais desenvolvidas ao longo de anos de prática e treinamento contínuo no setor ferroviário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SITE_CONTENT.qualities.map((quality, index) => {
            const Icon = iconMap[quality.iconName] || Activity;
            
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-safety-500 group"
              >
                <div className="w-14 h-14 bg-railway-100 rounded-lg flex items-center justify-center text-railway-700 mb-6 group-hover:bg-safety-500 group-hover:text-white transition-colors duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-railway-900 mb-3 group-hover:text-safety-600 transition-colors">
                  {quality.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {quality.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;