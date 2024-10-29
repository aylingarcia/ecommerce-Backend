// src/bebida/bebida.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bebida } from './bebida.entity';
import { BebidaService } from './bebida.service';
import { BebidaController } from './bebida.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Bebida])],
  providers: [BebidaService],
  controllers: [BebidaController],
})
export class BebidaModule {}
