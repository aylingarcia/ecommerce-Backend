// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

// Importar entidades
import { Admin } from './admin/admin.entity';
import { Bebida } from './bebida/bebida.entity';
import { Pedido } from './pedido/pedido.entity';
import { DetallePedido } from './detalle-pedido/detalle-pedido.entity';
import { Venta } from './venta/venta.entity';
import { Distribucion } from './distribucion/distribucion.entity';
import { Inventario } from './inventario/inventario.entity';

// Importar módulos
import { AdminModule } from './admin/admin.module';
import { BebidaModule } from './bebida/bebida.module';
import { PedidoModule } from './pedido/pedido.module';
import { VentaModule } from './venta/venta.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Variables de entorno

    // Configuración de conexión con PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [
        Admin,
        Bebida,
        Pedido,
        DetallePedido,
        Venta,
        Distribucion,
        Inventario,
      ],
      synchronize: true, // Desactivar en producción
      dropSchema: true,
    }),

    // Módulos de las entidades
    TypeOrmModule.forFeature([
      Admin,
      Bebida,
      Pedido,
      DetallePedido,
      Venta,
      Distribucion,
      Inventario,
    ]),
    AdminModule,
    BebidaModule,
    PedidoModule,
    VentaModule,
  ],
})
export class AppModule {}
