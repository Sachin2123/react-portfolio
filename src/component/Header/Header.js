import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ProfilePicture from "../../Picture/ProfilePicture.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const pages = [
  { link: "/", page: "Home" },
  { link: "/aboutme", page: "About Me" },
  { link: "/skills", page: "Skills" },

  { link: "/projects", page: "Projects" },
  { link: "/experience", page: "Experience" },
  { link: "/resume", page: "Resume" },
  // { link: "/contact", page: "Contact" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    // setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    // setAnchorElUser(null);
  };

  const handleNavigation = (link) => {
    // console.log(data);
    navigate(link);

    // Mobile View
    // console.log(link);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          // backgroundColor: "transparent",
          boxShadow: "none",
          top: 0,
          backgroundColor: "rgba(13, 29, 58, 0.8)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Tooltip title="Pages">
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon sx={{ fontSize: "25px" }} />
                </IconButton>
              </Tooltip>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                {pages.map((item, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Typography
                      onClick={() => {
                        handleNavigation(item.link);
                        // console.log(item);
                      }}
                      sx={{
                        textAlign: "center",
                        color:
                          location.pathname === item.link ? "black" : "grey",
                      }}
                    >
                      {item.page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                gap: 3,
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => {
                    handleCloseNavMenu();
                    handleNavigation(item.link);
                    // console.log(item.page);
                  }}
                  sx={{
                    my: 2,
                    // color: "white",
                    display: "block",
                    fontWeight: "600",
                    color: location.pathname === item.link ? "black" : "white",
                    backgroundColor:
                      location.pathname === item.link ? "white	" : "transparent",
                  }}
                >
                  {item.page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Payroll Software is under the development">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <NotificationsActiveIcon
                    fontSize="large"
                    sx={{ color: "white" }}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Profile Picture">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 2 }}>
                  <Avatar alt="Profile Picture" src={ProfilePicture} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                // anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                // open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
