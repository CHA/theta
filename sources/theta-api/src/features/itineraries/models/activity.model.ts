import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Activity model' })
export class Activity {
  @Field()
  name: string;

  @Field((type) => GraphQLISODateTime, { nullable: true })
  startTime: Date;

  @Field((type) => GraphQLISODateTime, { nullable: true })
  endTime: Date;
}
