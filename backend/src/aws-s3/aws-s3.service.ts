import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AwsService {
  private readonly AWS_S3_BUCKET: string;
  private readonly s3: AWS.S3;

  constructor(private readonly configService: ConfigService) {
    this.AWS_S3_BUCKET = this.configService.get<string>('AWS_S3_BUCKET');
    this.s3 = new AWS.S3({
      accessKeyId: this.configService.get<string>('AWS_ACCESS_KEY_ID'),
      secretAccessKey: this.configService.get<string>('AWS_SECRET_ACCESS_KEY'),
      region: this.configService.get<string>('AWS_REGION'),
    });
  }

  async uploadFile(file) {
    console.log(file);
    const { originalname } = file;
    return await this.s3_upload(file.buffer, this.AWS_S3_BUCKET, originalname, file.mimetype);
  }

  async s3_upload(file, bucket, name, mimetype) {
    const params: AWS.S3.PutObjectRequest = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
      ACL:"authenticated-read",
      ContentType: mimetype,
      ContentDisposition: 'inline',
    };

    try {
      const s3Response = await this.s3.upload(params).promise();
      return s3Response;
    } catch (e) {
      console.log(e);
      throw new Error('Error uploading file to S3');
    }
  }
}
