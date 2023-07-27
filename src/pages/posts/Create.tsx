import { useState, ChangeEvent } from "react";
import { Input } from "../../components/UI/Input";
import { styled } from "@mui/material";
import { TextArea } from "../../components/UI/TextArea";
import { Button } from "../../components/UI/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatch";
import { postUser } from "../../store/actions/post";
import { useNavigate } from "react-router";
import { capitalizedString } from "../../utils/constants";
import { useSnackbar } from "../../hooks/useSnackbar";

export const CreatePost = () => {
  const dispatch = useAppDispatch();

  const { notify } = useSnackbar();

  const navigate = useNavigate();

  const { user } = useAppSelector((state: any) => state.auth);

  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setData((prevData) => ({ ...prevData, title: newTitle }));
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = event.target.value;
    setData((prevData) => ({ ...prevData, description: newDescription }));
  };

  const handleClickData = () => {
    if (!data.title.trim() && !data.description.trim()) return;

    dispatch(
      postUser({
        ...data,
        userId: user.id,
        navigate,
        title: capitalizedString(data.title),
        notify,
      })
    );
  };

  return (
    <Container>
      <Block>
        <h1>Create Note</h1>
        <Input
          value={data.title}
          onChange={handleTitleChange}
          placeholder="title"
        />
        <TextArea
          value={data.description}
          onChange={handleDescriptionChange}
          placeholder="Напишите"
        />
        <Button onClick={handleClickData}>Добавить</Button>
      </Block>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Block = styled("div")`
  width: 30%;
  display: grid;
  grid-template-rows: 20% 20% 40% 30%;
  gap: 13px;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 900;
    font-size: 1.4rem;
    line-height: 29px;
    color: #ffffff;
  }
`;
