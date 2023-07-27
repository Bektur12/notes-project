import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import styled from "@emotion/styled";

export const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <LayoutStyled darkMode={darkMode}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Content>
        <Outlet />
      </Content>
    </LayoutStyled>
  );
};

const LayoutStyled = styled("div")<{ darkMode: boolean }>`
  width: 100%;
  background: ${(props) => (props.darkMode ? "black" : "rgb(245, 245, 245)")};
  min-height: 100vh;
`;

const Content = styled("div")`
  padding: 120px 100px 0px 130px;
`;
