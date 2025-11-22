import React from 'react';
import { DollarSign, Users, BarChart3, WifiOff } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const PainPoints: React.FC = () => {
  const { ref: ref1, isVisible: isVisible1 } = useFadeIn();
  const { ref: ref2, isVisible: isVisible2 } = useFadeIn();
  const { ref: ref3, isVisible: isVisible3 } = useFadeIn();
  const { ref: ref4, isVisible: isVisible4 } = useFadeIn();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 fade-in-section">
          <span className="text-moxinexa-teal font-bold tracking-wide uppercase text-sm">Problemas Comuns</span>
          <h2 className="text-3xl font-bold text-moxinexa-navy mt-3 mb-4">
            Estas dores são familiares?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Pain Point 1 */}
          <div 
            ref={ref1}
            className={`bg-red-50 border border-red-100 rounded-xl p-6 fade-in-section ${isVisible1 ? 'visible' : ''}`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
                <DollarSign size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-moxinexa-navy mb-2">Dinheiro que entra mas não aparece</h3>
                <p className="text-moxinexa-gray text-sm">
                  Você sabe que tem receita, mas não consegue controlar quanto realmente entra. Pagamentos se perdem em cadernos, mensagens e planilhas desorganizadas.
                </p>
              </div>
            </div>
          </div>

          {/* Pain Point 2 */}
          <div 
            ref={ref2}
            className={`bg-orange-50 border border-orange-100 rounded-xl p-6 fade-in-section ${isVisible2 ? 'visible' : ''}`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                <Users size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-moxinexa-navy mb-2">Secretária sobrecarregada com cobranças</h3>
                <p className="text-moxinexa-gray text-sm">
                  Sua equipe passa mais tempo correndo atrás de pagamentos do que atendendo pais e alunos. Isso gera atrito e desgaste desnecessário.
                </p>
              </div>
            </div>
          </div>

          {/* Pain Point 3 */}
          <div 
            ref={ref3}
            className={`bg-blue-50 border border-blue-100 rounded-xl p-6 fade-in-section ${isVisible3 ? 'visible' : ''}`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                <BarChart3 size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-moxinexa-navy mb-2">Decisões no "achismo"</h3>
                <p className="text-moxinexa-gray text-sm">
                  Sem dados confiáveis, você toma decisões importantes baseado em intuição, não em números. Isso aumenta o risco e diminui os resultados.
                </p>
              </div>
            </div>
          </div>

          {/* Pain Point 4 */}
          <div 
            ref={ref4}
            className={`bg-purple-50 border border-purple-100 rounded-xl p-6 fade-in-section ${isVisible4 ? 'visible' : ''}`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 flex-shrink-0">
                <WifiOff size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-moxinexa-navy mb-2">Sistemas que não funcionam em Angola</h3>
                <p className="text-moxinexa-gray text-sm">
                  Já tentou sistemas internacionais que não entendem a realidade angolana? Internet instável, processos diferentes, suporte distante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;