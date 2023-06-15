import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createPostRequest,
  deletePostRequest,
  getPostRequest,
} from "../../api/posts";

export const postUser = createAsyncThunk("post/user", async (data: any) => {
  try {
    const response = await createPostRequest(data);

    console.log(response);
  } catch (error) {}
});

export const getPosts = createAsyncThunk("post/user", async () => {
  try {
    const response = await getPostRequest();

    return response;
  } catch (error) {}
});

export const deletePost = createAsyncThunk(
  "delete/user",
  async (id: string, { dispatch }) => {
    try {
      const response = await deletePostRequest(id);
      dispatch(getPosts());
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
