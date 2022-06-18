import frameImage from "../images/frame.png";
import { makeStyles } from "@mui/styles";
import promptImage from "../images/prompt-2.gif";
import { Box, Button, Container, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  banner: {
    paddingTop: theme.spacing(8),
    background: "#313a40",
    minHeight: 500,
  },
}));

function Prompt() {
  const classes = useStyles();

  return (
    <Box className={classes.banner}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                sx={{
                  margin: 1,
                }}
              >
                Learn more
              </Button>
            </Box>
          </Box>
          <Box width={100} />
          <Box>
            <img
              style={{ display: "block", borderRadius: "3px 3px 0px 0px" }}
              src={frameImage}
              width={550}
              alt={"Prompt"}
            />
            <img
              style={{
                display: "block",
                borderColor: "#464646",
                borderStyle: "solid",
                borderWidth: "0px 1px 1px 2px",
              }}
              src={promptImage}
              alt={"Low-code Framework for Node.js"}
              width={550}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Prompt;
