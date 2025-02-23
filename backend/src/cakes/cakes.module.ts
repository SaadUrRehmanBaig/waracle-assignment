import { Module } from '@nestjs/common';
import { CakesController } from './cakes.controller';
import { CakesService } from './cakes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CakeSchema } from './schemas/cake.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cake', schema: CakeSchema }])],
  controllers: [CakesController],
  providers: [CakesService],
})
export class CakesModule {}
