// src/admin/admin.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('admins')
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  email: string;

  @Column()
  contraseña: string;
}
