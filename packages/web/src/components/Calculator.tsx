import React, { useState, useEffect } from 'react';
import { TrendingDown } from 'lucide-react';

const formatoAOA = new Intl.NumberFormat('pt-AO', {
  style: 'currency',
  currency: 'AOA',
  maximumFractionDigits: 0
});

const Calculator: React.FC = () => {
  const [alunos, setAlunos] = useState(200);
  const [mensalidade, setMensalidade] = useState(25000);
  const [taxa, setTaxa] = useState(15);

  const perdaMensal = (alunos * mensalidade) * (taxa / 100);
  const perdaAnual = perdaMensal * 12;

  useEffect(() => {
    const lossBar = document.getElementById('lossBar');
    if (lossBar) {
      lossBar.style.width = `${taxa}%`;
    }
  }, [taxa]);

  return (
    <div className="relative">
      <div className="bg-white rounded-2xl p-7 shadow-2xl relative z-10 animate-float border border-gray-200">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-bold text-moxinexa-navy">Calculadora de Perdas</h3>
            <p className="text-sm text-moxinexa-gray mt-1">Descubra quanto dinheiro sua escola perde mensalmente</p>
          </div>
          <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-500">
            <TrendingDown size={20} />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <label className="font-semibold text-moxinexa-navy">Total de Alunos</label>
              <span className="text-moxinexa-teal font-mono font-bold bg-teal-50 px-2 py-1 rounded">{alunos}</span>
            </div>
            <input 
              type="range" 
              min="50" 
              max="2000" 
              value={alunos} 
              step="10" 
              className="w-full" 
              onChange={(e) => setAlunos(parseInt(e.target.value))}
            />
            <div className="flex justify-between text-xs text-moxinexa-gray mt-1">
              <span>50</span>
              <span>2000</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <label className="font-semibold text-moxinexa-navy">Mensalidade (Kz)</label>
              <span className="text-moxinexa-teal font-mono font-bold bg-teal-50 px-2 py-1 rounded">{formatoAOA.format(mensalidade)}</span>
            </div>
            <input 
              type="range" 
              min="5000" 
              max="150000" 
              value={mensalidade} 
              step="1000" 
              className="w-full" 
              onChange={(e) => setMensalidade(parseInt(e.target.value))}
            />
            <div className="flex justify-between text-xs text-moxinexa-gray mt-1">
              <span>5.000 Kz</span>
              <span>150.000 Kz</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <label className="font-semibold text-moxinexa-navy">Taxa de Inadimplência</label>
              <span className={`font-mono font-bold px-2 py-1 rounded ${
                taxa > 25 ? 'text-red-600 bg-red-50 animate-pulse' : 
                taxa < 10 ? 'text-green-600 bg-green-50' : 
                'text-orange-500 bg-orange-50'
              }`}>{taxa}%</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="60" 
              value={taxa} 
              className="w-full" 
              style={{accentColor: '#EF4444'}}
              onChange={(e) => setTaxa(parseInt(e.target.value))}
            />
            <div className="flex justify-between text-xs text-moxinexa-gray mt-1">
              <span>1%</span>
              <span>60%</span>
            </div>
          </div>

          <div className="pt-2">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-moxinexa-gray">Sua perda mensal:</span>
              <span className="font-semibold text-moxinexa-danger">{taxa}%</span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
              <div id="lossBar" className="h-full loss-visualization rounded-full" style={{width: `${taxa}%`}}></div>
            </div>
          </div>

          <div className="bg-moxinexa-light rounded-xl p-5 border border-gray-200 mt-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-3">
              <span className="text-moxinexa-gray text-sm font-medium">Dinheiro perdido (mês):</span>
              <span className="block text-xl font-bold text-moxinexa-navy">{formatoAOA.format(perdaMensal)}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-moxinexa-gray text-sm font-medium">Prejuízo Anual:</span>
              <span className="text-lg font-mono font-bold text-moxinexa-danger">{formatoAOA.format(perdaAnual)}</span>
            </div>
          </div>
          
          <div className="pt-2">
            <a href="https://wa.me/244923456789?text=Quero%20saber%20como%20recuperar%20minha%20receita%20perdida" 
               target="_blank" 
               className="block w-full text-center bg-moxinexa-teal hover:bg-teal-600 text-white py-3 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg">
              Recuperar Minha Receita
            </a>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -right-4 w-full h-full bg-moxinexa-teal rounded-2xl -z-10 opacity-20"></div>
    </div>
  );
};

export default Calculator;