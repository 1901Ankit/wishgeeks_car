// stores/authStore.js
import { create } from "zustand";
import api from "../Utils/axiosInstance";

const useAuthStore = create((set) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: null,

  register: async (data) => {
    set({ loading: true, error: null });
    try {
      const res = await api.post("/user/register", data);
      set({ loading: false });
      return res.data;
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || err.message,
      });
      throw err;
    }
  },

  verifyRegistrationOtp: async (email, otp) => {
    set({ loading: true, error: null });
    try {
      const res = await api.post("/user/verify", { email, otp });
      set({ loading: false });
      return res.data;
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || err.message,
      });
      throw err;
    }
  },

  login: async (data) => {
    set({ loading: true, error: null });
    try {
      const res = await api.post("/user/login", data);
      set({
        user: res.data.data.user,
        accessToken: res.data.data.accessToken,
        refreshToken: res.data.data.refreshToken,
        loading: false,
      });
      return res.data;
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || err.message,
      });
      throw err;
    }
  },

  logout: async () => {
    try {
      await api.post("/auth/logout");
    } catch (err) {
      console.error(err);
    } finally {
      set({ user: null, accessToken: null, refreshToken: null });
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
  },

  fetchProfile: async () => {
    set({ loading: true, error: null });
    try {
      const res = await api.get("/auth/profile");
      set({ user: res.data.data, loading: false });
      return res.data;
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || err.message,
      });
      throw err;
    }
  },

  updateProfile: async (data) => {
    set({ loading: true, error: null });
    try {
      const res = await api.put("/auth/profile", data);
      set({ user: res.data.data, loading: false });
      return res.data;
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || err.message,
      });
      throw err;
    }
  },

  forgotPassword: async (email) => {
    set({ loading: true, error: null });
    try {
      const res = await api.post("/user/forgot-password", { email });
      set({ loading: false });
      return res.data;
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || err.message,
      });
      throw err;
    }
  },

  resetPassword: async (id, token, newPassword) => {
    set({ loading: true, error: null });
    try {
      const res = await api.post(
        `/user/reset-password/${id}/${token}`,
        { password: newPassword }
      );
      set({ loading: false });
      return res.data;
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || err.message,
      });
      throw err;
    }
  },

  changePassword: async (currentPassword, newPassword) => {
    set({ loading: true, error: null });
    try {
      const res = await api.post("/auth/change-password", {
        currentPassword,
        newPassword,
      });
      set({ loading: false });
      return res.data;
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || err.message,
      });
      throw err;
    }
  },
}));

export default useAuthStore;
