import { Args, Resolver, Query, Mutation, ResolveField } from '@nestjs/graphql';
import { UserInput } from './models/user.input';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation((returns) => User)
  async createUser(@Args('user') user: UserInput): Promise<UserInput> {
    return await this.usersService.create(user);
  }

  @Mutation((returns) => String)
  async deleteUser(@Args('id') id: string): Promise<string> {
    return await this.usersService.delete(id);
  }

  @Query((returns) => User)
  async getUser(@Args('id') id: string): Promise<User> {
    return await this.usersService.get(id);
  }

  @Query((returns) => [User])
  async searchUsers(@Args('keyword') keyword: string): Promise<User[]> {
    return await this.usersService.search(keyword);
  }

  @Query((returns) => String)
  async countUser(): Promise<number> {
    return await this.usersService.count();
  }
}
