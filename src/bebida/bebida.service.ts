// src/bebida/bebida.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bebida } from './bebida.entity';

@Injectable()
export class BebidaService {
  constructor(
    @InjectRepository(Bebida)
    private readonly bebidaRepository: Repository<Bebida>,
  ) {}

  findAll() {
    return this.bebidaRepository.find();
  }

  findOne(id: number) {
    return this.bebidaRepository.findOneBy({ id });
  }

  create(bebida: Bebida) {
    return this.bebidaRepository.save(bebida);
  }

  async update(id: number, bebida: Bebida) {
    await this.bebidaRepository.update(id, bebida);
    return this.bebidaRepository.findOneBy({ id });
  }
}
