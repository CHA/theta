import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ActivityDto } from './activity.dto';
import * as moment from 'moment';

export class ItineraryDto {
  constructor(name: string) {
    this.name = name;
    this.createdDate = moment().utc().toDate();
  }

  @ApiProperty()
  name: string;

  @ApiPropertyOptional()
  score: number;

  @ApiProperty({ type: [ActivityDto] })
  activities: ActivityDto[];

  @ApiPropertyOptional()
  createdBy: string;

  @ApiPropertyOptional()
  createdDate: Date;

  @ApiPropertyOptional()
  lastModifiedBy: string;

  @ApiPropertyOptional()
  lastModifiedDate: Date;
}
