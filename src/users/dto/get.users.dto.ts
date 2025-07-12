import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEmail,
  IsIn,
} from 'class-validator';

export class GetUserDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  readonly city: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['male', 'female'])
  readonly gender: string;

  @IsNotEmpty()
  @IsNumber()
  readonly age: number;
}
