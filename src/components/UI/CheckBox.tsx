import { Checkbox, CheckboxProps } from "@mui/material";
import React, { ChangeEvent } from "react";

type Props = CheckboxProps & {
  title: string;
  onChange: (checked: boolean, title: string) => void;
};

export const CheckBox = ({ value, onChange, title }: Props) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    onChange(checked, title);
  };

  return <Checkbox checked={value as boolean} onChange={handleChange} />;
};
