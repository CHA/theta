import { Field, ObjectType } from '@nestjs/graphql';
import { Place } from '@theta/entities/places/models/place.model';
import { BaseModel } from '@theta/entities/shared/models/base.input';

@ObjectType({ description: 'Activity model' })
export class Activity extends BaseModel {
  @Field()
  name: string;

  @Field({ nullable: true })
  startTime: Date;

  @Field({ nullable: true })
  endTime: Date;

  @Field((type) => Place)
  place: Place;

  @Field((type) => [String], { nullable: true })
  imageUrls: string[];
}
