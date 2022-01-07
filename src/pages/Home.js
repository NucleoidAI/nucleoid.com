import { Box, Container, Grid, Pagination, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Default from "../layouts/Default";
import iceCream from "../images/199699445.jpeg";

export const useStyles = makeStyles(() => ({
  banner: {
    background: "#FFFFFF",
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Default container={false}>
      <Box className={classes.banner}>
        <Container>
          <Grid container direction={"row"} justifyContent={"center"}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box width={500}>
                <Typography fontSize={48}>
                  Data Storage with vanilla JavaScript
                </Typography>
              </Box>
            </Box>
            <Box>
              <img src={iceCream} height={500} />
            </Box>
          </Grid>
        </Container>
      </Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div>xs=8</div>
          </Grid>
          <Grid item xs={4}>
            <div>xs=4</div>
          </Grid>
          <Grid item xs={4}>
            <div>xs=4</div>
          </Grid>
          <Grid item xs={8}>
            <div>xs=8</div>
          </Grid>
        </Grid>
      </Container>
    </Default>
  );
}

export default Home;
