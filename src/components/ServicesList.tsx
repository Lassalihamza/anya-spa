import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT, ServiceItem } from '../data/content.ts';
import { assets } from '../data/assets.ts';
import { ArrowRight, Sparkles, PhoneCall, Tag } from 'lucide-react';

interface ServicesListProps {
  initialCategory?: string;
  onSelectService: (service: ServiceItem) => void;
  onBookService: (serviceName: string) => void;
}

export const ServicesList: React.FC<ServicesListProps> = ({
  initialCategory,
  onSelectService,
  onBookService,
}) => {
  const { lang, t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>(
    initialCategory || 'all'
  );

  const categories = [
    { id: 'all', label: lang === 'fr' ? 'Tout' : 'الكل' },
    ...CONTENT.categories.map((c) => ({
      id: c.id,
      label: t(c.name),
    })),
  ];

  const filteredServices =
    activeCategory === 'all'
      ? CONTENT.services
      : CONTENT.services.filter((s) => s.categoryId === activeCategory);

  const getServiceAsset = (id: string) => {
    switch (id) {
      case 'evasion-bien-etre':
        return assets.hammamMarble;
      case 'balayage-signature':
        return assets.balayageWaves;
      case 'soin-pedicure':
        return assets.copperPedicure;
      case 'soin-corps-personnalise':
        return assets.perfumeTray;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* Category Pill Switcher (Horizontal scrollable snap on mobile) */}
      <div className="flex items-center overflow-x-auto scrollbar-none snap-x gap-1.5 p-1.5 rounded-full bg-[#EAE0D0]/85 border border-[#8FA696]/25 shadow-xs mb-8 sm:mb-14 max-w-4xl mx-auto -mx-2 px-2 sm:mx-auto">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`snap-center shrink-0 min-h-[44px] px-4 sm:px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B5F] ${
                isActive
                  ? 'bg-[#162B22] text-[#F7F3EB] font-semibold shadow-xs'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
              aria-pressed={isActive}
            >
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Services List Flow */}
      <div className="space-y-6 sm:space-y-10">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((service, index) => {
            const isEvasion = service.id === 'evasion-bien-etre';
            const isBalayage = service.id === 'balayage-signature';
            const isPedicure = service.id === 'soin-pedicure';
            const isScentCare = service.id === 'soin-corps-personnalise';
            const isBridal = service.id === 'pack-mariee-signature';
            const servicePhoto = getServiceAsset(service.id);

            // 1. Featured Ritual: Forfait Évasion Bien-Être (3000 DA)
            if (isEvasion) {
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.2) }}
                  onClick={() => onSelectService(service)}
                  className="rounded-[28px] sm:rounded-[36px] bg-[#12241D] text-[#F7F3EB] border border-[#C59B5F]/40 p-5 sm:p-10 shadow-xl relative overflow-hidden cursor-pointer hover:border-[#C59B5F] transition-colors"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                    
                    {/* Visual Archway */}
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="relative w-full max-w-[320px] aspect-[4/3] sm:aspect-square rounded-2xl sm:rounded-t-full sm:rounded-b-2xl overflow-hidden border border-[#C59B5F]/40 bg-[#0E1E17]">
                        <img
                          src={servicePhoto || assets.hammamArch}
                          alt="Forfait Évasion Bien-Être"
                          width={320}
                          height={320}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E17]/85 via-transparent to-transparent pointer-events-none" />
                        
                        <div className="absolute top-3 start-3 px-3 py-1 rounded-full bg-[#162B22]/90 border border-[#C59B5F]/40 text-[#C59B5F] text-[10px] font-semibold tracking-wider uppercase">
                          {lang === 'fr' ? 'RITUEL SIGNATURE' : 'الطقس الأكثر طلباً'}
                        </div>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[10px] uppercase tracking-wider text-[#C59B5F] font-semibold bg-[#C59B5F]/15 px-3 py-0.5 rounded-full border border-[#C59B5F]/30">
                          {lang === 'fr' ? 'HAMMAM & SPA' : 'حمام وسبا'}
                        </span>
                        
                        <div className="text-end">
                          <span
                            dir="ltr"
                            className="font-heading text-3xl sm:text-4xl font-light text-[#C59B5F] tracking-tight block"
                          >
                            3000 DA
                          </span>
                        </div>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl text-[#F6F2EB] font-normal leading-tight">
                        {t(service.name)}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#DCD5CA] font-body leading-relaxed">
                        {t(service.fullDesc)}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {service.highlights?.map((hl, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#DCD5CA] bg-[#162A21]/70 p-2 rounded-xl border border-[#C59B5F]/20">
                            <span className="text-[#C59B5F] text-xs">✦</span>
                            <span>{t(hl)}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-[#C59B5F]/20">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#C59B5F] flex items-center gap-1.5">
                          <span>{lang === 'fr' ? 'Voir le détail du soin' : 'استعراض تفاصيل الخدمة'}</span>
                          <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                        </span>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onBookService('Forfait Évasion Bien-Être (3000 DA)');
                          }}
                          className="min-h-[44px] px-5 py-2.5 bg-[#C59B5F] hover:bg-[#d4ab70] text-[#12241D] text-xs font-semibold tracking-wider uppercase rounded-full shadow-md transition-transform active:scale-98"
                        >
                          {lang === 'fr' ? 'Réserver ce forfait' : 'حجز هذه الباقة'}
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            }

            // 2. Balayage Signature (-50% promo)
            if (isBalayage) {
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.2) }}
                  onClick={() => onSelectService(service)}
                  className="rounded-3xl bg-gradient-to-br from-[#14241B] to-[#0E1E17] text-[#F6F2EB] border border-[#C59B5F]/35 p-5 sm:p-8 shadow-lg relative overflow-hidden cursor-pointer hover:border-[#C59B5F] transition-colors"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 items-center">
                    
                    <div className="md:col-span-5 relative">
                      <div className="aspect-[4/3] sm:aspect-auto sm:h-64 w-full rounded-2xl overflow-hidden border border-[#C59B5F]/40 bg-[#12241D] relative">
                        <img
                          src={servicePhoto || assets.balayageWaves}
                          alt="Balayage Signature Anya"
                          width={320}
                          height={240}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E17]/80 via-transparent to-transparent pointer-events-none" />

                        <div className="absolute top-2.5 start-2.5 px-3 py-1 rounded-full bg-[#162A21]/95 border border-[#C59B5F] text-[#C59B5F] text-xs font-bold tracking-wider uppercase">
                          -50% OFF
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-7 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[10px] uppercase tracking-wider text-[#C59B5F] font-semibold bg-[#C59B5F]/15 px-3 py-0.5 rounded-full border border-[#C59B5F]/30">
                          {lang === 'fr' ? 'COIFFURE & BALAYAGE' : 'تصفيف وبالياج'}
                        </span>

                        <span className="text-[11px] text-[#DCD5CA]/80 bg-[#162A21] px-2.5 py-0.5 rounded-full border border-[#C59B5F]/20">
                          {lang === 'fr' ? 'Tarif de base : [à compléter]' : 'السعر الأصلي: [سيُضاف لاحقاً]'}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl text-[#F6F2EB] font-normal leading-tight">
                        {t(service.name)}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#DCD5CA] font-body leading-relaxed">
                        {t(service.fullDesc)}
                      </p>

                      <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#C59B5F]/20">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#C59B5F] flex items-center gap-1.5">
                          <span>{lang === 'fr' ? 'Explorer ce soin →' : 'استكشاف هذا العلاج ←'}</span>
                        </span>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onBookService('Promotion Balayage -50%');
                          }}
                          className="min-h-[44px] px-5 py-2.5 bg-[#C59B5F] hover:bg-[#d4ab70] text-[#12241D] text-xs font-semibold tracking-wider uppercase rounded-full shadow-xs transition-transform active:scale-98"
                        >
                          {lang === 'fr' ? 'Réserver le Balayage' : 'حجز البالياج'}
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            }

            // 3. Pédicure / Scent care cards
            if (isPedicure || isScentCare) {
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.2) }}
                  onClick={() => onSelectService(service)}
                  className="rounded-3xl bg-[#FAF7F2] border border-[#C59B5F]/35 p-5 sm:p-7 shadow-sm relative overflow-hidden cursor-pointer hover:border-[#C59B5F] transition-colors"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                    
                    <div className="sm:col-span-5 relative">
                      <div className="aspect-[4/3] sm:aspect-auto sm:h-56 w-full rounded-2xl overflow-hidden border border-[#C59B5F]/30 bg-[#EAE0D0] relative">
                        <img
                          src={servicePhoto || (isPedicure ? assets.copperPedicure : assets.perfumeTray)}
                          alt={t(service.name)}
                          width={300}
                          height={220}
                          loading="lazy"
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-2.5 start-2.5 px-3 py-0.5 rounded-full bg-[#12241D]/85 text-[#EAE0D0] text-[9px] sm:text-[10px] tracking-wider uppercase">
                          {isPedicure
                            ? (lang === 'fr' ? 'Bassin de cuivre' : 'حوض النحاس')
                            : (lang === 'fr' ? 'Plateau d\'essences' : 'صينية العطور')}
                        </div>
                      </div>
                    </div>

                    <div className="sm:col-span-7 space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] uppercase tracking-wider text-[#8C6D37] font-semibold bg-[#C59B5F]/15 px-3 py-0.5 rounded-full border border-[#C59B5F]/30">
                          {isPedicure ? (lang === 'fr' ? 'ESTHÉTIQUE' : 'تجميل') : (lang === 'fr' ? 'MASSAGE & CORPS' : 'مساج وعناية')}
                        </span>
                        
                        <span className="text-[11px] text-[#78716C] italic font-sans">
                          {t(service.priceDisplay)}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl sm:text-2xl text-[#1C1917] font-normal leading-tight">
                        {t(service.name)}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#57534E] font-body leading-relaxed">
                        {t(service.shortDesc)}
                      </p>

                      <div className="pt-2 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#8C6D37] min-h-[44px]">
                        <span>{lang === 'fr' ? 'Détails du soin →' : 'تفاصيل العلاج ←'}</span>
                        <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            }

            // 4. Bridal Pack
            if (isBridal) {
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.2) }}
                  onClick={() => onSelectService(service)}
                  className="rounded-3xl bg-gradient-to-r from-[#162A21] via-[#12241D] to-[#162A21] text-[#F7F3EB] border-2 border-[#C59B5F]/60 p-6 sm:p-10 shadow-xl relative overflow-hidden cursor-pointer hover:border-[#C59B5F] transition-colors"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                    <div className="space-y-2.5 max-w-2xl">
                      <div className="inline-flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#C59B5F]" />
                        <span className="text-[11px] uppercase tracking-wider text-[#C59B5F] font-semibold">
                          {lang === 'fr' ? 'LES PACKS MARIÉE' : 'باقات العروس الملكية'}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl sm:text-3xl text-[#F6F2EB] font-normal">
                        {t(service.name)}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#DCD5CA] font-body leading-relaxed">
                        {t(service.fullDesc)}
                      </p>

                      <div className="pt-0.5 text-[11px] text-[#C59B5F] italic">
                        {lang === 'fr'
                          ? '✦ Tarifs et composition sur mesure selon le programme de préparation'
                          : '✦ تفاصيل البرنامج والأسعار تُحدد حسب رغبة العروس وموعد زفافها'}
                      </div>
                    </div>

                    <div className="w-full md:w-auto shrink-0 flex flex-col items-stretch sm:items-center gap-2.5 pt-2 md:pt-0">
                      <span className="px-3.5 py-1 rounded-full bg-[#12241D] border border-[#C59B5F]/40 text-[#C59B5F] text-xs font-semibold text-center">
                        {lang === 'fr' ? 'Sur Devis & Réservation' : 'حسب الحجز والاستشارة'}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onBookService('Pack Mariée Signature Anya');
                        }}
                        className="min-h-[46px] px-6 py-2.5 bg-[#C59B5F] hover:bg-[#d4ab70] text-[#12241D] text-xs font-semibold tracking-wider uppercase rounded-full shadow-md transition-transform active:scale-98"
                      >
                        {lang === 'fr' ? 'Contacter pour Mariée' : 'استفسار باقة العروس'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            }

            // 5. Standard Service Card
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, delay: Math.min(index * 0.04, 0.2) }}
                onClick={() => onSelectService(service)}
                className="rounded-3xl bg-[#FAF7F2] border border-[#C59B5F]/30 p-5 sm:p-7 shadow-xs relative overflow-hidden cursor-pointer hover:border-[#C59B5F] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-[#8C6D37] font-semibold bg-[#C59B5F]/15 px-3 py-0.5 rounded-full border border-[#C59B5F]/30">
                      {service.categoryId.toUpperCase()}
                    </span>
                    
                    <span className="text-xs text-[#78716C] font-mono italic">
                      {t(service.priceDisplay)}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl text-[#1C1917] font-normal leading-tight">
                    {t(service.name)}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#57534E] font-body leading-relaxed">
                    {t(service.shortDesc)}
                  </p>

                  <div className="pt-2 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#8C6D37] min-h-[44px]">
                    <span>{lang === 'fr' ? 'Détails & Réservation →' : 'تفاصيل وحجز ←'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Transparent Disclosure Policy */}
      <div className="mt-12 sm:mt-16 bg-white border border-[#C59B5F]/35 rounded-3xl p-6 sm:p-8 text-center max-w-xl mx-auto shadow-xs">
        <Tag className="w-5 h-5 text-[#C59B5F] mx-auto mb-2" />
        <h4 className="font-heading text-xl text-[#1C1917] mb-1.5 font-normal">
          {lang === 'fr'
            ? 'Renseignements sur les tarifs [à compléter]'
            : 'الاستفسار عن الأسعار التي [ستُضاف لاحقاً]'}
        </h4>
        <p className="text-xs text-[#57534E] leading-relaxed mb-4 font-body">
          {lang === 'fr'
            ? 'Pour toute précision sur les prix des soins non encore publiés, contactez directement le salon ANYA par téléphone.'
            : 'لأي استفسار عن أسعار الخدمات التي لم تُنشر بعد، يمكنكِ التواصل مباشرة مع صالون أنيا عبر الهاتف.'}
        </p>
        <a
          href={`tel:${CONTENT.brand.phoneRaw}`}
          className="min-h-[44px] inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#162A21] hover:bg-[#12241D] text-[#C59B5F] text-xs font-semibold tracking-wider uppercase transition-colors shadow-xs"
        >
          <PhoneCall className="w-3.5 h-3.5" />
          <span dir="ltr">{CONTENT.brand.phoneFormatted}</span>
        </a>
      </div>
    </div>
  );
};
