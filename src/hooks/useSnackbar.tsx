import { styled } from "@mui/material";
import { toast } from "react-toastify";

import type { ToastOptions } from "react-toastify";

interface SnackbarOptions extends ToastOptions {
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

interface SnackbarProps {
  type: "success" | "error" | "info" | "warn";
  title: string;
  message: string;
  options?: SnackbarOptions;
}

export const useSnackbar = () => {
  const notify = ({ type, title, message, options }: SnackbarProps) =>
    toast[type](
      <>
        <Title>{title}</Title>
        <Message>{message}</Message>
      </>,
      {
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        ...options,
      }
    );
  return { notify };
};

const Title = styled("h4")(() => ({
  fontFamily: "DINNextRoundedLTPro-Bold",
  margin: "10px 0 0 0",
  fontSize: "16px",
  lineHeight: "18.75px",
  color: "#4C4859",
}));

const Message = styled("p")(() => ({
  margin: "8px 0 10px 0",
  fontFamily: "DINNextRoundedLTW01-Regular",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "18px",
  color: "#646464",
}));
