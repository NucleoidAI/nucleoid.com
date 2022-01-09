import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Default from "../layouts/Default";
import Gist from "react-gist";
import aiImage from "../images/007-AI.png";
import cubeImage from "../images/019-cube.png";
import databaseImage from "../images/019-database-5.png";
import iceCreamImage from "../images/ice-cream.jpeg";
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

function Home() {
  const classes = useStyles();

  return (
    <Default container={false}>
      <Box className={classes.banner}>
        <Container>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box width={550}>
                <Typography fontSize={52} textAlign={"center"}>
                  Data Storage with
                  <br />
                  Vanilla JavaScript
                </Typography>
              </Box>
            </Box>
            <Box width={75} />
            <Box>
              <img src={iceCreamImage} alt={"Ice Cream"} height={500} />
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
                width={400}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ArrowForwardIosIcon />
                <Typography fontFamily={"Trebuchet MS"} variant={"h5"}>
                  npm install nucleoidjs
                </Typography>
                <Fab>
                  <ContentCopyIcon />
                </Fab>
              </Box>
            </Paper>
          </Grid>
          <Grid container item xs={4} justifyContent={"center"}>
            <Column
              image={cubeImage}
              title={"Declarative"}
              description={
                "The runtime doesn't require database or cache server, which reduces number of elements have to be maintained."
              }
            />
          </Grid>
          <Grid container item xs={4} justifyContent={"center"}>
            <Column
              image={aiImage}
              title={"Low-code"}
              description={
                "Organic Low-code Control flow is defined based on formal logic instead of explicit steps; it enables writing codes with building blocks with less code lines."
              }
            />
          </Grid>
          <Grid container item xs={4} justifyContent={"center"}>
            <Column
              image={databaseImage}
              title={"Persistency"}
              description={
                "The programming runtime persists each statement so that it doesn't require external data storage like traditional RDBMS."
              }
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant={"h4"}>&nbsp;Hello World</Typography>
            <Gist id={"92261e1b17c81f85dd1288d7e0fb0c0f"} />
          </Grid>
          <Grid container item xs={6} alignItems={"center"}>
            <Typography>
              &#128077; This is pretty much it, you successfully persisted your
              first object with this!
              <br />
              <br />
              Nucleoid is a state-based data storage as writing just like any
              other codes in Node.js, it rerenders the same JavaScript codes and
              makes the necessary adjustments in the state as well as stores on
              the disk.
            </Typography>
          </Grid>
          <Grid container item xs={4} alignItems={"center"}>
            <Typography>
              &#129321; Easy Peasy! Since Nucleoid runtime tracks the JavaScript
              state, it makes the necessary adjustments in the state, and &nbsp;
              <u>organically</u> reduces numbers of code lines needed.
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant={"h4"}>...and CRUD ops</Typography>
            <Gist id={"cfa2726aedaa5f090c52becd837e0a0c"} />
          </Grid>
        </Grid>
      </Container>
    </Default>
  );
}

export default Home;
