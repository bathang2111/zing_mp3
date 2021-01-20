import axios from "axios";
import { REACT_APP_BASE_URL } from "../constants/routers";
const axiosClien = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

axiosClien.interceptors.request.use(async (congig) => {
  return congig;
});

axiosClien.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    throw error;
  }
);

export default axiosClien;
