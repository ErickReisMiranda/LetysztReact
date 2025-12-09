import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { SITE_CONTENT } from '../constants';

const Contact: React.FC = () => {
  const { email, phone, location, linkedin } = SITE_CONTENT.contact;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 bg-railway-900 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 bg-safety-500 p-10 md:p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
              <p className="text-white/80 mb-10 leading-relaxed">
                Estou disponível para novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato através dos canais abaixo.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm opacity-70">Email</p>
                    <p className="font-medium">{email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm opacity-70">Telefone</p>
                    <p className="font-medium">{phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm opacity-70">Localização</p>
                    <p className="font-medium">{location}</p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <Linkedin className="shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-sm opacity-70">LinkedIn</p>
                    <p className="font-medium">{linkedin}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
               <p className="text-sm font-medium">Disponível para plantões e viagens.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 p-10 md:p-12 bg-white">
            <h3 className="text-2xl font-bold text-railway-900 mb-6">Envie uma mensagem</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-safety-500 focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-safety-500 focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Assunto</label>
                <input 
                  type="text" 
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-safety-500 focus:border-transparent outline-none transition-all"
                  placeholder="Motivo do contato"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensagem</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-safety-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Escreva sua mensagem aqui..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-railway-900 hover:bg-railway-800 text-white font-bold rounded-lg transition-colors w-full md:w-auto"
              >
                Enviar Mensagem
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;