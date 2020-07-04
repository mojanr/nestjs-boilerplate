import { Controller, Get, Param, Post, Body, Patch, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiTags, ApiResponse, ApiBadRequestResponse, ApiNotFoundResponse, ApiMethodNotAllowedResponse, ApiOkResponse, ApiUnauthorizedResponse, ApiBearerAuth, ApiBody, ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {

  @Get()
  // @ApiOkResponse({ description: 'Users record in array' })
  // @ApiUnauthorizedResponse({ description: 'Invalid Credentials' })
  // @ApiNotFoundResponse({ description: 'Not found' })
  // @ApiMethodNotAllowedResponse({ description: 'Method not allowed' })
  // @ApiOperation({ summary: 'Get all user' })
  getUsers() {
    return 'test'
  }

  @Get(':userId')
  // @ApiOperation({ summary: 'Get user info by user id' })
  getUser(@Param('userId') userId: string) {

  }

  @Post()
  // @ApiCreatedResponse({ description: 'Success create new user' })
  // @ApiUnauthorizedResponse({ description: 'Invalid Credentials' })
  // @ApiBadRequestResponse({ description: 'Bad request, invalid parameter' })
  // @ApiMethodNotAllowedResponse({ description: 'Method not allowed' })
  // @ApiOperation({ summary: 'Create new user' })
  createUser(@Body() user: CreateUserDto) {
    console.log(user)
    return user
  }

  @Put()
  updateUser() {

  }

  @Patch(':userId/lock')
  // @ApiOkResponse({ description: 'Success lock user' })
  // @ApiUnauthorizedResponse({ description: 'Invalid Credentials' })
  // @ApiMethodNotAllowedResponse({ description: 'Method not allowed' })
  // @ApiOperation({ summary: 'Lock user to make user cannot login' })
  lockUser(@Param('userId') userId: string) {

  }

  @Patch(':userId/unlock')
  // @ApiOkResponse({ description: 'Success unlock user' })
  // @ApiUnauthorizedResponse({ description: 'Invalid Credentials' })
  // @ApiMethodNotAllowedResponse({ description: 'Method not allowed' })
  // @ApiOperation({ summary: 'Unlock user to make user can login' })
  unlockUser(@Param('userId') userId: string) {

  }

  @Patch(':userId/active')
  // @ApiOkResponse({ description: 'Success activate user' })
  // @ApiUnauthorizedResponse({ description: 'Invalid Credentials' })
  // @ApiMethodNotAllowedResponse({ description: 'Method not allowed' })
  // @ApiOperation({ summary: 'Activate user, active user can do a thing' })
  activateUser(@Param('userId') userId: string) {

  }

  @Patch(':userId/inactive')
  // @ApiOkResponse({ description: 'Success inactivate user' })
  // @ApiUnauthorizedResponse({ description: 'Invalid Credentials' })
  // @ApiMethodNotAllowedResponse({ description: 'Method not allowed' })
  // @ApiOperation({ summary: 'Inactivate user, inactive user cant do a thing' })
  inactivateUser(@Param('userId') userId: string) {

  }

}
