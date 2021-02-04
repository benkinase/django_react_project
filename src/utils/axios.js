import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

// create an axios instance
export const axiosAPI = axios.create({
  baseURL: `${API_URL}`,
  timeout: 12000,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});
