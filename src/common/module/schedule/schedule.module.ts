import { Module, DynamicModule } from '@nestjs/common';
import { ScheduleModule as SchedulerModule } from '@nestjs/schedule';
import { ScheduleService } from './schedule.service';
import { ScheduleModule as CronModule } from 'src/schedule/schedule.module'

@Module({
  imports: [
    SchedulerModule.forRoot(),
    CronModule
  ],
  providers: [ScheduleService]
})
export class ScheduleModule {
  static forRoot(): DynamicModule {
    return {
      global: true,
      module: ScheduleModule,
      providers: [ScheduleService],
      exports: [ScheduleService]
    }
  }
}
