import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EncryptionService } from '@theta/encryption/encryption.service';
import { UsersService } from '@theta/entities/users/users.service';
import { User } from '../users/models/user.model';
import { AuthLoginInput } from './models/auth-login.input';
import { Jwt } from './models/jwt';
import { UserToken } from './models/user-token.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly encryptionService: EncryptionService,
    private readonly jwtService: JwtService,
  ) {}

  async login(input: AuthLoginInput): Promise<UserToken> {
    const user = await this.usersService.get(input.username);
    if (!user) {
      throw new NotFoundException();
    }

    const validPassword = await this.validatePassword(input);

    if (!validPassword) {
      throw new UnauthorizedException('Invalid password');
    }
    return { user: user, token: this.signToken(user.uuid) };
  }

  async validateUser(uuid: string): Promise<User> {
    const user = await this.usersService.getByUid(uuid);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

  private signToken(uuid: string) {
    const payLoad: Jwt = { uuid };
    return this.jwtService.sign(payLoad);
  }

  private async validatePassword(input: AuthLoginInput) {
    const validPassword = await this.usersService.getPassword(input.username);
    return await this.encryptionService.compare(input.password, validPassword);
  }
}
