import Logo from "../components/Logo";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Container, Toolbar } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  appbar: {
    background: "#323a40",
  },
}));

function Default(props) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appbar}>
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
