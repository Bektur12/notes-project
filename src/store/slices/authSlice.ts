import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/auth";

const initialState = {
  id: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.id = action.payload;
    });
  },
});
