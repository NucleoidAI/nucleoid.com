import logicalDiagramImage from "../images/logical-diagram.png";
import nucleoidImage from "../images/113933331-sm.png";
import { Box, Grid, Typography } from "@mui/material";

function Bulletin() {
  return (
    <Grid container item justifyContent={"center"}>
      <Box maxWidth={625} bgcolor={"#f9f9f9"} padding={2}>
        <Typography variant={"h6"}>
          Under the hood: Declarative Runtime Environment
        </Typography>
        <img
          src={nucleoidImage}
          alt={"Nucleoid"}
          style={{ float: "left", margin: 10 }}
          width={150}
        />
        <p>
          The declarative runtime environment isolates a behavior definition of
          a program from its technical instructions and executes declarative
          statements, which represent logical intention without carrying any
          technical details. In this paradigm, there is no segregation regarding
          what data is or not, instead approaches how data is related with
          others so that any type of data including business rules can be added
          without requiring any additional actions such as compiling,
          configuring, restarting as a result of plasticity.
        </p>
        <img
          src={logicalDiagramImage}
          alt={"Logical Diagram"}
          style={{
            float: "right",
            margin: 10,
            border: "1px solid #a0a0a0",
          }}
          width={225}
        />
        <p>
          As the name suggests, the runtime system runs as daemon process and
          accepts an entry through operating system. As soon as an entry
          received, JIT compiler compiles to runnable statements, and hand it
          over to the call stack. Execution of the statement consists of 3
          steps; updating state, adjusting dependency graph and storing, and as
          a result, the statement can produce more statements in order to
          provide logical integrity. Those produced statements will be added
          into the call stack as well for further cycles. Alternatively, a
          statement can return value when all logical transactions completed.
        </p>
        <p>
          As a part of plasticity, all types of statements including business
          rules are considered as data so that statements can be added without
          requiring any further actions such as recompiling, restarting etc.
          Learn more at <a href={"https://nucleoid.org/"}>nucleoid.org</a>
        </p>
        <Box sx={{ marginTop: 10 }}>
          <blockquote>
            Origin of name, Nucleoid comes from latin word nucleus-like, which
            is the region in prokaryotic organisms and makes living things, a
            living thing. Maybe, this makes machine a living thing, like
            mentioned in Watson's behaviorism.
          </blockquote>
        </Box>
      </Box>
    </Grid>
  );
}

export default Bulletin;
