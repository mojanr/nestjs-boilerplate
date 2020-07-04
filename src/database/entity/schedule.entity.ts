import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Unique, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, BeforeInsert, BeforeUpdate, AfterInsert, AfterUpdate } from "typeorm";
import cronstrue from 'cronstrue'

@Entity()
@Unique(['name'])
export class Schedule extends BaseEntity {

  @PrimaryGeneratedColumn('uuid')
  id?: number

  @Column()
  name?: string

  @Column()
  interval?: string

  @Column()
  description?: string

  @Column({ default: false })
  active?: boolean

  // @CreateDateColumn({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP"})
  // createdAt: Date

  // @UpdateDateColumn({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  // updatedAt: Date

  // @DeleteDateColumn({ type: 'timestamp', default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" })
  // deletedAt: Date

  // set name
  public setName(name: string) {
    this.name = name
  }

  // set interval
  public setInterval(interval: string) {
    this.interval = interval
    this.description = cronstrue.toString(interval)
  }

  // start
  public start() {
    this.active = true
  }

  // stop
  public stop() {
    this.active = false
  }

  // is running
  public isRunning(): boolean {
    return this.active
  }

  // // hooks validation
  // @BeforeInsert()
  // @BeforeUpdate()
  // async validate() {
  //   //  await validateOrReject(this);
  //   // console.log('before insert, before update')
  // }

  // // hooks subscriber
  // @AfterInsert()
  // @AfterUpdate() 
  // subscribe() {
  //   return this
  // }

}