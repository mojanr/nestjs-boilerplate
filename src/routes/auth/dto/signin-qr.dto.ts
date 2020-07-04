import { IsEmail, IsString, IsNotEmpty } from 'class-validator'

export class SignInQrDto {
 
  @IsNotEmpty()
  @IsString()
  token: string

}