import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return ''
  }

  // @Get('/start')
  // startJob() {
  //   this.appService.startJob()
  // }

  // @Get('/stop')
  // stopJob() {
  //   this.appService.stopJob()
  // }

}
