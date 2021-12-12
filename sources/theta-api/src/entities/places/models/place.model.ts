import { Field, ObjectType } from '@nestjs/graphql';
import { Address } from './address.model';

@ObjectType()
export class Place {
  @Field()
  name: string;

  @Field((type) => Address, { nullable: true })
  address: Address;

  @Field((type) => [String], { nullable: true })
  tags: string[];
}
