import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { assets } from '../data/assets.ts';
import { ArrowRight, Sparkles } from 'lucide-react';

interface PillarsProps {
  onNavigate: (tab: string, category?: string) => void;
}

export const Pillars: React.FC<PillarsProps> = ({ onNavigate }) => {
  const { lang, isRTL } = useLanguage();
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const pillarsData = [
    {
      id: 'spa',
      title: 'SPA',
      tagline: {
        fr: 'Hammam Traditionnel & Marbre Tiède',
        ar: 'الحمام التقليدي والرخام الدافئ',
      },
      description: {
        fr: 'Rituel ancestral de purification : savon beldi noir, masque de tabrima aux plantes et gommage kassa vigoureux sur marbre chauffé.',
        ar: 'طقس النقاء المتكامل: صابون بلدي، قناع التبريمة بالأعشاب الطبيعية وتقشير الكيس في بخار الأوكالبتوس العطر.',
      },
      image: assets.hammamMarble,
      gradient:
        'linear-gradient(to top, #0E1E17 32%, rgba(18, 36, 29, 0.78) 65%, rgba(18, 36, 29, 0.35) 100%)',
      category: 'hammam',
      emblem: '✦',
    },
    {
      id: 'beauty',
      title: 'BEAUTY',
      tagline: {
        fr: 'Balayage Lumineux & Haute Coiffure',
        ar: 'بالياج مضيء وتصفيف الشعر',
      },
      description: {
        fr: 'L\'art du cheveu sublimé : balayages fondus signature, colorations sur mesure, brushings glamour et soins capillaires botox profonds.',
        ar: 'خبرة خبيرات التصفيف لإبراز إشراقة شعركِ بتقنيات البالياج المذاب، السيشوار الناعم وعلاجات البوتوكس العميقة.',
      },
      image: assets.balayageWaves,
      gradient:
        'linear-gradient(to top, #14241B 32%, rgba(20, 36, 27, 0.78) 65%, rgba(20, 36, 27, 0.35) 100%)',
      category: 'coiffure',
      emblem: '❖',
    },
    {
      id: 'massage',
      title: 'MASSAGE',
      tagline: {
        fr: 'Massages aux Essences & Soins Corps',
        ar: 'تدليك بالزيوت العطرية وعناية بالجسم',
      },
      description: {
        fr: 'Évasion sensorielle absolue : modelages relaxants aux huiles tièdes d\'ambre ou de fleur d\'oranger pour dénouer chaque tension.',
        ar: 'لحظة هروب استثنائية مع الزيوت العطرية الدافئة كالعنبر والورد وزهر البرتقال لتجديد طاقتكِ وراحة جسدكِ.',
      },
      image: assets.perfumeTray,
      gradient:
        'linear-gradient(to top, #1C1814 32%, rgba(28, 24, 20, 0.78) 65%, rgba(28, 24, 20, 0.35) 100%)',
      category: 'massage',
      emblem: '✧',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F6F1E7] border-b border-[#EAE0D0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#C59B5F]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#C59B5F] font-semibold">
              {lang === 'fr' ? 'LES 3 PILIERS ANYA' : 'ثلاثية الهوية الأصيلة'}
            </span>
            <span className="w-5 h-px bg-[#C59B5F]" />
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl text-[#1C1917] font-normal leading-tight [text-wrap:balance]">
            {lang === 'fr'
              ? 'Trois Sanctuaires Dédiés à Votre Épanouissement'
              : 'ثلاثة فضاءات مصممة لإشراقتكِ وراحتكِ التامة'}
          </h2>

          <p className="text-xs sm:text-sm text-[#57534E] font-body mt-3 leading-relaxed max-w-xl mx-auto">
            {lang === 'fr'
              ? 'Inspirés par la tradition algérienne et le raffinement contemporain, découvrez nos trois univers signatures à Oran.'
              : 'مستوحاة من كرم التقاليد الجزائرية وأحدث صيحات التجميل العالمية لخدمة جمالكِ في وهران.'}
          </p>
        </div>

        {/* Mobile Swipe Notice (Visible on small screens) */}
        <div className="flex sm:hidden items-center justify-between text-[11px] text-[#8C6D37] mb-3 px-1">
          <span className="flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#C59B5F]" />
            <span>{lang === 'fr' ? 'Glisser pour explorer les 3 piliers' : 'اسحبي لاكتشاف العوالم الثلاثة'}</span>
          </span>
          <div className="flex items-center gap-1.5">
            {pillarsData.map((_, i) => (
              <span
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  activeMobileIndex === i ? 'bg-[#C59B5F] w-3' : 'bg-[#DCD5CA]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Horizontal Swipe Snap Carousel on Mobile / Responsive Grid on Desktop */}
        <div
          onScroll={(e) => {
            const el = e.currentTarget;
            const scrollLeft = Math.abs(el.scrollLeft);
            const cardWidth = el.offsetWidth * 0.82;
            const idx = Math.min(2, Math.max(0, Math.round(scrollLeft / (cardWidth || 1))));
            setActiveMobileIndex(idx);
          }}
          className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 pb-3"
        >
          {pillarsData.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => onNavigate('services', pillar.category)}
              className="w-[84vw] max-w-[320px] sm:w-auto shrink-0 snap-center rounded-t-[120px] rounded-b-[28px] overflow-hidden min-h-[460px] sm:min-h-[520px] p-6 sm:p-8 flex flex-col justify-between relative border border-[#C59B5F]/35 shadow-lg active:scale-99 transition-transform cursor-pointer group"
            >
              {/* Photographic Background */}
              <img
                src={pillar.image}
                alt={pillar.title}
                loading="lazy"
                width={320}
                height={520}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Tinted Luxury Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{ background: pillar.gradient }}
              />

              {/* Top Talisman Emblem */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="w-9 h-9 rounded-full border border-[#C59B5F]/50 bg-[#0E1E17]/70 flex items-center justify-center text-[#C59B5F] shadow-xs">
                  <span className="text-xs font-serif">{pillar.emblem}</span>
                </div>

                <span className="text-[10px] tracking-[0.2em] uppercase text-[#DCD5CA] bg-[#0E1E17]/60 px-3 py-1 rounded-full border border-[#F6F2EB]/15">
                  {lang === 'fr' ? 'Sanctuaire' : 'فضاء'}
                </span>
              </div>

              {/* Bottom Details & Direct Navigation */}
              <div className="relative z-10 pt-12">
                <h3 className="font-heading text-3xl sm:text-4xl font-light text-[#F6F2EB] tracking-[0.2em] mb-1">
                  {pillar.title}
                </h3>

                <div className="text-xs font-medium text-[#C59B5F] tracking-wide mb-2 flex items-center gap-1.5">
                  <span className="inline-block w-2.5 h-px bg-[#C59B5F]" />
                  <span>{pillar.tagline[lang]}</span>
                </div>

                <p className="text-xs text-[#DCD5CA] font-body leading-relaxed line-clamp-3 mb-4">
                  {pillar.description[lang]}
                </p>

                <div className="pt-3 border-t border-[#F6F2EB]/20 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#F6F2EB] group-hover:text-[#C59B5F] transition-colors min-h-[44px]">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C59B5F]" />
                    <span>
                      {lang === 'fr' ? "Explorer l'espace" : 'استكشفي هذا العالم'}
                    </span>
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
