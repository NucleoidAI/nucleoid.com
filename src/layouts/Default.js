import { ReactComponent as DiscordIcon } from "../images/discord.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "../components/Logo";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";
import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Fab,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

const pages = ["Home", "Get Started", "Learn", "Blog"];

function Default({ container, children }) {
  container = container === undefined ? true : container;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ background: "#323a40" }}>
        <Toolbar>
          <Logo sx={{ mr: 2, display: { xs: "none", md: "flex" } }} />
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              paddingLeft: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#9a9da0", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            width={120}
          >
            <IconButton
              onClick={() =>
                window.open("https://discord.gg/b6THyxKd", "_blank")
              }
            >
              <DiscordIcon />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://twitter.com/NucleoidJS", "_blank")
              }
            >
              <TwitterIcon style={{ fill: "#ffffff" }} />
            </IconButton>
            <IconButton
              onClick={() =>
                window.open("https://github.com/NucleoidJS/Nucleoid", "_blank")
              }
            >
              <GitHubIcon style={{ fill: "#ffffff" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {container && <Container>{children}</Container>}
      {!container && <Box>{children}</Box>}
    </>
  );
}

export default Default;
