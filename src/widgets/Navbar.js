import Logo from "../components/Logo";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import gtag from "../gtag";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Get Started",
    link: "/docs/get-started",
    outLink: true,
  },
  {
    name: "Learn",
    link: "/docs/learn",
    outLink: true,
  },
  {
    name: "API",
    link: "/docs/api",
    outLink: true,
  },
  {
    name: "Blog",
    link: "https://dev.to/nucleoid",
    outLink: true,
  },
];

function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ background: "#323a40" }}>
      <Toolbar
        sx={{ display: { display: "flex", justifyContent: "space-between" } }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map(({ name, link, outLink }) => (
                <MenuItem
                  key={name}
                  onClick={() => {
                    handleCloseNavMenu();
                    outLink ? (window.location = link) : navigate(link);
                  }}
                >
                  <Typography textAlign="center">{name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Logo />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            paddingLeft: 2,
          }}
        >
          {pages.map(({ name, link, outLink }) => (
            <Button
              key={name}
              sx={{ my: 2, color: "#9a9da0", display: "block" }}
              onClick={() =>
                outLink ? (window.location = link) : navigate(link)
              }
            >
              {name}
            </Button>
          ))}
        </Box>
        <Button
          variant={"contained"}
          onClick={() => window.location.assign("/ide/")}
          sx={{
            mx: 1,
            textTransform: "none",
            background:
              "linear-gradient(90deg, rgba(32,153,88,1) 0%, rgba(32,153,88,0.75) 100%)",
            display: { xs: "none", md: "block" },
          }}
        >
          Go to Nucleoid IDE
        </Button>
        <Button
          startIcon={<StarBorderIcon />}
          size={"large"}
          sx={{
            my: 2,
            color: "white",
            textTransform: "none",
          }}
          onClick={() => {
            gtag("event", "click_github", {
              page_location: window.location.href,
              page_path: window.location.pathname,
            });

            window.open("https://github.com/NucleoidJS/Nucleoid");
          }}
        >
          Star us on GitHub
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
