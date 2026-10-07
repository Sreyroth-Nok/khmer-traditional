import { Link } from 'react-router-dom';
import type { Language } from '../../types/game';
import { KhmerFlower } from '../decorative/KhmerFlower';
import { KhmerDivider } from '../decorative/KhmerDivider';
import { FESTIVALS } from '../../data/festivals';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-[#3B2922] text-[#F8F1E3] pt-12 pb-8 relative overflow-hidden border-t-4 border-[#B88932]">
      <div className="absolute -top-12 -left-12 opacity-15 pointer-events-none">
        <KhmerFlower size={200} color="#E6D3A3" />
      </div>
      <div className="absolute -bottom-12 -right-12 opacity-15 pointer-events-none">
        <KhmerFlower size={200} color="#E6D3A3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-[#FFFDF7] border border-[#B88932]">
                <KhmerFlower size={28} color="#7A3030" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-khmer text-[#E6D3A3]">
                  ល្បែងប្រពៃណីខ្មែរ
                </h3>
                <p className="text-xs text-[#B88932] font-inter uppercase tracking-wider">
                  Khmer Traditional Games
                </p>
              </div>
            </div>
            <p className="text-sm font-khmer leading-relaxed text-[#F8F1E3]/80">
              {lang === 'kh'
                ? 'គេហទំព័ររក្សាទុក និងលើកស្ទួយបេតិកភណ្ឌល្បែងប្រជាប្រិយខ្មែរ ដើម្បីឱ្យកូនខ្មែរជំនាន់ក្រោយបានស្គាល់ លេង រៀន និងចងចាំ។'
                : 'A dedicated digital preservation hub celebrating traditional Cambodian games, enabling future generations to learn, enjoy, and preserve cultural heritage.'}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold font-khmer text-[#E6D3A3] mb-4 flex items-center gap-2">
              <span className="text-[#B88932]">✦</span>
              {lang === 'kh' ? 'ទំព័រសំខាន់ៗ' : 'Quick Links'}
            </h4>
            <ul className="space-y-2.5 font-khmer text-sm text-[#F8F1E3]/85">
              <li>
                <Link to="/" className="hover:text-[#B88932] transition-colors flex items-center gap-2">
                  <span>›</span> {lang === 'kh' ? 'ទំព័រដើម' : 'Home'}
                </Link>
              </li>
              <li>
                <Link to="/games" className="hover:text-[#B88932] transition-colors flex items-center gap-2">
                  <span>›</span> {lang === 'kh' ? 'ល្បែងទាំងអស់' : 'All Games'}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#B88932] transition-colors flex items-center gap-2">
                  <span>›</span> {lang === 'kh' ? 'អំពីគម្រោង' : 'About Project'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-khmer text-[#E6D3A3] mb-4 flex items-center gap-2">
              <span className="text-[#B88932]">✦</span>
              {lang === 'kh' ? 'ស្វែងរកតាមពិធីបុណ្យ' : 'Festivals'}
            </h4>
            <ul className="space-y-2.5 font-khmer text-sm text-[#F8F1E3]/85">
              {FESTIVALS.map((fest) => (
                <li key={fest.id}>
                  <Link
                    to={`/festivals/${fest.slug}`}
                    className="hover:text-[#B88932] transition-colors flex items-center gap-2"
                  >
                    <span>{fest.icon}</span>
                    <span>{lang === 'kh' ? fest.nameKh : fest.nameEn}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#2B211C] p-5 rounded-2xl border border-[#B88932]/40 space-y-3">
            <h4 className="text-base font-bold font-khmer text-[#E6D3A3] flex items-center gap-2">
              <span>🇰🇭</span>
              {lang === 'kh' ? 'ពាក្យស្លោកវប្បធម៌' : 'Cultural Wisdom'}
            </h4>
            <p className="text-xs font-khmer text-[#E6D3A3]/90 italic leading-relaxed">
              « វប្បធម៌រលត់ ជាតិរលាយ វប្បធម៌ពណ្ណរាយ ជាតិថ្កើងថ្កាន »
            </p>
            <p className="text-xs text-[#F8F1E3]/70 font-khmer">
              {lang === 'kh'
                ? 'របៀបលេង និងច្បាប់នៃល្បែងប្រពៃណីអាចមានភាពខុសគ្នាតាមតំបន់ និងសហគមន៍ខ្មែរនានា។'
                : 'Game rules and variations may differ across local provinces and regional Cambodian communities.'}
            </p>
          </div>

        </div>

        <KhmerDivider color="#E6D3A3" className="my-6" />

        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-[#F8F1E3]/70 font-khmer gap-4">
          <p>© {new Date().getFullYear()} ល្បែងប្រពៃណីខ្មែរ — Khmer Traditional Games Project. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs font-inter text-[#E6D3A3]">
            <span>Modern Khmer Heritage × Anime Cultural Art</span>
            <span className="font-semibold bg-[#7A3030]/80 px-3 py-1 rounded-full border border-[#B88932]/40 shadow-xs">
              develop by Zzzroth love u ❤️
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
