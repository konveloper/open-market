import axios from 'axios';

const getCart = async () => {
  const baseUrl = 'https://openmarket.weniv.co.kr';
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `JWT ${token}`,
  };
  const res = await axios.get(`${baseUrl}/cart/`, { headers });
  return res.data;
};

export default getCart;
