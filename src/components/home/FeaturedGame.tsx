import { Link } from 'react-router-dom';
import type { TraditionalGame, Language } from '../../types/game';
import { KhmerFrameContainer } from '../layout/KhmerOrnament';
import { KhmerFlower } from '../decorative/KhmerFlower';
import { Sparkles, ArrowRight, Users, Clock } from 'lucide-react';
import { FESTIVALS } from '../../data/festivals';

interface FeaturedGameProps {
  game: TraditionalGame;
  lang: Language;
}

export const FeaturedGame: React.FC<FeaturedGameProps> = ({ game, lang }) => {
  const gameFestivals = FESTIVALS.filter(f => game.festivals.includes(f.id));

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <div className="relative rounded-3xl bg-gradient-to-r from-[#FFFDF7] via-[#F8F1E3] to-[#FFFDF7] border-2 border-[#B88932]/50 shadow-xl p-6 md:p-10 lg:p-12 overflow-hidden">
        
        <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
          <KhmerFlower size={200} color="#7A3030" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="lg:col-span-6">
            <KhmerFrameContainer>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-[#B88932]/40 bg-[#3B2922]">
                <img
                  src={game.image}
                  alt={game.nameKh}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#7A3030] text-[#FFFDF7] text-xs font-khmer font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                  <Sparkles size={14} className="text-[#E6D3A3]" />
                  <span>{lang === 'kh' ? '🌟 ល្បែងប្រចាំថ្ងៃ' : '🌟 Featured Game'}</span>
                </div>
              </div>
            </KhmerFrameContainer>
          </div>

          <div className="lg:col-span-6 space-y-6">
            
            <div className="flex flex-wrap gap-2">
              {gameFestivals.map(fest => (
                <span
                  key={fest.id}
                  className="px-3 py-1 rounded-full bg-[#B88932]/20 text-[#3B2922] text-xs font-khmer font-bold border border-[#B88932]/40 flex items-center gap-1.5"
                >
                  <span>{fest.icon}</span>
                  <span>{lang === 'kh' ? fest.nameKh : fest.nameEn}</span>
                </span>
              ))}
            </div>

            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-khmer text-[#3B2922]">
                {game.nameKh}
              </h2>
              <p className="text-lg md:text-xl font-bold font-inter text-[#B88932]">
                {game.nameEn}
              </p>
            </div>

            <p className="text-base md:text-lg font-khmer text-[#2B211C]/90 leading-relaxed bg-[#FFFDF7]/80 p-5 rounded-2xl border border-[#B88932]/25 shadow-xs">
              {lang === 'kh' ? game.descriptionKh : (game.descriptionEn || game.descriptionKh)}
            </p>

            <div className="grid grid-cols-2 gap-4 text-xs md:text-sm font-khmer text-[#3B2922] pt-2">
              {game.players && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FFFDF7] border border-[#B88932]/20">
                  <Users size={18} className="text-[#7A3030]" />
                  <span><strong>{lang === 'kh' ? 'អ្នកលេង៖' : 'Players:'}</strong> {lang === 'kh' ? game.players : (game.playersEn || game.players)}</span>
                </div>
              )}
              {game.duration && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FFFDF7] border border-[#B88932]/20">
                  <Clock size={18} className="text-[#B88932]" />
                  <span><strong>{lang === 'kh' ? 'រយៈពេល៖' : 'Duration:'}</strong> {lang === 'kh' ? game.duration : (game.durationEn || game.duration)}</span>
                </div>
              )}
            </div>

            <div className="pt-2">
              <Link
                to={`/games/${game.slug}`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#7A3030] hover:bg-[#3B2922] text-[#FFFDF7] font-khmer font-bold text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>{lang === 'kh' ? 'ស្វែងយល់បន្ថែម' : 'Learn How to Play'}</span>
                <ArrowRight size={20} className="text-[#E6D3A3] group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};
