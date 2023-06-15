import styled from "@emotion/styled";
import React, { ChangeEvent, useState } from "react";
import { Input } from "../components/UI/Input";
import { InputPassword } from "../components/UI/InputPassword";
import { Button } from "../components/UI/Button";
import { loginUser } from "../store/actions/auth";
import { useAppDispatch } from "../hooks/useDispatch";
import { useNavigate } from "react-router";

export const SignIn = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

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
    dispatch(loginUser({ ...formData, navigate }));
  };
  return (
    <Container>
      <InnerContainer>
        <Title>Login</Title>
        <Input
          value={formData.username}
          onChange={handleInputChange}
          name="username"
        />
        <InputPassword
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <Button variant="contained" onClick={onSendingData}>
          Login
        </Button>
        <SignUp>
          <p>Зарегистрироваться</p>
        </SignUp>
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

const SignUp = styled("div")`
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
