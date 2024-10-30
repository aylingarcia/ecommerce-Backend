// src/bebida/bebida.controller.ts
import { Controller, Get, Post, Put, Body, Param } from '@nestjs/common';
import { BebidaService } from './bebida.service';
import { Bebida } from './bebida.entity';

@Controller('bebidas')
export class BebidaController {
  constructor(private readonly bebidaService: BebidaService) {}

  @Get()
  findAll() {
    return this.bebidaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bebidaService.findOne(id);
  }

  @Post()
  async create(@Body() bebida: Bebida) {
    try {
      return await this.bebidaService.create(bebida);
    } catch (error) {
      console.error('Error al crear la bebida:', error);
    }
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() bebida: Bebida) {
    return this.bebidaService.update(id, bebida);
  }
}
