import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CakesService } from './cakes.service';
import { CreateCakeDto } from './dto/create-cake.dto';
import { UpdateCakeDto } from './dto/update-cake.dto';

@Controller('cakes')
export class CakesController {
  constructor(private readonly cakesService: CakesService) {}

  @Get()
  getAllCakes() {
    return this.cakesService.findAll();
  }

  @Get(':id')
  getCakeById(@Param('id') id: string) {
    return this.cakesService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createCake(@Body() createCakeDto: CreateCakeDto) {
    return this.cakesService.create(createCakeDto);
  }

  @Put(':id')
  updateCake(@Param('id') id: string, @Body() updateCakeDto: UpdateCakeDto) {
    return this.cakesService.update(id, updateCakeDto);
  }

  @Delete(':id')
  deleteCake(@Param('id') id: string) {
    return this.cakesService.delete(id);
  }
}
