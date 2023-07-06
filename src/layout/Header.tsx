// import { useNavigate } from "react-router-dom";
// import Profile from "../components/profile/Profile";
// import { styled } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { logout } from "../store/slices/authSlice";
// import { Navigations } from "./Navigations";
// import { Input } from "../components/UI/Input";

// export const Header = () => {

//   return (
//     <HeaderStyled>
//       <h1>NOTE</h1>
//       <Input isIcon={true} placeholder="Input something here..." />
//       <Content>
//         <Navigations />
//
//       </Content>
//     </HeaderStyled>
//   );
// };

// const HeaderStyled = styled("header")`
//   width: 100%;
//   background-color: #8bc34a;
//   height: 80px;
//   display: flex;
//   align-items: center;
//   padding: 0px 40px 0px 20px;
//   justify-content: space-between;
//   gap: 50px;
//   h1 {
//     font-family: "Inter";
//     font-style: normal;
//     font-weight: 700;
//     font-size: 32px;
//     line-height: 39px;
//     color: #ffffff;
//   }
// `;

// const Content = styled("div")`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   width: 40%;
// `;

import { styled } from "@mui/material";
import React from "react";

import info from "../assets/images/info.png";
import search from "../assets/svg/search.svg";
import Profile from "../components/profile/Profile";
import { logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleClickLogout = () => {
    localStorage.clear();
    dispatch(logout());
    navigate("/");
  };
  const items = [
    {
      id: "key",
      onClick: () => handleClickLogout(),
      label: "logout",
    },
  ];
  return (
    <Container>
      <TopPart>
        <h1>NOTE</h1>
        <ProfileInfo>
          <img src={search} alt="" />
          <Profile items={items} />
        </ProfileInfo>
      </TopPart>
      <HeaderText>Мои конспекты</HeaderText>
    </Container>
  );
};

const Container = styled("header")`
  background-image: url(${info});
  background-repeat: no-repeat;
  background-size: cover;
  height: 150px;
  padding: 20px;
`;

const TopPart = styled("div")`
  display: flex;
  justify-content: space-between;
`;

const ProfileInfo = styled("div")`
  display: flex;
  gap: 20px;
`;

const HeaderText = styled("h1")`
  text-align: center;
`;
