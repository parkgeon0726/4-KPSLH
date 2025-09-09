import axios from "axios";

const client = axios.create({
  baseURL: "https://api.example.com",  // 실제 API 엔드포인트로 변경
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

client.interceptors.response.use(
  (res) => res.data,
  (err) => Promise.reject(err.response || err)
);

export default client;

