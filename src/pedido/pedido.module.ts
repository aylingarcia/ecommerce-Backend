import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './pedido.entity';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido])],
  providers: [PedidoService],
  controllers: [PedidoController],
})
export class PedidoModule {}
