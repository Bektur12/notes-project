import { createAsyncThunk } from "@reduxjs/toolkit";
import { authorization } from "../../api/auth";
import { IuserData } from "../../types";

export const registerActions = createAsyncThunk(
  "name",
  async (data: IuserData) => {
    try {
      const response = await authorization(data, "signup");
      console.log(response, "response");
    } catch (error) {
      console.log(error, "error");
    }
  }
);
export const loginActions = createAsyncThunk(
  "login",
  async (data: IuserData) => {
    console.log(data, "data");

    try {
      const response = await authorization(data, "signin");
      console.log(response, "response");
    } catch (error) {
      console.log(error);
    }
  }
);
