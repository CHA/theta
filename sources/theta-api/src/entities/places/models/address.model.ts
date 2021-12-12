import { Field, ObjectType } from '@nestjs/graphql';
import { City } from './city.model';

@ObjectType()
export class Address {
  @Field()
  address: string;

  @Field((type) => String, { nullable: true })
  postCode: string;

  @Field((type) => City, { nullable: false })
  city: City;
}
