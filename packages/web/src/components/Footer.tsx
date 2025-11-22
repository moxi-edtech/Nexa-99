import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 text-moxinexa-gray text-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Moxi Nexa Logo" className="h-7" />
          <span className="font-bold text-moxinexa-navy">Moxi Nexa</span>
        </div>
        <div className="text-center md:text-right">
          <p>&copy; 2024 Moxi Nexa. Feito com orgulho em Angola 🇦🇴</p>
          <p className="text-xs text-moxinexa-gray mt-1">Sistema de gestão escolar para a realidade angolana</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;