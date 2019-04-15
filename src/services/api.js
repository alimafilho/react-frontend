import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dropbackend.herokuapp.com'
})

export default api;