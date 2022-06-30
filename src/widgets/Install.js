import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import { Box, Fab, Grid, Paper, Tooltip, Typography } from "@mui/material";

function Install() {
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
      <Paper sx={{ p: 2 }}>
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
          <Typography fontFamily={"Trebuchet MS"} fontSize={26}>
            npm i nucleoidjs
          </Typography>
          <Tooltip
            title={copied ? "Copied" : ""}
            leaveDelay={1000}
            onClose={() => setCopied(false)}
          >
            <Fab
              onClick={() => {
                navigator.clipboard.writeText("npm i nucleoidjs");
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
