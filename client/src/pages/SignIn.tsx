import styled from "@emotion/styled";
import React from "react";
import { Input } from "../components/UI/Input";
import { InputPassword } from "../components/UI/InputPassword";

export const SignIn = () => {
  return (
    <Container>
      <div>
        <h1>Sign in</h1>
        <Input />
        <InputPassword />
      </div>
    </Container>
  );
};

const Container = styled("div")`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  width: 100%;
  height: 100vh;
`;
