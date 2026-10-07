import React from 'react';

interface KhmerOrnamentProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'header' | 'frame';
  size?: number;
  color?: string;
  className?: string;
}

export const KhmerOrnament: React.FC<KhmerOrnamentProps> = ({
  position = 'top-left',
  size = 48,
  color = '#B88932',
  className = ''
}) => {
  if (position === 'header') {
    return (
      <div className={`w-full flex items-center justify-between px-2 opacity-70 ${className}`} aria-hidden="true">
        <svg width="60" height="24" viewBox="0 0 100 40" fill="none">
          <path d="M0 20 Q 25 0, 50 20 T 100 20" stroke={color} strokeWidth="3" fill="none" />
          <circle cx="50" cy="20" r="5" fill={color} />
        </svg>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#B88932]/40 to-transparent mx-2" />
        <svg width="60" height="24" viewBox="0 0 100 40" fill="none" className="rotate-180">
          <path d="M0 20 Q 25 0, 50 20 T 100 20" stroke={color} strokeWidth="3" fill="none" />
          <circle cx="50" cy="20" r="5" fill={color} />
        </svg>
      </div>
    );
  }

  const getRotation = () => {
    switch (position) {
      case 'top-right': return 'rotate-90';
      case 'bottom-right': return 'rotate-180';
      case 'bottom-left': return '-rotate-90';
      default: return '';
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none pointer-events-none ${getRotation()} ${className}`}
      aria-hidden="true"
    >
      {/* Corner Outer Flourish Line */}
      <path
        d="M 4 56 L 4 16 C 4 8, 8 4, 16 4 L 56 4"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Inner Decorative Curve */}
      <path
        d="M 10 50 L 10 22 C 10 14, 14 10, 22 10 L 50 10"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
      {/* Corner Flame Motif (Kbach Phni) */}
      <path
        d="M 16 16 C 24 8, 30 20, 16 30 C 12 22, 8 24, 16 16 Z"
        fill={color}
        opacity="0.85"
      />
      <circle cx="16" cy="16" r="3" fill="#FFFDF7" />
      <circle cx="6" cy="6" r="2" fill={color} />
    </svg>
  );
};

export const KhmerFrameContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Corner Ornaments */}
      <div className="absolute top-1 left-1 z-10">
        <KhmerOrnament position="top-left" size={32} />
      </div>
      <div className="absolute top-1 right-1 z-10">
        <KhmerOrnament position="top-right" size={32} />
      </div>
      <div className="absolute bottom-1 left-1 z-10">
        <KhmerOrnament position="bottom-left" size={32} />
      </div>
      <div className="absolute bottom-1 right-1 z-10">
        <KhmerOrnament position="bottom-right" size={32} />
      </div>

      {children}
    </div>
  );
};
