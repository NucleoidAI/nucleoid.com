import Logo from "../components/Logo";
import React from "react";
import { Grid, Paper } from "@mui/material";

const style = { height: 300, width: 300 };

function Dev() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Logo title="Dev" />
      <br />
      <Paper style={style}></Paper>
      <br />
    </Grid>
  );
}

export default Dev;
