import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Unique, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToMany, JoinTable } from "typeorm";
import { Permission } from "./permission.entity";

@Entity()
export class Role extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string

  @Column({ nullable: true })
  attributes: string

  @Column({ nullable: true })
  description?: string

  @Column({ default: true })
  active: boolean

  @ManyToMany(type => Permission)
  @JoinTable()
  permissions: Permission[]

  public lock() {
    this.active = true
  }

  // unlock
  public unlock() {
    this.active = false
  }

  // is lock
  public isLock(): boolean {
    return this.active
  }

  public attachPermission(permission: Permission) {

  }

  public detachPermission(permission: Permission) {

  }

  public updatePermission(permission: Permission[]) {

  }

}