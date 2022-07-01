import GitHubIcon from "@mui/icons-material/GitHub";
import capeImage from "../images/cape.png";
import cleanCodeImage from "../images/computing.gif";
import { Button, Grid, Typography } from "@mui/material";

function CleanCode() {
  return (
    <Grid container item alignItems={"center"} justifyContent={"center"}>
      <img
        src={cleanCodeImage}
        alt={"Clean Code"}
        width={300}
        style={{ border: "4px solid #d3d3d3" }}
      />
      <Grid
        container
        item
        xs={12}
        lg={5}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant={"h4"} sx={{ my: 1 }} textAlign={"center"}>
          Fight against
          <br />
          Spaghetti Code!
        </Typography>
        <Typography width={325} sx={{ my: 1 }} textAlign={"center"}>
          You surely witness bad code around you, we are working what is next
          for coding!
        </Typography>
        <img src={capeImage} alt={"Cape"} width={75} style={{ margin: 8 }} />
        <Button
          startIcon={<GitHubIcon />}
          size={"small"}
          variant={"outlined"}
          sx={{
            p: 1,
            m: 1,
          }}
          onClick={() =>
            window.open(
              "https://github.com/NucleoidJS/Nucleoid/discussions",
              "_blank"
            )
          }
        >
          Join Discussions
        </Button>
      </Grid>
    </Grid>
  );
}

export default CleanCode;
