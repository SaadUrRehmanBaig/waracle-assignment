import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Cake extends Document {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true, minlength: 5, maxlength: 200 })
  comment: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true, min: 1, max: 5 })
  yumFactor: number;
}

export const CakeSchema = SchemaFactory.createForClass(Cake);