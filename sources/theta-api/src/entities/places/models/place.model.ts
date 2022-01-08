import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '@theta/entities/shared/models/base.model';
import { City } from './city.model';

@ObjectType()
export class Place extends BaseModel {
  @Field()
  name: string;

  @Field(() => String, { nullable: true })
  address: string;

  @Field(() => String, { nullable: true })
  postCode: string;

  @Field(() => City)
  city: City;

  @Field(() => [String], { nullable: true })
  tags: string[];
}
