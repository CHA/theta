import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '@theta/entities/users/users.module';
import { SharedModule } from '@theta/shared/shared.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [SharedModule, UsersModule, PassportModule],
  providers: [AuthService, AuthResolver, LocalStrategy, LocalAuthGuard],
})
export class AuthModule {}
