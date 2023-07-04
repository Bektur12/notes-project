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
      <DateHeading>{date}</DateHeading>
      <Close
        style={{ cursor: "pointer" }}
        onClick={() => handleDeleteClick(id)}
      />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

const Container = styled("div")`
  background-color: white;
  padding: 1px 9px;
  border-radius: 5px;
  width: 30%;
  height: 158px;
  display: grid;
  grid-template-columns: 90% 80%;
  grid-template-rows: repeat(2, 30% 10%);
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
  grid-row-start: 3;
`;
