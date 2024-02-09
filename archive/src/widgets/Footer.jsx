import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import WeekCalendar from "../components/WeekCalendar";
import { Box, IconButton } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Box
        sx={{
          color: "#a9a9a9",
          fontSize: 16,
          p: 2,
          background: "#343e48",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <WeekCalendar />
        Nucleoid
        <Box>
          <IconButton
            onClick={() =>
              window.open("https://discord.gg/eWXFCCuU5y", "_blank")
            }
          >
            <img
              src={"https://cdn.nucleoid.com/media/discord.svg"}
              alt={"Discord"}
            />
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
      </Box>
    </footer>
  );
}

export default Footer;
