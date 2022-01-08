import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class BaseInput {
  @Field({ nullable: true })
  uuid: string;
}
