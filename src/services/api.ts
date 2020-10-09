import axios from 'axios';

const api = axios.create({
  baseURL: 'https://smart-library-6.herokuapp.com/',
});

export default api;
