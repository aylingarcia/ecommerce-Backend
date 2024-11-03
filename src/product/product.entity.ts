import { Sale } from 'src/sale/sale.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum ProductType {
  AGUA = 'agua',
  SODA = 'soda',
  JUGO = 'jugo',
  CERVEZA = 'cerveza',
  OTROS = 'otros',
}

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id_product: number;

  @Column()
  nameProduct: string;

  @Column()
  image: string;

  @Column()
  brand: string;

  @Column()
  amount: number;

  @Column()
  expiration_date: Date;

  @Column('float')
  package_price: number;

  @Column({
    type: 'enum',
    enum: ProductType,
  })
  type_product: ProductType;
  // Relación OneToMany con Sales
  @OneToMany(() => Sale, (sale) => sale.product)
  sales: Sale[];
}
