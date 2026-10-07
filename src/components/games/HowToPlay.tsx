import { useState } from 'react';
import type { GameStep, Language } from '../../types/game';
import { Target, Check } from 'lucide-react';
import { KhmerFlower } from '../decorative/KhmerFlower';

interface HowToPlayProps {
  steps: GameStep[];
  image: string;
  gameNameKh: string;
  lang: Language;
}

export const HowToPlay: React.FC<HowToPlayProps> = ({
  steps,
  image,
  gameNameKh,
  lang
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = steps[activeStepIndex] || steps[0];

  return (
    <div className="bg-[#FFFDF7] p-6 lg:p-8 rounded-3xl border border-[#B88932]/30 shadow-md my-10 space-y-8">
      
      <div className="flex items-center gap-3 border-b border-[#B88932]/20 pb-4">
        <div className="p-2.5 rounded-full bg-[#7A3030] text-[#FFFDF7]">
          <Target size={24} />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold font-khmer text-[#3B2922]">
            🎯 {lang === 'kh' ? 'របៀបលេង (តាមដំណាក់កាល)' : 'How to Play (Step-by-Step)'}
          </h2>
          <p className="text-xs md:text-sm font-khmer text-[#3B2922]/70">
            {lang === 'kh'
              ? 'ចុចលើដំណាក់កាលនីមួយៗខាងក្រោមដើម្បីមើលការណែនាំលម្អិត និងរូបភាពបង្ហាញដំណាក់កាល'
              : 'Click on any step below to visually highlight and explore each phase of play'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div className="lg:col-span-6 space-y-4">
          {steps.map((st, idx) => {
            const isSelected = idx === activeStepIndex;
            return (
              <div
                key={st.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#F8F1E3] border-[#7A3030] shadow-md ring-2 ring-[#7A3030]/20 translate-x-1'
                    : 'bg-[#FFFDF7] border-[#B88932]/25 hover:border-[#B88932] hover:bg-[#F8F1E3]/50'
                }`}
              >
                <div className="flex items-start gap-4">
                  
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shrink-0 transition-colors ${
                      isSelected
                        ? 'bg-[#7A3030] text-[#FFFDF7]'
                        : 'bg-[#E6D3A3]/50 text-[#3B2922]'
                    }`}
                  >
                    {st.step < 10 ? `0${st.step}` : st.step}
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-base md:text-lg font-bold font-khmer ${
                        isSelected ? 'text-[#7A3030]' : 'text-[#3B2922]'
                      }`}>
                        {lang === 'kh' ? st.titleKh : (st.titleEn || st.titleKh)}
                      </h3>
                      {isSelected && (
                        <span className="text-xs bg-[#7A3030]/10 text-[#7A3030] font-khmer font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Check size={12} />
                          <span>{lang === 'kh' ? 'កំពុងមើល' : 'Active'}</span>
                        </span>
                      )}
                    </div>

                    <p className="text-sm font-khmer text-[#2B211C]/80 leading-relaxed">
                      {lang === 'kh' ? st.descriptionKh : (st.descriptionEn || st.descriptionKh)}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-[#B88932] bg-[#3B2922]">
            <img
              src={image}
              alt={gameNameKh}
              className="w-full h-full object-cover transition-all duration-500"
            />

            <div className="absolute inset-0 bg-black/20" />

            {activeStep.highlightCoordinates && (
              <div
                className="absolute z-20 flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 animate-bounce pointer-events-none"
                style={{
                  left: `${activeStep.highlightCoordinates.x}%`,
                  top: `${activeStep.highlightCoordinates.y}%`
                }}
              >
                <div className="bg-[#7A3030] text-[#FFFDF7] font-khmer text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-[#E6D3A3] whitespace-nowrap flex items-center gap-1.5">
                  <KhmerFlower size={14} color="#E6D3A3" />
                  <span>{activeStep.highlightCoordinates.label}</span>
                </div>
                <div className="w-3 h-3 bg-[#7A3030] rotate-45 -mt-1 border-r border-b border-[#E6D3A3]" />
              </div>
            )}

            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#3B2922] via-[#3B2922]/90 to-transparent p-4 text-[#F8F1E3] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#B88932] text-[#FFFDF7] flex items-center justify-center font-bold text-sm">
                  {activeStep.step}
                </span>
                <span className="font-khmer font-bold text-sm text-[#E6D3A3]">
                  {lang === 'kh' ? activeStep.titleKh : (activeStep.titleEn || activeStep.titleKh)}
                </span>
              </div>
              <span className="text-xs font-khmer text-[#E6D3A3]/80">
                {activeStepIndex + 1} / {steps.length}
              </span>
            </div>
          </div>

          <p className="text-xs text-center font-khmer text-[#3B2922]/70 italic">
            {lang === 'kh'
              ? '💡 ចុចដំណាក់កាលផ្សេងៗគ្នាខាងឆ្វេង ដើម្បីមើលផ្ទាំងការបង្ហាញ'
              : '💡 Click different steps on the left to see highlighting on the illustration'}
          </p>
        </div>

      </div>
    </div>
  );
};
