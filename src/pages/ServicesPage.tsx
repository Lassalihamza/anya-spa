import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { ServiceItem } from '../data/content.ts';
import { ServicesList } from '../components/ServicesList.tsx';
import { LotusWaveDivider } from '../components/LotusWaveDivider.tsx';

interface ServicesPageProps {
  initialCategory?: string;
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  initialCategory,
  onSelectService,
  onBookService,
}) => {
  const { lang } = useLanguage();

  return (
    <div className="w-full py-16 sm:py-24 bg-[#F6F1E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-[#C59B5F]" />
            <span className="text-xs uppercase tracking-[0.28em] text-[#C59B5F] font-semibold">
              {lang === 'fr' ? 'CARTE DES SOINS & RITUELS' : 'قائمة الخدمات والطقوس'}
            </span>
            <span className="w-6 h-px bg-[#C59B5F]" />
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-[#1C1917] font-normal leading-tight [text-wrap:balance]">
            {lang === 'fr'
              ? 'Prestations & Tarifs Officiels du Salon'
              : 'خدمات، باقات وأسعار الصالون'}
          </h1>

          <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed max-w-xl mx-auto font-body mt-4">
            {lang === 'fr'
              ? 'Conformément à notre charte de transparence, les prix indiqués correspondent strictement aux tarifs visibles sur les publications officielles du salon. Les autres prestations affichent la mention [à compléter].'
              : 'التزاماً بالأمانة والمصداقية، فإن الأسعار المعروضة تطابق تماماً الأسعار المنشورة رسمياً من قبل الصالون، وتظهر الخدمات الأخرى بعلامة [سيُضاف لاحقاً].'}
          </p>
        </div>

        {/* Dynamic Editorial Booklet Services List */}
        <ServicesList
          initialCategory={initialCategory}
          onSelectService={onSelectService}
          onBookService={onBookService}
        />

      </div>

      <LotusWaveDivider className="py-8" />
    </div>
  );
};
