import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../actions/post";
import { PostData } from "../../types";

type State = {
  posts: PostData[];
};
const initialState: State = {
  posts: [],
};
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
    builder.addCase(getPosts.rejected, (state, action) => {});
  },
});
