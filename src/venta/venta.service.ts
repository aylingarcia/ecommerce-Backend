// src/venta/venta.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Venta } from './venta.entity';

@Injectable()
export class VentaService {
  constructor(
    @InjectRepository(Venta)
    private readonly ventaRepository: Repository<Venta>,
  ) {}

  findAll() {
    return this.ventaRepository.find();
  }

  findOne(id: number) {
    return this.ventaRepository.findOneBy({ id });
  }

  create(venta: Venta) {
    return this.ventaRepository.save(venta);
  }

  async update(id: number, venta: Venta) {
    await this.ventaRepository.update(id, venta);
    return this.ventaRepository.findOneBy({ id });
  }
}
