import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Itinerary } from 'src/features/itineraries/models/itinerary.model';

@ObjectType({ description: 'User model' })
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  firstName: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field()
  email: string;

  @Field((type) => [Itinerary], { nullable: true })
  itineraries: Itinerary[];
}
