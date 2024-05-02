import { instance } from 'api/api';

const getProducts = async () => {
  const res = await instance.get('/products/');
  return res.data;
};

export default getProducts;
