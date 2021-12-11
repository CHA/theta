import { Args, Resolver, Query, Mutation, ResolveField } from '@nestjs/graphql';
import { UserInput } from './models/user.input';
import { User } from './models/user.model';
import { UserService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation((returns) => User)
  async createUser(@Args('user') user: UserInput): Promise<UserInput> {
    return await this.userService.create(user);
  }

  @Mutation(returns => String)
  async deleteUser(@Args('id') id: string): Promise<string> {
    return await this.userService.delete(id);
  }

  @Query((returns) => User)
  async getUser(@Args('id') id: string): Promise<User> {
    return await this.userService.get(id);
  }

  @Query((returns) => [User])
  async searchUsers(@Args('keyword') keyword: string): Promise<User[]> {
    return await this.userService.search(keyword);
  }

  @Query((returns) => String)
  async countUser(): Promise<number> {
    return await this.userService.count();
  }
}
