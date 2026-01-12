import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({
  className = '',
  showText = true,
  variant = 'light',
  size = 'md'
}: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14'
  };

  const textColor = variant === 'light' ? '#2F364A' : '#FFFFFF';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LogoIcon className={sizeClasses[size]} />
      {showText && (
        <span
          className={`font-bold ${size === 'sm' ? 'text-lg' : size === 'md' ? 'text-xl' : 'text-2xl'}`}
          style={{ color: textColor }}
        >
          MHSB
        </span>
      )}
    </div>
  );
}

interface LogoIconProps {
  className?: string;
}

export function LogoIcon({ className = '' }: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background swoosh/wave pattern */}
      <g opacity="0.3">
        <path
          d="M75 25C85 30 90 40 88 52C86 64 78 75 65 82C52 89 38 90 28 85"
          stroke="#9CA3AF"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M80 45C88 52 92 62 88 74C84 86 74 96 60 100"
          stroke="#9CA3AF"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M72 65C78 72 80 82 75 92"
          stroke="#9CA3AF"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
      </g>

      {/* Crown */}
      <path
        d="M30 22L38 10L50 20L62 10L70 22L65 25L50 18L35 25L30 22Z"
        fill="#E07555"
      />

      {/* Key head (circular part) */}
      <circle
        cx="50"
        cy="42"
        r="18"
        stroke="#E07555"
        strokeWidth="8"
        fill="none"
      />

      {/* Key shaft */}
      <rect
        x="46"
        y="56"
        width="8"
        height="50"
        fill="#E07555"
      />

      {/* Key teeth/notches */}
      <rect
        x="54"
        y="85"
        width="10"
        height="6"
        fill="#E07555"
      />
      <rect
        x="54"
        y="95"
        width="8"
        height="5"
        fill="#E07555"
      />
    </svg>
  );
}

export default Logo;
