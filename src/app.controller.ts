import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AccessControlGuard } from './common/guard/access-control.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  @UseGuards(AccessControlGuard)
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
