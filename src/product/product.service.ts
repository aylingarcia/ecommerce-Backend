import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product, ProductType } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // Obtener todos los productos
  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  // Obtener un producto por ID
  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id_product: id },
    });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  // Crear un nuevo producto
  async create(productData: {
    nameProduct: string;
    brand: string;
    amount: number;
    expiration_date: Date;
    package_price: number;
    type_product: ProductType;
  }): Promise<Product> {
    const product = this.productRepository.create(productData);
    return await this.productRepository.save(product);
  }

  // Actualizar un producto
  async update(id: number, productData: Partial<Product>): Promise<Product> {
    await this.productRepository.update(id, productData);
    const updatedProduct = await this.findOne(id);
    if (!updatedProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return updatedProduct;
  }

  // Eliminar un producto
  async remove(id: number): Promise<void> {
    const result = await this.productRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }
}
