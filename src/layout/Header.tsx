import styled from "@emotion/styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <h1>NOTE</h1>
    </HeaderStyled>
  );
};

const HeaderStyled = styled("header")`
  width: 100%;
  background-color: #8bc34a;
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #ffffff;
  }
`;
