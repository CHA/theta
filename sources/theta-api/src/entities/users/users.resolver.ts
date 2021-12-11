import { Args, Resolver, Query } from '@nestjs/graphql';
import { User } from './models/user.model';
import { UserService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Query((returns) => User)
  async getUser(@Args('id') id: string) {
    return await this.userService.findOneById(id);
  }

  @Query((returns) => String, { name: 'userCount' })
  async count(): Promise<number> {
    return await this.userService.count();
  }
}
