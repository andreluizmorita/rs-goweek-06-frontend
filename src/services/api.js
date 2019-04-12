import axios from 'axios';

const api = axios.create({
  baseURL: `https://rs-goweek-06-backend.herokuapp.com`
});

export default api;
