import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsUrl,
  IsInt,
  Min,
  Max,
} from 'class-validator';

export class CreateCakeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(200)
  comment: string;

  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(5)
  yumFactor: number;
}
