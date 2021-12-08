import { Field, GraphQLISODateTime, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/entities/users/models/user.model';
import { Activity } from './activity.model';

@ObjectType({ description: 'Itinerary model' })
export class Itinerary {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  title: number;

  @Field((type) => Int, { nullable: true })
  score: number;

  @Field((type) => [Activity])
  activities: Activity[];

  @Field((type) => User, { nullable: true })
  createdBy: User;

  @Field((type) => GraphQLISODateTime, { nullable: true })
  createdDate: Date;

  @Field((type) => String, { nullable: true })
  lastModifiedBy: string;

  @Field((type) => GraphQLISODateTime, { nullable: true })
  lastModifiedDate: Date;
}
