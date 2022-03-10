import Markdown from "../components/Markdown";

import Space from "../components/Space";
// eslint-disable-next-line import/no-webpack-loader-syntax
import getStartedMD from "!!raw-loader!../markdowns/get-started.md";
import { Button, Container, Grid } from "@mui/material";
// eslint-disable-next-line
import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <Container>
      <Markdown content={getStartedMD} />
      <Space />
      <Grid container item xs={12} justifyContent={"center"}>
        <Link to={"/learn"}>
          <Button size={"large"} variant={"outlined"} sx={{ p: 2 }}>
            Go to Tutorial Page
          </Button>
        </Link>
      </Grid>
      <Space />
    </Container>
  );
}

export default GetStarted;
