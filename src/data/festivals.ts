import type { Festival } from '../types/festival';

export const FESTIVALS: Festival[] = [
  {
    id: 'khmer-new-year',
    nameKh: 'បុណ្យចូលឆ្នាំខ្មែរ',
    nameEn: 'Khmer New Year',
    slug: 'khmer-new-year',
    icon: '🌸',
    monthKh: 'ខែចេត្រ (ខែមេសា)',
    monthEn: 'Maha Sangkran (April)',
    descriptionKh: 'ពិធីបុណ្យចូលឆ្នាំថ្មីប្រពៃណីជាតិខ្មែរ ជាពេលវេលាដែលប្រជាជនខ្មែរជួបជុំគ្រួសារ ធ្វើបុណ្យទាន និងលេងល្បែងប្រជាប្រិយខ្មែរយ៉ាងសប្បាយរីករាយនៅតាមវត្តអារាម និងសហគមន៍។',
    descriptionEn: 'The traditional Cambodian New Year celebration, a joyous time when families gather, visit pagodas, and play traditional popular games together in community spaces.',
    image: '/illustrations/bos-angkunh.png',
    gameIds: ['bos-angkunh', 'teanh-prot', 'vea-kam', 'chhoung', 'leak-kanseng'],
    bannerBg: 'from-[#7A3030]/90 to-[#3B2922]'
  },
  {
    id: 'pchum-ben',
    nameKh: 'បុណ្យភ្ជុំបិណ្ឌ',
    nameEn: 'Pchum Ben Festival',
    slug: 'pchum-ben',
    icon: '🌾',
    monthKh: 'ខែភទ្របទ (ខែកញ្ញា-តុលា)',
    monthEn: 'Bhadrapada (Sept - Oct)',
    descriptionKh: 'ពិធីបុណ្យភ្ជុំបិណ្ឌ ជាបុណ្យប្រពៃណីជាតិដ៏ធំមួយក្នុងការឧទ្ទិសកុសលជូនបុព្វការីជន។ ក្នុងឱកាសនេះ អ្នកភូមិជួបជុំគ្នាធ្វើបុណ្យ និងអាចមានការលេងល្បែងកំសាន្តប្រជាប្រិយក្នុងសហគមន៍។',
    descriptionEn: 'Ancestors Day, one of the most important traditional observances. Communities gather at pagodas and engage in traditional fellowship and quiet community pastimes.',
    image: '/illustrations/chhoung.png',
    gameIds: ['bay-khmoche', 'chhoung', 'leak-kanseng'],
    bannerBg: 'from-[#526548]/90 to-[#3B2922]'
  },
  {
    id: 'bon-om-touk',
    nameKh: 'បុណ្យអុំទូក',
    nameEn: 'Bon Om Touk (Water Festival)',
    slug: 'bon-om-touk',
    icon: '🚣',
    monthKh: 'ខែកត្ដិក (ខែវិច្ឆិកា)',
    monthEn: 'Kattika (November)',
    descriptionKh: 'ព្រះរាជពិធីបុណ្យអុំទូក បណ្តែតប្រទីប និងសំពះព្រះខែ អកអំបុក ប្រារព្ធឡើងដើម្បីរំលឹកដល់កងទ័ពជើងទឹកខ្មែរ និងបង្ហាញភាពសប្បាយរីករាយតាមដងទន្លេ។',
    descriptionEn: 'The Cambodian Water and Moon Festival featuring traditional longboat racing along the river, illuminated floats, and festive riverbank gatherings.',
    image: '/illustrations/boat-racing.png',
    gameIds: ['boat-racing', 'teanh-prot'],
    bannerBg: 'from-[#B88932]/90 to-[#3B2922]'
  },
  {
    id: 'other-occasions',
    nameKh: 'ពិធីបុណ្យ និងឱកាសផ្សេងៗ',
    nameEn: 'Community & Regional Festivals',
    slug: 'other-occasions',
    icon: '🎊',
    monthKh: 'ពេញមួយឆ្នាំ',
    monthEn: 'Throughout the Year',
    descriptionKh: 'ល្បែងប្រពៃណីដែលប្រជាជនខ្មែរនិយមលេងក្នុងពិធីមង្គលការ ការជួបជុំភូមិ ពិធីបុណ្យភូមិ និងការកម្សាន្តប្រចាំថ្ងៃរបស់កុមារ និងយុវជន។',
    descriptionEn: 'Traditional games played during weddings, village harvest celebrations, gatherings, and daily recreational fun among Cambodian youth.',
    image: '/illustrations/leak-kanseng.png',
    gameIds: ['leak-kanseng', 'bay-khmoche', 'vea-kam'],
    bannerBg: 'from-[#3B2922]/95 to-[#7A3030]'
  }
];
