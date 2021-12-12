import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserInput } from './models/user.input';
import { User } from './models/user.model';
import { SocialService } from './social.service';
import { UserService } from './users.service';

@Resolver((of) => User)
export class SocialResolver {
  constructor(private readonly sosialService: SocialService) {}

  @Mutation((returns) => [User])
  async follow(
    @Args('userA') userA: UserInput,
    @Args('userB') userB: UserInput,
  ): Promise<User[]> {
    return await this.sosialService.follow(userA, userB);
  }

  @Query((returns) => [User])
  async getFollowers(@Args('user') user: UserInput): Promise<User[]> {
    return await this.sosialService.getFollowers(user);
  }

  @Query((returns) => [User])
  async getFollowing(@Args('user') user: UserInput): Promise<User[]> {
    return await this.sosialService.getFollowing(user);
  }
}
