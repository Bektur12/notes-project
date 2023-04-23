import React from "react";
import { UserRoutes } from "./UserRoutes";
import { RoleController } from "../types/routes";

const ROLE = "USER";

export const AppRoutes = () => {
  const roleController: RoleController = {
    USER: <UserRoutes />,
  };
  return roleController[ROLE];
};
