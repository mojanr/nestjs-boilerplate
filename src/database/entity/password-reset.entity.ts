import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Unique, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
// import Crypt from "src/common/util/crypt.util";

@Entity()
export class PasswordReset extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: string
  
  @Column()
  email: string

  @Column()
  token: string

  @Column()
  salt: string

  @Column()
  active: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  // lock
  public lock() {
    this.active = false
  }

  // unlock
  public unlock() {
    this.active = true
  }

  // is lock
  public isLock(): boolean {
    return this.active
  }

  // // set password
  // public async setPassword(password: string) {
  //   this.salt = await Crypt.generateSalt()
  //   this.password = await Crypt.generateHash(password, this.salt)
  // }

  // // validate password
  // public async validatePassword(password: string): Promise<boolean> {
  //   const hash = await Crypt.generateHash(password, this.salt)
  //   return hash === this.password
  // }
  
}