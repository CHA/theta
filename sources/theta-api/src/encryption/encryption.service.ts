import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptionService {
  private saltOrRounds = 10;

  async encrypt(plainText: string): Promise<string> {
    return await bcrypt.hash(plainText, this.saltOrRounds);
  }

  async compare(plainText: string, encryptedText: string): Promise<boolean> {
    return await bcrypt.compare(plainText, encryptedText);
  }
}
