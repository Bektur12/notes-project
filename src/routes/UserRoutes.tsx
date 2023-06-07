import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Post } from "../pages/posts/Post";
import { SignUp } from "../pages/SIgnUp";
import { SignIn } from "../pages/SignIn";

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<Layout />}>
        <Route path="/user/post" element={<Post />} />
      </Route>
    </Routes>
  );
};
