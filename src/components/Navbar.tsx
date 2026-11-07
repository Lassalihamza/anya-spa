import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { AnyaLogo } from './AnyaLogo.tsx';
import { Phone, Globe, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onReplayIntro: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  onReplayIntro,
}) => {
  const { lang, toggleLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t(CONTENT.nav.home) },
    { id: 'services', label: t(CONTENT.nav.services) },
    { id: 'gallery', label: t(CONTENT.nav.gallery) },
    { id: 'about', label: t(CONTENT.nav.about) },
    { id: 'contact', label: t(CONTENT.nav.contact) },
  ];

  return (
    <header
      className={`sticky top-0 z-30 w-full transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#0E1E17]/95 border-b border-[#C59B5F]/25 shadow-md py-2 sm:py-2.5'
          : 'bg-[#0E1E17]/85 border-b border-[#F6F2EB]/10 py-2 sm:py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Logo Column */}
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center text-start group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B5F] rounded-lg p-1 min-h-[44px]"
            aria-label="ANYA Beauty Center & Spa - Accueil"
          >
            <AnyaLogo size="sm" variant="light" showSubtitle={true} className="sm:hidden" />
            <AnyaLogo size="md" variant="light" showSubtitle={true} className="hidden sm:flex" />
          </button>

          {/* Desktop Nav Links (Hidden on mobile) */}
          <nav
            aria-label="Navigation principale"
            className="hidden md:flex items-center p-1 bg-[#1F3A2E]/60 border border-[#8FA696]/25 rounded-full"
          >
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => onNavigate(link.id)}
                  className={`min-h-[38px] px-3.5 lg:px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B5F] ${
                    isActive
                      ? 'bg-[#C59B5F] text-[#162B22] font-semibold shadow-xs'
                      : 'text-[#EFE7DA] hover:text-[#F7F3EB] hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Items: Sparkles, Language switch, Phone call, Book CTA */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Replay Intro Button (Icon on mobile, text on desktop) */}
            <button
              type="button"
              onClick={onReplayIntro}
              className="min-h-[44px] min-w-[44px] sm:min-w-0 inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs text-[#C59B5F] hover:text-[#F7F3EB] bg-[#1F3A2E] hover:bg-[#162B22] border border-[#C59B5F]/40 transition-colors shadow-xs"
              title={t(CONTENT.nav.replayIntro)}
              aria-label={t(CONTENT.nav.replayIntro)}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C59B5F]" />
              <span className="hidden sm:inline font-medium text-[11px]">{t(CONTENT.nav.replayIntro)}</span>
            </button>

            {/* Bilingual Switcher (Tap target >= 44px) */}
            <button
              type="button"
              onClick={toggleLang}
              className="min-h-[44px] px-3 py-1.5 rounded-full text-xs text-[#EFE7DA] hover:text-[#C59B5F] bg-[#1F3A2E]/80 border border-[#8FA696]/30 hover:border-[#C59B5F] transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B5F]"
              title="Changer de langue / تغيير اللغة"
              aria-label={`Changer de langue vers ${lang === 'fr' ? 'Arabe' : 'Français'}`}
            >
              <Globe className="w-3.5 h-3.5 text-[#C59B5F]" />
              <span className="font-semibold text-xs tracking-wide">
                {lang === 'fr' ? 'العربية' : 'Français'}
              </span>
            </button>

            {/* Quick Call on mobile */}
            <a
              href={`tel:${CONTENT.brand.phoneRaw}`}
              className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-[#162A21] border border-[#C59B5F]/40 text-[#C59B5F] hover:bg-[#12231B] transition-colors"
              aria-label={`Appeler ANYA au ${CONTENT.brand.phoneFormatted}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Primary Booking CTA (Desktop only - mobile has persistent bottom bar) */}
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="hidden md:inline-flex items-center justify-center min-h-[40px] px-5 py-2 text-xs font-semibold tracking-widest uppercase bg-[#C59B5F] hover:bg-[#b88e52] text-[#162B22] rounded-full transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C59B5F] whitespace-nowrap"
            >
              {t(CONTENT.nav.bookCta)}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
