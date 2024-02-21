import { instance } from 'api/api';

const postUsernameIsValid = async (formData) => {
  const res = await instance.post('/accounts/signup/valid/username/', formData);
  return res.data;
};

export default postUsernameIsValid;
