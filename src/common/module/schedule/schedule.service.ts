import { Injectable, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class ScheduleService implements OnApplicationBootstrap {
  // private readonly logger = new Logger(ScheduleService.name);

  constructor(private schedulerRegistry: SchedulerRegistry) {
    
  }

  onApplicationBootstrap() {

  }


  private initialize() {

  }

  
}
