import { useEffect } from "react";
import { Card } from "../../components/UI/Card";
import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatch";
import { deletePost, getPosts } from "../../store/actions/post";
import { PostData, RootState } from "../../types";
import { getFormatDate } from "../../utils";
import { capitalizedString } from "../../utils/constants";
import { Snackbar } from "../../components/UI/SnackBar";
import { useSnackbar } from "../../hooks/useSnackbar";

export const PostList = () => {
  const dispatch = useAppDispatch();

  const { notify } = useSnackbar();

  const { posts = [] } = useAppSelector((state: RootState) => state.posts);

  const user = JSON.parse(localStorage.getItem("AUTH") as string);

  const isOptionUserId = user.id;

  useEffect(() => {
    dispatch(getPosts(isOptionUserId));
  }, []);

  const handleDeleteClick = (id: string) => {
    dispatch(deletePost({ deleteId: id, userId: isOptionUserId, notify }));
  };

  return (
    <List>
      <Snackbar />
      {posts?.length !== 0 ? (
        posts?.map((item: PostData) => {
          return (
            <Card
              handleDeleteClick={handleDeleteClick}
              key={item.id}
              id={item.id?.toString() as string}
              date={getFormatDate(item.createdAt as string)}
              title={capitalizedString(item.title)}
              description={item.description}
            />
          );
        })
      ) : (
        <div>У вас не постов</div>
      )}
    </List>
  );
};

const List = styled("div")`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-content: center;
`;
