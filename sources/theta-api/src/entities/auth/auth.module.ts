import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '@theta/entities/users/users.module';
import { JwtConstants } from '@theta/shared/constants';
import { SharedModule } from '@theta/shared/shared.module';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { GqlAuthGuard } from './gql-auth.guard';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    SharedModule,
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: JwtConstants.secret,
    }),
  ],
  providers: [AuthService, AuthResolver, GqlAuthGuard, JwtStrategy],
})
export class AuthModule {}
