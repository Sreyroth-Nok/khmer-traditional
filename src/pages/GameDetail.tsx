import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Language } from '../types/game';
import { getGameBySlug } from '../utils/gameUtils';
import { GameHero } from '../components/games/GameHero';
import { HowToPlay } from '../components/games/HowToPlay';
import { GameInformation } from '../components/games/GameInformation';
import { GameGrid } from '../components/games/GameGrid';
import { KhmerDivider } from '../components/decorative/KhmerDivider';
import { GAMES } from '../data/games';
import { ArrowLeft, BookOpen } from 'lucide-react';

interface GameDetailProps {
  lang: Language;
}

export const GameDetail: React.FC<GameDetailProps> = ({ lang }) => {
  const { slug } = useParams<{ slug: string }>();
  const game = getGameBySlug(slug || '');

  useEffect(() => {
    if (game) {
      document.title = `${game.nameKh} (${game.nameEn}) | ល្បែងប្រពៃណីខ្មែរ`;
    }
    window.scrollTo(0, 0);
  }, [game, lang]);

  if (!game) {
    return (
      <div className="min-h-screen bg-[#F8F1E3] py-20 px-4 text-center">
        <h1 className="text-3xl font-bold font-khmer text-[#3B2922] mb-4">
          {lang === 'kh' ? 'មិនរកឃើញល្បែងនេះទេ' : 'Game Not Found'}
        </h1>
        <Link
          to="/games"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#7A3030] text-[#FFFDF7] font-khmer font-bold"
        >
          <ArrowLeft size={18} />
          <span>{lang === 'kh' ? 'ត្រឡប់ទៅបណ្តុំល្បែង' : 'Back to Games Library'}</span>
        </Link>
      </div>
    );
  }

  const relatedGames = GAMES.filter(g => g.id !== game.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F8F1E3] py-8 md:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      <Link
        to="/games"
        className="inline-flex items-center gap-2 text-sm font-khmer font-bold text-[#3B2922] hover:text-[#7A3030] transition-colors"
      >
        <ArrowLeft size={16} />
        <span>{lang === 'kh' ? '← ត្រឡប់ទៅល្បែងទាំងអស់' : '← Back to All Games'}</span>
      </Link>

      <GameHero game={game} lang={lang} />

      <div className="bg-[#FFFDF7] p-6 lg:p-8 rounded-3xl border border-[#B88932]/30 shadow-xs space-y-4">
        <div className="flex items-center gap-3 border-b border-[#B88932]/20 pb-3">
          <BookOpen size={24} className="text-[#7A3030]" />
          <h2 className="text-2xl font-bold font-khmer text-[#3B2922]">
            📖 {lang === 'kh' ? 'អំពីល្បែង' : 'About the Game'}
          </h2>
        </div>
        <p className="text-base md:text-lg font-khmer text-[#2B211C]/90 leading-relaxed">
          {lang === 'kh' ? game.aboutKh : (game.aboutEn || game.aboutKh)}
        </p>
      </div>

      <HowToPlay
        steps={game.howToPlay}
        image={game.image}
        gameNameKh={game.nameKh}
        lang={lang}
      />

      <GameInformation game={game} lang={lang} />

      <div className="pt-8">
        <KhmerDivider
          title={lang === 'kh' ? '✨ ស្វែងយល់ល្បែងផ្សេងទៀត' : '✨ Explore Other Traditional Games'}
          subtitle={lang === 'kh' ? 'បន្តស្វែងយល់ និងរៀនអំពីល្បែងប្រពៃណីខ្មែរនានា' : 'Discover more traditional games in our collection'}
        />

        <div className="mt-8">
          <GameGrid games={relatedGames} lang={lang} />
        </div>
      </div>

    </div>
  );
};
