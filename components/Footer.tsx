import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-railway-900 py-8 text-center text-gray-400 text-sm">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Manobreira Profissional. Todos os direitos reservados.</p>
        <p className="mt-2 text-xs opacity-50">Desenvolvido com dedicação.</p>
      </div>
    </footer>
  );
};

export default Footer;