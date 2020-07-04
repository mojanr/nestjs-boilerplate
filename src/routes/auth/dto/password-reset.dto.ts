import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator'

export class PasswordResetDto {

  @IsNotEmpty()
  @IsString()
  token: string

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  confirmPassword: string

}