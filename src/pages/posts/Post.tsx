import React from "react";
import { Input } from "../../components/UI/Input";
import styled from "@emotion/styled";
import { PostList } from "./PostList";
import { IconButton } from "@mui/material";
import { ReactComponent as AddIcon } from "../../assets/svg/Plus.svg";
import { useNavigate } from "react-router-dom";

export const Post = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <InnerContainer>
        <InputContainer>
          <Input isIcon={true} placeholder="Input something here..." />
          <IconButton onClick={() => navigate("/")}>
            <AddIcon />
          </IconButton>
        </InputContainer>
        <PostList />
      </InnerContainer>
    </Container>
  );
};

const Container = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 90px;
`;
const InputContainer = styled("div")`
  display: flex;
  width: 100%;
  gap: 20px;
  margin-left: 40px;
`;

const InnerContainer = styled("div")`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  gap: 50px;
`;
