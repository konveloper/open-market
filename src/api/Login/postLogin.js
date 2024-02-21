import { instance } from 'api/api';

const postLogin = async (formData) => {
  const res = await instance.post('/accounts/login/', formData);
  return res.data;
};

export default postLogin;
