import { Sale } from 'src/sale/sale.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id_user: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
  // Relación OneToMany con Sales
  @OneToMany(() => Sale, (sale) => sale.user)
  sales: Sale[];
}
