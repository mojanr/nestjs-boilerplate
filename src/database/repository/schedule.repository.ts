import { Repository, EntityRepository } from "typeorm";
import { Schedule } from "../entity/schedule.entity";
import { InternalServerErrorException, NotFoundException } from "@nestjs/common";

@EntityRepository(Schedule)
export class ScheduleRepository extends Repository<Schedule> {

  // get all schedule
  async getSchedules(): Promise<Schedule[]> {
    return await this.find()
  }

  // get schedule by name
  async getScheduleByName(name: string): Promise<Schedule> {
    return await this.findOneOrFail({ name: name }).catch(({ message }) => { throw new NotFoundException(message) })
  }

  // get schedule by id
  async getScheduleById(id: string): Promise<Schedule> {
    return this.findOneOrFail(id).catch(({ message }) => { throw new NotFoundException(message) })
  }

  // start schedule
  async startSchedule(id: string): Promise<Schedule> {
    const schedule = await this.getScheduleById(id)
    schedule.start()
    return await schedule.save().catch(({ message }) => { throw new InternalServerErrorException(message) })
  }

  // stop schedule
  async stopSchedule(id: string): Promise<Schedule> {
    const schedule = await this.getScheduleById(id)
    schedule.stop()
    return await schedule.save().catch(({ message }) => { throw new InternalServerErrorException(message) })
  }

  // change interval schedule
  async changeInterval(id: string, interval: string): Promise<Schedule> {
    const schedule = await this.getScheduleById(id)
    schedule.setInterval(interval)
    return await schedule.save().catch(({ message }) => { throw new InternalServerErrorException(message) })
  }

  // // create new schedule
  // async createSchedule(schedule: Schedule) {
  //   await schedule.save()
  // }

}