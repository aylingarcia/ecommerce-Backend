// src/pedido/pedido.controller.ts
import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Get()
  findAll() {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pedidoService.findOne(id);
  }

  @Post()
  create(@Body() pedido: Pedido) {
    return this.pedidoService.create(pedido);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() pedido: Pedido) {
    return this.pedidoService.update(id, pedido);
  }
}
