// src/pedido/pedido.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './pedido.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
  ) {}

  findAll() {
    return this.pedidoRepository.find();
  }

  findOne(id: number) {
    return this.pedidoRepository.findOneBy({ id });
  }

  create(pedido: Pedido) {
    return this.pedidoRepository.save(pedido);
  }

  async update(id: number, pedido: Pedido) {
    await this.pedidoRepository.update(id, pedido);
    return this.pedidoRepository.findOneBy({ id });
  }
}
