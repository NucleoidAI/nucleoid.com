import GitHubIcon from "@mui/icons-material/GitHub";
import cleanCodeImage from "../images/computing.gif";
import { Button, Grid, Typography } from "@mui/material";

function CleanCode() {
  return (
    <Grid container item alignItems={"center"} justifyContent={"center"}>
      <img src={cleanCodeImage} alt={"Clean Code"} width={250} />
      <Grid
        container
        item
        xs={12}
        lg={6}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography variant={"h4"} sx={{ my: 2 }} textAlign={"center"}>
          Join us to fight <br />
          against Spaghetti Code!
        </Typography>
        <Button
          startIcon={<GitHubIcon />}
          size={"small"}
          variant={"outlined"}
          sx={{
            p: 1,
          }}
          onClick={() =>
            window.open("https://github.com/NucleoidJS/Nucleoid", "_blank")
          }
        >
          Join Discussions
        </Button>
      </Grid>
    </Grid>
  );
}

export default CleanCode;
