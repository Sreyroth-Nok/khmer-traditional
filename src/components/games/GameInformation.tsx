import type { TraditionalGame, Language } from '../../types/game';
import { Users, Wrench, Clock, MapPin, ScrollText, HeartHandshake, AlertCircle } from 'lucide-react';
import { KhmerFlower } from '../decorative/KhmerFlower';

interface GameInformationProps {
  game: TraditionalGame;
  lang: Language;
}

export const GameInformation: React.FC<GameInformationProps> = ({ game, lang }) => {
  return (
    <div className="space-y-8 my-10">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {game.players && (
          <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#B88932]/30 shadow-xs flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#7A3030]/10 text-[#7A3030] shrink-0">
              <Users size={24} />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold font-khmer text-[#3B2922]">
                👥 {lang === 'kh' ? 'អ្នកលេង' : 'Players'}
              </h3>
              <p className="text-sm font-khmer text-[#2B211C]/85">
                {lang === 'kh' ? game.players : (game.playersEn || game.players)}
              </p>
            </div>
          </div>
        )}

        {game.equipment && game.equipment.length > 0 && (
          <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#B88932]/30 shadow-xs flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#B88932]/15 text-[#B88932] shrink-0">
              <Wrench size={24} />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold font-khmer text-[#3B2922]">
                🧰 {lang === 'kh' ? 'ឧបករណ៍' : 'Equipment'}
              </h3>
              <ul className="text-sm font-khmer text-[#2B211C]/85 space-y-1">
                {(lang === 'kh' ? game.equipment : (game.equipmentEn || game.equipment)).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="text-[#B88932] text-xs">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {game.duration && (
          <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#B88932]/30 shadow-xs flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#526548]/15 text-[#526548] shrink-0">
              <Clock size={24} />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold font-khmer text-[#3B2922]">
                ⏱️ {lang === 'kh' ? 'រយៈពេល' : 'Typical Duration'}
              </h3>
              <p className="text-sm font-khmer text-[#2B211C]/85">
                {lang === 'kh' ? game.duration : (game.durationEn || game.duration)}
              </p>
            </div>
          </div>
        )}

        {game.contextKh && (
          <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#B88932]/30 shadow-xs flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#3B2922]/10 text-[#3B2922] shrink-0">
              <MapPin size={24} />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold font-khmer text-[#3B2922]">
                📍 {lang === 'kh' ? 'បរិបទ' : 'Context'}
              </h3>
              <p className="text-sm font-khmer text-[#2B211C]/85">
                {lang === 'kh' ? game.contextKh : (game.contextEn || game.contextKh)}
              </p>
            </div>
          </div>
        )}

      </div>

      {game.rulesKh && game.rulesKh.length > 0 && (
        <div className="bg-[#FFFDF7] p-6 lg:p-8 rounded-3xl border border-[#B88932]/30 shadow-xs space-y-4">
          <div className="flex items-center gap-3 border-b border-[#B88932]/20 pb-3">
            <ScrollText size={22} className="text-[#7A3030]" />
            <h3 className="text-xl font-bold font-khmer text-[#3B2922]">
              📜 {lang === 'kh' ? 'ច្បាប់ល្បែងមូលដ្ឋាន' : 'Basic Game Rules'}
            </h3>
          </div>
          <ol className="space-y-2.5 text-sm md:text-base font-khmer text-[#2B211C]/90 list-decimal list-inside">
            {(lang === 'kh' ? game.rulesKh : (game.rulesEn || game.rulesKh)).map((rule, idx) => (
              <li key={idx} className="leading-relaxed pl-2">
                <span>{rule}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="bg-[#F8F1E3] p-4 rounded-2xl border border-[#B88932]/40 text-xs md:text-sm font-khmer text-[#3B2922]/80 flex items-start gap-3">
        <AlertCircle size={20} className="text-[#B88932] shrink-0 mt-0.5" />
        <p>
          <strong>{lang === 'kh' ? 'ចំណាំពីតំបន់៖' : 'Regional Note:'}</strong>{' '}
          {lang === 'kh'
            ? (game.regionalNoteKh || 'របៀបលេង និងច្បាប់កាត់សេចក្តីអាចមានភាពខុសគ្នាតាមតំបន់ និងសហគមន៍។')
            : (game.regionalNoteEn || 'Rules and game terms may vary across different provinces and communities.')}
        </p>
      </div>

      {game.culturalMeaningKh && (
        <div className="bg-gradient-to-r from-[#7A3030] to-[#3B2922] p-6 lg:p-8 rounded-3xl text-[#FFFDF7] shadow-lg space-y-4 relative overflow-hidden">
          <div className="absolute right-4 bottom-4 opacity-10 pointer-events-none">
            <KhmerFlower size={160} color="#E6D3A3" />
          </div>

          <div className="flex items-center gap-3 relative z-10 border-b border-[#E6D3A3]/30 pb-3">
            <HeartHandshake size={26} className="text-[#E6D3A3]" />
            <h3 className="text-2xl font-bold font-khmer text-[#E6D3A3]">
              ❤️ {lang === 'kh' ? 'អត្ថន័យវប្បធម៌' : 'Cultural Meaning'}
            </h3>
          </div>

          <p className="text-base md:text-lg font-khmer leading-relaxed text-[#F8F1E3]/95 relative z-10">
            {lang === 'kh' ? game.culturalMeaningKh : (game.culturalMeaningEn || game.culturalMeaningKh)}
          </p>
        </div>
      )}

    </div>
  );
};
