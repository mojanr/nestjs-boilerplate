import { Module, Global } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleModule as DefaultScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleRepository } from 'src/database/repository/schedule.repository';
import { ScheduleController } from './schedule.controller';

@Global()
@Module({
  imports: [
    DefaultScheduleModule.forRoot(),
    TypeOrmModule.forFeature([ScheduleRepository])
  ],
  providers: [ScheduleService],
  exports: [ScheduleService],
  controllers: [ScheduleController]
})
export class ScheduleModule {}
