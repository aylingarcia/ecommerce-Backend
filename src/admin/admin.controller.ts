// src/admin/admin.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { Admin } from './admin.entity';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.adminService.findOne(id);
  }

  @Post()
  create(@Body() admin: Admin) {
    return this.adminService.create(admin);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() admin: Admin) {
    return this.adminService.update(id, admin);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.adminService.remove(id);
  }
}
