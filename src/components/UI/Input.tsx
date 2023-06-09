import React, { FC } from "react";
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { ReactComponent as SearchIcon } from "../../assets/svg/searchIcon.svg";

import styled from "@emotion/styled";

type InputProps = TextFieldProps & {
  isIcon?: boolean;
};

export const Input: FC<InputProps> = ({
  value,
  onChange,
  type,
  placeholder,
  isIcon,
  name,
}) => {
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
      value={value}
      onChange={onChange}
      type={type}
      name={name}
      fullWidth
      placeholder={placeholder}
      InputProps={viewIconHandler()}
    />
  );
};

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
}));
