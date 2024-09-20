import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './sale.entity';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/product.entity';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sale)
    private salesRepository: Repository<Sale>,
    private productsService: ProductsService,  // Injetar o serviço de produtos
  ) {}

  async createSale(productId: number, quantity: number): Promise<Sale> {
    const product = await this.productsService.findOne(productId);
    if (!product) {
      throw new Error('Produto não encontrado');
    }

    if (product.stock < quantity) {
      throw new Error('Estoque insuficiente');
    }

    const totalPrice = product.price * quantity;

    // Atualizar o estoque do produto
    await this.productsService.updateStock(productId, quantity);

    const sale = this.salesRepository.create({
      product,
      quantity,
      totalPrice,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return this.salesRepository.save(sale);
  }

  findAll(): Promise<Sale[]> {
    return this.salesRepository.find({ relations: ['product'] });
  }
}
