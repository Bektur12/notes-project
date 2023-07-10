import { styled } from "@mui/material";
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
  font-family: Inter;
  color: white;
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
