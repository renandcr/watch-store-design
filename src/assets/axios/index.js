import axios from "axios";

const api = axios.create({
  baseURL: `https://watch-store-2-api-production.up.railway.app/watch_store`,
});

export default api;
