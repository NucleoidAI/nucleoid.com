import { Grid } from "@mui/material";

const Space = ({ height, mobile = true }) => (
  <Grid
    item
    xs={12}
    sx={{ display: { xs: mobile ? "block" : "none", md: "block" } }}
    height={height || 50}
  />
);

export default Space;
