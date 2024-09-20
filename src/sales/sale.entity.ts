import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from '../products/product.entity';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product)
  product: Product;

  @Column('int')
  quantity: number;

  @Column('decimal', { precision: 10, scale: 2 })
  totalPrice: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
