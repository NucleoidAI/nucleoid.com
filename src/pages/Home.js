import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Default from "../layouts/Default";
import aiImage from "../images/007-AI.png";
import cubeImage from "../images/019-cube.png";
import databaseImage from "../images/019-database-5.png";
import iceCreamImage from "../images/199699445.jpeg";
import { makeStyles } from "@mui/styles";
import { Box, Container, Fab, Grid, Paper, Typography } from "@mui/material";

export const useStyles = makeStyles((theme) => ({
  banner: {
    background: "#FFFFFF",
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
        height={400}
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
                  Data Store with
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
              title={"Organic Low-code"}
              description={
                "Control flow is defined based on formal logic instead of explicit steps; it enables writing codes with building blocks with less code lines."
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
        </Grid>
      </Container>
    </Default>
  );
}

export default Home;
