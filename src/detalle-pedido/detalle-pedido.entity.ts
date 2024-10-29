// src/detalle-pedido/detalle-pedido.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pedido } from '../pedido/pedido.entity';
import { Bebida } from '../bebida/bebida.entity';

@Entity()
export class DetallePedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido)
  pedido: Pedido;

  @ManyToOne(() => Bebida)
  bebida: Bebida;

  @Column()
  cantidad: number;

  @Column('decimal')
  subtotal: number;
}
