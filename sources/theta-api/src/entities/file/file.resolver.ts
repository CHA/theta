import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GraphQLUpload, Upload } from 'graphql-upload';
import { FileService } from './file.service';
import { UploadedFileResponse } from './uploader/uploaded-file-response';

@Resolver()
export class FileResolver {
  constructor(private fileService: FileService) {}

  @Mutation(() => UploadedFileResponse)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload })
    file: Upload,
  ): Promise<UploadedFileResponse> {
    const result = await this.fileService.upload(file);
    return result;
  }
}
