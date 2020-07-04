import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor() {}

  // get all user
  getUsers() {

  }

  // get user by id
  getUser() {

  }

  // login
  signIn(username: string, password: string) {

  }

  // signup
  signUp(username: string, password: string) {

  }

  // logout
  logout() {

  }

  // lock
  lock(id: string) {

  }

  // unlock
  unlock(id: string) {

  }

  // forget password
  forgetPassword(email: string) {

  }

  // reset password
  resetPassword(password: string, confirmPassword: string, token: string) {

  }

  // change password
  changePassword(oldPassword: string, newPassword: string, confirmNewPassword: string) {

  }

  // create user info
  createUser() {

  }

  // update user info
  updateUser() {

  }

  //

}
