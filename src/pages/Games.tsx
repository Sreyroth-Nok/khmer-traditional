import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Language } from '../types/game';
import { useGameSearch } from '../hooks/useGameSearch';
import { GameFilters } from '../components/games/GameFilters';
import { GameGrid } from '../components/games/GameGrid';
import { KhmerDivider } from '../components/decorative/KhmerDivider';

interface GamesProps {
  lang: Language;
}

export const Games: React.FC<GamesProps> = ({ lang }) => {
  const [searchParams] = useSearchParams();
  const initialFestival = searchParams.get('festival') || 'all';

  const {
    searchTerm,
    setSearchTerm,
    festivalFilter,
    setFestivalFilter,
    categoryFilter,
    setCategoryFilter,
    sortBy,
    setSortBy,
    filteredGames,
    resetFilters,
    totalCount
  } = useGameSearch(initialFestival);

  useEffect(() => {
    document.title = lang === 'kh'
      ? 'ល្បែងទាំងអស់ | ល្បែងប្រពៃណីខ្មែរ'
      : 'All Games | Khmer Traditional Games';
    window.scrollTo(0, 0);
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#F8F1E3] py-8 md:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <KhmerDivider
        title={lang === 'kh' ? '🎮 ល្បែងប្រពៃណីទាំងអស់' : '🎮 Explore All Traditional Games'}
        subtitle={lang === 'kh'
          ? 'ស្វែងរក និងរៀនអំពីល្បែងប្រជាប្រិយខ្មែរ តាមរយៈការស្វែងរក ឬការចម្រោះតាមពិធីបុណ្យ'
          : 'Search and discover Khmer folk games through keyword search and festival filters'}
      />

      <GameFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        festivalFilter={festivalFilter}
        onFestivalChange={setFestivalFilter}
        categoryFilter={categoryFilter}
        onCategoryChange={setCategoryFilter}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onReset={resetFilters}
        totalResults={totalCount}
        lang={lang}
      />

      <GameGrid games={filteredGames} lang={lang} />

    </div>
  );
};
