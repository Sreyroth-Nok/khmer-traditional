import type { TraditionalGame, Language } from '../../types/game';
import { GameCard } from './GameCard';

interface GameGridProps {
  games: TraditionalGame[];
  lang: Language;
  emptyTitle?: string;
  emptySubtitle?: string;
}

export const GameGrid: React.FC<GameGridProps> = ({
  games,
  lang,
  emptyTitle,
  emptySubtitle
}) => {
  if (games.length === 0) {
    return (
      <div className="bg-[#FFFDF7] p-12 rounded-3xl border border-[#B88932]/30 text-center max-w-lg mx-auto my-8 space-y-4">
        <div className="text-4xl">🔍</div>
        <h3 className="text-xl font-bold font-khmer text-[#3B2922]">
          {emptyTitle || (lang === 'kh' ? 'មិនរកឃើញល្បែងប្រពៃណី' : 'No games found')}
        </h3>
        <p className="text-sm font-khmer text-[#3B2922]/70">
          {emptySubtitle || (lang === 'kh' ? 'សូមព្យាយាមស្វែងរកពាក្យគន្លឹះផ្សេងទៀត ឬជ្រើសរើសពិធីបុណ្យផ្សេង។' : 'Try searching for a different keyword or festival category.')}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {games.map((game) => (
        <GameCard key={game.id} game={game} lang={lang} />
      ))}
    </div>
  );
};
