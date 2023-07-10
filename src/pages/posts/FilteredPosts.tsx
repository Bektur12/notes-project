import { useState } from "react";
import { CheckBox } from "../../components/UI/CheckBox";
import { styled } from "@mui/material";
import { Button } from "../../components/UI/Button";
import { useAppDispatch } from "../../hooks/useDispatch";
import { filteredPosts } from "../../store/actions/post";
import { OPTIONS, capitalizedString } from "../../utils/constants";

export const FilteredPosts = () => {
  const dispatch = useAppDispatch();

  const [selectedOption, setSelectedOption] = useState("");

  const onHandleChangeValue = (_: boolean, title: string) => {
    setSelectedOption(title);
  };

  const user = JSON.parse(localStorage.getItem("AUTH") as string);

  const isOptionUserId = user.id;

  const handleFilteredPosts = () => {
    dispatch(
      filteredPosts({
        title: capitalizedString(selectedOption),
        userId: isOptionUserId,
      })
    );
    setSelectedOption("");
  };

  return (
    <Container>
      {OPTIONS.map((item) => (
        <FilteredContent key={Math.random()}>
          <CheckBox
            onChange={(checked) =>
              onHandleChangeValue(checked as boolean, item)
            }
            checked={true}
            title={item}
          />
          <li>{item}</li>
        </FilteredContent>
      ))}
      <ButtonStyled onClick={handleFilteredPosts}>Применить</ButtonStyled>
    </Container>
  );
};

const FilteredContent = styled("div")`
  list-style: none;
  display: flex;
  align-items: center;
  font-family: Inter;
`;
const Container = styled("div")``;

const ButtonStyled = styled(Button)(({ theme }) => ({
  "& .MuiButton-root": {
    backgroundColor: "red",
    color: theme.palette.common.black,
  },
}));
