import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.use(helmet());
  app.enableCors({
    origin: configService.get('FE_URL'),
    methods: configService.get('ALLOWED_METHODS'),
    credentials: true,
    allowedHeaders: configService.get('ALLOWED_HEADERS'),
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(configService.get('PORT'));
}
bootstrap();
