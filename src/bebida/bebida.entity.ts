// src/bebida/bebida.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Bebida {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  tipo: string;

  @Column()
  marca: string;

  @Column('decimal')
  precio_unitario: number;

  @Column('decimal')
  precio_paquete: number;
}
