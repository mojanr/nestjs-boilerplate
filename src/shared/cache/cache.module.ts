import { Module, Global, CacheModule as DefaultCacheModule, CacheInterceptor } from '@nestjs/common';
import { CacheService } from './cache.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheConfig } from './cache.config';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Global()
@Module({
  imports: [
    DefaultCacheModule.registerAsync({
        imports: [ConfigModule],
        useClass: CacheConfig,
        inject: [ConfigService],
      }),
  ],
  providers: [
    CacheService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  exports: [CacheService]
})
export class CacheModule {}
