import styled from "@emotion/styled";
import React from "react";
import { Input } from "../components/UI/Input";
import { InputPassword } from "../components/UI/InputPassword";
import { Button } from "../components/UI/Button";

export const SignUp = () => {
  return (
    <Container>
      <InnerContainer>
        <Title>Sign Up</Title>
        <Input type="email" />
        <InputPassword label="Password" />
        <Button variant="contained">Sign Up</Button>
      </InnerContainer>
    </Container>
  );
};

const Container = styled("div")`
  background-color: #353436;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled("div")`
  display: grid;
  grid-template-rows: auto auto auto auto;
  width: 400px;
  align-items: center;
  gap: 20px;
`;

const Title = styled("h1")`
  color: #ffffff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
`;
