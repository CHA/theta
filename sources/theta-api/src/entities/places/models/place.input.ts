import { Field, InputType } from '@nestjs/graphql';
import { CityInput } from './city.input';

@InputType()
export class PlaceInput {
  @Field()
  name: string;

  @Field((type) => String, { nullable: true })
  address: string;

  @Field((type) => String, { nullable: true })
  postCode: string;

  @Field((type) => CityInput)
  city: CityInput;

  @Field((type) => [String], { nullable: true })
  tags: string[];
}
