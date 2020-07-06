import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtOptionsFactory, JwtModuleOptions } from '@nestjs/jwt';
import os from 'os'

@Injectable()
export class JwtConfig implements JwtOptionsFactory {
  constructor(private configService: ConfigService) { }

  createJwtOptions(): JwtModuleOptions {
    return {
      secret: this.configService.get('JWT_SECRET'),
      signOptions: {
        expiresIn: 3600,
        algorithm: "HS512",
        issuer: os.hostname()
      },
      verifyOptions: {
        issuer: os.hostname(),
      }
    }
  }

  // createTypeOrmOptions(): TypeOrmModuleOptions {
  //   return {
  //     type: 'mysql',
  //     host: this.configService.get('DATABASE_HOST'),
  //     port: +this.configService.get<number>('DATABASE_PORT'),
  //     username: this.configService.get('DATABASE_USERNAME'),
  //     password: this.configService.get('DATABASE_PASSWORD'),
  //     database: this.configService.get('DATABASE_NAME'),
  //     entities: [__dirname + '../../**/*.entity{.ts,.js}'],
  //     migrations: [__dirname + '../../**/*.migration{.ts,.js}'],
  //     synchronize: this.configService.get<boolean>('DATABASE_SYNC'),
  //   }
  // }
}
