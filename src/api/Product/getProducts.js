import { instance } from 'api/api';

const getProducts = async () => {
  const res = await instance.get('/products/');
  console.log(res.data);
  return res.data;
};

export default getProducts;
