import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Default from "../layouts/Default";
import Markdown from "../components/Markdown";
import aiImage from "../images/007-AI.png";
import blockchainImage from "../images/blockchain.png";
import codingImage from "../images/coding.png";
import consoleImage from "../images/console.png";
import cubeImage from "../images/019-cube.png";
import cylinderImage from "../images/database.png";
import databaseImage from "../images/019-database-5.png";
import helloWorldMD from "../markdowns/hello-world.md";
import leafImage from "../images/leaf.png";
import { makeStyles } from "@mui/styles";
import networkingImage from "../images/networking.png";
import processingImage from "../images/processing.png";
import promptImage from "../images/80553592.png";
import transactionImage from "../images/cpu.png";
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
    background: "#0094ab", //#008ba4
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

function Feature({ image, primary, secondary, justify, xs, lg }) {
  return (
    <Grid
      container
      xs={12}
      lg={6}
      alignContent={"center"}
      sx={{
        padding: 4,
        display: { xs: xs ? "flex" : "none", lg: lg ? "flex" : "none" },
        justifyContent: { xs: "center", lg: justify },
      }}
    >
      {image && (
        <>
          <img src={image} alt={"Sunset"} width={100} />
          <Box width={10} />
        </>
      )}
      {primary && (
        <>
          <Box width={10} />
          <Box maxWidth={325}>
            <Typography variant={"h5"}>{primary}</Typography>
            <Typography>{secondary}</Typography>
          </Box>
        </>
      )}
    </Grid>
  );
}

function Step({ image, title, description, alt }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          maxWidth: 750,
          margin: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ marginRight: 3 }}>
          <img src={image} width={150} alt={alt} />
        </Box>
        <Box>
          <Typography fontSize={28}>{title}</Typography>
          <Typography>{description}</Typography>
          <br />
          <br />
        </Box>
      </Box>
    </>
  );
}

const Space = ({ height }) => <Grid item xs={12} height={height || 50} />;

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
            <Typography fontSize={48} textAlign={"center"} color={"white"}>
              Low-code
              <br />
              Framework
              <br />
              for JavaScript
              <br />
              <img src={leafImage} alt={"Leaf"} height={100} />
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: { xs: "none", lg: "block" } }}>
                <Typography fontSize={48} textAlign={"center"} color={"white"}>
                  Low-code Framework
                  <br />
                  for JavaScript
                </Typography>
              </Box>
            </Box>
            <Box width={75} />
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <img
                src={promptImage}
                alt={"Low-code Framework for JavaScript"}
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={2}>
          <Space height={25} />
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
              title={"AI-powered"}
              description={
                "Bringing data storage inside the runtime organically lowers number of codes since the runtime cuts out all technical code lines needed for data."
              }
              alt={"AI"}
            />
          </Grid>
          <Grid container item xs={12} lg={4} justifyContent={"center"}>
            <Column
              image={databaseImage}
              title={"Persistence"}
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
          <Space height={25} />
          <Grid container item xs={12} justifyContent={"center"}>
            <Step
              image={codingImage}
              title={"Write your business logic in JavaScript"}
              description={
                "Nucleoid runtime accepts business logic in vanilla JS just like any other codes in Node.js but without requiring to install database or anything else."
              }
              alt={"Coding"}
            />
            <Step
              image={processingImage}
              title={"Nucleoid renders your JavaScript"}
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
            <Markdown path={helloWorldMD} />
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
              &#128077; This is pretty much it, you successfully saved your
              first object without installing <u>external database</u> or
              anything else!
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
          <Space />
          <Grid container item xs={12} justifyContent={"center"}>
            <Grid container item xs={12} justifyContent={"center"}>
              <Typography variant={"h2"}>Features</Typography>
            </Grid>
            <Feature image={networkingImage} justify={"end"} xs lg />
            <Feature
              primary={"Immediately start writing business logic"}
              secondary={
                "All the technical parts are taken care of by low-code framework, so that developers can focus on the business logic."
              }
              xs
              lg
              justify={"start"}
            />
            <Feature image={cylinderImage} justify={"start"} xs />
            <Feature
              primary={"Internal Data Management"}
              secondary={
                "Nucleoid runtime comes with own data storage, but you also can export or stream your data to external storage system."
              }
              justify={"end"}
              xs
              lg
            />
            <Feature image={cylinderImage} justify={"start"} lg />
            <Feature image={blockchainImage} justify={"end"} xs lg />
            <Feature
              primary={"All you need is JavaScript"}
              secondary={
                "Nucleoid runtime lets you code entire backend including data ops only with JavaScript, and no SQL or anything else needed."
              }
              justify={"start"}
              xs
              lg
            />
            <Feature image={transactionImage} justify={"start"} xs />
            <Feature
              primary={"Lighting fast"}
              secondary={
                "Since data and logic in the same box, you get extreme speed without requiring tuning like connection pools, transaction manager etc."
              }
              justify={"end"}
              xs
              lg
            />
            <Feature image={transactionImage} justify={"start"} lg />
          </Grid>
        </Grid>
        <Space />
      </Container>
    </Default>
  );
}

export default Home;
