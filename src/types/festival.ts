export interface Festival {
  id: string;
  nameKh: string;
  nameEn: string;
  slug: string;
  icon: string;
  monthKh: string;
  monthEn: string;
  descriptionKh: string;
  descriptionEn?: string;
  image: string;
  gameIds: string[];
  bannerBg: string;
}
