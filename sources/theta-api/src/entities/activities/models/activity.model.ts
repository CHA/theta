import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { Place } from '@theta/entities/places/models/place.model';

@ObjectType({ description: 'Activity model' })
export class Activity {
  @Field()
  name: string;

  @Field((type) => GraphQLISODateTime, { nullable: true })
  startTime: Date;

  @Field((type) => GraphQLISODateTime, { nullable: true })
  endTime: Date;

  @Field((type) => Place)
  place: Place;
}
