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

  const path = (src + alt + (gameId || '')).toLowerCase();
  const isAngkunh = path.includes('angkunh');
  const isTeanhProt = path.includes('teanh-prot') || path.includes('tug');
  const isVeaKam = path.includes('vea-kam') || path.includes('pot');
  const isBoatRace = path.includes('boat') || path.includes('touk');
  const isChhoung = path.includes('chhoung');

  const getMotionAnimationClass = () => {
    if (!isPlayingMotion) return '';
    if (isTeanhProt) return 'animate-motion-teanh-prot';
    if (isAngkunh) return 'animate-motion-angkunh';
    if (isVeaKam) return 'animate-motion-vea-kam';
    if (isBoatRace) return 'animate-motion-boat-race';
    if (isChhoung) return 'animate-motion-chhoung';
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
        {/* Dynamic Image Motion Layer */}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-700 ${getMotionAnimationClass()}`}
        />

        {/* 🥥 BOS ANGKUNH GAMEPLAY MOTION FX OVERLAY */}
        {isPlayingMotion && isAngkunh && (
          <div className="absolute inset-0 pointer-events-none z-10">
            {/* Flying Spinning Angkunh Seed Trajectory */}
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M 20 80 Q 45 35, 75 65"
                stroke="#E6D3A3"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                fill="none"
                opacity="0.6"
              />
            </svg>

            {/* Flying Seed 1 */}
            <div
              className="absolute w-6 h-6 rounded-full bg-[#3B2922] border-2 border-[#B88932] shadow-md flex items-center justify-center text-[8px] text-[#FFFDF7] animate-bounce pointer-events-none"
              style={{
                left: '60%',
                top: '55%',
                transition: 'all 0.5s ease'
              }}
            >
              🌰
            </div>

            {/* Target Seed Hit Impact Ripple */}
            <div className="absolute left-[70%] top-[60%] w-8 h-8 rounded-full border border-[#B88932] animate-ping opacity-75" />

            {/* Live Gameplay Action Tag */}
            <div className="absolute bottom-3 left-3 bg-[#3B2922]/90 border border-[#B88932]/50 text-[#E6D3A3] text-[10px] font-khmer px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#B88932] animate-ping" />
              <span>សកម្មភាព៖ បោះ & ត្រកួសផ្លែអង្គញ់</span>
            </div>
          </div>
        )}

        {/* 🚣 BOAT RACING GAMEPLAY MOTION FX OVERLAY */}
        {isPlayingMotion && isBoatRace && (
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {/* River Spray Wave Ripples */}
            <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-blue-500/20 to-transparent animate-pulse" />
            <div className="absolute bottom-4 left-1/3 w-12 h-2 rounded-full bg-white/40 animate-ping" />
            <div className="absolute bottom-3 right-1/3 w-16 h-2 rounded-full bg-white/40 animate-ping" style={{ animationDelay: '0.5s' }} />

            <div className="absolute bottom-3 left-3 bg-[#3B2922]/90 border border-[#B88932]/50 text-[#E6D3A3] text-[10px] font-khmer px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              <span>សកម្មភាព៖ ច្រវ៉ាក់ទូកងស្ទុះល្បឿន</span>
            </div>
          </div>
        )}

        {/* 🪢 TEANH PROT GAMEPLAY MOTION FX OVERLAY */}
        {isPlayingMotion && isTeanhProt && (
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute bottom-3 left-3 bg-[#3B2922]/90 border border-[#B88932]/50 text-[#E6D3A3] text-[10px] font-khmer px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#7A3030] animate-ping" />
              <span>សកម្មភាព៖ ប្រឹងទាញខ្សែព្រ័ត្ររួមគ្នា</span>
            </div>
          </div>
        )}

        {/* 🏺 VEA KAM GAMEPLAY MOTION FX OVERLAY */}
        {isPlayingMotion && isVeaKam && (
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute bottom-3 left-3 bg-[#3B2922]/90 border border-[#B88932]/50 text-[#E6D3A3] text-[10px] font-khmer px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#B88932] animate-ping" />
              <span>សកម្មភាព៖ រុំភ្នែកវាយក្អមដី</span>
            </div>
          </div>
        )}

        {/* Floating Particles */}
        {isPlayingMotion && (
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            <div className="absolute bottom-6 left-1/4 w-2 h-2 rounded-full bg-[#E6D3A3]/80 animate-particle" style={{ animationDelay: '0s' }} />
            <div className="absolute bottom-8 left-1/2 w-2.5 h-2.5 rounded-full bg-[#B88932]/70 animate-particle" style={{ animationDelay: '0.8s' }} />
            <div className="absolute bottom-10 right-1/4 w-2 h-2 rounded-full bg-[#FFFDF7]/90 animate-particle" style={{ animationDelay: '1.4s' }} />
          </div>
        )}

        {/* Dynamic Light Sweep */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-inherit pointer-events-none" />
      </div>

      {/* Motion Photo Controller */}
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
