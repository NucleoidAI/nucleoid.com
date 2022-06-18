import Column from "../components/Column";
import { Grid } from "@mui/material";

function Columns() {
  return (
    <>
      <Grid container item xs={12} lg={4} justifyContent={"center"}>
        <Column
          image={"https://cdn.nucleoid.com/media/019-cube.png"}
          title={"Declarative"}
          description={
            "Nucleoid is embedded inside Node.js and renders the very same JavaScript codes and makes the necessary adjustments in the state."
          }
          alt={"Cube"}
        />
      </Grid>
      <Grid container item xs={12} lg={4} justifyContent={"center"}>
        <Column
          image={"https://cdn.nucleoid.com/media/007-AI.png"}
          title={"AI-powered"}
          description={
            "Nucleoid runtime builds the network of statements and adjusts connections as receives more entries so that it lowers number of codes needed."
          }
          alt={"AI"}
        />
      </Grid>
      <Grid container item xs={12} lg={4} justifyContent={"center"}>
        <Column
          image={"https://cdn.nucleoid.com/media/019-database-5.png"}
          title={"Built-in Datastore"}
          description={
            "The runtime tracks and persists each statement so that it doesn't require external data storage like relational DB or NoSQL."
          }
          alt={"Datastore"}
        />
      </Grid>
    </>
  );
}

export default Columns;
