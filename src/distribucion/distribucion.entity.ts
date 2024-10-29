// src/distribucion/distribucion.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Venta } from '../venta/venta.entity';

@Entity()
export class Distribucion {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Venta)
  @JoinColumn()
  venta: Venta;

  @Column()
  fecha_entrega: Date;

  @Column()
  estado_entrega: string;
}
