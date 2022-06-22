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
      <Typography
        fontSize={"26px"}
        fontWeight={400}
        sx={{
          background:
            "linear-gradient(135deg, rgba(32,153,88,1) 0%, rgba(0,141,114,1) 100%)",
          backgroundClip: "text",
          "-webkit-background-clip": "text",
          "-moz-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
          "-moz-text-fill-color": "transparent",
        }}
      >
        Nucleoid
      </Typography>
    </Box>
  );
}

export default Logo;
