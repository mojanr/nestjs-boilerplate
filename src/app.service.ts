import { Injectable, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { SubscribeMessage, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { DiscoveryService } from '@golevelup/nestjs-discovery'
// import { SchedulerRegistry, Cron, CronExpression } from '@nestjs/schedule';
// import { join } from 'path';

@Injectable()
export class AppService implements OnApplicationBootstrap {

  constructor(private readonly discover: DiscoveryService) {
    
  }

  async onApplicationBootstrap() {
    // const discovery = await this.discover.controllerMethodsWithMetaAtKey('api')
    // console.log(discovery)
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
