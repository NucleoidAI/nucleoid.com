import Logo from "../components/Logo";
import React from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";

function Default({ container, children }) {
  container = container === undefined ? true : container;

  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#323a40" }}>
        <Toolbar>
          <Logo />
        </Toolbar>
      </AppBar>
      {container && <Container>{children}</Container>}
      {!container && <Box>{children}</Box>}
    </>
  );
}

export default Default;
