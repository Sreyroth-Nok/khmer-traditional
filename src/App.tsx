import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import type { Language } from './types/game';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Games } from './pages/Games';
import { GameDetail } from './pages/GameDetail';
import { FestivalPage } from './pages/Festival';
import { About } from './pages/About';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';
import { GAMES } from './data/games';
import { filterGames } from './utils/gameUtils';

function SearchModal({
  isOpen,
  onClose,
  lang
}: {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const results = query.trim() ? filterGames(GAMES, query) : [];

  const handleSelectGame = (slug: string) => {
    onClose();
    setQuery('');
    navigate(`/games/${slug}`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-[#3B2922]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-[#FFFDF7] rounded-3xl border-2 border-[#B88932] shadow-2xl overflow-hidden space-y-4 p-6 relative">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-[#B88932]/20 pb-4">
          <div className="flex items-center gap-2 text-[#7A3030] font-khmer font-bold text-lg">
            <Sparkles size={20} className="text-[#B88932]" />
            <span>{lang === 'kh' ? 'ស្វែងរកល្បែងប្រពៃណី' : 'Global Game Search'}</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#F8F1E3] text-[#3B2922] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Input Bar */}
        <div className="relative">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B88932]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === 'kh' ? 'វាយបញ្ចូលឈ្មោះល្បែង... (ឧទាហរណ៍: បោះអង្គញ់, ចូលឆ្នាំ, Boat)' : 'Type game name... (e.g. Angkunh, Tug of War, Boat)'}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#F8F1E3] border border-[#B88932]/30 text-[#3B2922] placeholder-[#3B2922]/50 font-khmer text-base focus:outline-none focus:border-[#7A3030]"
          />
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto space-y-2 pr-1">
          {query.trim() && results.length === 0 && (
            <div className="p-8 text-center text-[#3B2922]/60 font-khmer">
              {lang === 'kh' ? 'មិនរកឃើញល្បែងដែលត្រូវនឹងពាក្យស្វែងរកឡើយ' : 'No matching games found'}
            </div>
          )}

          {!query.trim() && (
            <div className="p-4 text-xs font-khmer text-[#3B2922]/70 space-y-2">
              <p className="font-bold text-[#B88932]">{lang === 'kh' ? 'ល្បែងប្រពៃណីពេញនិយម៖' : 'Popular Searches:'}</p>
              <div className="flex flex-wrap gap-2">
                {GAMES.slice(0, 5).map(g => (
                  <button
                    key={g.id}
                    onClick={() => handleSelectGame(g.slug)}
                    className="px-3 py-1.5 rounded-full bg-[#F8F1E3] hover:bg-[#7A3030] hover:text-white border border-[#B88932]/30 text-xs font-khmer font-semibold transition-colors"
                  >
                    {g.nameKh} ({g.nameEn})
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.map((game) => (
            <div
              key={game.id}
              onClick={() => handleSelectGame(game.slug)}
              className="p-3.5 rounded-2xl bg-[#F8F1E3]/50 hover:bg-[#7A3030] hover:text-[#FFFDF7] border border-[#B88932]/20 flex items-center justify-between cursor-pointer group transition-all"
            >
              <div className="flex items-center gap-3">
                <img
                  src={game.image}
                  alt={game.nameKh}
                  className="w-12 h-12 rounded-xl object-cover shrink-0 border border-[#B88932]/40"
                />
                <div>
                  <h4 className="font-bold font-khmer text-base group-hover:text-[#FFFDF7] text-[#3B2922]">
                    {game.nameKh}
                  </h4>
                  <p className="text-xs font-inter group-hover:text-[#E6D3A3] text-[#B88932]">
                    {game.nameEn}
                  </p>
                </div>
              </div>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform opacity-70" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export function AppContent() {
  const [lang, setLang] = useState<Language>('kh');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F1E3] text-[#2B211C] font-khmer">
      <Header
        lang={lang}
        onLanguageChange={setLang}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home lang={lang} onOpenSearch={() => setIsSearchOpen(true)} />} />
          <Route path="/games" element={<Games lang={lang} />} />
          <Route path="/games/:slug" element={<GameDetail lang={lang} />} />
          <Route path="/festivals/:slug" element={<FestivalPage lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
        </Routes>
      </main>

      <Footer lang={lang} />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        lang={lang}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
