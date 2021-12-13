import { Module } from '@nestjs/common';
import { SharedModule } from '@theta/shared/shared.module';
import { AuthResolver } from './auth/auth.resolver';
import { AuthService } from './auth/auth.service';
import { SocialResolver } from './social.resolver';
import { SocialService } from './social.service';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [SharedModule],
  providers: [
    AuthResolver,
    AuthService,
    SocialResolver,
    SocialService,
    UsersResolver,
    UsersService,
  ],
})
export class UsersModule {}
