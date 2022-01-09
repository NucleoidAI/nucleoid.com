import React from "react";
import { Box, Typography } from "@mui/material";

function Logo(props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        paddingBottom: 1,
        cursor: "pointer",
      }}
      onClick={() => {
        window.location = "/";
      }}
    >
      <Typography fontFamily={"Segoe UI"} fontSize={"22px"} color={"#28a745"}>
        Nucleoid
      </Typography>
    </Box>
  );
}

export default Logo;
