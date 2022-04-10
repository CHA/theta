import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Price model' })
export class Price {
  @Field(() => [Number])
  amount: number;

  @Field(() => [String])
  currency: string;
}
