import axios from 'axios';

const api = axios.create({
  baseURL: 'https://smart-library-3.herokuapp.com/',
});

export default api;
