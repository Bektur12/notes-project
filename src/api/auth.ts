import axios from "axios";
import { SignUp } from "../types/types";

export const signUp = async (data: SignUp) => {
  const response = await axios.post(`auth/signup`, data);
  return response.data;
};
