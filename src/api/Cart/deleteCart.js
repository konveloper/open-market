import axios from 'axios';

const deleteCart = async ({ item }) => {
  const cartItemId = item.cart_item_id;
  const baseUrl = 'https://openmarket.weniv.co.kr';
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `JWT ${token}`,
  };

  const res = await axios.delete(`${baseUrl}/cart/${cartItemId}`, { headers });
  return res.data;
};

export default deleteCart;
