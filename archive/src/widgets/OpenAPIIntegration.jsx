import { Box, Button, Grid, Typography } from "@mui/material";

function OpenAPIIntegration() {
  return (
    <Grid
      container
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      <Grid item xs={12} md={6}>
        <Typography variant="h4" textAlign="center" sx={{ m: 2 }}>
          OpenAPI Integration
          <br />
          with Nucleoid IDE
          <br />
          <Button
            size="large"
            variant="outlined"
            sx={{
              m: 3,
              px: 2,
              py: 1,
              textTransform: "none",
            }}
            onClick={() =>
              window.open("https://nucleoid.com/ide/sample", "_blank")
            }
          >
            Go to Nucleoid IDE
          </Button>
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box>
          <img
            style={{
              display: "block",
              width: "100%",
              maxWidth: 600,
              height: "11px",
              borderRadius: "3px 3px 0px 0px",
            }}
            src="https://cdn.nucleoid.com/media/frame.png"
            alt="Frame"
          />
        </Box>
        <img
          src="https://cdn.nucleoid.com/media/screenshot-1.png"
          style={{
            display: "block",
            width: "100%",
            maxWidth: 600,
            borderColor: "gray",
            borderStyle: "solid",
            borderWidth: "0px 1px 1px 2px",
            background: "white",
          }}
          alt="Screenshot"
        />
      </Grid>
    </Grid>
  );
}

export default OpenAPIIntegration;
