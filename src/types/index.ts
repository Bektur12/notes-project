import { NavigateFunction } from "react-router-dom";

export type IuserData = {
  username: string;
  password: string;
  navigate?: NavigateFunction;
};
