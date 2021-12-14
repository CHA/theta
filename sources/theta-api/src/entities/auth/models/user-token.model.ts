import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '@theta/entities/users/models/user.model';

@ObjectType()
export class UserToken {
  @Field((type) => User)
  user: User;

  @Field()
  token: string;
}
