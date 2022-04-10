import { Module } from '@nestjs/common';
import awsConfig from './aws-config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AwsConfigService } from './aws-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [awsConfig],
    }),
  ],
  providers: [ConfigService, AwsConfigService],
  exports: [ConfigService, AwsConfigService],
})
export class AwsConfigModule {}
