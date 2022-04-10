import { Pace } from '@theta/enums/pace';
import { Activity } from './activity';
import { BaseModel } from './base-model';
import { City } from './city';
import { Price } from './price';

export interface Itinerary extends BaseModel {
    name: string;
    score: string;
    activities: Activity[];
    city: City;
    estimatedBudget: Price;
    description: string;
    tags: string[];
    pace: Pace;
    userId: string;
    imageUrls: string[];
}
