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

interface GetPostsOptions {
  userId: string;
  page: number;
  limit: number;
}

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
  "getposts/user",
  async ({ userId, page, limit }: GetPostsOptions) => {
    try {
      const response = await getPostRequest(userId, page, limit);
      return response;
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
  "delete/user",
  async (
    data: {
      deleteId: string;
      userId: string;
      notify: any;
      page: number;
      limit: number;
    },

    { dispatch }
  ) => {
    try {
      const { deleteId, limit, page, userId } = data;

      const response = await deletePostRequest(deleteId);

      dispatch(getPosts({ limit, page, userId }));
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
  "filtered/user",
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
