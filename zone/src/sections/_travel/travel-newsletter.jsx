import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';

import { useResponsive } from 'src/hooks/use-responsive';

import { bgGradient } from 'src/theme/css';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export default function TravelNewsletter() {
  const theme = useTheme();

  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        ...bgGradient({
          startColor: `${alpha(theme.palette.grey[900], 0.88)}`,
          endColor: `${alpha(theme.palette.grey[900], 0.88)}`,
          imgUrl: '/assets/images/travel/travel_newsletter.jpg',
          ...(mdUp && {
            direction: 'to right',
            startColor: `${alpha(theme.palette.grey[900], 0)} 0%`,
            endColor: `${alpha(theme.palette.grey[900], 1)} 50%`,
            imgUrl: '/assets/images/travel/travel_newsletter.jpg',
          }),
        }),
        py: 10,
        backgroundSize: 'cover, auto 100%',
        backgroundPosition: { xs: 'center', md: 'center, left' },
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="flex-end">
          <Grid xs={12} md={5}>
            <Stack
              spacing={3}
              sx={{
                color: 'common.white',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              <Typography variant="h2">Newsletter</Typography>

              <Typography>
                Sign up now to receive hot special offers
                <br /> and information about the best tours!
              </Typography>

              <TextField
                fullWidth
                hiddenLabel
                placeholder="Enter your email"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        size="large"
                        color="primary"
                        variant="contained"
                        sx={{ minWidth: 48, px: 0 }}
                      >
                        <Iconify icon="carbon:chevron-right" />
                      </Button>
                    </InputAdornment>
                  ),
                  sx: { pr: 0.5, color: 'common.white' },
                }}
                sx={{ my: 5 }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
