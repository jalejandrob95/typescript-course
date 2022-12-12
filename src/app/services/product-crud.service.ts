import { UpdateProductDto } from './../dtos/product.dto';
import { Product } from './../models/products.model';
import { BaseHttpService } from './base-http.service';
export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new BaseHttpService<Product>(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    // permisos
    //logica
    //TODO: implements singelton pattern
    return this.http.update(id, dto);
  }
}
