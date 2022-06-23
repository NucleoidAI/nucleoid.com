import Markdown from "../components/Markdown";
// eslint-disable-next-line import/no-webpack-loader-syntax
import helloWorldMD from "!!raw-loader!../markdowns/hello-world.md";
import typescriptImage from "../images/typescript.png";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";

function HelloWorld() {
  return (
    <>
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
          &#128077; This is pretty much it, you successfully saved your first
          object without installing <u>external database</u> or anything else!
        </Typography>
        <br />
        <Grid container item justifyContent={"center"}>
          <Button
            size={"large"}
            onClick={() => window.location.assign("/docs/")}
          >
            Learn more
          </Button>
        </Grid>
        <br />
        <Paper sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={typescriptImage} alt={"TypeScript"} width={25} />
            <Typography sx={{ marginLeft: 1 }}>
              TypeScript support coming soon
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </>
  );
}

export default HelloWorld;
