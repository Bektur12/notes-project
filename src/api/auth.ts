import axios from "axios";
import { IuserData } from "../types";
import { BASE_URL } from ".";

export const autorizeUser = async (data: IuserData, path: string) => {
  const response = await axios.post(`${BASE_URL}/auth/${path}`, data);
  console.log(response, "response");

  return response.data;
};
