import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { Globe, ArrowRight, X } from 'lucide-react';
import { ASSETS } from '../data/assets.ts';

interface IntroSplashProps {
  onDismiss: () => void;
}

export const IntroSplash: React.FC<IntroSplashProps> = ({ onDismiss }) => {
  const { lang, setLang, isRTL } = useLanguage();
  const [logoSrcIndex, setLogoSrcIndex] = useState(0);
  const [isLogoFailed, setIsLogoFailed] = useState(false);
  const [progress, setProgress] = useState(0);

  const logoCandidates = [
    ASSETS.logoTransparent,
    '/ANYA Beauty Lotus Wave Logo.png',
    '/assets/anya-logo.png',
  ];

  const currentLogoSrc = logoCandidates[logoSrcIndex];

  const handleLogoError = () => {
    if (logoSrcIndex < logoCandidates.length - 1) {
      setLogoSrcIndex(logoSrcIndex + 1);
    } else {
      setIsLogoFailed(true);
    }
  };

  // Strictly 2.0-second total duration as requested
  useEffect(() => {
    const totalDuration = 2000;
    const intervalMs = 25;
    const step = (intervalMs / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalMs);

    const autoDismissTimeout = setTimeout(() => {
      onDismiss();
    }, totalDuration);

    return () => {
      clearInterval(timer);
      clearTimeout(autoDismissTimeout);
    };
  }, [onDismiss]);

  return (
    <motion.aside
      key="intro-splash"
      initial={{ opacity: 1 }}
      exit={{ y: '-100%', opacity: 0.96 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      role="dialog"
      aria-modal="true"
      aria-label="ANYA Beauty Center & Spa — Présentation officielle"
      className="fixed inset-0 z-[100] overflow-hidden bg-[#0D1C16] text-[#F5EFE6] flex items-center justify-center p-4 select-none touch-none"
    >
      {/* Botanical Palm Fronds (Pure SVG silhouettes, light opacity, zero heavy blur filters) */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -left-10 w-64 h-64 sm:w-80 sm:h-80 opacity-20 pointer-events-none text-[#050D0A]"
      >
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
          <path d="M10 10 Q100 80 180 170 C140 130 90 90 10 10 Z" />
          <path d="M10 40 C70 60 120 110 160 160 C110 110 60 70 10 40 Z" />
          <path d="M30 10 C60 70 110 120 160 150 C110 100 70 50 30 10 Z" />
        </svg>
      </div>

      <div
        aria-hidden="true"
        className="absolute -bottom-10 -right-10 w-64 h-64 sm:w-80 sm:h-80 opacity-20 pointer-events-none text-[#050D0A]"
      >
        <svg viewBox="0 0 200 200" fill="currentColor" className="w-full h-full">
          <path d="M190 190 Q100 120 20 30 C60 70 110 110 190 190 Z" />
          <path d="M190 160 C130 140 80 90 40 40 C90 90 140 130 190 160 Z" />
          <path d="M170 190 C140 130 90 80 40 50 C90 100 130 150 170 190 Z" />
        </svg>
      </div>

      {/* Top Floating Bar: Language Switch & Skip Button (Thumb friendly, min 44px) */}
      <div className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-6 z-40 flex items-center justify-between">
        {/* Language Switch */}
        <div className="flex items-center gap-1 p-1 rounded-full bg-[#162E23]/90 border border-[#C59B5F]/40 shadow-md">
          <Globe className="w-3.5 h-3.5 text-[#C59B5F] ms-2 me-1 shrink-0" />
          <button
            type="button"
            onClick={() => setLang('fr')}
            className={`min-h-[36px] min-w-[36px] px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-opacity ${
              lang === 'fr'
                ? 'bg-[#C59B5F] text-[#12241D]'
                : 'text-[#EAE0D0] hover:text-[#C59B5F]'
            }`}
            aria-label="Français"
          >
            FR
          </button>
          <button
            type="button"
            onClick={() => setLang('ar')}
            className={`min-h-[36px] min-w-[36px] px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-opacity ${
              lang === 'ar'
                ? 'bg-[#C59B5F] text-[#12241D]'
                : 'text-[#EAE0D0] hover:text-[#C59B5F]'
            }`}
            aria-label="العربية"
          >
            عربي
          </button>
        </div>

        {/* Skip button */}
        <button
          type="button"
          onClick={onDismiss}
          className="min-h-[44px] px-4 py-2 rounded-full bg-[#162E23]/90 border border-[#C59B5F]/40 text-xs font-medium text-[#EAE0D0] hover:text-[#C59B5F] transition-colors flex items-center gap-1.5 shadow-md"
          aria-label={lang === 'fr' ? "Passer l'intro" : 'تخطي المقدمة'}
        >
          <span>{lang === 'fr' ? 'Passer' : 'تخطي'}</span>
          <X className="w-3.5 h-3.5 text-[#C59B5F]" />
        </button>
      </div>

      {/* Hammam Arch Centerpiece */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative z-20 w-full max-w-[380px] rounded-t-[180px] rounded-b-[28px] border border-[#C59B5F]/40 bg-[#14261E] p-6 sm:p-8 flex flex-col items-center text-center shadow-2xl"
      >
        {/* Inner Arch Hairline */}
        <div className="absolute inset-1.5 pointer-events-none rounded-t-[172px] rounded-b-[22px] border border-[#F5EFE6]/10" />

        {/* Logo Display */}
        <div className="relative w-full flex items-center justify-center min-h-[90px] mb-3">
          {!isLogoFailed ? (
            <img
              src={currentLogoSrc}
              alt="ANYA BEAUTY CENTER & SPA"
              className="h-16 sm:h-20 w-auto max-w-[260px] object-contain"
              onError={handleLogoError}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-2">
              <h1 className="font-heading text-3xl sm:text-4xl font-normal text-[#F5EFE6] tracking-[0.25em] uppercase">
                ANYA
              </h1>
              <span className="text-[10px] tracking-[0.3em] text-[#C59B5F] uppercase mt-1">
                BEAUTY • CENTER • SPA
              </span>
            </div>
          )}
        </div>

        {/* Location Subtitle */}
        <div className="inline-block px-3.5 py-1 rounded-full bg-[#0E1E17] border border-[#C59B5F]/35 mb-3">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-[#C59B5F] uppercase">
            {lang === 'fr' ? 'ORAN • RÉSIDENCE HASNAOUI' : 'وهران • إقامة حسناوي'}
          </span>
        </div>

        {/* Bio Tagline */}
        <p className="text-xs text-[#EAE0D0]/90 font-body leading-relaxed max-w-xs mb-6">
          {lang === 'fr'
            ? 'Hammam traditionnel, coiffure & esthétique à Oran'
            : 'حمام تقليدي، تصفيف شعر وتجميل راقٍ في وهران'}
        </p>

        {/* Instant Enter Action (min 48px tap target) */}
        <button
          type="button"
          onClick={onDismiss}
          className="w-full min-h-[48px] px-6 py-3 rounded-full bg-[#C59B5F] hover:bg-[#d4ab70] text-[#12241D] font-semibold text-xs tracking-wider uppercase transition-transform active:scale-98 flex items-center justify-center gap-2 shadow-lg"
        >
          <span>{lang === 'fr' ? "ENTRER DANS L'UNIVERS ANYA" : 'ادخلي عالم أنيا'}</span>
          <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
        </button>

        {/* 2.0s Golden Progress Bar */}
        <div className="w-full mt-5 pt-3 border-t border-[#F5EFE6]/10 flex flex-col items-center gap-1.5">
          <div className="w-28 h-1 bg-[#F5EFE6]/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C59B5F] transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-[9px] text-[#8FA696] tracking-widest uppercase">
            {lang === 'fr' ? 'Immersion 2s' : 'لحظات ونبدأ'}
          </span>
        </div>
      </motion.div>
    </motion.aside>
  );
};
