import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as Close } from "../../assets/svg/X.svg";

type ICard = {
  title: string;
  description: string;
  date: string;
};
export const Card = ({ date, title, description }: ICard) => {
  return (
    <Container>
      <DateHeading>{date}</DateHeading>
      <Close style={{ cursor: "pointer" }} />
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </Container>
  );
};

const Container = styled("div")`
  background: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 12px 9px;
  border-radius: 5px;
  width: 15%;
  height: 158px;
  display: grid;
  grid-template-columns: 87% 80%;
  grid-gap: 2px;
  align-items: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 700;
`;

const DateHeading = styled("h1")`
  font-size: 8px;
  line-height: 10px;
  color: #afafaf;
`;
const Title = styled("h1")`
  font-size: 14px;
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
`;
