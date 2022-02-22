import { Injectable } from '@angular/core';
import { User } from '@theta/models/user';

@Injectable({ providedIn: 'root' })
export class UserService {

  user: User;

  constructor() { }

  async login(username: string, password: string): Promise<User> {
    this.user.token = 'someToken';
    return this.user;
  }

  async signup(user: User): Promise<User> {
    this.user.token = 'someToken';
    return this.user;
  }

}
