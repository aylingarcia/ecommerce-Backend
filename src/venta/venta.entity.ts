// src/venta/venta.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pedido } from '../pedido/pedido.entity';
import { Admin } from '../admin/admin.entity';

@Entity()
export class Venta {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido)
  pedido: Pedido;

  @Column()
  fecha_venta: Date;

  @Column()
  nombre_cliente: string;

  @Column('decimal')
  monto_total: number;

  @ManyToOne(() => Admin)
  admin: Admin;
}
