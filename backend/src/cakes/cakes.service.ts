import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cake } from './schemas/cake.schema';
import { CreateCakeDto } from './dto/create-cake.dto';
import { UpdateCakeDto } from './dto/update-cake.dto';
import { AppConstants } from '@core/constants/appContants';

@Injectable()
export class CakesService {
  constructor(@InjectModel(Cake.name) private cakeModel: Model<Cake>) {}

  async findAll(): Promise<Cake[]> {
    return this.cakeModel.find().exec();
  }

  async findOne(id: string): Promise<Cake> {
    const cake = await this.cakeModel.findById(id).exec();
    if (!cake) throw new NotFoundException(AppConstants.MESSGES.CAKE_NOT_FOUND);
    return cake;
  }

  async create(createCakeDto: CreateCakeDto): Promise<Cake> {
    if (await this.cakeModel.findOne({ name: createCakeDto.name })) {
      throw new BadRequestException(AppConstants.MESSGES.CAKE_EXISTS);
    }
    const createdCake = new this.cakeModel(createCakeDto);
    return createdCake.save();
  }

  async update(id: string, updateCakeDto: UpdateCakeDto): Promise<Cake> {
    await this.findOne(id);
    return this.cakeModel.findByIdAndUpdate(id, updateCakeDto, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.cakeModel.findByIdAndDelete(id);
  }
}
