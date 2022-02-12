import Default from "../layouts/Default";
import { DiscussionEmbed } from "disqus-react";
import Markdown from "../components/Markdown";
import ReactMarkdownHeading from "react-markdown-heading";
// eslint-disable-next-line import/no-webpack-loader-syntax
import learnMD from "!!raw-loader!../markdowns/learn.md";
import { Box, Grid, Paper } from "@mui/material";

function Learn() {
  return (
    <Default>
      <Grid container>
        <Grid item xs={12} lg={9}>
          <Markdown content={learnMD} />
        </Grid>
      </Grid>
      <Paper
        sx={{
          position: "fixed",
          top: 200,
          right: 15,
          width: 350,
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      >
        <Box sx={{ margin: 5 }}>
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
      <DiscussionEmbed
        shortname="nucleoidjs"
        config={{
          identifier: "learn-1",
          title: "Nucleoid: Low-code framework for JS",
        }}
      />
    </Default>
  );
}

export default Learn;
