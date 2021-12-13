import { Field, GraphQLTimestamp, ObjectType } from '@nestjs/graphql';
import { DateTime } from 'neo4j-driver';

@ObjectType()
export abstract class BaseModel {
  @Field()
  createdBy: string;

  @Field()
  createdDate: Date;

  @Field({ nullable: true })
  lastModifiedBy: string;

  @Field({ nullable: true })
  lastModifiedDate: Date;
}
