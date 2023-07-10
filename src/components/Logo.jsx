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
          WebkitBackgroundClip: "text",
          MozBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          MozTextFillColor: "transparent",
        }}
      >
        Nucleoid
      </Typography>
    </Box>
  );
}

export default Logo;
