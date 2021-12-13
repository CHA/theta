import { Module } from '@nestjs/common';
import { EncryptionModule } from '@theta/encryption/encryption.module';
import { DateScalar } from '@theta/entities/shared/models/date.scalar';

@Module({
  imports: [EncryptionModule],
  providers: [DateScalar],
  exports: [EncryptionModule, DateScalar],
})
export class SharedModule {}
