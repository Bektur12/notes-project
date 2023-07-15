import React, { forwardRef, Ref } from "react";
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { ReactComponent as SearchIcon } from "../../assets/svg/searchIcon.svg";
import { styled } from "@mui/material";

type InputProps = TextFieldProps & {
  isIcon?: boolean;
};

export const Input = forwardRef(
  (
    {
      value,
      onChange,
      type,
      placeholder,
      isIcon,
      name,
      error,
      helperText,
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    console.log(error, "error");

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

    return (
      <InputStyled
        ref={ref}
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        fullWidth
        placeholder={placeholder}
        helperText={helperText}
        InputProps={viewIconHandler()}
      />
    );
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
    marginRight: "30px !important",
  },
}));
