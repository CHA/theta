import { BaseModel } from '../../../shared/models/base-model'
import { Place } from '../../../shared/models/place';
import { Image } from '../../../shared/models/image'

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
    images: Image[]
}