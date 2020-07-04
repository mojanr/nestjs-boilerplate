import { IsEmail, IsString, IsNotEmpty } from 'class-validator'

export class PasswordForgetDto {
 
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string

}