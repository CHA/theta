import { Field, InputType } from '@nestjs/graphql';
import { PlaceInput } from '@theta/entities/places/models/place.input';

@InputType()
export class ActivityInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  startTime: Date;

  @Field({ nullable: true })
  endTime: Date;

  @Field((type) => PlaceInput)
  place: PlaceInput;

  @Field((type) => [String], { nullable: true })
  imageUrl: string[];
}
