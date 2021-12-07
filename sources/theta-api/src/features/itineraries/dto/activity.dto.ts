import { ApiProperty } from '@nestjs/swagger';

export class ActivityDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  startTime: Date;

  @ApiProperty()
  endTime: Date;
}
