import { Box, Button, Grid, Typography } from "@mui/material";

function Rocket() {
  return (
    <Grid item sx={{ width: "90%" }}>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundImage: "url(https://cdn.nucleoid.com/media/rocket800.png)",
          backgroundRepeat: "no-repeat",
        }}
        height={557}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "end",
          }}
        >
          <Box width={350} textAlign={"center"}>
            <Typography variant={"h4"} textAlign={"center"}>
              Join our Thinkers Club
            </Typography>
            <Box>
              If you have an opinion, <br />
              you are already a philosopher.
            </Box>
            <br />
            <a
              href={
                "https://github.com/NucleoidJS/Nucleoid/discussions/categories/thinkers-club"
              }
            >
              <img
                src={"https://cdn.nucleoid.com/media/nobel.png"}
                alt={"Nobel"}
              />
            </a>
            <br />
            <br />
            <strong>
              <img
                src={"https://cdn.nucleoid.com/media/pin.png"}
                alt={"Pin"}
                width={25}
              />
            </strong>
            <a href={"https://github.com/NucleoidJS/Nucleoid/discussions/25"}>
              <img
                src={"https://cdn.nucleoid.com/media/discussion-25x500.png"}
                alt={"Discussion 25"}
                width={350}
              />
            </a>
            <a href={"https://github.com/NucleoidJS/Nucleoid/discussions/26"}>
              <img
                src={"https://cdn.nucleoid.com/media/discussion-26x500.png"}
                alt={"Discussion 26"}
                width={350}
              />
            </a>
            <a href={"https://github.com/NucleoidJS/Nucleoid/discussions/28"}>
              <img
                src={"https://cdn.nucleoid.com/media/discussion-28x500.png"}
                alt={"Discussion 28"}
                width={350}
              />
            </a>
            <br />
            <br />
            <Button
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
              Go to Thinkers Club
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}

export default Rocket;
