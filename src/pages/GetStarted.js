import Markdown from "../components/Markdown";

import Space from "../components/Space";
// eslint-disable-next-line import/no-webpack-loader-syntax
import getStartedMD from "!!raw-loader!../markdowns/get-started.md";
import gtag from "../gtag";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Grid } from "@mui/material";

function GetStarted() {
  const navigate = useNavigate();

  useEffect(() => {
    gtag("event", "page_view", {
      page_title: "Get Started",
      page_location: window.location.href,
      page_path: window.location.pathname,
    });
  }, []);

  return (
    <Container>
      <Markdown content={getStartedMD} />
      <Space />
      <Grid container item xs={12} justifyContent={"center"}>
        <Button
          size={"large"}
          variant={"outlined"}
          sx={{ p: 2 }}
          onClick={() => navigate("/learn")}
        >
          Go to Tutorial Page
        </Button>
      </Grid>
      <Space />
    </Container>
  );
}

export default GetStarted;
