import { Badge } from './badge';

export interface Card {
  title: string;
  subTitle?: string;
  text?: string;
  imageUrls?: string[];
  badges?: Badge[];
}
