import axios from 'axios';
import { UpdateProductDto } from '../dtos/product.dto';
import { Category } from '../models/category.model';
import { Product } from '../models/products.model';

export class BaseHttpService<TypeClass> {
  //private data: TypeClass[] = [];
  constructor(private url: string) {}
  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url);
    return data;
  }
  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

//const service = new BaseHttpService<string>();
//const service1 = new BaseHttpService<number>();
(async () => {
  const url1 = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(url1);
  const rta = await productService.getAll();
  const updateProduct = await productService.update<
    Product['id'],
    UpdateProductDto
  >(1, { title: 'Genetics Types', price: 2222222 });
  console.log('products', updateProduct);
  const url2 = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(url2);
  const rta1 = await categoryService.getAll();
  console.log('categories', rta1.length);
})();
