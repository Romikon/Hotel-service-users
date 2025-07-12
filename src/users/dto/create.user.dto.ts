import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEmail,
  IsIn,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsOptional()
  @IsString()
  readonly city: string;

  @IsOptional()
  @IsString()
  @IsIn(['male', 'female'])
  readonly gender: string;

  @IsOptional()
  @IsNumber()
  readonly age: number;
}
