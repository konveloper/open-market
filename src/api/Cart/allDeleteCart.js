import { axiosPrivate } from '../api';

const allDeleteCart = async () => {
  const res = await axiosPrivate.delete('/cart/');
  return res.data;
};

export default allDeleteCart;
