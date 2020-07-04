import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from 'src/database/repository/user.repository';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserRepository) private userRepo: UserRepository) { }

  // get repo
  getUserRepo() {

  }

  // validate user
  async validateUser(email: string, password: string) {
    
  }

  // get users, get all user
  async getUsers(active?: boolean) {
    if (active === undefined) {
      return await this.userRepo.find()
    } else {
      return await this.userRepo.find({ active: active })
    }
  }


}
