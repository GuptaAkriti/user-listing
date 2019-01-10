import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'test',
  headers: { },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  error => Promise.reject(error),
);

export const getRequest = url => axiosInstance.get(url);

export default axiosInstance;
