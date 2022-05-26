import { ReactComponent as DiscordIcon } from "../images/discord.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WeekCalendar from "../components/WeekCalendar";
import { Box, IconButton } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Box className={classes.footer}>
        <WeekCalendar />
        Nucleoid
        <Box>
          <IconButton
            onClick={() =>
              window.open("https://discord.gg/eWXFCCuU5y", "_blank")
            }
          >
            <DiscordIcon />
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
