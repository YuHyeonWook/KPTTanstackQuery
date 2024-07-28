import axios from "axios";

/**
 * axios 인스턴스 생성
 */
export const client = axios.create({
  baseURL: "http://ec2-43-203-40-90.ap-northeast-2.compute.amazonaws.com/",
});

// client.interceptors.request.use((config) => {});
