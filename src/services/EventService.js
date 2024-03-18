import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  suggest(query) {
    return apiClient.get("/suggest?query=" + query);
  },
  searchAll(query) {
    return apiClient.get("/search?query=" + query);
  },
};
