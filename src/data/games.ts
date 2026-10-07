import type { TraditionalGame } from '../types/game';

export const GAMES: TraditionalGame[] = [
  {
    id: 'bos-angkunh',
    nameKh: 'បោះអង្គញ់',
    nameEn: 'Bos Angkunh',
    slug: 'bos-angkunh',
    category: 'festival',
    categoryKh: 'ល្បែងពិធីបុណ្យ',
    categoryEn: 'Festival Game',
    featured: true,
    image: '/illustrations/bos-angkunh.png',
    festivals: ['khmer-new-year'],
    descriptionKh: 'ល្បែងប្រជាប្រិយខ្មែរដ៏ល្បីល្បាញ ដែលគេនិយមលេងក្នុងឱកាសពិធីបុណ្យចូលឆ្នាំថ្មីប្រពៃណីជាតិ ដោយប្រើផ្លែអង្គញ់ស្ងួតដើម្បីបោះ ឬត្រកួសតម្រង់ជួរអង្គញ់ដៃគូ។',
    descriptionEn: 'One of the most iconic Cambodian traditional New Year games played with dried fruit seeds (Angkunh) by flicking or throwing them towards standing target seeds.',
    aboutKh: 'បោះអង្គញ់ ជាល្បែងប្រជាប្រិយខ្មែរបុរាណមួយ ដែលនិយមលេងបំផុតនៅពេលបុណ្យចូលឆ្នាំខ្មែរ។ ល្បែងនេះតម្រូវឱ្យមានការបោះ ត្រកួស ឬបាញ់ផ្លែអង្គញ់ (ផ្លែឈើស្ងួតមានសំបកសំប៉ែតរឹង) ទៅលើជួរផ្លែអង្គញ់ដែលបានរៀបចំទុក។ ក្រៅពីភាពសប្បាយរីករាយ ល្បែងនេះជួយបណ្តុះស្មារតីសាមគ្គីភាព និងភាពស្ទាត់ជំនាញដៃ។',
    aboutEn: 'Bos Angkunh is an ancient Cambodian folk game played predominantly during Khmer New Year. Players use dried Angkunh seeds (hard flat seeds from the Entada gigas vine) to throw, strike, or flick at target seeds set up by the opposing team. Beyond entertainment, it promotes dexterity, sportsmanship, and community bond.',

    players: '២ ក្រុម (ម្នាក់ៗពី ៣ ទៅ ៥ នាក់)',
    playersEn: '2 Teams (3 to 5 players per team)',
    equipment: ['ផ្លែអង្គញ់ស្ងួត (Angkunh Seeds)', 'ទីតាំងរលោងស្អាត (Clean Ground)'],
    equipmentEn: ['Dried Angkunh Seeds', 'Flat playing ground'],
    duration: '៣០ - ៦០ នាទី',
    durationEn: '30 - 60 minutes',
    contextKh: 'លេងនៅតាមវត្តអារាម ទីលានភូមិ ក្នុងឱកាសបុណ្យចូលឆ្នាំខ្មែរ',
    contextEn: 'Played at pagoda yards and village green grounds during Khmer New Year',
    regionalNoteKh: 'របៀបលេង និងច្បាប់កាត់សេចក្តី (ដូចជាការមាន់ ឬជួយកាយ) អាចមានភាពខុសគ្នាតាមតំបន់ និងសហគមន៍។',
    regionalNoteEn: 'Rules regarding penalty flicking or bonus steps may vary slightly across different provinces and communities.',

    rulesKh: [
      'ចែកអ្នកលេងជាពីរក្រុមស្មើគ្នា (ក្រុមប្រុស និងក្រុមស្រី ឬក្រុមចម្រុះ)។',
      'រៀបចំផ្លែអង្គញ់ "កាយ" ឈរជួរមុខទីតាំងក្រុមនីមួយៗ។',
      'ក្រុមនីមួយៗត្រូវបោះផ្លែអង្គញ់តម្រង់ទៅផ្លែអង្គញ់ដៃគូតាមដំណាក់កាល (បោះ, ត្រកួស, បាញ់)។',
      'ក្រុមណាដែលបោះត្រូវច្រើនជាងគេ នឹងទទួលបានជ័យជំនះ ហើយមានសិទ្ធិ "មាន់" (ជោះ ឬត្រកួស) ក្បាលជង្គង់ក្រុមដែលចាញ់តាមការព្រមព្រៀង។'
    ],
    rulesEn: [
      'Divide players into two equal teams.',
      'Set target Angkunh seeds in a row at specified distances.',
      'Teams take turns throwing, flicking, or rolling their seeds at the target row.',
      'The winning team gets to perform friendly penalty taps (Kohl) on the losing team knees based on points score.'
    ],

    howToPlay: [
      {
        step: 1,
        titleKh: 'រៀបចំឧបករណ៍ និងទីតាំង',
        titleEn: 'Set Up Equipment & Pitch',
        descriptionKh: 'ជ្រើសរើសផ្លែអង្គញ់ស្ងួតរឹងស្អាត និងវាស់ចម្ងាយប្រមាណ ៥ ទៅ ៧ ម៉ែត្ររវាងជួរទីតាំងទាំងពីរ។',
        descriptionEn: 'Select smooth dried Angkunh seeds and mark two baseline positions 5 to 7 meters apart.',
        iconName: 'Sparkles',
        highlightCoordinates: { x: 20, y: 30, label: 'ទីតាំងរៀបចំអង្គញ់' }
      },
      {
        step: 2,
        titleKh: 'រៀបចំផ្លែអង្គញ់កាយ',
        titleEn: 'Arrange Target Seeds',
        descriptionKh: 'រៀបចំផ្លែអង្គញ់ ៣ ទៅ ៥ គ្រាប់ឈរជាជួរត្រង់នៅមុខក្រុមនីមួយៗ។',
        descriptionEn: 'Stand 3 to 5 seeds upright in a neat row in front of each team position.',
        iconName: 'Target',
        highlightCoordinates: { x: 50, y: 70, label: 'ជួរផ្លែអង្គញ់កាយ' }
      },
      {
        step: 3,
        titleKh: 'ដំណាក់កាលបោះអង្គញ់',
        titleEn: 'Throwing Stage (Bos)',
        descriptionKh: 'អ្នកលេងម្នាក់ៗកាន់ផ្លែអង្គញ់ ហើយបោះសំដៅទៅរំលំជួរអង្គញ់កាយរបស់ក្រុមប្រជែង។',
        descriptionEn: 'Players take turns tossing their Angkunh seeds aiming to knock down the target seeds.',
        iconName: 'Send',
        highlightCoordinates: { x: 30, y: 40, label: 'កាយវិការបោះ' }
      },
      {
        step: 4,
        titleKh: 'ដំណាក់កាលត្រកួស និងបាញ់',
        titleEn: 'Flicking & Knee-Tossing Stage',
        descriptionKh: 'អនុវត្តរបៀបលេងតាមវគ្គបន្តដូចជាការត្រកួស (ប្រើមេដៃចង្អុល) ឬការដាក់លើក្បាលជង្គង់រួចដើរទៅរលាស់ឱ្យត្រូវ។',
        descriptionEn: 'Perform subsequent rounds such as thumb flicking or balancing on knee before striking.',
        iconName: 'Zap',
        highlightCoordinates: { x: 70, y: 50, label: 'ការត្រកួសអង្គញ់' }
      },
      {
        step: 5,
        titleKh: 'គិតពិន្ទុ និងការកំណត់លទ្ធផល',
        titleEn: 'Scoring & Friendly Penalty',
        descriptionKh: 'ក្រុមដែលត្រូវច្រើនជាងគេឈ្នះ។ ក្រុមចាញ់ត្រូវអង្គុយលុតជង្គង់ឱ្យក្រុមឈ្នះត្រកួស (មាន់) ដោយក្តីរីករាយ។',
        descriptionEn: 'The team with most hits wins. The winning team performs light, gentle knee-flicks on the losing team as friendly penalty.',
        iconName: 'Award',
        highlightCoordinates: { x: 80, y: 80, label: 'ការត្រកួសក្បាលជង្គង់' }
      }
    ],

    culturalMeaningKh: 'បោះអង្គញ់ តំណាងឱ្យភាពសុខសាន្ត សាមគ្គីភាព និងការបណ្តុះស្នាមញញឹមរវាងអ្នកភូមិ យុវជន និងយុវតី។ ល្បែងនេះជួយឱ្យមនុស្សក្នុងសហគមន៍កាន់តែជិតស្និទ្ធ និងរក្សានូវកេរដំណែលវប្បធម៌ដូនតាខ្មែរ។',
    culturalMeaningEn: 'Bos Angkunh symbolizes harmony, community bonding, and joyful interaction between youth. It strengthens community relationships and preserves ancestral Cambodian heritage.'
  },
  {
    id: 'teanh-prot',
    nameKh: 'ទាញព្រ័ត្រ',
    nameEn: 'Teanh Prot (Tug-of-War)',
    slug: 'teanh-prot',
    category: 'sport',
    categoryKh: 'កីឡាប្រពៃណី',
    categoryEn: 'Traditional Sport',
    featured: false,
    image: '/illustrations/teanh-prot.png',
    festivals: ['khmer-new-year', 'bon-om-touk'],
    descriptionKh: 'ល្បែងប្រកួតប្រជែងកម្លាំង និងសាមគ្គីភាពរវាងក្រុមពីរ ដោយប្រើខ្សែព្រ័ត្រធំវែង រាំវង់កញ្ជ្រៀវ និងស្រែកហ៊ោញ៉ាំងឱ្យបរិយាកាសរីករាយ។',
    descriptionEn: 'A high-energy traditional tug-of-war competition testing collective strength, teamwork, and spirit amidst cheerful drumming and crowd cheers.',
    aboutKh: 'ទាញព្រ័ត្រ ជាល្បែងប្រជាប្រិយ និងជាកីឡាប្រពៃណីខ្មែរយ៉ាងពេញនិយម។ គេច្រើនលេងក្នុងពិធីបុណ្យចូលឆ្នាំខ្មែរ និងពិធីបុណ្យផ្សេងៗ។ ការទាញព្រ័ត្រមិនត្រឹមតែជាការវាស់កម្លាំងបាយប៉ុណ្នោះទេ ប៉ុន្តែថែមទាំងជានិមិត្តរូបនៃការបួងសួងសុំទឹកភ្លៀង ភាពសម្បូរវាយោ និងសិរីសួស្តីដល់ភូមិឋាន។',
    aboutEn: 'Teanh Prot is a beloved Cambodian tug-of-war game played during festivals. Symbolizing unity and rain invocation in ancient tradition, two teams pull opposite ends of a heavy rope until a designated center mark crosses the threshold.',

    players: '២ ក្រុម (ក្រុមនីមួយៗ ១០ - ២០ នាក់ ឬច្រើនជាងនេះ)',
    playersEn: '2 Teams (10 to 20+ players per side)',
    equipment: ['ខ្សែព្រ័ត្រធំវែង (Heavy Braided Rope)', 'ក្រណាត់ចងចំណាំកណ្តាល (Center Ribbon)'],
    equipmentEn: ['Heavy long rope', 'Center marker ribbon'],
    duration: '១៥ - ៣០ នាទី',
    durationEn: '15 - 30 minutes',
    contextKh: 'ទីលានធំ វត្តអារាម និងពិធីកម្សាន្តសហគមន៍',
    contextEn: 'Open green fields, pagoda yards, and festive community grounds',
    regionalNoteKh: 'ក្នុងសហគមន៍ខ្លះ មានការរៀបចំក្រុមប្រុសទល់នឹងក្រុមស្រី ឬក្រុមភូមិម្ខាងទល់នឹងភូមិម្ខាងទៀត។',
    regionalNoteEn: 'In some communities, teams are divided male vs female or between neighboring villages.',

    rulesKh: [
      'ចងក្រណាត់ពណ៌ក្រហមនៅចំកណ្តាលខ្សែព្រ័ត្រ និងគូសបន្ទាត់ព្រំដែននៅលើដី។',
      'ក្រុមទាំងពីរកាន់ខ្សែព្រ័ត្រម្ខាងម្នាក់ និងឈរតំរៀបគ្នាដោយរឹងមាំ។',
      'ពេលសំឡេងកញ្ចែ ឬសញ្ញាចាប់ផ្តើម ក្រុមនីមួយៗត្រូវប្រឹងទាញខ្សែមកខាងខ្លួន។',
      'ក្រុមណាដែលទាញក្រណាត់កណ្តាលឱ្យឆ្លងផុតបន្ទាត់ព្រំដែនខាងខ្លួនមុន គឺជាអ្នកឈ្នះ។'
    ],
    rulesEn: [
      'Tie a red marker ribbon at the middle of the rope and mark a center line on the ground.',
      'Both teams line up on opposite sides holding the rope tightly.',
      'Upon the start signal, both sides pull with maximum unified strength.',
      'The side that pulls the center ribbon across their boundary mark wins the round.'
    ],

    howToPlay: [
      {
        step: 1,
        titleKh: 'រៀបចំខ្សែព្រ័ត្រ និងទីតាំង',
        titleEn: 'Set Rope & Center Line',
        descriptionKh: 'ពង្រាយខ្សែព្រ័ត្រនៅលើទីលាន រួចចងក្រណាត់ក្រហមចំកណ្តាល និងគូសបន្ទាត់លើដី។',
        descriptionEn: 'Lay out the rope, tie a center marker ribbon, and draw baseline markings on the ground.',
        iconName: 'Shield',
        highlightCoordinates: { x: 50, y: 50, label: 'ចំណុចកណ្តាលខ្សែ' }
      },
      {
        step: 2,
        titleKh: 'តម្រៀបជួរ និងចាប់កាន់ខ្សែ',
        titleEn: 'Position Teams',
        descriptionKh: 'សមាជិកក្រុមនីមួយៗចាប់កាន់ខ្សែព្រ័ត្រស្មើៗគ្នា ដោយដាក់ជើងឈររឹងមាំ។',
        descriptionEn: 'Players grab the rope firmly on both sides in sturdy stances.',
        iconName: 'Users',
        highlightCoordinates: { x: 25, y: 60, label: 'ក្រុមខាងឆ្វេង និងស្តាំ' }
      },
      {
        step: 3,
        titleKh: 'ផ្តល់សញ្ញាចាប់ផ្តើមទាញ',
        titleEn: 'Start Pulling',
        descriptionKh: 'អាជ្ញាកណ្តាលផ្លុំកញ្ចែ ឬស្រែកឱ្យសញ្ញា ក្រុមទាំងពីរប្រឹងទាញដោយស្មារតីរួមគ្នា។',
        descriptionEn: 'The referee signals start and both teams pull in rhythmic harmony.',
        iconName: 'Flame',
        highlightCoordinates: { x: 50, y: 40, label: 'សកម្មភាពទាញ' }
      },
      {
        step: 4,
        titleKh: 'កំណត់ក្រុមឈ្នះ',
        titleEn: 'Determine Victory',
        descriptionKh: 'ក្រុមណាទាញចំណុចកណ្តាលឆ្លងផុតបន្ទាត់ព្រំដែនខ្លួនឯងមុន ទទួលបានជ័យជំនះក្រោមសំឡេងហ៊ោស្វាគមន៍។',
        descriptionEn: 'The team that pulls the ribbon across their mark is crowned victor amidst cheering.',
        iconName: 'Trophy',
        highlightCoordinates: { x: 80, y: 50, label: 'ក្រុមទទួលបានជ័យជំនះ' }
      }
    ],

    culturalMeaningKh: 'ទាញព្រ័ត្រ បញ្ជាក់ពីកម្លាំងនៃសាមគ្គីភាព និងការរួមបេះដូងតែមួយ។ គ្មានជ័យជំនះណាអាចសម្រេចបានដោយបុគ្គលម្នាក់នោះទេ លុះត្រាតែមានការខិតខំរួមគ្នានៃសហគមន៍ទាំងមូល។',
    culturalMeaningEn: 'Teanh Prot emphasizes that unity is strength. Victory cannot be achieved individually; it relies on the synchronized harmony of the whole community.'
  },
  {
    id: 'vea-kam',
    nameKh: 'វាយក្អម',
    nameEn: 'Vea K\'am (Break the Clay Pot)',
    slug: 'vea-kam',
    category: 'community',
    categoryKh: 'ល្បែងប្រជាប្រិយ',
    categoryEn: 'Popular Community Game',
    featured: false,
    image: '/illustrations/vea-kam.png',
    festivals: ['khmer-new-year', 'other-occasions'],
    descriptionKh: 'ល្បែងកំសាន្តដ៏រីករាយ ដោយតម្រូវឱ្យអ្នកលេងចងភ្នែក រួចកាន់ដំបងឈើដើរតម្រង់ទៅវាយក្អមដីដែលព្យួរខ្ពស់ តាមការស្រែកប្រាប់ទិសពីអ្នកទស្សនា។',
    descriptionEn: 'A fun game where a blindfolded player holds a wooden stick, guided only by the crowd shouts, to locate and break a suspended clay pot.',
    aboutKh: 'វាយក្អម ជាល្បែងប្រជាប្រិយខ្មែរដែលបង្កើតស្នាមញញឹម និងសំឡេងសើចសប្បាយយ៉ាងខ្លាំងក្នុងពិធីបុណ្យចូលឆ្នាំ។ ក្អមដីរដិបរដុបត្រូវគេព្យួរលើខ្សែរ៉ត ឬមែកឈើ ដោយមានដាក់ម្សៅ ឬរង្វាន់តូចៗខាងក្នុង។ អ្នកលេងត្រូវរុំភ្នែកជិត រួចបង្វិលខ្លួន ២-៣ ជុំ មុននឹងដើរទៅរកក្អម។',
    aboutEn: 'Vea K\'am is a hilarious festival game. Clay pots filled with flour or small treats are hung high. Blindfolded players are spun around and must rely on intuition and crowd guidance to swing and hit the pot.',

    players: 'លេងម្តងម្នាក់ (ច្រើននាក់ចូលរួមប្រកួត)',
    playersEn: 'Individual players taking turns',
    equipment: ['ក្អមដីឥដ្ឋព្យួរ (Clay Pot)', 'ដំបងឈើ (Wooden Stick)', 'ក្រមារុំភ្នែក (Blindfold Scarf)'],
    equipmentEn: ['Hanging clay pot', 'Wooden stick', 'Blindfold scarf'],
    duration: '២០ - ៤០ នាទី',
    durationEn: '20 - 40 minutes',
    contextKh: 'វត្តអារាម និងទីលានបុណ្យភូមិ',
    contextEn: 'Pagoda grounds and open community event areas',
    regionalNoteKh: 'នៅតាមតំបន់ខ្លះ គេប្រើប៉េងប៉ោងទឹក ឬក្អមដីដាក់ម្សៅសដើម្បីបន្ថែមភាពសប្បាយរីករាយ។',
    regionalNoteEn: 'Some regions use water balloons or white flour inside the pot for hilarious visual effects.',

    rulesKh: [
      'ព្យួរក្អមដីឥដ្ឋនៅកម្ពស់ល្មមដែលដំបងឈើអាចវាយដល់។',
      'យកកន្សែង ឬក្រមារុំភ្នែកអ្នកលេងឱ្យជិត មិនឱ្យមើលឃើញ។',
      'បង្វិលខ្លួនអ្នកលេង ១ ទៅ ៣ ជុំ ដើម្បីឱ្យវង្វេងទិសដៅ។',
      'ផ្តល់ដំបងឈើឱ្យអ្នកលេងដើរតម្រង់ទៅវាយក្អម ក្នុងអំឡុងពេលកំណត់។',
      'អ្នកដែលវាយត្រូវក្អមបែក នឹងទទួលបានរង្វាន់ ឬការទះដៃអបអរសាទរ។'
    ],
    rulesEn: [
      'Hang the clay pot at an accessible height.',
      'Blindfold the player completely with a scarf.',
      'Spin the player around 2 or 3 times to confuse their direction.',
      'Give them a wooden stick and let them walk towards the pot using crowd prompts.',
      'The player who strikes and shatters the pot wins the prize.'
    ],

    howToPlay: [
      {
        step: 1,
        titleKh: 'ព្យួរក្អម និងរៀបចំឧបករណ៍',
        titleEn: 'Hang the Pot',
        descriptionKh: 'ព្យួរក្អមដីឥដ្ឋខ្ពស់ផុតក្បាលបន្តិចនៅលើខ្សែនីឡុង ឬមែកឈើ។',
        descriptionEn: 'Suspend the clay pot securely on a tree branch or crossrope.',
        iconName: 'Package',
        highlightCoordinates: { x: 50, y: 20, label: 'ក្អមដីព្យួរ' }
      },
      {
        step: 2,
        titleKh: 'រុំភ្នែក និងបង្វិលទិស',
        titleEn: 'Blindfold & Spin',
        descriptionKh: 'យកក្រមារុំភ្នែកអ្នកលេងឱ្យជិត រួចបង្វិលខ្លួន ២ ជុំយ៉ាងថ្នមៗ។',
        descriptionEn: 'Blindfold the player and spin them around gently to disorient them.',
        iconName: 'EyeOff',
        highlightCoordinates: { x: 30, y: 50, label: 'អ្នកលេងរុំភ្នែក' }
      },
      {
        step: 3,
        titleKh: 'ដើរ និងវាយតាមការស្រែកប្រាប់',
        titleEn: 'Walk & Swing',
        descriptionKh: 'អ្នកលេងកាន់ដំបងដើរស្ទាបស្ទង់ ខណៈអ្នកទស្សនាស្រែកប្រាប់ទិស "ឆ្វេង! ស្តាំ! ឡើងលើ!"។',
        descriptionEn: 'The player steps forward and swings as spectators shout directions.',
        iconName: 'Navigation',
        highlightCoordinates: { x: 60, y: 60, label: 'ការវាយដំបង' }
      },
      {
        step: 4,
        titleKh: 'ក្អមបែក និងទទួលបានរង្វាន់',
        titleEn: 'Break Pot & Claim Prize',
        descriptionKh: 'ក្អមបែកធ្លាក់ម្សៅស ឬរង្វាន់មកដី បង្កើតសំឡេងសើចសប្បាយជុំវិញទីលាន។',
        descriptionEn: 'The pot breaks open with flour or treats raining down amidst cheerful laughter.',
        iconName: 'Gift',
        highlightCoordinates: { x: 50, y: 30, label: 'ក្អមបែកធ្លាក់' }
      }
    ],

    culturalMeaningKh: 'វាយក្អម បង្រៀនយើងឱ្យស្គាល់ពីការជឿជាក់លើការណែនាំពីសហគមន៍ ការសើចសប្បាយរួមគ្នា និងការបន្ធូរបន្ថយភាពតានតឹងក្នុងជីវិតប្រចាំថ្ងៃ។',
    culturalMeaningEn: 'Vea K\'am teaches trust in community guidance, joyful shared laughter, and stress-free communal celebration.'
  },
  {
    id: 'boat-racing',
    nameKh: 'ប្រណាំងទូក',
    nameEn: 'Khmer Boat Racing',
    slug: 'boat-racing',
    category: 'sport',
    categoryKh: 'កីឡាប្រពៃណី',
    categoryEn: 'Traditional Sport',
    featured: false,
    image: '/illustrations/boat-racing.png',
    festivals: ['bon-om-touk'],
    descriptionKh: 'កីឡាប្រណាំងទូកងប្រពៃណីដ៏អស្ចារ្យតាមដងទន្លេសាប និងទន្លេមេគង្គ ក្នុងព្រះរាជពិធីបុណ្យអុំទូក ដើម្បីបង្ហាញកម្លាំង សាមគ្គីភាព និងកេរដំណែលទ័ពជើងទឹកខ្មែរ។',
    descriptionEn: 'The majestic traditional longboat racing on the Tonle Sap river during Bon Om Touk, showcasing rowing prowess, harmony, and naval traditions.',
    aboutKh: 'ប្រណាំងទូក ជាព្រះរាជពិធីប្រពៃណីជាតិដ៏ធំ និងជាមោទនភាពវប្បធម៌ខ្មែរតាំងពីបុរាណកាល។ ទូកងនីមួយៗកិតធ្វើពីដើមឈើទោលវែង មានចម្លាក់ក្បាលនាគ ឬហង្សយ៉ាងល្អប្រណិត ហើយត្រូវបានច្រវ៉ាក់ច្រវ៉ាក់ដោយកីឡាករទូកងរាប់សិបនាក់ដោយចង្វាក់ស្មើគ្នា។',
    aboutEn: 'Khmer Boat Racing is a grand national tradition dating back to ancient Khmer naval strength. Intricately carved longboats with dragon or swan heads are paddled by dozens of rowers in precise rhythmic unison.',

    players: 'ទូកនីមួយៗមានកីឡាករ ២២ - ៧៧ នាក់',
    playersEn: '22 to 77 paddlers per boat',
    equipment: ['ទូកងប្រពៃណី (Long Racing Boat)', 'ច្រវ៉ាក់ឈើ (Wooden Paddles)', 'ស្គរវាយចង្វាក់ (Rhythm Drum)'],
    equipmentEn: ['Traditional longboat', 'Wooden paddles', 'Cadence drum'],
    duration: 'ពេញមួយថ្ងៃ (តាមជុំប្រកួត)',
    durationEn: 'Full day tournament heats',
    contextKh: 'ដងទន្លេសាប ទន្លេមេគង្គ និងទន្លេតាមខេត្តនានា',
    contextEn: 'Tonle Sap river, Mekong riverfronts, and provincial waterways',
    regionalNoteKh: 'តាមខេត្តនានា មានការអុំទូកង ទូកមុំ ឬទូកខ្នាតតូចតាមសហគមន៍ផ្ទាល់ខ្លួន។',
    regionalNoteEn: 'Different provinces feature local boat formats alongside the national capital regatta.',

    rulesKh: [
      'ទូកងប្រកួតជាគូតាមខ្សែទឹក (ខ្សែទឹកខាងក្នុង និងខ្សែទឹកខាងក្រៅ)។',
      'អ្នកទះក្បាលទូក និងអ្នកវាយស្គរ ផ្តល់ចង្វាក់ឱ្យកីឡាករច្រវ៉ាក់ស្មើគ្នា។',
      'ទូកណាដែលអុំដល់ទីព្រ័ត្រមុន នឹងទទួលបានជ័យជំនះឡើងទៅវគ្គបន្ត។'
    ],
    rulesEn: [
      'Boats race in pairs along designated river lanes.',
      'The bow dancer and drum beater maintain synchronized rowing cadence.',
      'The boat crossing the finish line banner first wins the heat.'
    ],

    howToPlay: [
      {
        step: 1,
        titleKh: 'រៀបចំទូកង និងកីឡាករ',
        titleEn: 'Prepare Longboat & Crew',
        descriptionKh: 'កីឡាករទូកងពាក់ឯកសណ្ឋាន ឡើងកាន់ទីតាំងច្រវ៉ាក់តាមលំដាប់លើទូកង។',
        descriptionEn: 'Rowers board the longboat in uniformed order, grabbing their paddles.',
        iconName: 'Compass',
        highlightCoordinates: { x: 50, y: 70, label: 'ជួរកីឡាករទូកង' }
      },
      {
        step: 2,
        titleKh: 'តម្រៀបនៅខ្សែចាប់ផ្តើម',
        titleEn: 'Align at Starting Line',
        descriptionKh: 'ទូកងប្រកួតតម្រៀបស្មើគ្នានៅចំណុចចាប់ផ្តើមលើផ្ទៃទឹកទន្លេ។',
        descriptionEn: 'Boats align evenly at the river starting buoy line.',
        iconName: 'Flag',
        highlightCoordinates: { x: 20, y: 50, label: 'ខ្សែចាប់ផ្តើម' }
      },
      {
        step: 3,
        titleKh: 'អុំស្ទុះល្បឿនតាមចង្វាក់ស្គរ',
        titleEn: 'Row in Rhythmic Unison',
        descriptionKh: 'ស្នូរស្គរបន្លឺឡើង កីឡាករទាំងអស់រញីច្រវ៉ាក់ស្របគ្នាយ៉ាងលឿនស្លេវលើផ្ទៃទឹក។',
        descriptionEn: 'At the drum signal, rowers strike the water with explosive synchronized power.',
        iconName: 'Activity',
        highlightCoordinates: { x: 60, y: 60, label: 'ចង្វាក់ច្រវ៉ាក់' }
      },
      {
        step: 4,
        titleKh: 'កាត់ខ្សែព្រ័ត្រទីតាំងទី',
        titleEn: 'Cross the Finish Line',
        descriptionKh: 'ទូកងស្ទុះកាត់ខ្សែព្រ័ត្រក្រោមសំឡេងទះដៃ និងស្រែកហ៊ោពីប្រជាពលរដ្ឋរាប់ម៉ឺននាក់តាមដងទន្លេ។',
        descriptionEn: 'The longboat crosses the finish marker under thunderous applause along the riverbank.',
        iconName: 'CheckCircle',
        highlightCoordinates: { x: 85, y: 40, label: 'ខ្សែទីព្រ័ត្រ' }
      }
    ],

    culturalMeaningKh: 'ប្រណាំងទូក បង្ហាញពីវីរភាព កម្លាំងសាមគ្គីភាពជាតិ ការដឹងគុណចំពោះប្រភពទឹក និងការរំលឹកដល់កងទ័ពជើងទឹកខ្មែរដ៏ខ្លាំងក្លាក្នុងប្រវត្តិសាស្ត្រ។',
    culturalMeaningEn: 'Khmer Boat Racing embodies national pride, naval heroics, gratitude for water resources, and supreme collective power.'
  },
  {
    id: 'chhoung',
    nameKh: 'ចោលឈូង',
    nameEn: 'Chol Chhoung (Throwing the Chhoung)',
    slug: 'chhoung',
    category: 'festival',
    categoryKh: 'ល្បែងពិធីបុណ្យ',
    categoryEn: 'Festival Game',
    featured: false,
    image: '/illustrations/chhoung.png',
    festivals: ['khmer-new-year', 'pchum-ben'],
    descriptionKh: 'ល្បែងប្រជាប្រិយខ្មែររវាងក្រុមបុរស និងក្រុមស្រ្តី ដោយបោះបាល់ក្រមារមួល (ឈូង) ឆ្លងឆ្លើយគ្នា អមដោយការច្រៀងរាំវង់ និងការផាកពិន័យច្រៀងចម្រៀងបុរាណ។',
    descriptionEn: 'A traditional matchmaking and social game played between groups of young men and women tossing a rolled krama scarf ball accompanied by folk singing.',
    aboutKh: 'ចោលឈូង ជាល្បែងកំសាន្តប្រជាប្រិយខ្មែរដ៏ទន់ភ្លន់ និងមានប្រជាប្រិយភាពខ្លាំង។ គេយកក្រមាមកមួលរុំជាបាល់មានកន្ទុយ (ហៅថា ឈូង) រួចឈរជាពីរជួរ (ខាងប្រុស និងខាងស្រី) ដើម្បីបោះ និងរង់ចាំចាប់។ បើក្រុមណា ចាប់ឈូងមិនបាន ឬបោះខុស នឹងត្រូវផាកឱ្យច្រៀងរាំបង្ហាញសមត្ថភាព។',
    aboutEn: 'Chol Chhoung is an elegant Cambodian courtship and festival game. A scarf folded into a winged ball (Chhoung) is thrown back and forth between lines of men and women. Missing a catch results in friendly singing or dancing penalties.',

    players: '២ ក្រុម (ក្រុមប្រុស និងក្រុមស្រី)',
    playersEn: '2 Teams (Men vs Women)',
    equipment: ['ឈូងធ្វើពីក្រមា (Rolled Krama Scarf Ball)'],
    equipmentEn: ['Chhoung scarf ball'],
    duration: '៣០ - ៤៥ នាទី',
    durationEn: '30 - 45 minutes',
    contextKh: 'ទីលានវត្តអារាម និងពិធីចូលឆ្នាំខ្មែរ',
    contextEn: 'Pagoda courtyards during Khmer New Year',
    regionalNoteKh: 'ពាក្យច្រៀងច្រៀងច្រៀងឆ្លើយឆ្លងក្នុងល្បែងឈូង មានបទ និងទំនុកខុសៗគ្នាតាមខេត្ត។',
    regionalNoteEn: 'Lyrics sung during penalty rounds vary according to regional folk dialects and songs.',

    rulesKh: [
      'ចែកជាពីរជួរ៖ ជួរប្រុស និងជួរស្រី ចម្ងាយប្រហែល ៨ ទៅ ១០ ម៉ែត្រពីគ្នា។',
      'ខាងស្រីជាអ្នកចាប់ផ្តើមបោះឈូងឡើងលើទៅខាងប្រុស។',
      'ខាងប្រុសត្រូវរង់ចាំចាប់ឈូង ៖ បើចាប់បាន ត្រូវបោះសំដៅទៅគប់ខាងស្រីម្នាក់។',
      'បើគប់ត្រូវ អ្នកនោះត្រូវមកច្រៀងរាំជូនក្រុមម្ខាងទៀតទស្សនា។'
    ],
    rulesEn: [
      'Stand in two facing rows (men and women) about 8 to 10 meters apart.',
      'The women team usually throws the Chhoung upward toward the men.',
      'If the men catch it, they toss it target-wise to tag a female player.',
      'If tagged, the player must sing a traditional song or dance for the group.'
    ],

    howToPlay: [
      {
        step: 1,
        titleKh: 'រៀបចំជួរ និងបាល់ឈូង',
        titleEn: 'Form Rows & Prepare Chhoung',
        descriptionKh: 'ក្រុមប្រុស និងក្រុមស្រីឈរទល់មុខគ្នា យកក្រមាធ្វើបាល់ឈូងមានកន្ទុយ។',
        descriptionEn: 'Form facing lines of men and women, holding the custom krama scarf ball.',
        iconName: 'Maximize2',
        highlightCoordinates: { x: 30, y: 50, label: 'ជួរប្រុស និងស្រី' }
      },
      {
        step: 2,
        titleKh: 'បោះឈូងឡើងលើ',
        titleEn: 'Toss Chhoung High',
        descriptionKh: 'ខាងស្រីបោះឈូងឡើងលើទៅលើអាកាស តម្រង់ទៅខាងប្រុស។',
        descriptionEn: 'Women toss the Chhoung high into the air towards the men.',
        iconName: 'ArrowUpRight',
        highlightCoordinates: { x: 50, y: 30, label: 'ការបោះឈូងឡើងលើ' }
      },
      {
        step: 3,
        titleKh: 'ចាប់ឈូង និងគប់តម្រង់',
        titleEn: 'Catch & Tag Target',
        descriptionKh: 'អ្នកចាប់បាន ត្រូវបោះគប់តម្រង់ទៅក្រុមម្ខាងទៀតដោយភាពស្ទាត់ជំនាញ។',
        descriptionEn: 'The catcher quickly tosses it back to tag an opposing player.',
        iconName: 'Target',
        highlightCoordinates: { x: 70, y: 50, label: 'ការគប់តម្រង់' }
      },
      {
        step: 4,
        titleKh: 'ច្រៀងរាំផាកពិន័យ',
        titleEn: 'Perform Friendly Penalty Song',
        descriptionKh: 'អ្នកត្រូវគប់ ត្រូវចេញមកច្រៀង និងរាំវង់យ៉ាងសប្បាយរីករាយជុំវិញមិត្តភក្តិ។',
        descriptionEn: 'Tagged players come out to sing traditional folk refrains and dance.',
        iconName: 'Music',
        highlightCoordinates: { x: 50, y: 70, label: 'ការច្រៀងរាំវង់' }
      }
    ],

    culturalMeaningKh: 'ចោលឈូង ជាមធ្យោបាយវប្បធម៌ដ៏ទន់ភ្លន់ក្នុងការរាប់អានគ្នា បង្កើតមិត្តភាព និងរក្សាចម្រៀងប្រជាប្រិយខ្មែរឱ្យគង់វង្ស។',
    culturalMeaningEn: 'Chol Chhoung serves as a gentle cultural bridge promoting friendship, youth social connection, and traditional folk music preservation.'
  },
  {
    id: 'leak-kanseng',
    nameKh: 'លាក់កន្សែង',
    nameEn: 'Leak Kanseng (Hiding the Scarf)',
    slug: 'leak-kanseng',
    category: 'community',
    categoryKh: 'ល្បែងប្រជាប្រិយ',
    categoryEn: 'Popular Community Game',
    featured: false,
    image: '/illustrations/leak-kanseng.png',
    festivals: ['khmer-new-year', 'other-occasions'],
    descriptionKh: 'ល្បែងប្រជាប្រិយរបស់កុមារ និងយុវជន ដោយអង្គុយជាវង់មូល ហើយមានអ្នករត់លាក់កន្សែងពីក្រោយខ្នង អមដោយចម្រៀង "លាក់កន្សែង ឆ្មាខាំកែង..."។',
    descriptionEn: 'A classic game where players sit in a circle while one runs around hiding a krama scarf behind someone to the cadence of a famous children rhythm.',
    aboutKh: 'លាក់កន្សែង ជាល្បែងប្រជាប្រិយខ្មែរដ៏ពេញនិយមបំផុតសម្រាប់កុមារ និងយុវវ័យ។ អ្នកលេងទាំងអស់អង្គុយជាវង់មូលធំ បែរមុខចូលក្នុង។ អ្នកលាក់កន្សែងម្នាក់ កាន់កន្សែងរត់ជុំវិញរង្វង់ ដើរចម្រៀងរអ៊ូ "លាក់កន្សែង ឆ្មាខាំកែង អូសកន្ទុយខ្វែង ឆ្មាខាំខ្នង..." រួចលួចទម្លាក់កន្សែងពីក្រោយខ្នងអ្នកណាម្នាក់។',
    aboutEn: 'Leak Kanseng is an enduring traditional circle game. Players sit facing inward while a runner stealthily places a folded krama scarf behind a seated player while singing the iconic folk rhyme.',

    players: 'ចាប់ពី ៦ នាក់ឡើងទៅ',
    playersEn: '6 or more players',
    equipment: ['កន្សែង ឬក្រមាមួល (Folded Krama Scarf)'],
    equipmentEn: ['Folded Krama scarf'],
    duration: '១៥ - ៣០ នាទី',
    durationEn: '15 - 30 minutes',
    contextKh: 'ទីលានភូមិ សាលារៀន និងវត្តអារាម',
    contextEn: 'School yards, village squares, and pagoda greens',
    regionalNoteKh: 'ទំនុកច្រៀងលាក់កន្សែងអាចមានពាក្យចួនខុសគ្នាបន្តិចបន្តួចតាមភូមិភាគ។',
    regionalNoteEn: 'Rhyme variations exist slightly depending on local dialect traditions.',

    rulesKh: [
      'អ្នកលេងទាំងអស់អង្គុយជាវង់មូល បែរមុខចូលក្នុង និងហាមងាកមើលក្រោយខ្នង។',
      'អ្នកកាន់កន្សែងដើរ/រត់ជុំវិញរង្វង់ ហើយច្រៀងចម្រៀងលាក់កន្សែង។',
      'ទម្លាក់កន្សែងថ្នមៗពីក្រោយខ្នងអ្នកណាម្នាក់ រួចរត់បន្ត។',
      'បើអ្នកត្រូវបានគេលាក់កន្សែងដឹងខ្លួន ត្រូវរើសកន្សែងដេញវាយអ្នកលាក់ រហូតអ្នកលាក់រត់ទៅអង្គុយជំនួសកន្លែងទំនេរ។'
    ],
    rulesEn: [
      'All players sit in a circle facing inward without looking behind them.',
      'The scarf holder walks around the outside singing the traditional song.',
      'Secretly drop the scarf behind one seated player.',
      'If the seated player notices, they grab the scarf and chase the runner around the circle to tag them before they reach the vacant spot.'
    ],

    howToPlay: [
      {
        step: 1,
        titleKh: 'អង្គុយជាវង់មូល',
        titleEn: 'Sit in a Circle',
        descriptionKh: 'អ្នកលេងទាំងអស់អង្គុយលើស្មៅ ឬកម្រាលជាវង់មូល បែរមុខចូលក្នុង។',
        descriptionEn: 'Players sit on the ground facing inward in a spacious circle.',
        iconName: 'Disc',
        highlightCoordinates: { x: 50, y: 60, label: 'វង់មូលអ្នកលេង' }
      },
      {
        step: 2,
        titleKh: 'រត់ច្រៀង និងលាក់កន្សែង',
        titleEn: 'Run & Sing Rhyme',
        descriptionKh: 'អ្នកកាន់កន្សែងដើរជុំវិញរង្វង់ ច្រៀង "លាក់កន្សែង ឆ្មាខាំកែង..." រួចទម្លាក់កន្សែង។',
        descriptionEn: 'The runner circles around singing the rhyme and secretly drops the scarf.',
        iconName: 'RotateCw',
        highlightCoordinates: { x: 70, y: 40, label: 'អ្នករត់លាក់កន្សែង' }
      },
      {
        step: 3,
        titleKh: 'ស្ទាប និងដេញតាម',
        titleEn: 'Notice & Chase',
        descriptionKh: 'អ្នកអង្គុយស្ទាបឃើញកន្សែង ស្ទុះរើសកន្សែងដេញតាមអ្នកលាក់ជុំវិញវង់។',
        descriptionEn: 'The seated player feels the scarf, picks it up, and chases the runner.',
        iconName: 'Zap',
        highlightCoordinates: { x: 40, y: 40, label: 'ការដេញតាម' }
      },
      {
        step: 4,
        titleKh: 'អង្គុយជំនួសកន្លែង',
        titleEn: 'Take Vacant Seat',
        descriptionKh: 'អ្នកលាក់រត់មកអង្គុយប្រកដកន្លែងទំនេរបានសម្រេច រួចអ្នកដេញក្លាយជាអ្នកលាក់ជុំបន្ទាប់។',
        descriptionEn: 'The runner safely sits in the empty spot, making the chaser the next scarf holder.',
        iconName: 'UserCheck',
        highlightCoordinates: { x: 50, y: 70, label: 'កន្លែងអង្គុយទំនេរ' }
      }
    ],

    culturalMeaningKh: 'លាក់កន្សែង បណ្ដុះស្មារតីប្រុងប្រយ័ត្ន ភាពរហ័សរហួន និងការចងចាំចម្រៀងកុមារខ្មែរតាំងពីវ័យក្មេង។',
    culturalMeaningEn: 'Leak Kanseng fosters alertness, quick reflexes, and early childhood appreciation for folk rhymes.'
  },
  {
    id: 'bay-khmoche',
    nameKh: 'បាយខុម',
    nameEn: 'Bay Khmoche (Bay Khom Pit Strategy Game)',
    slug: 'bay-khmoche',
    category: 'board',
    categoryKh: 'ល្បែងគំនិត & ប៉ិនប្រសប់',
    categoryEn: 'Mind & Strategy Game',
    featured: false,
    image: '/illustrations/chhoung.png',
    festivals: ['pchum-ben', 'other-occasions'],
    descriptionKh: 'ល្បែងគំនិតយុទ្ធសាស្ត្រខ្មែរបុរាណ លេងដោយមនុស្ស ២ នាក់ លើក្តារឈើមានរន្ធ (ឬកាយរន្ធលើដី) និងប្រើគ្រាប់ខ្យង ឬគ្រាប់គ្រួសដើម្បីចែករត់តាមរន្ធ។',
    descriptionEn: 'An ancient Cambodian pit-and-pebble mancala-style board game played between two players testing calculation, foresight, and patience.',
    aboutKh: 'បាយខុម (ឬ បាយខម) ជាល្បែងប្រជាប្រិយខ្មែរផ្នែកគំនិត និងការគិតលេខយ៉ាងប្រកៀកប្រកិត។ គេរៀបចំបាយខុមនៅលើក្តារឈើមានរន្ធប្រឡោះចំនួន ១០ (រន្ធតូច) និងរន្ធក្បាល ២ (រន្ធធំ) រួចដាក់គ្រាប់ខ្យង ឬគ្រាប់សួសដើម្បីដើរប្រមូលគ្រាប់ស៊ី។',
    aboutEn: 'Bay Khmoche (Bay Khom) is a traditional Cambodian counting board game similar to Mancala. Players strategically distribute pebbles across rows of wooden pits to capture the maximum number of seeds from the opponent.',

    players: '២ នាក់',
    playersEn: '2 Players',
    equipment: ['ក្តារបាយខុម ឬរន្ធដី (Bay Khom Pit Board)', 'គ្រាប់ខ្យង/គ្រាប់គ្រួស ៤២ គ្រាប់ (Pebbles or Shells)'],
    equipmentEn: ['Bay Khom wooden board with pits', '42 Pebbles or Cowrie shells'],
    duration: '២០ - ៤០ នាទី',
    durationEn: '20 - 40 minutes',
    contextKh: 'គ្រែផ្ទះឈើ ក្រោមដើមឈើត្រជាក់ និងការជួបជុំសហគមន៍',
    contextEn: 'Village house verandas and shady communal spaces',
    regionalNoteKh: 'ចំនួនគ្រាប់ និងឈ្មោះហៅរន្ធមេអាចខុសគ្នាតាមតំបន់។',
    regionalNoteEn: 'Pit distribution rules and pit names vary slightly by local elders.',

    rulesKh: [
      'ដាក់គ្រាប់ខ្យង ឬគ្រាប់គ្រួស ៥ គ្រាប់ ក្នុងរន្ធតូចនីមួយៗ។',
      'អ្នកលេងផ្លាស់វេនគ្នាចាប់គ្រាប់ក្នុងរន្ធមួយ ហើយដើរបន្តទម្លាក់តាមរន្ធនីមួយៗរហូតអស់គ្រាប់។',
      'បើទម្លាក់គ្រាប់ចុងក្រោយចំរន្ធមានគ្រាប់ ត្រូវចាប់គ្រាប់ក្នុងរន្ធនោះដើរបន្ត។',
      'បើទម្លាក់ចំរន្ធទទេ រួចប្រឡោះបន្តបន្ទាប់មានគ្រាប់ ត្រូវ "ស៊ី" ប្រមូលគ្រាប់ក្នុងរន្ធនោះមកទុកជាពិន្ទុខ្លួន។'
    ],
    rulesEn: [
      'Place 5 pebbles inside each small pit on the board.',
      'Players take turns picking up seeds from a pit and sowing them one by one into adjacent pits.',
      'If the last seed falls in a pit with seeds, pick them all up and continue sowing.',
      'If the last seed falls in an empty pit and the next pit has seeds, capture all seeds in that pit as score.'
    ],

    howToPlay: [
      {
        step: 1,
        titleKh: 'រៀបចំគ្រាប់ក្នុងរន្ធ',
        titleEn: 'Fill Pits with Pebbles',
        descriptionKh: 'រៀបចំគ្រាប់ខ្យង ៥ គ្រាប់ក្នុងរន្ធតូចនីមួយៗលើក្តារបាយខុម។',
        descriptionEn: 'Distribute 5 pebbles into each pit on the board.',
        iconName: 'Grid',
        highlightCoordinates: { x: 50, y: 50, label: 'ក្តារបាយខុម' }
      },
      {
        step: 2,
        titleKh: 'ចាប់គ្រាប់ដើរទម្លាក់',
        titleEn: 'Pick & Sow Pebbles',
        descriptionKh: 'ជ្រើសរើសរន្ធមួយ រួចចាប់គ្រាប់ដើរទម្លាក់តាមរន្ធនីមួយៗតាមទិសដៅ។',
        descriptionEn: 'Choose a pit, collect its pebbles, and sow them sequentially.',
        iconName: 'CornerRightDown',
        highlightCoordinates: { x: 30, y: 40, label: 'ការដើរទម្លាក់គ្រាប់' }
      },
      {
        step: 3,
        titleKh: 'ស៊ីគ្រាប់ប្រមូលពិន្ទុ',
        titleEn: 'Capture Opponent Seeds',
        descriptionKh: 'ពេលទម្លាក់ចំរន្ធទទេ ត្រូវស៊ីប្រមូលគ្រាប់ក្នុងរន្ធបន្តបន្ទាប់មកទុកជាពិន្ទុ។',
        descriptionEn: 'Land in an empty pit to capture seeds in the adjacent pit as points.',
        iconName: 'Layers',
        highlightCoordinates: { x: 70, y: 60, label: 'ការប្រមូលគ្រាប់ស៊ី' }
      },
      {
        step: 4,
        titleKh: 'រាប់គ្រាប់ឈ្នះចាញ់',
        titleEn: 'Count Final Score',
        descriptionKh: 'ពេលអស់គ្រាប់លើក្តារ រាប់គ្រាប់ដែលប្រមូលបាន អ្នកដែលមានគ្រាប់ច្រើនជាងគេ គឺជាអ្នកឈ្នះ។',
        descriptionEn: 'When no legal moves remain, the player with the most captured pebbles wins.',
        iconName: 'Award',
        highlightCoordinates: { x: 50, y: 70, label: 'រាប់គ្រាប់ឈ្នះ' }
      }
    ],

    culturalMeaningKh: 'បាយខុម បណ្តុះការគិតលឿន ការគណនាយុទ្ធសាស្ត្រ និងភាពអត់ធ្មត់តាមរបៀបវប្បធម៌ប្រពៃណីខ្មែរ។',
    culturalMeaningEn: 'Bay Khmoche cultivates strategic thinking, mental arithmetic, and patient foresight rooted in Khmer traditions.'
  }
];
