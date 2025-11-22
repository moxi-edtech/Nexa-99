import React from 'react';
import { Star } from 'lucide-react';
import { useFadeIn } from '../hooks/useFadeIn';

interface Testimonial {
  initials: string;
  name: string;
  description: string;
  before: string;
  after: string;
  recovered: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { ref, isVisible } = useFadeIn();

  return (
    <div
      ref={ref}
      className={`bg-moxinexa-light rounded-xl p-6 border border-gray-200 fade-in-section ${isVisible ? 'visible' : ''}`}
    >
      <div className="flex items-start gap-4 mb-5">
        <div className="w-14 h-14 bg-moxinexa-teal rounded-full flex items-center justify-center text-white font-bold text-lg">
          {testimonial.initials}
        </div>
        <div>
          <h4 className="font-bold text-moxinexa-navy">{testimonial.name}</h4>
          <p className="text-sm text-moxinexa-gray">{testimonial.description}</p>
          <div className="flex items-center mt-1">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-xs text-moxinexa-gray ml-2">5.0</span>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
          <span className="text-moxinexa-gray text-sm">Inadimplência antes:</span>
          <span className="font-bold text-moxinexa-danger">{testimonial.before}</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200">
          <span className="text-moxinexa-gray text-sm">Inadimplência agora:</span>
          <span className="font-bold text-moxinexa-teal">{testimonial.after}</span>
        </div>
        <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-teal-100 bg-teal-50">
          <span className="text-moxinexa-gray text-sm">Receita recuperada:</span>
          <span className="font-bold text-moxinexa-navy">{testimonial.recovered}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
