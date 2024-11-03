import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Invoice } from './invoice.entity';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  async findAll(): Promise<Invoice[]> {
    return await this.invoiceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Invoice> {
    return await this.invoiceService.findOne(id);
  }

  @Post()
  async create(@Body() invoiceData: Partial<Invoice>): Promise<Invoice> {
    return await this.invoiceService.create(invoiceData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateData: Partial<Invoice>,
  ): Promise<Invoice> {
    return await this.invoiceService.update(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return await this.invoiceService.remove(id);
  }
}
