export interface GameCategory {
  id: string;
  nameKh: string;
  nameEn: string;
  icon: string;
  descriptionKh: string;
}

export const GAME_CATEGORIES: GameCategory[] = [
  {
    id: 'all',
    nameKh: 'ល្បែងទាំងអស់',
    nameEn: 'All Games',
    icon: '🎮',
    descriptionKh: 'បង្ហាញល្បែងប្រពៃណីខ្មែរទាំងអស់ក្នុងបណ្តុំ'
  },
  {
    id: 'community',
    nameKh: 'ល្បែងប្រជាប្រិយ',
    nameEn: 'Popular Community Games',
    icon: '👥',
    descriptionKh: 'ល្បែងដែលលេងជាក្រុមក្នុងវត្តអារាម និងភូមិឋាន'
  },
  {
    id: 'festival',
    nameKh: 'ល្បែងពិធីបុណ្យ',
    nameEn: 'Festival Games',
    icon: '🌸',
    descriptionKh: 'ល្បែងពិសេសដែលលេងក្នុងឱកាសពិធីបុណ្យចូលឆ្នាំខ្មែរ'
  },
  {
    id: 'sport',
    nameKh: 'កីឡាប្រពៃណី',
    nameEn: 'Traditional Sports',
    icon: '🚣',
    descriptionKh: 'ល្បែង និងកីឡាប្រកួតប្រជែងកម្លាំង និងភាពស្ទាត់ជំនាញ'
  },
  {
    id: 'board',
    nameKh: 'ល្បែងគំនិត & ប៉ិនប្រសប់',
    nameEn: 'Mind & Strategy Games',
    icon: '♟️',
    descriptionKh: 'ល្បែងប្រើប្រាជ្ញា គំនិត និងការគិតយុទ្ធសាស្ត្រ'
  }
];
