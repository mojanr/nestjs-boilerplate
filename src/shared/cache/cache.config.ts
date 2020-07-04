import { Injectable, CacheOptionsFactory, CacheModuleOptions } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CacheConfig implements CacheOptionsFactory {
  constructor(private configService: ConfigService) { }

  createCacheOptions(): CacheModuleOptions {
    return {
      store: this.configService.get('CACHE_STORE'),
      ttl: +this.configService.get<number>('CACHE_TTL'),
      max: +this.configService.get<number>('CACHE_MAX'),
    }
  }
}
