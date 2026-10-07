import { useEffect } from 'react';
import type { Language } from '../types/game';
import { Hero } from '../components/home/Hero';
import { FestivalCategories } from '../components/home/FestivalCategories';
import { FeaturedGame } from '../components/home/FeaturedGame';
import { GamePreview } from '../components/home/GamePreview';
import { GAMES } from '../data/games';

interface HomeProps {
  lang: Language;
  onOpenSearch?: () => void;
}

export const Home: React.FC<HomeProps> = ({ lang, onOpenSearch }) => {
  useEffect(() => {
    document.title = lang === 'kh'
      ? 'ល្បែងប្រពៃណីខ្មែរ | Khmer Traditional Games'
      : 'Khmer Traditional Games | Cambodian Culture & Heritage';
    window.scrollTo(0, 0);
  }, [lang]);

  const featured = GAMES.find(g => g.featured) || GAMES[0];

  return (
    <div className="min-h-screen bg-[#F8F1E3]">
      <Hero lang={lang} onOpenSearch={onOpenSearch} />
      <FeaturedGame game={featured} lang={lang} />
      <FestivalCategories lang={lang} />
      <GamePreview games={GAMES} lang={lang} />
    </div>
  );
};
