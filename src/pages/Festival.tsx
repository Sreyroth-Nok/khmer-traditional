import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { Language } from '../types/game';
import { getFestivalBySlug, getGamesForFestival } from '../utils/gameUtils';
import { KhmerFrameContainer } from '../components/layout/KhmerOrnament';
import { KhmerDivider } from '../components/decorative/KhmerDivider';
import { KhmerFlower } from '../components/decorative/KhmerFlower';
import { MotionImage } from '../components/decorative/MotionImage';
import { GameGrid } from '../components/games/GameGrid';
import { ArrowLeft, Calendar, Sparkles, Landmark, Sunrise, Sun, ArrowRight, ShieldCheck } from 'lucide-react';

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

  const isPchumBen = festival.id === 'pchum-ben';
  const festivalGames = getGamesForFestival(festival.id);

  return (
    <div className="min-h-screen bg-[#F8F1E3] py-8 md:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Navigation Back Link */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-khmer font-bold text-[#3B2922] hover:text-[#7A3030] transition-colors"
      >
        <ArrowLeft size={16} />
        <span>{lang === 'kh' ? '← ត្រឡប់ទៅទំព័រដើម' : '← Back to Home'}</span>
      </Link>

      {/* Hero Header Banner */}
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

            {/* Subtitle */}
            <p className="text-base sm:text-lg font-bold font-khmer text-[#E6D3A3]/90 bg-[#FFFDF7]/10 p-3 rounded-2xl border border-[#E6D3A3]/30 inline-block">
              {isPchumBen
                ? (lang === 'kh' ? 'រំលឹកបុព្វការីជន • ជួបជុំគ្រួសារ • ធ្វើបុណ្យ • ថែរក្សាប្រពៃណីខ្មែរ' : 'Remember Ancestors • Family Gathering • Merit Making • Preserving Heritage')
                : (lang === 'kh' ? festival.descriptionKh : (festival.descriptionEn || festival.descriptionKh))}
            </p>

            <p className="text-sm sm:text-base font-khmer text-[#F8F1E3]/90 leading-relaxed pt-2">
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

      {/* 🌾 SPECIAL DEDICATED PCHUM BEN CULTURAL EXPERIENCE SECTION */}
      {isPchumBen && (
        <div className="space-y-12">
          
          {/* 📅 2026 Pchum Ben Dates Card */}
          <div className="bg-[#FFFDF7] p-6 lg:p-8 rounded-3xl border-2 border-[#B88932]/50 shadow-md space-y-6 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 opacity-10 pointer-events-none">
              <KhmerFlower size={200} color="#7A3030" />
            </div>

            <div className="flex items-center gap-3 border-b border-[#B88932]/20 pb-4">
              <div className="p-2.5 rounded-full bg-[#526548] text-[#FFFDF7]">
                <Calendar size={24} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold font-khmer text-[#3B2922]">
                  📅 {lang === 'kh' ? 'កាលបរិច្ឆេទ បុណ្យភ្ជុំបិណ្ឌ ២០២៦' : 'Pchum Ben Dates 2026'}
                </h2>
                <p className="text-xs font-khmer text-[#3B2922]/70">
                  {lang === 'kh' ? 'កាលបរិច្ឆេទផ្លូវការនៃពិធីបុណ្យកាន់បិណ្ឌ និងភ្ជុំបិណ្ឌ' : 'Official observances for Kan Ben and Pchum Ben 2026'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Kan Ben Card */}
              <div className="p-6 rounded-2xl bg-[#F8F1E3] border border-[#B88932]/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold font-khmer text-[#7A3030]">🌾 កាន់បិណ្ឌ (Kan Ben)</span>
                  <span className="px-3 py-1 rounded-full bg-[#526548]/15 text-[#526548] text-xs font-khmer font-bold">
                    {lang === 'kh' ? 'កាន់បិណ្ឌ ១៤ ថ្ងៃ' : '14 Days of Kan Ben'}
                  </span>
                </div>
                <p className="text-2xl md:text-3xl font-extrabold font-khmer text-[#3B2922]">
                  ២៧ កញ្ញា — ១០ តុលា ២០២៦
                </p>
                <p className="text-xs font-inter text-[#B88932]">
                  27 September 2026 → 10 October 2026
                </p>
              </div>

              {/* Pchum Ben Day 15 Card */}
              <div className="p-6 rounded-2xl bg-[#7A3030] text-[#FFFDF7] border border-[#B88932] shadow-md space-y-2 relative">
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold font-khmer text-[#E6D3A3]">🌕 ភ្ជុំបិណ្ឌ — ថ្ងៃទី១៥ (Pchum Ben Day)</span>
                  <span className="px-3 py-1 rounded-full bg-[#E6D3A3]/20 text-[#E6D3A3] text-xs font-khmer font-bold border border-[#E6D3A3]/30">
                    {lang === 'kh' ? 'ថ្ងៃធំ' : 'Main Gathering Day'}
                  </span>
                </div>
                <p className="text-2xl md:text-3xl font-extrabold font-khmer text-[#FFFDF7]">
                  ១១ តុលា ២០២៦
                </p>
                <p className="text-xs font-inter text-[#E6D3A3]">
                  11 October 2026
                </p>
              </div>
            </div>
          </div>

          {/* 📖 What is Pchum Ben? (តើបុណ្យភ្ជុំបិណ្ឌជាអ្វី?) */}
          <div className="bg-[#FFFDF7] p-6 lg:p-8 rounded-3xl border border-[#B88932]/30 shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-[#B88932]/20 pb-3">
              <Landmark size={24} className="text-[#7A3030]" />
              <h2 className="text-2xl font-bold font-khmer text-[#3B2922]">
                📖 {lang === 'kh' ? 'តើបុណ្យភ្ជុំបិណ្ឌជាអ្វី?' : 'What is Pchum Ben?'}
              </h2>
            </div>
            <p className="text-base md:text-lg font-khmer text-[#2B211C]/90 leading-relaxed bg-[#F8F1E3]/50 p-5 rounded-2xl border-l-4 border-[#B88932]">
              {lang === 'kh'
                ? 'បុណ្យភ្ជុំបិណ្ឌ គឺជាបុណ្យប្រពៃណី និងសាសនាដ៏សំខាន់មួយរបស់ប្រជាជនខ្មែរ ដែលមានរយៈពេល ១៥ ថ្ងៃ។ ក្នុងអំឡុងពេលនេះ ប្រជាជនខ្មែរនាំគ្នាទៅវត្ត ធ្វើបុណ្យ ប្រគេនចង្ហាន់ ពូនបិណ្ឌ/ធ្វើបាយបិណ្ឌ និងឧទ្ទិសកុសលផលបុណ្យជូនដល់បុព្វការីជន និងញាតិដែលបានលាចាកលោក។'
                : 'Pchum Ben is one of the most significant 15-day religious and cultural observances in Cambodia. During this period, Cambodian families visit pagodas, make food offerings to monks, prepare Bay Ben, and dedicate merit to passed ancestors and loved ones.'}
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm font-khmer text-[#3B2922]/85 pt-2">
              <li className="p-3 rounded-xl bg-[#F8F1E3] border border-[#B88932]/20 flex items-center gap-2">
                <span className="text-[#B88932]">✦</span>
                <span>{lang === 'kh' ? 'ថ្ងៃទី១ ដល់ ទី១៤៖ ហៅថា កាន់បិណ្ឌ ឬ ដាក់បិណ្ឌ' : 'Days 1–14: Known as Kan Ben / Dak Ben period'}</span>
              </li>
              <li className="p-3 rounded-xl bg-[#F8F1E3] border border-[#B88932]/20 flex items-center gap-2">
                <span className="text-[#7A3030]">✦</span>
                <span>{lang === 'kh' ? 'ថ្ងៃទី១៥៖ ហៅថា ថ្ងៃភ្ជុំបិណ្ឌ ជាថ្ងៃជួបជុំធំ' : 'Day 15: Pchum Ben, the main gathering day'}</span>
              </li>
              <li className="p-3 rounded-xl bg-[#F8F1E3] border border-[#B88932]/20 flex items-center gap-2">
                <span className="text-[#526548]">✦</span>
                <span>{lang === 'kh' ? 'ការអនុវត្តអាចមានភាពខុសគ្នាតាមគ្រួសារ និងសហគមន៍' : 'Practices vary naturally by family and community'}</span>
              </li>
            </ul>
          </div>

          {/* 🏮 5 Main Pchum Ben Activities (សកម្មភាពសំខាន់ៗក្នុងបុណ្យភ្ជុំបិណ្ឌ) */}
          <div className="space-y-6">
            <KhmerDivider
              title={lang === 'kh' ? '🌾 សកម្មភាពសំខាន់ៗក្នុងបុណ្យភ្ជុំបិណ្ឌ' : '🌾 Main Activities During Pchum Ben'}
              subtitle={lang === 'kh' ? 'ទំនៀមទម្លាប់ប្រពៃណីដែលប្រជាជនខ្មែរតែងតែប្រតិបត្តិក្នុងឱកាសភ្ជុំបិណ្ឌ' : 'Traditional customs commonly practiced by Cambodian families'}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Activity 01 */}
              <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#B88932]/30 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-[#7A3030] text-[#FFFDF7] flex items-center justify-center font-bold text-sm">
                    01
                  </span>
                  <span className="text-2xl">🛕</span>
                </div>
                <h3 className="text-xl font-bold font-khmer text-[#3B2922]">
                  {lang === 'kh' ? 'ទៅវត្ត' : '01 — Visiting the Pagoda'}
                </h3>
                <p className="text-sm font-khmer text-[#2B211C]/80 leading-relaxed">
                  {lang === 'kh'
                    ? 'ក្រុមគ្រួសារនាំគ្នាទៅវត្ត ដើម្បីធ្វើបុណ្យ ប្រគេនចង្ហាន់ និងចូលរួមពិធីតាមប្រពៃណី។'
                    : 'Families gather and visit local Khmer pagodas to make merit and participate in traditional ceremonies.'}
                </p>
              </div>

              {/* Activity 02 */}
              <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#B88932]/30 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-[#B88932] text-[#FFFDF7] flex items-center justify-center font-bold text-sm">
                    02
                  </span>
                  <span className="text-2xl">🍚</span>
                </div>
                <h3 className="text-xl font-bold font-khmer text-[#3B2922]">
                  {lang === 'kh' ? 'ធ្វើបាយបិណ្ឌ' : '02 — Preparing Bay Ben'}
                </h3>
                <p className="text-sm font-khmer text-[#2B211C]/80 leading-relaxed">
                  {lang === 'kh'
                    ? 'រៀបចំបាយបិណ្ឌ ឬបាយដែលរៀបចំសម្រាប់ពិធីតាមប្រពៃណីរបស់គ្រួសារ និងសហគមន៍។'
                    : 'Preparing traditional Bay Ben rice balls and food offerings according to family customs.'}
                </p>
              </div>

              {/* Activity 03 */}
              <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#B88932]/30 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-[#526548] text-[#FFFDF7] flex items-center justify-center font-bold text-sm">
                    03
                  </span>
                  <span className="text-2xl">🙏</span>
                </div>
                <h3 className="text-xl font-bold font-khmer text-[#3B2922]">
                  {lang === 'kh' ? 'ប្រគេនចង្ហាន់' : '03 — Food Offerings to Monks'}
                </h3>
                <p className="text-sm font-khmer text-[#2B211C]/80 leading-relaxed">
                  {lang === 'kh'
                    ? 'ប្រជាជនរៀបចំម្ហូបអាហារ និងចង្ហាន់ ដើម្បីប្រគេនព្រះសង្ឃ។'
                    : 'Preparing nutritious dishes and morning food trays to offer to Buddhist monks.'}
                </p>
              </div>

              {/* Activity 04 */}
              <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#B88932]/30 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-[#3B2922] text-[#E6D3A3] flex items-center justify-center font-bold text-sm">
                    04
                  </span>
                  <span className="text-2xl">🕯️</span>
                </div>
                <h3 className="text-xl font-bold font-khmer text-[#3B2922]">
                  {lang === 'kh' ? 'ធ្វើបុណ្យ និងឧទ្ទិសកុសល' : '04 — Chanting & Dedicating Merit'}
                </h3>
                <p className="text-sm font-khmer text-[#2B211C]/80 leading-relaxed">
                  {lang === 'kh'
                    ? 'ក្រុមគ្រួសារចូលរួមធ្វើបុណ្យ ស្តាប់ព្រះសង្ឃសូត្រមន្ត ឬធម៌ និងឧទ្ទិសកុសលផលបុណ្យ។'
                    : 'Attending dharma recitations, chanting ceremonies, and dedicating merit to ancestors.'}
                </p>
              </div>

              {/* Activity 05 */}
              <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#B88932]/30 shadow-xs space-y-3 md:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-[#7A3030] text-[#FFFDF7] flex items-center justify-center font-bold text-sm">
                    05
                  </span>
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <h3 className="text-xl font-bold font-khmer text-[#3B2922]">
                  {lang === 'kh' ? 'ជួបជុំគ្រួសារ' : '05 — Family Reunion'}
                </h3>
                <p className="text-sm font-khmer text-[#2B211C]/80 leading-relaxed">
                  {lang === 'kh'
                    ? 'ភ្ជុំបិណ្ឌក៏ជាឱកាសសម្រាប់សមាជិកគ្រួសារជួបជុំគ្នា និងរំលឹកពីបុព្វការីជន។'
                    : 'A heartwarming opportunity for family members across generations to reunite and honor elders.'}
                </p>
              </div>

            </div>
          </div>

          {/* 🍚 Dedicated Bay Ben Section (បាយបិណ្ឌ & 🌅 បោះបាយបិណ្ឌ) */}
          <div className="bg-[#FFFDF7] p-6 lg:p-8 rounded-3xl border border-[#B88932]/30 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-[#B88932]/20 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🍚</span>
                <h2 className="text-2xl font-bold font-khmer text-[#3B2922]">
                  {lang === 'kh' ? 'ប្រពៃណីបាយបិណ្ឌ' : 'Traditional Bay Ben Custom'}
                </h2>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#B88932]/15 text-[#B88932] text-xs font-khmer font-bold flex items-center gap-1">
                <ShieldCheck size={14} />
                <span>{lang === 'kh' ? 'ជំនឿ និងប្រពៃណីសាសនា' : 'Religious & Cultural Tradition'}</span>
              </span>
            </div>

            <p className="text-base font-khmer text-[#2B211C]/90 leading-relaxed">
              {lang === 'kh'
                ? 'បាយបិណ្ឌ គឺជាផ្នែកមួយដែលមានសារៈសំខាន់ក្នុងប្រពៃណីភ្ជុំបិណ្ឌ។ នៅតាមគ្រួសារ និងសហគមន៍ អាចមានរបៀបរៀបចំ និងអនុវត្តខុសៗគ្នា។'
                : 'Bay Ben (sticky rice balls) forms an integral symbolic part of Pchum Ben observances, with slight preparation nuances across local communities.'}
            </p>

            <div className="p-5 rounded-2xl bg-[#F8F1E3] border-l-4 border-[#7A3030] space-y-2">
              <h3 className="text-lg font-bold font-khmer text-[#7A3030] flex items-center gap-2">
                <Sunrise size={18} />
                <span>🌅 {lang === 'kh' ? 'បោះបាយបិណ្ឌ' : 'Bay Ben Dawn Offering'}</span>
              </h3>
              <p className="text-sm font-khmer text-[#3B2922]/85 leading-relaxed">
                {lang === 'kh'
                  ? 'ពិធីបោះបាយបិណ្ឌ ប្រារព្ធឡើងនៅពេលព្រលឹមស្រាងៗ (ប្រមាណម៉ោង ៤ ព្រឹក) នៅតាមព្រះវិហារ តាមជំនឿប្រពៃណី និងសាសនាបុរាណខ្មែរ។'
                  : 'The early dawn Bay Ben offering takes place around pre-dawn hours at pagodas, representing traditional Cambodian Buddhist ancestral beliefs.'}
              </p>
            </div>
          </div>

          {/* 👻 Traditional Beliefs Section (ជំនឿប្រពៃណី) */}
          <div className="bg-[#3B2922] text-[#F8F1E3] p-6 lg:p-8 rounded-3xl border-2 border-[#B88932] shadow-xl space-y-4 relative overflow-hidden">
            <div className="flex items-center gap-3 border-b border-[#E6D3A3]/30 pb-3">
              <Sun size={24} className="text-[#E6D3A3]" />
              <h2 className="text-2xl font-bold font-khmer text-[#E6D3A3]">
                {lang === 'kh' ? 'ជំនឿប្រពៃណី និងសាសនា' : 'Traditional & Religious Beliefs'}
              </h2>
            </div>

            <div className="space-y-3 text-sm md:text-base font-khmer text-[#F8F1E3]/90 leading-relaxed">
              <div className="p-3 rounded-xl bg-[#2B211C] border border-[#B88932]/30 text-xs text-[#E6D3A3] font-bold flex items-center gap-2">
                <ShieldCheck size={16} />
                <span>{lang === 'kh' ? 'តាមជំនឿប្រពៃណី និងសាសនា...' : 'According to traditional religious heritage...'}</span>
              </div>
              <p>
                {lang === 'kh'
                  ? 'តាមជំនឿប្រពៃណី និងសាសនាខ្មែរ បុណ្យភ្ជុំបិណ្ឌជាប់ពាក់ព័ន្ធនឹងការរំលឹកដល់បុព្វការីជន និងព្រលឹងដែលបានលាចាកលោក (រួមទាំងប្រេត)។ ការធ្វើបុណ្យ និងប្រគេនចង្ហាន់ ជាការបញ្ជូនកុសលផលបុណ្យជូនដល់ពួកគាត់ឱ្យបានសុខសាន្ត។'
                  : 'According to traditional Cambodian Buddhist beliefs, Pchum Ben connects living relatives with departed ancestors and preta beings through merit-making and food offerings.'}
              </p>
            </div>
          </div>

          {/* ❤️ 5 Cultural Meaning Cards (អត្ថន័យវប្បធម៌) */}
          <div className="space-y-6">
            <KhmerDivider
              title={lang === 'kh' ? '❤️ អត្ថន័យវប្បធម៌នៃបុណ្យភ្ជុំបិណ្ឌ' : '❤️ Cultural Meaning of Pchum Ben'}
              subtitle={lang === 'kh' ? 'តម្លៃអប់រំ និងវប្បធម៌ដ៏ឧត្តុង្គឧត្តមនៃពិធីបុណ្យប្រពៃណីជាតិ' : 'Core cultural values embodied during Pchum Ben'}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              
              <div className="bg-[#FFFDF7] p-5 rounded-2xl border border-[#B88932]/30 text-center space-y-2">
                <span className="text-3xl">👴</span>
                <h3 className="text-base font-bold font-khmer text-[#3B2922]">
                  {lang === 'kh' ? 'រំលឹកបុព្វការីជន' : 'Remember Ancestors'}
                </h3>
                <p className="text-xs font-khmer text-[#3B2922]/75">
                  {lang === 'kh' ? 'បង្ហាញការចងចាំ និងដឹងគុណចំពោះដូនតា' : 'Honoring passed ancestors with gratitude'}
                </p>
              </div>

              <div className="bg-[#FFFDF7] p-5 rounded-2xl border border-[#B88932]/30 text-center space-y-2">
                <span className="text-3xl">👨‍👩‍👧‍👦</span>
                <h3 className="text-base font-bold font-khmer text-[#3B2922]">
                  {lang === 'kh' ? 'ជួបជុំគ្រួសារ' : 'Family Reunion'}
                </h3>
                <p className="text-xs font-khmer text-[#3B2922]/75">
                  {lang === 'kh' ? 'ពង្រឹងកតញ្ញូ និងកីឡាសាមគ្គីភាពគ្រួសារ' : 'Uniting family members together'}
                </p>
              </div>

              <div className="bg-[#FFFDF7] p-5 rounded-2xl border border-[#B88932]/30 text-center space-y-2">
                <span className="text-3xl">🙏</span>
                <h3 className="text-base font-bold font-khmer text-[#3B2922]">
                  {lang === 'kh' ? 'គោរព' : 'Show Respect'}
                </h3>
                <p className="text-xs font-khmer text-[#3B2922]/75">
                  {lang === 'kh' ? 'គោរពចាស់ព្រឹទ្ធាចារ្យ និងព្រះសង្ឃ' : 'Respecting elders and traditions'}
                </p>
              </div>

              <div className="bg-[#FFFDF7] p-5 rounded-2xl border border-[#B88932]/30 text-center space-y-2">
                <span className="text-3xl">🤝</span>
                <h3 className="text-base font-bold font-khmer text-[#3B2922]">
                  {lang === 'kh' ? 'ចែករំលែក' : 'Generosity'}
                </h3>
                <p className="text-xs font-khmer text-[#3B2922]/75">
                  {lang === 'kh' ? 'បណ្តុះចិត្តមេត្តា ចែករំលែកទាន' : 'Cultivating generosity & kindness'}
                </p>
              </div>

              <div className="bg-[#FFFDF7] p-5 rounded-2xl border border-[#B88932]/30 text-center space-y-2">
                <span className="text-3xl">🇰🇭</span>
                <h3 className="text-base font-bold font-khmer text-[#3B2922]">
                  {lang === 'kh' ? 'បន្តវប្បធម៌' : 'Passing Heritage'}
                </h3>
                <p className="text-xs font-khmer text-[#3B2922]/75">
                  {lang === 'kh' ? 'ផ្ទេរមរតកជាតិទៅជំនាន់ក្រោយ' : 'Passing heritage to future generations'}
                </p>
              </div>

            </div>
          </div>

          {/* 🎮 Relationship With Traditional Games (តើមានល្បែងប្រពៃណីសម្រាប់ភ្ជុំបិណ្ឌទេ?) */}
          <div className="bg-[#FFFDF7] p-6 lg:p-8 rounded-3xl border-2 border-[#B88932] shadow-md space-y-4">
            <div className="flex items-center gap-3 border-b border-[#B88932]/20 pb-3">
              <Sparkles size={24} className="text-[#7A3030]" />
              <h2 className="text-2xl font-bold font-khmer text-[#3B2922]">
                🎮 {lang === 'kh' ? 'តើមានល្បែងប្រពៃណីសម្រាប់ភ្ជុំបិណ្ឌទេ?' : 'Are There Specific Games for Pchum Ben?'}
              </h2>
            </div>

            <div className="p-4 rounded-2xl bg-[#7A3030]/10 border border-[#7A3030]/20 text-[#7A3030] font-khmer font-bold text-base md:text-lg">
              {lang === 'kh'
                ? '« មិនមែនគ្រប់ពិធីបុណ្យខ្មែរសុទ្ធតែមានល្បែងប្រពៃណីជាក់លាក់របស់ខ្លួនទេ។ »'
                : '“Not every Cambodian festival has its own specific traditional game.”'}
            </div>

            <p className="text-sm md:text-base font-khmer text-[#2B211C]/85 leading-relaxed">
              {lang === 'kh'
                ? 'បុណ្យភ្ជុំបិណ្ឌផ្តោតសំខាន់លើការធ្វើបុណ្យ ការទៅវត្ត ការប្រគេនចង្ហាន់ ការឧទ្ទិសកុសល និងការជួបជុំគ្រួសារ។ ល្បែងប្រពៃណីមួយចំនួន (ដូចជា បាយខុម, ចោលឈូង, លាក់កន្សែង) អាចត្រូវបានលេងក្នុងសហគមន៍ ឬក្នុងឱកាសជួបជុំ ប៉ុន្តែមិនគួរចាត់ទុកថាជា «ល្បែងប្រចាំបុណ្យភ្ជុំបិណ្ឌ» ទាំងអស់នោះទេ ប្រសិនបើមិនមានប្រភពគាំទ្រ។'
                : 'Pchum Ben primarily focuses on religious merit-making, pagoda ceremonies, food offerings, and family gatherings. While some traditional games like Bay Khmoche or Chhoung may be played casually during community reunions, Pchum Ben itself is focused on quiet ancestral respect.'}
            </p>

            <div className="pt-2 text-center">
              <Link
                to="/games"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-[#7A3030] hover:bg-[#3B2922] text-[#FFFDF7] font-khmer font-bold text-base shadow-md transition-all duration-300 group"
              >
                <span>{lang === 'kh' ? '🎮 ស្វែងរកល្បែងប្រពៃណីផ្សេងៗ' : '🎮 Explore Main Games Library'}</span>
                <ArrowRight size={18} className="text-[#E6D3A3] group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      )}

      {/* STANDARD FESTIVAL GAMES GRID FOR OTHER FESTIVALS */}
      {!isPchumBen && (
        <div>
          <KhmerDivider
            title={lang === 'kh' ? `🌸 ល្បែងក្នុង ${festival.nameKh}` : `🌸 Games in ${festival.nameEn}`}
            subtitle={lang === 'kh' ? 'បញ្ជីល្បែងប្រពៃណីដែលប្រជាជននិយមលេងក្នុងឱកាសនេះ' : 'Popular traditional games associated with this festive period'}
          />

          <div className="mt-8">
            <GameGrid games={festivalGames} lang={lang} />
          </div>
        </div>
      )}

    </div>
  );
};
