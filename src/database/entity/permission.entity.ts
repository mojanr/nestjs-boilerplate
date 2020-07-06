import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Unique, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { AccessControlActionHelper, AccessControlPossessionHelper } from "src/common/helper/_index.helper";

@Entity()
export class Permission extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: string

  @Column()
  resource: string

  @Column({ type: "enum", enum: AccessControlActionHelper })
  action: string

  @Column({ type: "enum", enum: AccessControlPossessionHelper })
  possession: string

  @Column({ nullable: true })
  attributes?: string

  @Column({ nullable: true })
  description?: string

  @Column({ default: true })
  active: boolean

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

}