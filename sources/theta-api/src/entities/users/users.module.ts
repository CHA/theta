import { Module } from '@nestjs/common';
import { SocialResolver } from './social.resolver';
import { SocialService } from './social.service';
import { UsersResolver } from './users.resolver';
import { UserService } from './users.service';

@Module({
  providers: [SocialResolver, SocialService, UsersResolver, UserService],
})
export class UsersModule {}
