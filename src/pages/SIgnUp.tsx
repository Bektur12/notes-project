import styled from "@emotion/styled";
import { Input } from "../components/UI/Input";
import { InputPassword } from "../components/UI/InputPassword";
import { Button } from "../components/UI/Button";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../store/actions/auth";
import { useAppDispatch } from "../hooks/useDispatch";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { getMessage, patternValidation } from "../utils/constants";
import { IuserData } from "../types";

export const SignUp = () => {
  const navigateToSignIn = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useAppDispatch();

  const handleSendingData: SubmitHandler<FieldValues> = (data) => {
    dispatch(
      registerUser({ ...data, navigate: navigateToSignIn } as IuserData)
    );
  };

  return (
    <Container>
      <InnerContainer>
        <Title>Sign Up</Title>
        <Input
          {...register("username", { required: "Username is required" })}
          placeholder="Username"
          error={getMessage(errors, "username") ? true : false}
          helperText={getMessage(errors, "username")}
        />

        <InputPassword
          {...register("password", {
            required: "Password is required",
            pattern: patternValidation.pattern,
          })}
          placeholder="Password"
          error={getMessage(errors, "password") ? true : false}
          helperText={getMessage(errors, "password")}
        />

        <Button variant="contained" onClick={handleSubmit(handleSendingData)}>
          Sign Up
        </Button>
        <SignIn>
          <p>У вас есть аккаунт?</p>
          <NavigateToSignIn onClick={() => navigateToSignIn("/sign-in")}>
            Sign In
          </NavigateToSignIn>
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
  font-family: Inter;

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

const NavigateToSignIn = styled("p")`
  cursor: pointer;
`;
