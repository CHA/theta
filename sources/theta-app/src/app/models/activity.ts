import { BaseModel } from './base-model';
import { Place } from './place';

export interface Activity extends BaseModel {
  name: string;
  startTime: Date;
  endTime: Date;
  place: Place;
  imageUrls: string[];
}
