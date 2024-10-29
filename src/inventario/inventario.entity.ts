// src/inventario/inventario.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Bebida } from '../bebida/bebida.entity';

@Entity()
export class Inventario {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Bebida)
  @JoinColumn()
  bebida: Bebida;

  @Column()
  stock_disponible: number;
}
