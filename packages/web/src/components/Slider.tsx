import React from 'react';
import Slider from 'react-slick';

const SimpleSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-moxinexa-navy mt-3 mb-4">
            Veja como a MoxiNexa transforma sua gestão
          </h2>
        </div>
        <Slider {...settings}>
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-moxinexa-navy mb-4">Controle Financeiro Total</h3>
              <p className="text-moxinexa-gray">Deixe de perder dinheiro. Com a MoxiNexa, você tem uma visão clara de todas as suas receitas e despesas em um só lugar.</p>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-moxinexa-navy mb-4">Automatize Cobranças</h3>
              <p className="text-moxinexa-gray">Libere sua equipe para focar no que realmente importa: seus alunos. Deixe que a MoxiNexa cuide das cobranças de forma automática e eficiente.</p>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-moxinexa-navy mb-4">Decisões Baseadas em Dados</h3>
              <p className="text-moxinexa-gray">Tome decisões mais inteligentes com relatórios detalhados e análises precisas. A MoxiNexa transforma seus dados em insights valiosos.</p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default SimpleSlider;
