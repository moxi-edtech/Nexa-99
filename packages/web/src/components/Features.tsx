import React from 'react';
import { ClipboardList, MessageSquare, FileText, Landmark } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

const Features: React.FC = () => {
  const { ref: ref1, isVisible: isVisible1 } = useFadeIn();
  const { ref: ref2, isVisible: isVisible2 } = useFadeIn();
  const { ref: ref3, isVisible: isVisible3 } = useFadeIn();
  const { ref: ref4, isVisible: isVisible4 } = useFadeIn();

  return (
    <section id="beneficios" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-moxinexa-teal font-bold tracking-wide uppercase text-sm">A Solução Moxi</span>
          <h2 className="text-3xl font-bold text-moxinexa-navy mt-3 mb-4">
            Funcionalidades que resolvem problemas reais
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Feature 1 */}
          <div
            ref={ref1}
            className={`bg-moxinexa-green-light border border-moxinexa-green-border rounded-xl p-6 fade-in-section ${isVisible1 ? 'visible' : ''}`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-moxinexa-green-bg rounded-lg flex items-center justify-center text-moxinexa-green-text flex-shrink-0">
                <ClipboardList size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-moxinexa-navy mb-2">Matrícula Sem Filas</h3>
                <p className="text-moxinexa-gray text-sm">
                  O pai envia o comprovativo pelo telemóvel. A secretaria só valida. Fim do caos em Janeiro.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div
            ref={ref2}
            className={`bg-moxinexa-sky-light border border-moxinexa-sky-border rounded-xl p-6 fade-in-section ${isVisible2 ? 'visible' : ''}`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-moxinexa-sky-bg rounded-lg flex items-center justify-center text-moxinexa-sky-text flex-shrink-0">
                <MessageSquare size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-moxinexa-navy mb-2">Alertas no WhatsApp</h3>
                <p className="text-moxinexa-gray text-sm">
                  Faltas, notas e mensalidades vencidas vão direto para o WhatsApp do pai. A pressão social funciona.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div
            ref={ref3}
            className={`bg-moxinexa-indigo-light border border-moxinexa-indigo-border rounded-xl p-6 fade-in-section ${isVisible3 ? 'visible' : ''}`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-moxinexa-indigo-bg rounded-lg flex items-center justify-center text-moxinexa-indigo-text flex-shrink-0">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-moxinexa-navy mb-2">Mapas do MED Automáticos</h3>
                <p className="text-moxinexa-gray text-sm">
                  Esqueça as noites perdidas. O Moxi gera Pautas, Mapas e Declarações com QR Code no modelo oficial, em segundos.
                </p>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div
            ref={ref4}
            className={`bg-moxinexa-amber-light border border-moxinexa-amber-border rounded-xl p-6 fade-in-section ${isVisible4 ? 'visible' : ''}`}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-moxinexa-amber-bg rounded-lg flex items-center justify-center text-moxinexa-amber-text flex-shrink-0">
                <Landmark size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-moxinexa-navy mb-2">Conciliação Bancária Real</h3>
                <p className="text-moxinexa-gray text-sm">
                  Integração com TPA e Extratos. Saiba exatamente o que entrou no banco vs. o que está no sistema, sem margem para erros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
