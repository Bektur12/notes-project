import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/auth";

const initialState = {
  user: {
    id: "",
    username: "",
  },
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    baseAuth(state, action) {
      const user = action.payload;
      state.user.id = user.id;
      state.user.username = user.firstName;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // state.id = action.payload;
    });
  },
});
export const { baseAuth } = authSlice.actions;
export default authSlice;
