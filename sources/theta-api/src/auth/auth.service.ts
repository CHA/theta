import { Injectable, UnauthorizedException } from '@nestjs/common';
import { EncryptionService } from '@theta/encryption/encryption.service';
import { User } from '@theta/entities/users/models/user.model';
import { UsersService } from '@theta/entities/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly encryptionService: EncryptionService,
  ) {}

  async login(username: string, password: string): Promise<User> {
    const user = await this.validateUser(username, password);
    console.log(user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  async validateUser(username: string, password: string): Promise<User> {
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
