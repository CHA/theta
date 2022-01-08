import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SearchItineraryInput {
  @Field()
  keyword: string;
}
