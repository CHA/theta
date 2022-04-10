import { registerAs } from '@nestjs/config';

export default registerAs('aws', () => ({
  accessKey: process.env.AWS_ACCESS_KEY,
  secretKey: process.env.AWS_SECRET_KEY,
  s3bucket: process.env.AWS_S3_BUCKET,
  region: process.env.REGION,
}));
