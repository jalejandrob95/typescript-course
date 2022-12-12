import axios from 'axios';

(async () => {
  function delay(time: number) {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  }

  async function getProducts() {
    const response = await axios.get(
      'https://api.escuelajs.co/api/v1/products'
    );
    return response.data;
  }
  console.log(`----`);
  const rta = await delay(4000);
  console.log(rta);

  const products = await getProducts();
  console.log(products);
})();
