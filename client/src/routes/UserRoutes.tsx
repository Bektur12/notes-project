import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Post } from "../pages/posts/Post";

export const UserRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<SignUp />} /> */}
      {/* <Route path="/sign-in" element={<SignIn />} /> */}
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Post />} />
      </Route>
    </Routes>
  );
};
