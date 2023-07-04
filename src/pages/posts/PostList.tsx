import { useEffect } from "react";
import { Card } from "../../components/UI/Card";
import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatch";
import { deletePost, getPosts } from "../../store/actions/post";
import { PostData } from "../../types";
import { format, parseISO } from "date-fns";

export const PostList = () => {
  const dispatch = useAppDispatch();

  const { posts = [], auth } = useAppSelector((state: any) => state);

  const user = JSON.parse(localStorage.getItem("AUTH") as string);

  const isOptionUserId = auth.user.id || user.id;

  useEffect(() => {
    dispatch(getPosts(isOptionUserId));
  }, [dispatch]);

  const handleDeleteClick = (id: string) => {
    dispatch(deletePost({ deleteId: id, userId: isOptionUserId }));
  };
  const getFormatDate = (date: string) => {
    const parsedDate = parseISO(date);
    const formattedDate = format(parsedDate, "yyyy.MM.dd");
    return formattedDate;
  };

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
                date={getFormatDate(item.createdAt)}
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
