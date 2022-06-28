import { Grid } from "@mui/material";
import Step from "../components/Step";

function Steps() {
  return (
    <Grid container item xs={12} justifyContent={"center"}>
      <Step
        image={"https://cdn.nucleoid.com/media/coding.png"}
        bullet={"I."}
        title={"Write your business logic in JavaScript"}
        description={
          "Nucleoid runtime accepts business logic in vanilla JS just like any other codes in Node.js but without requiring to install database or anything else."
        }
        alt={"Coding"}
      />
      <Step
        image={"https://cdn.nucleoid.com/media/processing.png"}
        bullet={"II."}
        title={"Nucleoid renders your codes with AI"}
        description={
          "The runtime renders the JavaScript codes just-in-time and makes the necessary adjustments."
        }
        alt={"Processing"}
      />
      <Step
        image={"https://cdn.nucleoid.com/media/console.png"}
        bullet={"III."}
        title={"Creates APIs with built-in datastore"}
        description={
          "As a result, Nucleoid creates endpoints and runs business logic as well a stores all your statements/data on the disk out-of-box."
        }
        alt={"Console"}
      />
    </Grid>
  );
}

export default Steps;
