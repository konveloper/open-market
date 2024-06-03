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
  const res = await axiosPrivate.put(`/cart/${cartItemId}/`, body);
  return res.data;
};

export default putCart;
