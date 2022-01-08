import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '@theta/entities/shared/models/base.model';

@ObjectType()
export class City extends BaseModel {
  @Field()
  name: string;

  @Field()
  country: string;
}
