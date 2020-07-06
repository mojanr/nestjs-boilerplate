import { Repository, EntityRepository } from "typeorm";
import { User } from "../entity/user.entity";
import { promises } from "dns";
import { UnauthorizedException } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  // // login
  // async signIn(email: string, password: string) {
  //   // get specific user by email
  //   const user = await this.findOne({ email: email })
  //   const isValid = this.validatePassword(user, password)
  //   if (isValid)  {
      
  //   } else {
  //     return null || undefined
  //   }
  // }

  // // sign up
  // async signUp(email: string, password: string) {
  //   // const user = new User()
  //   // user.email = email
  //   // user.setPassword(password)
  //   // user.save()
  // }

  // // validate email, check if email are used
  // async validateEmail(email: string): Promise<boolean> {
  //   const user = await this.findOne({ email: email })
  //   return user ? true : false
  // }

  // // validate password
  // async validatePassword(user: User, password: string): Promise<boolean> {
  //   // check if user password is valid
  //   if (user && await user.validatePassword(password)) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }

}