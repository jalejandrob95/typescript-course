import { ProductMemoryService } from './services/products.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'producto 1',
  price: 100,
  description: 'shirt',
  categoryId: 11,
  images: [],
});

const products = productService.getAll();
const productId = products[0].id;

productService.update(productId, { title: 'Nuevo Nombre' });

const rta = productService.findOne(productId);

console.log(rta);
