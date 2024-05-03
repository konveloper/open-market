import axios from 'axios';

const putCart = async ({ item, qty }) => {
  const cartItemId = item.cart_item_id;
  const isActive = item.is_active;
  const productId = item.product_id;
  const baseUrl = 'https://openmarket.weniv.co.kr';
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `JWT ${token}`,
  };
  const body = {
    product_id: productId,
    quantity: qty,
    is_active: isActive,
  };
  const res = await axios.put(`${baseUrl}/cart/${cartItemId}/`, body, {
    headers,
  });
  return res.data;
};

export default putCart;
