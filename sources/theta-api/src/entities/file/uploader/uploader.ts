import { Upload } from 'graphql-upload';
import { UploadedFileResponse } from './uploaded-file-response';

export interface Uploader {
  upload: (file: Upload) => Promise<UploadedFileResponse>;
}

export const Uploader = Symbol('Uploader');
