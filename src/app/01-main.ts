import axios from 'axios';
import { Product } from './models/products.model';

(async () => {
  async function getProducts(): Promise<Product[]> {
    const response = await axios.get<Product[]>( //axios allow type
      'https://api.escuelajs.co/api/v1/products'
    );
    return response.data;
  }
  const products = await getProducts();
  console.log(
    products.map((item) => `Item Id: ${item.id}, Item title: ${item.title}`)
  );
})();
