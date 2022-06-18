import { Box, Grid, Typography } from "@mui/material";

function Feature({ image, primary, secondary, justify, xs, lg }) {
  return (
    <Grid
      container
      item
      xs={12}
      lg={6}
      alignContent={"center"}
      sx={{
        padding: 4,
        display: { xs: xs ? "flex" : "none", lg: lg ? "flex" : "none" },
        justifyContent: { xs: "center", lg: justify },
      }}
    >
      {image && (
        <>
          <img src={image} alt={"Sunset"} width={100} />
          <Box width={10} />
        </>
      )}
      {primary && (
        <>
          <Box width={10} />
          <Box maxWidth={325}>
            <Typography variant={"h5"}>{primary}</Typography>
            <Typography>{secondary}</Typography>
          </Box>
        </>
      )}
    </Grid>
  );
}

export default Feature;
