import { Box, Button, Grid, Typography } from "@mui/material";

function Prompt() {
  return (
    <Grid
      container
      sx={{
        background: "#313a40",
        minHeight: 500,
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item>
        <Box height={50} sx={{ display: { xs: "block", md: "none" } }} />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ fontSize: { xs: 38, md: 42 } }}
              textAlign={"center"}
              color={"#e5e5e5"}
            >
              Low-code Framework
              <br />
              for Node.js
            </Typography>
            <Typography
              sx={{ fontSize: { xs: 22, md: 24 } }}
              textAlign={"center"}
              color={"#9b9b9b"}
            >
              Build your APIs with the help of AI
              <br />
              and built-in datastore
            </Typography>
            <Button
              variant={"contained"}
              onClick={() => window.location.assign("/docs/")}
              color={"inherit"}
              size={"large"}
              sx={{
                my: 3,
              }}
            >
              Learn more
            </Button>
          </Box>
        </Box>
      </Grid>
      <Box
        width={75}
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      />
      <Grid item sx={{ padding: 2 }}>
        <img
          style={{
            display: "block",
            width: "100%",
            maxWidth: 600,
            height: "11px",
            borderRadius: "3px 3px 0px 0px",
          }}
          src={"https://cdn.nucleoid.com/media/frame.png"}
          alt={"Frame"}
        />
        <video
          loop
          autoPlay
          muted
          style={{
            display: "block",
            width: "100%",
            maxWidth: 600,
            height: "100%",
            maxHeight: 360,
            borderColor: "#464646",
            borderStyle: "solid",
            borderWidth: "0px 1px 1px 2px",
            background: "#464646",
          }}
          poster={"https://cdn.nucleoid.com/media/thumbnail-1.png"}
        >
          <source src={"https://cdn.nucleoid.com/media/prompt-1.webm"} />
        </video>
      </Grid>
    </Grid>
  );
}

export default Prompt;
