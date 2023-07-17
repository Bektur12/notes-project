import { useState, useEffect } from "react";
import { Card } from "../../components/UI/Card";
import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatch";
import { deletePost, getPosts } from "../../store/actions/post";
import { PostData, RootState } from "../../types";
import { getFormatDate } from "../../utils";
import { capitalizedString } from "../../utils/constants";
import { Snackbar } from "../../components/UI/SnackBar";
import { useSnackbar } from "../../hooks/useSnackbar";
import { Pagination } from "../../components/UI/Pagination";
import { useSearchParams } from "react-router-dom";

export const PostList = () => {
  const dispatch = useAppDispatch();
  const { notify } = useSnackbar();
  const { posts = [] } = useAppSelector((state: RootState) => state.posts);
  const user = JSON.parse(localStorage.getItem("AUTH") as string);
  const isOptionUserId = user.id;
  console.log(posts, "hello world");

  const [totalPages, setTotalPages] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 5;

  const fetchPosts = () => {
    dispatch(getPosts({ id: isOptionUserId, page: currentPage }))
      .then((response: any) => {
        const totalPages = response.payload.total;
        setTotalPages(totalPages);
      })
      .catch((error: any) => {
        console.error("Failed to fetch posts:", error);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const handleDeleteClick = (id: string) => {
    dispatch(deletePost({ deleteId: id, userId: isOptionUserId, notify })).then(
      () => {
        fetchPosts();
      }
    );
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const renderPosts = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPagePosts = posts.slice(startIndex, endIndex);

    return currentPagePosts.map((item: PostData) => (
      <Card
        handleDeleteClick={handleDeleteClick}
        key={item.id}
        id={item.id?.toString() as string}
        date={getFormatDate(item.createdAt as string)}
        title={capitalizedString(item.title)}
        description={item.description}
      />
    ));
  };

  const [searchParams] = useSearchParams();
  const searchParamsPage = Number(searchParams.get("page"));
  useEffect(() => {
    setCurrentPage(searchParamsPage || 1);
  }, [searchParamsPage]);

  return (
    <List>
      <Snackbar />
      {posts.length !== 0 ? renderPosts() : <div>У вас нет постов</div>}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
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
