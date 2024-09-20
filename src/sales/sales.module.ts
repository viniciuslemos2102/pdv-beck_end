import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesService } from './sales.service';
import { SalesController } from './sales.controller';
import { Sale } from './sale.entity';
import { ProductsModule } from '../products/products.module';  // Importar ProductsModule

@Module({
  imports: [TypeOrmModule.forFeature([Sale]), ProductsModule],  // Importar ProductsModule aqui
  providers: [SalesService],
  controllers: [SalesController],
})
export class SalesModule {}
