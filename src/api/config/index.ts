import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_BEARER}`,
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    const msg = err?.response?.data?.status_message || err.message || "Erro de rede";
    return Promise.reject(new Error(msg));
  }
);
