// api/axiosInstance.js
import axios from "axios";
import { Baseurl } from "./confige";

const API_BASE = Baseurl; // change this to your backend

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add access token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken"); // optional if you persist token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
