import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface MotionImageProps {
  src: string;
  alt: string;
  className?: string;
  showMotionBadge?: boolean;
  gameId?: string;
}

export const MotionImage: React.FC<MotionImageProps> = ({
  src,
  alt,
  className = '',
  showMotionBadge = true,
  gameId
}) => {
  const [isPlayingMotion, setIsPlayingMotion] = useState(true);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getMotionAnimationClass = () => {
    if (!isPlayingMotion) return '';

    const path = src.toLowerCase() + alt.toLowerCase() + (gameId || '').toLowerCase();

    if (path.includes('teanh-prot') || path.includes('tug')) {
      return 'animate-motion-teanh-prot';
    }
    if (path.includes('angkunh')) {
      return 'animate-motion-angkunh';
    }
    if (path.includes('vea-kam') || path.includes('pot')) {
      return 'animate-motion-vea-kam';
    }
    if (path.includes('boat') || path.includes('touk')) {
      return 'animate-motion-boat-race';
    }
    if (path.includes('chhoung')) {
      return 'animate-motion-chhoung';
    }

    return 'animate-motion-live';
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = -((y - centerY) / centerY) * 8;

    setTransform({ rotateX, rotateY, scale: 1.06 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden select-none cursor-pointer group perspective-1000 ${className}`}
      style={{ perspective: '1000px' }}
    >
      <div
        className="w-full h-full transition-transform duration-300 ease-out transform-gpu relative"
        style={{
          transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
          transformStyle: 'preserve-3d'
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-700 ${getMotionAnimationClass()}`}
        />

        {isPlayingMotion && (
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            <div className="absolute bottom-6 left-1/4 w-2 h-2 rounded-full bg-[#E6D3A3]/80 animate-particle" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-8 left-1/2 w-2.5 h-2.5 rounded-full bg-[#B88932]/70 animate-particle" style={{ animationDelay: '0.8s' }} />
            <div className="absolute bottom-10 right-1/4 w-2 h-2 rounded-full bg-[#FFFDF7]/90 animate-particle" style={{ animationDelay: '1.4s' }} />
          </div>
        )}

        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-inherit pointer-events-none" />
      </div>

      {showMotionBadge && (
        <div className="absolute top-3 right-3 z-30">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsPlayingMotion(!isPlayingMotion);
            }}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-khmer font-bold shadow-lg transition-all duration-300 ${
              isPlayingMotion
                ? 'bg-[#7A3030]/90 border-[#E6D3A3]/60 text-[#FFFDF7] hover:bg-[#3B2922]'
                : 'bg-[#3B2922]/80 border-[#B88932]/40 text-[#E6D3A3] hover:bg-[#7A3030]'
            }`}
            title={isPlayingMotion ? 'Pause Motion Photo' : 'Play Motion Photo'}
          >
            {isPlayingMotion ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6D3A3] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFFDF7]"></span>
                </span>
                <span>🔴 PLAYING MOTION</span>
                <Pause size={12} className="ml-0.5 opacity-80" />
              </>
            ) : (
              <>
                <Play size={12} className="fill-current text-[#E6D3A3]" />
                <span>PLAY MOTION</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
