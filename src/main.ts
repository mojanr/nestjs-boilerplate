import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe, BadRequestException } from '@nestjs/common';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // config
  const configService = app.get(ConfigService);
  const APP_PORT = configService.get('APP_PORT')
  const RATE_LIMIT_MS = +configService.get('RATE_LIMIT_MS')
  const RATE_LIMIT_MAX = +configService.get('RATE_LIMIT_MAX')

  // compression
  app.use(compression());

  // helmet
  app.use(helmet());

  // rate limit
  app.use(
    rateLimit({
      windowMs: RATE_LIMIT_MS * 60 * 1000, // 15 minutes
      max: RATE_LIMIT_MAX, // limit each IP to 100 requests per windowMs
    }),
  );

  // validation pipe
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (errors) => new BadRequestException(errors),
  }));

  // swagger documentation
  const options = new DocumentBuilder()
    .setTitle('Boilerplate API')
    .setDescription('Boilerplate API Documention')
    .setVersion('1.0')
    .addTag('Boilerplate API')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // serve app
  await app.listen(APP_PORT);
}
bootstrap();
