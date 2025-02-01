// api/api.js
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com'; // Replace with your backend API URL

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response;
};

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};