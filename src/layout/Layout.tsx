import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import styled from "@emotion/styled";

export const Layout = () => {
  return (
    <LayoutStyled>
      <Header />
      <Outlet />
    </LayoutStyled>
  );
};

const LayoutStyled = styled("div")`
  width: 100%;
  background: white;
  min-height: 100vh;
`;
