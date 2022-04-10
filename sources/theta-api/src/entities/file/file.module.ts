import { Module } from '@nestjs/common';
import { AwsConfigModule } from '@theta/config/aws/aws-config.module';
import { SharedModule } from '@theta/shared/shared.module';
import { FileResolver } from './file.resolver';
import { FileService } from './file.service';
import { AwsS3Uploader } from './uploader/aws-s3-uploader';
import { Uploader } from './uploader/uploader';

@Module({
  imports: [SharedModule, AwsConfigModule],
  providers: [
    FileResolver,
    FileService,
    { provide: Uploader, useClass: AwsS3Uploader },
  ],
  exports: [],
})
export class FileModule {}
