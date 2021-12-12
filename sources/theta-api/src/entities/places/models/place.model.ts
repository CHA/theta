import { Field, ObjectType } from '@nestjs/graphql';
import { City } from './city.model';

@ObjectType()
export class Place {
  @Field()
  name: string;

  @Field((type) => String, { nullable: true })
  address: string;

  @Field((type) => String, { nullable: true })
  postCode: string;

  @Field((type) => City)
  city: City;

  @Field((type) => [String], { nullable: true })
  tags: string[];
}
