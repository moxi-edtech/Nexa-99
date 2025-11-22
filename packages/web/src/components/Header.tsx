import React from 'react'
import { ArrowRight } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300 shadow-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img src="/logo.png" alt="Moxi Nexa Logo" className="h-10 w-auto" />
          </a>
          
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-moxinexa-gray">
            <a href="#calculadora" className="hover:text-moxinexa-teal transition-colors font-semibold">Calculadora</a>
            <a href="#beneficios" className="hover:text-moxinexa-teal transition-colors font-semibold">Porquê Moxi</a>
            <a href="#cases" className="hover:text-moxinexa-teal transition-colors font-semibold">Resultados</a>
          </nav>

          {/* Urgent CTA with counter */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-xs text-orange-700 font-semibold urgent-badge">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span id="demoCounter">5 demonstrações hoje</span>
            </div>
            <a href="https://wa.me/244923456789" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-moxinexa-teal hover:bg-teal-600 text-white px-4 py-2 rounded-lg transition-all text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5">
              <span>Falar com Consultor</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header