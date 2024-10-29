// src/pedido/pedido.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Admin } from '../admin/admin.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha_pedido: Date;

  @Column()
  estado: string;

  @ManyToOne(() => Admin, (admin) => admin.id)
  admin: Admin;
}
