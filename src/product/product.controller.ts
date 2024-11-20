import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product, ProductType } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // Obtener todos los productos
  @Get()
  async findAll(): Promise<Product[]> {
    return await this.productService.findAll();
  }

  // Obtener un producto por ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    return await this.productService.findOne(id);
  }

  // Crear un nuevo producto
  @Post()
  async create(
    @Body()
    productData: {
      nameProduct: string;
      image: string;
      brand: string;
      amount: number;
      expiration_date: Date;
      package_price: number;
      type_product: ProductType;
    },
  ): Promise<Product> {
    return await this.productService.create(productData);
  }

  // Actualizar un producto
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() productData: Partial<Product>,
  ): Promise<Product> {
    return await this.productService.update(id, productData);
  }

  // Eliminar un producto
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.productService.remove(id);
  }
}
