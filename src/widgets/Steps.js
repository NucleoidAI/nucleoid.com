import { Grid } from "@mui/material";
import Step from "../components/Step";
import codingImage from "../images/coding.png";
import consoleImage from "../images/console.png";
import processingImage from "../images/processing.png";

function Steps() {
  return (
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
  );
}

export default Steps;
