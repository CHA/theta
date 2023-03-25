import { BaseModel } from 'src/app/models/base-model';
import { Place } from './place';
import { Image } from '../../models/image';

export interface Activity extends BaseModel {
  id: number;
  activity: string;
  day: number;
  startTime: string;
  endTime: string;
  tags: string;
  price: number;
  description: string;
  sequence: number;
  place: Place;
  images: Image[];
}
