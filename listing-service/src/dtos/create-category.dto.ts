import {
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  name: string;

  @IsString()
  @MaxLength(300)
  description?: string;

  @IsString()
  @IsNotEmpty()
  firstPic: string;

  @IsNumber()
  @IsNotEmpty()
  createdBy: number;

  @IsNumber()
  @IsNotEmpty()
  updatedBy: number;
}
