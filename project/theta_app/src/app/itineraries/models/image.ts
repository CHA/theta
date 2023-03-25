import { BaseModel } from '../../models/base-model';

export interface Image extends BaseModel {
  id: number;
  description: string;
  url: string;
  tags: string;
}
