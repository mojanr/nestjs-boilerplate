// import { Repository, EntityRepository } from "typeorm";
// import { User } from "src/common/database/entity/user.entity";
// import { ConflictException, InternalServerErrorException } from "@nestjs/common";
// import * as bcrypt from 'bcryptjs'

// @EntityRepository(User)
// export class UserRepository extends Repository<User> {

//   // // login
//   // async login(username: string, password: string) {

//   //   const salt = await bcrypt.gentSalt()

//   //   const user = new User();
//   //   user.username = username
//   //   user.password = password
//   // }

//   // // logout
//   // async logout() {

//   // }

//   // // create new user
//   // async signUp(username: string, password: string) {
//   //   const salt = await bcrypt.gentSalt()

//   //   const user = new User();
//   //   user.username = username
//   //   user.password = await this.hashPassword(password, salt)

//   //   try {
//   //     await user.save()
//   //   } catch (error) {
//   //     if (error.code === '23505') {
//   //       throw new ConflictException('Username is already exist')
//   //     } else {
//   //       throw new InternalServerErrorException()
//   //     }
//   //   }
//   // }

//   // // validate password
//   // async validatePassword(username: string, password: string) {
    
//   // }

//   // private async hashPassword(password: string, salt: string): Promise<string> {
//   //   return bcrypt.hash(password, salt)
//   // }
// }