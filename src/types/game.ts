export interface GameStep {
  step: number;
  titleKh: string;
  titleEn?: string;
  descriptionKh: string;
  descriptionEn?: string;
  iconName?: string;
  highlightCoordinates?: { x: number; y: number; label: string };
}

export interface TraditionalGame {
  id: string;
  nameKh: string;
  nameEn: string;
  slug: string;
  category: 'community' | 'festival' | 'sport' | 'board' | 'seasonal';
  categoryKh: string;
  categoryEn: string;
  descriptionKh: string;
  descriptionEn?: string;

  aboutKh: string;
  aboutEn?: string;

  festivals: string[]; // Festival IDs e.g. ['khmer-new-year', 'pchum-ben']

  players?: string;
  playersEn?: string;
  equipment?: string[];
  equipmentEn?: string[];
  duration?: string;
  durationEn?: string;
  contextKh?: string;
  contextEn?: string;
  rulesKh?: string[];
  rulesEn?: string[];

  howToPlay: GameStep[];

  culturalMeaningKh?: string;
  culturalMeaningEn?: string;

  image: string;
  featured?: boolean;
  regionalNoteKh?: string;
  regionalNoteEn?: string;
}

export type Language = 'kh' | 'en';
