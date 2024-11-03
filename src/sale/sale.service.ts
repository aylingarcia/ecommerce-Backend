import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './sale.entity';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private saleRepository: Repository<Sale>,
  ) {}

  async create(data: Partial<Sale>): Promise<Sale> {
    // Crea una instancia de Sale con datos parciales
    const sale = this.saleRepository.create(data);
    return await this.saleRepository.save(sale);
  }

  async findAll(): Promise<Sale[]> {
    return await this.saleRepository.find({
      relations: ['invoice', 'product', 'user'],
    });
  }

  async findOne(id: number): Promise<Sale> {
    const sale = await this.saleRepository.findOne({
      where: { id_sale: id },
      relations: ['invoice', 'product', 'user'],
    });
    if (!sale) throw new NotFoundException(`Sale with ID ${id} not found`);
    return sale;
  }

  async remove(id: number): Promise<void> {
    await this.saleRepository.delete(id);
  }
}
