import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Uploaded file response' })
export class UploadedFileResponse {
  @Field(() => String)
  filename: string;

  @Field(() => String)
  mimetype: string;

  @Field(() => String)
  encoding: string;

  @Field(() => String)
  url: string;
}
