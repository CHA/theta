import { Inject, Injectable } from '@nestjs/common';
import { Upload } from 'graphql-upload';
import { UploadedFileResponse } from './uploader/uploaded-file-response';
import { Uploader } from './uploader/uploader';

@Injectable()
export class FileService {
  constructor(@Inject(Uploader) private readonly uploader: Uploader) {}

  upload(file: Upload): Promise<UploadedFileResponse> {
    return this.uploader.upload(file);
  }
}
