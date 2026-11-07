import React from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { PhoneCall, ArrowRight, Sparkles } from 'lucide-react';

interface FeaturedPackageProps {
  onNavigate: (tab: string, prefillService?: string) => void;
}

export const FeaturedPackage: React.FC<FeaturedPackageProps> = ({
  onNavigate,
}) => {
  const { lang, t, isRTL } = useLanguage();

  const ritualSteps = [
    {
      step: 1,
      title: {
        fr: 'Enveloppement Tabrima & Savon Beldi',
        ar: 'غلاف التبريمة بالأعشاب والصابون البلدي',
      },
      desc: {
        fr: 'Hammam traditionnel purifiant aux herbes naturelles et savon noir pour préparer la peau à la détente.',
        ar: 'حمام تقليدي أصيل لتنقية الجسم وتليين البشرة بأجود الأعشاب الطبيعية والصابون البلدي.',
      },
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
    },
    {
      step: 2,
      title: {
        fr: 'Exfoliation Kassa Complète',
        ar: 'تقشير كامل بالكيس على الرخام الدافئ',
      },
      desc: {
        fr: 'Gommage intégral sur marbre chauffé pour libérer la peau, stimuler la circulation et retrouver un toucher soyeux.',
        ar: 'فرك عميق بالكيس لإزالة الخلايا الميتة وتجديد ملمس الجلد على بلاط الرخام الدافئ الأصيل.',
      },
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      ),
    },
    {
      step: 3,
      title: {
        fr: 'Lavage & Savonnage Délicat',
        ar: 'غسيل وصابون عطري للشعر والجسم',
      },
      desc: {
        fr: 'Soin capillaire doux et savonnage onctueux aux senteurs orientales bienfaisantes sous une eau tiède enveloppante.',
        ar: 'عناية لطيفة بالشعر وغسيل برغوة الصابون العطري الفاخر بنفحات شرقية تهدئ الحواس.',
      },
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
          <path d="M12 2v6" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l4.24 4.24" />
          <path d="M14.83 14.83l4.24 4.24" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      step: 4,
      title: {
        fr: 'Collation Thé à la Menthe & Pâtisserie',
        ar: 'ضيافة الشاي الجزائري بالنعناع والحلوى',
      },
      desc: {
        fr: 'Hospitalité algérienne authentique et moment de détente privilégié dans notre salon de repos réservé aux femmes.',
        ar: 'كرم الضيافة الجزائرية الأصيلة مع كأس شاي بالنعناع وحلوى راقية في صالون الاسترخاء الهادئ.',
      },
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" y1="2" x2="6" y2="4" />
          <line x1="10" y1="2" x2="10" y2="4" />
          <line x1="14" y1="2" x2="14" y2="4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0E1E17] text-[#F6F2EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Canvas */}
        <div className="bg-[#12241D] border border-[#C59B5F]/35 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Header Badge & Title */}
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase bg-[#C59B5F]/20 text-[#C59B5F] px-3.5 py-1 rounded-full border border-[#C59B5F]/40 shadow-xs">
                    <Sparkles className="w-3 h-3 text-[#C59B5F]" />
                    <span>{t(CONTENT.featuredPackage.badge)}</span>
                  </span>
                  <span className="text-xs text-[#DCD5CA] tracking-wide">
                    {t(CONTENT.featuredPackage.priceNote)}
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-light text-[#F6F2EB] tracking-wide leading-tight [text-wrap:balance]">
                  {t(CONTENT.featuredPackage.title)}
                </h2>

                <p className="text-xs sm:text-sm text-[#DCD5CA] font-body leading-relaxed mt-2 max-w-xl">
                  {t(CONTENT.featuredPackage.subtitle)}
                </p>
              </div>

              {/* Steps Timeline */}
              <div className="relative pt-1 pb-1">
                <div
                  className={`absolute top-4 bottom-4 w-px bg-gradient-to-b from-[#C59B5F] via-[#C59B5F]/40 to-transparent ${
                    isRTL ? 'right-4 sm:right-5' : 'left-4 sm:left-5'
                  }`}
                />

                <div className="space-y-5 sm:space-y-6 relative">
                  {ritualSteps.map((stepItem) => (
                    <div
                      key={stepItem.step}
                      className="flex items-start gap-3 sm:gap-4 relative"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#162A21] border border-[#C59B5F] flex items-center justify-center shrink-0 text-[#C59B5F] shadow-sm z-10">
                        {stepItem.icon}
                      </div>

                      <div className="pt-0.5">
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#C59B5F] font-semibold block">
                          {lang === 'fr'
                            ? `Étape 0${stepItem.step}`
                            : `المرحلة 0${stepItem.step}`}
                        </span>
                        <h4 className="text-xs sm:text-sm font-medium text-[#F6F2EB] mt-0.5">
                          {stepItem.title[lang]}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-[#DCD5CA] mt-0.5 leading-relaxed font-body">
                          {stepItem.desc[lang]}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() =>
                    onNavigate('contact', 'Forfait Évasion Bien-Être (3000 DA)')
                  }
                  className="min-h-[48px] px-7 py-3.5 bg-[#C59B5F] hover:bg-[#D4AB70] text-[#141A17] text-xs font-semibold tracking-widest uppercase rounded-full shadow-lg transition-transform active:scale-98 flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  <span>
                    {lang === 'fr'
                      ? 'RÉSERVER CE FORFAIT (DÉMO)'
                      : 'حجز هذه الباقة (تجريبي)'}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                      isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                    }`}
                  />
                </button>

                <a
                  href={`tel:${CONTENT.brand.phoneRaw}`}
                  className="min-h-[48px] px-5 py-3.5 rounded-full border border-[#C59B5F]/40 hover:border-[#C59B5F] text-[#F6F2EB] text-xs font-medium tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                  aria-label={`Appeler ANYA: ${CONTENT.brand.phoneFormatted}`}
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#C59B5F]" />
                  <span dir="ltr" className="inline-block font-semibold">
                    {CONTENT.brand.phoneFormatted}
                  </span>
                </a>
              </div>
            </div>

            {/* Price Medallion */}
            <div className="lg:col-span-5 flex justify-center mt-2 lg:mt-0">
              <div className="w-full max-w-[340px] bg-[#162E23] border border-[#C59B5F]/50 rounded-t-full rounded-b-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center shadow-xl relative overflow-hidden">
                <div className="mb-3 px-3.5 py-1 rounded-full border border-[#C59B5F]/40 bg-[#0E1E17] text-[#C59B5F] text-[10px] font-semibold tracking-widest uppercase">
                  {lang === 'fr'
                    ? 'RITUEL OFFICIEL ANYA'
                    : 'الطقس الرسمي لدى أنيا'}
                </div>

                <div className="my-1">
                  <span
                    dir="ltr"
                    className="font-heading text-4xl sm:text-5xl text-[#C59B5F] font-light tracking-tight inline-block"
                  >
                    {CONTENT.featuredPackage.price}
                  </span>
                </div>

                <p className="text-[11px] text-[#DCD5CA] mt-1 leading-snug">
                  {lang === 'fr'
                    ? 'Tarif officiel affiché au salon ANYA Beauty & Spa.'
                    : 'السعر الرسمي المعلن بالصالون بدقة تامة.'}
                </p>

                <div className="w-full h-px bg-[#C59B5F]/25 my-5" />

                <div className="text-[11px] sm:text-xs text-[#F6F2EB]/90 space-y-2 text-start w-full px-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[#C59B5F]">◆</span>
                    <span>
                      {lang === 'fr'
                        ? 'Savon beldi & Tabrima aux plantes'
                        : 'صابون بلدي وتبريمة بالأعشاب'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#C59B5F]">◆</span>
                    <span>
                      {lang === 'fr'
                        ? 'Kassa complète sur marbre chauffé'
                        : 'كيس على الرخام الدافئ'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#C59B5F]">◆</span>
                    <span>
                      {lang === 'fr'
                        ? 'Collation thé à la menthe & pâtisserie'
                        : 'شاي بالنعناع وحلوى راقية'}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onNavigate('contact', 'Forfait Évasion Bien-Être (3000 DA)')
                  }
                  className="w-full min-h-[46px] mt-6 py-3 bg-[#C59B5F] hover:bg-[#D4AB70] text-[#141A17] text-xs font-semibold tracking-widest uppercase rounded-full shadow-md transition-transform active:scale-98"
                >
                  {lang === 'fr' ? 'RÉSERVER CE FORFAIT →' : 'حجز هذه الباقة ←'}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
