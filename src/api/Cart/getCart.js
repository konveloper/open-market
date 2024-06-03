import { axiosPrivate } from '../api';

const getCart = async () => {
  const res = await axiosPrivate.get('/cart/');
  return res.data;
};

export default getCart;
