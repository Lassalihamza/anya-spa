import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT, ServiceItem } from '../data/content.ts';
import { assets } from '../data/assets.ts';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: string, prefillService?: string) => void;
  onOpenServiceDetail: (service: ServiceItem) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigate,
  onOpenServiceDetail,
}) => {
  const { lang, t, isRTL } = useLanguage();
  const [videoFailed, setVideoFailed] = useState(false);
  const [archImgError, setArchImgError] = useState(false);

  const evasionService = CONTENT.services.find(
    (s) => s.id === 'evasion-bien-etre'
  );

  return (
    <section className="min-h-[88vh] sm:min-h-[92vh] flex items-center relative isolate overflow-hidden bg-[#0E1E17] text-[#F6F2EB] py-10 sm:py-16 px-4 sm:px-6 lg:px-12">
      {/* 1. Base Canvas */}
      <div className="absolute inset-0 bg-[#0E1E17] -z-30" />

      {/* 2. Media Layer: Background Video */}
      {!videoFailed ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoFailed(true)}
          className="absolute inset-0 w-full h-full object-cover -z-10 pointer-events-none opacity-25"
        >
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
      ) : null}

      {/* 3. Sanctuary Retreat Backdrop */}
      <div
        className="absolute inset-0 w-full h-full -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(${assets.heroBackdrop || assets.hammamArch || assets.heroHammam})`,
          opacity: videoFailed ? 0.35 : 0.2,
        }}
      />

      {/* 4. Ambient Candlelight Aura */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(circle at 75% 45%, rgba(197, 155, 95, 0.12) 0%, rgba(22, 42, 33, 0.2) 45%, transparent 70%)',
        }}
      />

      {/* 5. Gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E1E17]/60 via-[#0E1E17]/40 to-[#0E1E17]/80 -z-10 pointer-events-none" />

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Column (Single-column on mobile, lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-start">
            
            {/* Location & Women-Only Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-sans tracking-widest uppercase bg-[#162A21]/90 text-[#C59B5F] border border-[#C59B5F]/40 font-semibold shadow-xs">
                <span>✦</span>
                <span>{t(CONTENT.hero.locationBadge)}</span>
              </span>
              <span className="text-xs text-[#DCD5CA] font-sans tracking-wide">
                {t(CONTENT.hero.womenOnly)}
              </span>
            </div>

            {/* Display Headline with Fluid Typography */}
            <h1 className="font-heading text-[clamp(2rem,6vw+0.5rem,3.75rem)] font-normal text-[#F6F2EB] leading-[1.12] tracking-wide [text-wrap:balance]">
              {t(CONTENT.hero.title)}
            </h1>

            {/* Salon Bio Summary */}
            <p className="text-xs sm:text-sm md:text-base text-[#DCD5CA] font-body leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t(CONTENT.hero.description)}
            </p>

            {/* Action Buttons Row (Thumb zone friendly: min 48px height) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="min-h-[48px] px-7 py-3.5 bg-[#C59B5F] hover:bg-[#D4AB70] text-[#141A17] text-xs font-semibold tracking-widest uppercase rounded-full shadow-lg transition-transform active:scale-98 flex items-center justify-center gap-2 group whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>
                  {lang === 'fr'
                    ? 'PRENDRE RENDEZ-VOUS (DÉMO)'
                    : 'طلب موعد تجريبي'}
                </span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                    isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''
                  }`}
                />
              </button>

              {/* Secondary CTA */}
              <button
                type="button"
                onClick={() => {
                  if (evasionService) {
                    onOpenServiceDetail(evasionService);
                  } else {
                    onNavigate('services');
                  }
                }}
                className="min-h-[48px] px-5 py-3.5 border border-[#C59B5F]/50 text-[#F6F2EB] hover:bg-[#C59B5F]/15 rounded-full text-xs font-medium tracking-wider uppercase transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C59B5F]" />
                <span>{t(CONTENT.hero.ctaSecondary)}</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-[#8FA696]/20 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-[#DCD5CA]">
              <span className="flex items-center gap-1.5">
                <span className="text-[#C59B5F]">✦</span>
                {lang === 'fr' ? 'Hammam traditionnel' : 'الحمام الجزائري'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#C59B5F]">✦</span>
                {lang === 'fr' ? 'Balayage & Esthétique' : 'بالياج وتجميل'}
              </span>
              <a
                href={`tel:${CONTENT.brand.phoneRaw}`}
                className="min-h-[44px] flex items-center gap-1.5 hover:text-[#F6F2EB] transition-colors"
                aria-label={`Téléphone: ${CONTENT.brand.phoneFormatted}`}
              >
                <span className="text-[#C59B5F]">✦</span>
                <PhoneCall className="w-3.5 h-3.5 text-[#C59B5F]" />
                <span dir="ltr" className="inline-block font-semibold text-[#F6F2EB]">
                  {CONTENT.brand.phoneFormatted}
                </span>
              </a>
            </div>
          </div>

          {/* Visual Column: Sculptural Hammam Arch */}
          <div className="lg:col-span-5 flex justify-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              <div className="relative aspect-[4/5] w-full rounded-t-full rounded-b-3xl overflow-hidden border border-[#C59B5F]/40 shadow-2xl bg-[#162A21]">
                <img
                  src={!archImgError ? assets.hammamArch : assets.heroHammam}
                  alt="ANYA Hammam & Spa Retreat"
                  width={400}
                  height={500}
                  loading="eager"
                  className="w-full h-full object-cover"
                  onError={() => setArchImgError(true)}
                  referrerPolicy="no-referrer"
                />

                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1E17]/90 via-[#0E1E17]/25 to-transparent pointer-events-none" />

                {/* Floating Glass Badge at base of arch */}
                <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-2xl bg-[#0E1E17]/90 border border-[#C59B5F]/40 shadow-lg text-center">
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-[#C59B5F] block mb-0.5">
                    {lang === 'fr'
                      ? 'RITUEL SIGNATURE À ORAN'
                      : 'الطقس الأكثر طلباً في وهران'}
                  </span>
                  <span className="font-heading text-base sm:text-lg text-[#F6F2EB] font-normal block">
                    {t(CONTENT.hero.floatingBadge)}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
