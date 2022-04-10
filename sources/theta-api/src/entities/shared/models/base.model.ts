import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export abstract class BaseModel {
  @Field()
  uuid: string;

  @Field()
  createdBy: string;

  @Field()
  createdDate: Date;

  @Field({ nullable: true })
  lastModifiedBy: string;

  @Field({ nullable: true })
  lastModifiedDate: Date;
}
