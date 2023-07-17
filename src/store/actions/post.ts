import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createPostRequest,
  deletePostRequest,
  filteredPostsRequest,
  getPostByIdRequest,
  getPostRequest,
} from "../../api/posts";
import { PostData } from "../../types";
import { NavigateFunction } from "react-router";

export const postUser = createAsyncThunk(
  "post/user",
  async (
    data: PostData & { navigate: NavigateFunction; notify: any },
    { dispatch }
  ) => {
    try {
      await createPostRequest(data);
      dispatch(getPosts(data.userId as string));
      data.notify({
        type: "success",
        message: "Пост успешно добавлен",
        title: "Successfully",
      });
      return data.navigate("/user/post");
    } catch (error) {}
  }
);

export const getPosts = createAsyncThunk(
  "getposts/user",
  async (id: string) => {
    try {
      const response = await getPostRequest(id);
      return response;
    } catch (error) {}
  }
);

export const getPostById = createAsyncThunk("get/user", async (id: string) => {
  try {
    const response = await getPostByIdRequest(id);
    return response;
  } catch (error) {}
});

export const deletePost = createAsyncThunk(
  "filtered/user",
  async (
    data: { deleteId: string; userId: string; notify: any },
    { dispatch }
  ) => {
    try {
      const response = await deletePostRequest(data.deleteId);
      dispatch(getPosts(data.userId));
      data.notify({
        type: "success",
        message: "Пост успешно удален",
        title: "Successfully",
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
export const filteredPosts = createAsyncThunk(
  "delete/user",
  async (data: { title: string; userId: string }) => {
    console.log(data.userId);

    try {
      const response = await filteredPostsRequest(data.title, data.userId);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
