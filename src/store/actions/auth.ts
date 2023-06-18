import { createAsyncThunk } from "@reduxjs/toolkit";
import { autorizeUser } from "../../api/auth";
import { IuserData } from "../../types";

export const registerUser = createAsyncThunk(
  "register/user",
  async (formData: IuserData) => {
    try {
      const { navigate } = formData;
      const response = await autorizeUser(formData, "signup");
      if (response && navigate) {
        return navigate("/sign-in");
      }
    } catch (error) {
      console.log(error, "error");
      throw error;
    }
  }
);
export const loginUser = createAsyncThunk(
  "login/user",
  async (formData: IuserData) => {
    try {
      const { navigate } = formData;
      const response = await autorizeUser(formData, "signin");

      if (response && navigate) {
        navigate("/user/post");
        return response.id;
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
