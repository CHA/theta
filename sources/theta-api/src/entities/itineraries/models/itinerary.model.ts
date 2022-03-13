import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Activity } from '@theta/entities/activities/models/activity.model';
import { City } from '@theta/entities/places/models/city.model';
import { BaseModel } from '@theta/entities/shared/models/base.model';
import { Price } from './price.model';

@ObjectType({ description: 'Itinerary model' })
export class Itinerary extends BaseModel {
  @Field()
  name: string;

  @Field(() => Int, { nullable: true })
  score: number;

  @Field(() => [Activity])
  activities: Activity[];

  @Field(() => [City])
  city: City;

  @Field(() => [Price], { nullable: true })
  estimatedBudget: Price;

  @Field(() => [String], { nullable: true })
  imageUrls: string[];

  @Field(() => [String], { nullable: true })
  description: string;
}
