import { Link } from 'react-router-dom';
import type { Language } from '../../types/game';
import { FESTIVALS } from '../../data/festivals';
import { KhmerDivider } from '../decorative/KhmerDivider';
import { KhmerFrameContainer } from '../layout/KhmerOrnament';
import { MotionImage } from '../decorative/MotionImage';
import { ArrowRight, Sparkles } from 'lucide-react';

interface FestivalCategoriesProps {
  lang: Language;
}

export const FestivalCategories: React.FC<FestivalCategoriesProps> = ({ lang }) => {
  return (
    <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      <KhmerDivider
        title={lang === 'kh' ? '🎊 ស្វែងរកតាមពិធីបុណ្យ' : '🎊 Browse Games by Festival'}
        subtitle={lang === 'kh'
          ? 'ស្វែងយល់ពីល្បែងប្រពៃណីខ្មែរដែលនិយមលេងតាមរដូវកាលពិធីបុណ្យប្រពៃណី និងសហគមន៍'
          : 'Explore traditional games commonly enjoyed during Cambodia festivals and community occasions'}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {FESTIVALS.map((festival) => (
          <KhmerFrameContainer key={festival.id} className="h-full">
            <Link
              to={`/festivals/${festival.slug}`}
              className="group block h-full bg-[#FFFDF7] rounded-3xl khmer-card-border overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#3B2922]">
                <MotionImage
                  src={festival.image}
                  alt={festival.nameKh}
                  className="w-full h-full"
                  gameId={festival.id}
                />

                <div className={`absolute inset-0 bg-gradient-to-t ${festival.bannerBg} pointer-events-none z-10`} />

                <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between text-[#FFFDF7]">
                  <span className="text-3xl">{festival.icon}</span>
                  <span className="px-3 py-1 rounded-full bg-[#FFFDF7]/20 backdrop-blur-md border border-white/30 text-xs font-khmer font-bold">
                    {lang === 'kh' ? festival.monthKh : festival.monthEn}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 z-20 text-[#FFFDF7] space-y-1">
                  <h3 className="text-2xl md:text-3xl font-extrabold font-khmer drop-shadow-md">
                    {lang === 'kh' ? festival.nameKh : festival.nameEn}
                  </h3>
                  <p className="text-xs md:text-sm font-semibold font-inter text-[#E6D3A3] opacity-90">
                    {festival.nameEn}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-sm font-khmer text-[#2B211C]/85 leading-relaxed line-clamp-2">
                  {lang === 'kh' ? festival.descriptionKh : (festival.descriptionEn || festival.descriptionKh)}
                </p>

                <div className="pt-2 flex items-center justify-between text-sm font-khmer font-bold text-[#7A3030] group-hover:text-[#B88932] transition-colors border-t border-[#B88932]/15">
                  <span className="flex items-center gap-1.5">
                    <Sparkles size={16} />
                    <span>{lang === 'kh' ? 'មើលល្បែងក្នុងពិធីបុណ្យនេះ' : 'Explore Festival Games'}</span>
                  </span>
                  <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

            </Link>
          </KhmerFrameContainer>
        ))}
      </div>

    </section>
  );
};
