import { Pagination as MuiPagination, PaginationProps } from "@mui/material";
import React, { forwardRef } from "react";

type Props = PaginationProps & {
  totalPages?: number;
  currentPage: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
};

export const Pagination = forwardRef<HTMLDivElement, Props>(
  (
    { totalPages, currentPage, handlePrevPage, handleNextPage, ...rest },
    ref
  ) => {
    const handleChangePage = (
      event: React.ChangeEvent<unknown>,
      page: number
    ) => {
      if (page < currentPage) {
        handlePrevPage();
      } else if (page > currentPage) {
        handleNextPage();
      }
    };

    return (
      <MuiPagination
        ref={ref}
        count={totalPages}
        page={currentPage}
        onChange={handleChangePage}
        {...rest}
      />
    );
  }
);
