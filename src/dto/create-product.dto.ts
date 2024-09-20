import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'O nome do produto é obrigatório.' })
  name: string;

  @IsNumber()
  @Min(0, { message: 'O preço deve ser maior ou igual a 0.' })
  price: number;

  @IsNumber()
  @Min(0, { message: 'O estoque deve ser maior ou igual a 0.' })
  stock: number;
}
