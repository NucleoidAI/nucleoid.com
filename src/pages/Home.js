import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Default from "../layouts/Default";
import Emojify from "react-emojione";
import Gist from "react-gist";
import aiImage from "../images/007-AI.png";
import astronaut from "../images/astronaut.jpeg";
import cubeImage from "../images/019-cube.png";
import databaseImage from "../images/019-database-5.png";
import { makeStyles } from "@mui/styles";
import { Box, Container, Fab, Grid, Paper, Typography } from "@mui/material";

export const useStyles = makeStyles((theme) => ({
  banner: {
    background: "#ffffff",
  },
  install: {
    padding: theme.spacing(2),
    backgroundColor: "red",
  },
}));

function Column({ image, title, description }) {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img src={image} width={100} alt={" "} />
        <br />
        <Typography variant={"h4"}>{title}</Typography>
        <br />
        <Typography>{description}</Typography>
      </Box>
    </>
  );
}

const CRUDOps = () => (
  <Typography>
    &#129321; Easy Peasy! Since Nucleoid runtime tracks the JavaScript state, it
    makes the necessary adjustments in the state, and &nbsp;
    <u>organically</u> reduces numbers of code lines needed.
  </Typography>
);

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
              textShadow: "2px 3px gray",
              height: 400,
            }}
          >
            <Typography fontSize={52} textAlign={"center"}>
              Low-code
              <br />
              Data Storage
              <br />
              with JS
              <br />
              <Emojify style={{ height: 64, width: 64 }}>:icecream:</Emojify>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <Typography fontSize={52} textAlign={"center"}>
                  AI-powered Data Storage
                  <br />
                  for this Century
                </Typography>
              </Box>
            </Box>
            <Box width={75} />
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <img src={astronaut} alt={"Astronaut"} height={500} />
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
          <Grid container item xs={12} lg={4} justifyContent={"center"}>
            <Column
              image={cubeImage}
              title={"Declarative"}
              description={
                "The runtime is embedded inside Node.js and rerenders the very same JavaScript codes and makes the necessary adjustments in the state."
              }
            />
          </Grid>
          <Grid container item xs={12} lg={4} justifyContent={"center"}>
            <Column
              image={aiImage}
              title={"Low-code"}
              description={
                "Bringing data storage inside the runtime organically lowers number of codes since the runtime cuts out all technical code lines needed for data."
              }
            />
          </Grid>
          <Grid container item xs={12} lg={4} justifyContent={"center"}>
            <Column
              image={databaseImage}
              title={"Persistent"}
              description={
                "The runtime tracks and persists each statement so that it doesn't require external data storage like traditional RDBMS."
              }
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <Typography variant={"h4"}>&nbsp;Hello World</Typography>
            <Gist id={"92261e1b17c81f85dd1288d7e0fb0c0f"} />
          </Grid>
          <Grid container item xs={12} lg={6} alignItems={"center"}>
            <Typography>
              &#128077; This is pretty much it, you successfully persisted your
              first object&nbsp;
              <u>without installing external database</u>!
              <br />
              <br />
              Nucleoid is a state-based data storage as writing just like any
              other codes in Node.js, it rerenders the same JavaScript codes and
              makes the necessary adjustments in the state as well as stores on
              the disk.
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={4}
            sx={{ display: { xs: "none", lg: "flex" } }}
            alignItems={"center"}
          >
            <CRUDOps />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Typography variant={"h4"}>...and CRUD ops</Typography>
            <Gist id={"cfa2726aedaa5f090c52becd837e0a0c"} />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sx={{ display: { xs: "block", lg: "none" } }}
            alignItems={"center"}
          >
            <CRUDOps />
          </Grid>
        </Grid>
      </Container>
    </Default>
  );
}

export default Home;
