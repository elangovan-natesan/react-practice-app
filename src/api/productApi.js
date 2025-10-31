// src/api/productApi.js
import api from "./axiosInstance";

export const getProducts = () => api.get("/products");
export const getProductById = (id) => api.get(`/products/${id}`);
