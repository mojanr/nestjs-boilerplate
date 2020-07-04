import { Module } from '@nestjs/common';
import { TestService } from './test/test.service';

@Module({
  providers: [TestService]
})
export class ScheduleModule {}
