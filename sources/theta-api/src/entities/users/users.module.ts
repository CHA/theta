import { Module } from '@nestjs/common';
import { SharedModule } from '@theta/shared/shared.module';
import { SocialResolver } from './social.resolver';
import { SocialService } from './social.service';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [SharedModule],
  providers: [SocialResolver, SocialService, UsersResolver, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
