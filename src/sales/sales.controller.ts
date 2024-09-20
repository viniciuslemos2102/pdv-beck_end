import { Controller, Post, Param, Body } from '@nestjs/common';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post(':id')
  async sellProduct(
    @Param('id') id: string,
    @Body('quantity') quantity: number,
  ) {
    return this.salesService.createSale(+id, quantity); // Usar 'createSale' em vez de 'sellProduct'
  }
}
