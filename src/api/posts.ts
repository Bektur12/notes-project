import axios from "axios";
import { PostData } from "../types";
import { BASE_URL } from ".";

export interface PaginationResponse {
  posts: PostData[];
  total: number;
}
export const createPostRequest = async (data: PostData) => {
  const response = await axios.post(`${BASE_URL}/posts`, data);
  return response.data;
};

export const updatePostRequest = async (data: PostData) => {
  const response = await axios.put(`${BASE_URL}/posts/${data.id}`, data);
  return response.data;
};

export const deletePostRequest = async (id: string) => {
  const response = await axios.delete(`${BASE_URL}/posts/${id}`);
  return response.data;
};
export const getPostRequest = async (
  id: string,
  page: number,
  limit: number
): Promise<PaginationResponse> => {
  const response = await axios.get<PaginationResponse>(
    `${BASE_URL}/users/${id}/posts`,
    {
      params: {
        page,
        limit,
      },
    }
  );
  return response.data;
};
export const getPostByIdRequest = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/posts/${id}`);
  return response.data;
};
export const filteredPostsRequest = async (title: string, userId: string) => {
  const response = await axios.get(
    `${BASE_URL}/posts?title=${encodeURIComponent(title)}&userId=${userId}`
  );
  return response.data;
};
