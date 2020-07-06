import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { UserRepository } from '../user/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/database/repository/user.repository';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(UserRepository) private userRepository: UserRepository) { }

  // login
  async login(email: string, password: string) {
    // get user
    const user = await this.userRepository.findOneOrFail({ email: email }).catch(({ message }) => { throw new UnauthorizedException('Invalid credentials') })
    // validate password
    if (user && user.validatePassword(password)) {
      return user
    } 
    return null
  }

}
