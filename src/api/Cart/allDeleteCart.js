import axios from 'axios';

const allDeleteCart = async () => {
  const baseUrl = 'https://openmarket.weniv.co.kr';
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `JWT ${token}`,
  };
  const res = await axios.delete(`${baseUrl}/cart/`, { headers });
  return res.data;
};

export default allDeleteCart;
