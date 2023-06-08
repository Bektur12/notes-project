import axios from "axios";
import { PostData } from "../types";
import { BASE_URL } from ".";

export const createPostRequest = async (data: PostData) => {
  const response = await axios.post(`${BASE_URL}/user/posts`, data);
  return response.data;
};

export const updatePostRequest = async (data: PostData) => {
  const response = await axios.put(`${BASE_URL}/user/posts/${data.id}`, data);
  return response.data;
};

export const deletePostRequest = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/user/posts/${id}`);
  return response.data;
};
export const getPostRequest = async () => {
  const response = await axios.get(`${BASE_URL}/user/posts`);
  return response.data;
};
