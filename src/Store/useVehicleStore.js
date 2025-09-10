// stores/vehicleStore.js
import { create } from "zustand";
import api from "../Utils/axiosInstance";

const useVehicleStore = create((set) => ({
  vehicles: [],
  vehicle: null,
  loading: false,
  error: null,
  pagination: { total: 0, page: 1, limit: 10, totalPages: 0 },

  // ✅ Fetch vehicles with filters & pagination
  fetchVehicles: async (params = {}) => {
    set({ loading: true, error: null });
    try {
      const res = await api.get("/vehicle", { params });
      set({
        vehicles: res.data.data,
        pagination: res.data.pagination,
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

  // ✅ Fetch vehicle by ID
  fetchVehicleById: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await api.get(`/vehicles/${id}`);
      set({ vehicle: res.data.data.vehicle, loading: false });
      return res.data.data.vehicle;
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || err.message,
      });
      throw err;
    }
  },

  // ✅ Add new vehicle (with form-data for images)
  addVehicle: async (data) => {
    set({ loading: true, error: null });
    try {
      const res = await api.post("/vehicles", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      set((state) => ({
        vehicles: [...state.vehicles, res.data.data.vehicle],
        loading: false,
      }));
      return res.data.data.vehicle;
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || err.message,
      });
      throw err;
    }
  },

  // ✅ Update vehicle by ID (with form-data for images)
  updateVehicle: async (id, data) => {
    set({ loading: true, error: null });
    try {
      const res = await api.put(`/vehicles/${id}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      set((state) => ({
        vehicles: state.vehicles.map((v) =>
          v._id === id ? res.data.data.vehicle : v
        ),
        vehicle: res.data.data.vehicle,
        loading: false,
      }));
      return res.data.data.vehicle;
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || err.message,
      });
      throw err;
    }
  },

  // ✅ Delete vehicle
  deleteVehicle: async (id) => {
    set({ loading: true, error: null });
    try {
      await api.delete(`/vehicles/${id}`);
      set((state) => ({
        vehicles: state.vehicles.filter((v) => v._id !== id),
        loading: false,
      }));
      return true;
    } catch (err) {
      set({
        loading: false,
        error: err.response?.data?.message || err.message,
      });
      throw err;
    }
  },
}));

export default useVehicleStore;
