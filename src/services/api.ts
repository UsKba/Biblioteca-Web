import axios from 'axios';

const api = axios.create({
  baseURL: 'https://smart-library-api-2.herokuapp.com/',
});

export default api;
