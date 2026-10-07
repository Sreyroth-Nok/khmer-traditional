import React, { useState, useRef } from 'react';
import { Play, Pause, Film } from 'lucide-react';

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
  const isLeakKanseng = path.includes('leak-kanseng') || path.includes('kanseng');
  const isBayKhmoche = path.includes('bay-khmoche') || path.includes('khmoche');

  const getMotionAnimationClass = () => {
    if (!isPlayingMotion) return '';
    if (isTeanhProt) return 'animate-motion-teanh-prot';
    if (isAngkunh) return 'animate-motion-angkunh';
    if (isVeaKam) return 'animate-motion-vea-kam';
    if (isBoatRace) return 'animate-motion-boat-race';
    if (isChhoung) return 'animate-motion-chhoung';
    return 'animate-motion-live';
  };

  const getActivityLabel = () => {
    if (isAngkunh) return 'របៀបលេង៖ បោះ, ត្រកួស & មាន់ក្បាលជង្គង់ (Throwing & Knee-Flicking)';
    if (isTeanhProt) return 'សកម្មភាព៖ ប្រឹងទាញខ្សែព្រ័ត្រ និងស្រែកហ៊ោ (Tug-of-War Exertion)';
    if (isVeaKam) return 'សកម្មភាព៖ រុំភ្នែក ដើរវាយក្អមដីបែក (Blindfold Stick Swing & Pot Shatter)';
    if (isBoatRace) return 'សកម្មភាព៖ កីឡាករអុំទូកងច្រវ៉ាក់ស្មើចង្វាក់ (Synchronized Boat Rowing)';
    if (isChhoung) return 'សកម្មភាព៖ បោះឈូងឆ្លងឆ្លើយ និងរាំវង់ (Scarf Toss & Folk Dance)';
    if (isLeakKanseng) return 'សកម្មភាព៖ រត់លាក់កន្សែង និងដេញតាម (Circle Scarf Hiding & Chase)';
    if (isBayKhmoche) return 'សកម្មភាព៖ ចាប់គ្រាប់ដើរទម្លាក់តាមរន្ធ (Pit Pebble Sowing)';
    return 'សកម្មភាពលេងល្បែងប្រពៃណីខ្មែររស់រវើក (Live Traditional Gameplay)';
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

        {/* 🥥 5-6s BOS ANGKUNH GAMEPLAY MOTION OVERLAY */}
        {isPlayingMotion && isAngkunh && (
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {/* Parabola Trajectory Line */}
            <svg className="w-full h-full absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M 15 75 Q 45 25, 75 60"
                stroke="#E6D3A3"
                strokeWidth="1.5"
                strokeDasharray="4 3"
                fill="none"
                opacity="0.7"
              />
            </svg>

            {/* 5.5s Animated Flying Seed */}
            <div className="absolute left-[15%] top-[70%] animate-angkunh-seed-flight pointer-events-none">
              <div className="w-7 h-7 rounded-full bg-[#3B2922] border-2 border-[#B88932] shadow-xl flex items-center justify-center text-xs text-[#FFFDF7]">
                🌰
              </div>
            </div>

            {/* Impact Burst at Target Seed Row */}
            <div className="absolute left-[70%] top-[60%] w-10 h-10 rounded-full border-2 border-[#B88932] animate-ping opacity-80" />
            <div className="absolute left-[72%] top-[62%] w-4 h-4 rounded-full bg-[#7A3030] animate-ping opacity-90" />
          </div>
        )}

        {/* 🚣 5-6s KHMER BOAT RACING GAMEPLAY MOTION OVERLAY */}
        {isPlayingMotion && isBoatRace && (
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-blue-600/30 to-transparent animate-pulse" />
            <div className="absolute bottom-4 left-1/4 w-16 h-2 rounded-full bg-white/50 animate-ping" />
            <div className="absolute bottom-3 right-1/4 w-20 h-2 rounded-full bg-white/50 animate-ping" style={{ animationDelay: '0.6s' }} />
          </div>
        )}

        {/* 🪢 5-6s TEANH PROT GAMEPLAY MOTION OVERLAY */}
        {isPlayingMotion && isTeanhProt && (
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            <div className="absolute top-1/2 inset-x-4 h-2 bg-[#B88932]/40 rounded-full animate-pulse" />
            <div className="absolute top-[48%] left-1/2 -translate-x-1/2 w-4 h-6 bg-[#7A3030] rounded-sm shadow-md animate-bounce" />
          </div>
        )}

        {/* 🏺 5-6s VEA KAM GAMEPLAY MOTION OVERLAY */}
        {isPlayingMotion && isVeaKam && (
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-dashed border-[#B88932] animate-spin" />
            <div className="absolute top-[28%] left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FFFDF7]/60 animate-ping" style={{ animationDelay: '2.5s' }} />
          </div>
        )}

        {/* 🌸 5-6s CHOL CHHOUNG GAMEPLAY MOTION OVERLAY */}
        {isPlayingMotion && isChhoung && (
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            <div className="absolute left-[20%] top-[65%] animate-chhoung-flight pointer-events-none">
              <div className="w-6 h-6 rounded-full bg-[#7A3030] border-2 border-[#E6D3A3] shadow-lg flex items-center justify-center text-[10px] text-white font-bold">
                🎀
              </div>
            </div>
          </div>
        )}

        {/* 5-6s Motion Progress Bar at Bottom of Image */}
        {isPlayingMotion && (
          <div className="absolute bottom-0 inset-x-0 h-1 bg-black/40 z-20">
            <div className="h-full bg-gradient-to-r from-[#B88932] via-[#7A3030] to-[#E6D3A3] animate-pulse" style={{ width: '100%' }} />
          </div>
        )}

        {/* Gameplay Activity Banner Overlay */}
        {isPlayingMotion && (
          <div className="absolute bottom-2 left-2 right-2 z-20 bg-[#3B2922]/90 backdrop-blur-md border border-[#B88932]/50 text-[#F8F1E3] text-[10px] md:text-xs font-khmer p-2 rounded-xl flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-1.5 truncate">
              <span className="w-2 h-2 rounded-full bg-[#7A3030] animate-ping shrink-0" />
              <span className="truncate font-semibold text-[#E6D3A3]">{getActivityLabel()}</span>
            </div>
            <div className="flex items-center gap-1 shrink-0 bg-[#7A3030] px-2 py-0.5 rounded-full text-[9px] font-inter font-bold text-white">
              <Film size={10} />
              <span>5.5s VIDEO</span>
            </div>
          </div>
        )}

        {/* Light Sweep Shimmer */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-inherit pointer-events-none" />
      </div>

      {/* Motion Video Badge & Play/Pause Controller */}
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
            title={isPlayingMotion ? 'Pause 5s Motion Video' : 'Play 5s Motion Video'}
          >
            {isPlayingMotion ? (
              <>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6D3A3] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFFDF7]"></span>
                </span>
                <span>🔴 5s MOTION VIDEO</span>
                <Pause size={12} className="ml-0.5 opacity-80" />
              </>
            ) : (
              <>
                <Play size={12} className="fill-current text-[#E6D3A3]" />
                <span>PLAY 5s VIDEO</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
