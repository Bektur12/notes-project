import React, { FC, useState } from "react";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import styled from "@emotion/styled";

import { ReactComponent as VisibilityOff } from "../../assets/svg/notview.svg";
import { ReactComponent as Visibility } from "../../assets/svg/views.svg";

type InputProps = TextFieldProps & {};

export const InputPassword: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleShowPasswordClick = () => setShowPassword((prev) => !prev);

  return (
    <InputStyled
      value={value}
      onChange={onChange}
      type={showPassword ? "password" : "text"}
      placeholder={placeholder}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPasswordClick}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
const InputStyled = styled(TextField)(() => ({
  ".MuiOutlinedInput-root": {
    borderRadius: "8px",
    height: "42px",
  },
  ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #D9D9D9",
  },
  " & .MuiInputBase-root": {
    outline: "none",
    background: "#FEFBFF",
  },
}));
