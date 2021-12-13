import { Module } from '@nestjs/common';
import { EncryptionModule } from '@theta/encryption/encryption.module';

@Module({
  imports: [EncryptionModule],
  exports: [EncryptionModule],
})
export class SharedModule {}
