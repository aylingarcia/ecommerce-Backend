// src/venta/venta.controller.ts
import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { VentaService } from './venta.service';
import { Venta } from './venta.entity';

@Controller('ventas')
export class VentaController {
  constructor(private readonly ventaService: VentaService) {}

  @Get()
  findAll() {
    return this.ventaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ventaService.findOne(id);
  }

  @Post()
  create(@Body() venta: Venta) {
    return this.ventaService.create(venta);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() venta: Venta) {
    return this.ventaService.update(id, venta);
  }
}
