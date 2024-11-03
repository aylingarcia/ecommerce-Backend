import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Invoice } from '../invoice/invoice.entity';
import { Product } from '../product/product.entity';
import { User } from '../user/user.entity';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id_sale: number;

  @ManyToOne(() => Invoice, (invoice) => invoice.sales, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_invoice' })
  invoice: Invoice;

  @ManyToOne(() => Product, (product) => product.sales, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_product' })
  product: Product;

  @ManyToOne(() => User, (user) => user.sales, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'id_user' })
  user: User;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  package_price: number;

  @Column({ type: 'enum', enum: ['water', 'soda', 'juice', 'beer', 'other'] })
  product_type: 'water' | 'soda' | 'juice' | 'beer' | 'other';
}
