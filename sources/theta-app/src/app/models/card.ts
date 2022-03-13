import { Badge } from './badge';

export interface Card {
  id: string;
  title: string;
  subTitle?: string;
  text?: string;
  imageUrls?: string[];
  badges?: Badge[];
}
