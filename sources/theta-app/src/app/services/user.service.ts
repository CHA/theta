import { Injectable } from '@angular/core';
import { User } from '@theta/models/user';
import { CacheKey } from '@theta/shared/cache';
import { AppService } from './app.service';
import { Apollo, MutationResult } from 'apollo-angular';
import { LocalStorageService } from './local-storage.service';
import { UserMutations } from './gql/user.mutation';
import { UserToken } from '@theta/models/user-token';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(
    private app: AppService,
    private apollo: Apollo,
    private localStorageService: LocalStorageService
  ) { }

  get userToken() {
    const userTokenCache = this.localStorageService.get<UserToken>(CacheKey.userToken);
    if (userTokenCache && userTokenCache.user && !userTokenCache.user.profilePicUrl) {
      userTokenCache.user.profilePicUrl = `${this.app.avatarsPath}/default.png`;
    }
    return userTokenCache;
  }

  async login(username: string, password: string): Promise<Partial<UserToken>> {
    const userToken: Partial<UserToken> = {};
    const result = await this.apollo.mutate<any>({
      mutation: UserMutations.login,
      variables: {
        input: {
          username,
          password
        }
      }
    }).toPromise();
    if (result.errors) {
      userToken.errors = result.errors.map(x => x.message).join(',');
    } else {
      userToken.user = result.data.login.user;
      userToken.token = result.data.login.token;
      this.localStorageService.set(CacheKey.userToken, result.data.login);
    }
    return userToken;
  }

  async signup(user: User): Promise<Partial<UserToken>> {
    await this.apollo.mutate<User>({
      mutation: UserMutations.createUser,
      variables: {
        userInput: user
      }
    }).toPromise();
    const userToken = await this.login(user.email, user.password);
    return userToken;
  }

  logout() {
    this.localStorageService.remove(CacheKey.userToken);
    this.app.toHome();
    this.app.refresh();
    return null;
  }

}
