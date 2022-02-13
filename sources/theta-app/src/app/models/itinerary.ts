import { Pace } from '@theta/enums/pace';
import { BaseModel } from './base-model';
import { City } from './city';
import { Price } from './price';

export interface Itinerary extends BaseModel {
    id: number;
    title: string;
    subTitle: string;
    city: City;
    estimatedBudget: Price;
    description: string;
    tags: string[];
    pace: Pace;
    userId: string;
    imageURLs: string[];
}
