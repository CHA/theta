import { Field, ObjectType } from '@nestjs/graphql';
import { Itinerary } from '@theta/entities/itineraries/models/itinerary.model';
import { BaseModel } from '@theta/entities/shared/models/base.model';

@ObjectType({ description: 'User model' })
export class User extends BaseModel {
  @Field()
  firstName: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  phoneNumber: string;

  @Field(() => [Itinerary], { nullable: true })
  itineraries: Itinerary[];

  @Field(() => [User], { nullable: true })
  followers: User[];

  @Field(() => [String], { nullable: true })
  profilePhotoUrl: string;

  @Field(() => [String], { nullable: true })
  badge: string;

  password: string;
}
