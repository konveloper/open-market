import { axiosPrivate } from '../api';

const deleteCart = async ({ item }) => {
  const cartItemId = item.cart_item_id;
  try {
    const res = await axiosPrivate.delete(`/cart/${cartItemId}`);
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

export default deleteCart;
