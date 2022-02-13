import { BaseModel } from './base-model';
import { City } from './city';

export interface Place extends BaseModel {
  name: string;
  address: string;
  postCode: string;
  city: City;
  tags: string[];
}
