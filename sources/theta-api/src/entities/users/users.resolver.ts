import { UseGuards } from '@nestjs/common';
import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { GqlAuthGuard } from '../../guards/gql-auth.guard';
import { UserInput } from './models/user.input';
import { User } from './models/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(@Args('user') user: UserInput): Promise<User> {
    return await this.usersService.create(user);
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => String)
  async deleteUser(@Args('id') id: string): Promise<string> {
    return await this.usersService.delete(id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  async getUser(@Args('id') id: string): Promise<User> {
    return await this.usersService.get(id);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => [User])
  async searchUsers(@Args('keyword') keyword: string): Promise<User[]> {
    return await this.usersService.search(keyword);
  }

  @Query(() => String)
  async countUser(): Promise<number> {
    return await this.usersService.count();
  }
}
