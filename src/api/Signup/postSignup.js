import { instance } from 'api/api';

const postSignup = async (formData) => {
  console.log(formData);
  const res = await instance.post('/accounts/signup/', formData);
  return res.data;
};

export default postSignup;
