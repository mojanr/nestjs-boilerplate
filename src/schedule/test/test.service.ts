import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule'

@Injectable()
export class TestService {

  @Cron(CronExpression.EVERY_SECOND)
  handleCron() {
    console.log('test')
  }
  
}
