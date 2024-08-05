import {
    Controller,
    Post,
    UploadedFile,
    UseGuards,
    UseInterceptors,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { AwsService } from './aws-s3.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';



  @Controller()
  export class AwsController {
    constructor(private readonly awsService: AwsService) {}
  
    @UseGuards(JwtAuthGuard)
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
      return this.awsService.uploadFile(file);
    }
  }