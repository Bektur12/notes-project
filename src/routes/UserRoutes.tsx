import React from "react";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SIgnUp";
import { Layout } from "../layout/Layout";

export const UserRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<SignUp />} /> */}
      {/* <Route path="/sign-in" element={<SignIn />} /> */}
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<div>dfssafdas</div>} />
      </Route>
    </Routes>
  );
};
