import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { SignInQrDto } from './dto/signin-qr.dto';
import { PasswordForgetDto } from './dto/password-forget.dto';
import { PasswordResetDto } from './dto/password-reset.dto';
import { ApiTags, ApiBasicAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

  // @ApiBasicAuth()
  // @UseGuards(AuthGuard('local'))
  @Post('/signin')
  signIn(@Body() signIn: SignInDto) {
    return signIn
  }

  @Post('/signin/google')
  signInWithGoogle(@Body() signIn: SignInDto) {

  }

  @Post('/signin/qr')
  signInWithQr(@Body() signInQr: SignInQrDto) {
    
  }

  @Post('/password/forget')
  forgetPassword(@Body() forgetPassword: PasswordForgetDto) {

  }

  @Post('/password/reset')
  resetPassword(@Body() resetPassword: PasswordResetDto) {
    
  }

}
