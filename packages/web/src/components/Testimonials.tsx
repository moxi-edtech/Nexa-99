import React from 'react';
import TestimonialCard from './TestimonialCard';
import { useFadeIn } from '../hooks/useFadeIn';

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useFadeIn();
  const testimonials = [
    {
      initials: 'EM',
      name: 'Escola Moderna - Luanda',
      description: '280 alunos • Bairro Popular',
      before: '22%',
      after: '7%',
      recovered: '485.000 Kz/mês'
    },
    {
      initials: 'CS',
      name: 'Colégio Santana - Viana',
      description: '150 alunos • Zona Suburbana',
      before: '18%',
      after: '5%',
      recovered: '292.000 Kz/mês'
    }
  ];

  return (
    <section id="cases" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center max-w-2xl mx-auto mb-12 fade-in-section ${isVisible ? 'visible' : ''}`}>
          <span className="text-moxinexa-teal font-bold tracking-wide uppercase text-sm">Resultados Reais</span>
          <h2 className="text-3xl font-bold text-moxinexa-navy mt-3 mb-4">
            Escolas que pararam de sangrar receita
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;