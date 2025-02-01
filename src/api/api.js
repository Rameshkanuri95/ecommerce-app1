// api/api.js
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com'; // Replace with your backend API URL

export const registerUser = async (email, password, username) => {
  const response = await axios.post(`${API_URL}/auth/register`, {
    email,
    password,
    username,
  });
  return response;
};

export const loginUser = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response;
};

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const fetchProduct = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};