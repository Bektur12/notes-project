import styled from "@emotion/styled";
import React from "react";

export const Navigations = () => {
  return (
    <Container>
      <li>LENTA</li>
      <li>О НАС</li>
      <li>КОНСПЕКТЫ</li>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  list-style: none;
  gap: 20px;
  cursor: pointer;
`;
