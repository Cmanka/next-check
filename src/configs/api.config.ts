import axios from 'axios';

export const API_URL = 'https://my-json-server.typicode.com/Cmanka/json-portfolios';

export const api = axios.create({
  baseURL: API_URL,
});
