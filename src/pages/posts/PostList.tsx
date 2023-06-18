import React, { useEffect, useCallback } from "react";
import { Card } from "../../components/UI/Card";
import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatch";
import { deletePost, getPosts } from "../../store/actions/post";
import { PostData } from "../../types";

export const PostList = () => {
  const dispatch = useAppDispatch();

  const { posts = [], auth } = useAppSelector((state: any) => state);

  useEffect(() => {
    dispatch(getPosts(auth.id));
  }, [dispatch]);

  const handleDeleteClick = (id: string) => {
    dispatch(deletePost(id));
  };

  async function name() {
    const fetchData = await fetch("http://localhost:3001/users/32/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await fetchData.json();
    console.log(response, "responsess");
  }
  name();
  return (
    <List>
      {posts?.posts?.length !== 0 ? (
        posts?.posts?.map(
          (item: PostData & { createdAt: string; id: string }) => {
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
          }
        )
      ) : (
        <div>У вас не постов</div>
      )}
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
