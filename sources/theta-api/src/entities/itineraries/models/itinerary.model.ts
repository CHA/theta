import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Activity } from '@theta/entities/activities/models/activity.model';
import { BaseModel } from '@theta/entities/shared/models/base.model';

@ObjectType({ description: 'Itinerary model' })
export class Itinerary extends BaseModel {
  @Field()
  name: string;

  @Field((type) => Int, { nullable: true })
  score: number;

  @Field((type) => [Activity])
  activities: Activity[];
}
