import { Field, InputType } from '@nestjs/graphql';
import { ActivityInput } from '@theta/entities/activities/models/activity.input';
import { BaseInput } from '@theta/entities/shared/models/base.input';

@InputType()
export class ItineraryInput extends BaseInput {
  @Field()
  name: string;

  @Field(() => [ActivityInput], { nullable: true })
  activities: ActivityInput[];

  @Field(() => [String], { nullable: true })
  imageUrls: string[];

  @Field()
  createdBy: string;

  @Field(() => [String], { nullable: true })
  description: string;
}
