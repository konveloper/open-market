import { axiosPrivate } from '../api';

const getCart = async () => {
  try {
    const res = await axiosPrivate.get('/cart/');
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

export default getCart;
