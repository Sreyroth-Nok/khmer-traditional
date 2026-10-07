import type { TraditionalGame, Language } from '../../types/game';
import { KhmerFrameContainer } from '../layout/KhmerOrnament';
import { FESTIVALS } from '../../data/festivals';
import { MapPin, Tag } from 'lucide-react';

interface GameHeroProps {
  game: TraditionalGame;
  lang: Language;
}

export const GameHero: React.FC<GameHeroProps> = ({ game, lang }) => {
  const gameFestivals = FESTIVALS.filter(f => game.festivals.includes(f.id));

  return (
    <div className="relative rounded-3xl overflow-hidden bg-[#FFFDF7] border border-[#B88932]/30 shadow-md p-6 lg:p-8 mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#7A3030]/10 text-[#7A3030] text-xs font-khmer font-bold flex items-center gap-1 border border-[#7A3030]/20">
                <Tag size={12} />
                <span>{lang === 'kh' ? game.categoryKh : game.categoryEn}</span>
              </span>

              {gameFestivals.map(fest => (
                <span
                  key={fest.id}
                  className="px-3 py-1 rounded-full bg-[#B88932]/15 text-[#3B2922] text-xs font-khmer font-semibold flex items-center gap-1 border border-[#B88932]/30"
                >
                  <span>{fest.icon}</span>
                  <span>{lang === 'kh' ? fest.nameKh : fest.nameEn}</span>
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-khmer text-[#3B2922] leading-tight">
              {game.nameKh}
            </h1>
            <p className="text-lg md:text-xl font-bold font-inter text-[#B88932]">
              {game.nameEn}
            </p>
          </div>

          <p className="text-base md:text-lg font-khmer text-[#2B211C]/90 leading-relaxed bg-[#F8F1E3]/50 p-4 rounded-2xl border-l-4 border-[#B88932]">
            {lang === 'kh' ? game.descriptionKh : (game.descriptionEn || game.descriptionKh)}
          </p>

          {game.contextKh && (
            <div className="flex items-start gap-2.5 text-xs md:text-sm font-khmer text-[#3B2922]/80">
              <MapPin size={18} className="text-[#7A3030] shrink-0 mt-0.5" />
              <span>
                <strong>{lang === 'kh' ? 'បរិបទទីតាំង៖' : 'Context:'}</strong>{' '}
                {lang === 'kh' ? game.contextKh : (game.contextEn || game.contextKh)}
              </span>
            </div>
          )}
        </div>

        <div className="lg:col-span-5">
          <KhmerFrameContainer>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#B88932]/30 bg-[#E6D3A3]/30">
              <img
                src={game.image}
                alt={game.nameKh}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />
            </div>
          </KhmerFrameContainer>
        </div>

      </div>
    </div>
  );
};
