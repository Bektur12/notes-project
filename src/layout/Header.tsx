import { Switch, ToggleButton, styled } from "@mui/material";
import search from "../assets/svg/search.svg";
import Profile from "../components/profile/Profile";
import { logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export const Header = ({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: any;
}) => {
  console.log(darkMode, setDarkMode);

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

  const handleIsChecked = () => {
    setDarkMode((prev: boolean) => !prev);
  };

  return (
    <Container>
      <TopPart>
        <h1>NOTE</h1>
        <ProfileInfo>
          <img src={search} alt="" />
          <Profile items={items} />
        </ProfileInfo>
      </TopPart>
      <Switch onChange={handleIsChecked} />
    </Container>
  );
};

const Container = styled("header")`
  background-color: green;
  height: 120px;
  padding: 20px;
  font-family: Inter;
  color: white;
  position: fixed;
  width: 100%;
  z-index: 1;
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
  color: black;
`;
