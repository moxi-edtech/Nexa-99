import React from 'react';
import { Icon } from 'lucide-react';

export interface HeroSlideData {
  id: number;
  tag: string;
  title: React.ReactNode;
  description: string;
  Icon: Icon;
  theme: {
    bgClass: string;
    tagClass: string;
    highlightClass: string;
    iconBgClass: string;
    buttonClass: string;
  };
}

interface HeroSlideProps {
  slide: HeroSlideData;
}

const HeroSlide: React.FC<HeroSlideProps> = ({ slide }) => {
  const { tag, title, description, Icon, theme } = slide;

  return (
    <div className={`rounded-2xl p-8 h-full flex flex-col justify-between ${theme.bgClass}`}>
      <div>
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase ${theme.tagClass}`}>
          <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
          {tag}
        </div>
        <h1 className="text-4xl font-bold leading-tight text-white mt-4">
          {title}
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-lg">
          {description}
        </p>
      </div>
      <div className="mt-8">
        <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${theme.iconBgClass}`}>
                <Icon size={24} />
            </div>
            <div>
                <p className="font-semibold text-white">Funcionalidade Chave</p>
                <p className="text-sm text-gray-300">Integrado e pronto a usar</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
