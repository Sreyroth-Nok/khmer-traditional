import { Link } from 'react-router-dom';
import type { Language } from '../../types/game';
import { KhmerFrameContainer } from '../layout/KhmerOrnament';
import { KhmerFlower } from '../decorative/KhmerFlower';
import { MotionImage } from '../decorative/MotionImage';
import { Search, Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenSearch?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenSearch }) => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24 bg-gradient-to-b from-[#F8F1E3] via-[#FFFDF7] to-[#F8F1E3]">
      
      <div className="absolute top-10 left-10 opacity-10 pointer-events-none animate-float">
        <KhmerFlower size={160} color="#B88932" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none animate-float" style={{ animationDelay: '2s' }}>
        <KhmerFlower size={180} color="#7A3030" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF7] border border-[#B88932]/40 shadow-xs text-xs md:text-sm font-khmer font-bold text-[#7A3030]">
              <Sparkles size={16} className="text-[#B88932]" />
              <span>{lang === 'kh' ? 'បេតិកភណ្ឌវប្បធម៌ខ្មែរ' : 'Khmer Cultural Heritage'}</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-khmer text-[#3B2922] leading-tight tracking-tight">
                ល្បែងប្រពៃណីខ្មែរ
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-inter text-[#B88932] tracking-wider uppercase">
                KHMER TRADITIONAL GAMES
              </h2>
            </div>

            <div className="py-2 px-4 rounded-2xl bg-[#E6D3A3]/30 inline-block border border-[#B88932]/30">
              <p className="text-base sm:text-lg md:text-xl font-bold font-khmer text-[#7A3030] tracking-wide">
                លេង • រៀន • ចងចាំ • បន្ត
              </p>
            </div>

            <p className="text-base sm:text-lg font-khmer text-[#2B211C]/85 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {lang === 'kh'
                ? 'ស្វែងយល់ពីល្បែងប្រពៃណីខ្មែរ ដែលបានបន្សល់ទុកពីជំនាន់មួយទៅជំនាន់មួយ តាមរយៈរឿងរ៉ាវ របៀបលេង និងវប្បធម៌ខ្មែរ។'
                : 'Discover traditional Cambodian games handed down through generations through visual stories, step-by-step instructions, and cultural meaning.'}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenSearch}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#7A3030] hover:bg-[#3B2922] text-[#FFFDF7] font-khmer font-bold text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Search size={20} className="text-[#E6D3A3]" />
                <span>{lang === 'kh' ? 'ស្វែងរកល្បែង' : 'Search Games'}</span>
              </button>

              <Link
                to="/games"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#FFFDF7] hover:bg-[#F8F1E3] text-[#3B2922] border-2 border-[#B88932] font-khmer font-bold text-base md:text-lg shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <span>{lang === 'kh' ? 'មើលល្បែងទាំងអស់' : 'Explore All Games'}</span>
                <ArrowRight size={20} className="text-[#B88932] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

          <div className="lg:col-span-5">
            <KhmerFrameContainer>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#B88932] bg-[#E6D3A3]/20">
                <MotionImage
                  src="/illustrations/hero.png"
                  alt="Khmer Traditional Games Anime Art"
                  className="w-full h-full"
                />
                
                <div className="absolute bottom-4 left-4 right-4 z-20 p-3 rounded-2xl bg-[#3B2922]/90 backdrop-blur-md border border-[#B88932]/40 text-[#F8F1E3] text-xs font-khmer flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-2">
                    <KhmerFlower size={20} color="#E6D3A3" />
                    <span>{lang === 'kh' ? 'សិល្បៈគំនូររូបភាពប្រពៃណីខ្មែរ' : 'Anime Cultural Illustration'}</span>
                  </div>
                  <span className="text-[#E6D3A3] font-inter text-[10px]">🇰🇭 Traditional Heritage</span>
                </div>
              </div>
            </KhmerFrameContainer>
          </div>

        </div>
      </div>
    </section>
  );
};
