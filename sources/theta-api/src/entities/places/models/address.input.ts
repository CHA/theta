import { Field, InputType } from '@nestjs/graphql';
import { CityInput } from './city.input';

@InputType()
export class AddressInput {
  @Field()
  address: string;

  @Field((type) => String, { nullable: true })
  postCode: string;

  @Field((type) => CityInput, { nullable: false })
  city: CityInput;
}
