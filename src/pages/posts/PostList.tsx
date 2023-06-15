import React, { useEffect } from "react";
import { Card } from "../../components/UI/Card";
import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatch";
import { deletePost, getPosts } from "../../store/actions/post";

export const PostList = () => {
  const dispatch = useAppDispatch();

  const { posts } = useAppSelector((state: any) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleDeleteClick = (id: string) => {
    dispatch(deletePost(id));
  };

  return (
    <List>
      {posts?.map((item: any) => {
        return (
          <Card
            handleDeleteClick={handleDeleteClick}
            key={item.id}
            id={item.id}
            date={item.createdAt}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </List>
  );
};

const List = styled("div")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-content: center;
`;
