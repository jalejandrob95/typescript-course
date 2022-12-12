import { UpdateProductDto, CreateProductDto } from '../dtos/product.dto';
import { Product } from '../models/products.model';
import { ProductService } from './../models/product-service.model';
import axios from 'axios';

export class ProductHttpService implements ProductService {
  private url = 'https://api.escuelajs.co/api/v1/products';

  async getAll(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }
  async update(id: Product['id'], changes: UpdateProductDto): Promise<Product> {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
  async create(create: CreateProductDto): Promise<Product> {
    const { data } = await axios.post(this.url, create);
    return data;
  }
  async findOne(id: number) {
    const { data } = await axios.get(`${this.url}/${id}`);
    return data;
  }
}
