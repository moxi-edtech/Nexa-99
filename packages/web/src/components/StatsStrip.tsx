import React, { useState, useEffect, useRef } from 'react';

const StatsStrip: React.FC = () => {
  const [counters, setCounters] = useState({
    escolas: 0,
    recuperados: 0
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 1500;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        escolas: Math.floor(17 * progress),
        recuperados: Math.floor(320 * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);
  };

  return (
    <div ref={sectionRef} className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="px-4 counter-animation">
            <div className="text-3xl font-bold text-moxinexa-navy mb-2">{counters.escolas}</div>
            <div className="text-xs text-moxinexa-gray uppercase tracking-widest font-semibold">Escolas Ativas</div>
          </div>
          <div className="px-4 counter-animation">
            <div className="text-3xl font-bold text-moxinexa-teal mb-2">-48%</div>
            <div className="text-xs text-moxinexa-gray uppercase tracking-widest font-semibold">Inadimplência</div>
          </div>
          <div className="px-4 counter-animation">
            <div className="text-3xl font-bold text-moxinexa-navy mb-2">{counters.recuperados}k</div>
            <div className="text-xs text-moxinexa-gray uppercase tracking-widest font-semibold">Recuperados (Méd)</div>
          </div>
          <div className="px-4 counter-animation">
            <div className="text-3xl font-bold text-moxinexa-navy mb-2">72h</div>
            <div className="text-xs text-moxinexa-gray uppercase tracking-widest font-semibold">Implementação</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsStrip;