import { Injectable, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Socket } from 'socket.io';
// import { SchedulerRegistry, Cron, CronExpression } from '@nestjs/schedule';
// import { join } from 'path';

@Injectable()
export class AppService {

  constructor() {

  }

  // onApplicationBootstrap() {
  //   try {
  //     this.job = this.scheduleRegistry.getCronJob('test');
  //     this.job.stop()
  //   } catch (error) {
  //     Logger.error('Schedule error')
  //   }
  // }


  // // test cron
  // // @Cron(CronExpression.EVERY_SECOND)
  // // testCron() {
  // //   console.log('test cron')
  // // }

  // getHello(): string {
  //   return 'Hello World!';
  // }

  // // start job
  // startJob() {
  //   this.job.start()
  // }

  // // stop job
  // stopJob() {
  //   this.job.stop()
  // }
}
