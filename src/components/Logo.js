import React from "react";
import { Box, Typography } from "@mui/material";
// eslint-disable-next-line
import { Link } from "react-router-dom";

function Logo(props) {
  return (
    <Link to="/">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingBottom: {
            xs: 0,
            md: 0.5,
          },
          cursor: "pointer",
        }}
      >
        <Typography fontSize={"22px"} color={"#28a745"}>
          Nucleoid
        </Typography>
        &nbsp;
        <Typography fontSize={"15px"} color={"#dfdfdf"} fontWeight={"lighter"}>
          <sub>Beta</sub>
        </Typography>
      </Box>
    </Link>
  );
}

export default Logo;
