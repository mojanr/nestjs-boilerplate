import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication, } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // config
  const configService = app.get(ConfigService);
  // const APP_PORT = configService.get('APP_PORT')
  // const RATE_LIMIT_MS = +configService.get('RATE_LIMIT_MS')
  // const RATE_LIMIT_MAX = +configService.get('RATE_LIMIT_MAX')

  // prefix api
  app.setGlobalPrefix('api');

  // enable proxy and cors
  app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  app.enableCors()

  // compression
  app.use(compression());

  // helmet
  app.use(helmet());

  // rate limit
  app.use(
    rateLimit({
      windowMs: +configService.get('RATE_LIMIT_MS') * 60 * 1000, // 15 minutes
      max: +configService.get('RATE_LIMIT_MAX'), // limit each IP to 100 requests per windowMs
    }),
  );

  // validation pipe
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    exceptionFactory: (errors) => {
      // console.log('validation pipe', errors)
      return new BadRequestException(errors)
    },
  }));

  // swagger documentation
  const options = new DocumentBuilder()
    .addBasicAuth()
    .addBearerAuth()
    .setTitle('Boilerplate API')
    .setDescription('Boilerplate API Documention')
    .setVersion('1.0')
    .addTag('Boilerplate API')
    // .setBasePath('/')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    ignoreGlobalPrefix: false,
  });
  SwaggerModule.setup('doc/api', app, document);

  // serve app
  await app.listen(configService.get('APP_PORT'));
}
bootstrap();
