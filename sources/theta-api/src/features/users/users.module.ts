import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UserService } from './users.service';

@Module({
  providers: [UsersResolver, UserService],
})
export class UsersModule {}
