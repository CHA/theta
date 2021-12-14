import { UseGuards } from '@nestjs/common';
import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/gql-auth.guard';
import { UserInput } from './models/user.input';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@UseGuards(GqlAuthGuard)
@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation((returns) => User)
  async createUser(@Args('user') user: UserInput): Promise<User> {
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
