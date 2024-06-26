import { Grid, Container, Typography } from "@mui/material";

import Step from "../components/Step";

function Steps() {
  return (
    <Container>
      <Grid container item xs={12} justifyContent="center">
        <Typography variant="h2">How it works</Typography>
      </Grid>
      <Grid container item xs={12} justifyContent="center">
        <Step
          image="https://cdn.nucleoid.com/media/coding.png"
          bullet="I."
          title="Write your business logic"
          description="Nucleoid runtime accepts business logic in JavaScript or TypeScript just like any other codes in Node.js but without requiring to install database or anything else."
          alt="Coding"
        />
        <Step
          image="https://cdn.nucleoid.com/media/processing.png"
          bullet="II."
          title="Nucleoid renders your codes"
          description="Symbolic AI in the runtime renders your codes based on the logical graph and makes the necessary adjustments in JavaScript state."
          alt="Processing"
        />
        <Step
          image="https://cdn.nucleoid.com/media/console.png"
          bullet="III."
          title="Creates APIs with built-in datastore"
          description="Nucleoid creates endpoints and runs business logic as well as stores all your statements/data on the disk out-of-box."
          alt="Console"
        />
      </Grid>
    </Container>
  );
}

export default Steps;
