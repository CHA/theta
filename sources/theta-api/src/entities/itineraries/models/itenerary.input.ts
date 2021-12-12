import { Field, InputType } from '@nestjs/graphql';
import { ActivityInput } from '@theta/entities/activities/models/activity.input';

@InputType()
export class ItineraryInput {
  @Field()
  name: string;

  @Field((type) => [ActivityInput], { nullable: true })
  activities: ActivityInput[];

  @Field()
  createdBy: string;
}
