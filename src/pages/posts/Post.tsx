import React from "react";
import { styled } from "@mui/material";
import { PostList } from "./PostList";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/Button";
import { FilteredPosts } from "./FilteredPosts";

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
        <FilteredPosts />
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
  width: 100%;
  gap: 100px;
`;
