import React from "react";

import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Container from "@mui/material/Container";

import { useResponsive } from "../hooks/use-responsive";

// ----------------------------------------------------------------------

export default function Chat() {
  const mdUp = useResponsive("up", "md");
  return (
    <Container
      sx={{
        mb: 12,
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
          }}
        >
          {mdUp && (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <video
              src="https://cdn.nucleoid.com/media/a229559c-ef13-40d2-b188-5ff2451ccbee.mp4"
              controls
            />
          )}
          {!mdUp && (
            // eslint-disable-next-line jsx-a11y/media-has-caption
            <video
              width="100%"
              height="auto"
              src="https://cdn.nucleoid.com/media/a229559c-ef13-40d2-b188-5ff2451ccbee.mp4"
              controls
            />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            size="large"
            variant="outlined"
            onClick={() => {
              window.location.assign("/ide/chat");
            }}
            sx={{
              mx: 1,
              textTransform: "none",
              color: "white",
              display: { xs: "none", md: "block" },
            }}
          >
            Go to Nucleoid Chat
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
