import axios from 'axios';

const postCart = async (productId, qty) => {
  const baseUrl = 'https://openmarket.weniv.co.kr';
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `JWT ${token}`,
  };
  const body = {
    product_id: productId,
    quantity: qty,
    check: false,
  };
  const res = await axios.post(`${baseUrl}/cart/`, body, { headers });
  return res.data;
};

export default postCart;
