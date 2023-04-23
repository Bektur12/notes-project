import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

type IButtonProps = ButtonProps & {};

export const Button = ({ onClick, children, variant }: IButtonProps) => {
  return (
    <MuiButton onClick={onClick} variant={variant} fullWidth>
      {children}
    </MuiButton>
  );
};
