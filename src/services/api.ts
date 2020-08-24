import axios from 'axios';

const api = axios.create({
  baseURL: 'https://test-kadu-bakend.herokuapp.com/',
});

export default api;
