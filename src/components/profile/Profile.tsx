import React from "react";
import { Avatar, MenuItem, Menu } from "@mui/material";
import { styled } from "@mui/system";
import { useAppSelector } from "../../hooks/useDispatch";

type ItemsProfile = {
  id: string;
  label: string;
  onClick: () => void;
};

type ProfileProps = {
  items: ItemsProfile[];
};
const Profile = ({ items }: ProfileProps) => {
  const { user } = useAppSelector((state) => state.auth);

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const styles = {
    vertical: "top" as const,
    horizontal: "right" as const,
  };

  return (
    <Wrapper>
      <AvatarContainer>
        <StyledAvatar
          onClick={handleOpenUserMenu}
          alt="Remy Sharp"
          src="/static/images/avatar/2.jpg"
        />
        <UserName>{user.username}</UserName>
      </AvatarContainer>
      <StyledMenu
        anchorEl={anchorElUser}
        anchorOrigin={styles}
        keepMounted
        transformOrigin={styles}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {items.map((item) => {
          return (
            <StyledMenuItem key={item.id} onClick={() => item.onClick()}>
              {item.label}
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </Wrapper>
  );
};

const Wrapper = styled("div")``;

const AvatarContainer = styled("div")`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledAvatar = styled(Avatar)`
  cursor: pointer;
`;

const StyledMenu = styled(Menu)``;

const StyledMenuItem = styled(MenuItem)``;

const UserName = styled("span")`
  color: white;
  font-weight: bold;
  font-family: "Inter";
  text-transform: capitalize;
`;

export default Profile;
