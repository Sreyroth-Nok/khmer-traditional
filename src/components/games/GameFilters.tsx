import { Search, X, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import type { Language } from '../../types/game';
import { FESTIVALS } from '../../data/festivals';
import { GAME_CATEGORIES } from '../../data/categories';

interface GameFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  festivalFilter: string;
  onFestivalChange: (festivalId: string) => void;
  categoryFilter: string;
  onCategoryChange: (categoryId: string) => void;
  sortBy: 'featured' | 'alpha';
  onSortChange: (sortBy: 'featured' | 'alpha') => void;
  onReset: () => void;
  totalResults: number;
  lang: Language;
}

export const GameFilters: React.FC<GameFiltersProps> = ({
  searchTerm,
  onSearchChange,
  festivalFilter,
  onFestivalChange,
  categoryFilter,
  onCategoryChange,
  sortBy,
  onSortChange,
  onReset,
  totalResults,
  lang
}) => {
  const isFiltered = searchTerm || festivalFilter !== 'all' || categoryFilter !== 'all';

  return (
    <div className="bg-[#FFFDF7] p-6 rounded-3xl border border-[#B88932]/30 shadow-sm space-y-6 mb-8">
      
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B88932]" size={20} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={lang === 'kh' ? 'ស្វែងរកល្បែង... (ឧទាហរណ៍: បោះអង្គញ់, Boat, ចូលឆ្នាំ)' : 'Search games... (e.g. Angkunh, Boat, New Year)'}
            className="w-full pl-12 pr-10 py-3 rounded-2xl bg-[#F8F1E3]/50 border border-[#B88932]/30 text-[#3B2922] placeholder-[#3B2922]/50 font-khmer text-base focus:outline-none focus:border-[#7A3030] focus:ring-2 focus:ring-[#7A3030]/20 transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3B2922]/60 hover:text-[#7A3030] p-1"
            >
              <X size={18} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
          <button
            onClick={() => onSortChange(sortBy === 'featured' ? 'alpha' : 'featured')}
            className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#F8F1E3] border border-[#B88932]/30 text-sm font-khmer text-[#3B2922] font-semibold hover:border-[#7A3030] transition-colors"
          >
            <ArrowUpDown size={16} className="text-[#B88932]" />
            <span>
              {sortBy === 'featured'
                ? (lang === 'kh' ? 'ល្បែងប្រចាំថ្ងៃ' : 'Featured')
                : (lang === 'kh' ? 'តាមអក្សរក្រម (ក-អ)' : 'Alphabetical (A-Z)')}
            </span>
          </button>

          {isFiltered && (
            <button
              onClick={onReset}
              className="px-3 py-3 rounded-2xl text-xs font-khmer text-[#7A3030] hover:bg-[#7A3030]/10 transition-colors font-bold"
            >
              {lang === 'kh' ? 'កំណត់ឡើងវិញ' : 'Reset'}
            </button>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold font-khmer uppercase tracking-wider text-[#B88932] flex items-center gap-1.5">
          <SlidersHorizontal size={14} />
          <span>{lang === 'kh' ? 'ស្វែងរកតាមពិធីបុណ្យ:' : 'Filter by Festival:'}</span>
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onFestivalChange('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-khmer font-semibold transition-all ${
              festivalFilter === 'all'
                ? 'bg-[#7A3030] text-[#FFFDF7] shadow-xs'
                : 'bg-[#F8F1E3] text-[#3B2922] hover:bg-[#E6D3A3]/50 border border-[#B88932]/20'
            }`}
          >
            {lang === 'kh' ? 'ទាំងអស់' : 'All Festivals'}
          </button>
          {FESTIVALS.map((fest) => (
            <button
              key={fest.id}
              onClick={() => onFestivalChange(fest.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-khmer font-semibold flex items-center gap-1.5 transition-all ${
                festivalFilter === fest.id
                  ? 'bg-[#7A3030] text-[#FFFDF7] shadow-xs'
                  : 'bg-[#F8F1E3] text-[#3B2922] hover:bg-[#E6D3A3]/50 border border-[#B88932]/20'
              }`}
            >
              <span>{fest.icon}</span>
              <span>{lang === 'kh' ? fest.nameKh : fest.nameEn}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2 pt-2 border-t border-[#B88932]/15">
        <label className="text-xs font-bold font-khmer uppercase tracking-wider text-[#B88932]">
          {lang === 'kh' ? 'ប្រភេទទូទៅ:' : 'Category:'}
        </label>
        <div className="flex flex-wrap gap-2">
          {GAME_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-khmer font-semibold flex items-center gap-1.5 transition-all ${
                categoryFilter === cat.id
                  ? 'bg-[#3B2922] text-[#E6D3A3] shadow-xs'
                  : 'bg-[#F8F1E3]/80 text-[#3B2922] hover:bg-[#E6D3A3]/40 border border-[#B88932]/20'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{lang === 'kh' ? cat.nameKh : cat.nameEn}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="pt-2 text-xs font-khmer text-[#3B2922]/70 flex items-center justify-between border-t border-[#B88932]/10">
        <span>
          {lang === 'kh'
            ? `បង្ហាញ ${totalResults} ល្បែងប្រពៃណី`
            : `Showing ${totalResults} traditional games`}
        </span>
      </div>
    </div>
  );
};
