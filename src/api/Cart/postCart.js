import { axiosPrivate } from '../api';

const postCart = async (productId, qty) => {
  const body = {
    product_id: productId,
    quantity: qty,
    check: false,
  };
  const res = await axiosPrivate.post('/cart/', body);
  return res.data;
};

export default postCart;
