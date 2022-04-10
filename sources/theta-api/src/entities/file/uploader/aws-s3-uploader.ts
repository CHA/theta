import * as AWS from 'aws-sdk';
import { Upload } from 'graphql-upload';
import { AwsConfigService } from '@theta/config/aws/aws-config.service';
import { UploadedFileResponse } from './uploaded-file-response';
import { Injectable } from '@nestjs/common';
import { Uploader } from './uploader';
import stream, { Stream } from 'stream';

type S3UploadStream = {
  writeStream: stream.PassThrough;
  promise: Promise<AWS.S3.ManagedUpload.SendData>;
};

@Injectable()
export class AwsS3Uploader implements Uploader {
  private s3: AWS.S3;
  private bucketUploadPath = 'uploads';

  constructor(private readonly awsConfigService: AwsConfigService) {
    this.s3 = new AWS.S3({
      accessKeyId: this.awsConfigService.accessKey,
      secretAccessKey: this.awsConfigService.secretKey,
    });
  }

  async upload(file: Upload): Promise<UploadedFileResponse> {
    const { createReadStream, filename, mimetype, encoding } = await file;
    const filePath = this.createDestinationFilePath(
      filename,
      mimetype,
      encoding,
    );

    const uploadStream = this.createUploadStream(filePath);
    const stream = createReadStream();
    stream.pipe(uploadStream.writeStream);

    const result = await uploadStream.promise;
    const url = result.Location;
    return { filename, mimetype, encoding, url };
  }

  private createUploadStream(filePath: string): S3UploadStream {
    const pass = new Stream.PassThrough();
    return {
      writeStream: pass,
      promise: this.s3
        .upload({
          Bucket: this.awsConfigService.s3bucket,
          Key: filePath,
          Body: pass,
        })
        .promise(),
    };
  }

  private createDestinationFilePath(
    filename: string,
    mimetype: string,
    encoding: string,
  ): string {
    return `${this.bucketUploadPath}/${Date.now()}_${filename}`;
  }
}
