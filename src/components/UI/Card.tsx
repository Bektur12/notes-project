import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as Close } from "../../assets/svg/X.svg";
import { useNavigate } from "react-router-dom";
import { capitalizedString } from "../../utils/constants";

type ICard = {
  title: string;
  description: string;
  date: string;
  handleDeleteClick: (id: string) => void;
  id: string;
};
export const Card = ({
  date,
  title,
  description,
  id,
  handleDeleteClick,
}: ICard) => {
  const navigate = useNavigate();
  return (
    <Container>
      <img
        style={{ width: "80%", height: "23vh" }}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-2cR5W5pp7kA%2FThQ0SDmKf6I%2FAAAAAAAAA_M%2FZ0O9Ub76G4o%2Fs1600%2FCristiano%2BRonaldo%2Bimages.jpg&f=1&nofb=1&ipt=a129d9a5b4f5f26cad6c441659b216a4f0a542061ad5b3bef476b48fb7a21592&ipo=images"
        alt=""
      />
      <Content>
        <DateHeading>{date}</DateHeading>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Text onClick={() => navigate(`/user/inner-page/${id}`)}>
          Читать дальше
        </Text>
      </Content>
      <Close
        style={{ cursor: "pointer" }}
        onClick={() => handleDeleteClick(id)}
      />
    </Container>
  );
};

const Content = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Text = styled("span")`
  text-decoration: underline;
  color: #7e5bc2;
  font-family: Inter;
  cursor: pointer;
`;

const Container = styled("div")`
  background-color: #faf5f5;
  border-radius: 5px;
  width: 100%;
  display: grid;
  grid-template-columns: 30% 68% 20%;
  padding: 10px;
  border-bottom: 1px solid black;
  height: 25vh;
`;

const DateHeading = styled("h1")`
  font-size: 8px;
  line-height: 10px;
  color: #afafaf;
`;
const Title = styled("h1")`
  font-size: 14px;
  color: green;
  /* text-decoration: underline;
  text-transform: uppercase; */
`;
const Description = styled("p")`
  word-wrap: break-word;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;
  color: #232224;
  margin-top: 11px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  grid-row-start: 3;
  font-family: Inter;
`;
