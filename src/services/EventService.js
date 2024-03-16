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
  searchByName(query) {
    return apiClient.get("/name?query=" + query);
  },
  searchByIngredient(query) {
    return apiClient.get("/ingredient?query=" + query);
  },
  searchByProcess(query) {
    return apiClient.get("/process?query=" + query);
  },
  findById(id) {
    return apiClient.get("/find?id=" + id);
  },
};
