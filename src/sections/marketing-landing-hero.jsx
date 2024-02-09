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

import Image from "src/components/image";
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
          mt: 8,
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
              Reasoning Engine
            </Typography>

            <Typography variant="h2" sx={{ my: 2 }}>
              Neuro-Symbolic&nbsp;AI with&nbsp;Declarative&nbsp;Logic
            </Typography>

            <Typography sx={{ color: "text.secondary" }}>
              Reasoning engine with{" "}
              <Link href="https://nucleoid.com/docs">D(L)RE</Link> in JavaScript
              syntax
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
                startIcon={<Iconify width={24} icon="carbon:terminal" />}
                href="https://nucleoid.com/ide/"
              >
                Try it out
              </Button>

              <Stack
                direction="row"
                alignItems="center"
                sx={{ typography: "h6" }}
              >
                <Fab size="medium" sx={{ mr: 1 }}>
                  <Iconify width={24} icon="carbon:play" />
                </Fab>
                See Our Work
              </Stack>
            </Stack>
          </Grid>

          {mdUp && (
            <Grid xs={12} md={6} lg={7}>
              <Image
                visibleByDefault
                disabledEffect
                alt="marketing market"
                src="https://cdn.nucleoid.com/media/6ccfe678-176b-4b5b-ae3c-0e506bdc94ba.png"
                width={958}
                height={615}
                sx={{
                  ml: {
                    xs: "-50%",
                    sm: "-50%",
                    md: "-50%",
                    lg: "-50%",
                    xl: "-30%",
                  },
                }}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
