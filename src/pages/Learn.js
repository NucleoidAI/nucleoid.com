import { DiscussionEmbed } from "disqus-react";
import Markdown from "../components/Markdown";
import ReactMarkdownHeading from "react-markdown-heading";
import Space from "../components/Space";
// eslint-disable-next-line import/no-webpack-loader-syntax
import learnMD from "!!raw-loader!../markdowns/learn.md";
import lifeguardImage from "../images/lifeguard.png";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Zoom,
} from "@mui/material";
import React, { useEffect, useState } from "react";

function Learn() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const visited = localStorage.getItem("visited");

      if (visited === null) {
        localStorage.setItem("visited", "first_time");
        setChecked(true);
      }

      if (visited === "first_time") {
        localStorage.setItem("visited", "true");
        setTimeout(() => setChecked(true), 8000);
      }
    }, 8000);
  }, []);
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} lg={9}>
          <Markdown content={learnMD} />
        </Grid>
        <Space />
        <Grid container item xs={12} lg={9} justifyContent={"center"}>
          <Button
            size={"large"}
            variant={"outlined"}
            sx={{ p: 2 }}
            onClick={() =>
              window.open("https://github.com/NucleoidJS/Nucleoid", "_blank")
            }
          >
            Ask Question or Submit Issue
          </Button>
        </Grid>
        <Space />
        <Grid item xs={12} lg={9}>
          <DiscussionEmbed
            shortname="nucleoidjs"
            config={{
              identifier: "learn-1",
              title: "Nucleoid: Low-code framework for JS",
            }}
          />
        </Grid>
      </Grid>
      <Paper
        sx={{
          position: "fixed",
          top: "calc(50% - 200px)",
          right: 15,
          width: 300,
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      >
        <Box sx={{ margin: 2 }}>
          Contents
          <ReactMarkdownHeading
            markdown={learnMD}
            hyperlink={true}
            ulClassName={"tocUl"}
            liClassName={"tocLi"}
            anchorClassName={"tocAnchor"}
          />
        </Box>
      </Paper>
      <Box
        sx={{
          position: "fixed",
          bottom: 25,
          right: 25,
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      >
        <div>
          <Zoom in={checked} style={{ transitionDelay: "1000ms" }}>
            <Box width={300}>
              <Typography fontSize={14}>
                <img
                  src={lifeguardImage}
                  alt={"Lifeguard"}
                  width={25}
                  style={{ float: "left", margin: 8 }}
                />
                Nucleoid is fully open source project
                <br />
                Please star us on{" "}
                <a
                  href={"https://github.com/NucleoidJS/Nucleoid"}
                  target={"_blank"}
                  rel="noreferrer"
                >
                  GitHub
                </a>{" "}
                for the support.
              </Typography>
            </Box>
          </Zoom>
        </div>
      </Box>
    </Container>
  );
}

export default Learn;
