import React from "react";
import { Input } from "../../components/UI/Input";
import styled from "@emotion/styled";
import { PostList } from "./PostList";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/Button";

export const Post = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <InputContainer>
        <Button onClick={() => navigate("/user/create-post")}>
          Создать Пост
        </Button>
      </InputContainer>
      <InnerContainer>
        <PostList />
      </InnerContainer>
    </Container>
  );
};

const Container = styled("div")`
  width: 100%;
  display: flex;
  margin-top: 90px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const InputContainer = styled("div")`
  position: fixed;
  top: 170px;
  right: 40px;
`;

const InnerContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  gap: 50px;
`;
