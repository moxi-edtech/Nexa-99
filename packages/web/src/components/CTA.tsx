import React from 'react';
import { Zap, MessageCircle } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const CTA: React.FC = () => {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto bg-moxinexa-navy rounded-2xl p-10 text-center shadow-2xl relative overflow-hidden fade-in-section ${isVisible ? 'visible' : ''}`}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-moxinexa-navy to-gray-900 z-0"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-moxinexa-teal opacity-20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-5">
              Traga suas planilhas. Nós trazemos a solução.
            </h2>
            <p className="text-gray-300 mb-7 max-w-2xl mx-auto">
              A demonstração leva 20 minutos. Se não provarmos que você pode recuperar pelo menos 10x o valor do sistema no primeiro mês, não fazemos negócio.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-7 max-w-md mx-auto">
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 bg-moxinexa-teal rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap size={20} />
                </div>
                <div className="text-left">
                  <p className="font-semibold">Oferta Limitada</p>
                  <p className="text-sm text-gray-300">Apenas 3 vagas para implementação este mês</p>
                </div>
              </div>
            </div>
            
            <a href="https://wa.me/244923456789?text=Quero%20agendar%20o%20diagnóstico%20gratuito%20do%20Moxi%20Nexa" target="_blank" 
            className="inline-flex items-center gap-3 bg-moxinexa-teal hover:bg-teal-400 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl shadow-teal-900/50">
              <MessageCircle size={20} />
              Agendar Diagnóstico no WhatsApp
            </a>
            
            <p className="mt-6 text-sm text-gray-400">
              Sem compromisso • Implementação local em Luanda • Suporte em Português de Angola
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;