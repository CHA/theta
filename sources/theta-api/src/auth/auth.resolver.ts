import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from '../entities/users/models/user.model';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Resolver((of) => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Query((returns) => User)
  async login(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<User> {
    return await this.authService.login(username, password);
  }
}
