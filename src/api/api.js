import axios from 'axios';

export const baseUrl = 'https://openmarket.weniv.co.kr/';

export const instance = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'application/json' },
});

export const imgInstance = axios.create({
  baseURL: baseUrl,
  headers: { 'Content-Type': 'multipart/form-data' },
});

export const axiosPrivate = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (!config.headers.Authorization) {
      config.headers = {
        ...config.headers,
        Authorization: `JWT ${token}`,
      };
    }

    return config;
  },
  (error) => Promise.reject(error)
);
