import { Box, Grid, Typography } from "@mui/material";

function Rocket() {
  return (
    <Grid item>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundImage: "url(https://cdn.nucleoid.com/media/rocket800.png)",
        }}
        width={800}
        height={557}
      >
        <Typography variant={"h4"} textAlign={"center"}>
          Join what is next
          <br />
          for coding! &#9889;
          <br />
        </Typography>
      </Box>
    </Grid>
  );
}

export default Rocket;
