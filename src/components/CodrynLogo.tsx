import React from 'react';

interface CodrynLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const CodrynLogo: React.FC<CodrynLogoProps> = ({
  className = '',
  iconOnly = false,
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon SVG: Minimalist, geometric, clean developer mark */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-xl bg-[#0F0F11] border border-white/10 shadow-inner group-hover:border-[#168BFF]/40 transition-colors duration-300`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/6 h-5/6"
        >
          {/* Subtle background glow dot */}
          <circle cx="18" cy="18" r="4" fill="#168BFF" fillOpacity="0.25" />
          
          {/* Left bracket / chevron */}
          <path
            d="M13 11L7 18L13 25"
            stroke="#168BFF"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Center connector node */}
          <circle cx="18" cy="18" r="2.25" fill="#FFFFFF" />
          
          {/* Right bracket / chevron */}
          <path
            d="M23 11L29 18L23 25"
            stroke="#FFFFFF"
            strokeWidth="2.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-bold tracking-tight text-white ${textSizes[size]}`}
            >
              Codryn
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#168BFF]" />
          </div>
        </div>
      )}
    </div>
  );
};
