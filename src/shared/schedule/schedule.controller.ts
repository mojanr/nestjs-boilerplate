import { Controller, Patch, Param, Get, Put, Body, NotFoundException } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { Schedule } from 'src/database/entity/schedule.entity';
import { ChangeScheduleIntervalDto } from './dto/change-schedule-interval.dto';
import { ApiTags, ApiOperation, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('Schedule')
@Controller('schedule')
export class ScheduleController {
  constructor(private scheduleService: ScheduleService) { }

  // get all schedule endpoint
  @Get()
  @ApiOperation({ description: 'Get all schedules entries' })
  @ApiOkResponse({ description: 'Return all schedule as array object' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async getSchedules(): Promise<Schedule[]> {
    return this.scheduleService.getSchedules()
  }

  // get cron expression
  @Get('/cron/expression')
  @ApiOperation({ description: 'Get all basic cron expression pattern' })
  @ApiOkResponse({ description: 'Return all cron expression as object json' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async getCronExpression() {
    return this.scheduleService.getCronExpressions()
  }

  // start schedule endpoint
  @Patch(':scheduleId/start')
  @ApiOperation({ description: 'Start schedule based on schedule id' })
  @ApiOkResponse({ description: 'Return related schedule' })
  @ApiNotFoundResponse({ description: 'Schedule id not found' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async startSchedule(@Param('scheduleId') scheduleId: string): Promise<Schedule> {
    return this.scheduleService.startSchedule(scheduleId)
  }

  // stop schedule endpoint
  @Patch(':scheduleId/stop')
  @ApiOperation({ description: 'Stop schedule based on schedule id' })
  @ApiOkResponse({ description: 'Return related schedule' })
  @ApiNotFoundResponse({ description: 'Schedule id not found' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async stopSchedule(@Param('scheduleId') scheduleId: string): Promise<Schedule> {
    return this.scheduleService.stopSchedule(scheduleId)
  }

  // change schedule interval endpoint
  @Patch(':scheduleId/interval')
  @ApiOperation({ description: 'Change interval/cron pattern of schedule' })
  @ApiOkResponse({ description: 'Return related schedule' })
  @ApiNotFoundResponse({ description: 'Schedule id not found' })
  @ApiBadRequestResponse({ description: 'Bad request from validation' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async changeInterval(@Param('scheduleId') scheduleId: string, @Body() schedule: ChangeScheduleIntervalDto): Promise<Schedule> {
    return this.scheduleService.changeInterval(scheduleId, schedule.interval)
  }

}
