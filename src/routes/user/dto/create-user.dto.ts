import { IsEmail, IsString, IsNotEmpty, IsEnum, IsNumberString, IsArray } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
 
  @ApiProperty({
    description: 'User email',
    default: 'example@email.com'
  })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  password: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  confirmPassword: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty()
  @IsEnum(['Male', 'Female'])
  gender: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  city: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  province: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  address: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  zipCode: string

  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  phone: string

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  role: number[] | string[]

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  image: string

}