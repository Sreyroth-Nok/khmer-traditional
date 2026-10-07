import { Link } from 'react-router-dom';
import type { TraditionalGame, Language } from '../../types/game';
import { KhmerFrameContainer } from '../layout/KhmerOrnament';
import { MotionImage } from '../decorative/MotionImage';
import { Sparkles, ArrowRight, Users, Clock } from 'lucide-react';
import { FESTIVALS } from '../../data/festivals';

interface GameCardProps {
  game: TraditionalGame;
  lang: Language;
}

export const GameCard: React.FC<GameCardProps> = ({ game, lang }) => {
  const gameFestivals = FESTIVALS.filter(f => game.festivals.includes(f.id));

  return (
    <KhmerFrameContainer className="h-full">
      <div className="h-full bg-[#FFFDF7] rounded-2xl khmer-card-border overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
        
        <div>
          {/* Motion Photo Container */}
          <div className="relative aspect-[4/3] overflow-hidden bg-[#E6D3A3]/20">
            <MotionImage
              src={game.image}
              alt={game.nameKh}
              className="w-full h-full"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#3B2922]/80 via-transparent to-transparent pointer-events-none z-10" />

            {game.featured && (
              <div className="absolute top-3 left-3 z-20 bg-[#7A3030] text-[#FFFDF7] text-xs font-khmer font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                <Sparkles size={13} className="text-[#E6D3A3]" />
                <span>{lang === 'kh' ? 'ល្បែងប្រចាំថ្ងៃ' : 'Featured Game'}</span>
              </div>
            )}

            <div className="absolute bottom-3 left-3 right-3 z-20 flex flex-wrap gap-1.5">
              {gameFestivals.map(fest => (
                <span
                  key={fest.id}
                  className="bg-[#FFFDF7]/90 text-[#3B2922] backdrop-blur-xs text-xs font-khmer px-2.5 py-0.5 rounded-full border border-[#B88932]/40 shadow-xs flex items-center gap-1"
                >
                  <span>{fest.icon}</span>
                  <span>{lang === 'kh' ? fest.nameKh : fest.nameEn}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="p-5 space-y-3">
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-khmer text-[#3B2922] group-hover:text-[#7A3030] transition-colors">
                {game.nameKh}
              </h3>
              <p className="text-sm font-semibold font-inter text-[#B88932]">
                {game.nameEn}
              </p>
            </div>

            <p className="text-sm font-khmer text-[#2B211C]/80 line-clamp-3 leading-relaxed">
              {lang === 'kh' ? game.descriptionKh : (game.descriptionEn || game.descriptionKh)}
            </p>

            <div className="pt-2 flex items-center justify-between text-xs font-khmer text-[#3B2922]/70 border-t border-[#B88932]/15">
              {game.players && (
                <div className="flex items-center gap-1.5">
                  <Users size={14} className="text-[#7A3030]" />
                  <span>{lang === 'kh' ? game.players : (game.playersEn || game.players)}</span>
                </div>
              )}
              {game.duration && (
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-[#B88932]" />
                  <span>{lang === 'kh' ? game.duration : (game.durationEn || game.duration)}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="p-5 pt-0">
          <Link
            to={`/games/${game.slug}`}
            className="w-full py-2.5 px-4 rounded-xl bg-[#F8F1E3] hover:bg-[#7A3030] text-[#3B2922] hover:text-[#FFFDF7] border border-[#B88932]/30 hover:border-[#7A3030] font-khmer font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-xs"
          >
            <span>{lang === 'kh' ? 'មើលបន្ថែម' : 'Learn How to Play'}</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </KhmerFrameContainer>
  );
};
