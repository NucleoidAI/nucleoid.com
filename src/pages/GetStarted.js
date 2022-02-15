import Default from "../layouts/Default";
import Markdown from "../components/Markdown";
// eslint-disable-next-line import/no-webpack-loader-syntax
import getStartedMD from "!!raw-loader!../markdowns/get-started.md";
import { Button, Grid } from "@mui/material";
import Space from "../components/Space";

function GetStarted() {
  return (
    <Default>
      <Markdown content={getStartedMD} />
      <Space />
      <Grid container item xs={12} justifyContent={"center"}>
        <Button
          size={"large"}
          variant={"outlined"}
          sx={{ p: 2 }}
          onClick={() => (window.location = "/learn")}
        >
          Go to Tutorial Page
        </Button>
      </Grid>
      <Space />
    </Default>
  );
}

export default GetStarted;
