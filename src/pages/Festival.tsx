import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Language } from '../types/game';
import { getFestivalBySlug, getGamesForFestival } from '../utils/gameUtils';
import { KhmerFrameContainer } from '../components/layout/KhmerOrnament';
import { KhmerDivider } from '../components/decorative/KhmerDivider';
import { MotionImage } from '../components/decorative/MotionImage';
import { GameGrid } from '../components/games/GameGrid';
import { ArrowLeft, AlertCircle } from 'lucide-react';

interface FestivalProps {
  lang: Language;
}

export const FestivalPage: React.FC<FestivalProps> = ({ lang }) => {
  const { slug } = useParams<{ slug: string }>();
  const festival = getFestivalBySlug(slug || '');

  useEffect(() => {
    if (festival) {
      document.title = `${lang === 'kh' ? festival.nameKh : festival.nameEn} | ល្បែងប្រពៃណីខ្មែរ`;
    }
    window.scrollTo(0, 0);
  }, [festival, lang]);

  if (!festival) {
    return (
      <div className="min-h-screen bg-[#F8F1E3] py-20 px-4 text-center">
        <h1 className="text-3xl font-bold font-khmer text-[#3B2922] mb-4">
          {lang === 'kh' ? 'មិនរកឃើញពិធីបុណ្យនេះទេ' : 'Festival Not Found'}
        </h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#7A3030] text-[#FFFDF7] font-khmer font-bold"
        >
          <ArrowLeft size={18} />
          <span>{lang === 'kh' ? 'ត្រឡប់ទៅទំព័រដើម' : 'Back to Home'}</span>
        </Link>
      </div>
    );
  }

  const festivalGames = getGamesForFestival(festival.id);

  return (
    <div className="min-h-screen bg-[#F8F1E3] py-8 md:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-khmer font-bold text-[#3B2922] hover:text-[#7A3030] transition-colors"
      >
        <ArrowLeft size={16} />
        <span>{lang === 'kh' ? '← ត្រឡប់ទៅទំព័រដើម' : '← Back to Home'}</span>
      </Link>

      <div className="relative rounded-3xl overflow-hidden bg-[#3B2922] border-2 border-[#B88932] shadow-xl text-[#FFFDF7] p-6 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-4xl">{festival.icon}</span>
              <span className="px-3.5 py-1 rounded-full bg-[#E6D3A3]/20 border border-[#E6D3A3]/40 text-xs font-khmer font-bold text-[#E6D3A3]">
                {lang === 'kh' ? festival.monthKh : festival.monthEn}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-khmer text-[#E6D3A3]">
              {lang === 'kh' ? festival.nameKh : festival.nameEn}
            </h1>
            <p className="text-base sm:text-lg font-khmer text-[#F8F1E3]/90 leading-relaxed">
              {lang === 'kh' ? festival.descriptionKh : (festival.descriptionEn || festival.descriptionKh)}
            </p>
          </div>

          <div className="lg:col-span-5">
            <KhmerFrameContainer>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#B88932]">
                <MotionImage
                  src={festival.image}
                  alt={festival.nameKh}
                  className="w-full h-full"
                  gameId={festival.id}
                />
              </div>
            </KhmerFrameContainer>
          </div>

        </div>
      </div>

      <div className="bg-[#FFFDF7] p-4 rounded-2xl border border-[#B88932]/40 text-xs md:text-sm font-khmer text-[#3B2922]/85 flex items-start gap-3">
        <AlertCircle size={20} className="text-[#B88932] shrink-0 mt-0.5" />
        <p>
          {lang === 'kh'
            ? 'ចំណាំ៖ ទំនៀមទម្លាប់នៃការលេងល្បែងប្រពៃណីក្នុងឱកាសពិធីបុណ្យ អាចមានភាពខុសគ្នាតាមតំបន់ សហគមន៍ និងគ្រួសារនីមួយៗ។'
            : 'Note: Traditions and specific game pastimes associated with festivals vary by region, community, and family.'}
        </p>
      </div>

      <div>
        <KhmerDivider
          title={lang === 'kh' ? `🌸 ល្បែងក្នុង ${festival.nameKh}` : `🌸 Games in ${festival.nameEn}`}
          subtitle={lang === 'kh' ? 'បញ្ជីល្បែងប្រពៃណីដែលប្រជាជននិយមលេងក្នុងឱកាសនេះ' : 'Popular traditional games associated with this festive period'}
        />

        <div className="mt-8">
          <GameGrid games={festivalGames} lang={lang} />
        </div>
      </div>

    </div>
  );
};
