import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

interface AnyaImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/4' | 'auto';
  vignetteType?:
    | 'hammam-arch'
    | 'brass-incense'
    | 'copper-pedicure'
    | 'perfume-tray'
    | 'balayage-waves'
    | 'triptych-pillars'
    | 'zellige-fountain'
    | 'tea-hospitality';
  slotLabel?: {
    fr: string;
    ar: string;
  };
  title?: string;
  isCover?: boolean;
}

export const AnyaImage: React.FC<AnyaImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = '4/3',
  vignetteType = 'hammam-arch',
  slotLabel,
  title,
  isCover = true,
}) => {
  const { lang, t } = useLanguage();
  const [loadFailed, setLoadFailed] = useState(false);

  const aspectStyles = {
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    '1/1': 'aspect-square',
    '3/4': 'aspect-[3/4]',
    'auto': '',
  };

  const renderBespokeVignette = () => {
    switch (vignetteType) {
      case 'copper-pedicure':
        return (
          <svg
            className="w-24 h-24 text-[#C59B5F] mb-3 animate-pulse motion-reduce:animate-none"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Copper basin outer rim */}
            <ellipse cx="50" cy="62" rx="42" ry="18" stroke="#C59B5F" strokeWidth="2.5" fill="#1F3A2E" />
            <ellipse cx="50" cy="60" rx="36" ry="14" stroke="#8FA696" strokeWidth="1.5" fill="#162B22" />
            {/* Water ripples */}
            <ellipse cx="50" cy="59" rx="24" ry="8" stroke="#C59B5F" strokeWidth="1" strokeDasharray="3 3" />
            {/* Floating flower petals */}
            <circle cx="42" cy="58" r="3.5" fill="#E07A8B" opacity="0.9" />
            <circle cx="58" cy="61" r="3" fill="#E07A8B" opacity="0.8" />
            <circle cx="50" cy="55" r="2.5" fill="#C59B5F" opacity="0.9" />
            {/* Gentle steam wisps */}
            <path d="M44 42 C42 34 48 30 46 22" stroke="#8FA696" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
            <path d="M54 44 C56 36 50 32 52 24" stroke="#8FA696" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
          </svg>
        );

      case 'perfume-tray':
        return (
          <svg
            className="w-24 h-24 text-[#C59B5F] mb-3"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Brass tray base */}
            <ellipse cx="50" cy="74" rx="44" ry="14" stroke="#C59B5F" strokeWidth="2" fill="#1F3A2E" />
            {/* Scent Flacon 1 (Tall) */}
            <rect x="34" y="38" width="12" height="26" rx="3" stroke="#C59B5F" strokeWidth="1.8" fill="#D4AF37" fillOpacity="0.25" />
            <path d="M37 38 L37 32 L43 32 L43 38" stroke="#C59B5F" strokeWidth="1.5" />
            <circle cx="40" cy="30" r="3" fill="#C59B5F" />
            {/* Scent Flacon 2 (Round) */}
            <circle cx="58" cy="54" r="10" stroke="#8FA696" strokeWidth="1.8" fill="#E07A8B" fillOpacity="0.25" />
            <rect x="56" y="40" width="4" height="5" stroke="#C59B5F" strokeWidth="1.2" fill="#C59B5F" />
            {/* Scent droplet */}
            <path d="M58 35 C56 38 60 38 58 35 Z" fill="#C59B5F" />
            {/* Expanding aroma waves */}
            <path d="M28 28 C34 22 46 22 52 28" stroke="#C59B5F" strokeWidth="1" strokeDasharray="2 3" opacity="0.6" />
          </svg>
        );

      case 'balayage-waves':
        return (
          <svg
            className="w-24 h-24 text-[#C59B5F] mb-3"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Sunburst radiance */}
            <circle cx="50" cy="50" r="38" stroke="#C59B5F" strokeWidth="1" strokeDasharray="2 4" opacity="0.4" />
            {/* Flowing hair waves */}
            <path d="M30 25 C45 35 35 65 48 85" stroke="#C59B5F" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M42 22 C55 35 48 65 60 85" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
            <path d="M54 25 C68 38 58 68 70 85" stroke="#8FA696" strokeWidth="1.8" strokeLinecap="round" />
            {/* Lotus petal crest */}
            <path d="M50 14 C46 20 46 24 50 28 C54 24 54 20 50 14 Z" fill="#C59B5F" />
          </svg>
        );

      case 'brass-incense':
        return (
          <svg
            className="w-24 h-24 text-[#C59B5F] mb-3"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ornate incense urn */}
            <ellipse cx="50" cy="76" rx="28" ry="8" stroke="#C59B5F" strokeWidth="2" fill="#1F3A2E" />
            <path d="M35 76 C32 60 38 48 50 48 C62 48 68 60 65 76 Z" stroke="#C59B5F" strokeWidth="2" fill="#162B22" />
            <path d="M42 48 L42 42 L58 42 L58 48" stroke="#C59B5F" strokeWidth="1.5" />
            <circle cx="50" cy="38" r="4" fill="#C59B5F" />
            {/* Rising smoke curls */}
            <path d="M48 34 C44 26 54 20 48 12" stroke="#8FA696" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
            <path d="M54 34 C58 26 50 18 56 10" stroke="#C59B5F" strokeWidth="1.2" strokeLinecap="round" opacity="0.75" />
          </svg>
        );

      case 'tea-hospitality':
        return (
          <svg
            className="w-24 h-24 text-[#C59B5F] mb-3"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Traditional Teapot */}
            <path d="M35 70 C28 58 32 46 45 46 C56 46 62 58 55 70 Z" stroke="#C59B5F" strokeWidth="2" fill="#1F3A2E" />
            <path d="M55 52 C65 52 68 64 54 68" stroke="#C59B5F" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M34 56 C24 50 20 42 22 36" stroke="#C59B5F" strokeWidth="1.8" strokeLinecap="round" />
            {/* Mint tea glass */}
            <path d="M68 56 L72 74 L80 74 L84 56 Z" stroke="#8FA696" strokeWidth="1.5" fill="#D4AF37" fillOpacity="0.2" />
            {/* Fresh mint leaf */}
            <path d="M76 56 C74 50 78 48 76 44" stroke="#8FA696" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );

      case 'hammam-arch':
      default:
        return (
          <svg
            className="w-24 h-24 text-[#C59B5F] mb-3"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Moroccan Archway Silhouette */}
            <path
              d="M24 82 L24 45 C24 25 38 18 50 14 C62 18 76 25 76 45 L76 82"
              stroke="#C59B5F"
              strokeWidth="2"
              strokeLinecap="round"
              fill="#162B22"
            />
            {/* Zellige water basin */}
            <path d="M34 82 L34 65 L66 65 L66 82" stroke="#8FA696" strokeWidth="1.5" />
            {/* Lotus floating inside arch */}
            <path d="M50 42 C47 48 47 52 50 56 C53 52 53 48 50 42 Z" fill="#C59B5F" />
            <path d="M50 56 C45 53 41 49 44 44 C48 47 49 52 50 56 Z" fill="#8FA696" />
            <path d="M50 56 C55 53 59 49 56 44 C52 47 51 52 50 56 Z" fill="#8FA696" />
          </svg>
        );
    }
  };

  if (loadFailed || !src) {
    return (
      <div
        className={`relative w-full ${aspectStyles[aspectRatio]} bg-gradient-to-br from-[#162B22] via-[#1F3A2E] to-[#12231B] rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-[#C59B5F]/30 overflow-hidden shadow-inner ${className}`}
      >
        {/* Subtle Moroccan zellige star lattice backdrop */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#C59B5F_1px,transparent_1px)] [background-size:20px_20px]" />

        {/* Radial candlelight glow */}
        <div className="absolute w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(197,155,95,0.2)_0%,transparent_70%)] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-xs space-y-2">
          {renderBespokeVignette()}

          {title && (
            <h4 className="font-heading text-lg sm:text-xl font-normal text-[#F7F3EB] tracking-wide line-clamp-1">
              {title}
            </h4>
          )}

          {slotLabel && (
            <div className="bg-[#162B22]/90 border border-[#C59B5F]/40 px-3.5 py-1 rounded-full text-[11px] text-[#EFE7DA] font-sans shadow-md">
              <span className="text-[#C59B5F] font-semibold mr-1 rtl:ml-1 rtl:mr-0">✦</span>
              {t(slotLabel)}
            </div>
          )}

          <p className="text-[10px] text-[#8FA696] font-sans tracking-widest uppercase mt-1">
            ANYA BEAUTY & SPA • ORAN
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden ${aspectStyles[aspectRatio]} bg-[#EAE0D0] rounded-2xl ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full transition-transform duration-700 ease-out ${
          isCover ? 'object-cover' : 'object-contain'
        }`}
        onError={() => setLoadFailed(true)}
        referrerPolicy="no-referrer"
        loading="lazy"
      />
    </div>
  );
};
