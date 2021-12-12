import { Field, InputType } from '@nestjs/graphql';
import { AddressInput } from './address.input';

@InputType()
export class PlaceInput {
  @Field()
  name: string;

  @Field((type) => AddressInput, { nullable: true })
  address: AddressInput;

  @Field((type) => [String], { nullable: true })
  tags: string[];
}
