import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';

@Resolver((of) => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query((returns) => User)
  async login(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<User> {
    return await this.authService.login(username, password);
  }
}
