import styled from "@emotion/styled";
import React, { ChangeEvent, useState } from "react";
import { Input } from "../components/UI/Input";
import { InputPassword } from "../components/UI/InputPassword";
import { Button } from "../components/UI/Button";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../store/slices/authActions";
import { useAppDispatch } from "../hooks/useDispatch";

export const SignUp = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSendingData = () => {
    dispatch(registerUser({ ...formData, navigate }));
  };

  return (
    <Container>
      <InnerContainer>
        <Title>Sign Up</Title>
        <Input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <InputPassword
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <Button variant="contained" onClick={onSendingData}>
          Sign Up
        </Button>
        <SignIn>
          <p>У вас есть аккаунт?</p>
          <p onClick={() => navigate("/sign-in")}>Sign In</p>
        </SignIn>
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

const SignIn = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  margin-top: 16px;

  & > p {
    margin: 0;
  }

  & > a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    margin-left: 4px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
