import React from 'react';

interface LotusWaveDividerProps {
  className?: string;
  color?: string;
  accentColor?: string;
  inverted?: boolean;
}

export const LotusWaveDivider: React.FC<LotusWaveDividerProps> = ({
  className = '',
  color = '#8FA696',
  accentColor = '#C59B5F',
}) => {
  return (
    <div
      className={`w-full flex items-center justify-center py-6 overflow-hidden select-none pointer-events-none opacity-80 ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-3 w-full max-w-md px-6">
        {/* Left flowing wave line */}
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#C59B5F]/40 to-[#C59B5F]" />

        {/* Center lotus icon mark */}
        <svg
          className="w-8 h-8 shrink-0 text-[#C59B5F]"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Lotus center */}
          <path
            d="M20 6 C17 14 17 20 20 25 C23 20 23 14 20 6 Z"
            fill={accentColor}
          />
          {/* Left petal */}
          <path
            d="M20 25 C14 21 10 16 13 10 C18 14 19 20 20 25 Z"
            fill={accentColor}
            fillOpacity="0.8"
          />
          {/* Right petal */}
          <path
            d="M20 25 C26 21 30 16 27 10 C22 14 21 20 20 25 Z"
            fill={accentColor}
            fillOpacity="0.8"
          />
          {/* Wave ripple base */}
          <path
            d="M8 29 C14 27 26 27 32 30"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M12 33 C18 31 24 31 28 34"
            stroke={color}
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.7"
          />
        </svg>

        {/* Right flowing wave line */}
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#C59B5F]/40 to-[#C59B5F]" />
      </div>
    </div>
  );
};
