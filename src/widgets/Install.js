import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Box, Fab, Grid, Paper, Tooltip, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  install: {
    padding: theme.spacing(2),
  },
}));

function Install() {
  const classes = useStyles();
  const [copied, setCopied] = useState(false);

  return (
    <Grid
      container
      item
      xs={12}
      justifyContent={"center"}
      alignItems={"center"}
      height={150}
    >
      <Paper className={classes.install}>
        <Box
          sx={{
            display: "flex",
            width: {
              xs: 350,
              lg: 400,
            },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <ArrowForwardIosIcon />
          <Typography fontFamily={"Trebuchet MS"} variant={"h5"}>
            npm install nucleoidjs
          </Typography>
          <Tooltip
            title={copied ? "Copied" : ""}
            leaveDelay={1000}
            onClose={() => setCopied(false)}
          >
            <Fab
              onClick={() => {
                navigator.clipboard.writeText("npm install nucleoidjs");
                setCopied(true);
              }}
            >
              <ContentCopyIcon />
            </Fab>
          </Tooltip>
        </Box>
      </Paper>
    </Grid>
  );
}

export default Install;
