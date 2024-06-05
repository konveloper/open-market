import { axiosPrivate } from '../api';

const postCart = async (productId, qty) => {
  const body = {
    product_id: productId,
    quantity: qty,
    check: false,
  };
  try {
    const res = await axiosPrivate.post('/cart/', body);
    return res.data;
  } catch (err) {
    if (err.response) {
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);
    } else if (err.request) {
      console.log(err.request);
    } else {
      console.log(`Error: ${err.message}`);
    }
  }
};

export default postCart;
