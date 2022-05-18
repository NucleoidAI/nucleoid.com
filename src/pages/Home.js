import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import GitHubIcon from "@mui/icons-material/GitHub";
import Markdown from "../components/Markdown";
import Space from "../components/Space";
import aiImage from "../images/007-AI.png";
import blockchainImage from "../images/blockchain.png";
import codingImage from "../images/coding.png";
import consoleImage from "../images/console.png";
import cubeImage from "../images/019-cube.png";
import cylinderImage from "../images/database.png";
import databaseImage from "../images/019-database-5.png";
import gtag from "../gtag";
// eslint-disable-next-line import/no-webpack-loader-syntax
import helloWorldMD from "!!raw-loader!../markdowns/hello-world.md";
import leafImage from "../images/leaf.png";
import logicalDiagramImage from "../images/logical-diagram.png";
import { makeStyles } from "@mui/styles";
import networkingImage from "../images/networking.png";
import nucleoidImage from "../images/113933331.png";
import processingImage from "../images/processing.png";
import promptImage from "../images/80553592.png";
import transactionImage from "../images/cpu.png";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  Divider,
  Fab,
  Grid,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

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
      item
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

function Home() {
  const classes = useStyles();
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    gtag("event", "page_view", {
      page_title: "Home",
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  });

  return (
    <>
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
              for Node.js
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
                  for Node.js
                </Typography>
              </Box>
            </Box>
            <Box width={75} />
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <img src={promptImage} alt={"Low-code Framework for Node.js"} />
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
                <Tooltip
                  title={copied ? "Copied" : ""}
                  leaveDelay={1000}
                  onClose={() => setCopied(false)}
                >
                  <Fab
                    onClick={() => {
                      navigator.clipboard.writeText("npm install nucleoidjs");
                      setCopied(true);
                    }}
                  >
                    <ContentCopyIcon />
                  </Fab>
                </Tooltip>
              </Box>
            </Paper>
          </Grid>
          <Space />
          <Grid container item xs={12} lg={4} justifyContent={"center"}>
            <Column
              image={cubeImage}
              title={"Declarative"}
              description={
                "Nucleoid is embedded inside Node.js and renders the very same JavaScript codes and makes the necessary adjustments in the state."
              }
              alt={"Cube"}
            />
          </Grid>
          <Grid container item xs={12} lg={4} justifyContent={"center"}>
            <Column
              image={aiImage}
              title={"AI-powered"}
              description={
                "Nucleoid runtime builds the network of statements and adjusts connections as receives more entries so that it lowers number of codes needed."
              }
              alt={"AI"}
            />
          </Grid>
          <Grid container item xs={12} lg={4} justifyContent={"center"}>
            <Column
              image={databaseImage}
              title={"Built-in Datastore"}
              description={
                "The runtime tracks and persists each statement so that it doesn't require external data storage like relational DB or NoSQL."
              }
              alt={"Datastore"}
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
              title={"Write pure business logic in JavaScript"}
              description={
                "Nucleoid runtime accepts business logic in vanilla JS just like any other codes in Node.js but without requiring to install database or anything else."
              }
              alt={"Coding"}
            />
            <Step
              image={processingImage}
              title={"Nucleoid renders your codes with AI"}
              description={
                "The runtime renders the JavaScript codes just-in-time and makes the necessary adjustments."
              }
              alt={"Processing"}
            />
            <Step
              image={consoleImage}
              title={"Creates APIs with built-in datastore"}
              description={
                "As a result, Nucleoid creates endpoints and runs business logic as well a stores all your statements/data on the disk out-of-box."
              }
              alt={"Console"}
            />
          </Grid>
          <Space />
          <Grid item xs={12} lg={6} sx={{ padding: { lg: 5 } }}>
            <Typography variant={"h4"}>&nbsp;Hello World</Typography>
            <Markdown content={helloWorldMD} />
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
              <Button size={"large"} onClick={() => navigate("/learn")}>
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
        <Grid container item xs={12} justifyContent={"center"}>
          <Button
            startIcon={<GitHubIcon />}
            size={"large"}
            variant={"outlined"}
            sx={{
              p: 2,
            }}
            onClick={() =>
              window.open("https://github.com/NucleoidJS/Nucleoid", "_blank")
            }
          >
            Star us on GitHub
          </Button>
        </Grid>
        <Space />
        <Divider />
        <Space />
        <Grid container item justifyContent={"center"}>
          <Box maxWidth={625} bgcolor={"#f9f9f9"} padding={2}>
            <Typography variant={"h6"}>
              Under the hood: Declarative Runtime Environment
            </Typography>
            <img
              src={nucleoidImage}
              alt={"Nucleoid"}
              style={{ float: "left", margin: 10 }}
              width={150}
            />
            <p>
              The declarative runtime environment isolates a behavior definition
              of a program from its technical instructions and executes
              declarative statements, which represent logical intention without
              carrying any technical details. In this paradigm, there is no
              segregation regarding what data is or not, instead approaches how
              data is related with others so that any type of data including
              business rules can be added without requiring any additional
              actions such as compiling, configuring, restarting as a result of
              plasticity.
            </p>
            <img
              src={logicalDiagramImage}
              alt={"Logical Diagram"}
              style={{
                float: "right",
                margin: 10,
                border: "1px solid #a0a0a0",
              }}
              width={225}
            />
            <p>
              As the name suggests, the runtime system runs as daemon process
              and accepts an entry through operating system. As soon as an entry
              received, JIT compiler compiles to runnable statements, and hand
              it over to the call stack. Execution of the statement consists of
              3 steps; updating state, adjusting dependency graph and storing,
              and as a result, the statement can produce more statements in
              order to provide logical integrity. Those produced statements will
              be added into the call stack as well for further cycles.
              Alternatively, a statement can return value when all logical
              transactions completed.
            </p>
            <p>
              As a part of plasticity, all types of statements including
              business rules are considered as data so that statements can be
              added without requiring any further actions such as recompiling,
              restarting etc. Learn more at{" "}
              <a href={"https://nucleoid.org/"}>nucleoid.org</a>
            </p>
            <Box sx={{ marginTop: 10 }}>
              <blockquote>
                Origin of name, Nucleoid comes from latin word nucleus-like,
                which is the region in prokaryotic organisms and makes living
                things, a living thing. Maybe, this makes machine a living
                thing, like mentioned in Watson's behaviorism.
              </blockquote>
            </Box>
          </Box>
        </Grid>
        <Space />
      </Container>
    </>
  );
}

export default Home;
