import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Unique, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Crypt } from "src/common/util/_index.util";
import { Role } from "./role.entity";

@Entity()
@Unique(['email'])
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column({ default: true })
  active: boolean

  @ManyToMany(type => Role)
  @JoinTable()
  roles: Role[]

  // @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  // createdAt: Date

  // @UpdateDateColumn()
  // updatedAt: Date

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

  // set password
  public async setPassword(password: string) {
    const salt = await Crypt.generateSalt()
    this.password = await Crypt.generateHash(password, salt)
  }

  // validate password
  public async validatePassword(password: string): Promise<boolean> {
    return await Crypt.validate(password, this.password)
  }

}