import { Injectable } from '@angular/core';
import { User } from '@theta/models/user';
import { CacheKey } from '@theta/shared/cache';
import { AppService } from './app.service';
import { Apollo, MutationResult } from 'apollo-angular';
import { LocalStorageService } from './local-storage.service';
import { UserMutations } from './gql/user.mutation';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(
    private app: AppService,
    private apollo: Apollo,
    private localStorageService: LocalStorageService
  ) { }

  get user() {
    return this.localStorageService.get<User>(CacheKey.user);
  }

  async login(username: string, password: string): Promise<string> {
    // TODO: Authenticate
    const user = {
      email: 'christofelh@gmail.com',
      firstName: 'Christofel',
      lastName: 'Hakim',
      profilePicUrl: `${this.app.avatarsPath}/puppy.jpg`,
      token: 'someToken'
    };
    this.localStorageService.set(CacheKey.user, user);
    return user.token;
  }

  async signup(user: User): Promise<MutationResult<User>> {
    const result = await this.apollo.mutate<User>({
      mutation: UserMutations.createUser,
      variables: {
        userInput: user
      }
    }).toPromise();
    this.localStorageService.set(CacheKey.user, result);
    return result;
  }

  async logout(user: User): Promise<User> {
    this.localStorageService.remove(CacheKey.user);
    return null;
  }

}
