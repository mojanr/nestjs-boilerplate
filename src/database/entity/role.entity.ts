import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Unique, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity()
export class Role extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: string

  @Column()
  name: string
  
  @Column()
  description: string

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
  
}