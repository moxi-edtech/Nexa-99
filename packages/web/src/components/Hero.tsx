import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { ShieldCheck, ClipboardList, MessageSquare, FileText, Calendar } from 'lucide-react';
import Calculator from './Calculator';
import { useFadeIn } from '../hooks/useFadeIn';

const slideData = [
  {
    id: 1,
    tag: 'Tecnologia 100% Angolana',
    title: <>Pare de sangrar <span className="text-moxinexa-teal">receita escolar</span> com inadimplência</>,
    description: 'A cada mês sem controlo, sua escola perde dinheiro que nunca mais recupera. O Moxi Nexa identifica, controla e recupera essas perdas automaticamente.',
    Icon: ShieldCheck,
    bgClass: 'bg-moxinexa-dark',
    highlightClass: 'text-moxinexa-teal',
  },
  {
    id: 2,
    tag: 'Matrículas Simplificadas',
    title: <>Acabe com as <span className="text-moxinexa-green-text">filas e o caos</span> em Janeiro</>,
    description: 'O pai envia o comprovativo pelo telemóvel. A secretaria só valida. Simples, rápido e eficiente.',
    Icon: ClipboardList,
    bgClass: 'bg-gradient-to-br from-moxinexa-dark to-green-500/10',
    highlightClass: 'text-moxinexa-green-text',
  },
  {
    id: 3,
    tag: 'Comunicação Direta',
    title: <>Alertas no <span className="text-moxinexa-sky-text">WhatsApp</span> que os pais realmente leem</>,
    description: 'Faltas, notas e mensalidades vencidas vão direto para o WhatsApp do pai. A pressão social funciona.',
    Icon: MessageSquare,
    bgClass: 'bg-gradient-to-br from-moxinexa-dark to-sky-500/10',
    highlightClass: 'text-moxinexa-sky-text',
  },
  {
    id: 4,
    tag: 'Documentação Automática',
    title: <>Gere <span className="text-moxinexa-indigo-text">Mapas do MED</span> em segundos, sem erros</>,
    description: 'Pautas, Mapas e Declarações com QR Code no modelo oficial. Esqueça as noites perdidas a preencher papelada.',
    Icon: FileText,
    bgClass: 'bg-gradient-to-br from-moxinexa-dark to-indigo-500/10',
    highlightClass: 'text-moxinexa-indigo-text',
  },
];

const Hero: React.FC = () => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  let sliderRef1 = useRef<Slider>(null);
  let sliderRef2 = useRef<Slider>(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const { ref: ref2, isVisible: isVisible2 } = useFadeIn();

  // Configurações do slider para efeito de swipe
  const sliderSettings = {
    fade: false,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: 'cubic-bezier(0.87, 0, 0.13, 1)',
    waitForAnimate: false,
  };

  const backgroundSliderSettings = {
    ...sliderSettings,
    fade: true,
    dots: false,
    autoplay: true,
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden bg-moxinexa-dark">
      {/* Slider de fundo com fade */}
      <Slider
        asNavFor={nav2 || undefined}
        ref={sliderRef1}
        {...backgroundSliderSettings}
        className="absolute inset-0 z-0"
      >
        {slideData.map(slide => (
          <div key={slide.id} className={`w-full h-full ${slide.bgClass}`} />
        ))}
      </Slider>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-7">
            {/* Slider de conteúdo com swipe */}
            <Slider
              asNavFor={nav1 || undefined}
              ref={sliderRef2}
              {...sliderSettings}
              dotsClass="slick-dots !bottom-0"
              className="content-slider"
            >
              {slideData.map(slide => (
                <div key={slide.id} className="outline-none">
                  <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 ${slide.highlightClass} text-xs font-bold uppercase tracking-wide backdrop-blur-sm`}>
                    <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                    {slide.tag}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] text-white mt-4 min-h-[140px] md:min-h-[160px]">
                    {slide.title}
                  </h1>
                  <p className="text-lg text-gray-300 max-w-lg leading-relaxed mt-4 min-h-[96px]">
                    {slide.description}
                  </p>
                </div>
              ))}
            </Slider>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#contato" className="flex items-center justify-center gap-2 bg-moxinexa-teal hover:bg-teal-500 text-white px-7 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-teal-900/20 hover:-translate-y-1">
                <span>Agendar Diagnóstico Gratuito</span>
                <Calendar size={20} />
              </a>
              <a href="#cases" className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium text-white hover:bg-white/10 transition-all border border-white/20">
                Ver Casos Reais
              </a>
            </div>
          </div>

          <div ref={ref2} className={`relative fade-in-section ${isVisible2 ? 'visible' : ''}`} id="calculadora">
            <Calculator />
          </div>

        </div>
      </div>

      <style>
        {`
          .content-slider .slick-track {
            display: flex !important;
          }
          
          .content-slider .slick-slide {
            float: none !important;
            height: auto !important;
          }
          
          .content-slider .slick-slide > div {
            height: 100%;
          }
          
          .slick-dots {
            position: relative !important;
            bottom: 0 !important;
            margin-top: 2rem;
          }
          
          .slick-dots li button:before {
            color: white !important;
            opacity: 0.3 !important;
            font-size: 10px !important;
          }
          
          .slick-dots li.slick-active button:before {
            opacity: 1 !important;
            color: #0D9488 !important;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;