import React from "react";
import { CheckBox } from "../../components/UI/CheckBox";
import { styled } from "@mui/material";

export const FilteredPosts = () => {
  const options = ["Typescript", "React", "Html", "Css", "Next", "Nest"];

  const onHandleChangeValue = (checked: boolean, title: string) => {
    console.log(checked, title);
  };
  return (
    <>
      {options.map((item) => (
        <FilteredContent key={Math.random()}>
          <li>{item}</li>
          <CheckBox
            onChange={(checked) =>
              onHandleChangeValue(checked as boolean, item)
            }
            checked={true}
            title={item}
          />
        </FilteredContent>
      ))}
    </>
  );
};

const FilteredContent = styled("div")`
  list-style: none;
  display: flex;
  align-items: center;
`;
