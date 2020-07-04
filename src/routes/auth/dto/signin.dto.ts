import { IsEmail, IsString, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class SignInDto {
 
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string

}