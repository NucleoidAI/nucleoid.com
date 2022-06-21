import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

function Logo(props) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => navigate("/")}
    >
      <Typography fontSize={"24px"} color={"#209958"}>
        Nucleoid
      </Typography>
    </Box>
  );
}

export default Logo;
