import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Activity } from '@theta/entities/activities/models/activity.model';
import { BaseModel } from '@theta/entities/shared/models/base.input';

@ObjectType({ description: 'Itinerary model' })
export class Itinerary extends BaseModel {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => Int, { nullable: true })
  score: number;

  @Field((type) => [Activity])
  activities: Activity[];
}
