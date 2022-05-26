import { Grid } from "@mui/material";
import React from "react";

const Space = ({ height }) => <Grid item xs={12} height={height || 50} />;

export default Space;
