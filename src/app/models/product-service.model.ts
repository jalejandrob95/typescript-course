import { UpdateProductDto, CreateProductDto } from './../dtos/product.dto';
import { Product } from './products.model';

export interface ProductService {
  getAll(): Product[] | Promise<Product[]>;
  update(
    id: Product['id'],
    changes: UpdateProductDto
  ): Product | Promise<Product>;
  create(create: CreateProductDto): Product | Promise<Product>;
  findOne(
    id: Product['id']
  ): Product | undefined | Promise<Product | undefined>;
}
