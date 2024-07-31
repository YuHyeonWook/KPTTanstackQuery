import { client } from "./apiConfig";

/**
 * 회원가입
 * @param payload {email, name, phone_number, password}
 */
export const registerUser = async (payload: {
  email: string;
  name: string;
  phone_number: string;
  password: string;
}): Promise<any> => {
  try {
    const response = await client.post("/open-api/user/register", payload);
    return response.data;
  } catch (error) {
    console.error("회원가입 실패:", error);
  }
};

/**
 * 로그인
 * @param payload {email, password}
 * @returns
 */
export const loginUser = async (payload: {
  email: string;
  password: string;
}) => {
  try {
    const response = await client.post("/open-api/user/login", payload);
    return response.data.data;
  } catch (error) {
    console.error("로그인 실패:", error);
  }
};
