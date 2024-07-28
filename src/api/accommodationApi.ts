import { client } from "./apiConfig";

export const getAccommodation = async (): Promise<any> => {
  try {
    return await client.get("/open-api/accommodation");
  } catch (error) {
    console.error(error);
  }
};
