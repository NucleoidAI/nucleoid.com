import frameImage from "../images/frame.png";
import { makeStyles } from "@mui/styles";
import promptImage from "../images/prompt-2.gif";
import { Box, Button, Grid, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  banner: {
    background: "#313a40",
    minHeight: 500,
  },
}));

function Prompt() {
  const classes = useStyles();

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
            <Typography fontSize={42} textAlign={"center"} color={"#e5e5e5"}>
              Low-code Framework
              <br />
              for Node.js
            </Typography>
            <Typography fontSize={28} textAlign={"center"} color={"#9b9b9b"}>
              with built-in datastore
            </Typography>
            <Button
              variant={"contained"}
              onClick={() =>
                window.open("https://nucleoid.com/ide/", "_blank").focus()
              }
              color={"inherit"}
              size={"large"}
              sx={{
                my: 4,
              }}
            >
              Learn more
            </Button>
          </Box>
        </Box>
      </Grid>
      <Box width={75} sx={{ display: { xs: "none", md: "block" } }} />
      <Grid item sx={{ padding: 2 }}>
        <img
          style={{
            display: "block",
            width: "100%",
            maxWidth: 550,
            borderRadius: "3px 3px 0px 0px",
          }}
          src={frameImage}
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
          src={promptImage}
          alt={"Low-code Framework for Node.js"}
        />
      </Grid>
    </Grid>
  );
}

export default Prompt;
