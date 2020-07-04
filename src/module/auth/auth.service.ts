import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from 'src/database/repository/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/database/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepo: UserRepository,
    private jwtService: JwtService
  ) {
    // this.init()
  }

  private async init() {
    const user = new User()
    user.name = 'test'
    user.email = 'test@email.com'
    await user.setPassword('@Test123!')
    await user.save()
  }

  // validate user
  async validateUser(email: string, password: string): Promise<User> {
    console.log('test')
    // search specific user
    const user = await this.userRepo.findOne({ email: email })
    // validate user and user password, return user if valid
    if (user && user.validatePassword(password)) {
      return user
    }
    // return null if invalid
    return null
    // // validate user password
    // const isValid = await this.userRepo.validatePassword(user, password)
    // // check if user password is valid or not, return user data if valid
    // if (isValid) {
    //   return user
    // }
    // // fallback if user password is not valid
    // return null || undefined
  }

  // signin
  async signIn(email: string, password: string) {

  }

  // signup 
  async signUp() {

  }

  // signup with google
  async googleSignUp() {

  }

  // qr code signup
  async qrCodeSignUp() {

  }

  // generate access token
  private async generateAccessToken(user: User) {
    // define payload data
    const payload = {
      name: 'test'
    }
    // generate access token
    const accessToken = await this.jwtService.sign(payload)
    // return access token
    return { accessToken }
  }
}
