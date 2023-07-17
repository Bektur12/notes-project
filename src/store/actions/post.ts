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
import axios from "axios";
import { BASE_URL } from "../../api";

export const postUser = createAsyncThunk(
  "post/user",
  async (
    data: PostData & { navigate: NavigateFunction; notify: any },
    { dispatch }
  ) => {
    try {
      await createPostRequest(data);
      dispatch(getPosts(data.userId as any));
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
  "posts/getPosts",
  async ({ id, page }: { id: any; page: any }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/users/${id}/posts?page=${page}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch posts");
    }
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
      dispatch(getPosts(data.userId as any));
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
