import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createPostRequest,
  deletePostRequest,
  getPostRequest,
} from "../../api/posts";

export const postUser = createAsyncThunk(
  "post/user",
  async (data: any, { dispatch }) => {
    try {
      const response = await createPostRequest(data);
      dispatch(getPosts(data.userId));
      console.log(response);
    } catch (error) {}
  }
);

export const getPosts = createAsyncThunk("post/user", async (id: string) => {
  try {
    const response = await getPostRequest(id);

    return response;
  } catch (error) {}
});

export const deletePost = createAsyncThunk(
  "delete/user",
  async (data: any, { dispatch }) => {
    try {
      const response = await deletePostRequest(data.deleteId);
      dispatch(getPosts(data.userId));
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
