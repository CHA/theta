import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { Activity } from '@theta/entities/activities/models/activity.model';

@ObjectType({ description: 'Itinerary model' })
export class Itinerary {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => Int, { nullable: true })
  score: number;

  @Field((type) => [Activity])
  activities: Activity[];

  @Field()
  createdBy: string;

  @Field((type) => GraphQLISODateTime)
  createdDate: Date;

  @Field((type) => String, { nullable: true })
  lastModifiedBy: string;

  @Field((type) => GraphQLISODateTime, { nullable: true })
  lastModifiedDate: Date;
}
