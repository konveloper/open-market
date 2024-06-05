import { axiosPrivate } from '../api';

const putCart = async ({ item, qty }) => {
  const cartItemId = item.cart_item_id;
  const isActive = item.is_active;
  const productId = item.product_id;
  const body = {
    product_id: productId,
    quantity: qty,
    is_active: isActive,
  };
  try {
    const res = await axiosPrivate.put(`/cart/${cartItemId}/`, body);
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

export default putCart;
