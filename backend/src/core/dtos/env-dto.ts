import { IsString, IsNumber, Matches, IsOptional } from 'class-validator';

export class EnvConfig {
  @IsString()
  @Matches(/mongodb:\/\/.*/)
  MONGO_URI: string;

  @IsOptional()
  @IsNumber()
  PORT: number = 3000;

  @IsString()
  FE_URL: string;

  @IsString()
  ALLOWED_METHODS: string;

  @IsString()
  ALLOWED_HEADERS: string;
}
