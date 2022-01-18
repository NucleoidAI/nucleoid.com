import Default from "../layouts/Default";
import Markdown from "../components/Markdown";
import ReactMarkdownHeading from "react-markdown-heading";
import learnMD from "../markdowns/learn.md";
import { Box, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";

function Learn() {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(learnMD)
      .then((res) => res.text())
      .then((text) => {
        setText(text);
      });
  }, []);

  return (
    <Default>
      <Grid container>
        <Grid item xs={9}>
          <Markdown path={learnMD} />
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
          <ReactMarkdownHeading
            markdown={text}
            hyperlink={true}
            ulClassName={"tocUl"}
            liClassName={"tocLi"}
            anchorClassName={"tocAnchor"}
          />
        </Box>
      </Paper>
    </Default>
  );
}

export default Learn;
