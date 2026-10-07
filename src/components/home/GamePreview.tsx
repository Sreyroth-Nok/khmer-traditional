import { Link } from 'react-router-dom';
import type { TraditionalGame, Language } from '../../types/game';
import { KhmerDivider } from '../decorative/KhmerDivider';
import { GameGrid } from '../games/GameGrid';
import { ArrowRight, Sparkles } from 'lucide-react';

interface GamePreviewProps {
  games: TraditionalGame[];
  lang: Language;
}

export const GamePreview: React.FC<GamePreviewProps> = ({ games, lang }) => {
  const previewGames = games.slice(0, 6);

  return (
    <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <KhmerDivider
        title={lang === 'kh' ? '🎮 ល្បែងប្រពៃណីពេញនិយម' : '🎮 Popular Traditional Games'}
        subtitle={lang === 'kh'
          ? 'ស្វែងយល់ពីរបៀបលេង ច្បាប់ និងអត្ថន័យវប្បធម៌នៃល្បែងប្រជាប្រិយខ្មែរ'
          : 'Discover rules, player steps, and cultural meaning of iconic Cambodian traditional games'}
      />

      <div className="mt-8">
        <GameGrid games={previewGames} lang={lang} />
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/games"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#3B2922] hover:bg-[#7A3030] text-[#E6D3A3] hover:text-[#FFFDF7] font-khmer font-bold text-base md:text-lg border-2 border-[#B88932] shadow-md hover:shadow-xl transition-all duration-300 group"
        >
          <Sparkles size={20} className="text-[#B88932] group-hover:rotate-12 transition-transform" />
          <span>{lang === 'kh' ? 'មើលល្បែងទាំងអស់ (៧+)' : 'Explore All Games (7+)'}</span>
          <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
        </Link>
      </div>

    </section>
  );
};
