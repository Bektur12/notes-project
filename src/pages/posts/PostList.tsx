import { useEffect } from "react";
import { Card } from "../../components/UI/Card";
import { styled } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatch";
import { deletePost, getPosts } from "../../store/actions/post";
import { PostData, RootState } from "../../types";
import { getFormatDate } from "../../utils";
import { capitalizedString } from "../../utils/constants";
import { Snackbar } from "../../components/UI/SnackBar";
import { Pagination } from "../../components/UI/Pagination";
import { useSearchParams } from "react-router-dom";
import { useSnackbar } from "../../hooks/useSnackbar";

export const PostList = () => {
  const dispatch = useAppDispatch();

  const { notify } = useSnackbar();

  const { posts = [] } = useAppSelector((state: RootState) => state.posts);

  const user = JSON.parse(localStorage.getItem("AUTH") as string);

  const isOptionUserId = user.id;

  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = +(searchParams.get("page") || "1");

  const itemsPerPage = 5;

  useEffect(() => {
    dispatch(
      getPosts({
        userId: isOptionUserId,
        page: currentPage,
        limit: itemsPerPage,
      })
    );
  }, [currentPage, itemsPerPage, isOptionUserId, dispatch]);

  const handleDeleteClick = (id: string) => {
    dispatch(
      deletePost({
        deleteId: id,
        userId: isOptionUserId,
        notify,
        page: currentPage,
        limit: itemsPerPage,
      })
    );
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setSearchParams({ page: (currentPage - 1).toString() });
    }
  };
  const handleNextPage = () => {
    setSearchParams({ page: (currentPage + 1).toString() });
  };

  return (
    <>
      <Snackbar />
      <List>
        <InnerContent>
          {posts?.length !== 0 ? (
            posts
              ?.slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((item: PostData) => (
                <Card
                  handleDeleteClick={handleDeleteClick}
                  key={item.id}
                  id={item.id?.toString() as string}
                  date={getFormatDate(item.createdAt as string)}
                  title={capitalizedString(item.title)}
                  description={item.description}
                />
              ))
          ) : (
            <NotPost>У вас нет постов</NotPost>
          )}
        </InnerContent>
        <PaginationWrapper>
          <Pagination
            totalPages={Math.ceil(posts.length / itemsPerPage)}
            currentPage={currentPage}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        </PaginationWrapper>
      </List>
    </>
  );
};

const List = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const InnerContent = styled("div")`
  width: 60%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PaginationWrapper = styled("div")`
  margin-top: 16px;
  display: flex;
  width: 60%;
  justify-content: center;
`;

const NotPost = styled("span")`
  text-align: center;
  text-transform: uppercase;
`;
