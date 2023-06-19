import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createPostRequest,
  deletePostRequest,
  getPostRequest,
} from "../../api/posts";
import { PostData } from "../../types";
import { NavigateFunction } from "react-router";

export const postUser = createAsyncThunk(
  "post/user",
  async (data: PostData & { navigate: NavigateFunction }, { dispatch }) => {
    try {
      await createPostRequest(data);
      dispatch(getPosts(data.userId as string));
      return data.navigate("/user/post");
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
  async (data: { deleteId: string; userId: string }, { dispatch }) => {
    try {
      const response = await deletePostRequest(data.deleteId);
      dispatch(getPosts(data.userId));
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
