import { Field, GraphQLISODateTime, InputType } from '@nestjs/graphql';
import { PlaceInput } from '@theta/entities/places/models/place.input';

@InputType()
export class ActivityInput {
  @Field()
  name: string;

  @Field((type) => GraphQLISODateTime, { nullable: true })
  startTime: Date;

  @Field((type) => GraphQLISODateTime, { nullable: true })
  endTime: Date;

  @Field((type) => PlaceInput)
  place: PlaceInput;

  @Field((type) => [String], { nullable: true })
  imageUrl: string[];
}
