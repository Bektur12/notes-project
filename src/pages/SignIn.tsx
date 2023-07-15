import styled from "@emotion/styled";
import { Input } from "../components/UI/Input";
import { InputPassword } from "../components/UI/InputPassword";
import { Button } from "../components/UI/Button";
import { loginUser } from "../store/actions/auth";
import { useAppDispatch } from "../hooks/useDispatch";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export const SignIn = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSendingData = (data: any) => {
    dispatch(loginUser({ ...data, navigate }));
  };

  console.log(getMessage(errors, errors.password), "hello world ");

  return (
    <Container>
      <InnerContainer>
        <Title>Login</Title>
        <InputContainer>
          <Input
            {...register("username", { required: "Username is required" })}
            placeholder="Username"
            name="username"
            error={getMessage(errors, "username") ? true : false}
            helperText={getMessage(errors, "username")}
          />

          <InputPassword
            {...register("password", { required: "Password is required" })}
            placeholder="Password"
            name="password"
            error={(errors.password?.message as string) ? true : false}
            helperText={errors.password?.message as string}
          />
        </InputContainer>

        <Button variant="contained" onClick={handleSubmit(onSendingData)}>
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

const InputContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;
