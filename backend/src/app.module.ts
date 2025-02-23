import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CakesModule } from './cakes/cakes.module';
import { ConfigModule } from '@nestjs/config';
import { validateEnv } from './core/utils';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TransformInterceptor } from '@core/interceptors/transform/transform.interceptor';

@Module({
  imports: [
    CakesModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateEnv,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
