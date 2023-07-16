import React, { forwardRef, Ref } from "react";
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { ReactComponent as SearchIcon } from "../../assets/svg/searchIcon.svg";
import { styled } from "@mui/material";

type InputProps = TextFieldProps & {
  isIcon?: boolean;
};

export const Input = forwardRef(
  ({ isIcon, ...rest }: InputProps, ref: Ref<HTMLInputElement>) => {
    const viewIconHandler = () => {
      if (isIcon === true) {
        return {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        };
      }
    };

    return <InputStyled ref={ref} {...rest} InputProps={viewIconHandler()} />;
  }
);

const InputStyled = styled(TextField)(() => ({
  ".MuiOutlinedInput-root": {
    borderRadius: "8px",
  },
  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #D9D9D9",
  },
  " & .MuiInputBase-root": {
    background: "#FEFBFF",
    outline: "none",
  },
  "& .MuiOutlinedInput-input": {
    padding: "10px 10px !important",
  },
  "& .MuiFormHelperText-root": {
    background: "red",
    lineHeight: "0",
    marginTop: "10px",
    position: "absolute",
    top: "43px",
  },
}));
