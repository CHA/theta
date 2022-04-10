import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from '@theta/guards/gql-auth.guard';
import { User } from './models/user.model';
import { SocialService } from './social.service';

@UseGuards(GqlAuthGuard)
@Resolver((of) => User)
export class SocialResolver {
  constructor(private readonly sosialService: SocialService) {}

  @Mutation((returns) => [User])
  async follows(
    @Args('usernameA') usernameA: string,
    @Args('usernameB') usernameB: string,
  ): Promise<User[]> {
    return await this.sosialService.follows(usernameA, usernameB);
  }

  @Query((returns) => [User])
  async getFollowers(@Args('username') username: string): Promise<User[]> {
    return await this.sosialService.getFollowers(username);
  }

  @Query((returns) => [User])
  async getFollowing(@Args('username') username: string): Promise<User[]> {
    return await this.sosialService.getFollowing(username);
  }
}
