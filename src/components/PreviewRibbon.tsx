import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { CONTENT } from '../data/content.ts';
import { X, Sparkles } from 'lucide-react';

export const PreviewRibbon: React.FC = () => {
  const { t } = useLanguage();
  const [minimized, setMinimized] = useState(false);

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-20 start-4 md:bottom-5 md:start-5 z-30 min-h-[44px] min-w-[44px] p-2.5 rounded-full bg-[#0E1E17]/95 border border-[#C59B5F]/40 text-[#C59B5F] shadow-lg flex items-center justify-center transition-transform active:scale-95"
        title={t(CONTENT.brand.previewRibbon)}
        aria-label={t(CONTENT.brand.previewRibbon)}
      >
        <Sparkles className="w-4 h-4" />
      </button>
    );
  }

  return (
    <aside
      aria-label="Demonstration preview notification"
      className="fixed bottom-20 start-4 md:bottom-5 md:start-5 z-30 flex items-center gap-2 bg-[#0E1E17]/95 border border-[#C59B5F]/40 rounded-full px-3 py-1.5 shadow-xl text-[#F7F3EB] text-xs font-sans select-none"
    >
      {/* Warm Gold Indicator Dot */}
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C59B5F]" />
      </span>

      <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-[#EFE7DA] whitespace-nowrap">
        {t(CONTENT.brand.previewRibbon)}
      </span>

      {/* Minimize button (min 44px tap zone with padding) */}
      <button
        onClick={() => setMinimized(true)}
        className="ms-1 p-1 text-[#8FA696] hover:text-[#F7F3EB] rounded-full transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center"
        aria-label="Réduire la notification"
      >
        <X className="w-3 h-3" />
      </button>
    </aside>
  );
};
