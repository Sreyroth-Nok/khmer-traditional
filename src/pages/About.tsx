import { useEffect } from 'react';
import type { Language } from '../types/game';
import { KhmerDivider } from '../components/decorative/KhmerDivider';
import { KhmerFlower } from '../components/decorative/KhmerFlower';
import { Heart, ShieldCheck, Sparkles } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  useEffect(() => {
    document.title = lang === 'kh'
      ? 'អំពីគម្រោង | ល្បែងប្រពៃណីខ្មែរ'
      : 'About Project | Khmer Traditional Games';
    window.scrollTo(0, 0);
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#F8F1E3] py-8 md:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      
      <KhmerDivider
        title={lang === 'kh' ? 'អំពីគម្រោង ល្បែងប្រពៃណីខ្មែរ' : 'About Khmer Traditional Games Project'}
        subtitle={lang === 'kh'
          ? 'បេតិកភណ្ឌវប្បធម៌រស់រវើក ដើម្បីការអប់រំ ការចងចាំ និងការថែរក្សា'
          : 'A living cultural hub dedicated to education, preservation, and celebration of Cambodian folk games'}
      />

      <div className="bg-[#FFFDF7] p-8 lg:p-12 rounded-3xl border-2 border-[#B88932]/40 shadow-md space-y-6 relative overflow-hidden">
        <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
          <KhmerFlower size={220} color="#7A3030" />
        </div>

        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A3030]/10 text-[#7A3030] text-xs font-khmer font-bold">
            <Sparkles size={14} />
            <span>{lang === 'kh' ? 'បេសកកម្មគម្រោង' : 'Project Mission'}</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black font-khmer text-[#3B2922] leading-tight">
            {lang === 'kh'
              ? 'ថែរក្សា និងផ្សព្វផ្សាយល្បែងប្រពៃណីខ្មែរ តាមរចនាបថទំនើប និងគោរពវប្បធម៌'
              : 'Preserving Cambodian Traditional Games through Modern Artistry & Cultural Respect'}
          </h2>

          <p className="text-base md:text-lg font-khmer text-[#2B211C]/90 leading-relaxed">
            {lang === 'kh'
              ? 'គម្រោងនេះបង្កើតឡើងដើម្បីប្រមូលផ្តុំ ថែរក្សា និងបង្ហាញល្បែងប្រជាប្រិយខ្មែរដែលនិយមលេងក្នុងឱកាសពិធីបុណ្យចូលឆ្នាំខ្មែរ ភ្ជុំបិណ្ឌ អុំទូក និងការជួបជុំសហគមន៍។ យើងរួមបញ្ចូលគ្នានូវក្បាច់ផ្កាខ្មែរបុរាណ ជាមួយគំនូររូបភាព Anime វប្បធម៌ ដើម្បីទាក់ទាញយុវជនឱ្យកាន់តែស្គាល់ និងស្រឡាញ់បេតិកភណ្ឌជាតិ។'
              : 'This project is created to preserve and showcase traditional Cambodian folk games played during New Year, Pchum Ben, Water Festival, and community gatherings. By blending authentic Khmer floral ornaments (Kbach Phni) with friendly anime-style cultural illustrations, we create an accessible, beautiful digital archive.'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#B88932]/30 shadow-xs space-y-3">
          <div className="p-3 rounded-xl bg-[#7A3030]/10 text-[#7A3030] w-fit">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-xl font-bold font-khmer text-[#3B2922]">
            {lang === 'kh' ? 'ភាពត្រឹមត្រូវតាមវប្បធម៌' : 'Cultural Accuracy'}
          </h3>
          <p className="text-sm font-khmer text-[#2B211C]/80 leading-relaxed">
            {lang === 'kh'
              ? 'ខ្លឹមសារត្រូវបានរៀបចំឡើងដោយប្រុងប្រយ័ត្ន ដោយមិនបង្កើតប្រវត្តិសាស្ត្រក្លែងក្លាយ ហើយទទួលស្គាល់ថា របៀបលេងអាចមានភាពខុសគ្នាតាមតំបន់ និងសហគមន៍ខ្មែរ។'
              : 'Content is presented respectfully without inventing unverified facts, acknowledging that game rules naturally vary across regions.'}
          </p>
        </div>

        <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#B88932]/30 shadow-xs space-y-3">
          <div className="p-3 rounded-xl bg-[#B88932]/15 text-[#B88932] w-fit">
            <KhmerFlower size={28} color="#B88932" />
          </div>
          <h3 className="text-xl font-bold font-khmer text-[#3B2922]">
            {lang === 'kh' ? 'ក្បាច់ផ្កាខ្មែរ & សិល្បៈ' : 'Khmer Ornament & Art'}
          </h3>
          <p className="text-sm font-khmer text-[#2B211C]/80 leading-relaxed">
            {lang === 'kh'
              ? 'ប្រើប្រាស់ក្បាច់ផ្កាខ្មែរជាគ្រឿងលម្អរចនាបថ រួមជាមួយគំនូរ Anime បង្ហាញសកម្មភាពលេងយ៉ាងច្បាស់លាស់ ផ្តល់នូវបទពិសោធន៍ទាក់ទាញ។'
              : 'Incorporates original Khmer floral motifs and expressive anime illustrations that clearly demonstrate how each game is played.'}
          </p>
        </div>

        <div className="bg-[#FFFDF7] p-6 rounded-2xl border border-[#B88932]/30 shadow-xs space-y-3">
          <div className="p-3 rounded-xl bg-[#526548]/15 text-[#526548] w-fit">
            <Heart size={28} />
          </div>
          <h3 className="text-xl font-bold font-khmer text-[#3B2922]">
            {lang === 'kh' ? 'ការអប់រំ & ចងចាំ' : 'Educational Legacy'}
          </h3>
          <p className="text-sm font-khmer text-[#2B211C]/80 leading-relaxed">
            {lang === 'kh'
              ? 'ជួយឱ្យកូនខ្មែរ និងអ្នកសិក្សាវប្បធម៌អាចរៀនរបៀបលេង ឧបករណ៍ ច្បាប់ និងអត្ថន័យវប្បធម៌នៃល្បែងប្រជាប្រិយបានយ៉ាងងាយស្រួល។'
              : 'Empowers Cambodian youth and international learners to understand instructions, equipment, and cultural meanings effortlessly.'}
          </p>
        </div>

      </div>

      <div className="bg-[#3B2922] text-[#F8F1E3] p-8 md:p-10 rounded-3xl border-2 border-[#B88932] text-center space-y-3">
        <p className="text-xl md:text-2xl font-bold font-khmer text-[#E6D3A3] italic">
          « លេង • រៀន • ចងចាំ • បន្ត »
        </p>
        <p className="text-sm font-khmer text-[#F8F1E3]/80 max-w-xl mx-auto">
          {lang === 'kh'
            ? 'ចូលរួមថែរក្សាមរតកល្បែងប្រពៃណីខ្មែរឱ្យគង់វង្ស និងរីកចម្រើនគ្រប់តំបន់។'
            : 'Join us in preserving and honoring traditional Cambodian games for future generations.'}
        </p>
      </div>

    </div>
  );
};
