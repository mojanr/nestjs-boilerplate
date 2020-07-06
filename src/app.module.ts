import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './shared/config/config.module';
import { CacheModule } from './shared/cache/cache.module';
import { DatabaseModule } from './shared/database/database.module';
import { MailModule } from './shared/mail/mail.module';
import { ScheduleModule } from './shared/schedule/schedule.module';
import { UploadModule } from './shared/upload/upload.module';
import { WebsocketModule } from './shared/websocket/websocket.module';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// // import { ScheduleModule } from '@nestjs/schedule';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { APP_INTERCEPTOR } from '@nestjs/core';
// import { CacheConfig } from './config/cache.config';
// import { TypeormConfig } from './config/typeorm.config';
// import { ScheduleModule } from './common/module/schedule/schedule.module';
// import { WebsocketModule } from './common/module/websocket/websocket.module';
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
// import { DatabaseModule } from './shared/database/database.module';
// import { ScheduleModule } from './shared/schedule/schedule.module';
// import { WebsocketModule } from './shared/websocket/websocket.module';
// import { MailModule } from './shared/mail/mail.module';
// import { UploadModule } from './shared/upload/upload.module';
// import { ConfigModule } from './shared/config/config.module';
// import { CacheModule } from './shared/cache/cache.module';
import { AuthModule } from './module/auth/auth.module';
import { UserModule } from './module/user/user.module';
import { RoutesModule } from './routes/routes.module';
import { AccessControlModule } from './shared/access-control/access-control.module';
import { DiscoveryModule } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule,
    CacheModule,
    DatabaseModule,
    MailModule,
    ScheduleModule,
    UploadModule,
    WebsocketModule,
    // // config module
    // ConfigModule.forRoot({
    //   isGlobal: true,
    //   expandVariables: true,
    //   envFilePath: `./.env.${process.env?.NODE_ENV}`,
    // }),
    // // cache module
    // CacheModule.registerAsync({
    //   imports: [ConfigModule],
    //   useClass: CacheConfig,
    //   inject: [ConfigService],
    // }),
    // // database module
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useClass: TypeormConfig,
    //   inject: [ConfigService],
    // }),
    // // schedule module
    // ScheduleModule.forRoot(),
    // WebsocketModule,
    // // SchedulerModule,
    // // AuthModule,
    // // UserModule,
    // // AuthRoutesModule,
    // // DatabaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
      exclude: ['/api*'],
    }),
    AuthModule,
    UserModule,
    RoutesModule,
    AccessControlModule,
    DiscoveryModule
    // DatabaseModule,
    // ScheduleModule,
    // MailModule,
    // UploadModule,
  // ConfigModule,
  //   CacheModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CacheInterceptor,
    // },
  ],
})
export class AppModule { }
