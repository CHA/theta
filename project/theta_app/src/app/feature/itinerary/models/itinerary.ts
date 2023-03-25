import { BaseModel } from 'src/app/shared/models/base-model';
import { Activity } from './activity';

export interface Itinerary extends BaseModel {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    activities: Activity[];
}