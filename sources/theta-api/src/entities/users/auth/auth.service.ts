import { Injectable, UnauthorizedException } from '@nestjs/common';
import { EncryptionService } from '@theta/encryption/encryption.service';
import { User } from '../models/user.model';
import { UsersService } from '../users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly encryptionService: EncryptionService,
  ) {}

  async login(username: string, password: string): Promise<User> {
    const user = await this.validate(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async validate(username: string, password: string): Promise<User> {
    const user = await this.usersService.get(username);
    const userPassword = await this.usersService.getPassword(username);
    const isPasswordMatch = await this.encryptionService.compare(
      password,
      userPassword,
    );
    if (user && isPasswordMatch) {
      return user;
    }
    return null;
  }
}
