import { useState, useMemo } from 'react';
import { GAMES } from '../data/games';
import { filterGames } from '../utils/gameUtils';

export function useGameSearch(initialFestival: string = 'all') {
  const [searchTerm, setSearchTerm] = useState('');
  const [festivalFilter, setFestivalFilter] = useState(initialFestival);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'featured' | 'alpha'>('featured');

  const filteredGames = useMemo(() => {
    return filterGames(GAMES, searchTerm, festivalFilter, categoryFilter, sortBy);
  }, [searchTerm, festivalFilter, categoryFilter, sortBy]);

  const resetFilters = () => {
    setSearchTerm('');
    setFestivalFilter('all');
    setCategoryFilter('all');
    setSortBy('featured');
  };

  return {
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
    totalCount: filteredGames.length
  };
}
