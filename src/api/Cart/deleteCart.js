import { axiosPrivate } from '../api';

const deleteCart = async ({ item }) => {
  const cartItemId = item.cart_item_id;
  const res = await axiosPrivate.delete(`/cart/${cartItemId}`);
  return res.data;
};

export default deleteCart;
