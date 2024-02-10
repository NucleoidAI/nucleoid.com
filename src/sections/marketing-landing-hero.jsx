import React from "react";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import { useResponsive } from "src/hooks/use-responsive";

import { bgGradient } from "src/theme/css";

import Iconify from "src/components/iconify";

// ----------------------------------------------------------------------

export default function MarketingLandingHero() {
  const theme = useTheme();

  const mdUp = useResponsive("up", "md");

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: "/assets/background/overlay_1.jpg",
        }),
        overflow: "hidden",
      }}
    >
      <Container
        sx={{
          py: 15,
          display: { md: "flex" },
          alignItems: { md: "center" },
          height: { md: `100vh` },
        }}
      >
        <Grid container columnSpacing={{ xs: 0, md: 10 }}>
          <Grid
            xs={12}
            md={6}
            lg={5}
            sx={{
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography variant="overline" sx={{ color: "secondary.main" }}>
              Natural Language
            </Typography>

            <Typography variant="h2" sx={{ my: 2 }}>
              Low-code&nbsp;Platform for&nbsp;Node.js
            </Typography>

            <Typography sx={{ color: "text.secondary" }}>
              Turn your business logic to fully functional application with{" "}
              <Link href="https://nucleoid.com/docs">Neuro-Symbolic AI</Link>
            </Typography>

            <Stack
              spacing={3}
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "center", md: "unset" }}
              justifyContent={{ xs: "center", md: "unset" }}
              sx={{ mt: 5 }}
            >
              <Button
                variant="contained"
                color="inherit"
                size="large"
                startIcon={<Iconify width={24} icon="carbon:document" />}
                href="https://nucleoid.com/ide/"
              >
                Go to Docs
              </Button>

              <Stack
                direction="row"
                alignItems="center"
                sx={{ typography: "h6" }}
              >
                <Fab size="medium" sx={{ mr: 1 }}>
                  <Iconify width={24} icon="carbon:play" />
                </Fab>
                Try it out
              </Stack>
            </Stack>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={7}>
              <Grid item>
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
                  poster="https://cdn.nucleoid.com/media/thumbnail-1.png"
                >
                  <source src="https://cdn.nucleoid.com/media/prompt-1.webm" />
                </video>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
