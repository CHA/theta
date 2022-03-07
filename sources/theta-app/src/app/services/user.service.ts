import { Injectable } from '@angular/core';
import { User } from '@theta/models/user';
import { CacheKey } from '@theta/shared/cache';
import { AppService } from './app.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(
    private app: AppService,
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
      profilePicUrl: `${this.app.avatarsPath}/bear.jpg`,
      token: 'someToken'
    };
    this.localStorageService.set(CacheKey.user, user);
    return user.token;
  }

  async signup(user: User): Promise<User> {
    this.localStorageService.set(CacheKey.user, user);
    return user;
  }

  async logout(user: User): Promise<User> {
    this.localStorageService.remove(CacheKey.user);
    return null;
  }

}
