import { Textarea as MuiTextArea, TextareaProps } from "@mui/joy";

type Props = TextareaProps & {};

export const TextArea = ({ ...rest }: Props) => {
  return <MuiTextArea {...rest} size="sm" maxRows={4}/>;
};
