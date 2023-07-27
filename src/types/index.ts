import { NavigateFunction } from "react-router-dom";

export type IuserData = {
  username: string;
  password: string;
  navigate?: NavigateFunction;
};

export type PostData = {
  title: string;
  description: string;
  id?: number;
  userId?: string;
  createdAt?: string;
};

interface AuthState {
  user: {
    id: string;
    username: string;
  };
}

interface PostsState {
  posts: PostData[];
}

export interface RootState {
  auth: AuthState;
  posts: PostsState;
}

type SnackbarProps = {
  type: string;
  title: string;
  message: string;
  options: string;
};

export type NotifyFunction = (arg: SnackbarProps) => void;
