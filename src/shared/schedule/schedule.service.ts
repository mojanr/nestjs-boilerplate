import { Injectable, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { SchedulerRegistry, Cron, CronExpression } from '@nestjs/schedule';
import { ScheduleRepository } from 'src/database/repository/schedule.repository';
import { Schedule } from 'src/database/entity/schedule.entity';
import { EntitySubscriberInterface, InsertEvent, Connection, UpdateEvent } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';
import { CronTime } from 'cron'

@Injectable()
export class ScheduleService implements OnApplicationBootstrap, EntitySubscriberInterface {
  private readonly logger = new Logger(ScheduleService.name)

  constructor(
    @InjectConnection() readonly connection: Connection,
    private scheduleRegistry: SchedulerRegistry,
    private scheduleRepository: ScheduleRepository
  ) {
    // subscribe database event
    connection.subscribers.push(this)
  }

  // sync cron with database
  async onApplicationBootstrap() {
    this.logger.log('Schedule synchrozination')
    // stop all schedule as default value
    const schedules = this.scheduleRegistry.getCronJobs()
    schedules.forEach(schedule => schedule.stop())
    // sync schedules
    schedules.forEach(async (item, key, map) => {
      try {
        // sync schedule with database
        const schedule = await this.scheduleRepository.findOne({ name: key })
        // check if schedule exist or not to sync
        if (schedule) {
          // schedule exist, set schedule based on database config
          this.syncSchedule(schedule)
        } else {
          // schedule doesnt exist, save to database
          const newSchedule = new Schedule()
          newSchedule.setName(key)
          newSchedule.setInterval(item.cronTime.source)
          newSchedule.stop()
          // newSchedule.name = key
          // newSchedule.interval = item.cronTime.source
          // newSchedule.active = false
          await newSchedule.save()
        }
        // console.log(item)
      } catch (error) {
        this.logger.error('Schedule synchrozination error', error)
      }
    })
  }

  // after insert subscription
  // start or not start
  async afterInsert(event: InsertEvent<Schedule>) {
    // sync schedule based on database config
    this.syncSchedule(event.entity)
    // logger
    this.logger.log(`Mapped ${event.entity.name} schedule`)
  }

  // after update subscription
  // stop, update time, and restart schedule
  async afterUpdate(event: UpdateEvent<Schedule>) {
    // sync schedule based on database config
    this.syncSchedule(event.entity)
    // logger
    this.logger.log(`Synched ${event.entity.name} schedule`)
  }

  // sync schedule to run or not to run based on database config
  private syncSchedule(scheduleEntity: Schedule) {
    // set schedule based on database config
    const schedule = this.scheduleRegistry.getCronJob(scheduleEntity.name)
    schedule.setTime(new CronTime(scheduleEntity.interval))
    // run or not run schedule based on database config
    if (scheduleEntity.isRunning()) {
      schedule.start()
    }
  }



  // get all schedule 
  async getSchedules(): Promise<Schedule[]> {
    return this.scheduleRepository.getSchedules()
  }

  // get cron expression
  async getCronExpressions() {
    return CronExpression
  }

  // start schedule
  async startSchedule(scheduleId: string): Promise<Schedule> {
    return this.scheduleRepository.startSchedule(scheduleId)
  }

  // stop schedule
  async stopSchedule(scheduleId: string): Promise<Schedule> {
    return this.scheduleRepository.stopSchedule(scheduleId)
  }

  // change interval schedule
  async changeInterval(id: string, interval: string): Promise<Schedule> {
    return this.scheduleRepository.changeInterval(id, interval)
  }



  // example cron
  @Cron(CronExpression.EVERY_SECOND, {
    name: 'Test',
  })
  testCron() {
    console.log('test')
  }
}
