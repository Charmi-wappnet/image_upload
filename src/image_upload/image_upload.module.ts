import { Module } from '@nestjs/common';
import { ImageUploadService } from './image_upload.service';
import { ImageUploadController } from './image_upload.controller';

@Module({
  providers: [ImageUploadService],
  controllers: [ImageUploadController]
})
export class ImageUploadModule {}
