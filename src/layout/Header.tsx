import { useNavigate } from "react-router-dom";
import Profile from "../components/profile/Profile";
import { styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";

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
    <HeaderStyled>
      <h1>NOTE</h1>
      <Profile items={items} />
    </HeaderStyled>
  );
};

const HeaderStyled = styled("header")`
  width: 100%;
  background-color: #8bc34a;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0px 40px 0px 20px;
  justify-content: space-between;
  h1 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    color: #ffffff;
  }
`;
