import { createAsyncThunk } from "@reduxjs/toolkit";
import { autorizeUser } from "../../api/auth";
import { IuserData } from "../../types";
import { baseAuth } from "../slices/authSlice";

export const registerUser = createAsyncThunk(
  "register/user",
  async (formData: IuserData, { dispatch }) => {
    try {
      const { navigate } = formData;
      const response = await autorizeUser(formData, "signup");
      if (response && navigate) {
        localStorage.setItem("AUTH", JSON.stringify(response));
        dispatch(
          baseAuth({
            id: response.id,
            username: response.username,
          })
        );
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
  async (formData: IuserData, { dispatch }) => {
    try {
      const { navigate } = formData;
      const response = await autorizeUser(formData, "signin");

      if (response && navigate) {
        localStorage.setItem("AUTH", JSON.stringify(response));
        dispatch(
          baseAuth({
            id: response.id,
            username: response.username,
          })
        );
        return navigate("/user/post");
      }
    } catch (error) {
      throw error;
    }
  }
);
