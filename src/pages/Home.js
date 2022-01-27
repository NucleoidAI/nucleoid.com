import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Default from "../layouts/Default";
import Gist from "react-gist";
import aiImage from "../images/007-AI.png";
import astronautImage from "../images/astronaut.jpeg";
import codingImage from "../images/coding.png";
import consoleImage from "../images/console.png";
import cubeImage from "../images/019-cube.png";
import databaseImage from "../images/019-database-5.png";
import { makeStyles } from "@mui/styles";
import processingImage from "../images/processing.png";
import rocketIconImage from "../images/rocket-icon.png";
import rocketImage from "../images/rocket.png";
import {
  Box,
  Button,
  Container,
  Fab,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

export const useStyles = makeStyles((theme) => ({
  banner: {
    background: "#ffffff",
  },
  install: {
    padding: theme.spacing(2),
    backgroundColor: "red",
  },
}));

function Column({ image, title, description, alt }) {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img src={image} width={100} alt={alt} />
        <br />
        <Typography variant={"h4"}>{title}</Typography>
        <br />
        <Typography>{description}</Typography>
      </Box>
    </>
  );
}

function Step({ image, title, description, alt }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          maxWidth: 750,
          margin: 1,
          alignItems: "center",
        }}
      >
        <Box>
          <img src={image} width={200} alt={alt} />
        </Box>
        <Box>
          <Typography variant={"h4"}>{title}</Typography>
          <Typography>{description}</Typography>
        </Box>
      </Box>
    </>
  );
}

const Space = () => <Grid item xs={12} height={50} />;

function Home() {
  const classes = useStyles();

  return (
    <Default container={false}>
      <Box className={classes.banner}>
        <Container>
          <Box
            sx={{
              display: { xs: "flex", lg: "none" },
              justifyContent: "center",
              alignItems: "center",
              height: 400,
            }}
          >
            <Typography fontSize={52} textAlign={"center"}>
              AI-powered
              <br />
              Low-code
              <br />
              for this Century
              <br />
              <img src={rocketIconImage} alt={"Rocket Icon"} height={100} />
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <Typography fontSize={54} textAlign={"center"}>
                  AI-powered Low-code
                  <br />
                  for this Century
                </Typography>
              </Box>
            </Box>
            <Box width={75} />
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <img src={astronautImage} alt={"Astronaut"} height={500} />
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={2}>
          <Grid
            container
            item
            xs={12}
            justifyContent={"center"}
            alignItems={"center"}
            height={150}
          >
            <Paper className={classes.install}>
              <Box
                sx={{
                  display: "flex",
                  width: {
                    xs: 350,
                    lg: 400,
                  },
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ArrowForwardIosIcon />
                <Typography fontFamily={"Trebuchet MS"} variant={"h5"}>
                  npm install nucleoidjs
                </Typography>
                <Fab
                  onClick={() => {
                    navigator.clipboard.writeText("npm install nucleoidjs");
                  }}
                >
                  <ContentCopyIcon />
                </Fab>
              </Box>
            </Paper>
          </Grid>
          <Space />
          <Grid container item xs={12} lg={4} justifyContent={"center"}>
            <Column
              image={cubeImage}
              title={"Declarative"}
              description={
                "The runtime is embedded inside Node.js and rerenders the very same JavaScript codes and makes the necessary adjustments in the state."
              }
              alt={"Cube"}
            />
          </Grid>
          <Grid container item xs={12} lg={4} justifyContent={"center"}>
            <Column
              image={aiImage}
              title={"Low-code"}
              description={
                "Bringing data storage inside the runtime organically lowers number of codes since the runtime cuts out all technical code lines needed for data."
              }
              alt={"AI"}
            />
          </Grid>
          <Grid container item xs={12} lg={4} justifyContent={"center"}>
            <Column
              image={databaseImage}
              title={"Persistent"}
              description={
                "The runtime tracks and persists each statement so that it doesn't require external data storage like traditional RDBMS."
              }
              alt={"Database"}
            />
          </Grid>
          <Space />
          <Grid container item xs={12} justifyContent={"center"}>
            <Typography variant={"h2"}>How it works</Typography>
          </Grid>
          <Grid container item xs={12} justifyContent={"center"}>
            <Step
              image={codingImage}
              title={"Write business logic in JS"}
              description={
                "Nucleoid runtime accepts business logic in vanilla JS just like any other codes in Node.js but without requiring to install database or anything else."
              }
              alt={"Coding"}
            />
            <Step
              image={processingImage}
              title={"Nucleoid renders JS"}
              description={
                "The runtime renders the JavaScript codes just-in-time and makes the necessary adjustments."
              }
              alt={"Processing"}
            />
            <Step
              image={consoleImage}
              title={"Provides API and data storage"}
              description={
                "As a result, Nucleoid creates endpoints and runs business logic as well a stores all your statements/data on the disk out-of-box."
              }
              alt={"Console"}
            />
          </Grid>
          <Space />
          <Grid item xs={12} lg={6}>
            <Typography variant={"h4"}>&nbsp;Hello World</Typography>
            <Gist id={"92261e1b17c81f85dd1288d7e0fb0c0f"} />
          </Grid>
          <Grid
            container
            item
            xs={12}
            lg={6}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography fontSize={22}>
              &#128077; This is pretty much it, you successfully persisted your
              first object&nbsp;<u>without installing external database</u>!
            </Typography>
            <br />
            <Grid container item justifyContent={"center"}>
              <Button
                size={"large"}
                onClick={() => (window.location = "/learn")}
              >
                Learn more
              </Button>
            </Grid>
          </Grid>
          <Grid container item xs={12} justifyContent={"center"}>
            <img
              src={rocketImage}
              alt={"Coding"}
              width={750}
              style={{ maxWidth: "100%" }}
            />
          </Grid>
          <Space />
        </Grid>
      </Container>
    </Default>
  );
}

export default Home;
