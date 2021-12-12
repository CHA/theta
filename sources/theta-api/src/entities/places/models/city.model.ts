import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class City {
  @Field()
  name: string;

  @Field()
  country: string;
}
