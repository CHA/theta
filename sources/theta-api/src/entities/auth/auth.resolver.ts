import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from '../users/models/user.model';
import { AuthService } from './auth.service';
import { AuthLoginInput } from './models/auth-login.input';
import { UserToken } from './models/user-token.model';

@Resolver(() => User)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => UserToken)
  async login(
    @Args({ name: 'input', type: () => AuthLoginInput }) input: AuthLoginInput,
  ): Promise<UserToken> {
    return await this.authService.login(input);
  }
}
