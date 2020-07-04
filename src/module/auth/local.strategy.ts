import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super()
  }

  // validate user credentials
  async validate(email: string, password: string): Promise<any> {
    // validate user from auth service
    const user = await this.authService.validateUser(email, password)
    // validate user is valid or invalid
    console.log(user)
    if (!user) {
      throw new UnauthorizedException('Invalid credentials')
    }
    // return user if valid
    return user
    // // check if user valid or not
    // if (!user) {
    //   // user is not valid, throw some unauthorize exception
    //   throw new UnauthorizedException()
    // }
    // // fallback return user data if user is valid
    // return user
  }
}
