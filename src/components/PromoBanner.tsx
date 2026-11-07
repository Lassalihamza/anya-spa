import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { assets } from '../data/assets.ts';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

interface PromoBannerProps {
  onNavigate: (tab: string, prefillCategoryOrService?: string) => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onNavigate }) => {
  const { lang, t, isRTL } = useLanguage();
  const [imgError, setImgError] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-[#0E1E17] text-[#F6F2EB] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Screen Card (Single column on mobile) */}
        <div className="rounded-[28px] sm:rounded-3xl bg-gradient-to-br from-[#12241D] to-[#0A1610] border border-[#C59B5F]/35 p-5 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center shadow-xl">
          
          {/* Visual Frame */}
          <div className="md:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-auto sm:h-80 relative shadow-md border border-[#C59B5F]/40 bg-[#162A21] group">
              {!imgError ? (
                <img
                  src={assets.balayageWaves}
                  alt="Anya Balayage Signature Cheveux Ondulés"
                  width={400}
                  height={320}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={() => setImgError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#1C1814] to-[#0E1E17] text-center">
                  <span className="font-heading text-lg text-[#F6F2EB]">Balayage Signature Anya</span>
                  <span className="text-[10px] tracking-widest text-[#C59B5F] uppercase mt-1">Nuances Miel & Caramel</span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1610]/80 via-transparent to-transparent pointer-events-none" />

              {/* -50% OFF Badge */}
              <div className="absolute top-3 start-3 w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-[#162A21]/95 border-2 border-[#C59B5F] flex flex-col items-center justify-center text-center shadow-lg z-10">
                <span className="font-heading text-base sm:text-lg font-bold text-[#C59B5F] leading-none">
                  -50%
                </span>
                <span className="text-[8px] sm:text-[9px] font-sans font-semibold tracking-widest text-[#F6F2EB] uppercase mt-0.5">
                  OFF
                </span>
              </div>

              {/* Corner Badge */}
              <div className="absolute bottom-3 end-3 px-3 py-1 rounded-full bg-[#0E1E17]/90 border border-[#C59B5F]/35 text-[9px] sm:text-[10px] text-[#DCD5CA] tracking-wider uppercase font-medium">
                {lang === 'fr' ? 'Savoir-Faire Coiffure' : 'خبرة التصفيف والصبغة'}
              </div>
            </div>
          </div>

          {/* Offer Details */}
          <div className="md:col-span-7 space-y-4">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-[#C59B5F] bg-[#C59B5F]/15 px-3 py-1 rounded-full border border-[#C59B5F]/35">
                <Sparkles className="w-3 h-3 text-[#C59B5F]" />
                <span>
                  {lang === 'fr'
                    ? 'OFFRE EXCLUSIVE COIFFURE • ORAN'
                    : 'عرض حصري في الصالون بوهران'}
                </span>
              </span>

              <span className="text-xs text-[#DCD5CA]/80">
                {lang === 'fr'
                  ? 'Tarif de base : [à compléter]'
                  : 'السعر الأصلي: [سيُضاف لاحقاً]'}
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#F6F2EB] font-light leading-tight tracking-wide [text-wrap:balance]">
              {lang === 'fr'
                ? 'Promotion -50% sur le Balayage Signature'
                : 'تخفيض 50% على البالياج المميز'}
            </h3>

            <p className="text-xs sm:text-sm text-[#DCD5CA] font-body leading-relaxed max-w-xl">
              {t(CONTENT.promoBanner.description)}
            </p>

            <div className="pt-1 border-t border-[#8FA696]/20 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#DCD5CA]">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#C59B5F] shrink-0" />
                <span>{lang === 'fr' ? 'Dégradé fondu naturel' : 'تدرج طبيعي متجانس'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#C59B5F] shrink-0" />
                <span>{lang === 'fr' ? 'Diagnostic personnalisé' : 'تشخيص دقيق لنوعية الشعر'}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#C59B5F] shrink-0" />
                <span>{lang === 'fr' ? 'Soins protecteurs inclus' : 'عناية مغذية لحماية الشعر'}</span>
              </span>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onNavigate('contact', 'Promotion Balayage -50%')}
                className="min-h-[48px] px-7 py-3 bg-[#C59B5F] hover:bg-[#D4AB70] text-[#141A17] text-xs font-semibold tracking-widest uppercase rounded-full shadow-md transition-transform active:scale-98 flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <span>
                  {lang === 'fr'
                    ? 'RÉSERVER LE BALAYAGE (-50%)'
                    : 'حجز عرض البالياج (-50%)'}
                </span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                    isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                  }`}
                />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('services', 'coiffure')}
                className="min-h-[48px] px-5 py-3 rounded-full border border-[#C59B5F]/40 hover:border-[#C59B5F] text-[#F6F2EB] text-xs font-medium tracking-wider uppercase transition-colors text-center"
              >
                {lang === 'fr'
                  ? 'VOIR TOUS LES TARIFS COIFFURE'
                  : 'استكشاف جميع خدمات الشعر'}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
