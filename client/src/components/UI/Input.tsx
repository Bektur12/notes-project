import React, { FC } from "react";
import { TextField, TextFieldProps } from "@mui/material";
import styled from "@emotion/styled";

type InputProps = TextFieldProps & {};

export const Input: FC<InputProps> = ({
  value,
  onChange,
  type,
  placeholder,
}) => {
  return (
    <InputStyled
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

const InputStyled = styled(TextField)(() => ({
  ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root ": {
    borderRadius: "8px",
    height: "42px",
  },
  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #D9D9D9",
  },
  " & .MuiInputBase-root": {
    outline: "none",
  },
}));
