import axios from "axios";
import { IuserData } from "../types";
import { BASE_URL } from ".";

export const autorizeUser = async (data: IuserData) => {
  const response = await axios.post(`${BASE_URL}/user/post`, data);
  return response.data;
};
