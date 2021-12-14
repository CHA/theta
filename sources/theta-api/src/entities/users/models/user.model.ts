import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Itinerary } from '@theta/entities/itineraries/models/itinerary.model';
import { BaseModel } from '@theta/entities/shared/models/base.input';

@ObjectType({ description: 'User model' })
export class User extends BaseModel {
  @Field()
  uid: string;

  @Field()
  firstName: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  phoneNumber: string;

  @Field((type) => [Itinerary], { nullable: true })
  itineraries: Itinerary[];

  @Field((type) => [User], { nullable: true })
  followers: User[];

  password: string;
}
