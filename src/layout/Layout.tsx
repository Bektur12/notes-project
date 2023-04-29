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
  background-color: #353436;
  width: 100%;
  height: 100%;
`;
