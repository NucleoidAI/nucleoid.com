import Logo from "../components/Logo";
import React from "react";
import { AppBar, Container, Toolbar } from "@mui/material";

function Default(props) {
  return (
    <>
      <AppBar position="static" sx={{ bgcolor: "#323a40" }}>
        <Toolbar>
          <Logo />
        </Toolbar>
      </AppBar>
      <br />
      <Container>{props.children}</Container>
    </>
  );
}

export default Default;
