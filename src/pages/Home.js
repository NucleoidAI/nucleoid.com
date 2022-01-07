import { Box, Container, Grid, Pagination, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Default from "../layouts/Default";
import iceCreamImage from "../images/199699445.jpeg";
import cubeImage from "../images/019-cube.png";
import databaseImage from "../images/019-database-5.png";
import aiImage from "../images/007-AI.png";

export const useStyles = makeStyles(() => ({
  banner: {
    background: "#FFFFFF",
  },
}));

function Column({ image, title, description }) {
  return (
    <>
      <Box
        height={400}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img src={image} width={100} />
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
              <img src={iceCreamImage} height={500} />
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
            <Box>npm i nucleoidjs</Box>
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
