import { Sale } from 'src/sale/sale.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('invoice')
export class Invoice {
  @PrimaryGeneratedColumn()
  id_invoice: number;
  @Column()
  name_distributor: string;
  @Column()
  phone: string;
  @Column()
  date_sale: Date;
  @Column()
  name_client: string;
  @Column('float')
  total: number;
  // Relación OneToMany con Sales
  @OneToMany(() => Sale, (sale) => sale.invoice)
  sales: Sale[];
}
