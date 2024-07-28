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
    return await client.post("/open-api/user/register", payload);
  } catch (error) {
    console.error("회원가입 실패:", error);
  }
};
