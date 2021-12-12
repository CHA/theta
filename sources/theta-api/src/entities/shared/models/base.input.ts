import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class BaseModel {
  @Field()
  createdBy: string;

  @Field((type) => GraphQLISODateTime)
  createdDate: Date;

  @Field((type) => String, { nullable: true })
  lastModifiedBy: string;

  @Field((type) => GraphQLISODateTime, { nullable: true })
  lastModifiedDate: Date;
}
