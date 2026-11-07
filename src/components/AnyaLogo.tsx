import React, { useState } from 'react';
import { ASSETS } from '../data/assets.ts';

interface AnyaLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'cream';
  showSubtitle?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  forceSvg?: boolean;
}

export const AnyaLogo: React.FC<AnyaLogoProps> = ({
  className = '',
  variant = 'light',
  showSubtitle = true,
  size = 'md',
  forceSvg = false,
}) => {
  const [imgError, setImgError] = useState(false);

  const heights = {
    sm: 'h-9',
    md: 'h-11',
    lg: 'h-14',
    xl: 'h-20',
  };

  const textColor = variant === 'dark' ? 'text-[#1C1917]' : 'text-[#F7F3EB]';
  const subtitleColor = variant === 'dark' ? 'text-[#57534E]' : 'text-[#8FA696]';
  const accentColor = '#C59B5F';

  if (!forceSvg && !imgError) {
    return (
      <div className={`flex items-center justify-center select-none ${className}`}>
        <img
          src={ASSETS.logoTransparent}
          alt="ANYA Beauty Center & Spa"
          className={`${heights[size]} w-auto max-w-[240px] object-contain transition-opacity duration-300 ${
            variant === 'dark' ? 'invert filter brightness-0' : ''
          }`}
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Clean SVG Lotus-Wave + ANYA wordmark fallback
  return (
    <div className={`flex flex-col items-center justify-center text-center select-none ${className}`}>
      <svg
        className={`${heights[size]} w-auto text-[#C59B5F]`}
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Center petal */}
        <path
          d="M100 8 C95 24 93 36 100 48 C107 36 105 24 100 8 Z"
          fill={accentColor}
        />
        {/* Inner left petal */}
        <path
          d="M100 48 C88 38 78 28 85 16 C95 22 98 34 100 48 Z"
          fill={accentColor}
          fillOpacity="0.85"
        />
        {/* Inner right petal */}
        <path
          d="M100 48 C112 38 122 28 115 16 C105 22 102 34 100 48 Z"
          fill={accentColor}
          fillOpacity="0.85"
        />
        {/* Outer left petal */}
        <path
          d="M100 50 C76 42 64 36 72 26 C82 32 89 42 100 50 Z"
          fill={accentColor}
          fillOpacity="0.7"
        />
        {/* Outer right petal */}
        <path
          d="M100 50 C124 42 136 36 128 26 C118 32 111 42 100 50 Z"
          fill={accentColor}
          fillOpacity="0.7"
        />
        {/* Base arch of lotus */}
        <path
          d="M86 52 C94 47 106 47 114 52"
          stroke={accentColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Dual wave water ripples */}
        <path
          d="M45 56 C75 52 125 51 165 60"
          stroke={accentColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M55 62 C85 58 120 57 155 65"
          stroke={accentColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />
      </svg>

      <span
        className={`font-heading tracking-[0.25em] font-medium leading-none ${textColor} ${
          size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl'
        }`}
      >
        ANYA
      </span>
      {showSubtitle && (
        <span
          className={`tracking-[0.3em] uppercase text-[9px] font-sans mt-0.5 ${subtitleColor}`}
        >
          BEAUTY • CENTER • SPA
        </span>
      )}
    </div>
  );
};
