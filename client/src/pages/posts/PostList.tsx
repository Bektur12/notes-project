import React from "react";
import { Card } from "../../components/UI/Card";
import styled from "@emotion/styled";

export const PostList = () => {
  return (
    <List>
      <Card date="dsasfdas" title="fdasdfa" description="fdsadfas" />
      <Card date="dsasfdas" title="fdasdfa" description="fdsadfas" />
      <Card date="dsasfdas" title="fdasdfa" description="fdsadfas" />
      <Card date="dsasfdas" title="fdasdfa" description="fdsadfas" />
      <Card date="dsasfdas" title="fdasdfa" description="fdsadfas" />
      <Card date="dsasfdas" title="fdasdfa" description="fdsadfas" />
      <Card date="dsasfdas" title="fdasdfa" description="fdsadfas" />
      <Card
        date="dsasfdas"
        title="fdasdfa"
        description="fdsadfdassssssssssfdsadffffffffffffffffffffffffssssssssssssssssssssssssssssssfdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfas"
      />
      <Card
        date="dsasfdas"
        title="fdasdfa"
        description="fdsadfdassssssssssfdsadffffffffffffffffffffffffssssssssssssssssssssssssssssssfdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfas"
      />
      <Card
        date="dsasfdas"
        title="fdasdfa"
        description="fdsadfdassssssssssfdsadffffffffffffffffffffffffssssssssssssssssssssssssssssssfdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfas"
      />
      <Card
        date="dsasfdas"
        title="fdasdfa"
        description="fdsadfdassssssssssfdsadffffffffffffffffffffffffssssssssssssssssssssssssssssssfdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfas"
      />
      <Card
        date="dsasfdas"
        title="fdasdfa"
        description="fdsadfdassssssssssfdsadffffffffffffffffffffffffssssssssssssssssssssssssssssssfdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssfas"
      />
      <Card
        date="212.32.42"
        title="beka"
        description="hello bro have are you?"
      />
      <Card date="dsasfdas" title="fdasdfa" description="fdsadfas" />
    </List>
  );
};

const List = styled("div")`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-content: center;
`;
