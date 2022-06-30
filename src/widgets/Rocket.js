import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Button, Grid, Typography } from "@mui/material";

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant={"h4"} textAlign={"center"}>
            Join what is next
            <br />
            for coding! &#9889;
            <br />
          </Typography>
          <br />
          <Button
            startIcon={<GitHubIcon />}
            size={"large"}
            variant={"outlined"}
            sx={{
              px: 2,
              py: 1,
              textTransform: "none",
            }}
            onClick={() =>
              window.open(
                "https://github.com/NucleoidJS/Nucleoid/discussions/categories/thinkers-club",
                "_blank"
              )
            }
          >
            Join Thinkers Club
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default Rocket;
