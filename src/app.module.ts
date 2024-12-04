// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

// Importar entidades
import { User } from './user/user.entity';
import { Product } from './product/product.entity';
import { Sale } from './sale/sale.entity';
import { Invoice } from './invoice/invoice.entity';

// Importar módulos

import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { SaleModule } from './sale/sale.module';
import { InvoiceModule } from './invoice/bill.module';

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
      entities: [User, Product, Sale, Invoice],
      synchronize: false, // Desactivar en producción para que no haya cambio de la bd en entity
      dropSchema: false, //para que no se borre los datos hay que ponerlo en fale
    }),

    // Módulos de las entidades
    TypeOrmModule.forFeature([User, Product, Sale, Invoice]),

    UserModule,
    ProductModule,
    SaleModule,
    InvoiceModule,
  ],
})
export class AppModule {}
