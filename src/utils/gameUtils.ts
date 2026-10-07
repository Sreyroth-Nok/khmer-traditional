import type { TraditionalGame, Language } from '../types/game';
import type { Festival } from '../types/festival';
import { GAMES } from '../data/games';
import { FESTIVALS } from '../data/festivals';

export function filterGames(
  games: TraditionalGame[],
  searchTerm: string,
  festivalId: string = 'all',
  categoryId: string = 'all',
  sortBy: 'featured' | 'alpha' = 'featured'
): TraditionalGame[] {
  let result = [...games];

  if (searchTerm.trim()) {
    const term = searchTerm.toLowerCase().trim();
    result = result.filter(g =>
      g.nameKh.toLowerCase().includes(term) ||
      g.nameEn.toLowerCase().includes(term) ||
      g.slug.toLowerCase().includes(term) ||
      g.descriptionKh.toLowerCase().includes(term) ||
      (g.descriptionEn && g.descriptionEn.toLowerCase().includes(term))
    );
  }

  if (festivalId && festivalId !== 'all') {
    result = result.filter(g => g.festivals.includes(festivalId));
  }

  if (categoryId && categoryId !== 'all') {
    if (categoryId === 'festival') {
      result = result.filter(g => g.category === 'festival');
    } else if (categoryId === 'community') {
      result = result.filter(g => g.category === 'community');
    } else if (categoryId === 'sport') {
      result = result.filter(g => g.category === 'sport');
    } else if (categoryId === 'board') {
      result = result.filter(g => g.category === 'board');
    }
  }

  if (sortBy === 'alpha') {
    result.sort((a, b) => a.nameKh.localeCompare(b.nameKh, 'km'));
  } else {
    result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  return result;
}

export function getGameBySlug(slug: string): TraditionalGame | undefined {
  return GAMES.find(g => g.slug === slug || g.id === slug);
}

export function getFestivalBySlug(slug: string): Festival | undefined {
  return FESTIVALS.find(f => f.slug === slug || f.id === slug);
}

export function getGamesForFestival(festivalId: string): TraditionalGame[] {
  const fest = FESTIVALS.find(f => f.id === festivalId || f.slug === festivalId);
  if (!fest) return [];
  return GAMES.filter(g => fest.gameIds.includes(g.id) || g.festivals.includes(fest.id));
}

export function getText(lang: Language, kh: string, en?: string): string {
  if (lang === 'en' && en) return en;
  return kh;
}
