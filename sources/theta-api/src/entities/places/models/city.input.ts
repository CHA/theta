import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CityInput {
  @Field()
  name: string;

  @Field()
  country: string;
}
