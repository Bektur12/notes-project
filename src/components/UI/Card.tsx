import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as Close } from "../../assets/svg/X.svg";

type ICard = {
  title: string;
  description: string;
  date: any;
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
  return (
    <Container>
      <img
        style={{ width: "130px" }}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-2cR5W5pp7kA%2FThQ0SDmKf6I%2FAAAAAAAAA_M%2FZ0O9Ub76G4o%2Fs1600%2FCristiano%2BRonaldo%2Bimages.jpg&f=1&nofb=1&ipt=a129d9a5b4f5f26cad6c441659b216a4f0a542061ad5b3bef476b48fb7a21592&ipo=images"
        alt=""
      />
      <Content>
        <DateHeading>{date}</DateHeading>
        <Title>{title}</Title>
        <Description>{description}</Description>
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

const Container = styled("div")`
  background-color: white;
  padding: 1px 9px;
  border-radius: 5px;
  width: 70%;
  display: grid;
  grid-template-columns: 30% 68% 40%;
  padding: 10px;
`;

const DateHeading = styled("h1")`
  font-size: 8px;
  line-height: 10px;
  color: #afafaf;
`;
const Title = styled("h1")`
  font-size: 14px;
  color: green;
  text-decoration: underline;
  text-transform: uppercase;
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
`;
