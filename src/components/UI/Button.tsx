import React from "react";
import { Button as MuiButton, ButtonProps, styled } from "@mui/material";

type IButtonProps = ButtonProps & {};

export const Button = ({ onClick, children, variant }: IButtonProps) => {
  return (
    <ButtonStyled onClick={onClick} variant={variant} fullWidth>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled(MuiButton)`
  &.MuiButtonBase-root {
    background-color: #8bc34a;
    color: white;
  }
`;
