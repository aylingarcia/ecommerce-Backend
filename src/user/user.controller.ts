import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  finAll() {
    return this.userService.findAll();
  }

  @Get(':id_user')
  findOne(@Param('id_user') id_user: number) {
    return this.userService.findOne(id_user);
  }

  @Post()
  async create(@Body() user: User) {
    return await this.userService.create(user);
  }

  @Put(':id_user')
  update(@Param('id_user') id_user: number, @Body() user: User) {
    return this.userService.update(id_user, user);
  }
}
