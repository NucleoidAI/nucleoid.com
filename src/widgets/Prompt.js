import { makeStyles } from "@mui/styles";
import {
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  banner: {
    background: "#313a40",
    minHeight: 500,
  },
  space: {
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
}));

function Prompt() {
  const classes = useStyles();
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Grid
      container
      className={classes.banner}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Box height={50} sx={{ display: { xs: "block", md: "none" } }} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: 38, md: 42 } }}
              textAlign={"center"}
              color={"#e5e5e5"}
            >
              Low-code Framework
              <br />
              for Node.js
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 22, md: 24 } }}
              textAlign={"center"}
              color={"#9b9b9b"}
            >
              Build your APIs with the help of&nbsp;
              <span
                style={{
                  background:
                    "linear-gradient(135deg, hotpink 0%, rgba(0,141,114,1) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  MozBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  MozTextFillColor: "transparent",
                  fontSize: 28,
                }}
              >
                AI
              </span>
              <br />
              ..and built-in datastore
            </Typography>
            <Button
              variant={"contained"}
              onClick={() => {
                if (breakpoint) {
                  window.open("/ide/", "_blank").focus();
                }

                window.location.assign("/docs/");
              }}
              color={"inherit"}
              size={"large"}
              sx={{
                my: 3,
              }}
            >
              Learn more
            </Button>
          </Box>
        </Box>
      </Grid>
      <Box width={75} className={classes.space} />
      <Grid item sx={{ padding: 2 }}>
        <img
          style={{
            display: "block",
            width: "100%",
            maxWidth: 550,
            borderRadius: "3px 3px 0px 0px",
          }}
          src={"https://cdn.nucleoid.com/media/frame.png"}
          alt={"Prompt"}
        />
        <img
          style={{
            display: "block",
            width: "100%",
            maxWidth: 550,
            borderColor: "#464646 #868686 #464646 #464646",
            borderStyle: "solid",
            borderWidth: "0px 1px 1px 2px",
          }}
          src={"https://cdn.nucleoid.com/media/prompt-2.gif"}
          alt={"Low-code Framework for Node.js"}
        />
      </Grid>
    </Grid>
  );
}

export default Prompt;
