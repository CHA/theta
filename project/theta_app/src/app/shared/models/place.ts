import { BaseModel } from './base-model';

export interface Place extends BaseModel {
    id: number;
    name: string;
    tags: string;
    description: string;
}
