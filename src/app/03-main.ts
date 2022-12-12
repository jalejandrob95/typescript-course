import { ProductHttpService } from './services/product-http.service';

(async () => {
  try {
    const productService = new ProductHttpService();

    const products = await productService.getAll();
    console.log(products.length);
    console.log(products.map((find) => find.price));
    const productId = products[0].id;

    await productService.update(productId, {
      title: 'Nuevo Nombre',
      price: 2000000000,
      description: 'nueva actualización',
    });

    const rta = await productService.findOne(productId);
    console.log(rta);
  } catch (error) {
    console.log(error);
  }
})();
