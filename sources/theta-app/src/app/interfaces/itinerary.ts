import { Pace } from '@theta/enums/pace';
import { City } from './location';
import { Price } from './price';

export interface Itinerary {
    id: number;
    title: string;
    subTitle: string;
    price: Price;
    description: string;
    createdBy: string;
    createdDate: Date;
    lastUpdatedDate: Date;
    tags: string[];
    pace: Pace;
    city: City;
    userId: string;
    imageURLs: string[];
}
