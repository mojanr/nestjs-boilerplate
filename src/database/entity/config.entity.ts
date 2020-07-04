import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Unique, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity()
@Unique(['name'])
export class Cron extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  interval: string

  @Column()
  active: boolean

  @CreateDateColumn({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  createdAt: Date

  @Column()
  createdBy: string

  @UpdateDateColumn({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  updatedAt: Date

  @Column()
  updatedBy: string

  @DeleteDateColumn({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  deletedAt: Date

  @Column()
  deletedBy: string

  // start
  public start() {
    this.active = false
  }

  // stop
  public stop() {
    this.active = true
  }

  // is start
  public isStart(): boolean {
    return this.active
  }
  
}