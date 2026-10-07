import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Sparkles } from 'lucide-react';
import type { Language } from '../../types/game';
import { KhmerFlower } from '../decorative/KhmerFlower';

interface HeaderProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  onLanguageChange,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', labelKh: 'ទំព័រដើម', labelEn: 'Home' },
    { path: '/games', labelKh: 'ល្បែងទាំងអស់', labelEn: 'All Games' },
    { path: '/festivals/khmer-new-year', labelKh: 'បុណ្យចូលឆ្នាំ', labelEn: 'New Year' },
    { path: '/festivals/pchum-ben', labelKh: 'ភ្ជុំបិណ្ឌ', labelEn: 'Pchum Ben' },
    { path: '/festivals/bon-om-touk', labelKh: 'អុំទូក', labelEn: 'Water Festival' },
    { path: '/festivals/other-occasions', labelKh: 'ផ្សេងៗ', labelEn: 'Others' },
    { path: '/about', labelKh: 'អំពីគម្រោង', labelEn: 'About' }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F8F1E3]/95 backdrop-blur-md border-b border-[#B88932]/20 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 rounded-full bg-[#FFFDF7] border border-[#B88932]/30 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <KhmerFlower size={32} color="#7A3030" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold font-khmer text-[#3B2922] group-hover:text-[#7A3030] transition-colors">
                ល្បែងប្រពៃណីខ្មែរ
              </span>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest text-[#B88932] font-inter">
                Khmer Traditional Games
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm md:text-base font-khmer font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'bg-[#7A3030] text-[#FFFDF7] shadow-sm font-semibold'
                    : 'text-[#3B2922] hover:bg-[#E6D3A3]/40 hover:text-[#7A3030]'
                }`}
              >
                {lang === 'kh' ? link.labelKh : link.labelEn}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            {onOpenSearch && (
              <button
                onClick={onOpenSearch}
                className="p-2.5 rounded-full bg-[#FFFDF7] border border-[#B88932]/30 text-[#3B2922] hover:text-[#7A3030] hover:border-[#B88932] transition-colors"
                title={lang === 'kh' ? 'ស្វែងរកល្បែង' : 'Search Games'}
                aria-label="Search"
              >
                <Search size={18} />
              </button>
            )}

            <div className="flex items-center bg-[#FFFDF7] p-1 rounded-full border border-[#B88932]/30 shadow-xs">
              <button
                onClick={() => onLanguageChange('kh')}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                  lang === 'kh'
                    ? 'bg-[#7A3030] text-[#FFFDF7] shadow-xs'
                    : 'text-[#3B2922] hover:text-[#7A3030]'
                }`}
              >
                🇰🇭 KH
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all ${
                  lang === 'en'
                    ? 'bg-[#7A3030] text-[#FFFDF7] shadow-xs'
                    : 'text-[#3B2922] hover:text-[#7A3030]'
                }`}
              >
                🇬🇧 EN
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-[#FFFDF7] border border-[#B88932]/30 text-[#3B2922] hover:text-[#7A3030]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF7] border-b border-[#B88932]/30 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-base font-khmer flex items-center justify-between ${
                  isActive(link.path)
                    ? 'bg-[#7A3030] text-[#FFFDF7] font-semibold'
                    : 'text-[#3B2922] hover:bg-[#F8F1E3]'
                }`}
              >
                <span>{lang === 'kh' ? link.labelKh : link.labelEn}</span>
                {isActive(link.path) && <Sparkles size={16} className="text-[#E6D3A3]" />}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <div className="h-[2px] w-full bg-gradient-to-r from-[#B88932]/10 via-[#B88932]/60 to-[#B88932]/10" />
    </header>
  );
};
