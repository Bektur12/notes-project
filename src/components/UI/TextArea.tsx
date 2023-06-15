import { Textarea as MuiTextArea, TextareaProps } from "@mui/joy";

type Props = TextareaProps & {};

export const TextArea = ({ ...rest }: Props) => {
  return <MuiTextArea {...rest} minRows={2} />;
};
