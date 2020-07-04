import { Module, Global } from '@nestjs/common';
import { UploadService } from './upload.service';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UploadConfig } from './upload.config';

@Global()
@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useClass: UploadConfig,
      inject: [ConfigService],
    })
  ],
  providers: [UploadService],
  exports: [UploadService]
})
export class UploadModule {}
